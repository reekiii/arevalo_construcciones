import React from 'react';

function Contacto() {
  return (
    <div className="animate-fade-in py-20 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Información de contacto y WhatsApp */}
            <div className="md:col-span-2 bg-brand-blue text-white p-10 md:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-heading font-bold mb-6">Hablemos de tu proyecto</h3>
                <p className="text-brand-light mb-10 text-lg">
                  ¿Tienes una idea en mente? Estamos listos para hacerla realidad. Contáctanos y te asesoraremos sin compromiso.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 text-brand-accent mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm text-brand-light uppercase tracking-wider font-semibold">Llámanos</p>
                      <span className="text-2xl font-bold font-heading">622 03 27 04</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 text-brand-accent mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm text-brand-light uppercase tracking-wider font-semibold">Email</p>
                      <span className="text-lg">info@arevaloconstrucciones.es</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de WhatsApp */}
              <a 
                href="https://wa.me/34622032704?text=Hola,%20me%20gustaría%20pedir%20un%20presupuesto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-lg transition duration-300 w-full shadow-lg transform hover:-translate-y-1"
              >
                <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 21.0822C10.5186 21.0829 9.04306 20.6726 7.766 19.897L7.545 19.765L3.89 20.735L4.885 17.155L4.74 16.924C3.88289 15.5411 3.42939 13.9351 3.431 12.2842C3.43261 7.5342 7.29161 3.6702 12.046 3.6702C14.3486 3.67252 16.5546 4.57147 18.1818 6.20235C19.809 7.83323 20.7047 10.0416 20.704 12.3462C20.7024 17.0962 16.8434 20.9602 12.089 20.9602L12.031 21.0822ZM7.228 18.257L7.498 18.417C8.75239 19.1678 10.1983 19.5599 11.666 19.5582C15.688 19.5582 18.962 16.2842 18.963 12.2612C18.9642 10.3204 18.2096 8.46088 16.8373 7.08779C15.465 5.7147 13.606 4.95924 11.665 4.95824C7.643 4.95824 4.368 8.23224 4.368 12.2542C4.3664 13.7842 4.7834 15.2752 5.58 16.549L5.753 16.822L5.149 19.006L7.387 18.396L7.228 18.257ZM16.321 14.1682C16.088 14.0512 14.938 13.4832 14.726 13.4062C14.515 13.3282 14.36 13.2902 14.205 13.5232C14.05 13.7552 13.626 14.2582 13.498 14.4132C13.371 14.5682 13.242 14.5872 13.01 14.4712C12.777 14.3542 11.968 14.0902 11.015 13.2412C10.274 12.5812 9.776 11.7582 9.648 11.5262C9.52 11.2932 9.634 11.1672 9.75 11.0512C9.855 10.9462 9.983 10.7782 10.1 10.6422C10.216 10.5072 10.255 10.4102 10.332 10.2552C10.41 10.1002 10.371 9.9652 10.313 9.8492C10.255 9.7332 9.789 8.5902 9.596 8.1252C9.407 7.6712 9.215 7.7332 9.07 7.7212C8.935 7.7112 8.78 7.7112 8.625 7.7112C8.47 7.7112 8.218 7.7692 7.99 8.0212C7.761 8.2732 7.123 8.8732 7.123 10.0942C7.123 11.3152 8.01 12.4972 8.146 12.6712C8.281 12.8462 9.882 15.4262 12.441 16.4382C14.939 17.4262 14.996 17.2272 15.344 17.1882C15.693 17.1502 16.486 16.7052 16.641 16.2402C16.796 15.7752 16.796 15.3882 16.719 15.3102C16.642 15.2332 16.486 15.1942 16.254 15.0782L16.321 14.1682Z" />
                </svg>
                Contactar por WhatsApp
              </a>
            </div>

            {/* Formulario (solo visual) */}
            <div className="md:col-span-3 p-10 md:p-14">
              <h4 className="text-2xl font-heading font-bold text-brand-blue mb-8">Envíanos un mensaje</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
                    <input type="text" id="nombre" className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">Teléfono de contacto</label>
                    <input type="tel" id="telefono" className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition" placeholder="600 00 00 00" />
                  </div>
                </div>
                <div>
                  <label htmlFor="servicio" className="block text-sm font-semibold text-gray-700 mb-2">Servicio de interés</label>
                  <select id="servicio" className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition bg-white">
                    <option>Selecciona una opción...</option>
                    <option>Reformas Integrales</option>
                    <option>Obra Nueva</option>
                    <option>Rehabilitación de Fachadas</option>
                    <option>Otro servicio</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">Detalles del proyecto</label>
                  <textarea id="mensaje" rows="4" className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition resize-none" placeholder="Cuéntanos qué necesitas hacer..."></textarea>
                </div>
                <button type="button" className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold py-4 px-6 rounded-lg transition duration-300 shadow-md">
                  Solicitar Presupuesto
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
