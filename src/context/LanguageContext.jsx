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
    stat_years: "+2",
    stat_years_lbl: "Años de Experiencia",
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
      "Con más de 15 años de trayectoria en el sector, en Arévalo Construcciones nos hemos consolidado como un referente de seriedad y calidad. Entendemos que una obra no es solo un montón de ladrillos, sino la ilusión de nuestros clientes tomando forma.",
    about_p2:
      "Nos encargamos de absolutamente todo, coordinando oficios y gestionando plazos para que tú no tengas que preocuparte por nada. Trabajamos en reformas integrales, rehabilitación y proyectos de obra nueva desde cero.",
    about_check1: "Presupuestos detallados y cerrados sin sorpresas",
    about_check2: "Cumplimiento estricto de fechas de entrega por contrato",
    about_check3: "Coordinación integral de todos los gremios (llave en mano)",
    about_btn_more: "Leer más sobre nosotros",
    about_btn_works: "Ver proyectos realizados",

    // CTA
    cta_title: "¿Preparado para empezar tu reforma?",
    cta_desc:
      "Pide tu valoración hoy mismo. Estudiamos tu caso y te asesoramos con la máxima transparencia.",
    cta_btn: "Contactar ahora",

    // Servicios
    services_title: "Nuestros Servicios",
    services_desc:
      "Ofrecemos un abanico completo de soluciones constructivas. Contamos con un equipo de profesionales cualificados y los mejores materiales del mercado para garantizar resultados impecables y duraderos en cada una de nuestras intervenciones.",
    services_cta_title: "¿Necesitas asesoramiento técnico para tu obra?",
    services_cta_desc:
      "Tanto si es una reforma integral como una intervención puntual, analizamos la viabilidad y los materiales para tu proyecto.",
    services_cta_btn: "Consultar con un técnico",
    s1_title: "Reformas Integrales",
    s1_desc:
      "Transformamos por completo tu vivienda o local comercial. Nos encargamos de todo el proceso de principio a fin: albañilería, fontanería, electricidad, pintura y acabados. Gestionamos tu obra para que no tengas que preocuparte por nada, cumpliendo siempre con los plazos acordados.",
    s2_title: "Obra Nueva",
    s2_desc:
      "Construimos la casa de tus sueños desde cero. Te asesoramos desde el diseño arquitectónico inicial, el estudio del terreno y la cimentación, hasta la entrega de llaves. Utilizamos técnicas modernas de construcción que aseguran la máxima eficiencia energética y un diseño de vanguardia.",
    s3_title: "Rehabilitación",
    s3_desc:
      "Restauración integral de fachadas, refuerzos estructurales y reparación de cubiertas. Le devolvemos a los edificios antiguos su esplendor original mejorando al mismo tiempo su seguridad estructural y el aislamiento térmico/acústico. Especialistas en comunidades de propietarios.",

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
    we_title: "Nuestra Historia y Valores",
    we_desc:
      "En Arévalo Construcciones somos mucho más que una empresa de reformas; somos un equipo apasionado por el arte de construir.",
    we_c1_title: "Compromiso y Transparencia",
    we_c1_desc:
      "Nos enorgullece nuestra seriedad. Presentamos presupuestos claros, sin sorpresas ni costes ocultos. Mantenemos una comunicación constante durante cada fase del proyecto, para que estés informado en todo momento sobre los avances de tu obra.",
    we_c2_title: "Calidad Garantizada",
    we_c2_desc:
      "Nuestra experiencia en el sector nos permite seleccionar los mejores materiales y rodearnos de los mejores oficios. Cada detalle cuenta, y por eso sometemos todas nuestras obras a rigurosos controles de calidad. Tu tranquilidad es nuestro principal objetivo.",

    // Contacto
    contact_title: "Hablemos de tu proyecto",
    contact_desc:
      "¿Tienes una idea en mente? Estamos listos para hacerla realidad. Contáctanos y te asesoraremos sin compromiso.",
    contact_phone_lbl: "Llámanos",
    contact_email_lbl: "Email",
    contact_wa_btn: "Contactar por WhatsApp",
    contact_form_title: "Envíanos un mensaje",
    contact_name: "Nombre completo",
    contact_name_placeholder: "Tu nombre y apellidos",
    contact_phone: "Teléfono de contacto",
    contact_phone_placeholder: "600 00 00 00",
    contact_email_field: "Correo electrónico",
    contact_email_placeholder: "tu@email.com",
    contact_service: "Servicio de interés",
    contact_service_opt: "Selecciona una opción...",
    contact_msg: "Detalles del proyecto",
    contact_msg_placeholder: "Cuéntanos qué necesitas hacer (tipo de reforma, metros, localidad...)",
    contact_submit: "Solicitar Presupuesto",
    contact_sending: "Enviando solicitud...",
    contact_success_title: "¡Solicitud enviada con éxito!",
    contact_success_desc: "Hemos recibido tu mensaje correctamente. Nos pondremos en contacto contigo lo antes posible para valorar tu proyecto.",
    contact_error_title: "No se pudo enviar el mensaje",
    contact_error_desc: "Ha ocurrido un error de conexión. Por favor, llámanos directamente al 622 03 27 04 o envíanos un WhatsApp.",
    contact_send_another: "Enviar otra consulta",

    // Footer
    footer_desc:
      "Especialistas en reformas integrales, obra nueva y rehabilitación con la máxima calidad y compromiso. Construimos tus sueños.",
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
    stat_years: "+2",
    stat_years_lbl: "Anys d'Experiència",
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
      "Amb més de 15 anys de trajectòria en el sector, a Arévalo Construcciones ens hem consolidat com un referent de serietat i qualitat. Entenem que una obra no és només un munt de maons, sinó la il·lusió dels nostres clients prenent forma.",
    about_p2:
      "Ens encarreguem d'absolutament tot, coordinant oficis i gestionant terminis perquè no t'hagis de preocupar de res. Treballem en reformes integrals, rehabilitació i projectes d'obra nova des de zero.",
    about_check1: "Pressupostos detallats i tancats sense sorpreses",
    about_check2: "Compliment estricte de dates d'entrega per contracte",
    about_check3: "Coordinació integral de tots els oficis (claus en mà)",
    about_btn_more: "Llegir més sobre nosaltres",
    about_btn_works: "Veure projectes fets",

    // CTA
    cta_title: "A punt per començar la teva reforma?",
    cta_desc:
      "Demana la teva valoració avui mateix. Estudiem el teu cas i t'assessorem amb la màxima transparència.",
    cta_btn: "Contactar ara",

    // Servicios
    services_title: "Els Nostres Serveis",
    services_desc:
      "Oferim un ventall complet de solucions constructives. Comptem amb un equip de professionals qualificats i els millors materials del mercat per garantir resultats impecables i duradors en cadascuna de les nostres intervencions.",
    services_cta_title: "Necessites assessorament tècnic per a la teva obra?",
    services_cta_desc:
      "Tant si és una reforma integral com una intervenció puntual, analitzem la viabilitat i els materials per al teu projecte.",
    services_cta_btn: "Consultar amb un tècnic",
    s1_title: "Reformes Integrals",
    s1_desc:
      "Transformem per complet el teu habitatge o local comercial. Ens encarreguem de tot el procés de principi a fi: paleteria, lampisteria, electricitat, pintura i acabats. Gestionem la teva obra perquè no t'hagis de preocupar de res, complint sempre amb els terminis acordats.",
    s2_title: "Obra Nova",
    s2_desc:
      "Construïm la casa dels teus somnis des de zero. T'assessorem des del disseny arquitectònic inicial, l'estudi del terreny i la fonamentació, fins al lliurament de claus. Utilitzem tècniques modernes de construcció que asseguren la màxima eficiència energètica i un disseny d'avantguarda.",
    s3_title: "Rehabilitació",
    s3_desc:
      "Restauració integral de façanes, reforços estructurals i reparació de cobertes. Tornem als edificis antics la seva esplendor original millorant alhora la seva seguretat estructural i l'aïllament tèrmic/acústic. Especialistes en comunitats de propietaris.",

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
    we_title: "La Nostra Història i Valors",
    we_desc:
      "A Arévalo Construcciones som molt més que una empresa de reformes; som un equip apassionat per l'art de construir.",
    we_c1_title: "Compromís i Transparència",
    we_c1_desc:
      "Ens enorgulleix la nostra serietat. Presentem pressupostos clars, sense sorpreses ni costos ocults. Mantenim una comunicació constant durant cada fase del projecte, perquè estiguis informat en tot moment sobre els avenços de la teva obra.",
    we_c2_title: "Qualitat Garantida",
    we_c2_desc:
      "La nostra experiència en el sector ens permet seleccionar els millors materials i envoltar-nos dels millors oficis. Cada detall compta, i per això sotmetem totes les nostres obres a rigorosos controls de qualitat. La teva tranquil·litat és el nostre principal objectiu.",

    // Contacto
    contact_title: "Parlem del teu projecte",
    contact_desc:
      "Tens una idea al cap? Estem a punt per fer-la realitat. Contacta'ns i t'assessorarem sense compromís.",
    contact_phone_lbl: "Truca'ns",
    contact_email_lbl: "Email",
    contact_wa_btn: "Contactar per WhatsApp",
    contact_form_title: "Envia'ns un missatge",
    contact_name: "Nom complet",
    contact_name_placeholder: "El teu nom i cognoms",
    contact_phone: "Telèfon de contacte",
    contact_phone_placeholder: "600 00 00 00",
    contact_email_field: "Correu electrònic",
    contact_email_placeholder: "el_teu@email.com",
    contact_service: "Servei d'interès",
    contact_service_opt: "Selecciona una opció...",
    contact_msg: "Detalls del projecte",
    contact_msg_placeholder: "Explica'ns quina reforma o obra necessites (metres, localitat...)",
    contact_submit: "Sol·licitar Pressupost",
    contact_sending: "Enviant sol·licitud...",
    contact_success_title: "Sol·licitud enviada amb èxit!",
    contact_success_desc: "Hem rebut el teu missatge correctament. Ens posarem en contacte amb tu al més aviat possible per valorar el teu projecte.",
    contact_error_title: "No s'ha pogut enviar el missatge",
    contact_error_desc: "S'ha produït un error de connexió. Si us plau, truca'ns directament al 622 03 27 04 o envia'ns un WhatsApp.",
    contact_send_another: "Enviar una altra consulta",

    // Footer
    footer_desc:
      "Especialistes en reformes integrals, obra nova i rehabilitació amb la màxima qualitat i compromís. Construïm els teus somnis.",
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
