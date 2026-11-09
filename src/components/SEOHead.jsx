import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage, stripLangPrefix } from '../context/LanguageContext';
import { getSeo, urlFor } from '../data/seo.js';
import { trackPageView } from '../lib/analytics.js';

const NOT_FOUND = {
  es: {
    title: '404 - Página no encontrada | Arévalo Construcciones',
    desc: 'La página que buscas no existe o se ha movido. Vuelve al inicio de Arévalo Construcciones en El Vendrell.'
  },
  ca: {
    title: '404 - Pàgina no trobada | Arévalo Construcciones',
    desc: "La pàgina que busques no existeix o s'ha mogut. Torna a l'inici d'Arévalo Construcciones a El Vendrell."
  }
};

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function upsertLink(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('link');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

export default function SEOHead() {
  const location = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const activeLang = lang === 'ca' ? 'ca' : 'es';
    const rawBase = stripLangPrefix(location.pathname.toLowerCase());
    const basePath = rawBase.length > 1 ? rawBase.replace(/\/+$/, '') : rawBase;
    const seo = getSeo(basePath, activeLang);
    const current = seo || NOT_FOUND[activeLang];

    document.title = current.title;
    document.documentElement.lang = activeLang;

    upsertMeta('meta[name="description"]', { name: 'description', content: current.desc });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: current.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: current.desc });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: activeLang === 'ca' ? 'ca_ES' : 'es_ES' });

    // Las páginas 404 no deben indexarse
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: seo ? 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' : 'noindex, follow'
    });

    // hreflang: limpiar y regenerar
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());

    if (seo) {
      const canonicalUrl = urlFor(basePath, activeLang);
      upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
      upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });

      [
        ['es', urlFor(basePath, 'es')],
        ['ca', urlFor(basePath, 'ca')],
        ['x-default', urlFor(basePath, 'es')]
      ].forEach(([hl, href]) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = hl;
        link.href = href;
        document.head.appendChild(link);
      });
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove();
    }

    trackPageView(location.pathname, current.title);
  }, [location.pathname, lang]);

  return null;
}
