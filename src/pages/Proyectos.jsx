import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Proyectos() {
  const { t } = useLanguage();

  const projects = [
    {
      img: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800",
      tag: t('p1_tag'),
      title: t('p1_title'),
      desc: t('p1_desc'),
    },
    {
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
      tag: t('p2_tag'),
      title: t('p2_title'),
      desc: t('p2_desc'),
    },
    {
      img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
      tag: t('p3_tag'),
      title: t('p3_title'),
      desc: t('p3_desc'),
    }
  ];

  return (
    <div className="animate-fade-in py-12 sm:py-16 md:py-20 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Clean, no AI pills */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-4">
            {t('projects_title')}
          </h1>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto mb-6 rounded-none"></div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            {t('projects_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((proj, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-none overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group border border-stone-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden h-56 sm:h-64">
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-brand-blue/90 text-white text-xs font-heading font-bold px-3 py-1 rounded-none backdrop-blur-sm uppercase tracking-wider">
                    {proj.tag}
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-blue mb-2.5 sm:mb-3 group-hover:text-brand-blue-light transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recuadro de Consulta CTA igual que en Servicios */}
        <div className="mt-12 sm:mt-16 bg-brand-bg-alt text-gray-800 rounded-none p-6 sm:p-10 md:p-12 text-center max-w-4xl mx-auto shadow-xl border border-stone-300">
          <h3 className="text-xl sm:text-3xl font-heading font-extrabold text-brand-blue mb-3">
            {t('projects_cta_title')}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
            {t('projects_cta_desc')}
          </p>
          <Link 
            to="/contacto"
            className="inline-block bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold py-3.5 px-8 rounded-none shadow-lg transition transform hover:-translate-y-0.5 text-xs sm:text-sm uppercase tracking-wider w-full sm:w-auto"
          >
            {t('projects_cta_btn')}
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Proyectos;
