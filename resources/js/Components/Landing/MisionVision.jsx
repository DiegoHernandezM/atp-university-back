import React from "react";
import { Carousel, Typography } from '@material-tailwind/react';

export default function MisionVision({ landingData }) {
  return (
    <section id="mission-vision" className="statistics-section py-10 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <Carousel autoplay={true} loop={true} className="rounded-xl relative">
          {/* Slide 0 - Nosotros */}
          <div className="relative h-full w-full flex items-center flex-col-reverse md:flex-row">
            <div className="hidden md:block w-1/2 h-full relative">
              <img
                src={`/storage/images/atp-vision.jpg`}
                alt="image"
                className="h-full w-full object-cover rounded-xl"
              />
              {/* Overlay para aplicar el efecto blur */}
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/50 to-white/70 backdrop-blur-sm"
              />
            </div>

            {/* Texto centrado en dispositivos pequeños */}
            <div className="w-full md:w-2/3 lg:w-3/4 p-8 md:p-12 lg:p-16 text-center md:text-left bg-transparent relative z-20 md:-ml-13 lg:-ml-28">
              <div className="md:hidden w-full bg-white opacity-50 absolute inset-0 h-full rounded-lg"></div> {/* Fondo blanco semitransparente */}
              <Typography
                variant="h1"
                color="black"
                className="opacity-80 sm:text-4xl lg:text-5xl xl:text-6xl relative z-10"
              >
                Nosotros
              </Typography>
              <Typography
                variant="lead"
                color="black"
                className="opacity-80 sm:text-4xl lg:text-3xl xl:text-3xl relative z-10"
              >
                {landingData?.section3_vision ?? 'Ser la firma de contabilidad de confianza para todos nuestros clientes, brindando soluciones de alta calidad y accesibles.'}
              </Typography>
            </div>
          </div>

          {/* Repetimos el mismo patrón para Misión y Visión */}
          <div className="relative h-full w-full flex items-center flex-col-reverse md:flex-row">
            <div className="hidden md:block w-1/2 h-full relative ">
              <img
                src={`/storage/images/atp-vision.jpg`}
                alt="image 1"
                className="h-full w-full object-cover rounded-xl"
              />
              {/* Overlay con gradiente de desvanecimiento */}
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/50 to-white/70 backdrop-blur-sm"
              />
            </div>

            <div className="w-full md:w-2/3 lg:w-3/4 p-8 md:p-12 lg:p-16 text-center md:text-left bg-transparent relative z-20 md:-ml-13 lg:-ml-28">
              <div className="md:hidden w-full bg-white opacity-50 absolute inset-0 h-full rounded-lg"></div>
              <Typography
                variant="h1"
                color="black"
                className="opacity-80 sm:text-4xl lg:text-5xl xl:text-6xl relative z-10"
              >
                Misión
              </Typography>
              <Typography
                variant="lead"
                color="black"
                className="opacity-80 sm:text-4xl lg:text-3xl xl:text-3xl relative z-10"
              >
                {landingData?.section3_mission ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              </Typography>
            </div>
          </div>

          <div className="relative h-full w-full flex items-center flex-col-reverse md:flex-row">
            <div className="hidden md:block w-1/2 h-full relative ">
              {/* Imagen */}
              <img
                src={`/storage/images/atp-vision.jpg`}
                alt="image 2"
                className="h-full w-full object-cover rounded-xl"
                style={{ zIndex: 1 }}
              />
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/50 to-white/70 backdrop-blur-sm"
              />
            </div>
            <div className="w-full md:w-2/3 lg:w-3/4 p-8 md:p-12 lg:p-16 text-center md:text-left bg-transparent relative z-20 md:-ml-13 lg:-ml-28">
              <div className="md:hidden w-full bg-white opacity-50 absolute inset-0 h-full rounded-lg"></div>
              <Typography
                variant="h1"
                color="black"
                className="opacity-80 sm:text-4xl lg:text-5xl xl:text-6xl relative z-10"
              >
                Visión
              </Typography>
              <Typography
                variant="lead"
                color="black"
                className="opacity-80 sm:text-4xl lg:text-3xl xl:text-3xl relative z-10"
              >
                {landingData?.section3_vision ?? 'Ser la firma de contabilidad de confianza para todos nuestros clientes, brindando soluciones de alta calidad y accesibles.'}
              </Typography>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
