import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function NotFound() {
  const { lang } = useLanguage();
  const isCa = lang === 'ca';

  return (
    <div className="animate-fade-in min-h-[75vh] flex items-center justify-center px-4 py-16 sm:py-24 bg-brand-bg">
      <div className="max-w-2xl w-full text-center">
        
        {/* Número 404 Estilo Arquitectónico */}
        <div className="relative inline-block mb-6">
          <span className="text-7xl sm:text-9xl font-heading font-extrabold text-brand-blue tracking-tight select-none">
            404
          </span>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-brand-accent"></div>
        </div>

        {/* Badge "En Obras" */}
        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-300 px-3.5 py-1 text-xs font-heading font-bold uppercase tracking-wider mb-6">
          <span>🚧</span>
          <span>{isCa ? 'Pàgina no trobada o en obres' : 'Página no encontrada o en obras'}</span>
        </div>

        {/* Título y Mensaje */}
        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-brand-blue mb-4 leading-tight">
          {isCa 
            ? 'Aquest espai encara s\'està construint' 
            : 'Este espacio todavía se está construyendo'}
        </h1>

        <p className="text-base sm:text-lg text-gray-700 max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
          {isCa
            ? 'Sembla que l\'enllaç que busques no existeix o s\'ha mogut. Però tranquil, els fonaments del nostre web continuen ferms.'
            : 'Parece que el enlace que buscas no existe o se ha movido. Pero tranquilo, los cimientos de nuestra web siguen firmes.'}
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-10">
          <Link
            to="/"
            className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold py-3.5 px-8 rounded-none shadow-lg transition duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm uppercase tracking-wider text-center"
          >
            {isCa ? '🏠 Tornar a l\'Inici' : '🏠 Volver al Inicio'}
          </Link>
          <a
            href={`https://wa.me/34622032704?text=${encodeURIComponent(
              isCa
                ? 'Hola Javier, m\'he trobat amb un error navegant pel teu web i volia fer-te una consulta.'
                : 'Hola Javier, me he encontrado con un error navegando por tu web y quería hacerte una consulta.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white hover:bg-stone-50 text-brand-blue border border-stone-300 font-heading font-bold py-3.5 px-8 rounded-none shadow-sm transition duration-300 text-xs sm:text-sm uppercase tracking-wider text-center"
          >
            {isCa ? '💬 Avisar per WhatsApp' : '💬 Avisar por WhatsApp'}
          </a>
        </div>

        {/* Accesos Rápidos */}
        <div className="pt-6 border-t border-stone-300/60 max-w-md mx-auto">
          <p className="text-xs uppercase font-heading font-bold text-stone-500 tracking-wider mb-3">
            {isCa ? 'O navega directament a:' : 'O navega directamente a:'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-brand-blue">
            <Link to="/servicios" className="hover:text-brand-accent transition">
              {isCa ? 'Serveis' : 'Servicios'}
            </Link>
            <span className="text-stone-300">•</span>
            <Link to="/proyectos" className="hover:text-brand-accent transition">
              {isCa ? 'Projectes' : 'Proyectos'}
            </Link>
            <span className="text-stone-300">•</span>
            <Link to="/nosotros" className="hover:text-brand-accent transition">
              {isCa ? 'Nosaltres' : 'Nosotros'}
            </Link>
            <span className="text-stone-300">•</span>
            <Link to="/contacto" className="hover:text-brand-accent transition">
              {isCa ? 'Contacte' : 'Contacto'}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
