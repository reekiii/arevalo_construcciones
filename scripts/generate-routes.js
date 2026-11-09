// Prerender SEO: genera un index.html por ruta e idioma (es + /ca) con su
// title, description, canonical, hreflang y og:*; y genera dist/sitemap.xml.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BASE_ROUTES, getSeo, urlFor } from '../src/data/seo.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const esc = (str) =>
  String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const templatePath = path.join(distDir, 'index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

function hreflangBlock(basePath) {
  return [
    '<!--HREFLANG:START-->',
    `<link rel="alternate" hreflang="es" href="${urlFor(basePath, 'es')}" />`,
    `<link rel="alternate" hreflang="ca" href="${urlFor(basePath, 'ca')}" />`,
    `<link rel="alternate" hreflang="x-default" href="${urlFor(basePath, 'es')}" />`,
    '<!--HREFLANG:END-->'
  ].join('\n    ');
}

function render(basePath, lang) {
  const seo = getSeo(basePath, lang);
  if (!seo) throw new Error(`Sin datos SEO para ${basePath} (${lang})`);
  const canonical = urlFor(basePath, lang);
  const title = esc(seo.title);
  const desc = esc(seo.desc);

  let html = template;
  const replace = (re, value) => {
    if (!re.test(html)) throw new Error(`Patrón no encontrado en index.html: ${re}`);
    html = html.replace(re, value);
  };

  replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
  replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/, `<meta name="description" content="${desc}" />`);
  replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`);
  replace(/<!--HREFLANG:START-->[\s\S]*?<!--HREFLANG:END-->/, hreflangBlock(basePath));
  replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${title}" />`);
  replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${desc}" />`);
  replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${canonical}" />`);
  replace(
    /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:locale" content="${lang === 'ca' ? 'ca_ES' : 'es_ES'}" />`
  );
  replace(
    /<meta\s+property="og:locale:alternate"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:locale:alternate" content="${lang === 'ca' ? 'es_ES' : 'ca_ES'}" />`
  );
  return html;
}

let count = 0;
for (const basePath of BASE_ROUTES) {
  for (const lang of ['es', 'ca']) {
    const rel = lang === 'ca' ? path.join('ca', basePath) : basePath;
    const outDir = path.join(distDir, rel);
    fs.mkdirSync(outDir, { recursive: true });
    // El index.html raíz (es, "/") se reescribe también para normalizar hreflang
    fs.writeFileSync(path.join(outDir, 'index.html'), render(basePath, lang), 'utf-8');
    count++;
  }
}
console.log(`[SEO Prerender] ${count} páginas generadas (es + ca).`);

// Sitemap con alternativas hreflang
const today = new Date().toISOString().slice(0, 10);
const priority = (p) => (p === '/' ? '1.0' : p.startsWith('/zonas/') ? '0.7' : p === '/contacto' || p === '/servicios' ? '0.9' : '0.8');
const urls = [];
for (const basePath of BASE_ROUTES) {
  for (const lang of ['es', 'ca']) {
    urls.push(`  <url>
    <loc>${urlFor(basePath, lang)}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${urlFor(basePath, 'es')}" />
    <xhtml:link rel="alternate" hreflang="ca" href="${urlFor(basePath, 'ca')}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(basePath, 'es')}" />
    <lastmod>${today}</lastmod>
    <priority>${lang === 'ca' ? (Number(priority(basePath)) - 0.1).toFixed(1) : priority(basePath)}</priority>
  </url>`);
  }
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf-8');
console.log(`[SEO Prerender] sitemap.xml con ${urls.length} URLs.`);
