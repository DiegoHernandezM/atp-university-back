import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Sección de bienvenida */}
      <section className="hero-section bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvenido a Nuestra Aplicación</h1>
          <p className="text-xl mb-6">Una solución moderna para todas tus necesidades.</p>
          <a href="#features" className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold">Descubre Más</a>
        </div>
      </section>

      {/* Sección de características */}
      <section id="features" className="features-section py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Características</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Característica 1</h3>
                <p className="text-gray-600">Descripción de la característica 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Característica 2</h3>
                <p className="text-gray-600">Descripción de la característica 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Característica 3</h3>
                <p className="text-gray-600">Descripción de la característica 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de testimonios */}
      <section className="testimonials-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Testimonios</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic">"Esta aplicación ha cambiado mi vida para mejor. Altamente recomendable!"</p>
                <h4 className="text-xl font-semibold mt-4">- Usuario 1</h4>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic">"Una experiencia increíble, con un servicio al cliente inigualable."</p>
                <h4 className="text-xl font-semibold mt-4">- Usuario 2</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="cta-section bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar?</h2>
          <a href="/register" className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold">Regístrate Ahora</a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
