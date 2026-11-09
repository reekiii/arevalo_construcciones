// Municipios donde trabaja Arévalo Construcciones (solo Cataluña).
// Se usa en la web (páginas /zonas/:slug) y en el prerender SEO (scripts/generate-routes.js).
// Los tiempos de desplazamiento son aproximados desde El Vendrell.

export const ZONAS = [
  {
    slug: 'el-vendrell',
    name: 'El Vendrell',
    nameCa: 'el Vendrell',
    comarca: 'Baix Penedès',
    provincia: 'Tarragona',
    minutos: 0,
    es: {
      intro:
        'El Vendrell es nuestra casa: aquí tenemos la sede y aquí empezó la tradición familiar de tres generaciones de albañiles. Trabajamos en el casco urbano, en Coma-ruga, Sant Salvador, El Francàs y en las urbanizaciones del municipio, normalmente con visita en el mismo día o al siguiente.',
      focus: [
        'Reformas de baños y cambio de bañera por plato de ducha en pisos del centro y de Coma-ruga.',
        'Reformas integrales de casas y adosados en urbanizaciones.',
        'Terrazas, piscinas e impermeabilizaciones en viviendas cerca del mar.'
      ]
    },
    ca: {
      intro:
        "El Vendrell és casa nostra: aquí tenim la seu i aquí va començar la tradició familiar de tres generacions de paletes. Treballem al nucli urbà, a Coma-ruga, Sant Salvador, el Francàs i a les urbanitzacions del municipi, normalment amb visita el mateix dia o l'endemà.",
      focus: [
        'Reformes de banys i canvi de banyera per plat de dutxa en pisos del centre i de Coma-ruga.',
        'Reformes integrals de cases i adossats a urbanitzacions.',
        'Terrasses, piscines i impermeabilitzacions en habitatges a prop del mar.'
      ]
    },
    nearby: ['calafell', 'cunit', 'tarragona']
  },
  {
    slug: 'calafell',
    name: 'Calafell',
    nameCa: 'Calafell',
    comarca: 'Baix Penedès',
    provincia: 'Tarragona',
    minutos: 10,
    es: {
      intro:
        'Calafell está a unos 10 minutos de nuestra base. Hacemos obras tanto en Calafell poble como en la zona de playa y Segur de Calafell, donde abundan los apartamentos y segundas residencias que necesitan puesta a punto.',
      focus: [
        'Renovación de apartamentos de playa: baños, cocinas y suelos porcelánicos.',
        'Reparación de terrazas y balcones afectados por la humedad y el salitre.',
        'Reformas integrales llave en mano para segundas residencias.'
      ]
    },
    ca: {
      intro:
        "Calafell és a uns 10 minuts de la nostra base. Fem obres tant a Calafell poble com a la zona de platja i Segur de Calafell, on hi ha molts apartaments i segones residències que necessiten posada a punt.",
      focus: [
        'Renovació d’apartaments de platja: banys, cuines i terres porcel·lànics.',
        'Reparació de terrasses i balcons afectats per la humitat i el salnitre.',
        'Reformes integrals clau en mà per a segones residències.'
      ]
    },
    nearby: ['el-vendrell', 'cunit', 'cubelles']
  },
  {
    slug: 'cunit',
    name: 'Cunit',
    nameCa: 'Cunit',
    comarca: 'Baix Penedès',
    provincia: 'Tarragona',
    minutos: 15,
    es: {
      intro:
        'En Cunit trabajamos a menudo en casas unifamiliares y adosados de las urbanizaciones, además de pisos en primera línea. Está a unos 15 minutos de El Vendrell, así que la visita y el seguimiento de obra son rápidos.',
      focus: [
        'Piscinas: coronación, impermeabilización y soláriums.',
        'Reformas de cocinas y baños en casas y adosados.',
        'Pavimentos exteriores y cerramientos de terraza.'
      ]
    },
    ca: {
      intro:
        "A Cunit treballem sovint en cases unifamiliars i adossats de les urbanitzacions, a més de pisos a primera línia. És a uns 15 minuts del Vendrell, així que la visita i el seguiment d'obra són ràpids.",
      focus: [
        'Piscines: coronament, impermeabilització i soláriums.',
        'Reformes de cuines i banys en cases i adossats.',
        'Paviments exteriors i tancaments de terrassa.'
      ]
    },
    nearby: ['calafell', 'cubelles', 'el-vendrell']
  },
  {
    slug: 'cubelles',
    name: 'Cubelles',
    nameCa: 'Cubelles',
    comarca: 'Garraf',
    provincia: 'Barcelona',
    minutos: 20,
    es: {
      intro:
        'Cubelles, ya en la comarca del Garraf, está a unos 20 minutos. Es una de nuestras zonas habituales: pisos en el núcleo, casas en las urbanizaciones y viviendas cerca de la playa.',
      focus: [
        'Cambio de bañera por ducha y reformas de baño completas.',
        'Suelos porcelánicos y nivelación de pavimentos.',
        'Rehabilitación de fachadas y pequeñas cubiertas.'
      ]
    },
    ca: {
      intro:
        'Cubelles, ja a la comarca del Garraf, és a uns 20 minuts. És una de les nostres zones habituals: pisos al nucli, cases a les urbanitzacions i habitatges a prop de la platja.',
      focus: [
        'Canvi de banyera per dutxa i reformes de bany completes.',
        'Terres porcel·lànics i anivellament de paviments.',
        'Rehabilitació de façanes i petites cobertes.'
      ]
    },
    nearby: ['cunit', 'vilanova-i-la-geltru', 'sitges']
  },
  {
    slug: 'vilanova-i-la-geltru',
    name: 'Vilanova i la Geltrú',
    nameCa: 'Vilanova i la Geltrú',
    comarca: 'Garraf',
    provincia: 'Barcelona',
    minutos: 25,
    es: {
      intro:
        'En Vilanova i la Geltrú, capital del Garraf, trabajamos sobre todo en pisos y casas de pueblo que necesitan una reforma a fondo. Está a unos 25 minutos de El Vendrell.',
      focus: [
        'Reformas integrales de pisos con cambio de instalaciones.',
        'Reformas de cocinas y baños con presupuesto cerrado.',
        'Rehabilitación de casas antiguas: muros, techos y cubiertas.'
      ]
    },
    ca: {
      intro:
        "A Vilanova i la Geltrú, capital del Garraf, treballem sobretot en pisos i cases de poble que necessiten una reforma a fons. És a uns 25 minuts del Vendrell.",
      focus: [
        "Reformes integrals de pisos amb canvi d'instal·lacions.",
        'Reformes de cuines i banys amb pressupost tancat.',
        'Rehabilitació de cases antigues: murs, sostres i cobertes.'
      ]
    },
    nearby: ['cubelles', 'sitges', 'vilafranca-del-penedes']
  },
  {
    slug: 'sitges',
    name: 'Sitges',
    nameCa: 'Sitges',
    comarca: 'Garraf',
    provincia: 'Barcelona',
    minutos: 30,
    es: {
      intro:
        'Llegamos a Sitges en unos 30 minutos. Allí hacemos reformas en pisos, apartamentos turísticos y casas donde el acabado y los plazos importan especialmente.',
      focus: [
        'Reformas de baños con acabados de alta gama.',
        'Renovación de apartamentos entre temporadas, con fecha de entrega cerrada.',
        'Terrazas y áticos: impermeabilización y pavimento.'
      ]
    },
    ca: {
      intro:
        "Arribem a Sitges en uns 30 minuts. Allà fem reformes en pisos, apartaments turístics i cases on l'acabat i els terminis són especialment importants.",
      focus: [
        "Reformes de banys amb acabats d'alta gamma.",
        "Renovació d'apartaments entre temporades, amb data d'entrega tancada.",
        'Terrasses i àtics: impermeabilització i paviment.'
      ]
    },
    nearby: ['vilanova-i-la-geltru', 'cubelles', 'cunit']
  },
  {
    slug: 'vilafranca-del-penedes',
    name: 'Vilafranca del Penedès',
    nameCa: 'Vilafranca del Penedès',
    comarca: 'Alt Penedès',
    provincia: 'Barcelona',
    minutos: 25,
    es: {
      intro:
        'Vilafranca del Penedès, capital del Alt Penedès, está a unos 25 minutos. Trabajamos en pisos del centro, casas de pueblo y masías de los alrededores.',
      focus: [
        'Reformas integrales de pisos y casas.',
        'Rehabilitación de fachadas y cubiertas tradicionales.',
        'Cocinas y baños con coordinación de todos los gremios.'
      ]
    },
    ca: {
      intro:
        "Vilafranca del Penedès, capital de l'Alt Penedès, és a uns 25 minuts. Treballem en pisos del centre, cases de poble i masies dels voltants.",
      focus: [
        'Reformes integrals de pisos i cases.',
        'Rehabilitació de façanes i cobertes tradicionals.',
        'Cuines i banys amb coordinació de tots els oficis.'
      ]
    },
    nearby: ['el-vendrell', 'vilanova-i-la-geltru', 'valls']
  },
  {
    slug: 'tarragona',
    name: 'Tarragona',
    nameCa: 'Tarragona',
    comarca: 'Tarragonès',
    provincia: 'Tarragona',
    minutos: 30,
    es: {
      intro:
        'Tarragona ciudad y su área están a unos 30 minutos de El Vendrell. Hacemos reformas de pisos, locales y viviendas unifamiliares, con visita previa gratuita para medir y presupuestar.',
      focus: [
        'Reformas de baños y cocinas en pisos.',
        'Reformas integrales de viviendas con presupuesto cerrado.',
        'Suelos porcelánicos e impermeabilización de terrazas.'
      ]
    },
    ca: {
      intro:
        "Tarragona ciutat i la seva àrea són a uns 30 minuts del Vendrell. Fem reformes de pisos, locals i habitatges unifamiliars, amb visita prèvia gratuïta per mesurar i pressupostar.",
      focus: [
        'Reformes de banys i cuines en pisos.',
        "Reformes integrals d'habitatges amb pressupost tancat.",
        'Terres porcel·lànics i impermeabilització de terrasses.'
      ]
    },
    nearby: ['el-vendrell', 'valls', 'calafell']
  },
  {
    slug: 'valls',
    name: 'Valls',
    nameCa: 'Valls',
    comarca: 'Alt Camp',
    provincia: 'Tarragona',
    minutos: 35,
    es: {
      intro:
        'En Valls, capital del Alt Camp, trabajamos en casas de pueblo, pisos y naves. Está a unos 35 minutos de nuestra base en El Vendrell.',
      focus: [
        'Rehabilitación de casas antiguas y cubiertas.',
        'Reformas de baños y cocinas.',
        'Pavimentos interiores y exteriores.'
      ]
    },
    ca: {
      intro:
        "A Valls, capital de l'Alt Camp, treballem en cases de poble, pisos i naus. És a uns 35 minuts de la nostra base al Vendrell.",
      focus: [
        'Rehabilitació de cases antigues i cobertes.',
        'Reformes de banys i cuines.',
        'Paviments interiors i exteriors.'
      ]
    },
    nearby: ['tarragona', 'el-vendrell', 'vilafranca-del-penedes']
  }
];

export const getZona = (slug) => ZONAS.find((z) => z.slug === slug);

export const zonaSeo = (zona, lang) => {
  if (lang === 'ca') {
    return {
      title: `Reformes a ${zona.nameCa} (${zona.comarca}) | Arévalo Construcciones`,
      desc: `Paletes i reformes a ${zona.nameCa}: banys, cuines, terres i reformes integrals. Empresa familiar del Vendrell, visita i pressupost gratuïts. Només treballem a Catalunya.`
    };
  }
  return {
    title: `Reformas en ${zona.name} (${zona.comarca}) | Arévalo Construcciones`,
    desc: `Albañiles y reformas en ${zona.name}: baños, cocinas, suelos y reformas integrales. Empresa familiar de El Vendrell, visita y presupuesto gratis. Solo trabajamos en Cataluña.`
  };
};
