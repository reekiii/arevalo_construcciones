import React, { useState, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

const PROJECTS = [
  {
    id: 1,
    titleEs: "Construcción de Piscina de Obra en Chalet",
    titleCa: "Construcció de Piscina d'Obra en Xalet",
    location: "Baix Penedès",
    descEs: "Construcción integral desde la excavación en tierra hasta la fábrica de ladrillo estructural, impermeabilización y coronación en gres porcelánico.",
    descCa: "Construcció integral des de l'excavació en terra fins a la fàbrica de maó estructural, impermeabilització i coronació en gres porcel·lànic.",
    featuresEs: [
      "Foso excavado y muros de ladrillo reforzado",
      "Impermeabilización técnica y vaso estanco",
      "Coronación porcelánica y agua cristalina"
    ],
    featuresCa: [
      "Foss excavat i murs de maó reforçat",
      "Impermeabilització tècnica i vas estanc",
      "Coronació porcel·lànica i aigua cristal·lina"
    ],
    beforeImage: "/35.jpeg",
    afterImage: "/37.jpeg",
  },
  {
    id: 2,
    titleEs: "Reforma de Baño y Ducha de Obra",
    titleCa: "Reforma de Bany i Dutxa d'Obra",
    location: "Baix Penedès",
    descEs: "Sustitución completa de bañera antigua por plato de ducha a ras de suelo en gres porcelánico gris con pendiente milimétrica y sumidero empotrado.",
    descCa: "Substitució completa de banyera antiga per plat de dutxa a ras de terra en gres porcel·lànic gris amb pendent mil·limètric i embornal encastat.",
    featuresEs: [
      "Demolición de tabique y desescombro limpio",
      "Plato a ras de suelo con pendiente exacta",
      "Porcelánico gris texturizado y perfilería de aluminio"
    ],
    featuresCa: [
      "Enderroc d'envà i runa neta",
      "Plat a ras de terra amb pendent exacte",
      "Porcel·lànic gris texturat i perfileria d'alumini"
    ],
    beforeImage: "/19.jpeg",
    afterImage: "/21.jpeg",
  },
  {
    id: 3,
    titleEs: "Pavimentación de Patio con Piedra Natural",
    titleCa: "Pavimentació de Pati amb Pedra Natural",
    location: "Baix Penedès",
    descEs: "Transformación de terreno irregular y con maleza en un patio exterior transitable, con solera nivelada y losas de pizarra natural colocadas artesanalmente.",
    descCa: "Transformació de terreny irregular i amb males herbes en un pati exterior transitable, amb solera anivellada i lloses de pissarra natural col·locades artesanalment.",
    featuresEs: [
      "Nivelación y solera de hormigón sobre tierra",
      "Colocación artesanal de losas de pizarra irregular",
      "Juntas de mortero resistentes al clima exterior"
    ],
    featuresCa: [
      "Anivellació i solera de formigó sobre terra",
      "Col·locació artesanal de lloses de pissarra irregular",
      "Juntes de morter resistents al clima exterior"
    ],
    beforeImage: "/42.jpeg",
    afterImage: "/43.jpeg",
  },
  {
    id: 4,
    titleEs: "Impermeabilización Técnica y Solado de Terraza",
    titleCa: "Impermeabilització Tècnica i Enrajolat de Terrassa",
    location: "Baix Penedès",
    descEs: "Solución definitiva para filtraciones en balcón exterior mediante la colocación de lámina técnica desolidarizadora Schlüter-DITRA y gres antideslizante.",
    descCa: "Solució definitiva per a filtracions en balcó exterior mitjançant la col·locació de làmina tècnica desolidaritzadora Schlüter-DITRA i gres antilliscant.",
    featuresEs: [
      "Lámina desolidarizadora Schlüter-DITRA",
      "Protección estanca contra humedades y heladas",
      "Pavimento exterior porcelánico antideslizante C3"
    ],
    featuresCa: [
      "Làmina desolidaritzadora Schlüter-DITRA",
      "Protecció estanca contra humitats i gelades",
      "Paviment exterior porcel·lànic antilliscant C3"
    ],
    beforeImage: "/48.jpeg",
    afterImage: "/45.jpeg",
  },
  {
    id: 5,
    titleEs: "Reforma de Terraza y Jardinera de Jardín",
    titleCa: "Reforma de Terrassa i Jardinera de Jardí",
    location: "Baix Penedès",
    descEs: "Preparación de maestras y base de mortero para nuevo pavimento de gres rústico exterior, con pendientes de desagüe y jardinera perimetral integrada.",
    descCa: "Preparació de mestres i base de morter per a nou paviment de gres rústic exterior, amb pendents de desguàs i jardinera perimetral integrada.",
    featuresEs: [
      "Nivelación con maestras y pendientes de desagüe",
      "Pavimento cerámico rústico resistente al exterior",
      "Bordillos y jardinera de obra integrada"
    ],
    featuresCa: [
      "Anivellació amb mestres i pendents de desguàs",
      "Paviment ceràmic rústic resistent a l'exterior",
      "Vorades i jardinera d'obra integrada"
    ],
    beforeImage: "/31.jpeg",
    afterImage: "/32.jpeg",
  },
  {
    id: 6,
    titleEs: "Impermeabilización de Cubierta con Rasilla Cerámica",
    titleCa: "Impermeabilització de Coberta amb Rasilla Ceràmica",
    location: "Baix Penedès",
    descEs: "Rehabilitación de azotea comunitaria con aplicación de tela asfáltica Chova termosoldada, remates en chimeneas y enlosado tradicional en espiga.",
    descCa: "Rehabilitació de terrat comunitari amb aplicació de tela asfàltica Chova termosoldada, remats en xemeneies i enrajolat tradicional en espiga.",
    featuresEs: [
      "Tela asfáltica Chova con sellado térmico",
      "Remates estancos en chimeneas de ventilación",
      "Colocación de rasilla cerámica en espiga"
    ],
    featuresCa: [
      "Tela asfàltica Chova amb segellat tèrmic",
      "Remats estancs en xemeneies de ventilació",
      "Col·locació de rasilla ceràmica en espiga"
    ],
    beforeImage: "/47.jpeg",
    afterImage: "/50.jpeg",
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
    <div className="w-full max-w-6xl mx-auto my-6 sm:my-10 select-none">
      <div className="bg-white/80 backdrop-blur-sm border border-stone-300 p-4 sm:p-6 lg:p-8 shadow-xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* COLUMNA IZQUIERDA: Slider Antes / Después en proporción vertical exacta (3:4) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Contenedor del Slider (Entra perfecto en pantalla: ancho máx 400px, alto ~533px, foto 100% entera) */}
            <div 
              ref={containerRef}
              className="relative aspect-[3/4] w-full max-w-[400px] rounded-none overflow-hidden shadow-2xl cursor-ew-resize border border-stone-300 touch-none bg-stone-950"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              {/* DESPUÉS (Capa base de fondo) */}
              <div className="absolute inset-0">
                <img 
                  src={currentProject.afterImage} 
                  alt={lang === 'ca' ? `${currentProject.titleCa} - Després Arévalo` : `${currentProject.titleEs} - Después Arévalo`} 
                  loading="lazy"
                  className="w-full h-full object-cover object-center pointer-events-none select-none" 
                  draggable="false"
                />
                <div 
                  className={`absolute top-3 right-3 bg-brand-blue/90 text-white text-[11px] font-heading font-extrabold px-2.5 py-1 rounded-none shadow-lg backdrop-blur-sm pointer-events-none uppercase tracking-wider transition-opacity duration-200 ${
                    sliderPosition >= 90 ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {t('ba_after')}
                </div>
              </div>

              {/* ANTES (Capa superior con recorte clip-path) */}
              <div 
                className="absolute inset-0 pointer-events-none select-none z-10"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src={currentProject.beforeImage} 
                  alt={lang === 'ca' ? `${currentProject.titleCa} - Abans Arévalo` : `${currentProject.titleEs} - Antes Arévalo`} 
                  loading="lazy"
                  className="w-full h-full object-cover object-center pointer-events-none select-none" 
                  draggable="false"
                />
                <div 
                  className={`absolute top-3 left-3 bg-black/80 text-white text-[11px] font-heading font-extrabold px-2.5 py-1 rounded-none shadow-lg backdrop-blur-sm pointer-events-none uppercase tracking-wider transition-opacity duration-200 ${
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
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white text-brand-blue rounded-none shadow-2xl flex items-center justify-center border-2 border-brand-blue transform -translate-x-1/2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Botones de visualización rápida 1-clic: Antes (100%) | 50/50 | Después (100%) */}
            <div className="grid grid-cols-3 gap-1.5 w-full max-w-[400px] mt-3">
              <button
                onClick={() => setSliderPosition(100)}
                className={`py-1.5 px-2 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider transition border text-center ${
                  sliderPosition === 100 
                    ? 'bg-brand-blue text-white border-brand-blue shadow-sm' 
                    : 'bg-white text-gray-700 hover:text-brand-blue border-stone-300'
                }`}
              >
                {lang === 'ca' ? '⏪ Abans' : '⏪ Antes'}
              </button>
              <button
                onClick={() => setSliderPosition(50)}
                className={`py-1.5 px-2 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider transition border text-center ${
                  sliderPosition === 50 
                    ? 'bg-brand-blue text-white border-brand-blue shadow-sm' 
                    : 'bg-white text-gray-700 hover:text-brand-blue border-stone-300'
                }`}
              >
                ↔ 50/50
              </button>
              <button
                onClick={() => setSliderPosition(0)}
                className={`py-1.5 px-2 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider transition border text-center ${
                  sliderPosition === 0 
                    ? 'bg-brand-blue text-white border-brand-blue shadow-sm' 
                    : 'bg-white text-gray-700 hover:text-brand-blue border-stone-300'
                }`}
              >
                {lang === 'ca' ? 'Després ⏩' : 'Después ⏩'}
              </button>
            </div>

            <p className="text-[11px] text-stone-500 font-medium text-center mt-2">
              ↔ {t('ba_desc')}
            </p>
          </div>

          {/* COLUMNA DERECHA: Datos del proyecto, faenas y llamada a la acción */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5 text-left">
            
            {/* Cabecera con selector y flechas */}
            <div className="flex items-center justify-between gap-3 border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-heading font-extrabold uppercase tracking-wider bg-brand-blue text-white px-2.5 py-0.5">
                  {lang === 'ca' ? `Projecte ${currentIndex + 1} de ${PROJECTS.length}` : `Proyecto ${currentIndex + 1} de ${PROJECTS.length}`}
                </span>
                <span className="text-xs text-stone-600 font-bold uppercase tracking-wider">
                  📍 {currentProject.location}
                </span>
              </div>

              {/* Flechas de navegación */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevSlide}
                  aria-label="Proyecto anterior"
                  className="w-9 h-9 bg-white hover:bg-brand-blue hover:text-white text-brand-blue border border-stone-300 flex items-center justify-center transition shadow-sm font-bold text-sm"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Siguiente proyecto"
                  className="w-9 h-9 bg-white hover:bg-brand-blue hover:text-white text-brand-blue border border-stone-300 flex items-center justify-center transition shadow-sm font-bold text-sm"
                >
                  →
                </button>
              </div>
            </div>

            {/* Título y descripción */}
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-brand-blue leading-tight mb-3">
                {lang === 'ca' ? currentProject.titleCa : currentProject.titleEs}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {lang === 'ca' ? currentProject.descCa : currentProject.descEs}
              </p>
            </div>

            {/* Trabajos realizados en esta obra */}
            <div className="space-y-2 py-3 border-y border-stone-200 bg-stone-50/70 p-3 sm:p-4">
              <div className="text-[11px] font-heading font-bold text-stone-500 uppercase tracking-wider mb-1">
                {lang === 'ca' ? 'Treballs executats a l\'obra:' : 'Trabajos ejecutados en la obra:'}
              </div>
              {(lang === 'ca' ? currentProject.featuresCa : currentProject.featuresEs).map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center text-xs sm:text-sm font-semibold text-gray-800">
                  <span className="w-4 h-4 rounded-none bg-emerald-100 text-emerald-700 flex items-center justify-center mr-2.5 font-bold text-[10px] flex-shrink-0 border border-emerald-300">✓</span>
                  {feat}
                </div>
              ))}
            </div>

            {/* Selector de miniaturas / barras */}
            <div className="flex items-center gap-2 pt-1">
              {PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 transition-all ${
                    currentIndex === idx 
                      ? 'w-10 bg-brand-blue' 
                      : 'w-3 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Ver proyecto ${idx + 1}`}
                />
              ))}
            </div>

            {/* Enlace secundario para explorar más obras en la galería */}
            <div className="pt-1">
              <a
                href="/proyectos"
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-stone-600 hover:text-brand-blue uppercase tracking-wider transition group"
              >
                <span>{lang === 'ca' ? 'Veure més projectes a la galeria' : 'Ver más proyectos en la galería'}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default BeforeAfterSlider;
