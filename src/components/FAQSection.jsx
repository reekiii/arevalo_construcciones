import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const FAQS_DATA = {
  es: [
    {
      q: '¿Hacéis visitas y presupuestos sin compromiso en El Vendrell y alrededores?',
      a: 'Sí, 100% gratuito y sin ningún compromiso. Javier Arévalo se desplaza personalmente a tu vivienda, piso o terreno en El Vendrell, Calafell, Cunit, Santa Oliva, Baix Penedès, Valls, Tarragona o Barcelona para tomar medidas exactas y asesorarte sobre las mejores opciones técnicas y de materiales.'
    },
    {
      q: '¿Cuánto tiempo se tarda en cambiar una bañera por plato de ducha?',
      a: 'Normalmente entre 24 y 48 horas de trabajo efectivo. Retiramos la bañera antigua, saneamos y adaptamos las tomas de fontanería, impermeabilizamos la zona, instalamos el nuevo plato de ducha de resina antideslizante o ducha de obra a ras de suelo y alicatamos las paredes con acabado impecable.'
    },
    {
      q: '¿Cómo coordináis los diferentes oficios en una reforma integral?',
      a: 'En Arévalo Construcciones ofrecemos un servicio "Llave en mano". Nosotros coordinamos directamente todos los gremios (albañilería, fontanería, electricidad, carpintería, pladur y pintura). Tú solo tratas con Javier Arévalo como único interlocutor responsable, con plazos de entrega firmados por contrato.'
    },
    {
      q: '¿Qué garantías y seguros tenéis para las obras y reformas?',
      a: 'Contamos con Seguro de Responsabilidad Civil profesional en vigor y ofrecemos garantía legal completa de 10 años en elementos estructurales (conforme a la Ley de Ordenación de la Edificación - LOE) y garantía en acabados. Trabajamos con contrato detallado partida por partida sin sobrecostes ocultos.'
    },
    {
      q: '¿Cuál es vuestra forma de pago por fases?',
      a: 'Para máxima seguridad y confianza mutua, el pago se realiza por fases de avance de obra: abono del material necesario para el inicio, 40% al comenzar los trabajos, 30% a mitad de ejecución y el 30% restante una vez finalizada la obra y revisada tu completa satisfacción.'
    },
    {
      q: '¿En qué zonas y municipios realizáis reformas habitualmente?',
      a: 'Nuestra base operativa está en El Vendrell y actuamos habitualmente en toda la comarca del Baix Penedès (Calafell, Cunit, Santa Oliva, Bellvei, Albinyana, La Bisbal del Penedès), además de desplazarnos con frecuencia a Valls, Tarragona ciudad, Camp de Tarragona y la provincia de Barcelona.'
    }
  ],
  ca: [
    {
      q: 'Feu visites i pressupostos sense compromís a El Vendrell i voltants?',
      a: 'Sí, 100% gratuït i sense cap compromís. Javier Arévalo es desplaça personalment al teu habitatge, pis o terreny a El Vendrell, Calafell, Cunit, Santa Oliva, Baix Penedès, Valls, Tarragona o Barcelona per prendre mides exactes i assessorar-te sobre les millors opcions tècniques i de materials.'
    },
    {
      q: 'Quant de temps es triga a canviar una banyera per plat de dutxa?',
      a: 'Normalment entre 24 i 48 hores de feina efectiva. Retirem la banyera antiga, sanegem i adaptem les preses de lampisteria, impermeabilitzem la zona, instal·lem el nou plat de dutxa de resina antilliscant o dutxa d\'obra a ras de terra i enrajolem les parets amb acabat impecable.'
    },
    {
      q: 'Com coordineu els diferents oficis en una reforma integral?',
      a: 'A Arévalo Construcciones oferim un servei "Claus en mà". Nosaltres coordinem directament tots els gremis (paleteria, lampisteria, electricitat, fusteria, pladur i pintura). Tu només tractes amb Javier Arévalo com a únic interlocutor responsable, amb terminis de lliurament signats per contracte.'
    },
    {
      q: 'Quines garanties i assegurances teniu per a les obres i reformes?',
      a: 'Comptem amb Assegurança de Responsabilitat Civil professional en vigor i oferim garantia legal completa de 10 anys en elements estructurals (conforme a la Llei d\'Ordenació de l\'Edificació - LOE) i garantia en acabats. Treballem amb contracte detallat partida per partida sense sobrecostos ocults.'
    },
    {
      q: 'Quina és la vostra forma de pagament per fases?',
      a: 'Per a màxima seguretat i confiança mútua, el pagament es fa per fases d\'avanç d\'obra: abonament del material necessari per a l\'inici, 40% en començar els treballs, 30% a meitat d\'execució i el 30% restant un cop finalitzada l\'obra i revisada la teva completa satisfacció.'
    },
    {
      q: 'A quines zones i municipis realitzeu reformes habitualment?',
      a: 'La nostra base operativa és a El Vendrell i actuem habitualment a tota la comarca del Baix Penedès (Calafell, Cunit, Santa Oliva, Bellvei, Albinyana, La Bisbal del Penedès), a més de desplaçar-nos amb freqüència a Valls, Tarragona ciutat, Camp de Tarragona i la província de Barcelona.'
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
