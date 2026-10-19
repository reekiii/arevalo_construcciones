import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function Contacto() {
  const { t, lang } = useLanguage();

  const presets = [
    {
      id: 'bano',
      icon: '🚿',
      label: t('contact_wa_opt1'),
      textEs: 'Hola Javier, me gustaría pedir información y presupuesto para reformar un baño / plato de ducha.',
      textCa: 'Hola Javier, m\'agradaria demanar informació i pressupost per a reformar un bany / plat de dutxa.'
    },
    {
      id: 'cocina',
      icon: '🍳',
      label: t('contact_wa_opt2'),
      textEs: 'Hola Javier, quiero pedir presupuesto para una reforma de cocina.',
      textCa: 'Hola Javier, vull demanar pressupost per a una reforma de cuina.'
    },
    {
      id: 'integral',
      icon: '🏡',
      label: t('contact_wa_opt3'),
      textEs: 'Hola Javier, tengo un proyecto de reforma integral y quiero coordinar una visita técnica a la vivienda.',
      textCa: 'Hola Javier, tinc un projecte de reforma integral i vull coordinar una visita tècnica a l\'habitatge.'
    },
    {
      id: 'exterior',
      icon: '🧱',
      label: t('contact_wa_opt4'),
      textEs: 'Hola Javier, quiero presupuesto para suelos / terraza exterior / impermeabilización.',
      textCa: 'Hola Javier, vull pressupost per a terres / terrassa exterior / impermeabilització.'
    },
    {
      id: 'general',
      icon: '💬',
      label: t('contact_wa_opt5'),
      textEs: 'Hola Javier, me pongo en contacto desde tu web para hacerte una consulta de obra.',
      textCa: 'Hola Javier, em poso en contacte des del teu web per fer-te una consulta d\'obra.'
    }
  ];

  const openLegal = (type) => {
    window.dispatchEvent(new CustomEvent('open-legal-modal', { detail: { type } }));
  };

  return (
    <div className="animate-fade-in py-12 sm:py-16 md:py-20 bg-brand-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-brand-accent font-heading font-bold tracking-widest uppercase text-xs mb-2 block">
            {t('contact_hero_badge')}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-4 leading-tight">
            {t('contact_title')}
          </h1>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto mb-5 rounded-none"></div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            {t('contact_desc')}
          </p>
        </div>

        {/* ============================================================== */}
        {/* TARJETA PRINCIPAL: WHATSAPP DIRECTO CON JAVIER ARÉVALO */}
        {/* ============================================================== */}
        <div className="bg-white border-2 border-[#25D366]/40 shadow-2xl p-6 sm:p-10 lg:p-12 mb-10 relative overflow-hidden">
          {/* Cinta superior verde WhatsApp */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Columna Izquierda: Mensaje y llamada a la acción */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-300 px-3 py-1 text-xs font-heading font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                {t('contact_wa_tag')}
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-brand-blue leading-tight">
                {t('contact_wa_title')}
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {t('contact_wa_desc')}
              </p>

              {/* Botón principal de WhatsApp */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/34622032704?text=${encodeURIComponent(
                    lang === 'ca'
                      ? 'Hola Javier, em poso en contacte des del teu web per demanar pressupost per a una reforma.'
                      : 'Hola Javier, me pongo en contacto desde tu web para pedir presupuesto para una reforma.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-heading font-extrabold py-4 px-8 text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 w-full sm:w-auto text-center"
                >
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 21.0822C10.5186 21.0829 9.04306 20.6726 7.766 19.897L7.545 19.765L3.89 20.735L4.885 17.155L4.74 16.924C3.88289 15.5411 3.42939 13.9351 3.431 12.2842C3.43261 7.5342 7.29161 3.6702 12.046 3.6702C14.3486 3.67252 16.5546 4.57147 18.1818 6.20235C19.809 7.83323 20.7047 10.0416 20.704 12.3462C20.7024 17.0962 16.8434 20.9602 12.089 20.9602L12.031 21.0822ZM7.228 18.257L7.498 18.417C8.75239 19.1678 10.1983 19.5599 11.666 19.5582C15.688 19.5582 18.962 16.2842 18.963 12.2612C18.9642 10.3204 18.2096 8.46088 16.8373 7.08779C15.465 5.7147 13.606 4.95924 11.665 4.95824C7.643 4.95824 4.368 8.23224 4.368 12.2542C4.3664 13.7842 4.7834 15.2752 5.58 16.549L5.753 16.822L5.149 19.006L7.387 18.396L7.228 18.257ZM16.321 14.1682C16.088 14.0512 14.938 13.4832 14.726 13.4062C14.515 13.3282 14.36 13.2902 14.205 13.5232C14.05 13.7552 13.626 14.2582 13.498 14.4132C13.371 14.5682 13.242 14.5872 13.01 14.4712C12.777 14.3542 11.968 14.0902 11.015 13.2412C10.274 12.5812 9.776 11.7582 9.648 11.5262C9.52 11.2932 9.634 11.1672 9.75 11.0512C9.855 10.9462 9.983 10.7782 10.1 10.6422C10.216 10.5072 10.255 10.4102 10.332 10.2552C10.41 10.1002 10.371 9.9652 10.313 9.8492C10.255 9.7332 9.789 8.5902 9.596 8.1252C9.407 7.6712 9.215 7.7332 9.07 7.7212C8.935 7.7112 8.78 7.7112 8.625 7.7112C8.47 7.7112 8.218 7.7692 7.99 8.0212C7.761 8.2732 7.123 8.8732 7.123 10.0942C7.123 11.3152 8.01 12.4972 8.146 12.6712C8.281 12.8462 9.882 15.4262 12.441 16.4382C14.939 17.4262 14.996 17.2272 15.344 17.1882C15.693 17.1502 16.486 16.7052 16.641 16.2402C16.796 15.7752 16.796 15.3882 16.719 15.3102C16.642 15.2332 16.486 15.1942 16.254 15.0782L16.321 14.1682Z" />
                  </svg>
                  <span>{t('contact_wa_btn')}</span>
                </a>
              </div>

              {/* Checks de confianza */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-gray-700">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span> {t('contact_trust1')}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span> {t('contact_trust2')}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span> {t('contact_trust3')}
                </span>
              </div>
            </div>

            {/* Columna Derecha: Presets rápidos de 1 clic */}
            <div className="lg:col-span-5 bg-stone-50 border border-stone-300 p-5 sm:p-6 space-y-3">
              <div className="text-xs font-heading font-extrabold text-brand-blue uppercase tracking-wider mb-2">
                {t('contact_wa_presets_title')}
              </div>

              <div className="space-y-2">
                {presets.map((preset) => {
                  const messageText = lang === 'ca' ? preset.textCa : preset.textEs;
                  return (
                    <a
                      key={preset.id}
                      href={`https://wa.me/34622032704?text=${encodeURIComponent(messageText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 bg-white hover:bg-emerald-50 border border-stone-200 hover:border-emerald-400 transition shadow-sm text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{preset.icon}</span>
                        <span className="text-xs sm:text-sm font-heading font-bold text-gray-800 group-hover:text-emerald-800">
                          {preset.label}
                        </span>
                      </div>
                      <span className="text-[#25D366] font-bold text-base transition transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  );
                })}
              </div>

              <p className="text-[11px] text-stone-500 text-center pt-1 font-medium">
                💬 {lang === 'ca' ? 'Obre directament WhatsApp amb el text llest per enviar' : 'Abre directamente WhatsApp con el texto listo para enviar'}
              </p>
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* FILA DE 2 COLUMNAS: LLAMADA TELEFÓNICA + EMAIL OFICIAL */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          
          {/* Tarjeta Llamada Telefónica */}
          <div className="bg-white border border-stone-300 p-6 sm:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-blue mb-2">
                {t('contact_call_title')}
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {t('contact_call_desc')}
              </p>

              <div className="bg-stone-50 border border-stone-200 p-3 mb-6">
                <div className="text-[11px] text-stone-500 font-bold uppercase tracking-wider mb-0.5">
                  {t('contact_call_hours_lbl')}
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-800">
                  {t('contact_call_hours_val')}
                </div>
              </div>
            </div>

            <div>
              <a
                href="tel:622032704"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold py-3.5 px-6 text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition w-full text-center"
              >
                <span>📞</span>
                <span>{t('contact_call_btn')}</span>
              </a>
            </div>
          </div>

          {/* Tarjeta Correo Electrónico Oficial */}
          <div className="bg-white border border-stone-300 p-6 sm:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-blue mb-2">
                {t('contact_email_title')}
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {t('contact_email_desc')}
              </p>

              <div className="bg-stone-50 border border-stone-200 p-3 mb-6">
                <div className="text-[11px] text-stone-500 font-bold uppercase tracking-wider mb-0.5">
                  Email
                </div>
                <a
                  href="mailto:construccionesyreformasarevalo@gmail.com"
                  className="text-xs sm:text-sm font-bold text-brand-blue hover:underline break-all"
                >
                  construccionesyreformasarevalo@gmail.com
                </a>
              </div>
            </div>

            <div>
              <a
                href="mailto:construccionesyreformasarevalo@gmail.com?subject=Proyecto%20de%20reforma%20-%20Arévalo%20Construcciones"
                className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-brand-blue border border-stone-300 font-heading font-bold py-3.5 px-6 text-xs sm:text-sm uppercase tracking-wider shadow-sm transition w-full text-center"
              >
                <span>✉️</span>
                <span>{t('contact_email_btn')}</span>
              </a>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* BANNERS: GOOGLE RESEÑAS + INSTAGRAM OFICIAL */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
          {/* Tarjeta Google Maps / Reseñas */}
          <div className="bg-stone-900 text-white p-5 sm:p-6 flex flex-col justify-between gap-4 shadow-lg border border-stone-800 relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-400 text-stone-950 font-black text-xl rounded-none flex items-center justify-center flex-shrink-0 shadow-md">
                ⭐
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-heading font-extrabold text-base sm:text-lg">
                    {lang === 'ca' ? 'Ressenyes a Google' : 'Reseñas en Google'}
                  </span>
                  <span className="bg-amber-400/20 text-amber-300 text-[10px] font-heading font-bold px-2 py-0.5 border border-amber-400/40 uppercase">
                    5.0 ★★★★★
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {lang === 'ca'
                    ? 'Has fet una reforma amb nosaltres? La teva opinió ens ajuda a continuar creixent com a empresa familiar.'
                    : '¿Has hecho una reforma con nosotros? Tu opinión en Google nos ayuda a seguir creciendo como empresa familiar.'}
                </p>
              </div>
            </div>
            <a
              href="https://g.page/r/CeSCdIVSlsgGEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-heading font-bold py-2.5 px-5 text-xs uppercase tracking-wider shadow-md transition w-full sm:w-auto self-start"
            >
              <span>⭐</span>
              <span>{lang === 'ca' ? 'Deixar una ressenya a Google' : 'Dejar una reseña en Google'}</span>
              <span>→</span>
            </a>
          </div>

          {/* Tarjeta Instagram Oficial */}
          <div className="bg-gradient-to-r from-[#2e0854] via-[#4a1236] to-[#2e0854] text-white p-5 sm:p-6 flex flex-col justify-between gap-4 shadow-lg border border-purple-900/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-none flex items-center justify-center flex-shrink-0 shadow-md">
                <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <div className="font-heading font-extrabold text-base sm:text-lg mb-1">
                  {lang === 'ca' ? 'Segueix-nos a Instagram' : 'Síguenos en Instagram'}
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {lang === 'ca'
                    ? 'Descobreix fotos i vídeos del dia a dia de les nostres obres a @construcciones_arevalo_'
                    : 'Descubre fotos y vídeos del día a día de nuestras obras en @construcciones_arevalo_'}
                </p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/construcciones_arevalo_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-stone-100 font-heading font-bold py-2.5 px-5 text-xs uppercase tracking-wider shadow-md transition w-full sm:w-auto self-start"
            >
              <span>{lang === 'ca' ? 'Veure perfil' : 'Ver perfil'}</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BLOQUE SERVICIO A DOMICILIO (ACLARANDO QUE NO HAY TIENDA FÍSICA) */}
        {/* ============================================================== */}
        <div className="bg-brand-bg-alt border border-stone-300 p-6 sm:p-8 lg:p-10 mb-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-stone-300">
            <div>
              <div className="inline-block bg-brand-blue text-white text-[11px] font-heading font-bold uppercase tracking-wider px-2.5 py-0.5 mb-2">
                📍 {t('contact_onsite_badge')}
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-brand-blue">
                {t('contact_onsite_title')}
              </h3>
            </div>
            <div className="bg-emerald-100 text-emerald-800 border border-emerald-300 px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider flex-shrink-0">
              ✓ {lang === 'ca' ? 'Mesurament i visita 100% Gratuïts' : 'Medición y visita 100% Gratuitos'}
            </div>
          </div>

          <div className="pt-6 space-y-4">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {t('contact_onsite_desc')}
            </p>

            <div className="bg-white border border-stone-300 p-4 sm:p-5">
              <div className="text-xs font-heading font-extrabold text-brand-blue uppercase tracking-wider mb-1.5">
                🗺️ {t('contact_coverage_lbl')}:
              </div>
              <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">
                {t('contact_coverage_val')}
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* INFORMACIÓN FISCAL Y LEGAL OBLIGATORIA (LSSI / RGPD) */}
        {/* ============================================================== */}
        <div className="bg-white border border-stone-300 p-5 sm:p-6 text-xs text-gray-600 space-y-3 shadow-sm">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2">
            <h4 className="font-heading font-bold text-gray-800 uppercase tracking-wider text-xs">
              ⚖️ {t('contact_fiscal_title')}
            </h4>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => openLegal('legal')}
                className="text-brand-blue hover:underline font-semibold cursor-pointer"
              >
                {lang === 'ca' ? 'Avís Legal' : 'Aviso Legal'}
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => openLegal('privacy')}
                className="text-brand-blue hover:underline font-semibold cursor-pointer"
              >
                {lang === 'ca' ? 'Privacitat' : 'Privacidad'}
              </button>
            </div>
          </div>

          <p className="leading-relaxed text-[11px] sm:text-xs text-stone-500">
            {t('contact_fiscal_desc')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2 text-[11px] font-mono bg-stone-50 p-3 border border-stone-200">
            <div>
              <span className="text-stone-400 block font-sans uppercase font-bold text-[10px]">Titular:</span>
              <span className="font-semibold text-gray-800">Javier Arévalo Pizarro</span>
            </div>
            <div>
              <span className="text-stone-400 block font-sans uppercase font-bold text-[10px]">NIF:</span>
              <span className="font-semibold text-gray-800">49500348R</span>
            </div>
            <div>
              <span className="text-stone-400 block font-sans uppercase font-bold text-[10px]">Sede Fiscal:</span>
              <span className="font-semibold text-gray-800">Camí de Mas d'en Gual, 43700 El Vendrell</span>
            </div>
            <div>
              <span className="text-stone-400 block font-sans uppercase font-bold text-[10px]">Atención:</span>
              <span className="font-semibold text-emerald-700">A domicilio y WhatsApp</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contacto;
