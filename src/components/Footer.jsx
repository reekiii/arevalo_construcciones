import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-brand-light py-12 md:py-16 border-t border-brand-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12 text-center md:text-left">
          {/* Logo y Descripción */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <span className="font-heading font-extrabold text-xl tracking-wider uppercase mr-2 text-white">Arévalo</span>
              <span className="font-heading text-sm text-gray-400 tracking-widest uppercase">Construcciones</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Especialistas en reformas integrales, obra nueva y rehabilitación con la máxima calidad y compromiso. Construimos tus sueños.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="md:col-span-1">
            <h4 className="text-brand-accent font-heading font-bold mb-4 uppercase tracking-wider text-sm">Explorar</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brand-accent transition">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-brand-accent transition">Servicios</Link></li>
              <li><Link to="/proyectos" className="hover:text-brand-accent transition">Proyectos</Link></li>
              <li><Link to="/nosotros" className="hover:text-brand-accent transition">Sobre Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-brand-accent transition">Contacto</Link></li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="md:col-span-1">
            <h4 className="text-brand-accent font-heading font-bold mb-4 uppercase tracking-wider text-sm">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/servicios" className="hover:text-brand-accent transition">Reformas Integrales</Link></li>
              <li><Link to="/servicios" className="hover:text-brand-accent transition">Obra Nueva</Link></li>
              <li><Link to="/servicios" className="hover:text-brand-accent transition">Rehabilitación</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h4 className="text-brand-accent font-heading font-bold mb-4 uppercase tracking-wider text-sm">Contacto</h4>
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

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 text-center md:text-left">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Arévalo Construcciones. Todos los derechos reservados.</p>
          <div className="space-x-4">
            <Link to="#" className="hover:text-white transition">Aviso Legal</Link>
            <Link to="#" className="hover:text-white transition">Política de Privacidad</Link>
            <Link to="#" className="hover:text-white transition">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
