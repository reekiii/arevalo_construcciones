import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ZONAS } from '../data/zonas.js';

function Zonas() {
  const { lang, lp } = useLanguage();
  const ca = lang === 'ca';

  const byComarca = ZONAS.reduce((acc, z) => {
    (acc[z.comarca] = acc[z.comarca] || []).push(z);
    return acc;
  }, {});

  return (
    <div className="animate-fade-in py-12 sm:py-16 md:py-20 bg-brand-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-brand-accent font-heading font-bold tracking-widest uppercase text-xs mb-2 block">
            📍 {ca ? 'Només Catalunya' : 'Solo Cataluña'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-4 leading-tight">
            {ca ? 'Zones on fem reformes' : 'Zonas donde hacemos reformas'}
          </h1>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto mb-5 rounded-none"></div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {ca
              ? 'Som una empresa familiar del Vendrell. Treballem al Baix Penedès, el Garraf, l’Alt Penedès i el Camp de Tarragona. No fem obres fora de Catalunya.'
              : 'Somos una empresa familiar de El Vendrell. Trabajamos en el Baix Penedès, el Garraf, el Alt Penedès y el Camp de Tarragona. No hacemos obras fuera de Cataluña.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {Object.entries(byComarca).map(([comarca, zonas]) => (
            <div key={comarca} className="bg-white border border-stone-300 shadow-md p-6">
              <h2 className="text-lg font-heading font-extrabold text-brand-blue mb-4 uppercase tracking-wider">
                {comarca}
              </h2>
              <ul className="space-y-2">
                {zonas.map((z) => (
                  <li key={z.slug}>
                    <Link
                      to={lp(`/zonas/${z.slug}`)}
                      className="flex items-center justify-between p-3 bg-stone-50 hover:bg-brand-light border border-stone-200 hover:border-brand-blue transition group"
                    >
                      <span className="font-heading font-bold text-gray-800 group-hover:text-brand-blue">
                        {ca ? `Reformes a ${z.nameCa}` : `Reformas en ${z.name}`}
                      </span>
                      <span className="text-xs text-stone-500">
                        {z.minutos === 0
                          ? ca ? 'La nostra seu' : 'Nuestra sede'
                          : `~${z.minutos} min`}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-brand-bg-alt border border-stone-300 p-6 sm:p-8 text-center shadow-lg">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5 max-w-2xl mx-auto">
            {ca
              ? 'El teu municipi no surt a la llista però és a prop? Si és a les províncies de Tarragona o Barcelona, consulta’ns.'
              : '¿Tu municipio no aparece pero está cerca? Si está en las provincias de Tarragona o Barcelona, consúltanos.'}
          </p>
          <Link
            to={lp('/contacto')}
            className="inline-block bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold py-3.5 px-8 shadow-lg transition text-xs sm:text-sm uppercase tracking-wider"
          >
            {ca ? 'Demanar pressupost' : 'Pedir presupuesto'}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Zonas;
