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
            <div className="pt-2">
              <a 
                href="tel:622032704"
                className="block text-center w-full py-3.5 bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold rounded-none text-sm tracking-wider uppercase shadow-md transition"
              >
                📞 622 03 27 04
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
