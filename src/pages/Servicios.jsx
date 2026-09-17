import React from 'react';

function Servicios() {
  return (
    <div className="animate-fade-in py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-4">Nuestros Servicios</h1>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto mb-6 rounded"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Ofrecemos un abanico completo de soluciones constructivas. Contamos con un equipo de profesionales cualificados y los mejores materiales del mercado para garantizar resultados impecables y duraderos en cada una de nuestras intervenciones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-brand-accent group">
            <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-brand-blue mb-4">Reformas Integrales</h3>
            <p className="text-gray-600 leading-relaxed">
              Transformamos por completo tu vivienda o local comercial. Nos encargamos de todo el proceso de principio a fin: albañilería, fontanería, electricidad, pintura y acabados. Gestionamos tu obra para que no tengas que preocuparte por nada, cumpliendo siempre con los plazos acordados.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-brand-blue rounded-xl p-10 shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-brand-accent text-white group transform md:-translate-y-4">
            <div className="bg-brand-blue-light w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-4">Obra Nueva</h3>
            <p className="text-brand-light leading-relaxed">
              Construimos la casa de tus sueños desde cero. Te asesoramos desde el diseño arquitectónico inicial, el estudio del terreno y la cimentación, hasta la entrega de llaves. Utilizamos técnicas modernas de construcción que aseguran la máxima eficiencia energética y un diseño de vanguardia.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-brand-accent group">
            <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-brand-blue mb-4">Rehabilitación</h3>
            <p className="text-gray-600 leading-relaxed">
              Restauración integral de fachadas, refuerzos estructurales y reparación de cubiertas. Le devolvemos a los edificios antiguos su esplendor original mejorando al mismo tiempo su seguridad estructural y el aislamiento térmico/acústico. Especialistas en comunidades de propietarios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
