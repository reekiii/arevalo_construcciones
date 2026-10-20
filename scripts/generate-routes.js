import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  {
    path: 'servicios',
    canonical: 'https://www.arevaloconstrucciones.com/servicios',
    title: 'Servicios de Reformas y Construcción en El Vendrell | Arévalo Construcciones',
    description: 'Especialistas en reformas de baños, cambio de bañera por plato de ducha, reformas de cocinas, suelos porcelánicos y reformas integrales en Baix Penedès, Valls y Tarragona.',
  },
  {
    path: 'proyectos',
    canonical: 'https://www.arevaloconstrucciones.com/proyectos',
    title: 'Proyectos y Obras Realizadas | Arévalo Construcciones El Vendrell',
    description: 'Galería de trabajos reales de reformas de baños, platos de ducha de obra, piscinas, terrazas y cubiertas en El Vendrell y Baix Penedès. Calidad garantizada.',
  },
  {
    path: 'nosotros',
    canonical: 'https://www.arevaloconstrucciones.com/nosotros',
    title: 'Sobre Nosotros | 3ª Generación de Albañiles | Arévalo Construcciones',
    description: 'Conoce a Javier Arévalo y nuestra tradición familiar de 3 generaciones de albañiles en El Vendrell. Presupuestos cerrados, garantía por contrato y seguro de RC en vigor.',
  },
  {
    path: 'contacto',
    canonical: 'https://www.arevaloconstrucciones.com/contacto',
    title: 'Contacto y Presupuesto por WhatsApp | Arévalo Construcciones El Vendrell',
    description: 'Pide presupuesto directo a Javier Arévalo por WhatsApp o teléfono al 622 03 27 04. Desplazamiento y valoración sin compromiso en Baix Penedès, Valls, Tarragona y Barcelona.',
  }
];

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

for (const route of routes) {
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  let html = template;

  // Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

  // Meta description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
    `<meta name="description" content="${route.description}" />`
  );

  // Canonical tag
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
    `<link rel="canonical" href="${route.canonical}" />`
  );

  // Open Graph
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/,
    `<meta property="og:url" content="${route.canonical}" />`
  );

  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
  console.log(`[SEO Prerender] Generated static route: dist/${route.path}/index.html`);
}

console.log('[SEO Prerender] All subpages now have dedicated canonicals and meta tags.');
