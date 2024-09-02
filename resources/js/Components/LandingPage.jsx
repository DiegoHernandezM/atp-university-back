import { Carousel } from '@material-tailwind/react';
import React, { useState } from 'react';


const NavBar = () => {
    return (
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-500">
            Mi Aplicación
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#video" className="text-gray-700 hover:text-blue-500">Inicio</a>
            <a href="#statistics" className="text-gray-700 hover:text-blue-500">Estadísticas</a>
            <a href="#mission-vision" className="text-gray-700 hover:text-blue-500">Misión y Visión</a>
            <a href="#services" className="text-gray-700 hover:text-blue-500">Servicios</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-500">Galería</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-500">Opiniones</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">Contacto</a>
          </div>
        </div>
      </nav>
    );
  };

const LandingPage = () => {

    const images = [
      { src: 'images/img1.jpg', text: 'Texto para la imagen 1' },
      { src: 'images/img2.jpg', text: 'Texto para la imagen 2' },
      { src: 'images/img3.jpg', text: 'Texto para la imagen 3' },
    ];

  return (
    <div className="landing-page">
      {/* Sección de video con descripción */}
      <NavBar />
      <section id="video" className="video-section bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
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
      <section id="statistics" className="statistics-section py-20 bg-gray-100">
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
      <section id="mission-vision" className="mission-vision-section py-20">
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
      <section id="services" className="services-section py-20 bg-gray-100">
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
      {/* Sección de slider de imágenes */}
      <section id="gallery" className="slider-section py-20 bg-gray-100">

        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Galería de Imágenes</h2>
          <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
          <Carousel loop={true} autoplay={true} className="rounded-xl">
            {images.map((image, index) => (
            <img src={image.src} alt={`Slide ${index}`} className="h-full w-full object-cover" />
        ))}
        </Carousel>

          </div>
        </div>
      </section>


      {/* Sección de opiniones de clientes */}
      <section id="testimonials" className="testimonials-carousel py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Opiniones de Nuestros Clientes</h2>
          <div className="flex overflow-x-auto space-x-4">
            <div className="flex-none w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic">"Excelente servicio y atención al cliente. ¡Lo recomiendo!"</p>
                <h4 className="text-xl font-semibold mt-4">- Cliente 1</h4>
              </div>
            </div>
            <div className="flex-none w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic">"Un producto que realmente ha hecho la diferencia en nuestro negocio."</p>
                <h4 className="text-xl font-semibold mt-4">- Cliente 2</h4>
              </div>
            </div>
            <div className="flex-none w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic">"Una experiencia increíble, ¡sin duda volveré a trabajar con ellos!"</p>
                <h4 className="text-xl font-semibold mt-4">- Cliente 3</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de contacto */}
      <section id="contact" className="contact-section py-20 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Quieres más información de nuestros servicios?</h2>
          <p className="text-xl mb-6">Contáctanos completando el formulario y te responderemos pronto.</p>
          <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-gray-700">
            <div className="mb-4">
              <label htmlFor="name" className="block text-left mb-2">Nombre</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu nombre" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left mb-2">Correo Electrónico</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu correo electrónico" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-left mb-2">Mensaje</label>
              <textarea id="message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Tu mensaje"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Enviar</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
