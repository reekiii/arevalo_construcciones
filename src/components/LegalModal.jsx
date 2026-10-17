import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

function LegalModal() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('privacy'); // 'privacy' | 'legal'

  useEffect(() => {
    const handleOpen = (e) => {
      const type = e.detail?.type || 'privacy';
      setActiveTab(type);
      setIsOpen(true);
    };

    window.addEventListener('open-legal-modal', handleOpen);
    return () => window.removeEventListener('open-legal-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  const isEs = lang === 'es';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white border border-stone-300 shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col rounded-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera con pestañas de navegación legal */}
        <div className="bg-brand-bg-alt border-b border-stone-300 p-4 sm:p-5 flex items-center justify-between">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-3 sm:px-5 py-2 font-heading text-xs uppercase tracking-wider font-bold transition cursor-pointer ${
                activeTab === 'privacy'
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'bg-white/80 text-gray-700 hover:bg-white border border-stone-300'
              }`}
            >
              {isEs ? 'Política de Privacidad' : 'Política de Privacitat'}
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`px-3 sm:px-5 py-2 font-heading text-xs uppercase tracking-wider font-bold transition cursor-pointer ${
                activeTab === 'legal'
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'bg-white/80 text-gray-700 hover:bg-white border border-stone-300'
              }`}
            >
              {isEs ? 'Aviso Legal (LSSI)' : 'Avís Legal (LSSI)'}
            </button>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-900 p-2 font-bold text-2xl leading-none cursor-pointer"
            aria-label="Cerrar modal legal"
          >
            ✕
          </button>
        </div>

        {/* Contenido scrolleable con la estructura oficial del sector construcción y reformas */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
          
          <div className="text-[11px] font-mono text-stone-500 border-b border-stone-200 pb-2 flex justify-between items-center">
            <span>{isEs ? 'Normativa aplicable: RGPD (UE 2016/679) y LOPDGDD (LO 3/2018)' : 'Normativa aplicable: RGPD (UE 2016/679) i LOPDGDD (LO 3/2018)'}</span>
            <span>{isEs ? 'Actualizado: Octubre 2026' : 'Actualitzat: Octubre 2026'}</span>
          </div>

          {activeTab === 'privacy' ? (
            /* ========================================================= */
            /* POLÍTICA DE PRIVACIDAD OFICIAL SECTOR CONSTRUCCIÓN/REFORMAS*/
            /* ========================================================= */
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-heading font-extrabold text-brand-blue mb-1">
                  {isEs ? 'Política de Privacidad y Protección de Datos' : 'Política de Privacitat i Protecció de Dades'}
                </h3>
                <p className="text-stone-500 text-xs">
                  {isEs 
                    ? 'Información detallada sobre el tratamiento de datos personales en Arévalo Construcciones.' 
                    : 'Informació detallada sobre el tractament de dades personals a Arévalo Construcciones.'}
                </p>
              </div>

              {/* 1. Responsable del Tratamiento */}
              <div className="bg-stone-50 border border-stone-200 p-4 space-y-1">
                <h4 className="font-heading font-bold text-brand-blue uppercase text-xs tracking-wider">
                  {isEs ? '1. Identificación del Responsable del Tratamiento' : '1. Identificació del Responsable del Tractament'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs">
                  <p><strong>{isEs ? 'Titular:' : 'Titular:'}</strong> Javier Arévalo Pizarro</p>
                  <p><strong>{isEs ? 'Nombre Comercial:' : 'Nom Comercial:'}</strong> Arévalo Construcciones</p>
                  <p><strong>{isEs ? 'NIF:' : 'NIF:'}</strong> 49500348R</p>
                  <p><strong>{isEs ? 'Teléfono / WhatsApp:' : 'Telèfon / WhatsApp:'}</strong> 622 03 27 04</p>
                  <p className="sm:col-span-2"><strong>{isEs ? 'Domicilio fiscal:' : 'Domicili fiscal:'}</strong> Camí de Mas d'en Gual, 43700 El Vendrell (Tarragona)</p>
                  <p className="sm:col-span-2"><strong>{isEs ? 'Email de contacto:' : 'Email de contacte:'}</strong> construccionesyreformasarevalo@gmail.com</p>
                </div>
              </div>

              {/* 2. Finalidad del Tratamiento */}
              <div className="space-y-1 pt-1">
                <h4 className="font-heading font-bold text-brand-blue uppercase text-xs tracking-wider">
                  {isEs ? '2. Finalidad del Tratamiento' : '2. Finalitat del Tractament'}
                </h4>
                <p>
                  {isEs 
                    ? 'Los datos personales facilitados por el cliente o usuario se tratarán con las siguientes finalidades específicas propias de la actividad de construcción y reformas:'
                    : 'Les dades personals facilitades pel client o usuari es tractaran amb les següents finalitats específiques pròpies de l\'activitat de construcció i reformes:'}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>{isEs ? 'Presupuestos:' : 'Pressupostos:'}</strong> {isEs ? 'Elaboración, valoración y envío de presupuestos personalizados sobre obras y reformas.' : 'Elaboració, valoració i enviament de pressupostos personalitzats sobre obres i reformes.'}</li>
                  <li><strong>{isEs ? 'Ejecución de obra:' : 'Execució d\'obra:'}</strong> {isEs ? 'Planificación, coordinación técnica, medición y ejecución material de los trabajos contratados en la vivienda o terreno del cliente.' : 'Planificació, coordinació tècnica, mesurament i execució material dels treballs contractats a l\'habitatge o terreny del client.'}</li>
                  <li><strong>{isEs ? 'Gestión administrativa y fiscal:' : 'Gestió administrativa i fiscal:'}</strong> {isEs ? 'Emisión de facturas oficiales, gestión de pagos y cumplimiento de obligaciones tributarias.' : 'Emissió de factures oficials, gestió de pagaments i compliment d\'obligacions tributàries.'}</li>
                  <li><strong>{isEs ? 'Atención al cliente:' : 'Atenció al client:'}</strong> {isEs ? 'Atención y resolución de dudas técnicas vía WhatsApp, teléfono o correo electrónico.' : 'Atenció i resolució de dubtes tècnics via WhatsApp, telèfon o correu electrònic.'}</li>
                  <li><strong>{isEs ? 'Tramitación de licencias:' : 'Tramitació de llicències:'}</strong> {isEs ? 'Gestión de licencias municipales de obra ante los Ayuntamientos cuando sea expresamente acordado con el cliente.' : 'Gestió de llicències municipals d\'obra davant dels Ajuntaments quan sigui expressament acordat amb el client.'}</li>
                </ul>
              </div>

              {/* 3. Legitimación */}
              <div className="space-y-1 pt-1">
                <h4 className="font-heading font-bold text-brand-blue uppercase text-xs tracking-wider">
                  {isEs ? '3. Legitimación (Base Legal)' : '3. Legitimació (Base Legal)'}
                </h4>
                <p>
                  {isEs 
                    ? 'El tratamiento de sus datos se sustenta en las siguientes bases jurídicas reconocidas por el RGPD:'
                    : 'El tractament de les seves dades es fonamenta en les següents bases jurídiques reconegudes pel RGPD:'}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>{isEs ? 'Ejecución del contrato o medidas precontractuales (Art. 6.1.b RGPD):' : 'Execució del contracte o mesures precontractuals (Art. 6.1.b RGPD):'}</strong> {isEs ? 'Para tramitar la solicitud de presupuesto, coordinar la visita técnica de medición y ejecutar las obras contratadas.' : 'Per tramitar la sol·licitud de pressupost, coordinar la visita tècnica de mesurament i executar les obres contractades.'}</li>
                  <li><strong>{isEs ? 'Cumplimiento de obligaciones legales (Art. 6.1.c RGPD):' : 'Compliment d\'obligacions legals (Art. 6.1.c RGPD):'}</strong> {isEs ? 'Emisión preceptiva de facturas oficiales y cumplimiento de la normativa fiscal ante la Agencia Tributaria.' : 'Emissió preceptiva de factures oficials i compliment de la normativa fiscal davant l\'Agència Tributària.'}</li>
                  <li><strong>{isEs ? 'Consentimiento explícito (Art. 6.1.a RGPD):' : 'Consentiment explícit (Art. 6.1.a RGPD):'}</strong> {isEs ? 'Otorgado por el usuario al remitir voluntariamente una consulta o mensaje a través de WhatsApp o correo electrónico.' : 'Atorgat per l\'usuari en remetre voluntàriament una consulta o missatge a través de WhatsApp o correu electrònic.'}</li>
                </ul>
              </div>

              {/* 4. Conservación de los Datos */}
              <div className="space-y-1 pt-1">
                <h4 className="font-heading font-bold text-brand-blue uppercase text-xs tracking-wider">
                  {isEs ? '4. Conservación de los Datos' : '4. Conservació de les Dades'}
                </h4>
                <p className="text-xs">
                  {isEs
                    ? 'Los datos se conservarán mientras se mantenga la relación comercial o de prestación de servicios. Finalizada la obra, los datos necesarios de facturación y contrato se conservarán bloqueados durante los plazos legalmente exigidos: de 4 a 6 años para obligaciones fiscales y mercantiles, y hasta 10 años conforme a la Ley de Ordenación de la Edificación (LOE) para responder a posibles responsabilidades civiles o garantías por defectos constructivos.'
                    : 'Les dades es conservaran mentre es mantingui la relació comercial o de prestació de serveis. Finalitzada l\'obra, les dades necessàries de facturació i contracte es conservaran bloquejades durant els terminis legalment exigits: de 4 a 6 anys per a obligacions fiscals i mercantils, i fins a 10 anys d\'acord amb la Llei d\'Ordenació de l\'Edificació (LOE) per respondre a possibles responsabilitats civils o garanties per defectes constructius.'}
                </p>
              </div>

              {/* 5. Destinatarios y Subcontratistas */}
              <div className="space-y-1 pt-1">
                <h4 className="font-heading font-bold text-brand-blue uppercase text-xs tracking-wider">
                  {isEs ? '5. Destinatarios (Cesión a Terceros en el Sector)' : '5. Destinataris (Cessió a Tercers en el Sector)'}
                </h4>
                <p className="text-xs">
                  {isEs 
                    ? 'Con carácter general, los datos no se comunicarán a terceros salvo obligación legal. Sin embargo, para la correcta ejecución material de la obra y la operativa del negocio, podrán comunicarse los datos estrictamente necesarios a:'
                    : 'Amb caràcter general, les dades no es comunicaran a tercers llevat d\'obligació legal. No obstant això, per a la correcta execució material de l\'obra i l\'operativa del negoci, es podran comunicar les dades estrictament necessàries a:'}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>{isEs ? 'Subcontratistas y oficios colaboradores:' : 'Subcontractistes i oficis col·laboradors:'}</strong> {isEs ? 'Fontaneros, electricistas, carpinteros o pintores coordinados en obra bajo contrato "llave en mano".' : 'Lampistes, electricistes, fusters o pintors coordinats en obra sota contracte "claus en mà".'}</li>
                  <li><strong>{isEs ? 'Proveedores de materiales de construcción:' : 'Proveïdors de materials de construcció:'}</strong> {isEs ? 'Exclusivamente la dirección de entrega para la descarga de palets, azulejos o áridos a pie de obra.' : 'Exclusivament l\'adreça de lliurament per a la descàrrega de palets, rajoles o àrids a peu d\'obra.'}</li>
                  <li><strong>{isEs ? 'Asesoría fiscal y contable externa:' : 'Assessoria fiscal i comptable externa:'}</strong> {isEs ? 'Como encargada de tratamiento para la gestión tributaria y contable.' : 'Com a encarregada de tractament per a la gestió tributària i comptable.'}</li>
                  <li><strong>{isEs ? 'Administraciones públicas:' : 'Administracions públiques:'}</strong> {isEs ? 'Ayuntamientos de la zona (El Vendrell, Calafell, Santa Oliva, etc.) para la tramitación preceptiva de licencias de obra acordadas con el cliente.' : 'Ajuntaments de la zona (El Vendrell, Calafell, Santa Oliva, etc.) per a la tramitació preceptiva de llicències d\'obra acordades amb el client.'}</li>
                  <li><strong>{isEs ? 'Entidades bancarias:' : 'Entitats bancàries:'}</strong> {isEs ? 'Para la gestión y recepción de transferencias bancarias correspondientes a los pagos por fases.' : 'Per a la gestió i recepció de transferències bancàries corresponents als pagaments per fases.'}</li>
                </ul>
              </div>

              {/* 6. Derechos del Usuario */}
              <div className="bg-emerald-50 border border-emerald-300 p-4 space-y-2 text-xs">
                <h4 className="font-heading font-bold text-emerald-900 uppercase text-xs tracking-wider">
                  {isEs ? '6. Derechos de las Personas Interesadas (ARCO-POL)' : '6. Drets de les Persones Interessades (ARCO-POL)'}
                </h4>
                <p className="text-gray-800">
                  {isEs
                    ? 'Usted tiene derecho a obtener confirmación sobre si en Arévalo Construcciones estamos tratando sus datos personales y a ejercitar los derechos reconocidos por el RGPD y la LOPDGDD:'
                    : 'Vostè té dret a obtenir confirmació sobre si a Arévalo Construcciones estem tractant les seves dades personals i a exercitar els drets reconeguts pel RGPD i la LOPDGDD:'}
                </p>
                <p className="font-semibold text-gray-800">
                  {isEs
                    ? 'Derecho de Acceso, Rectificación, Supresión (olvido), Limitación del tratamiento, Oposición y Portabilidad.'
                    : 'Dret d\'Accés, Rectificació, Supressió (olbit), Limitació del tractament, Oposició i Portabilitat.'}
                </p>
                <p className="text-gray-700">
                  {isEs
                    ? 'Vía de ejercicio: Enviando un correo electrónico firmado a construccionesyreformasarevalo@gmail.com o por correo postal a Camí de Mas d\'en Gual, 43700 El Vendrell (Tarragona), acompañando fotocopia de su DNI. Asimismo, si considera que sus derechos han sido vulnerados, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).'
                    : 'Via d\'exercici: Enviant un correu electrònic signat a construccionesyreformasarevalo@gmail.com o per correu postal a Camí de Mas d\'en Gual, 43700 El Vendrell (Tarragona), acompanyant fotocòpia del seu DNI. Així mateix, si considera que els seus drets han estat vulnerats, té dret a presentar una reclamació davant l\'Agència Espanyola de Protecció de Dades (www.aepd.es).'}
                </p>
              </div>

            </div>
          ) : (
            /* ========================================================= */
            /* AVISO LEGAL OFICIAL (LSSI-CE ART. 10)                     */
            /* ========================================================= */
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-extrabold text-brand-blue">
                {isEs ? 'Aviso Legal e Información General' : 'Avís Legal i Informació General'}
              </h3>

              <p>
                {isEs
                  ? 'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a las personas usuarias de los datos identificativos del titular de este sitio web:'
                  : "En compliment de l'article 10 de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), s'informa a les persones usuàries de les dades identificatives del titular d'aquest lloc web:"}
              </p>

              <div className="bg-stone-50 border border-stone-300 p-4 space-y-1.5 font-mono text-xs">
                <p><strong>{isEs ? 'Titular del portal:' : 'Titular del portal:'}</strong> Javier Arévalo Pizarro</p>
                <p><strong>{isEs ? 'Nombre Comercial:' : 'Nom Comercial:'}</strong> Arévalo Construcciones</p>
                <p><strong>{isEs ? 'NIF:' : 'NIF:'}</strong> 49500348R</p>
                <p><strong>{isEs ? 'Domicilio fiscal:' : 'Domicili fiscal:'}</strong> Camí de Mas d'en Gual, 43700 El Vendrell (Tarragona)</p>
                <p><strong>{isEs ? 'Teléfono:' : 'Telèfon:'}</strong> 622 03 27 04</p>
                <p><strong>{isEs ? 'Email:' : 'Email:'}</strong> construccionesyreformasarevalo@gmail.com</p>
                <p><strong>{isEs ? 'Actividad:' : 'Activitat:'}</strong> {isEs ? 'Construcción, albañilería, reformas integrales y rehabilitación.' : 'Construcció, paleteria, reformes integrals i rehabilitació.'}</p>
                <p className="text-stone-500 text-[11px] font-sans pt-1">
                  * {isEs ? 'Nota: La dirección indicada corresponde exclusivamente a la sede fiscal. No se dispone de exposición ni atención comercial al público en este domicilio; la atención se presta directamente a domicilio in situ o telemáticamente.' : 'Nota: L\'adreça indicada correspon exclusivament a la seu fiscal. No es disposa d\'exposició ni atenció comercial al públic en aquest domicili; l\'atenció es presta directament a domicili in situ o telemàticament.'}
                </p>
              </div>

              <h4 className="text-base font-heading font-bold text-brand-blue pt-2">
                {isEs ? 'Propiedad intelectual e industrial' : 'Propietat intel·lectual i industrial'}
              </h4>
              <p>
                {isEs
                  ? 'El diseño del portal y sus códigos fuente, así como los logos, marcas, fotografías reales de obras y reformas, textos y demás signos distintivos que aparecen en el mismo pertenecen a Javier Arévalo Pizarro o cuentan con la correspondiente autorización, y están protegidos por los correspondientes derechos de propiedad intelectual e industrial según el Real Decreto Legislativo 1/1996.'
                  : "El disseny del portal i els seus codis font, així com els logos, marques, fotografies reals d'obres i reformes, textos i altres signes distintius que hi apareixen pertanyen a Javier Arévalo Pizarro o compten amb la corresponent autorització, i estan protegits pels corresponents drets de propietat intel·lectual i industrial segons el Reial Decret Legislatiu 1/1996."}
              </p>

              <h4 className="text-base font-heading font-bold text-brand-blue pt-2">
                {isEs ? 'Responsabilidad de los contenidos' : 'Responsabilitat dels continguts'}
              </h4>
              <p>
                {isEs
                  ? 'Arévalo Construcciones no se hace responsable de la legalidad de otros sitios web de terceros desde los que pueda accederse al portal. Tampoco responde por la legalidad de otros sitios web de terceros que pudieran estar vinculados o enlazados desde este portal.'
                  : "Arévalo Construcciones no es fa responsable de la legalitat d'altres llocs web de tercers des dels quals es pugui accedir al portal. Tampoc respon per la legalitat d'altres llocs web de tercers que poguessin estar vinculats o enllaçats des d'aquest portal."}
              </p>
              <p>
                {isEs
                  ? 'Arévalo Construcciones se reserva el derecho a realizar cambios en el sitio web sin previo aviso, al objeto de mantener actualizada su información, añadiendo, modificando, corrigiendo o eliminando los contenidos publicados o el diseño del portal.'
                  : "Arévalo Construcciones es reserva el dret a realitzar canvis en el lloc web sense previ avís, a fi de mantenir actualitzada la seva informació, afegint, modificant, corregint o eliminant els continguts publicats o el disseny del portal."}
              </p>

              <h4 className="text-base font-heading font-bold text-brand-blue pt-2">
                {isEs ? 'Reproducción de contenidos' : 'Reproducció de continguts'}
              </h4>
              <p>
                {isEs
                  ? 'Se prohíbe expresamente la reproducción total o parcial de los contenidos, fotografías y transformaciones de obras publicadas en este portal sin la previa autorización expresa y por escrito de Javier Arévalo Pizarro.'
                  : "Es prohibeix expressament la reproducció total o parcial dels continguts, fotografies i transformacions d'obres publicades en aquest portal sense la prèvia autorització expressa i per escrit de Javier Arévalo Pizarro."}
              </p>

              <h4 className="text-base font-heading font-bold text-brand-blue pt-2">
                {isEs ? 'Ley aplicable y jurisdicción' : 'Llei aplicable i jurisdicció'}
              </h4>
              <p>
                {isEs
                  ? 'La ley aplicable en caso de disputa o conflicto de interpretación de los términos que conforman este aviso legal, así como cualquier cuestión relacionada con los servicios del presente portal, será la ley española, sometiéndose las partes a los juzgados y tribunales competentes de El Vendrell (Tarragona).'
                  : "La llei aplicable en cas de disputa o conflicte d'interpretació dels termes que conformen aquest avís legal, així com qualsevol qüestió relacionada amb els serveis del present portal, serà la llei espanyola, sotmetent-se les parts als jutjats i tribunals competents d'El Vendrell (Tarragona)."}
              </p>
            </div>
          )}

        </div>

        {/* Footer del Modal */}
        <div className="bg-stone-100 border-t border-stone-300 p-4 flex items-center justify-between">
          <span className="text-[11px] text-stone-500 font-medium">
            Arévalo Construcciones · NIF: 49500348R · El Vendrell
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold py-2.5 px-6 rounded-none text-xs uppercase tracking-wider transition cursor-pointer shadow-sm"
          >
            {isEs ? 'Entendido y Cerrar' : 'Entès i Tancar'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LegalModal;
