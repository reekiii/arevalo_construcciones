/**
 * Standalone QR Code Generator (Nayuki-based pure JS implementation, 0 dependencies)
 * Generates vector SVG for Arévalo Construcciones van / vehicle vinyl printing.
 */

// QR Code Generator core
const QrCode = (() => {
  class QrSegment {
    constructor(mode, numChars, bitData) {
      this.mode = mode;
      this.numChars = numChars;
      this.bitData = bitData;
    }
    static makeBytes(data) {
      let bb = [];
      for (let b of data) {
        for (let i = 7; i >= 0; i--) bb.push((b >>> i) & 1);
      }
      return new QrSegment(QrSegment.Mode.BYTE, data.length, bb);
    }
  }
  QrSegment.Mode = {
    BYTE: { modeBits: 0x4, numBitsCharCount: [8, 16, 16] }
  };

  class QrCode {
    constructor(version, errorCorrectionLevel, dataCodewords, msk) {
      this.version = version;
      this.errorCorrectionLevel = errorCorrectionLevel;
      this.size = version * 4 + 17;
      this.modules = [];
      this.isFunction = [];
      for (let y = 0; y < this.size; y++) {
        this.modules.push(new Array(this.size).fill(false));
        this.isFunction.push(new Array(this.size).fill(false));
      }
      this.drawFunctionPatterns();
      const allCodewords = this.addEccAndInterleave(dataCodewords);
      this.drawCodewords(allCodewords);
      if (msk === -1) {
        let minPenalty = 1e9;
        let bestMask = 0;
        for (let i = 0; i < 8; i++) {
          this.applyMask(i);
          this.drawFormatBits(i);
          const penalty = this.getPenaltyScore();
          if (penalty < minPenalty) {
            minPenalty = penalty;
            bestMask = i;
          }
          this.applyMask(i); // unmask
        }
        msk = bestMask;
      }
      this.mask = msk;
      this.applyMask(msk);
      this.drawFormatBits(msk);
    }

    getModule(x, y) {
      if (x < 0 || x >= this.size || y < 0 || y >= this.size) return false;
      return this.modules[y][x];
    }

    setFunctionModule(x, y, isDark) {
      this.modules[y][x] = isDark;
      this.isFunction[y][x] = true;
    }

    drawFunctionPatterns() {
      for (let i = 0; i < this.size; i++) {
        this.setFunctionModule(6, i, i % 2 === 0);
        this.setFunctionModule(i, 6, i % 2 === 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(this.size - 4, 3);
      this.drawFinderPattern(3, this.size - 4);

      const alignPos = QrCode.ALIGNMENT_PATTERN_BASE_ROW[this.version];
      const numAlign = alignPos.length;
      for (let i = 0; i < numAlign; i++) {
        for (let j = 0; j < numAlign; j++) {
          if (
            (i === 0 && j === 0) ||
            (i === 0 && j === numAlign - 1) ||
            (i === numAlign - 1 && j === 0)
          )
            continue;
          this.drawAlignmentPattern(alignPos[i], alignPos[j]);
        }
      }

      this.drawFormatBits(0);
      this.drawVersion();
    }

    drawFinderPattern(x, y) {
      for (let dy = -4; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dy));
          const xx = x + dx;
          const yy = y + dy;
          if (xx >= 0 && xx < this.size && yy >= 0 && yy < this.size) {
            this.setFunctionModule(xx, yy, dist !== 2 && dist !== 4);
          }
        }
      }
    }

    drawAlignmentPattern(x, y) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
        }
      }
    }

    drawFormatBits(mask) {
      const data = (this.errorCorrectionLevel.formatBits << 3) | mask;
      let rem = data;
      for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
      const bits = ((data << 10) | rem) ^ 0x5412;

      for (let i = 0; i <= 5; i++) this.setFunctionModule(8, i, ((bits >>> i) & 1) !== 0);
      this.setFunctionModule(8, 7, ((bits >>> 6) & 1) !== 0);
      this.setFunctionModule(8, 8, ((bits >>> 7) & 1) !== 0);
      this.setFunctionModule(7, 8, ((bits >>> 8) & 1) !== 0);
      for (let i = 9; i < 15; i++) this.setFunctionModule(14 - i, 8, ((bits >>> i) & 1) !== 0);

      for (let i = 0; i < 8; i++) this.setFunctionModule(this.size - 1 - i, 8, ((bits >>> i) & 1) !== 0);
      for (let i = 8; i < 15; i++) this.setFunctionModule(8, this.size - 15 + i, ((bits >>> i) & 1) !== 0);
      this.setFunctionModule(8, this.size - 8, true);
    }

    drawVersion() {
      if (this.version < 7) return;
      let rem = this.version;
      for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1f25);
      const bits = (this.version << 12) | rem;
      for (let i = 0; i < 18; i++) {
        const bit = ((bits >>> i) & 1) !== 0;
        const a = this.size - 11 + (i % 3);
        const b = Math.floor(i / 3);
        this.setFunctionModule(a, b, bit);
        this.setFunctionModule(b, a, bit);
      }
    }

    addEccAndInterleave(data) {
      const ver = this.version;
      const ecl = this.errorCorrectionLevel;
      const numEccBlock = QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
      const blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
      const numShortBlock = numEccBlock - (QrCode.NUM_RAW_DATA_MODULES[ver] / 8 % numEccBlock);
      const shortBlockLen = Math.floor(QrCode.NUM_RAW_DATA_MODULES[ver] / 8 / numEccBlock) - blockEccLen;

      let blocks = [];
      const rs = QrCode.reedSolomonComputeDivisor(blockEccLen);
      for (let i = 0, k = 0; i < numEccBlock; i++) {
        const datLen = shortBlockLen + (i < numShortBlock ? 0 : 1);
        const dat = data.slice(k, k + datLen);
        k += datLen;
        const ecc = QrCode.reedSolomonComputeRemainder(dat, rs);
        blocks.push({ data: dat, ecc: ecc });
      }

      let res = [];
      for (let i = 0; i <= shortBlockLen; i++) {
        for (let j = 0; j < numEccBlock; j++) {
          if (i < blocks[j].data.length) res.push(blocks[j].data[i]);
        }
      }
      for (let i = 0; i < blockEccLen; i++) {
        for (let j = 0; j < numEccBlock; j++) {
          res.push(blocks[j].ecc[i]);
        }
      }
      return res;
    }

    drawCodewords(data) {
      let i = 0;
      for (let right = this.size - 1; right >= 1; right -= 2) {
        if (right === 6) right = 5;
        for (let vert = 0; vert < this.size; vert++) {
          for (let j = 0; j < 2; j++) {
            const x = right - j;
            const upward = ((right + 1) & 2) === 0;
            const y = upward ? this.size - 1 - vert : vert;
            if (!this.isFunction[y][x] && i < data.length * 8) {
              this.modules[y][x] = ((data[i >>> 3] >>> (7 - (i & 7))) & 1) !== 0;
              i++;
            }
          }
        }
      }
    }

    applyMask(mask) {
      for (let y = 0; y < this.size; y++) {
        for (let x = 0; x < this.size; x++) {
          if (this.isFunction[y][x]) continue;
          let invert = false;
          switch (mask) {
            case 0: invert = (x + y) % 2 === 0; break;
            case 1: invert = y % 2 === 0; break;
            case 2: invert = x % 3 === 0; break;
            case 3: invert = (x + y) % 3 === 0; break;
            case 4: invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0; break;
            case 5: invert = ((x * y) % 2) + ((x * y) % 3) === 0; break;
            case 6: invert = (((x * y) % 2) + ((x * y) % 3)) % 2 === 0; break;
            case 7: invert = (((x + y) % 2) + ((x * y) % 3)) % 2 === 0; break;
          }
          if (invert) this.modules[y][x] = !this.modules[y][x];
        }
      }
    }

    getPenaltyScore() {
      let result = 0;
      const size = this.size;
      for (let y = 0; y < size; y++) {
        let runColor = false;
        let runX = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < size; x++) {
          if (this.modules[y][x] === runColor) {
            runX++;
            if (runX === 5) result += 3;
            else if (runX > 5) result++;
          } else {
            QrCode.addRunToHistory(runX, runHistory);
            if (!runColor && QrCode.hasFinderLikePattern(runHistory)) result += 40;
            runColor = this.modules[y][x];
            runX = 1;
          }
        }
        QrCode.addRunToHistory(runX, runHistory);
        if (runColor) QrCode.addRunToHistory(0, runHistory);
        if (QrCode.hasFinderLikePattern(runHistory)) result += 40;
      }
      for (let x = 0; x < size; x++) {
        let runColor = false;
        let runY = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < size; y++) {
          if (this.modules[y][x] === runColor) {
            runY++;
            if (runY === 5) result += 3;
            else if (runY > 5) result++;
          } else {
            QrCode.addRunToHistory(runY, runHistory);
            if (!runColor && QrCode.hasFinderLikePattern(runHistory)) result += 40;
            runColor = this.modules[y][x];
            runY = 1;
          }
        }
        QrCode.addRunToHistory(runY, runHistory);
        if (runColor) QrCode.addRunToHistory(0, runHistory);
        if (QrCode.hasFinderLikePattern(runHistory)) result += 40;
      }
      for (let y = 0; y < size - 1; y++) {
        for (let x = 0; x < size - 1; x++) {
          const color = this.modules[y][x];
          if (
            color === this.modules[y][x + 1] &&
            color === this.modules[y + 1][x] &&
            color === this.modules[y + 1][x + 1]
          )
            result += 3;
        }
      }
      let total = 0;
      for (let row of this.modules) {
        for (let color of row) if (color) total++;
      }
      const k = Math.abs(Math.round((total * 100) / (size * size) - 50));
      result += Math.floor(k / 5) * 10;
      return result;
    }

    static addRunToHistory(run, history) {
      history.pop();
      history.unshift(run);
    }

    static hasFinderLikePattern(h) {
      const n = h[1];
      return n > 0 && h[2] === n && h[3] === 3 * n && h[4] === n && h[5] === n && (h[0] >= 4 * n || h[6] >= 4 * n);
    }

    static encodeText(text, ecl) {
      const seg = QrSegment.makeBytes(Buffer.from(text, 'utf-8'));
      return QrCode.encodeSegments([seg], ecl);
    }

    static encodeSegments(segs, ecl) {
      for (let version = 1; version <= 40; version++) {
        const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;
        let totalBits = 0;
        for (let seg of segs) {
          totalBits += 4 + seg.mode.numBitsCharCount[Math.floor((version + 7) / 17)] + seg.bitData.length;
        }
        if (totalBits <= dataCapacityBits) {
          let bb = [];
          for (let seg of segs) {
            for (let i = 3; i >= 0; i--) bb.push((seg.mode.modeBits >>> i) & 1);
            const cc = seg.mode.numBitsCharCount[Math.floor((version + 7) / 17)];
            for (let i = cc - 1; i >= 0; i--) bb.push((seg.numChars >>> i) & 1);
            for (let b of seg.bitData) bb.push(b);
          }
          const terminatorBits = Math.min(4, dataCapacityBits - bb.length);
          for (let i = 0; i < terminatorBits; i++) bb.push(0);
          while (bb.length % 8 !== 0) bb.push(0);
          let pad = 0xec;
          while (bb.length < dataCapacityBits) {
            for (let i = 7; i >= 0; i--) bb.push((pad >>> i) & 1);
            pad = pad === 0xec ? 0x11 : 0xec;
          }
          let bytes = [];
          for (let i = 0; i < bb.length; i += 8) {
            let val = 0;
            for (let j = 0; j < 8; j++) val = (val << 1) | bb[i + j];
            bytes.push(val);
          }
          return new QrCode(version, ecl, bytes, -1);
        }
      }
      throw new Error('Data too long for QR Code');
    }

    static getNumDataCodewords(ver, ecl) {
      return (
        Math.floor(QrCode.NUM_RAW_DATA_MODULES[ver] / 8) -
        QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver]
      );
    }

    static reedSolomonComputeDivisor(degree) {
      let result = new Array(degree).fill(0);
      result[degree - 1] = 1;
      let root = 1;
      for (let i = 0; i < degree; i++) {
        for (let j = 0; j < degree; j++) {
          result[j] = QrCode.reedSolomonMultiply(result[j], root);
          if (j + 1 < degree) result[j] ^= result[j + 1];
        }
        root = QrCode.reedSolomonMultiply(root, 0x02);
      }
      return result;
    }

    static reedSolomonComputeRemainder(data, divisor) {
      let result = new Array(divisor.length).fill(0);
      for (let b of data) {
        const factor = b ^ result.shift();
        result.push(0);
        for (let i = 0; i < divisor.length; i++) {
          result[i] ^= QrCode.reedSolomonMultiply(divisor[i], factor);
        }
      }
      return result;
    }

    static reedSolomonMultiply(x, y) {
      let z = 0;
      for (let i = 7; i >= 0; i--) {
        z = (z << 1) ^ ((z >>> 7) * 0x11d);
        z ^= ((y >>> i) & 1) * x;
      }
      return z;
    }

    toSvg(border = 4, fgColor = '#0F172A', bgColor = '#FFFFFF') {
      const fullSize = this.size + border * 2;
      let path = '';
      for (let y = 0; y < this.size; y++) {
        for (let x = 0; x < this.size; x++) {
          if (this.modules[y][x]) {
            path += `M${x + border},${y + border}h1v1h-1z `;
          }
        }
      }
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${fullSize} ${fullSize}" shape-rendering="crispEdges">
  <rect width="${fullSize}" height="${fullSize}" fill="${bgColor}"/>
  <path d="${path}" fill="${fgColor}"/>
</svg>`;
    }
  }

  QrCode.Ecc = {
    LOW: { ordinal: 0, formatBits: 1 },
    MEDIUM: { ordinal: 1, formatBits: 0 },
    QUARTILE: { ordinal: 2, formatBits: 3 },
    HIGH: { ordinal: 3, formatBits: 2 }
  };

  QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
    [null, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [null, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [null, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [null, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ];

  QrCode.ECC_CODEWORDS_PER_BLOCK = [
    [null, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [null, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [null, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [null, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ];

  QrCode.NUM_RAW_DATA_MODULES = [
    null, 208, 359, 567, 807, 1079, 1383, 1568, 1936, 2336, 2768, 3232, 3728, 4256, 4651, 5243, 5867, 6523,
    7211, 7931, 8683, 9252, 10068, 10916, 11796, 12708, 13652, 14628, 15371, 16411, 17483, 18587, 19723, 20891,
    22091, 23008, 24272, 25568, 26896, 28256, 29648
  ];

  QrCode.ALIGNMENT_PATTERN_BASE_ROW = [
    [], [], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34],
    [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62],
    [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90],
    [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110],
    [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126],
    [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142],
    [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154],
    [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166],
    [6, 30, 58, 86, 114, 142, 170]
  ];

  return QrCode;
})();

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

const URL = 'https://www.arevaloconstrucciones.com/';

// Generate QR Code with HIGH Error Correction (Level H - 30% recovery)
// This is optimal for vehicle vinyl lettering in case of dust, minor scratches or distant scanning.
const qr = QrCode.encodeText(URL, QrCode.Ecc.HIGH);

// 1. Pure QR SVG (standard black on transparent/white)
const pureSvg = qr.toSvg(4, '#0F172A', '#FFFFFF');
const pureSvgPath = path.join(publicDir, 'qr-furgoneta-arevalo.svg');
fs.writeFileSync(pureSvgPath, pureSvg, 'utf-8');
console.log(`[QR Generator] Generated pure vector SVG at: ${pureSvgPath}`);

// 2. High-contrast vinyl version for dark vehicle bodies (white on dark slate)
const darkVinylSvg = qr.toSvg(4, '#FFFFFF', 'transparent');
const darkVinylPath = path.join(publicDir, 'qr-furgoneta-arevalo-blanco.svg');
fs.writeFileSync(darkVinylPath, darkVinylSvg, 'utf-8');
console.log(`[QR Generator] Generated white cut-out vinyl SVG at: ${darkVinylPath}`);

// 3. Ready-to-print Commercial Van Stamping Badge (Tarjeta de furgoneta para rotulación)
// Includes Arévalo branding, phone, and call to action for passerby drivers & neighbors
const moduleSize = 12;
const qrPx = (qr.size + 8) * moduleSize;
const cardWidth = 600;
const cardHeight = 820;
const qrOffsetX = (cardWidth - qrPx) / 2;
const qrOffsetY = 140;

let qrPathData = '';
for (let y = 0; y < qr.size; y++) {
  for (let x = 0; x < qr.size; x++) {
    if (qr.modules[y][x]) {
      qrPathData += `M${(x + 4) * moduleSize},${(y + 4) * moduleSize}h${moduleSize}v${moduleSize}h-${moduleSize}z `;
    }
  }
}

const vanBadgeSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${cardWidth} ${cardHeight}" width="${cardWidth}" height="${cardHeight}">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&amp;family=Inter:wght@500;600;700&amp;display=swap');
      .title { font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-weight: 900; fill: #004097; text-anchor: middle; letter-spacing: 2px; }
      .subtitle { font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-weight: 700; fill: #D97706; text-anchor: middle; letter-spacing: 4px; font-size: 14px; }
      .cta-main { font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-weight: 800; fill: #0F172A; text-anchor: middle; font-size: 20px; letter-spacing: 1px; }
      .cta-sub { font-family: 'Inter', Arial, sans-serif; font-weight: 600; fill: #475569; text-anchor: middle; font-size: 15px; }
      .phone { font-family: 'Montserrat', Arial, sans-serif; font-weight: 900; fill: #004097; text-anchor: middle; font-size: 28px; letter-spacing: 1px; }
      .web { font-family: 'Inter', Arial, sans-serif; font-weight: 700; fill: #D97706; text-anchor: middle; font-size: 16px; letter-spacing: 1px; }
    </style>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Background Card -->
  <rect width="${cardWidth}" height="${cardHeight}" fill="#F8FAFC" rx="24" stroke="#CBD5E1" stroke-width="4"/>

  <!-- Top Header Banner -->
  <rect x="0" y="0" width="${cardWidth}" height="115" fill="#004097" rx="24"/>
  <rect x="0" y="85" width="${cardWidth}" height="30" fill="#004097"/> <!-- square bottom corners of top header -->
  <text x="${cardWidth / 2}" y="52" class="title" font-size="28" fill="#FFFFFF">ARÉVALO CONSTRUCCIONES</text>
  <text x="${cardWidth / 2}" y="85" class="subtitle" fill="#FBBF24">REFORMAS INTEGRALES &amp; OBRA</text>

  <!-- QR Outer Border with Shadow -->
  <rect x="${qrOffsetX - 10}" y="${qrOffsetY - 10}" width="${qrPx + 20}" height="${qrPx + 20}" fill="#FFFFFF" rx="16" filter="url(#shadow)" stroke="#E2E8F0" stroke-width="2"/>
  
  <!-- QR Code Matrix -->
  <g transform="translate(${qrOffsetX}, ${qrOffsetY})">
    <rect width="${qrPx}" height="${qrPx}" fill="#FFFFFF" rx="8"/>
    <path d="${qrPathData}" fill="#0F172A"/>
  </g>

  <!-- Middle CTA -->
  <text x="${cardWidth / 2}" y="${qrOffsetY + qrPx + 45}" class="cta-main">📱 ESCANEA CON TU MÓVIL</text>
  <text x="${cardWidth / 2}" y="${qrOffsetY + qrPx + 72}" class="cta-sub">Visita nuestras obras y pide tu presupuesto</text>

  <!-- Divider Line -->
  <line x1="60" y1="${qrOffsetY + qrPx + 95}" x2="${cardWidth - 60}" y2="${qrOffsetY + qrPx + 95}" stroke="#E2E8F0" stroke-width="2"/>

  <!-- Footer Contact Info -->
  <text x="${cardWidth / 2}" y="${qrOffsetY + qrPx + 140}" class="phone">📞 622 03 27 04</text>
  <text x="${cardWidth / 2}" y="${qrOffsetY + qrPx + 172}" class="web">www.arevaloconstrucciones.com</text>
</svg>`;

const vanBadgePath = path.join(publicDir, 'rotulacion-furgoneta-arevalo.svg');
fs.writeFileSync(vanBadgePath, vanBadgeSvg, 'utf-8');
console.log(`[QR Generator] Generated ready-to-print rotulación banner at: ${vanBadgePath}`);
