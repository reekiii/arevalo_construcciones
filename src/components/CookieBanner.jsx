import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('arevalo_cookies');
    if (!savedConsent) {
      // Retardo suave para que la página cargue primero
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(savedConsent);
        setAnalyticsEnabled(!!parsed.analytics);
      } catch (e) {
        // En caso de valor legacy no parseable
        setAnalyticsEnabled(savedConsent === 'all');
      }
    }
  }, []);

  // Escuchar cuando el usuario hace clic en "Política de Cookies" del footer
  useEffect(() => {
    const handleOpen = () => setShowModal(true);
    window.addEventListener('open-cookie-settings', handleOpen);
    return () => window.removeEventListener('open-cookie-settings', handleOpen);
  }, []);

  const handleAcceptAll = () => {
    const consent = { technical: true, analytics: true, timestamp: Date.now() };
    localStorage.setItem('arevalo_cookies', JSON.stringify(consent));
    setAnalyticsEnabled(true);
    setIsVisible(false);
    setShowModal(false);
  };

  const handleAcceptEssential = () => {
    const consent = { technical: true, analytics: false, timestamp: Date.now() };
    localStorage.setItem('arevalo_cookies', JSON.stringify(consent));
    setAnalyticsEnabled(false);
    setIsVisible(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    const consent = { technical: true, analytics: analyticsEnabled, timestamp: Date.now() };
    localStorage.setItem('arevalo_cookies', JSON.stringify(consent));
    setIsVisible(false);
    setShowModal(false);
  };

  return (
    <>
      {/* Banner Flotante Inferior */}
      {isVisible && !showModal && (
        <div className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md md:max-w-lg z-40 bg-white/95 backdrop-blur-md rounded-none p-5 sm:p-6 shadow-2xl border border-stone-300 text-gray-800 animate-fade-in">
          <div className="flex items-start gap-3.5 mb-3">
            <div className="w-10 h-10 rounded-none bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 text-xl shadow-sm border border-amber-200">
              🍪
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-brand-blue text-base sm:text-lg leading-tight">
                {t('cookie_title')}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                {t('cookie_desc')}
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <button
              onClick={() => setShowModal(true)}
              className="text-xs font-heading font-semibold text-gray-600 hover:text-brand-blue underline py-1 transition order-3 sm:order-1"
            >
              {t('cookie_configure')}
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto order-1 sm:order-2 justify-end">
              <button
                onClick={handleAcceptEssential}
                className="flex-1 sm:flex-none px-3.5 py-2.5 bg-stone-100 hover:bg-stone-200 text-gray-700 rounded-none font-heading font-bold text-xs uppercase tracking-wider transition border border-stone-300"
              >
                {t('cookie_essential_only')}
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-none font-heading font-bold text-xs uppercase tracking-wider transition shadow-md hover:shadow-lg"
              >
                {t('cookie_accept_all')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Configuración y Privacidad */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-none max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-300 text-gray-800 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🍪</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-blue">
                    {t('cookie_modal_title')}
                  </h3>
                  <p className="text-xs text-brand-accent font-heading font-bold uppercase tracking-wider">
                    Arévalo Construcciones
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-700 p-2 rounded-none hover:bg-gray-100 transition"
                aria-label="Cerrar modal"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
              {t('cookie_modal_desc')}
            </p>

            <div className="space-y-4 mb-8">
              {/* Cookies Técnicas */}
              <div className="p-4 rounded-none bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-heading font-bold text-sm text-gray-900">
                    {t('cookie_necessary_title')}
                  </h4>
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-none border border-emerald-300">
                    {t('cookie_always_active')}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {t('cookie_necessary_desc')}
                </p>
              </div>

              {/* Cookies Analíticas */}
              <div className="p-4 rounded-none bg-stone-50 border border-stone-200">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="font-heading font-bold text-sm text-gray-900">
                    {t('cookie_analytics_title')}
                  </h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-none peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-none after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-blue"></div>
                  </label>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {t('cookie_analytics_desc')}
                </p>
              </div>
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={handleAcceptEssential}
                className="w-full sm:w-auto px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-gray-700 rounded-none font-heading font-bold text-xs uppercase tracking-wider transition border border-stone-200 text-center"
              >
                {t('cookie_essential_only')}
              </button>
              <button
                onClick={handleSavePreferences}
                className="w-full sm:w-auto px-5 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-none font-heading font-bold text-xs uppercase tracking-wider transition shadow-sm text-center"
              >
                {t('cookie_save_preferences')}
              </button>
              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-5 py-2.5 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-none font-heading font-bold text-xs uppercase tracking-wider transition shadow-md text-center"
              >
                {t('cookie_accept_all')}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default CookieBanner;
