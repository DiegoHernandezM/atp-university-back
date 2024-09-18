import React from "react";
import { Carousel, Typography } from '@material-tailwind/react';

export default function Simulators({ landingData }) {
  return (
    <section id="simulators" className="py-20 relative bg-gray-100 overflow-hidden">

      {/* Título centrado */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">SIMULADORES</h2>

        {/* Contenedor de simuladores con bordes redondeados */}
        <div className="max-w-4xl mx-auto bg-gray-100 rounded-xl p-8 relative shadow-lg">

          {/* Carousel de simuladores */}
          {landingData.section5_simulators && JSON.parse(landingData.section5_simulators).length > 0 ? (
            <Carousel loop={true} className="rounded-xl">
              {JSON.parse(landingData?.section5_simulators).map((simulator, index) => {
                if (simulator.file) {
                  const extension = simulator.file.split('.').pop().toLowerCase();
                  return (
                    <figure className="relative h-96 w-full">
                      {['mp4', 'webm', 'ogg', 'mov'].includes(extension) ? (
                        <video className="w-full h-full rounded-lg object-cover" autoPlay loop>
                          <source src={`/storage/images/${simulator.file}`} type="video/mp4" />
                          Tu navegador no soporta el elemento de video.
                        </video>
                      ) : (
                        <img src={`/storage/images/${simulator.file}`} alt={simulator.title} key={`file-${index}`} className="h-full w-full rounded-lg object-cover" />
                      )}
                      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <div>
                          <Typography variant="h5" color="blue-gray">
                            {simulator.title}
                          </Typography>
                          <Typography color="gray" className="mt-2 font-normal">
                            {simulator.description}
                          </Typography>
                        </div>
                      </figcaption>
                    </figure>
                  );
                } else {
                  return null;
                }
              })}
            </Carousel>
          ) : null}
        </div>

        {/* Patrones de líneas o circuitos en la parte inferior */}
        <div className="absolute bottom-0 left-0 w-full h-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            className="w-full h-full"
          >
            {/* Patrón de líneas horizontales que cubren todo el ancho */}
            <circle cx="10" cy="30" r="5" stroke="#FFD700" strokeWidth="2" fill="none" />
            <line x1="15" y1="30" x2="350" y2="30" stroke="#FFD700" strokeWidth="2" />
            <line x1="350" y1="30" x2="400" y2="60" stroke="#FFD700" strokeWidth="2" />
            <line x1="400" y1="60" x2="1440" y2="60" stroke="#FFD700" strokeWidth="2" />
            <circle cx="1440" cy="60" r="5" stroke="#FFD700" strokeWidth="2" fill="none" />

            {/* Segunda línea */}
            <circle cx="10" cy="50" r="5" stroke="#FFD700" strokeWidth="2" fill="none" />
            <line x1="15" y1="50" x2="1440" y2="50" stroke="#FFD700" strokeWidth="2" />
            <circle cx="1440" cy="50" r="5" stroke="#FFD700" strokeWidth="2" fill="none" />

            {/* Tercera línea */}
            <circle cx="10" cy="70" r="5" stroke="#FFD700" strokeWidth="2" fill="none" />
            <line x1="15" y1="70" x2="350" y2="70" stroke="#FFD700" strokeWidth="2" />
            <line x1="350" y1="70" x2="400" y2="100" stroke="#FFD700" strokeWidth="2" />
            <line x1="400" y1="100" x2="1440" y2="100" stroke="#FFD700" strokeWidth="2" />
            <circle cx="1440" cy="100" r="5" stroke="#FFD700" strokeWidth="2" fill="none" />
          </svg>
        </div>

      </div>
    </section>
  );
}
