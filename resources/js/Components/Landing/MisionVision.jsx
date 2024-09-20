import React from "react";
import { Carousel, Typography, IconButton } from '@material-tailwind/react';

export default function MisionVision({ landingData }) {
  return (
    <section id="mission-vision" className="statistics-section py-10 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <Carousel
          autoplay={true}
          loop={true}
          className="rounded-xl relative"
        >
          {/* Slide 0 - Nosotros */}
          <div className="relative h-full w-full flex items-center flex-col-reverse md:flex-row">
            {/* Imagen (se oculta en dispositivos pequeños) */}
            <div className="hidden md:block w-1/2 h-full">
              <img
                src={`/storage/images/atp-vision.jpg`}
                alt="image 2"
                className="h-full w-full object-cover rounded-l-lg"
              />
            </div>

            {/* Texto centrado en dispositivos pequeños */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 text-center md:text-left bg-transparent relative z-10">
              <div className="relative">
                <div className="md:hidden w-full bg-white opacity-50 absolute inset-0 h-full"></div> {/* Fondo blanco semitransparente */}
                <Typography
                  variant="h1"
                  color="black"
                  className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 relative z-10"
                >
                  Nosotros
                </Typography>
                <Typography
                  variant="lead"
                  color="black"
                  className="opacity-80 leading-relaxed text-sm md:text-lg relative z-10"
                >
                  {landingData?.section3_vision ?? 'Ser la firma de contabilidad de confianza para todos nuestros clientes, brindando soluciones de alta calidad y accesibles.'}
                </Typography>
              </div>
            </div>
          </div>
          {/* Slide 1 - Misión */}
          <div className="relative h-full w-full flex items-center flex-col-reverse md:flex-row">
            {/* Imagen (se oculta en dispositivos pequeños) */}
            <div className="hidden md:block w-1/2 h-full">
              <img
                src={`/storage/images/atp-vision.jpg`}
                alt="image 1"
                className="h-full w-full object-cover rounded-l-lg"
              />
            </div>

            {/* Texto centrado en dispositivos pequeños */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 text-center md:text-left bg-transparent relative z-10">
              <div className="relative">
                <div className="md:hidden w-full bg-white opacity-50 absolute inset-0 h-full"></div> {/* Fondo blanco semitransparente */}
                <Typography
                  variant="h1"
                  color="black"
                  className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 relative z-10"
                >
                  Misión
                </Typography>
                <Typography
                  variant="lead"
                  color="black"
                  className="opacity-80 leading-relaxed text-sm md:text-lg relative z-10"
                >
                  {landingData?.section3_mission ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                </Typography>
              </div>
            </div>
          </div>
          {/* Slide 2 - Visión */}
          <div className="relative h-full w-full flex items-center flex-col-reverse md:flex-row">
            {/* Imagen (se oculta en dispositivos pequeños) */}
            <div className="hidden md:block w-1/2 h-full">
              <img
                src={`/storage/images/atp-vision.jpg`}
                alt="image 2"
                className="h-full w-full object-cover rounded-l-lg"
              />
            </div>

            {/* Texto centrado en dispositivos pequeños */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 text-center md:text-left bg-transparent relative z-10">
              <div className="relative">
                <div className="md:hidden w-full bg-white opacity-50 absolute inset-0 h-full"></div> {/* Fondo blanco semitransparente */}
                <Typography
                  variant="h1"
                  color="black"
                  className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 relative z-10"
                >
                  Visión
                </Typography>
                <Typography
                  variant="lead"
                  color="black"
                  className="opacity-80 leading-relaxed text-sm md:text-lg relative z-10"
                >
                  {landingData?.section3_vision ?? 'Ser la firma de contabilidad de confianza para todos nuestros clientes, brindando soluciones de alta calidad y accesibles.'}
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>

        {/* Botones de navegación personalizados */}
        <IconButton
          variant="text"
          color="white"
          size="lg"
          className="!absolute top-2/4 left-4 z-20 -translate-y-2/4"
          onClick={() => document.querySelector('.carousel').prev()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </IconButton>

        <IconButton
          variant="text"
          color="white"
          size="lg"
          className="!absolute top-2/4 right-4 z-20 -translate-y-2/4"
          onClick={() => document.querySelector('.carousel').next()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </IconButton>
      </div>
    </section>
  );
}
