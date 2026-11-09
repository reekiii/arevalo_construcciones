import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getZona } from '../data/zonas.js';
import { urlFor } from '../data/seo.js';
import NotFound from './NotFound';

function Zona() {
  const { slug } = useParams();
  const { lang, lp } = useLanguage();
  const zona = getZona(slug);
  const ca = lang === 'ca';

  // Schema Service con areaServed del municipio concreto
  useEffect(() => {
    if (!zona) return undefined;
    const id = 'zona-service-jsonld';
    let tag = document.getElementById(id);
    if (!tag) {
      tag = document.createElement('script');
      tag.id = id;
      tag.type = 'application/ld+json';
      document.head.appendChild(tag);
    }
    tag.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: ca ? `Reformes a ${zona.nameCa}` : `Reformas en ${zona.name}`,
      serviceType: ca ? 'Reformes i construcció' : 'Reformas y construcción',
      url: urlFor(`/zonas/${zona.slug}`, ca ? 'ca' : 'es'),
      provider: { '@id': 'https://www.arevaloconstrucciones.com/#business' },
      areaServed: {
        '@type': 'City',
        name: zona.name,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: `${zona.comarca}, ${zona.provincia}, Cataluña, España`
        }
      }
    });
    return () => document.getElementById(id)?.remove();
  }, [zona, ca]);

  if (!zona) return <NotFound />;

  const txt = ca ? zona.ca : zona.es;
  const name = ca ? zona.nameCa : zona.name;

  return (
    <div className="animate-fade-in py-12 sm:py-16 md:py-20 bg-brand-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-xs text-stone-500 mb-6" aria-label="breadcrumb">
          <Link to={lp('/')} className="hover:text-brand-blue">{ca ? 'Inici' : 'Inicio'}</Link>
          <span className="mx-1.5">/</span>
          <Link to={lp('/zonas')} className="hover:text-brand-blue">{ca ? 'Zones' : 'Zonas'}</Link>
          <span className="mx-1.5">/</span>
          <span className="text-gray-700">{zona.name}</span>
        </nav>

        <header className="mb-10">
          <span className="text-brand-accent font-heading font-bold tracking-widest uppercase text-xs mb-2 block">
            📍 {zona.comarca} · {zona.provincia} · {ca ? 'Catalunya' : 'Cataluña'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-4 leading-tight">
            {ca ? `Reformes a ${name}` : `Reformas en ${name}`}
          </h1>
          <div className="w-20 h-1.5 bg-brand-accent mb-5 rounded-none"></div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl">{txt.intro}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <section className="bg-white border border-stone-300 shadow-md p-6">
            <h2 className="text-lg font-heading font-extrabold text-brand-blue mb-4">
              {ca ? `Treballs habituals a ${name}` : `Trabajos habituales en ${name}`}
            </h2>
            <ul className="space-y-3">
              {txt.focus.map((f) => (
                <li key={f} className="flex items-start text-sm text-gray-700">
                  <span className="w-4 h-4 bg-emerald-100 text-emerald-700 flex items-center justify-center mr-2 mt-0.5 font-bold text-[10px] flex-shrink-0 border border-emerald-300">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link to={lp('/servicios')} className="inline-block mt-5 text-xs font-heading font-bold uppercase tracking-wider text-brand-blue hover:underline">
              {ca ? 'Veure tots els serveis →' : 'Ver todos los servicios →'}
            </Link>
          </section>

          <section className="bg-white border border-stone-300 shadow-md p-6">
            <h2 className="text-lg font-heading font-extrabold text-brand-blue mb-4">
              {ca ? 'Com treballem' : 'Cómo trabajamos'}
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <strong>{ca ? 'Visita gratuïta: ' : 'Visita gratuita: '}</strong>
                {ca
                  ? `Javier Arévalo es desplaça a ${name} per mesurar i veure l’obra${zona.minutos ? ` (som a uns ${zona.minutos} minuts)` : ''}.`
                  : `Javier Arévalo se desplaza a ${name} para medir y ver la obra${zona.minutos ? ` (estamos a unos ${zona.minutos} minutos)` : ''}.`}
              </li>
              <li>
                <strong>{ca ? 'Pressupost tancat: ' : 'Presupuesto cerrado: '}</strong>
                {ca ? 'detallat per partides en aproximadament una setmana.' : 'detallado por partidas en aproximadamente una semana.'}
              </li>
              <li>
                <strong>{ca ? 'Llicències i assegurança: ' : 'Licencias y seguro: '}</strong>
                {ca
                  ? `tramitem els permisos a l’Ajuntament i tenim assegurança de RC en vigor.`
                  : `tramitamos los permisos en el Ayuntamiento y tenemos seguro de RC en vigor.`}
              </li>
            </ul>
          </section>
        </div>

        <div className="bg-brand-blue text-white p-6 sm:p-8 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-xl">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold mb-1">
              {ca ? `Tens una obra a ${name}?` : `¿Tienes una obra en ${name}?`}
            </h2>
            <p className="text-sm text-white/80">
              {ca ? 'Demana pressupost sense compromís per WhatsApp.' : 'Pide presupuesto sin compromiso por WhatsApp.'}
            </p>
          </div>
          <a
            href={`https://wa.me/34622032704?text=${encodeURIComponent(
              ca
                ? `Hola Javier, vull demanar pressupost per a una obra a ${zona.name}: `
                : `Hola Javier, quiero pedir presupuesto para una obra en ${zona.name}: `
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-heading font-extrabold py-3.5 px-7 text-xs sm:text-sm uppercase tracking-wider shadow-lg transition w-full md:w-auto"
          >
            WhatsApp →
          </a>
        </div>

        <section>
          <h2 className="text-sm font-heading font-extrabold text-brand-blue uppercase tracking-wider mb-3">
            {ca ? 'També treballem a prop' : 'También trabajamos cerca'}
          </h2>
          <div className="flex flex-wrap gap-2">
            {zona.nearby.map(getZona).filter(Boolean).map((z) => (
              <Link
                key={z.slug}
                to={lp(`/zonas/${z.slug}`)}
                className="px-3 py-2 bg-white border border-stone-300 hover:border-brand-blue text-sm font-heading font-bold text-gray-800 hover:text-brand-blue transition"
              >
                {ca ? z.nameCa : z.name}
              </Link>
            ))}
            <Link
              to={lp('/zonas')}
              className="px-3 py-2 text-sm font-heading font-bold text-brand-blue hover:underline"
            >
              {ca ? 'Totes les zones →' : 'Todas las zonas →'}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Zona;
