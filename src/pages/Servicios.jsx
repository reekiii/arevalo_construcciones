import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Servicios() {
  const { t, lang } = useLanguage();

  const services = [
    {
      title: t('s1_title'),
      desc: t('s1_desc'),
      img: "/11.jpeg",
      features: lang === 'ca' 
        ? ["Canvi de banyera a plat de dutxa", "Enrajolats porcel·lànics", "Lampisteria i electricitat", "Mobiliari i aixetes"] 
        : ["Cambio de bañera a ducha", "Alicatados porcelánicos", "Fontanería y electricidad", "Mobiliario y grifería"]
    },
    {
      title: t('s2_title'),
      desc: t('s2_desc'),
      img: "/13.jpeg",
      features: lang === 'ca'
        ? ["Paviments porcel·lànics i gres", "Nivellació de terres", "Impermeabilització de terrasses", "Patis i exteriors"]
        : ["Pavimentos porcelánicos y gres", "Nivelación de suelos", "Impermeabilización de terrazas", "Patios y exteriores"]
    },
    {
      title: t('s3_title'),
      desc: t('s3_desc'),
      img: "/12.jpeg",
      features: lang === 'ca'
        ? ["Coordinació de tots els oficis", "Paleteria, pladur i pintura", "Terminis tancats per contracte", "Gestió de llicències d'obra"]
        : ["Coordinación de todos los oficios", "Albañilería, pladur y pintura", "Plazos cerrados por contrato", "Gestión de licencias de obra"]
    },
    {
      title: t('s4_title'),
      desc: t('s4_desc'),
      img: "/22.jpeg",
      features: lang === 'ca'
        ? ["Habitatges unifamiliars", "Restauració de façanes", "Arranjament de cobertes", "Segur RC i garantia total"]
        : ["Viviendas unifamiliares", "Restauración de fachadas", "Reparación de cubiertas", "Seguro RC y garantía total"]
    }
  ];

  return (
    <div className="animate-fade-in py-12 sm:py-16 md:py-20 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-4">
            {t('services_title')}
          </h1>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto mb-6 rounded-none"></div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            {t('services_desc')}
          </p>
        </div>
        
        {/* Clean 4-card 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((srv, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-none overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-stone-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-900">
                  <img 
                    src={srv.img} 
                    alt={srv.title} 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>
                  <span className="absolute bottom-4 left-5 text-white font-heading font-bold text-lg sm:text-xl drop-shadow">
                    {srv.title}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {srv.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-gray-100">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center text-xs font-medium text-gray-700">
                        <span className="w-4 h-4 rounded-none bg-emerald-100 text-emerald-700 flex items-center justify-center mr-2 font-bold text-[10px] flex-shrink-0 border border-emerald-300">✓</span>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Asesoramiento Técnico CTA */}
        <div className="bg-brand-bg-alt text-gray-800 rounded-none p-6 sm:p-10 md:p-12 text-center max-w-4xl mx-auto shadow-xl border border-stone-300">
          <h3 className="text-xl sm:text-3xl font-heading font-extrabold text-brand-blue mb-3">
            {t('services_cta_title')}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
            {t('services_cta_desc')}
          </p>
          <Link 
            to="/contacto"
            className="inline-block bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold py-3.5 px-8 rounded-none shadow-lg transition transform hover:-translate-y-0.5 text-xs sm:text-sm uppercase tracking-wider w-full sm:w-auto"
          >
            {t('services_cta_btn')}
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Servicios;
