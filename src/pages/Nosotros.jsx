import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Nosotros() {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in py-12 sm:py-16 md:py-20 bg-brand-bg text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-brand-blue mb-4">
          {t('we_title')}
        </h1>
        <div className="w-20 h-1.5 bg-brand-accent mx-auto mb-6 sm:mb-8 rounded-none"></div>
        
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 font-normal mb-8 sm:mb-12 max-w-3xl mx-auto">
          {t('we_desc')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left mt-6 sm:mt-8 mb-8 sm:mb-12">
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-none border border-stone-300 shadow-lg hover:shadow-2xl transition duration-300">
            <h4 className="text-xl font-heading font-bold text-brand-blue mb-3">
              {t('we_c1_title')}
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {t('we_c1_desc')}
            </p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-none border border-stone-300 shadow-lg hover:shadow-2xl transition duration-300">
            <h4 className="text-xl font-heading font-bold text-brand-blue mb-3">
              {t('we_c2_title')}
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {t('we_c2_desc')}
            </p>
          </div>
        </div>

        <div className="pt-2 sm:pt-4">
          <Link
            to="/proyectos"
            className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold py-3.5 px-8 rounded-none transition duration-300 text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            {t('about_btn_works')} →
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Nosotros;
