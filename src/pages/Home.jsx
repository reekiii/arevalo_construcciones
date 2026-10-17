import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

function Home() {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      {/* ===== HERO: LEFT-ALIGNED AS REQUESTED, NO AI PILLS ===== */}
      {/* ===== HERO: LEFT-ALIGNED AS REQUESTED, NO AI PILLS ===== */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/fondohero.jpeg"
            alt="Obra y piscina Arévalo Construcciones"
            className="w-full h-full object-cover opacity-65 scale-105 transform hover:scale-100 transition-transform duration-1000"
            onError={(e) => {
              e.target.src = "/13.jpeg";
            }}
          />
          {/* Velo oscuro cinematográfico neutro para ver la foto real sin tinte azul */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/35 sm:via-black/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36 flex flex-col items-start text-left z-10 w-full">
          
          {/* Clean architectural border-left tagline instead of orange AI pill */}
          <span className="text-brand-accent font-heading font-bold tracking-wider mb-4 uppercase text-xs sm:text-sm md:text-base border-l-4 border-brand-accent pl-3">
            {t('hero_tagline')}
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-5 sm:mb-6 max-w-3xl leading-[1.1] text-white drop-shadow-md text-left">
            {t('hero_title')}
          </h1>

          <p className="text-base sm:text-xl max-w-2xl text-stone-200 mb-8 sm:mb-10 font-normal leading-relaxed drop-shadow text-left">
            {t('hero_desc')}
          </p>

          <div className="flex flex-col sm:flex-row space-y-3.5 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-10 sm:mb-12">
            <Link
              to="/contacto"
              className="bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold text-sm uppercase tracking-wider py-4 px-9 rounded-none shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-brand-blue/30 text-center border border-white/20"
            >
              {t('hero_btn_quote')}
            </Link>
            <Link
              to="/servicios"
              className="bg-white/10 hover:bg-white/20 border-2 border-white/40 hover:border-white text-white font-heading font-bold text-sm uppercase tracking-wider py-4 px-9 rounded-none backdrop-blur-sm transition-all duration-300 text-center"
            >
              {t('hero_btn_services')}
            </Link>
          </div>

          {/* Métricas compactas y elegantes integradas directamente abajo de los botones */}
          <div className="pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-8 max-w-2xl w-full">
            <div>
              <div className="text-xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-brand-accent mb-0.5">
                {t('stat_years')}
              </div>
              <div className="text-[10px] sm:text-xs text-stone-300 font-medium tracking-wide leading-tight">
                {t('stat_years_lbl')}
              </div>
            </div>

            <div className="border-l border-white/15 pl-3 sm:pl-8">
              <div className="text-xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-brand-accent mb-0.5">
                {t('stat_clients')}
              </div>
              <div className="text-[10px] sm:text-xs text-stone-300 font-medium tracking-wide leading-tight">
                {t('stat_clients_lbl')}
              </div>
            </div>

            <div className="border-l border-white/15 pl-3 sm:pl-8">
              <div className="text-xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-brand-accent mb-0.5">
                {t('stat_turnkey')}
              </div>
              <div className="text-[10px] sm:text-xs text-stone-300 font-medium tracking-wide leading-tight">
                {t('stat_turnkey_lbl')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTAL "QUIÉNES SOMOS" ===== */}
      <section className="py-14 sm:py-20 md:py-24 bg-brand-bg border-b border-stone-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Texto y Llamadas a la acción */}
            <div>
              <span className="text-brand-accent font-heading font-bold tracking-widest uppercase text-xs mb-2 block">
                {t('nav_about')}
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-4 leading-tight">
                {t('about_title')}
              </h2>
              <div className="w-20 h-1.5 bg-brand-accent mb-6 rounded-none"></div>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5 font-normal">
                {t('about_p1')}
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 font-normal">
                {t('about_p2')}
              </p>

              {/* Puntos de confianza */}
              <div className="space-y-3 mb-8 sm:mb-10">
                <div className="flex items-center text-sm font-semibold text-gray-800">
                  <span className="w-5 h-5 rounded-none bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 flex-shrink-0 font-bold text-xs border border-emerald-300">✓</span>
                  {t('about_check1')}
                </div>
                <div className="flex items-center text-sm font-semibold text-gray-800">
                  <span className="w-5 h-5 rounded-none bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 flex-shrink-0 font-bold text-xs border border-emerald-300">✓</span>
                  {t('about_check2')}
                </div>
                <div className="flex items-center text-sm font-semibold text-gray-800">
                  <span className="w-5 h-5 rounded-none bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 flex-shrink-0 font-bold text-xs border border-emerald-300">✓</span>
                  {t('about_check3')}
                </div>
                <div className="flex items-center text-sm font-semibold text-gray-800">
                  <span className="w-5 h-5 rounded-none bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 flex-shrink-0 font-bold text-xs border border-emerald-300">✓</span>
                  {t('about_check4')}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <Link
                  to="/nosotros"
                  className="flex items-center justify-center bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold py-3.5 px-6 rounded-none shadow-lg transition duration-300 transform hover:-translate-y-0.5 text-sm uppercase tracking-wider text-center"
                >
                  {t('about_btn_more')}
                </Link>
                <Link
                  to="/proyectos"
                  className="flex items-center justify-center bg-white/70 hover:bg-white text-brand-blue font-heading font-bold py-3.5 px-6 rounded-none transition duration-300 text-sm uppercase tracking-wider text-center border border-stone-300 shadow-sm"
                >
                  {t('about_btn_works')}
                </Link>
              </div>
            </div>

            {/* Cuadrícula de fotos reales */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-5 relative items-start">
              <div className="relative overflow-hidden rounded-none shadow-xl transform hover:scale-[1.01] transition duration-500 border border-stone-300 aspect-[3/4] bg-stone-900">
                <img
                  src="/22.jpeg"
                  alt="Restauración de fachada con grúa Arévalo"
                  className="w-full h-full object-cover object-center rounded-none block"
                />
              </div>
              <div className="relative overflow-hidden rounded-none shadow-xl transform hover:scale-[1.01] transition duration-500 mt-6 sm:mt-8 md:mt-10 border border-stone-300 aspect-[3/4] bg-stone-900">
                <img
                  src="/11.jpeg"
                  alt="Reforma de baño y plato de ducha Arévalo"
                  className="w-full h-full object-cover object-center rounded-none block"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== ANTES Y DESPUÉS INTERACTIVO (SOLICITADO) ===== */}
      <section className="py-14 sm:py-20 md:py-24 bg-brand-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-3">
              {t('ba_title')}
            </h2>
            <div className="w-20 h-1.5 bg-brand-accent mx-auto mb-4 rounded-none"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              {t('ba_desc')}
            </p>
          </div>

          <BeforeAfterSlider />

          {/* Bloque "¿Preparado para empezar tu reforma?" con fondo beige y bordes rectos */}
          <div className="mt-12 sm:mt-16 max-w-4xl mx-auto bg-brand-bg text-gray-800 rounded-none p-6 sm:p-10 md:p-12 text-center shadow-xl border border-stone-400/50 relative overflow-hidden">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-heading font-extrabold text-brand-blue mb-3 leading-tight">
              {t('cta_title')}
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
              {t('cta_desc')}
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold py-3.5 px-8 sm:px-10 rounded-none shadow-lg transition duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm uppercase tracking-wider w-full sm:w-auto"
            >
              {t('cta_btn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
