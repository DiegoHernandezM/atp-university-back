import React from "react";

export default function Testimonials({ landingData }) {
  return (
    <section id="testimonials" className="testimonials-carousel py-20 bg-gradient-to-b from-[#E0E0E0] to-[#8C8C8C]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Testimonios de Nuestros Estudiantes</h2>
        <div className="flex overflow-x-auto space-x-4">
          <div className="flex-none w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">"Excelente servicio y atención. ¡Lo recomiendo ampliamente!"</p>
              <h4 className="text-xl font-semibold mt-4">- Estudiante 1</h4>
            </div>
          </div>
          <div className="flex-none w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">"Los cursos que realmente han hecho la diferencia."</p>
              <h4 className="text-xl font-semibold mt-4">- Estudiante 2</h4>
            </div>
          </div>
          <div className="flex-none w-full md:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">"Una experiencia increíble, ¡sin duda me volveré piloto!"</p>
              <h4 className="text-xl font-semibold mt-4">- Estudiante 3</h4>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
