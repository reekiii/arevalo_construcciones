import React, { useState, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

const PROJECTS = [
  {
    id: 1,
    titleEs: "Reforma Integral de Cocina",
    titleCa: "Reforma Integral de Cuina",
    location: "Calafell",
    descEs: "Apertura a concepto abierto, isla central y acabados porcelánicos de alta gama.",
    descCa: "Obertura a concepte obert, illa central i acabats porcel·lànics d'alta gamma.",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    titleEs: "Rehabilitación de Baño y Ducha",
    titleCa: "Rehabilitació de Bany i Dutxa",
    location: "El Vendrell",
    descEs: "Sustitución de bañera por plato de ducha a ras de suelo y grifería empotrada.",
    descCa: "Substitució de banyera per plat de dutxa a ras de terra i aixeteria encastada.",
    beforeImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1200",
    afterImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    titleEs: "Reforma de Salón y Zona de Día",
    titleCa: "Reforma de Saló i Zona de Dia",
    location: "Coma-ruga",
    descEs: "Demolición de tabiques, parquet laminado AC5 y nuevo sistema de iluminación.",
    descCa: "Enderroc d'envans, parquet laminat AC5 i nou sistema d'il·luminació.",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
  }
];

function BeforeAfterSlider() {
  const { lang, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const currentProject = PROJECTS[currentIndex];

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    setSliderPosition(50);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
    setSliderPosition(50);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 select-none">
      
      {/* Barra superior del Carrusel con selector de proyectos y flechas */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 bg-white/70 backdrop-blur-sm p-4 border border-stone-300 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-heading font-extrabold uppercase tracking-wider bg-brand-blue text-white px-2 py-0.5">
              {currentIndex + 1} / {PROJECTS.length}
            </span>
            <span className="text-xs text-stone-600 font-bold uppercase tracking-wider">
              {currentProject.location}
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-heading font-extrabold text-brand-blue mt-0.5">
            {lang === 'ca' ? currentProject.titleCa : currentProject.titleEs}
          </h4>
          <p className="text-xs text-stone-600">
            {lang === 'ca' ? currentProject.descCa : currentProject.descEs}
          </p>
        </div>

        {/* Flechas de navegación */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          <button
            onClick={prevSlide}
            aria-label="Proyecto anterior"
            className="w-10 h-10 bg-white hover:bg-brand-blue hover:text-white text-brand-blue border border-stone-300 flex items-center justify-center transition shadow-sm font-bold"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            aria-label="Siguiente proyecto"
            className="w-10 h-10 bg-white hover:bg-brand-blue hover:text-white text-brand-blue border border-stone-300 flex items-center justify-center transition shadow-sm font-bold"
          >
            →
          </button>
        </div>
      </div>

      {/* Contenedor del Slider Antes / Después con recorte CSS nativo */}
      <div 
        ref={containerRef}
        className="relative h-64 sm:h-80 md:h-[460px] rounded-none overflow-hidden shadow-2xl cursor-ew-resize border border-stone-300 touch-none bg-stone-900"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* AFTER IMAGE (Capa base de fondo al 100%) */}
        <div className="absolute inset-0">
          <img 
            src={currentProject.afterImage} 
            alt="Después de la reforma" 
            className="w-full h-full object-cover pointer-events-none select-none" 
            draggable="false"
          />
          <div 
            className={`absolute top-3 sm:top-4 right-3 sm:right-4 bg-brand-blue/90 text-white text-[11px] sm:text-xs md:text-sm font-heading font-extrabold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-none shadow-lg backdrop-blur-sm pointer-events-none uppercase tracking-wider transition-opacity duration-200 ${
              sliderPosition >= 90 ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {t('ba_after')}
          </div>
        </div>

        {/* BEFORE IMAGE (Capa superior con z-10 y recorte clip-path: oculta al 100% la capa inferior) */}
        <div 
          className="absolute inset-0 pointer-events-none select-none z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={currentProject.beforeImage} 
            alt="Antes de la reforma" 
            className="w-full h-full object-cover pointer-events-none select-none" 
            draggable="false"
          />
          <div 
            className={`absolute top-3 sm:top-4 left-3 sm:left-4 bg-gray-900/90 text-brand-accent text-[11px] sm:text-xs md:text-sm font-heading font-extrabold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-none shadow-lg backdrop-blur-sm pointer-events-none uppercase tracking-wider transition-opacity duration-200 ${
              sliderPosition <= 10 ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {t('ba_before')}
          </div>
        </div>

        {/* LÍNEA DIVISORIA Y MANIVELA DE ARRASTRE */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl z-20 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white text-brand-blue rounded-none shadow-2xl flex items-center justify-center border-2 border-brand-blue transform -translate-x-1/2">
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Botones de visualización rápida de 1 clic: 100% Antes | 50/50 | 100% Después */}
      <div className="grid grid-cols-3 gap-1.5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-2 mt-4">
        <button
          onClick={() => setSliderPosition(100)}
          className={`px-1.5 sm:px-3.5 py-2 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider transition border text-center ${
            sliderPosition === 100 
              ? 'bg-brand-blue text-white border-brand-blue shadow-sm' 
              : 'bg-white text-gray-700 hover:text-brand-blue border-stone-300'
          }`}
        >
          {lang === 'ca' ? '⏪ Abans (100%)' : '⏪ Antes (100%)'}
        </button>
        <button
          onClick={() => setSliderPosition(50)}
          className={`px-1.5 sm:px-3.5 py-2 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider transition border text-center ${
            sliderPosition === 50 
              ? 'bg-brand-blue text-white border-brand-blue shadow-sm' 
              : 'bg-white text-gray-700 hover:text-brand-blue border-stone-300'
          }`}
        >
          {lang === 'ca' ? '↔ 50/50' : '↔ 50/50'}
        </button>
        <button
          onClick={() => setSliderPosition(0)}
          className={`px-1.5 sm:px-3.5 py-2 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider transition border text-center ${
            sliderPosition === 0 
              ? 'bg-brand-blue text-white border-brand-blue shadow-sm' 
              : 'bg-white text-gray-700 hover:text-brand-blue border-stone-300'
          }`}
        >
          {lang === 'ca' ? 'Després (100%) ⏩' : 'Después (100%) ⏩'}
        </button>
      </div>

      {/* Puntos y selector de miniaturas/proyectos inferiores */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          {PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => goToSlide(idx)}
              className={`h-2 transition-all ${
                currentIndex === idx 
                  ? 'w-8 bg-brand-blue' 
                  : 'w-2 bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Ver proyecto ${idx + 1}`}
            />
          ))}
        </div>

        <p className="text-xs sm:text-sm text-stone-700 font-semibold text-right">
          ↔ {t('ba_desc')}
        </p>
      </div>

    </div>
  );
}

export default BeforeAfterSlider;
