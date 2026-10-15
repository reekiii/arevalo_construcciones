import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Servicios() {
  const { t, lang } = useLanguage();

  const services = [
    {
      title: t('s1_title'),
      desc: t('s1_desc'),
      img: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800",
      features: lang === 'ca' 
        ? ["Paleteria i enderrocs", "Lampisteria i electricitat", "Pladur i aïllaments", "Pintura i acabats"] 
        : ["Albañilería y demolición", "Fontanería y electricidad", "Pladur y aislamientos", "Pintura y acabados"]
    },
    {
      title: t('s2_title'),
      desc: t('s2_desc'),
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
      features: lang === 'ca'
        ? ["Fonamentació i estructura", "Assessorament tècnic", "Eficiència energètica", "Lliurament claus en mà"]
        : ["Cimentación y estructura", "Asesoramiento técnico", "Eficiencia energética", "Entrega llave en mano"]
    },
    {
      title: t('s3_title'),
      desc: t('s3_desc'),
      img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
      features: lang === 'ca'
        ? ["Restauració de façanes", "Reforços estructurals", "Impermeabilització", "Comunitats de propietaris"]
        : ["Restauración de fachadas", "Refuerzos estructurales", "Impermeabilización", "Comunidades de propietarios"]
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
        
        {/* Clean 3-column cards without button spam */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((srv, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-none overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-stone-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img 
                    src={srv.img} 
                    alt={srv.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent"></div>
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
