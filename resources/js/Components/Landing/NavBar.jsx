import React, { useState } from "react";

export default function NavBar({ title, fixed }) {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar el menú hamburguesa

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-white shadow-md ${fixed ? 'fixed' : ''} w-full z-50`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo y Título */}
        <div className="flex items-center space-x-4">
          <img src={`/storage/images/logo.png`} alt="Logo" className="h-10 w-15" />
          <div className="text-2xl font-bold text-blue-500">
            {title}
          </div>
        </div>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex space-x-8">
          <a href="#video" className="text-gray-700 hover:text-blue-500">Inicio</a>
          <a href="#statistics" className="text-gray-700 hover:text-blue-500">Estadísticas</a>
          <a href="#mission-vision" className="text-gray-700 hover:text-blue-500">Nosotros</a>
          <a href="#services" className="text-gray-700 hover:text-blue-500">Servicios</a>
          <a href="#gallery" className="text-gray-700 hover:text-blue-500">Simuladores</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-500">Testimonios</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Contacto</a>
        </div>

        {/* Botón menú hamburguesa para pantallas pequeñas */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {/* Icono de menú hamburguesa */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-4/5 max-w-md p-6 bg-white rounded-l-lg z-40"> {/* Posiciona en la parte superior derecha */}

          {/* Botón de cierre en la esquina superior derecha */}
          <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Opciones del menú */}
          <div className="flex flex-col justify-center items-center space-y-8 text-lg font-medium">
            <a href="#video" className="text-gray-700 hover:text-blue-500">Inicio</a>
            <a href="#statistics" className="text-gray-700 hover:text-blue-500">Estadísticas</a>
            <a href="#mission-vision" className="text-gray-700 hover:text-blue-500">Nosotros</a>
            <a href="#services" className="text-gray-700 hover:text-blue-500">Servicios</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-500">Simuladores</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-500">Testimonios</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">Contacto</a>
          </div>

          {/* Botones adicionales */}
          <div className="flex flex-col items-center space-y-4 mt-8">
            <a href="/login" className="w-48 py-2 bg-blue-500 text-white rounded-full text-center">
              Inicia sesión
            </a>
            <a href="/register" className="w-48 py-2 bg-yellow-500 text-black rounded-full text-center">
              Regístrate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};