import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const FAQS_DATA = {
  es: [
    {
      q: '¿Hacéis visitas y presupuestos sin compromiso en El Vendrell y alrededores?',
      a: 'Sí, de momento el desplazamiento a tu vivienda o terreno y el presupuesto es 100% gratuito y sin ningún compromiso. Javier Arévalo se desplaza personalmente para tomar medidas y valorar la obra in situ.'
    },
    {
      q: '¿En cuánto tiempo entregáis la valoración y presupuesto de la obra?',
      a: 'En aproximadamente 1 semana entregamos el presupuesto con todas las faenas y partidas detalladas con la máxima claridad.'
    },
    {
      q: '¿Cómo coordináis los diferentes oficios en una reforma integral ("Llave en mano")?',
      a: 'Javier Arévalo se encarga de organizarlo y coordinarlo todo directamente: albañilería, fontanería, electricidad, carpintería, pladur y pintura. Tienes un solo interlocutor responsable y no tienes que preocuparte de buscar ni coordinar a nadie.'
    },
    {
      q: '¿Hacéis trabajos pequeños y averías, o solo reformas completas?',
      a: 'Hacemos todo tipo de faenas: desde pequeñas reparaciones y averías puntuales, hasta reformas de cuartos de baño, cocinas, colocación de suelos porcelánicos, terrazas, reformas integrales y obra nueva.'
    },
    {
      q: '¿El presupuesto es cerrado o pueden aparecer sobrecostes al final?',
      a: 'Detallamos muy bien cada faena en el presupuesto para que no haya dudas. La confianza se basa en la claridad: si durante la obra surge un imprevisto o el cliente decide añadir una faena extra que no estaba en el presupuesto inicial, siempre se comenta y valora contigo antes de ejecutarla.'
    },
    {
      q: '¿Cómo se organiza la forma de pago de las obras?',
      a: 'El pago se realiza con máxima seguridad por fases: abono del material necesario por adelantado para comenzar, 40% al inicio de los trabajos, 30% a mitad de obra y el 30% restante al finalizar cuando compruebes la calidad de los acabados.'
    },
    {
      q: '¿Tenéis seguro en vigor y tramitáis las licencias en el ayuntamiento?',
      a: 'Sí, contamos con Seguro de Responsabilidad Civil en vigor para total tranquilidad del cliente y nos encargamos de tramitar las licencias y permisos de obra en los ayuntamientos de la zona.'
    },
    {
      q: '¿Hasta qué municipios y zonas os desplazáis habitualmente?',
      a: 'Nuestra zona principal de trabajo es El Vendrell y los municipios del Baix Penedès (Calafell, Cunit, Santa Oliva, Bellvei, Albinyana, La Bisbal del Penedès), con desplazamientos habituales a Cubelles, Sitges, Vilanova i la Geltrú, Vilafranca del Penedès, Valls, Tarragona y la provincia de Barcelona.'
    }
  ],
  ca: [
    {
      q: 'Feu visites i pressupostos sense compromís a El Vendrell i voltants?',
      a: 'Sí, de moment el desplaçament al teu habitatge o terreny i el pressupost és 100% gratuït i sense cap compromís. Javier Arévalo es desplaça personalment per prendre mides i valorar l\'obra in situ.'
    },
    {
      q: 'En quant de temps lliureu la valoració i pressupost de l\'obra?',
      a: 'En aproximadament 1 setmana lliurem el pressupost amb totes les feines i partides detallades amb la màxima claredat.'
    },
    {
      q: 'Com coordineu els diferents oficis en una reforma integral ("Claus en mà")?',
      a: 'Javier Arévalo s\'encarrega d\'organitzar-ho i coordinar-ho tot directament: paleteria, lampisteria, electricitat, fusteria, pladur i pintura. Tens un sol interlocutor responsable i no t\'has de preocupar de buscar ni coordinar ningú.'
    },
    {
      q: 'Feu treballs petits i avaries, o només reformes completes?',
      a: 'Fem tot tipus de feines: des de petites reparacions i avaries puntuals, fins a reformes de cambres de bany, cuines, col·locació de terres porcel·lànics, terrasses, reformes integrals i obra nova.'
    },
    {
      q: 'El pressupost és tancat o poden aparèixer sobrecostos al final?',
      a: 'Detallem molt bé cada feina en el pressupost perquè no hi hagi dubtes. La confiança es basa en la claredat: si durant l\'obra sorgeix un imprevist o el client decideix afegir una feina extra que no estava al pressupost inicial, sempre es comenta i es valora amb tu abans d\'executar-la.'
    },
    {
      q: 'Com s\'organitza la forma de pagament de les obres?',
      a: 'El pagament es fa amb màxima seguretat per fases: abonament del material necessari per avançat per començar, 40% a l\'inici dels treballs, 30% a meitat d\'obra i el 30% restant en finalitzar quan comprovis la qualitat dels acabats.'
    },
    {
      q: 'Teniu assegurança en vigor i tramiteu les llicències a l\'ajuntament?',
      a: 'Sí, comptem amb Assegurança de Responsabilitat Civil en vigor per a total tranquil·litat del client i ens encarreguem de tramitar les llicències i permisos d\'obra als ajuntaments de la zona.'
    },
    {
      q: 'A quins municipis i zones us desplaceu habitualment?',
      a: 'La nostra zona principal de treball és El Vendrell i els municipis del Baix Penedès (Calafell, Cunit, Santa Oliva, Bellvei, Albinyana, La Bisbal del Penedès), amb desplaçaments habituals a Cubelles, Sitges, Vilanova i la Geltrú, Vilafranca del Penedès, Valls, Tarragona i la província de Barcelona.'
    }
  ]
};

