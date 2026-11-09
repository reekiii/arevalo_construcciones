import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getSavedCp, saveCp, isValidCp, isCpInZone } from '../lib/zone.js';
import { trackEvent } from '../lib/analytics.js';

// Filtro de zona: antes de abrir WhatsApp, llamar o enviar email se pide el
// código postal de la obra. Solo se deja contactar si está en Tarragona o Barcelona.
// Intercepta TODOS los enlaces wa.me / tel: / mailto: de la web (también los futuros).

const CONTACT_RE = /^(https:\/\/wa\.me\/|tel:|mailto:)/i;

function channelOf(href) {
  if (/^https:\/\/wa\.me\//i.test(href)) return 'whatsapp';
  if (/^tel:/i.test(href)) return 'phone';
  return 'email';
}

function withCp(href, cp, lang) {
  if (channelOf(href) !== 'whatsapp') return href;
  try {
    const url = new URL(href);
    const text = url.searchParams.get('text') || '';
    const line = lang === 'ca' ? `Codi postal de l'obra: ${cp}` : `Código postal de la obra: ${cp}`;
    const finalText = text ? `${text}\n\n${line}` : line;
    return `${url.origin}${url.pathname}?text=${encodeURIComponent(finalText)}`;
  } catch {
    return href;
  }
}

function go(href, lang, cp) {
  const channel = channelOf(href);
  trackEvent('contact_click', { channel, zone_result: 'in_zone', cp_prefix: cp.slice(0, 2) });
  if (channel === 'whatsapp') {
    window.open(withCp(href, cp, lang), '_blank', 'noopener,noreferrer');
  } else {
    window.location.href = href;
  }
}

export default function ZoneGate() {
  const { lang } = useLanguage();
  const [pending, setPending] = useState(null);
  const [cp, setCp] = useState('');
  const [status, setStatus] = useState('idle'); // idle | invalid | out
  const inputRef = useRef(null);
  const langRef = useRef(lang);
  useEffect(() => {
    langRef.current = lang;
  }, [lang]);

  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (!CONTACT_RE.test(href) || a.hasAttribute('data-skip-zone')) return;

      e.preventDefault();
      const saved = getSavedCp();
      if (saved) {
        go(href, langRef.current, saved);
        return;
      }
      setPending(href);
      setCp('');
      setStatus('idle');
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  useEffect(() => {
    if (!pending) return;
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    const onKey = (e) => e.key === 'Escape' && setPending(null);
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', onKey);
    };
  }, [pending]);

  if (!pending) return null;

  const ca = lang === 'ca';

  const submit = (e) => {
    e.preventDefault();
    const value = cp.trim();
    if (!isValidCp(value)) {
      setStatus('invalid');
      return;
    }
    if (!isCpInZone(value)) {
      setStatus('out');
      trackEvent('zone_check', { zone_result: 'out_of_zone', cp_prefix: value.slice(0, 2), channel: channelOf(pending) });
      return;
    }
    saveCp(value);
    trackEvent('zone_check', { zone_result: 'in_zone', cp_prefix: value.slice(0, 2), channel: channelOf(pending) });
    const href = pending;
    setPending(null);
    go(href, lang, value);
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-end sm:items-center justify-center bg-black/60 px-4 pb-4 sm:pb-0"
      role="dialog"
      aria-modal="true"
      aria-labelledby="zone-gate-title"
      onClick={(e) => e.target === e.currentTarget && setPending(null)}
    >
      <div className="w-full max-w-md bg-white border-t-4 border-brand-blue shadow-2xl p-6 sm:p-7 animate-fade-in">
        {status !== 'out' ? (
          <form onSubmit={submit} noValidate>
            <div className="text-xs font-heading font-bold uppercase tracking-wider text-brand-accent mb-1">
              📍 {ca ? 'Abans de contactar' : 'Antes de contactar'}
            </div>
            <h2 id="zone-gate-title" className="text-xl sm:text-2xl font-heading font-extrabold text-brand-blue mb-2">
              {ca ? 'On és l’obra?' : '¿Dónde está la obra?'}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              {ca
                ? 'Som una empresa del Vendrell (Tarragona) i només treballem a Catalunya. Indica el codi postal de l’obra per comprovar que hi arribem.'
                : 'Somos una empresa de El Vendrell (Tarragona) y solo trabajamos en Cataluña. Indica el código postal de la obra para comprobar que llegamos.'}
            </p>
            <label htmlFor="zone-cp" className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
              {ca ? 'Codi postal de l’obra' : 'Código postal de la obra'}
            </label>
            <input
              ref={inputRef}
              id="zone-cp"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              placeholder="43700"
              value={cp}
              onChange={(e) => {
                setCp(e.target.value.replace(/\D/g, '').slice(0, 5));
                setStatus('idle');
              }}
              className={`w-full border-2 px-4 py-3 text-lg font-heading font-bold tracking-widest text-gray-900 focus:outline-none focus:border-brand-blue ${
                status === 'invalid' ? 'border-red-500' : 'border-stone-300'
              }`}
              aria-invalid={status === 'invalid'}
              aria-describedby="zone-cp-help"
            />
            <p id="zone-cp-help" className={`text-xs mt-1.5 ${status === 'invalid' ? 'text-red-600 font-semibold' : 'text-stone-500'}`}>
              {status === 'invalid'
                ? ca ? 'Escriu un codi postal de 5 xifres.' : 'Escribe un código postal de 5 cifras.'
                : ca ? 'Zona: províncies de Tarragona i Barcelona.' : 'Zona: provincias de Tarragona y Barcelona.'}
            </p>
            <div className="flex flex-col-reverse sm:flex-row gap-2 mt-5">
              <button
                type="button"
                onClick={() => setPending(null)}
                className="px-5 py-3 text-xs font-heading font-bold uppercase tracking-wider text-gray-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition"
              >
                {ca ? 'Cancel·lar' : 'Cancelar'}
              </button>
              <button
                type="submit"
                className="flex-1 px-5 py-3 text-xs sm:text-sm font-heading font-extrabold uppercase tracking-wider text-white bg-brand-blue hover:bg-brand-blue-dark transition"
              >
                {ca ? 'Comprovar i continuar' : 'Comprobar y continuar'}
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="text-xs font-heading font-bold uppercase tracking-wider text-red-600 mb-1">
              ✕ {ca ? 'Fora de la nostra zona' : 'Fuera de nuestra zona'}
            </div>
            <h2 id="zone-gate-title" className="text-xl sm:text-2xl font-heading font-extrabold text-brand-blue mb-2">
              {ca ? 'Ho sentim, no arribem fins allà' : 'Lo sentimos, no llegamos hasta ahí'}
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {ca
                ? 'Arévalo Construcciones és una empresa familiar del Vendrell (Tarragona). Només fem obres a Catalunya: Baix Penedès, Garraf, Alt Penedès, Camp de Tarragona i província de Barcelona.'
                : 'Arévalo Construcciones es una empresa familiar de El Vendrell (Tarragona). Solo hacemos obras en Cataluña: Baix Penedès, Garraf, Alt Penedès, Camp de Tarragona y provincia de Barcelona.'}
            </p>
            <p className="text-xs text-stone-500 leading-relaxed mb-5">
              {ca
                ? 'No tenim cap relació amb el municipi d’Arévalo (Àvila). Arévalo és el cognom de la família.'
                : 'No tenemos relación con el municipio de Arévalo (Ávila). Arévalo es el apellido de la familia.'}
            </p>
            <div className="flex flex-col-reverse sm:flex-row gap-2">
              <button
                type="button"
                onClick={() => setPending(null)}
                className="px-5 py-3 text-xs font-heading font-bold uppercase tracking-wider text-gray-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition"
              >
                {ca ? 'Tancar' : 'Cerrar'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setCp('');
                  setTimeout(() => inputRef.current?.focus(), 50);
                }}
                className="flex-1 px-5 py-3 text-xs font-heading font-bold uppercase tracking-wider text-brand-blue bg-white hover:bg-stone-50 border-2 border-brand-blue transition"
              >
                {ca ? 'M’he equivocat de codi postal' : 'Me he equivocado de código postal'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
