import { ZONAS, getZona, zonaSeo } from './zonas.js';

export const SITE_URL = 'https://www.arevaloconstrucciones.com';

export const SEO_DATA = {
  '/': {
    es: {
      title: 'Arévalo Construcciones El Vendrell | Reformas en Baix Penedès, Tarragona y Barcelona',
      desc: 'Empresa de construcción y reformas en El Vendrell, Baix Penedès, Sitges, Vilafranca, Tarragona y Barcelona. 3ª generación de albañiles. Especialistas en reformas de baños, cocinas y reformas integrales.'
    },
    ca: {
      title: 'Arévalo Construcciones El Vendrell | Reformes al Baix Penedès, Tarragona i Barcelona',
      desc: 'Empresa de construcció i reformes al Vendrell, Baix Penedès, Sitges, Vilafranca, Tarragona i Barcelona. 3a generació de paletes. Especialistes en reformes de banys, cuines i reformes integrals.'
    }
  },
  '/servicios': {
    es: {
      title: 'Servicios de Reformas y Construcción en El Vendrell | Arévalo Construcciones',
      desc: 'Especialistas en reformas de baños, cambio de bañera por plato de ducha, reformas de cocinas, suelos porcelánicos y reformas integrales en Baix Penedès, Valls y Tarragona.'
    },
    ca: {
      title: 'Serveis de Reformes i Construcció a El Vendrell | Arévalo Construcciones',
      desc: 'Especialistes en reformes de banys, canvi de banyera per plat de dutxa, reformes de cuines, terres porcel·lànics i reformes integrals al Baix Penedès, Valls i Tarragona.'
    }
  },
  '/proyectos': {
    es: {
      title: 'Proyectos y Obras Realizadas | Arévalo Construcciones El Vendrell',
      desc: 'Galería de trabajos reales de reformas de baños, platos de ducha de obra, piscinas, terrazas y cubiertas en El Vendrell y Baix Penedès. Calidad garantizada.'
    },
    ca: {
      title: 'Projectes i Obres Realitzades | Arévalo Construcciones El Vendrell',
      desc: "Galeria de treballs reals de reformes de banys, plats de dutxa d'obra, piscines, terrasses i cobertes a El Vendrell i Baix Penedès. Qualitat garantida."
    }
  },
  '/nosotros': {
    es: {
      title: 'Sobre Nosotros | 3ª Generación de Albañiles | Arévalo Construcciones',
      desc: 'Conoce a Javier Arévalo y nuestra tradición familiar de 3 generaciones de albañiles en El Vendrell. Presupuestos cerrados, garantía por contrato y seguro de RC en vigor.'
    },
    ca: {
      title: 'Sobre Nosaltres | 3a Generació de Paletes | Arévalo Construcciones',
      desc: 'Coneix a Javier Arévalo i la nostra tradició familiar de 3 generacions de paletes a El Vendrell. Pressupostos tancats, garantia per contracte i assegurança de RC en vigor.'
    }
  },
  '/contacto': {
    es: {
      title: 'Contacto y Presupuesto por WhatsApp | Arévalo Construcciones El Vendrell',
      desc: 'Pide presupuesto directo a Javier Arévalo por WhatsApp o teléfono al 622 03 27 04. Desplazamiento y valoración sin compromiso en Baix Penedès, Valls, Tarragona y Barcelona.'
    },
    ca: {
      title: 'Contacte i Pressupost per WhatsApp | Arévalo Construcciones El Vendrell',
      desc: 'Demana pressupost directe a Javier Arévalo per WhatsApp o telèfon al 622 03 27 04. Desplaçament i valoració sense compromís al Baix Penedès, Valls, Tarragona i Barcelona.'
    }
  }
};

SEO_DATA['/zonas'] = {
  es: {
    title: 'Zonas donde trabajamos | Reformas en Baix Penedès, Garraf y Tarragona | Arévalo',
    desc: 'Municipios donde realizamos reformas: El Vendrell, Calafell, Cunit, Cubelles, Vilanova i la Geltrú, Sitges, Vilafranca, Tarragona y Valls. Solo trabajamos en Cataluña.'
  },
  ca: {
    title: 'Zones on treballem | Reformes al Baix Penedès, Garraf i Tarragona | Arévalo',
    desc: 'Municipis on fem reformes: el Vendrell, Calafell, Cunit, Cubelles, Vilanova i la Geltrú, Sitges, Vilafranca, Tarragona i Valls. Només treballem a Catalunya.'
  }
};

// Todas las rutas indexables (sin prefijo de idioma)
export const BASE_ROUTES = [
  '/',
  '/servicios',
  '/proyectos',
  '/nosotros',
  '/contacto',
  '/zonas',
  ...ZONAS.map((z) => `/zonas/${z.slug}`)
];

export function urlFor(basePath, lang) {
  if (lang === 'ca') return `${SITE_URL}/ca${basePath === '/' ? '' : basePath}`;
  return `${SITE_URL}${basePath === '/' ? '/' : basePath}`;
}

// Devuelve { title, desc } o null si la ruta no existe (404)
export function getSeo(basePath, lang) {
  const l = lang === 'ca' ? 'ca' : 'es';
  if (SEO_DATA[basePath]) return SEO_DATA[basePath][l];
  const m = basePath.match(/^\/zonas\/([a-z0-9-]+)$/);
  if (m) {
    const zona = getZona(m[1]);
    if (zona) return zonaSeo(zona, l);
  }
  return null;
}
