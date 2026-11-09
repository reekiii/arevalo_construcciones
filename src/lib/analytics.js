// Google Analytics 4, solo si el visitante acepta las cookies de análisis.
// El ID se configura en Vercel como variable de entorno VITE_GA_ID (p. ej. G-XXXXXXXXXX).
// Sin ID no se carga nada.

const GA_ID = import.meta.env.VITE_GA_ID || '';
let loaded = false;

function hasAnalyticsConsent() {
  try {
    const raw = localStorage.getItem('arevalo_cookies');
    if (!raw) return false;
    try {
      return !!JSON.parse(raw).analytics;
    } catch {
      return raw === 'all';
    }
  } catch {
    return false;
  }
}

function loadGA() {
  if (loaded || !GA_ID || typeof window === 'undefined') return;
  loaded = true;
  window[`ga-disable-${GA_ID}`] = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  // send_page_view false: las páginas vistas se envían a mano en cada cambio de ruta (SPA)
  window.gtag('config', GA_ID, { anonymize_ip: true, send_page_view: false });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

export function syncConsent() {
  if (!GA_ID) return;
  if (hasAnalyticsConsent()) {
    loadGA();
  } else if (loaded) {
    window[`ga-disable-${GA_ID}`] = true;
  }
}

export function trackPageView(path, title) {
  syncConsent();
  if (!loaded || window[`ga-disable-${GA_ID}`]) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href
  });
}

export function trackEvent(name, params = {}) {
  if (!loaded || !window.gtag || window[`ga-disable-${GA_ID}`]) return;
  window.gtag('event', name, params);
}

if (typeof window !== 'undefined') {
  window.addEventListener('arevalo-consent-changed', () => {
    syncConsent();
    if (loaded) trackPageView(window.location.pathname, document.title);
  });
}