export default function FAQSection() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const activeLang = lang === 'ca' ? 'ca' : 'es';
  const faqs = FAQS_DATA[activeLang] || FAQS_DATA.es;

  // Inyectar esquema FAQPage para Google Rich Results
  useEffect(() => {
    const faqSchemaId = 'faq-page-jsonld';
    let scriptTag = document.getElementById(faqSchemaId);

    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = faqSchemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(item => ({
        '@type': 'Question',
        'name': item.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.a
        }
      }))
    };

    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById(faqSchemaId);
      if (el) el.remove();
    };
  }, [activeLang, faqs]);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 bg-brand-bg border-t border-stone-300/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera sección */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-brand-accent font-heading font-bold tracking-widest uppercase text-xs mb-2 block">
            {activeLang === 'ca' ? 'Dubtes Freqüents' : 'Preguntas Frecuentes'}
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-3">
            {activeLang === 'ca' ? 'Resolem els teus dubtes sobre reformes' : 'Resolvemos tus dudas sobre obras y reformas'}
          </h2>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto mb-4 rounded-none"></div>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
            {activeLang === 'ca' 
              ? 'Tot el que necessites saber sobre terminis, pressupostos, garanties i formes de treball a El Vendrell i comarca.' 
              : 'Todo lo que necesitas saber sobre plazos, presupuestos, garantías y formas de trabajo en El Vendrell y comarca.'}
          </p>
        </div>

        {/* Acordeón FAQ accesible */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-stone-300 shadow-sm transition duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading font-bold text-brand-blue hover:text-brand-accent transition focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg leading-snug">
                    {faq.q}
                  </span>
                  <span className={`text-xl flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-accent' : 'text-gray-400'}`}>
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-stone-100 animate-fade-in pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pie de dudas: llamada directa a Javier */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <span>{activeLang === 'ca' ? '¿Tens alguna altra pregunta? ' : '¿Tienes alguna otra duda? '}</span>
          <a 
            href={`https://wa.me/34622032704?text=${encodeURIComponent(
              activeLang === 'ca'
                ? 'Hola Javier, tinc un dubte sobre una reforma a la meva vivenda.'
                : 'Hola Javier, tengo una duda sobre una reforma en mi vivienda.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue font-bold hover:text-brand-accent underline underline-offset-4 ml-1"
          >
            {activeLang === 'ca' ? 'Pregunta-li directament a Javier per WhatsApp →' : 'Pregúntale directamente a Javier por WhatsApp →'}
          </a>
        </div>

      </div>
    </section>
  );
}
