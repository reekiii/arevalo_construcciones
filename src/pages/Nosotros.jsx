import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Nosotros() {
  const { t } = useLanguage();

  const values = [
    {
      title: t('we_c1_title'),
      desc: t('we_c1_desc'),
      icon: (
        <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: t('we_c2_title'),
      desc: t('we_c2_desc'),
      icon: (
        <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('we_c3_title'),
      desc: t('we_c3_desc'),
      icon: (
        <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: t('we_c4_title'),
      desc: t('we_c4_desc'),
      icon: (
        <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="animate-fade-in py-12 sm:py-16 md:py-20 bg-brand-bg text-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-brand-accent font-heading font-bold tracking-widest uppercase text-xs mb-2 block">
            {t('we_subtitle')}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-brand-blue mb-4">
            {t('we_title')}
          </h1>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto mb-6 rounded-none"></div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 font-normal">
            {t('we_desc')}
          </p>
        </div>

        {/* 4 Pilares de Garantía y Compromiso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left mb-12 sm:mb-16">
          {values.map((val, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-none border border-stone-300 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center mb-5 rounded-none border border-stone-200">
                  {val.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-heading font-bold text-brand-blue mb-3">
                  {val.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="bg-brand-bg-alt border border-stone-300 p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-lg">
          <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-blue mb-3">
            {t('cta_title')}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
            {t('cta_desc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold py-3.5 px-8 rounded-none transition duration-300 text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg"
            >
              {t('cta_btn')} →
            </Link>
            <Link
              to="/proyectos"
              className="inline-flex items-center justify-center bg-white hover:bg-stone-50 text-brand-blue font-heading font-bold py-3.5 px-8 rounded-none transition duration-300 text-xs sm:text-sm uppercase tracking-wider border border-stone-300 shadow-sm"
            >
              {t('about_btn_works')}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Nosotros;
