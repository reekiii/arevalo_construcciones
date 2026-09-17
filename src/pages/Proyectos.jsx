import React from 'react';

function Proyectos() {
  return (
    <div className="animate-fade-in py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-blue mb-4">Proyectos Destacados</h1>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto mb-6 rounded"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Cada obra es una muestra de nuestra dedicación. Echa un vistazo a algunos de nuestros trabajos más recientes donde la calidad y la atención al detalle hablan por sí solas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Proyecto 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group">
            <div className="relative overflow-hidden h-64">
              <img src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800" alt="Reforma Vivienda Interior" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-brand-blue opacity-0 group-hover:opacity-20 transition duration-300"></div>
            </div>
            <div className="p-8 border border-t-0 border-gray-100 rounded-b-xl">
              <span className="text-sm text-brand-accent font-bold tracking-wider uppercase mb-2 block">Residencial</span>
              <h3 className="text-2xl font-heading font-bold text-brand-blue mb-3">Reforma Integral Chalet</h3>
              <p className="text-gray-600 mb-4">Renovación completa de espacios interiores. Demolición de tabiques para concepto abierto, nueva instalación eléctrica y pavimentos porcelánicos.</p>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group">
            <div className="relative overflow-hidden h-64">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" alt="Construcción Obra Nueva" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-brand-blue opacity-0 group-hover:opacity-20 transition duration-300"></div>
            </div>
            <div className="p-8 border border-t-0 border-gray-100 rounded-b-xl">
              <span className="text-sm text-brand-accent font-bold tracking-wider uppercase mb-2 block">Obra Nueva</span>
              <h3 className="text-2xl font-heading font-bold text-brand-blue mb-3">Vivienda Unifamiliar</h3>
              <p className="text-gray-600 mb-4">Ejecución de vivienda unifamiliar de diseño moderno en hormigón visto. Destaca la alta eficiencia energética y los amplios ventanales.</p>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group">
            <div className="relative overflow-hidden h-64">
              <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800" alt="Rehabilitación" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-brand-blue opacity-0 group-hover:opacity-20 transition duration-300"></div>
            </div>
            <div className="p-8 border border-t-0 border-gray-100 rounded-b-xl">
              <span className="text-sm text-brand-accent font-bold tracking-wider uppercase mb-2 block">Rehabilitación</span>
              <h3 className="text-2xl font-heading font-bold text-brand-blue mb-3">Restauración de Fachada</h3>
              <p className="text-gray-600 mb-4">Tratamiento integral de patologías estructurales en edificio histórico. Reparación de cornisas, impermeabilización y nuevo revestimiento.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
