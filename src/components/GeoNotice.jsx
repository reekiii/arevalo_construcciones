import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CATALONIA_REGIONS, getSavedCp } from '../lib/zone.js';
import { trackEvent } from '../lib/analytics.js';

// Aviso suave para visitantes de España que entran desde fuera de Cataluña.
// NO bloquea nada (bloquear por IP haría desaparecer la web de Google y la
// geolocalización de móviles no es fiable). Solo informa.
// Prueba manual: añade ?geo=MD a cualquier URL para simular un visitante de Madrid.

const SESSION_KEY = 'arevalo_geo';
const DISMISS_KEY = 'arevalo_geo_dismissed';

function readSession(key) {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeSession(key, value) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    // sin almacenamiento
  }
}

async function getGeo() {
  const override = new URLSearchParams(window.location.search).get('geo');
  if (override) return { country: 'ES', region: override.toUpperCase() };

  const cached = readSession(SESSION_KEY);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch {
      // continuar
    }
  }
  const res = await fetch('/api/geo', { cache: 'no-store' });
  if (!res.ok || !(res.headers.get('content-type') || '').includes('json')) return null;
  const data = await res.json();
  writeSession(SESSION_KEY, JSON.stringify(data));
  return data;
}

export default function GeoNotice() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readSession(DISMISS_KEY) || getSavedCp()) return;
    let cancelled = false;
    getGeo()
      .then((geo) => {
        if (cancelled || !geo || geo.country !== 'ES' || !geo.region) return;
        if (!CATALONIA_REGIONS.includes(String(geo.region).toUpperCase())) {
          setVisible(true);
          trackEvent('geo_notice_shown', { region: geo.region });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!visible) return null;

  const ca = lang === 'ca';
  const dismiss = () => {
    writeSession(DISMISS_KEY, '1');
    setVisible(false);
  };

  return (
    <div className="bg-amber-50 border-b-2 border-amber-400 text-amber-950" role="status">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <p className="text-xs sm:text-sm leading-snug flex-1">
          <strong className="font-heading">
            {ca ? 'Sembla que ens visites des de fora de Catalunya. ' : 'Parece que nos visitas desde fuera de Cataluña. '}
          </strong>
          {ca
            ? 'Arévalo Construcciones és una empresa del Vendrell (Tarragona) i només fa obres a Catalunya. No tenim relació amb el municipi d’Arévalo (Àvila).'
            : 'Arévalo Construcciones es una empresa de El Vendrell (Tarragona) y solo hace obras en Cataluña. No tenemos relación con el municipio de Arévalo (Ávila).'}
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="self-start sm:self-auto px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-amber-950 transition flex-shrink-0"
        >
          {ca ? 'Entesos' : 'Entendido'}
        </button>
      </div>
    </div>
  );
}
