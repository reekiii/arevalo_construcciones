import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function Contacto() {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", "30b52ee7-230a-4417-a9e6-aaf8dec8bc2a");
    formData.append("subject", "Nueva solicitud de presupuesto - Arévalo Construcciones");
    formData.append("from_name", "Web Arévalo Construcciones");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(data.message || t('contact_error_desc'));
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(t('contact_error_desc'));
    }
  };

  return (
    <div className="animate-fade-in py-12 sm:py-16 md:py-20 bg-brand-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-4">
            {t('contact_title')}
          </h1>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto mb-6 rounded-none"></div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
            {t('contact_desc')}
          </p>
        </div>

        <div className="bg-white rounded-none shadow-2xl overflow-hidden max-w-5xl mx-auto border border-stone-300">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Información de contacto y WhatsApp con fondo beige oscuro */}
            <div className="md:col-span-2 bg-brand-bg-alt text-gray-800 p-6 sm:p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-300">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-brand-blue mb-3 sm:mb-4">
                  {t('contact_title')}
                </h3>
                <p className="text-gray-700 mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed">
                  {t('contact_desc')}
                </p>
                
                <div className="space-y-6 mb-8 sm:mb-10">
                  <div className="flex items-start">
                    <div className="mr-3 text-brand-blue flex-shrink-0 mt-1">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-stone-600 uppercase tracking-wider font-bold">{t('contact_phone_lbl')}</p>
                      <a href="tel:622032704" className="text-xl sm:text-2xl font-bold font-heading text-brand-blue hover:text-brand-blue-dark transition">
                        622 03 27 04
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-3 text-brand-blue flex-shrink-0 mt-0.5">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-stone-600 uppercase tracking-wider font-bold">{t('contact_email_lbl')}</p>
                      <span className="text-sm font-semibold text-gray-800 break-all">info@arevaloconstrucciones.es</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de WhatsApp */}
              <a 
                href={`https://wa.me/34622032704?text=${encodeURIComponent(
                  lang === 'ca' ? "Hola, m'agradaria demanar un pressupost per a una reforma." : "Hola, me gustaría pedir un presupuesto para una reforma."
                )}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-heading font-bold py-3.5 sm:py-4 px-6 rounded-none transition duration-300 w-full shadow-lg transform hover:-translate-y-0.5 text-xs sm:text-sm uppercase tracking-wider"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2.5 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 21.0822C10.5186 21.0829 9.04306 20.6726 7.766 19.897L7.545 19.765L3.89 20.735L4.885 17.155L4.74 16.924C3.88289 15.5411 3.42939 13.9351 3.431 12.2842C3.43261 7.5342 7.29161 3.6702 12.046 3.6702C14.3486 3.67252 16.5546 4.57147 18.1818 6.20235C19.809 7.83323 20.7047 10.0416 20.704 12.3462C20.7024 17.0962 16.8434 20.9602 12.089 20.9602L12.031 21.0822ZM7.228 18.257L7.498 18.417C8.75239 19.1678 10.1983 19.5599 11.666 19.5582C15.688 19.5582 18.962 16.2842 18.963 12.2612C18.9642 10.3204 18.2096 8.46088 16.8373 7.08779C15.465 5.7147 13.606 4.95924 11.665 4.95824C7.643 4.95824 4.368 8.23224 4.368 12.2542C4.3664 13.7842 4.7834 15.2752 5.58 16.549L5.753 16.822L5.149 19.006L7.387 18.396L7.228 18.257ZM16.321 14.1682C16.088 14.0512 14.938 13.4832 14.726 13.4062C14.515 13.3282 14.36 13.2902 14.205 13.5232C14.05 13.7552 13.626 14.2582 13.498 14.4132C13.371 14.5682 13.242 14.5872 13.01 14.4712C12.777 14.3542 11.968 14.0902 11.015 13.2412C10.274 12.5812 9.776 11.7582 9.648 11.5262C9.52 11.2932 9.634 11.1672 9.75 11.0512C9.855 10.9462 9.983 10.7782 10.1 10.6422C10.216 10.5072 10.255 10.4102 10.332 10.2552C10.41 10.1002 10.371 9.9652 10.313 9.8492C10.255 9.7332 9.789 8.5902 9.596 8.1252C9.407 7.6712 9.215 7.7332 9.07 7.7212C8.935 7.7112 8.78 7.7112 8.625 7.7112C8.47 7.7112 8.218 7.7692 7.99 8.0212C7.761 8.2732 7.123 8.8732 7.123 10.0942C7.123 11.3152 8.01 12.4972 8.146 12.6712C8.281 12.8462 9.882 15.4262 12.441 16.4382C14.939 17.4262 14.996 17.2272 15.344 17.1882C15.693 17.1502 16.486 16.7052 16.641 16.2402C16.796 15.7752 16.796 15.3882 16.719 15.3102C16.642 15.2332 16.486 15.1942 16.254 15.0782L16.321 14.1682Z" />
                </svg>
                {t('contact_wa_btn')}
              </a>
            </div>

            {/* Formulario conectado a Web3Forms */}
            {status === 'success' ? (
              <div className="md:col-span-3 p-6 sm:p-8 md:p-14 flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 flex items-center justify-center text-3xl mb-5 rounded-none border border-emerald-300 shadow-sm">
                  ✓
                </div>
                <h4 className="text-2xl font-heading font-extrabold text-brand-blue mb-3">
                  {t('contact_success_title')}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                  {t('contact_success_desc')}
                </p>
                <button 
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold py-3.5 px-8 rounded-none transition shadow-md text-xs sm:text-sm uppercase tracking-wider"
                >
                  {t('contact_send_another')}
                </button>
              </div>
            ) : (
              <div className="md:col-span-3 p-6 sm:p-8 md:p-14">
                <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-blue mb-6 sm:mb-8">
                  {t('contact_form_title')}
                </h4>

                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm">
                    <p className="font-bold mb-1">{t('contact_error_title')}</p>
                    <p className="text-xs leading-relaxed">{errorMessage}</p>
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Honeypot anti-spam de Web3Forms */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-xs font-heading font-bold uppercase text-gray-700 mb-2">
                        {t('contact_name')} *
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        id="nombre" 
                        required
                        disabled={status === 'loading'}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-300 rounded-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition text-sm disabled:opacity-50" 
                        placeholder={t('contact_name_placeholder')} 
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-xs font-heading font-bold uppercase text-gray-700 mb-2">
                        {t('contact_phone')} *
                      </label>
                      <input 
                        type="tel" 
                        name="phone" 
                        id="telefono" 
                        required
                        disabled={status === 'loading'}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-300 rounded-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition text-sm disabled:opacity-50" 
                        placeholder={t('contact_phone_placeholder')} 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-heading font-bold uppercase text-gray-700 mb-2">
                        {t('contact_email_field')} *
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        required
                        disabled={status === 'loading'}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-300 rounded-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition text-sm disabled:opacity-50" 
                        placeholder={t('contact_email_placeholder')} 
                      />
                    </div>
                    <div>
                      <label htmlFor="servicio" className="block text-xs font-heading font-bold uppercase text-gray-700 mb-2">
                        {t('contact_service')}
                      </label>
                      <select 
                        name="service" 
                        id="servicio" 
                        disabled={status === 'loading'}
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-300 rounded-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition text-sm disabled:opacity-50"
                      >
                        <option value="">{t('contact_service_opt')}</option>
                        <option value="Reforma Integral">{t('s1_title')}</option>
                        <option value="Obra Nueva">{t('s2_title')}</option>
                        <option value="Rehabilitación">{t('s3_title')}</option>
                        <option value="Otros">{lang === 'ca' ? 'Altres serveis' : 'Otros servicios'}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-heading font-bold uppercase text-gray-700 mb-2">
                      {t('contact_msg')} *
                    </label>
                    <textarea 
                      name="message" 
                      id="mensaje" 
                      rows="4" 
                      required
                      disabled={status === 'loading'}
                      className="w-full px-5 py-3.5 bg-gray-50 border border-gray-300 rounded-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition resize-none text-sm disabled:opacity-50" 
                      placeholder={t('contact_msg_placeholder')}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-brand-blue hover:bg-brand-blue-dark disabled:bg-stone-400 text-white font-heading font-bold py-4 px-6 rounded-none transition duration-300 shadow-lg text-sm uppercase tracking-wider flex items-center justify-center cursor-pointer disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        {t('contact_sending')}
                      </span>
                    ) : (
                      t('contact_submit')
                    )}
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
