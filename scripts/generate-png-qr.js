import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

// CRC32
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  crcTable[n] = c;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(4 + 4 + len + 4);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = chunk.subarray(4, 8 + len);
  chunk.writeUInt32BE(crc32(typeAndData), 8 + len);
  return chunk;
}

function createPngFromMatrix(matrix, scale = 50, border = 4) {
  const size = matrix.length;
  const fullModules = size + border * 2;
  const width = fullModules * scale;
  const height = width;

  const rowLen = 1 + width;
  const rawData = Buffer.alloc(rowLen * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowLen;
    rawData[rowOffset] = 0;
    const modY = Math.floor(y / scale) - border;
    for (let x = 0; x < width; x++) {
      const modX = Math.floor(x / scale) - border;
      let isDark = false;
      if (modX >= 0 && modX < size && modY >= 0 && modY < size) {
        isDark = matrix[modY][modX];
      }
      rawData[rowOffset + 1 + x] = isDark ? 0 : 255;
    }
  }

  const compressed = zlib.deflateSync(rawData, { level: 9 });
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 0; // grayscale
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', compressed),
    makeChunk('IEND', Buffer.alloc(0))
  ]);
}

// Read modules from generate-qr by regex on the path
const qrSvg = fs.readFileSync(path.join(publicDir, 'qr-furgoneta-arevalo.svg'), 'utf-8');
const viewBoxMatch = qrSvg.match(/viewBox="0 0 (\d+) (\d+)"/);
const fullSize = parseInt(viewBoxMatch[1], 10);
const border = 4;
const size = fullSize - border * 2;

// Reconstruct matrix from SVG path
const matrix = [];
for (let y = 0; y < size; y++) matrix.push(new Array(size).fill(false));

const pathMatches = qrSvg.matchAll(/M(\d+),(\d+)h1v1h-1z/g);
for (let m of pathMatches) {
  const x = parseInt(m[1], 10) - border;
  const y = parseInt(m[2], 10) - border;
  if (x >= 0 && x < size && y >= 0 && y < size) {
    matrix[y][x] = true;
  }
}

// Generate Ultra-HD 2000x2000px PNG (scale 50 * 37 = 1850px)
const pngBuffer = createPngFromMatrix(matrix, 60, 4);
const pngPath = path.join(publicDir, 'qr-furgoneta-arevalo-hd.png');
fs.writeFileSync(pngPath, pngBuffer);
console.log(`[PNG SUCCESS] Ultra-HD PNG created at: ${pngPath} (${pngBuffer.length} bytes)`);

const brainDir = 'C:\\Users\\ikerd\\.gemini\\antigravity\\brain\\ff62135c-981d-4a04-8e18-22b725f76de3';
if (fs.existsSync(brainDir)) {
  fs.writeFileSync(path.join(brainDir, 'qr-furgoneta-arevalo-hd.png'), pngBuffer);
  console.log('[PNG SUCCESS] Copied to brain artifacts.');
}
