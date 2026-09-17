import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="animate-fade-in">
      {/* ===== HERO ===== */}
      <section className="relative bg-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Obra en construcción"
            className="w-full h-full object-cover opacity-60"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070";
            }}
          />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-brand-blue/70 sm:bg-transparent sm:bg-gradient-to-r sm:from-brand-blue/90 sm:via-brand-blue/60 sm:to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col items-start text-left z-10">
          <span className="text-brand-accent font-heading font-bold tracking-wider mb-4 uppercase text-sm md:text-base border-l-4 border-brand-accent pl-3">
            Excelencia en Construcción
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold tracking-tight mb-6 max-w-3xl leading-tight text-white drop-shadow-md">
            Materializamos tus grandes ideas.
          </h1>
          <p className="mt-4 text-xl md:text-2xl max-w-2xl text-brand-light mb-10 font-light drop-shadow">
            Desde pequeñas reformas hasta grandes obras de nueva construcción.
            En Arévalo Construcciones ofrecemos un servicio integral,
            transparente y de máxima calidad adaptado a tus necesidades y
            presupuesto.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contacto"
              className="bg-brand-accent hover:bg-yellow-500 text-brand-blue-dark font-heading font-bold py-4 px-10 rounded shadow-lg transition duration-300 transform hover:-translate-y-1 text-center"
            >
              Pedir Presupuesto Gratis
            </Link>
            <Link
              to="/servicios"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-blue text-white font-heading font-bold py-4 px-10 rounded transition duration-300 text-center"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-brand-blue-dark py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-heading font-bold text-brand-accent mb-2">
                +2
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-300">
                Años de Experiencia
              </div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-brand-accent mb-2">
                100%
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-300">
                Clientes Satisfechos
              </div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-brand-accent mb-2">
                Llave en mano
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-300">
                Proyectos Integrales
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTAL "QUIÉNES SOMOS" ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texto y Llamadas a la acción */}
            <div>
              <span className="text-brand-accent font-heading font-bold tracking-wider uppercase mb-2 block">
                Quiénes Somos
              </span>
              <h2 className="text-4xl font-heading font-extrabold text-brand-blue mb-6">
                Tu proyecto, en las mejores manos.
              </h2>
              <div className="w-20 h-1.5 bg-brand-accent mb-8 rounded"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Con más de 15 años de trayectoria en el sector, en{" "}
                <span className="font-bold text-brand-blue">
                  Arévalo Construcciones
                </span>{" "}
                nos hemos consolidado como un referente de seriedad y calidad.
                Entendemos que una obra no es solo un montón de ladrillos, sino
                la ilusión de nuestros clientes tomando forma.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Nos encargamos de absolutamente todo, coordinando oficios y
                gestionando plazos para que tú no tengas que preocuparte por
                nada. Trabajamos en reformas integrales, rehabilitación y
                proyectos de obra nueva desde cero.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to="/nosotros"
                  className="flex items-center justify-center border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-heading font-bold py-3 px-6 rounded transition duration-300"
                >
                  Leer más sobre nosotros
                </Link>
                <Link
                  to="/proyectos"
                  className="flex items-center justify-center bg-brand-light text-brand-blue hover:bg-gray-200 font-heading font-bold py-3 px-6 rounded transition duration-300"
                >
                  Ver proyectos realizados
                </Link>
              </div>
            </div>

            {/* Cuadrícula de fotos */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600"
                alt="Construcción"
                className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
              />
              <img
                src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=600"
                alt="Reforma interior"
                className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-105 transition duration-500 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== LLAMADA A LA ACCIÓN RAPIDA ===== */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            ¿Preparado para empezar tu reforma?
          </h2>
          <p className="text-brand-light mb-8 text-lg">
            Pide tu presupuesto gratuito hoy mismo. Estudiamos tu caso y te
            asesoramos sin ningún compromiso.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-brand-accent hover:bg-yellow-500 text-brand-blue-dark font-heading font-bold py-4 px-12 rounded shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            Contactar ahora
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
