import React from 'react';

function Nosotros() {
  return (
    <div className="animate-fade-in py-20 bg-brand-blue text-white min-h-screen relative overflow-hidden flex flex-col justify-center">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">Nuestra Historia y Valores</h1>
        <div className="w-24 h-1.5 bg-brand-accent mx-auto mb-10 rounded"></div>
        <p className="text-lg md:text-2xl leading-relaxed text-brand-light font-light mb-8">
          En <span className="font-bold text-brand-accent">Arévalo Construcciones</span> somos mucho más que una empresa de reformas; somos un equipo apasionado por el arte de construir. 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-12">
          <div>
            <h4 className="text-xl font-heading font-bold text-brand-accent mb-3">Compromiso y Transparencia</h4>
            <p className="text-brand-light leading-relaxed">
              Nos enorgullece nuestra seriedad. Presentamos presupuestos claros, sin sorpresas ni costes ocultos. Mantenemos una comunicación constante durante cada fase del proyecto, para que estés informado en todo momento sobre los avances de tu obra.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-heading font-bold text-brand-accent mb-3">Calidad Garantizada</h4>
            <p className="text-brand-light leading-relaxed">
              Nuestra experiencia en el sector nos permite seleccionar los mejores materiales y rodearnos de los mejores oficios. Cada detalle cuenta, y por eso sometemos todas nuestras obras a rigurosos controles de calidad. Tu tranquilidad es nuestro principal objetivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
