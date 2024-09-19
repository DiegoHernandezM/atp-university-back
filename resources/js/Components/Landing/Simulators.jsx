import React from "react";
import { Carousel, Typography } from '@material-tailwind/react';

export default function Simulators({ landingData }) {
  return (
    <section id="simulators" className="py-0 relative overflow-hidden bg-transparent">

      {/* Título centrado */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">SIMULADORES</h2>
        {/* Contenedor de simuladores con bordes redondeados */}

        {/* Carousel de simuladores */}
        {landingData.section5_simulators && JSON.parse(landingData.section5_simulators).length > 0 ? (
          <Carousel loop={true} className="rounded-xl">
            {JSON.parse(landingData?.section5_simulators).map((simulator, index) => {
              if (simulator.file) {
                const extension = simulator.file.split('.').pop().toLowerCase();
                return (
                  <div className="relative h-96 w-full">
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
                  </div>
                );
              } else {
                return null;
              }
            })}
          </Carousel>
        ) : null}
      </div>
    </section>
  );
}
