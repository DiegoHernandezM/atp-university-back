import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Sección de video con descripción */}
      <section className="video-section bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <video className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" controls>
              <source src="ruta-al-video.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
          <p className="text-xl">Mira este video para conocer más sobre nuestra aplicación y cómo puede ayudarte a mejorar tus procesos.</p>
        </div>
      </section>

      {/* Sección de estadísticas numéricas */}
      <section className="statistics-section py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Nuestras Estadísticas</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-5xl font-bold text-blue-500 mb-4">100K+</h3>
                <p className="text-gray-600">Usuarios Satisfechos</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-5xl font-bold text-blue-500 mb-4">1M+</h3>
                <p className="text-gray-600">Descargas</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-5xl font-bold text-blue-500 mb-4">4.9/5</h3>
                <p className="text-gray-600">Calificación Promedio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de misión y visión */}
      <section className="mission-vision-section py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Misión y Visión</h2>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Nuestra Misión</h3>
                <p className="text-gray-600">Proporcionar soluciones innovadoras y eficaces para mejorar la calidad de vida de nuestros usuarios y fomentar un mundo más conectado.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Nuestra Visión</h3>
                <p className="text-gray-600">Ser líderes en el mercado global como una empresa que ofrece productos tecnológicos de alta calidad y compromiso social.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de servicios */}
      <section className="services-section py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Nuestros Servicios</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Servicio 1</h3>
                <p className="text-gray-600">Descripción del servicio 1. Ofrecemos soluciones personalizadas y eficientes.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Servicio 2</h3>
                <p className="text-gray-600">Descripción del servicio 2. Nuestra tecnología innovadora facilita el trabajo diario.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Servicio 3</h3>
                <p className="text-gray-600">Descripción del servicio 3. Garantizamos calidad y satisfacción en cada proyecto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
