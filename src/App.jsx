import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Proyectos from './pages/Proyectos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-body text-gray-800 flex flex-col">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      {/* Botón flotante de WhatsApp global */}
      <a 
        href="https://wa.me/34622032704?text=Hola,%20me%20gustaría%20pedir%20un%20presupuesto" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition duration-300 z-50 transform hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 21.0822C10.5186 21.0829 9.04306 20.6726 7.766 19.897L7.545 19.765L3.89 20.735L4.885 17.155L4.74 16.924C3.88289 15.5411 3.42939 13.9351 3.431 12.2842C3.43261 7.5342 7.29161 3.6702 12.046 3.6702C14.3486 3.67252 16.5546 4.57147 18.1818 6.20235C19.809 7.83323 20.7047 10.0416 20.704 12.3462C20.7024 17.0962 16.8434 20.9602 12.089 20.9602L12.031 21.0822ZM7.228 18.257L7.498 18.417C8.75239 19.1678 10.1983 19.5599 11.666 19.5582C15.688 19.5582 18.962 16.2842 18.963 12.2612C18.9642 10.3204 18.2096 8.46088 16.8373 7.08779C15.465 5.7147 13.606 4.95924 11.665 4.95824C7.643 4.95824 4.368 8.23224 4.368 12.2542C4.3664 13.7842 4.7834 15.2752 5.58 16.549L5.753 16.822L5.149 19.006L7.387 18.396L7.228 18.257ZM16.321 14.1682C16.088 14.0512 14.938 13.4832 14.726 13.4062C14.515 13.3282 14.36 13.2902 14.205 13.5232C14.05 13.7552 13.626 14.2582 13.498 14.4132C13.371 14.5682 13.242 14.5872 13.01 14.4712C12.777 14.3542 11.968 14.0902 11.015 13.2412C10.274 12.5812 9.776 11.7582 9.648 11.5262C9.52 11.2932 9.634 11.1672 9.75 11.0512C9.855 10.9462 9.983 10.7782 10.1 10.6422C10.216 10.5072 10.255 10.4102 10.332 10.2552C10.41 10.1002 10.371 9.9652 10.313 9.8492C10.255 9.7332 9.789 8.5902 9.596 8.1252C9.407 7.6712 9.215 7.7332 9.07 7.7212C8.935 7.7112 8.78 7.7112 8.625 7.7112C8.47 7.7112 8.218 7.7692 7.99 8.0212C7.761 8.2732 7.123 8.8732 7.123 10.0942C7.123 11.3152 8.01 12.4972 8.146 12.6712C8.281 12.8462 9.882 15.4262 12.441 16.4382C14.939 17.4262 14.996 17.2272 15.344 17.1882C15.693 17.1502 16.486 16.7052 16.641 16.2402C16.796 15.7752 16.796 15.3882 16.719 15.3102C16.642 15.2332 16.486 15.1942 16.254 15.0782L16.321 14.1682Z" />
        </svg>
      </a>
      
      <Footer />
    </div>
  );
}

export default App;
