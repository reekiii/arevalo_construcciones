import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0F172A] text-brand-light py-12 md:py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12 text-center md:text-left">
          
          {/* Logo y Descripción */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <span className="font-heading font-extrabold text-xl tracking-wider uppercase mr-2 text-white">Arévalo</span>
              <span className="font-heading text-xs text-brand-accent tracking-[0.2em] uppercase font-bold">Construcciones</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              {t('footer_desc')}
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="md:col-span-1">
            <h4 className="text-brand-accent font-heading font-bold mb-4 uppercase tracking-wider text-sm">{t('footer_explore')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brand-accent transition">{t('nav_home')}</Link></li>
              <li><Link to="/servicios" className="hover:text-brand-accent transition">{t('nav_services')}</Link></li>
              <li><Link to="/proyectos" className="hover:text-brand-accent transition">{t('nav_projects')}</Link></li>
              <li><Link to="/nosotros" className="hover:text-brand-accent transition">{t('nav_about')}</Link></li>
              <li><Link to="/contacto" className="hover:text-brand-accent transition">{t('nav_contact')}</Link></li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="md:col-span-1">
            <h4 className="text-brand-accent font-heading font-bold mb-4 uppercase tracking-wider text-sm">{t('footer_services')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/servicios" className="hover:text-brand-accent transition">{t('s1_title')}</Link></li>
              <li><Link to="/servicios" className="hover:text-brand-accent transition">{t('s2_title')}</Link></li>
              <li><Link to="/servicios" className="hover:text-brand-accent transition">{t('s3_title')}</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h4 className="text-brand-accent font-heading font-bold mb-4 uppercase tracking-wider text-sm">{t('footer_contact')}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center md:items-start justify-center md:justify-start">
                <svg className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                622 03 27 04
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start">
                <svg className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@arevaloconstrucciones.es
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 text-center md:text-left gap-4">
          <p>&copy; {new Date().getFullYear()} Arévalo Construcciones. Todos los derechos reservados.</p>
          <p className="text-gray-400">
            {t('footer_credits')}{' '}
            <a 
              href="https://www.grasdesign.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-accent font-semibold hover:text-white transition"
            >
              Gras Design
            </a>
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-1">
            <span className="text-gray-500">{t('footer_legal')}</span>
            <span className="text-gray-500">{t('footer_privacy')}</span>
            <button 
              onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
              className="text-gray-400 hover:text-white transition cursor-pointer underline-offset-2 hover:underline"
            >
              {t('footer_cookies')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
