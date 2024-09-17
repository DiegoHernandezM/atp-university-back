import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section py-20 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Quieres más información de nuestros servicios?</h2>
          <p className="text-xl mb-6">Contáctanos completando el formulario y te responderemos pronto.</p>

          <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-gray-700">
            <div className="mb-6">
              <img src={`/storage/images/logo.png`} alt="Logo" className="mx-auto h-20 w-25" /> {/* Ajusta el tamaño del logo según sea necesario */}
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-left mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left mb-2">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu correo electrónico"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-left mb-2">Mensaje</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Tu mensaje">
              </textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Enviar</button>
          </form>
        </div>
      </section>
  );
}
