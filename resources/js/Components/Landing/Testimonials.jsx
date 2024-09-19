import React from "react";

export default function Testimonials({ landingData }) {
  return (
    <section id="testimonials" className="testimonials-carousel py-20 bg-gradient-to-b from-[#EEEEEE] to-[#8C8C8C]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">TESTIMONIOS</h2>

        {/* Contenedor con scroll horizontal en móviles */}
        <div className="flex space-x-8 overflow-x-auto">
          {landingData.section2_testimonials ? JSON.parse(landingData.section2_testimonials).map((testimonial, index) => (
            <div key={`testimonial-${index}`} className="flex-none flex items-center space-x-1 my-4 w-full md:w-auto">
              {/* Avatar circular */}
              <div className="flex-shrink-0">
                <img
                  src={`/storage/images/${testimonial.avatar}`} // Asegúrate de que el campo 'avatar' contenga la URL de la imagen
                  alt={`Avatar de ${testimonial.name}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>

              {/* Rectángulo con texto */}
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <div>
                  <p className="text-gray-600 italic">{testimonial.text}</p>
                  <h4 className="text-xl font-semibold mt-2">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          )) : (
            // Ejemplo de testimonios si no hay datos
            <>
              <div className="flex-none flex items-center space-x-1 my-4 w-full md:w-auto">
                <div className="flex-shrink-0">
                  <img
                    src="https://via.placeholder.com/64"
                    alt="Avatar Placeholder"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <div>
                    <p className="text-gray-600 italic">"Excelente servicio y atención. ¡Lo recomiendo!"</p>
                    <h4 className="text-xl font-semibold mt-2">- Estudiante 1</h4>
                  </div>
                </div>
              </div>

              <div className="flex-none flex items-center space-x-1 my-4 w-full md:w-auto">
                <div className="flex-shrink-0">
                  <img
                    src="https://via.placeholder.com/64"
                    alt="Avatar Placeholder"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <div>
                    <p className="text-gray-600 italic">"Los cursos realmente hicieron la diferencia."</p>
                    <h4 className="text-xl font-semibold mt-2">- Estudiante 2</h4>
                  </div>
                </div>
              </div>

              <div className="flex-none flex items-center space-x-1 my-4 w-full md:w-auto">
                <div className="flex-shrink-0">
                  <img
                    src="https://via.placeholder.com/64"
                    alt="Avatar Placeholder"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <div>
                    <p className="text-gray-600 italic">"Una experiencia increíble, ¡sin duda seré piloto!"</p>
                    <h4 className="text-xl font-semibold mt-2">- Estudiante 3</h4>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
