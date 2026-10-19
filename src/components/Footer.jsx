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
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
              {t('footer_desc')}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <a
                href="https://www.instagram.com/construcciones_arevalo_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-3 py-1.5 rounded-none hover:opacity-90 transition shadow-md"
                title="Instagram: @construcciones_arevalo_"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://g.page/r/CeSCdIVSlsgGEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 px-3 py-1.5 rounded-none transition shadow-md"
                title="Dejar una reseña en Google Maps"
              >
                <span>⭐</span>
                <span>Valorar en Google</span>
              </a>
            </div>
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
                <a href="tel:622032704" className="hover:text-brand-accent transition">622 03 27 04</a>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <svg className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:construccionesyreformasarevalo@gmail.com" className="hover:text-brand-accent transition break-all text-xs">
                  construccionesyreformasarevalo@gmail.com
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <svg className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs text-gray-400">
                  43700 El Vendrell (Tarragona)
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a href="https://www.instagram.com/construcciones_arevalo_/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition text-xs">
                  Instagram
                </a>
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
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-legal-modal', { detail: { type: 'legal' } }))}
              className="text-gray-400 hover:text-white transition cursor-pointer underline-offset-2 hover:underline"
            >
              {t('footer_legal')}
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-legal-modal', { detail: { type: 'privacy' } }))}
              className="text-gray-400 hover:text-white transition cursor-pointer underline-offset-2 hover:underline"
            >
              {t('footer_privacy')}
            </button>
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
