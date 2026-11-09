import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ZONAS } from '../data/zonas.js';

// Bloque visible de "Zonas donde trabajamos" para la home (y donde se quiera reutilizar).
// Ordena los municipios por cercanía a El Vendrell y enlaza a cada página de zona.
export default function ZonasSection() {
  const { lang, lp } = useLanguage();
  const ca = lang === 'ca';
  const zonas = [...ZONAS].sort((a, b) => a.minutos - b.minutos);
  const comarcas = [...new Set(ZONAS.map((z) => z.comarca))];

  return (
    <section id="zonas" className="py-14 sm:py-20 md:py-24 bg-white border-t border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-brand-accent font-heading font-bold tracking-widest uppercase text-xs mb-2 block">
            📍 {ca ? 'Zones de treball' : 'Zonas de trabajo'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-blue mb-4 leading-tight">
            {ca ? 'On fem reformes' : 'Dónde hacemos reformas'}
          </h2>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto mb-5 rounded-none"></div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {ca
              ? 'Sortim cada dia des del Vendrell. Treballem al Baix Penedès, el Garraf, l’Alt Penedès i el Camp de Tarragona.'
              : 'Salimos cada día desde El Vendrell. Trabajamos en el Baix Penedès, el Garraf, el Alt Penedès y el Camp de Tarragona.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Municipios por cercanía */}
          <div className="lg:col-span-8">
            <ul className="grid grid-cols-2 xl:grid-cols-3 gap-2.5 sm:gap-3">
              {zonas.map((z) => {
                const isHome = z.minutos === 0;
                return (
                  <li key={z.slug}>
                    <Link
                      to={lp(`/zonas/${z.slug}`)}
                      className={`group h-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 p-3 sm:p-4 border transition shadow-sm hover:shadow-md ${
                        isHome
                          ? 'bg-brand-blue border-brand-blue text-white'
                          : 'bg-stone-50 border-stone-200 hover:border-brand-blue hover:bg-white'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className={`font-heading font-extrabold text-sm sm:text-base leading-tight ${isHome ? 'text-white' : 'text-gray-900 group-hover:text-brand-blue'}`}>
                          {ca ? z.nameCa.charAt(0).toUpperCase() + z.nameCa.slice(1) : z.name}
                        </div>
                        <div className={`text-[11px] uppercase tracking-wider font-bold mt-0.5 ${isHome ? 'text-white/70' : 'text-stone-500'}`}>
                          {z.comarca}
                        </div>
                      </div>
                      <span
                        className={`flex-shrink-0 text-[11px] font-heading font-bold px-2 py-1 border ${
                          isHome
                            ? 'bg-brand-accent border-brand-accent text-white'
                            : 'bg-white border-stone-300 text-gray-700'
                        }`}
                      >
                        {isHome ? (ca ? 'Seu' : 'Sede') : `~${z.minutos} min`}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="text-xs text-stone-500 mt-3">
              {ca
                ? 'Temps aproximats des del Vendrell. També treballem a Santa Oliva, Bellvei, Albinyana, la Bisbal del Penedès i pobles propers.'
                : 'Tiempos aproximados desde El Vendrell. También trabajamos en Santa Oliva, Bellvei, Albinyana, La Bisbal del Penedès y pueblos cercanos.'}
            </p>
          </div>

          {/* Aviso: solo Cataluña */}
          <aside className="lg:col-span-4 bg-brand-bg-alt border-2 border-brand-blue p-6 sm:p-7 flex flex-col justify-between shadow-lg">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-blue text-white text-[11px] font-heading font-bold uppercase tracking-wider px-2.5 py-1 mb-4">
                {ca ? 'Només Catalunya' : 'Solo Cataluña'}
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-blue mb-3 leading-tight">
                {ca ? 'No fem obres fora de Catalunya' : 'No hacemos obras fuera de Cataluña'}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {ca
                  ? 'Arévalo és el cognom de la família. No tenim relació amb el municipi d’Arévalo (Àvila) ni treballem a Madrid ni a Castella i Lleó.'
                  : 'Arévalo es el apellido de la familia. No tenemos relación con el municipio de Arévalo (Ávila) ni trabajamos en Madrid ni en Castilla y León.'}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {comarcas.map((c) => (
                  <span key={c} className="text-[11px] font-heading font-bold text-brand-blue bg-white border border-stone-300 px-2 py-1">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <Link
              to={lp('/zonas')}
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold py-3.5 px-6 text-xs sm:text-sm uppercase tracking-wider shadow-md transition w-full"
            >
              {ca ? 'Veure totes les zones' : 'Ver todas las zonas'} →
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
