import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ALL_PROJECTS = [
  {
    id: 1,
    category: 'piscinas',
    img: '/37.jpeg',
    location: 'Baix Penedès',
    tagEs: 'Piscina y Exterior',
    tagCa: 'Piscina i Exterior',
    titleEs: 'Piscina de Obra con Coronación Porcelánica',
    titleCa: "Piscina d'Obra amb Coronació Porcel·lànica",
    descEs: 'Construcción completa desde excavación y fábrica de ladrillo hasta impermeabilización técnica, coronación y puesta en marcha.',
    descCa: "Construcció completa des d'excavació i fàbrica de maó fins a impermeabilització tècnica, coronació i posada en marxa."
  },
  {
    id: 2,
    category: 'banos',
    img: '/21.jpeg',
    location: 'Baix Penedès',
    tagEs: 'Reforma de Baño',
    tagCa: 'Reforma de Bany',
    titleEs: 'Plato de Ducha de Obra a Ras de Suelo',
    titleCa: "Plat de Dutxa d'Obra a Ras de Terra",
    descEs: 'Sustitución integral de bañera por ducha de obra con gres porcelánico texturizado, pendiente milimétrica y sumidero empotrado.',
    descCa: "Substitució integral de banyera per dutxa d'obra amb gres porcel·lànic texturat, pendent mil·limètric i embornal encastat."
  },
  {
    id: 3,
    category: 'piscinas',
    img: '/13.jpeg',
    location: 'Baix Penedès',
    tagEs: 'Pavimento Exterior',
    tagCa: 'Paviment Exterior',
    titleEs: 'Solárium y Pavimento Porcelánico Antideslizante C3',
    titleCa: 'Solàrium i Paviment Porcel·lànic Antilliscant C3',
    descEs: 'Enlosado de gran formato con tratamiento antihielo y antideslizante, integrado con canaletas ocultas de drenaje.',
    descCa: 'Enrajolat de gran format amb tractament antigel i antilliscant, integrat amb canaletes ocultes de drenatge.'
  },
  {
    id: 4,
    category: 'rehabilitacion',
    img: '/22.jpeg',
    location: 'Baix Penedès',
    tagEs: 'Rehabilitación Urbana',
    tagCa: 'Rehabilitació Urbana',
    titleEs: 'Restauración de Fachada y Cornisas en Altura',
    titleCa: 'Restauració de Façana i Cornises en Alçada',
    descEs: 'Saneamiento de revocos, reparación de cornisas, bajantes pluviales y pintura técnica exterior con plataforma elevadora.',
    descCa: "Sanejament d'arrebossats, reparació de cornises, baixants pluvials i pintura tècnica exterior amb plataforma elevadora."
  },
  {
    id: 5,
    category: 'banos',
    img: '/11.jpeg',
    location: 'Baix Penedès',
    tagEs: 'Baño de Diseño',
    tagCa: 'Bany de Disseny',
    titleEs: 'Reforma de Baño con Mosaico y Tarima Cerámica',
    titleCa: 'Reforma de Bany amb Mosaic i Tarima Ceràmica',
    descEs: 'Combinación de plato de resina blanca, pared frontal decorativa en gresite neutro y suelo porcelánico imitación madera.',
    descCa: 'Combinació de plat de resina blanca, paret frontal decorativa en gresit neutre i terra porcel·lànic imitació fusta.'
  },
  {
    id: 6,
    category: 'piscinas',
    img: '/43.jpeg',
    location: 'Baix Penedès',
    tagEs: 'Exteriores y Rústico',
    tagCa: 'Exteriors i Rústic',
    titleEs: 'Pavimentación de Patio con Losas de Pizarra Natural',
    titleCa: 'Pavimentació de Pati amb Lloses de Pissarra Natural',
    descEs: 'Nivelación de solera sobre terreno irregular y colocación artesanal de losas de pizarra irregular con junta ancha de mortero.',
    descCa: "Nivellació de solera sobre terreny irregular i col·locació artesanal de lloses de pissarra irregular amb junta ampla de morter."
  },
  {
    id: 7,
    category: 'suelos',
    img: '/45.jpeg',
    location: 'Baix Penedès',
    tagEs: 'Terraza y Aislamiento',
    tagCa: 'Terrassa i Aïllament',
    titleEs: 'Impermeabilización Schlüter-DITRA y Gres Exterior',
    titleCa: 'Impermeabilització Schlüter-DITRA i Gres Exterior',
    descEs: 'Desolidarización e impermeabilización técnica bajo baldosa con lámina naranja DITRA, garantizando estanqueidad total.',
    descCa: 'Desolidarització i impermeabilització tècnica sota rajola amb làmina taronja DITRA, garantint estanquitat total.'
  },
  {
    id: 8,
    category: 'rehabilitacion',
    img: '/17.jpeg',
    location: 'Baix Penedès',
    tagEs: 'Cubiertas Rústicas',
    tagCa: 'Cobertes Rústiques',
    titleEs: 'Rehabilitación de Tejado Tradicional con Teja Árabe',
    titleCa: 'Rehabilitació de Teulada Tradicional amb Teula Àrab',
    descEs: 'Reparación estructural de vigas, impermeabilización bajo teja y recuperación de teja cerámica tradicional envejecida.',
    descCa: 'Reparació estructural de bigues, impermeabilització sota teula i recuperació de teula ceràmica tradicional envellida.'
  },
  {
    id: 9,
    category: 'suelos',
    img: '/4.jpeg',
    location: 'Baix Penedès',
    tagEs: 'Interiorismo',
    tagCa: 'Interiorisme',
    titleEs: 'Suelo Porcelánico Rectificado en Salón y Distribuidor',
    titleCa: 'Terra Porcel·lànic Rectificat en Saló i Distribuïdor',
    descEs: 'Colocación con cuñas autonivelantes y junta rectificada mínima de 1.5mm para un acabado continuo, luminoso y elegante.',
    descCa: "Col·locació amb falques autonivellants i junta rectificada mínima d'1.5mm per a un acabat continu, lluminós i elegant."
  },
  {
    id: 10,
    category: 'piscinas',
    img: '/32.jpeg',
    location: 'Baix Penedès',
    tagEs: 'Exteriores',
    tagCa: 'Exteriors',
    titleEs: 'Terraza Exterior en Gres Rústico con Jardinera',
    titleCa: 'Terrassa Exterior en Gres Rústic amb Jardinera',
    descEs: 'Preparación de base de mortero, solado resistente a heladas y remates con bordillos y jardineras de obra integradas.',
    descCa: "Preparació de base de morter, paviment resistent a gelades i acabats amb vorades i jardineres d'obra integrades."
  },
  {
    id: 11,
    category: 'estructuras',
    img: '/8.jpeg',
    location: 'Baix Penedès',
    tagEs: 'Construcción Industrial',
    tagCa: 'Construcció Industrial',
    titleEs: 'Levantamiento de Muro en Bloque de Hormigón',
    titleCa: 'Aixecament de Mur en Bloc de Formigó',
    descEs: 'Construcción de divisiones de gran altura para naves industriales, con refuerzo perimetral y zunchos de atado.',
    descCa: 'Construcció de divisions de gran alçada per a naus industrials, amb reforç perimetral i cércols de lligat.'
  },
  {
    id: 12,
    category: 'estructuras',
    img: '/57.jpeg',
    location: 'Baix Penedès',
    tagEs: 'Albañilería y Cerramientos',
    tagCa: 'Paleteria i Tancaments',
    titleEs: 'Tabiquería de Ladrillo Cerámico y Distribución',
    titleCa: 'Envans de Maó Ceràmic i Distribució',
    descEs: 'Levantamiento de paredes divisorias y cerramientos con ladrillo cerámico sobre andamiaje profesional.',
    descCa: 'Aixecament de parets divisòries i tancaments amb maó ceràmic sobre bastides professionals.'
  }
];

