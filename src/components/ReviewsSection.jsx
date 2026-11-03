import React from "react";
import { useLanguage } from "../context/LanguageContext";

const GoogleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

const StarIcon = ({ className = "w-4 h-4 text-amber-400 fill-amber-400" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const reviewsData = [
  {
    id: "nazaret",
    name: "nazaret sanchez",
    initials: "NS",
    avatarBg: "bg-blue-600",
    badgeEs: "3 reseñas · 1 foto",
    badgeCa: "3 ressenyes · 1 foto",
    isLocalGuide: false,
    rating: 5,
    dateEs: "Hace una semana",
    dateCa: "Fa una setmana",
    tagEs: "Trabajo de 10 · Máximo mimo",
    tagCa: "Treball de 10 · Màxima cura",
    text: "¡Ha quedado todo precioso! Un trabajo de 10, cuidando cada detalle y haciendo las cosas con mucho mimo. Da gusto encontrar a alguien tan trabajador, que se implica de verdad y se preocupa de que todo quede bien. Si buscáis un albañil de confianza, que trabaje bien y sea detallista, lo recomiendo sin duda. ¡Un resultado espectacular!"
  },
  {
    id: "francisco",
    name: "Francisco Carrasco",
    initials: "FC",
    avatarBg: "bg-slate-800",
    badgeEs: "8 reseñas · 1 foto",
    badgeCa: "8 ressenyes · 1 foto",
    isLocalGuide: false,
    rating: 5,
    dateEs: "Hace 5 días",
    dateCa: "Fa 5 dies",
    tagEs: "Reforma general · Calidad máxima",
    tagCa: "Reforma general · Màxima qualitat",
    text: "Muy agradecido con el trato y el trabajo realizado en mi casa, lo elegí y me hizo una reforma general, podría haber escogido mejor precio pero no mejor calidad... No le doy más estrellas por qué no me deja! Un placer! 👍🏽…"
  },
  {
    id: "anna",
    name: "Anna Del Fresno i Gambín",
    initials: "AF",
    avatarBg: "bg-amber-600",
    badgeEs: "Local Guide · 76 reseñas · 1 foto",
    badgeCa: "Local Guide · 76 ressenyes · 1 foto",
    isLocalGuide: true,
    rating: 5,
    dateEs: "Hace una semana",
    dateCa: "Fa una setmana",
    tagEs: "100% Recomendable · De confianza",
    tagCa: "100% Recomanable · De confiança",
    text: "Muy profesionales, rápidos, cumplidores y de confianza. 100% recomendables. Muy contenta con los trabajos que me han hecho"
  },
  {
    id: "ariadna",
    name: "Ariadna Raurich",
    initials: "AR",
    avatarBg: "bg-emerald-700",
    badgeEs: "3 reseñas",
    badgeCa: "3 ressenyes",
    isLocalGuide: false,
    rating: 5,
    dateEs: "Hace una semana",
    dateCa: "Fa una setmana",
    tagEs: "100% Recomendable",
    tagCa: "100% Recomanable",
    text: "Muy contenta con el resultado de su trabajo 100% recomendable"
  },
  {
    id: "francisca",
    name: "Francisca Gambin Basuli",
    initials: "FG",
    avatarBg: "bg-indigo-700",
    badgeEs: "1 reseña",
    badgeCa: "1 ressenya",
    isLocalGuide: false,
    rating: 5,
    dateEs: "Hace una semana",
    dateCa: "Fa una setmana",
    tagEs: "Cliente Satisfecho",
    tagCa: "Client Satisfet",
    text: "Muy bien!"
  }
];

const GOOGLE_REVIEW_URL = "https://g.page/r/CeSCdIVSlsgGEBM/review";

export default function ReviewsSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-brand-bg border-b border-stone-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-stone-300 px-3.5 py-1 text-xs font-heading font-bold uppercase tracking-wider text-brand-blue mb-3 shadow-xs">
            <GoogleIcon className="w-4 h-4" />
            <span>{t("reviews_badge")}</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-3 leading-tight">
            {t("reviews_title")}
          </h2>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto mb-4 rounded-none"></div>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 font-normal leading-relaxed">
            {t("reviews_desc")}
          </p>
        </div>

        {/* Tarjeta resumen de Google 5.0 */}
        <div className="bg-white border border-stone-300 p-6 sm:p-8 mb-10 sm:mb-12 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center justify-center w-16 h-16 bg-stone-50 border border-stone-200 flex-shrink-0">
                <GoogleIcon className="w-9 h-9" />
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 leading-none">
                    5.0
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">
                  {t("reviews_count_lbl")} · <span className="text-emerald-700 font-bold">{t("reviews_satisfaction")}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 shadow-md transition duration-300 transform hover:-translate-y-0.5"
              >
                <GoogleIcon className="w-4 h-4 bg-white rounded-full p-0.5" />
                <span>{t("reviews_btn_google")}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Grid de Reseñas: Las 3 grandes primero, luego las 2 siguientes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-6">
          {reviewsData.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-stone-300 p-6 sm:p-7 shadow-md flex flex-col justify-between relative hover:border-brand-blue/50 transition-all duration-300"
            >
              {/* Badge destacado arriba */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-block bg-brand-light text-brand-blue border border-brand-blue/20 text-[11px] font-heading font-bold uppercase tracking-wider px-2.5 py-0.5">
                  {lang === "ca" ? rev.tagCa : rev.tagEs}
                </span>
                <span className="text-[11px] text-stone-400 font-medium">
                  {lang === "ca" ? rev.dateCa : rev.dateEs}
                </span>
              </div>

              {/* Estrellas */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(rev.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Texto de la reseña */}
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal italic mb-6 flex-grow">
                "{rev.text}"
              </p>

              {/* Footer con autor y badge de Google */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${rev.avatarBg} text-white font-heading font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-xs`}>
                    {rev.initials}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 text-sm leading-tight">
                      {rev.name}
                    </h3>
                    <div className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                      {rev.isLocalGuide && (
                        <span className="text-amber-700 font-bold">★</span>
                      )}
                      <span>{lang === "ca" ? rev.badgeCa : rev.badgeEs}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0" title="Reseña verificada en Google Maps">
                  <GoogleIcon className="w-5 h-5 opacity-80" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fila 2: Las otras 2 reseñas + Tarjeta de invitación a dejar reseña */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {reviewsData.slice(3, 5).map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-stone-300 p-6 sm:p-7 shadow-md flex flex-col justify-between relative hover:border-brand-blue/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-block bg-brand-light text-brand-blue border border-brand-blue/20 text-[11px] font-heading font-bold uppercase tracking-wider px-2.5 py-0.5">
                  {lang === "ca" ? rev.tagCa : rev.tagEs}
                </span>
                <span className="text-[11px] text-stone-400 font-medium">
                  {lang === "ca" ? rev.dateCa : rev.dateEs}
                </span>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(rev.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal italic mb-6 flex-grow">
                "{rev.text}"
              </p>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${rev.avatarBg} text-white font-heading font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-xs`}>
                    {rev.initials}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 text-sm leading-tight">
                      {rev.name}
                    </h3>
                    <div className="text-[11px] text-gray-500 font-medium">
                      {lang === "ca" ? rev.badgeCa : rev.badgeEs}
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0" title="Reseña verificada en Google Maps">
                  <GoogleIcon className="w-5 h-5 opacity-80" />
                </div>
              </div>
            </div>
          ))}

          {/* Tarjeta de invitación: Dejar una reseña en Google */}
          <div className="bg-brand-blue text-white p-6 sm:p-7 shadow-lg flex flex-col justify-between border-2 border-brand-accent">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GoogleIcon className="w-5 h-5 bg-white rounded-full p-0.5" />
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-brand-accent">
                  Google Reviews
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white mb-2 leading-snug">
                {t("reviews_leave_review_title")}
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal mb-6">
                {t("reviews_leave_review_desc")}
              </p>
            </div>

            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-slate-950 font-heading font-bold text-xs uppercase tracking-wider py-3 px-5 transition duration-300 text-center shadow-md"
            >
              <StarIcon className="w-4 h-4 text-slate-950 fill-slate-950" />
              <span>{t("reviews_leave_review_btn")}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
