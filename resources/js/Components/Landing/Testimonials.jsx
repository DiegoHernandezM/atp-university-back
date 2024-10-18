import React from "react";

export default function Testimonials({ landingData, isPrev }) {
  return (
    <section id="testimonials" className="testimonials-carousel py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">TESTIMONIOS</h2>

        {/* Condicional basado en isPrev */}
        {isPrev
          ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {landingData.map((testimonial, index) => (
                <div key={`testimonial-prev-${index}`} className="flex items-center space-x-4">
                  {/* Avatar circular */}
                  <div className="w-24 h-24">
                    <img
                      src={testimonial?.image?.url ?? 'https://via.placeholder.com/128'} // Asegúrate de que el campo 'avatar' contenga la URL de la imagen
                      alt={`Avatar de ${testimonial.name}`}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  {/* Texto del testimonio a la derecha */}
                  <div className="text-left">
                    <p className="italic text-gray-600">"{testimonial.description ?? 'Sin dato'}"</p>
                    <h4 className="font-bold mt-2">- {testimonial.name ?? 'Sin dato'}</h4>
                  </div>
                </div>
              ))}
            </div>
          )
          : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {landingData.section6_testimonials ? JSON.parse(landingData.section6_testimonials).map((testimonial, index) => (
                <div key={`testimonial-${index}`} className="flex items-center space-x-4">
                  {/* Avatar circular */}
                  <div className="w-24 h-24">
                    <img
                      src={`/storage/images/${testimonial?.image?.url}`} // Asegúrate de que el campo 'avatar' contenga la URL de la imagen
                      alt={`Avatar ${testimonial.name ?? 'Sin dato'}`}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  {/* Texto del testimonio a la derecha */}
                  <div className="text-left">
                    <p className="italic text-gray-600">"{testimonial.description ?? 'Sin Dato'}"</p>
                    <h4 className="font-bold mt-2">- {testimonial.name ?? 'Sin Dato'}</h4>
                  </div>
                </div>
              )) : (
                // Ejemplo de testimonios si no hay datos
                <>
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24">
                      <img
                        src="https://via.placeholder.com/128"
                        alt="Avatar Placeholder"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="italic text-gray-600">"Excelente servicio y atención. ¡Lo recomiendo!"</p>
                      <h4 className="font-bold mt-2">- Estudiante 1</h4>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24">
                      <img
                        src="https://via.placeholder.com/128"
                        alt="Avatar Placeholder"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="italic text-gray-600">"Los cursos realmente hicieron la diferencia."</p>
                      <h4 className="font-bold mt-2">- Estudiante 2</h4>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24">
                      <img
                        src="https://via.placeholder.com/128"
                        alt="Avatar Placeholder"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="italic text-gray-600">"Una experiencia increíble, ¡sin duda seré piloto!"</p>
                      <h4 className="font-bold mt-2">- Estudiante 3</h4>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
      </div>
    </section>
  );
}