function Proyectos() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', labelEs: 'Todos los Proyectos', labelCa: 'Tots els Projectes' },
    { id: 'piscinas', labelEs: 'Piscinas y Exteriores', labelCa: 'Piscines i Exteriors' },
    { id: 'banos', labelEs: 'Baños y Cocinas', labelCa: 'Banys i Cuines' },
    { id: 'suelos', labelEs: 'Suelos y Terrazas', labelCa: 'Terres i Terrasses' },
    { id: 'rehabilitacion', labelEs: 'Fachadas y Cubiertas', labelCa: 'Façanes i Cobertes' },
    { id: 'estructuras', labelEs: 'Estructuras y Naves', labelCa: 'Estructures i Naus' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="animate-fade-in py-12 sm:py-16 md:py-20 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-brand-accent font-heading font-bold tracking-widest uppercase text-xs mb-2 block">
            {lang === 'ca' ? 'OBRES I REFORMES REALS' : 'OBRAS Y REFORMAS REALES'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-4">
            {t('projects_title')}
          </h1>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto mb-6 rounded-none"></div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            {t('projects_desc')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition border ${
                activeCategory === cat.id
                  ? 'bg-brand-blue text-white border-brand-blue shadow-md'
                  : 'bg-white/80 text-gray-700 hover:text-brand-blue hover:bg-white border-stone-300'
              }`}
            >
              {lang === 'ca' ? cat.labelCa : cat.labelEs}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Masonry Layout: Proporción 100% natural, sin recortes ni badges naranjas) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 mb-12 sm:mb-16 [column-fill:_balance]">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              className="break-inside-avoid mb-6 bg-white rounded-none overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group border border-stone-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden bg-stone-950">
                  <img 
                    src={proj.img} 
                    alt={lang === 'ca' ? proj.titleCa : proj.titleEs} 
                    className="w-full h-auto block object-cover transform group-hover:scale-[1.02] transition duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-brand-blue/90 text-white text-[11px] font-heading font-bold px-2.5 py-1 rounded-none backdrop-blur-sm uppercase tracking-wider">
                    {lang === 'ca' ? proj.tagCa : proj.tagEs}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 text-stone-800 text-[10px] font-heading font-bold px-2.5 py-0.5 rounded-none shadow-sm uppercase tracking-wider">
                    📍 {proj.location}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-brand-blue mb-2.5 leading-snug">
                    {lang === 'ca' ? proj.titleCa : proj.titleEs}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {lang === 'ca' ? proj.descCa : proj.descEs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recuadro de Consulta CTA */}
        <div className="mt-12 sm:mt-16 bg-brand-bg-alt text-gray-800 rounded-none p-6 sm:p-10 md:p-12 text-center max-w-4xl mx-auto shadow-xl border border-stone-300">
          <h3 className="text-xl sm:text-3xl font-heading font-extrabold text-brand-blue mb-3">
            {t('projects_cta_title')}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
            {t('projects_cta_desc')}
          </p>
          <div className="flex items-center justify-center">
            <Link 
              to="/contacto"
              className="inline-block bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold py-3.5 px-8 sm:px-10 rounded-none shadow-lg transition transform hover:-translate-y-0.5 text-xs sm:text-sm uppercase tracking-wider w-full sm:w-auto"
            >
              {t('projects_cta_btn')}
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Proyectos;
