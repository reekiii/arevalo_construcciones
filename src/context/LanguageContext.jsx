import React, { createContext, useContext, useState } from "react";

const translations = {
  es: {
    // Nav
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_projects: "Proyectos",
    nav_about: "Nosotros",
    nav_contact: "Contacto",

    // Hero
    hero_tagline: "Arévalo Construcciones",
    hero_title: "Materializamos tus grandes ideas.",
    hero_desc:
      "Desde pequeñas reformas hasta grandes obras de nueva construcción. En Arévalo Construcciones ofrecemos un servicio integral, transparente y de máxima calidad adaptado a tus necesidades y presupuesto.",
    hero_btn_quote: "Solicitar Presupuesto",
    hero_btn_services: "Ver Servicios",

    // Stats
    stat_years: "3ª Gen.",
    stat_years_lbl: "Familia de Albañiles",
    stat_clients: "100%",
    stat_clients_lbl: "Clientes Satisfechos",
    stat_turnkey: "Llave en mano",
    stat_turnkey_lbl: "Proyectos Integrales",

    // Before After Section
    ba_title: "El cambio real de una buena reforma",
    ba_desc:
      "Desliza para ver la transformación completa antes y después de los trabajos.",
    ba_before: "ANTES",
    ba_after: "DESPUÉS",

    // Quienes Somos Home
    about_title: "Tu proyecto, en las mejores manos.",
    about_p1:
      "Con una sólida tradición familiar que abarca 3 generaciones de albañiles, en Arévalo Construcciones convertimos cualquier proyecto en un espacio de calidad. Empecé en el oficio con solo 15 años aprendiendo de mi padre y mi abuelo: para nosotros ver los resultados de una obra impecable y a los clientes satisfechos no tiene precio.",
    about_p2:
      "Nos encargamos de absolutamente todo, coordinando todos los oficios y gestionando plazos para que tú no tengas que preocuparte por nada. Realizamos desde reformas de baños y cocinas hasta reformas integrales, suelos, terrazas y proyectos de obra nueva.",
    about_check1: "Presupuestos detallados y transparentes partida por partida",
    about_check2: "Compromiso estricto de plazos de entrega por contrato",
    about_check3: "Coordinación integral 'Llave en mano' (albañilería, fontanería, electricidad, pintura)",
    about_check4: "Seguro de Responsabilidad Civil en vigor y tramitación de licencias",
    about_btn_more: "Conoce nuestra historia",
    about_btn_works: "Ver proyectos realizados",

    // CTA
    cta_title: "¿Preparado para empezar tu reforma?",
    cta_desc:
      "Pide tu valoración hoy mismo. Estudiamos tu caso y te asesoramos con la máxima transparencia y presupuesto sin compromiso.",
    cta_btn: "Contactar ahora",

    // Servicios
    services_title: "Nuestros Servicios y Especialidades",
    services_desc:
      "Especialistas en cuartos de baño, cocinas, suelos de interior porcelánicos, terrazas y reformas integrales 'llave en mano'. Desde pequeños trabajos y averías hasta obras completas.",
    services_cta_title: "¿Necesitas asesoramiento para tu obra?",
    services_cta_desc:
      "Tanto si es una reforma de baño como una vivienda completa, visitamos tu espacio y te entregamos una valoración detallada.",
    services_cta_btn: "Consultar con Javier Arévalo",
    s1_title: "Reformas de Baños y Cocinas",
    s1_desc:
      "Nuestra mayor especialidad. Cambios de bañera por plato de ducha antideslizante, alicatados modernos, fontanería, electricidad e instalación de mobiliario con acabados de primera.",
    s2_title: "Suelos de Interior y Terrazas",
    s2_desc:
      "Colocación experta de pavimentos porcelánicos, gres y tarimas en interiores. Rehabilitación e impermeabilización de terrazas, patios y exteriores resistentes a la intemperie.",
    s3_title: "Reformas Integrales 'Llave en Mano'",
    s3_desc:
      "Nosotros lo organizamos todo: albañilería, fontanería, electricidad, pladur y pintura. Una sola persona responsable para que tú solo disfrutes del resultado final.",
    s4_title: "Obra Nueva y Rehabilitación",
    s4_desc:
      "Construcción de viviendas unifamiliares, ampliaciones, restauración de fachadas y cubiertas. Máxima solidez constructiva y cumplimiento estricto de la normativa.",

    // Proyectos
    projects_title: "Proyectos Destacados",
    projects_desc:
      "Cada obra es una muestra de nuestra dedicación. Echa un vistazo a algunos de nuestros trabajos más recientes donde la calidad y la atención al detalle hablan por sí solas.",
    p1_tag: "Residencial",
    p1_title: "Reforma Integral Chalet",
    p1_desc:
      "Renovación completa de espacios interiores. Demolición de tabiques para concepto abierto, nueva instalación eléctrica y pavimentos porcelánicos.",
    p2_tag: "Obra Nueva",
    p2_title: "Vivienda Unifamiliar",
    p2_desc:
      "Ejecución de vivienda unifamiliar de diseño moderno en hormigón visto. Destaca la alta eficiencia energética y los amplios ventanales.",
    p3_tag: "Rehabilitación",
    p3_title: "Restauración de Fachada",
    p3_desc:
      "Tratamiento integral de patologías estructurales en edificio histórico. Reparación de cornisas, impermeabilización y nuevo revestimiento.",
    projects_desc_footer:
      "¿Quieres consultar detalles constructivos o ver más obras similares en la zona?",
    projects_cta_title: "¿Tienes un proyecto en mente?",
    projects_cta_desc:
      "¿Quieres consultar detalles constructivos, materiales o ver más obras similares en tu zona? Estamos a tu disposición para asesorarte sin compromiso.",
    projects_cta_btn: "Consultar con un técnico",

    // Nosotros
    we_title: "3ª Generación de Albañiles",
    we_subtitle: "Pasión por el oficio bien hecho desde los 15 años",
    we_desc:
      "En Arévalo Construcciones el oficio lo llevamos en la sangre. Mi padre y mi abuelo eran albañiles y empecé con 15 años en la obra. Para mí es uno de los trabajos más satisfactorios: ver los resultados y los clientes contentos no tiene precio.",
    we_c1_title: "Presupuesto Cerrado y Transparente",
    we_c1_desc:
      "Detallamos muy bien cada faena en el presupuesto para que no haya dudas. Sabemos que la confianza se gana con claridad: si surge cualquier imprevisto se comenta y valora contigo antes de ejecutarlo.",
    we_c2_title: "Compromiso de Plazos y 'Llave en Mano'",
    we_c2_desc:
      "Nos comprometemos a fechas de entrega por escrito. Nosotros organizamos todos los oficios (fontanería, electricidad, carpintería, pintura) para que no tengas que buscar ni coordinar a nadie.",
    we_c3_title: "Obra 100% Asegurada y Garantizada",
    we_c3_desc:
      "Contamos con Seguro de Responsabilidad Civil en vigor para máxima tranquilidad y gestionamos la tramitación de licencias de obra en los ayuntamientos de la zona.",
    we_c4_title: "Pagos Claros por Fases",
    we_c4_desc:
      "Máxima seguridad para tu inversión: abono de material necesario, 40% al inicio de los trabajos, 30% a mitad de obra y el 30% restante al finalizar cuando compruebes la calidad de los acabados.",

    // Contacto (100% WhatsApp y llamada directa - Sin formulario web)
    contact_title: "Hablemos de tu proyecto",
    contact_hero_badge: "Atención Directa y Personalizada",
    contact_desc:
      "En Arévalo Construcciones te atendemos de forma directa y cercana, de profesional a cliente, sin intermediarios ni comerciales. Visita y presupuesto 100% gratuito y sin compromiso.",
    contact_wa_title: "Canal Preferente: WhatsApp Directo",
    contact_wa_tag: "Respuesta rápida",
    contact_wa_desc:
      "La forma más rápida y cómoda de contactar con Javier Arévalo. Puedes escribirnos, enviarnos fotos de tu espacio (baño, cocina, terraza, fachadas), medidas aproximadas o notas de voz para una valoración rápida.",
    contact_wa_presets_title: "O pulsa en el tipo de trabajo que necesitas para iniciar el chat:",
    contact_wa_opt1: "Reforma de Baño o Ducha de Obra",
    contact_wa_opt2: "Reforma de Cocina",
    contact_wa_opt3: "Reforma Integral de Vivienda",
    contact_wa_opt4: "Suelos, Terrazas o Exteriores",
    contact_wa_opt5: "Consulta general / Visita técnica",
    contact_wa_btn: "Hablar con Javier",
    contact_call_title: "Llamada Telefónica Directa",
    contact_call_desc: "¿Prefieres hablar directamente? Llámanos para resolver cualquier duda o coordinar una visita a tu vivienda o terreno.",
    contact_call_btn: "Llamar al 622 03 27 04",
    contact_call_hours_lbl: "Horario de atención",
    contact_call_hours_val: "Lunes a Viernes de 07:00 a 19:00 | Sábados de 09:00 a 14:00",
    contact_email_title: "Correo Electrónico Oficial",
    contact_email_desc: "Ideal para envío de proyectos técnicos, planos arquitectónicos en PDF, pliegos o mediciones de obra.",
    contact_email_btn: "Enviar email con planos",
    contact_onsite_title: "Trabajamos directamente a domicilio",
    contact_onsite_badge: "Atención en tu obra o vivienda",
    contact_onsite_desc:
      "No disponemos de tienda comercial ni oficina de exposición abierta al público. Javier Arévalo se desplaza personalmente a tu vivienda, piso, local o terreno en el Baix Penedès, Valls, Tarragona y provincia de Barcelona para tomar medidas exactas y preparar un presupuesto a tu medida.",
    contact_coverage_lbl: "Zona de desplazamiento habitual",
    contact_coverage_val: "El Vendrell, Calafell, Cunit, Cubelles, Sitges, Vilanova i la Geltrú, Vilafranca del Penedès, Santa Oliva, Bellvei, Albinyana, La Bisbal del Penedès y comarcas del Baix y Alt Penedès, con cobertura directa en Valls, Tarragona y área de Barcelona.",
    contact_trust1: "Visita y presupuesto 100% gratuitos y sin compromiso",
    contact_trust2: "Presupuesto cerrado por contrato sin sorpresas",
    contact_trust3: "Seguro de Responsabilidad Civil en vigor",
    contact_fiscal_title: "Información Fiscal y Registro Legal (LSSI / RGPD)",
    contact_fiscal_desc:
      "Domicilio exclusivamente fiscal y de notificación legal. No se realizan visitas comerciales ni atención en esta dirección; toda la atención se realiza in situ a domicilio o mediante llamada / WhatsApp.",

    // Footer
    footer_desc:
      "Empresa familiar de construcción y reformas en El Vendrell. 3ª generación de albañiles especializados en baños, cocinas, suelos, terrazas y reformas integrales con la máxima calidad y compromiso.",
    footer_explore: "Explorar",
    footer_services: "Servicios",
    footer_contact: "Contacto",
    footer_legal: "Aviso Legal",
    footer_privacy: "Política de Privacidad",
    footer_cookies: "Política de Cookies",
    footer_credits: "Diseño web por",

    // Cookies
    cookie_title: "Valoramos tu privacidad",
    cookie_desc:
      "Utilizamos cookies técnicas y analíticas para garantizar el funcionamiento de la web y analizar el tráfico de forma anónima.",
    cookie_accept_all: "Aceptar todas",
    cookie_essential_only: "Solo necesarias",
    cookie_configure: "Configurar",
    cookie_modal_title: "Centro de Privacidad y Cookies",
    cookie_modal_desc:
      "Puedes elegir qué tipos de cookies autorizas en este sitio web. Las cookies necesarias garantizan funciones esenciales como la navegación y el idioma.",
    cookie_necessary_title: "Cookies técnicas necesarias",
    cookie_necessary_desc:
      "Imprescindibles para el correcto funcionamiento del sitio (idioma, navegación y seguridad). Siempre activas.",
    cookie_analytics_title: "Cookies de análisis y rendimiento",
    cookie_analytics_desc:
      "Nos permiten conocer qué páginas se visitan más para mejorar el diseño y la velocidad de carga de forma anónima.",
    cookie_save_preferences: "Guardar preferencias",
    cookie_always_active: "Siempre activas",
  },

  ca: {
    // Nav
    nav_home: "Inici",
    nav_services: "Serveis",
    nav_projects: "Projectes",
    nav_about: "Nosaltres",
    nav_contact: "Contacte",

    // Hero
    hero_tagline: "Arévalo Construcciones",
    hero_title: "Fem realitat les teves grans idees.",
    hero_desc:
      "Des de petites reformes fins a grans obres de nova construcció. A Arévalo Construcciones oferim un servei integral, transparent i de màxima qualitat adaptat a les teves necessitats i pressupost.",
    hero_btn_quote: "Sol·licitar Pressupost",
    hero_btn_services: "Veure Serveis",

    // Stats
    stat_years: "3a Gen.",
    stat_years_lbl: "Família de Paletes",
    stat_clients: "100%",
    stat_clients_lbl: "Clients Satisfets",
    stat_turnkey: "Claus en mà",
    stat_turnkey_lbl: "Projectes Integrals",

    // Before After Section
    ba_title: "El canvi real d'una bona reforma",
    ba_desc:
      "Llisca per veure la transformació completa abans i després dels treballs.",
    ba_before: "ABANS",
    ba_after: "DESPRÉS",

    // Quienes Somos Home
    about_title: "El teu projecte, en les millors mans.",
    about_p1:
      "Amb una sòlida tradició familiar que abasta 3 generacions de paletes, a Arévalo Construcciones convertim qualsevol projecte en un espai de qualitat. Vaig començar a l'ofici amb només 15 anys aprenent del meu pare i el meu avi: per a nosaltres veure els resultats d'una obra impecable i els clients satisfets no té preu.",
    about_p2:
      "Ens encarreguem d'absolutament tot, coordinant tots els oficis i gestionant terminis perquè no t'hagis de preocupar de res. Realitzem des de reformes de banys i cuines fins a reformes integrals, terres, terrasses i projectes d'obra nova.",
    about_check1: "Pressupostos detallats i transparents partida per partida",
    about_check2: "Compromís estricte de terminis de lliurament per contracte",
    about_check3: "Coordinació integral 'Claus en mà' (paleteria, lampisteria, electricitat, pintura)",
    about_check4: "Assegurança de Responsabilitat Civil en vigor i tramitació de llicències",
    about_btn_more: "Coneix la nostra història",
    about_btn_works: "Veure projectes fets",

    // CTA
    cta_title: "A punt per començar la teva reforma?",
    cta_desc:
      "Demana la teva valoració avui mateix. Estudiem el teu cas i t'assessorem amb la màxima transparència i pressupost sense compromís.",
    cta_btn: "Contactar ara",

    // Servicios
    services_title: "Els Nostres Serveis i Especialitats",
    services_desc:
      "Especialistes en cambres de bany, cuines, paviments d'interior porcel·lànics, terrasses i reformes integrals 'claus en mà'. Des de petites feines i avaries fins a obres completes.",
    services_cta_title: "Necessites assessorament per a la teva obra?",
    services_cta_desc:
      "Tant si és una reforma de bany com un habitatge complet, visitem el teu espai i et lliurem una valoració detallada.",
    services_cta_btn: "Consultar amb Javier Arévalo",
    s1_title: "Reformes de Banys i Cuines",
    s1_desc:
      "La nostra major especialitat. Canvis de banyera per plat de dutxa antilliscant, enrajolats moderns, lampisteria, electricitat i instal·lació de mobiliari amb acabats de primera qualitat.",
    s2_title: "Terres d'Interior i Terrasses",
    s2_desc:
      "Col·locació experta de paviments porcel·lànics, gres i tarimes en interiors. Rehabilitació i impermeabilització de terrasses, patis i exteriors resistents al pas del temps.",
    s3_title: "Reformes Integrals 'Claus en Mà'",
    s3_desc:
      "Nosaltres ho organitzem tot: paleteria, lampisteria, electricitat, pladur i pintura. Una sola persona responsable perquè tu només gaudeixis del resultat final.",
    s4_title: "Obra Nova i Rehabilitació",
    s4_desc:
      "Construcció d'habitatges unifamiliars, ampliacions, restauració de façanes i cobertes. Màxima solidesa constructiva i compliment estricte de la normativa.",

    // Proyectos
    projects_title: "Projectes Destacats",
    projects_desc:
      "Cada obra és una mostra de la nostra dedicació. Fes un cop d'ull a alguns dels nostres treballs més recents on la qualitat i l'atenció al detall parlen per si soles.",
    p1_tag: "Residencial",
    p1_title: "Reforma Integral Xalet",
    p1_desc:
      "Renovació completa d'espais interiors. Enderroc d'envans per concepte obert, nova instal·lació elèctrica i paviments porcel·lànics.",
    p2_tag: "Obra Nova",
    p2_title: "Habitatge Unifamiliar",
    p2_desc:
      "Execució d'habitatge unifamiliar de disseny modern en formigó vist. Destaca l'alta eficiència energètica i els amplis finestrals.",
    p3_tag: "Rehabilitació",
    p3_title: "Restauració de Façana",
    p3_desc:
      "Tractament integral de patologies estructurals en edifici històric. Reparació de cornises, impermeabilització i nou revestiment.",
    projects_desc_footer:
      "Vols consultar detalls constructius o veure més obres similars a la zona?",
    projects_cta_title: "Tens un projecte al cap?",
    projects_cta_desc:
      "Vols consultar detalls constructius, materials o veure més obres similars a la teva zona? Estem a la teva disposició per assessorar-te sense compromís.",
    projects_cta_btn: "Consultar amb un tècnic",

    // Nosotros
    we_title: "3a Generació de Paletes",
    we_subtitle: "Passió per l'ofici ben fet des dels 15 anys",
    we_desc:
      "A Arévalo Construcciones l'ofici el portem a la sang. El meu pare i el meu avi eren paletes i vaig començar amb 15 anys a l'obra. Per a mi és un dels treballs més satisfactoris: veure els resultats i els clients contents no té preu.",
    we_c1_title: "Pressupost Tancat i Transparent",
    we_c1_desc:
      "Detallem molt bé cada feina en el pressupost perquè no hi hagi dubtes. Sabem que la confiança es guanya amb claredat: si sorgeix qualsevol imprevist es comenta i es valora amb tu abans d'executar-lo.",
    we_c2_title: "Compromís de Terminis i 'Claus en Mà'",
    we_c2_desc:
      "Ens comprometem a dates de lliurament per escrit. Nosaltres organitzem tots els oficis (lampisteria, electricitat, fusteria, pintura) perquè no hagis de buscar ni coordinar ningú.",
    we_c3_title: "Obra 100% Assegurada i Garantida",
    we_c3_desc:
      "Comptem amb Assegurança de Responsabilitat Civil en vigor per a màxima tranquil·litat i gestionem la tramitació de llicències d'obra als ajuntaments de la zona.",
    we_c4_title: "Pagaments Clars per Fases",
    we_c4_desc:
      "Màxima seguretat per a la teva inversió: abonament de material necessari, 40% a l'inici dels treballs, 30% a meitat d'obra i el 30% restant en finalitzar quan comprovis la qualitat dels acabats.",

    // Contacte (100% WhatsApp i trucada directa - Sense formulari web)
    contact_title: "Parlem del teu projecte",
    contact_hero_badge: "Atenció Directa i Personalitzada",
    contact_desc:
      "A Arévalo Construcciones t'atenem de manera directa i propera, de professional a client, sense intermediaris ni comercials. Visita i pressupost 100% gratuït i sense compromís.",
    contact_wa_title: "Canal Preferent: WhatsApp Directe",
    contact_wa_tag: "Resposta ràpida",
    contact_wa_desc:
      "La manera més ràpida i còmoda de contactar amb Javier Arévalo. Pots escriure'ns, enviar-nos fotos del teu espai (bany, cuina, terrassa, façanes), mides aproximades o notes de veu per a una valoració ràpida.",
    contact_wa_presets_title: "O prem sobre el tipus de feina que necessites per iniciar el xat:",
    contact_wa_opt1: "Reforma de Bany o Plat de Dutxa",
    contact_wa_opt2: "Reforma de Cuina",
    contact_wa_opt3: "Reforma Integral d'Habitatge",
    contact_wa_opt4: "Terres, Terrasses o Exteriors",
    contact_wa_opt5: "Consulta general / Visita tècnica",
    contact_wa_btn: "Parlar amb Javier",
    contact_call_title: "Trucada Telefònica Directa",
    contact_call_desc: "Prefereixes parlar directament? Truca'ns per resoldre qualsevol dubte o coordinar una visita al teu habitatge o terreny.",
    contact_call_btn: "Trucar al 622 03 27 04",
    contact_call_hours_lbl: "Horari d'atenció",
    contact_call_hours_val: "Dilluns a Divendres de 07:00 a 19:00 | Dissabtes de 09:00 a 14:00",
    contact_email_title: "Correu Electrònic Oficial",
    contact_email_desc: "Ideal per a l'enviament de projectes tècnics, plànols arquitectònics en PDF, plecs o mesuraments d'obra.",
    contact_email_btn: "Enviar email amb plànols",
    contact_onsite_title: "Treballem directament a domicili",
    contact_onsite_badge: "Atenció a la teva obra o habitatge",
    contact_onsite_desc:
      "No disposem de botiga comercial ni oficina d'exposició oberta al públic. Javier Arévalo es desplaça personalment al teu habitatge, pis, local o terreny al Baix Penedès, Valls, Tarragona i província de Barcelona per prendre mesures exactes i preparar un pressupost a mida.",
    contact_coverage_lbl: "Zona de desplaçament habitual",
    contact_coverage_val: "El Vendrell, Calafell, Cunit, Cubelles, Sitges, Vilanova i la Geltrú, Vilafranca del Penedès, Santa Oliva, Bellvei, Albinyana, La Bisbal del Penedès i comarques del Baix i Alt Penedès, amb cobertura directa a Valls, Tarragona i àrea de Barcelona.",
    contact_trust1: "Visita i pressupost 100% gratuïts i sense compromís",
    contact_trust2: "Pressupost tancat per contracte sense sorpreses",
    contact_trust3: "Assegurança de Responsabilitat Civil en vigor",
    contact_fiscal_title: "Informació Fiscal i Registre Legal (LSSI / RGPD)",
    contact_fiscal_desc:
      "Domicili exclusivament fiscal i de notificació legal. No es realitzen visites comercials ni atenció en aquesta adreça; tota l'atenció es fa in situ a domicili o mitjançant trucada / WhatsApp.",

    // Footer
    footer_desc:
      "Empresa familiar de construcció i reformes a El Vendrell. 3a generació de paletes especialitzats en banys, cuines, terres, terrasses i reformes integrals amb la màxima qualitat i compromís.",
    footer_explore: "Explorar",
    footer_services: "Serveis",
    footer_contact: "Contacte",
    footer_legal: "Avís Legal",
    footer_privacy: "Política de Privacitat",
    footer_cookies: "Política de Cookies",
    footer_credits: "Disseny web per",

    // Cookies
    cookie_title: "Valorem la teva privacitat",
    cookie_desc:
      "Utilitzem cookies tècniques i analítiques per garantir el funcionament del web i analitzar el trànsit de manera anònima.",
    cookie_accept_all: "Acceptar totes",
    cookie_essential_only: "Només necessàries",
    cookie_configure: "Configurar",
    cookie_modal_title: "Centre de Privacitat i Cookies",
    cookie_modal_desc:
      "Pots triar quins tipus de cookies autoritzes en aquest lloc web. Les cookies necessàries garanteixen funcions essencials com la navegació i l'idioma.",
    cookie_necessary_title: "Cookies tècniques necessàries",
    cookie_necessary_desc:
      "Imprescindibles per al correcte funcionament del lloc (idioma, navegació i seguretat). Sempre actives.",
    cookie_analytics_title: "Cookies d'anàlisi i rendiment",
    cookie_analytics_desc:
      "Ens permeten conèixer quines pàgines es visiten més per millorar el disseny i la velocitat de càrrega de manera anònima.",
    cookie_save_preferences: "Desar preferències",
    cookie_always_active: "Sempre actives",
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("arevalo_lang") || "es";
  });

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("arevalo_lang", newLang);
  };

  const t = (key) => {
    return translations[lang]?.[key] || translations["es"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
