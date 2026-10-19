import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SEO_DATA = {
  '/': {
    es: {
      title: 'Arévalo Construcciones | Reformas en El Vendrell, Sitges, Vilafranca y Tarragona',
      desc: 'Empresa de construcción y reformas en El Vendrell, Sitges, Vilafranca del Penedès, Cubelles y Tarragona. 3ª generación de albañiles. Especialistas en reformas de baños, cocinas y reformas integrales.'
    },
    ca: {
      title: 'Arévalo Construcciones | Reformes a El Vendrell, Sitges, Vilafranca i Tarragona',
      desc: 'Empresa de construcció i reformes a El Vendrell, Sitges, Vilafranca del Penedès, Cubelles i Tarragona. 3a generació de paletes. Especialistes en reformes de banys, cuines i reformes integrals.'
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

export default function SEOHead() {
  const location = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const pathname = location.pathname.toLowerCase();
    const pageConfig = SEO_DATA[pathname] || {
      es: {
        title: '404 - Página no encontrada | Arévalo Construcciones',
        desc: 'La página que buscas no existe o se ha movido. Vuelve al inicio de Arévalo Construcciones en El Vendrell.'
      },
      ca: {
        title: '404 - Pàgina no trobada | Arévalo Construcciones',
        desc: "La pàgina que busques no existeix o s'ha mogut. Torna a l'inici d'Arévalo Construcciones a El Vendrell."
      }
    };
    const activeLang = lang === 'ca' ? 'ca' : 'es';
    const currentSEO = pageConfig[activeLang] || pageConfig.es;

    // Actualizar document title
    document.title = currentSEO.title;

    // Actualizar atributo lang en el tag <html>
    document.documentElement.lang = activeLang;

    // Actualizar Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = currentSEO.desc;

    // Actualizar Open Graph Title y Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = currentSEO.title;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = currentSEO.desc;

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = `https://www.arevaloconstrucciones.com${pathname === '/' ? '' : pathname}`;

    // Actualizar Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://www.arevaloconstrucciones.com${pathname === '/' ? '' : pathname}`;

  }, [location.pathname, lang]);

  return null;
}
