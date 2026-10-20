import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, changeLanguage, t } = useLanguage();

  const isActive = (path) => {
    return location.pathname === path 
      ? "text-brand-blue font-bold border-b-2 border-brand-accent pb-1" 
      : "text-gray-700 hover:text-brand-blue font-semibold transition-colors duration-200 pb-1";
  };

  const navLinks = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_services'), path: '/servicios' },
    { name: t('nav_projects'), path: '/proyectos' },
    { name: t('nav_about'), path: '/nosotros' },
    { name: t('nav_contact'), path: '/contacto' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <img 
              src="/Logo.jpg" 
              alt="Arévalo Construcciones Logo" 
              className="h-11 sm:h-16 w-auto mr-2.5 sm:mr-3.5 rounded-none shadow-sm group-hover:scale-105 transition-transform" 
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-brand-blue leading-tight tracking-tight uppercase group-hover:text-brand-blue-light transition-colors">
                Arévalo
              </span>
              <span className="font-heading font-bold text-[10px] sm:text-xs text-brand-accent tracking-[0.2em] sm:tracking-[0.25em] uppercase mt-0.5">
                Construcciones
              </span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`${isActive(link.path)} font-heading text-sm uppercase tracking-wider`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action: Language Selector & Phone */}
          <div className="hidden md:flex items-center space-x-5">
            
            {/* Language Switcher sin recuadro */}
            <div className="flex items-center space-x-1.5 text-xs font-heading font-bold">
              <button
                onClick={() => changeLanguage('es')}
                className={`px-1 py-0.5 transition-colors ${
                  lang === 'es' 
                    ? 'text-brand-blue font-extrabold border-b-2 border-brand-blue' 
                    : 'text-gray-400 hover:text-brand-blue'
                }`}
                title="Español"
              >
                ES
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => changeLanguage('ca')}
                className={`px-1 py-0.5 transition-colors ${
                  lang === 'ca' 
                    ? 'text-brand-blue font-extrabold border-b-2 border-brand-blue' 
                    : 'text-gray-400 hover:text-brand-blue'
                }`}
                title="Català"
              >
                CA
              </button>
            </div>

            {/* Teléfono sin recuadro */}
            <a 
              href="tel:622032704" 
              className="text-sm font-heading font-extrabold text-brand-blue hover:text-brand-blue-dark transition flex items-center group py-1"
            >
              <svg className="w-4 h-4 mr-2 text-brand-blue group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              622 03 27 04
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/construcciones_arevalo_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E4405F] transition-colors p-1 flex items-center"
              aria-label="Instagram Arévalo Construcciones"
              title="Instagram: @construcciones_arevalo_"
            >
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@construcciones_arevalo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors p-1 flex items-center"
              aria-label="TikTok Arévalo Construcciones"
              title="TikTok: @construcciones_arevalo"
            >
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>

          {/* Mobile menu button and Lang */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:hidden">
            
            {/* Mobile Lang switcher sin recuadro con tap target cómodo */}
            <div className="flex items-center space-x-1 text-xs font-heading font-bold mr-1">
              <button
                onClick={() => changeLanguage('es')}
                className={`px-2 py-1 transition-colors ${
                  lang === 'es' ? 'text-brand-blue font-extrabold border-b-2 border-brand-blue' : 'text-gray-400'
                }`}
              >
                ES
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => changeLanguage('ca')}
                className={`px-2 py-1 transition-colors ${
                  lang === 'ca' ? 'text-brand-blue font-extrabold border-b-2 border-brand-blue' : 'text-gray-400'
                }`}
              >
                CA
              </button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-blue hover:text-brand-blue-dark p-2 rounded-none focus:outline-none"
              aria-label="Abrir menú"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl animate-fade-in">
          <div className="px-5 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-none font-heading font-bold text-base ${
                  location.pathname === link.path 
                    ? 'bg-brand-light text-brand-blue' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <a 
                href="tel:622032704"
                className="block text-center w-full py-3.5 bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold rounded-none text-sm tracking-wider uppercase shadow-md transition"
              >
                📞 622 03 27 04
              </a>
              <a
                href="https://www.instagram.com/construcciones_arevalo_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-gray-800 font-heading font-bold rounded-none text-xs tracking-wider uppercase border border-stone-300 transition"
              >
                <svg className="w-4 h-4 fill-currentColor text-[#E4405F]" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram: @construcciones_arevalo_</span>
              </a>
              <a
                href="https://www.tiktok.com/@construcciones_arevalo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-gray-800 font-heading font-bold rounded-none text-xs tracking-wider uppercase border border-stone-300 transition"
              >
                <svg className="w-4 h-4 fill-currentColor text-black" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                <span>TikTok: @construcciones_arevalo</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
