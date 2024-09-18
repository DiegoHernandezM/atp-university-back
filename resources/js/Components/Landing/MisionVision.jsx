import React from "react";
import { motion } from "framer-motion";
import { Carousel, IconButton, Typography } from '@material-tailwind/react';

export default function MisionVision({ landingData }) {
  return (
    <section id="mission-vision" className="mission-vision-section py-20 relative bg-gray-100">
      {/* Líneas amarillas que comienzan del lado superior izquierdo */}
      <div className="absolute inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Líneas ajustadas para comenzar desde la esquina superior izquierda */}
          <path fill="none" stroke="#FFD700" strokeWidth="2" d="M0 0C200 100 400 200 600 250C800 300 1000 320 1200 300C1400 280 1500 180 1440 120L1440 320Z" />
          <path fill="none" stroke="#FFD700" strokeWidth="2" d="M0 50C200 150 400 250 600 300C800 350 1000 370 1200 350C1400 330 1500 230 1440 170L1440 320Z" />
          <path fill="none" stroke="#FFD700" strokeWidth="2" d="M0 100C200 200 400 300 600 350C800 400 1000 420 1200 400C1400 380 1500 280 1440 220L1440 320Z" />
          <path fill="none" stroke="#FFD700" strokeWidth="2" d="M0 150C200 250 400 350 600 400C800 450 1000 470 1200 450C1400 430 1500 330 1440 270L1440 320Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative w-full max-w-full mx-auto overflow-hidden">

          <Carousel loop={true} className="rounded-xl">
            {/* Slide 1 - Nuestra Misión */}
            <div className="relative h-full w-full flex flex-col md:flex-row items-center">
              {/* Imagen a la izquierda */}
              <div className="md:w-1/2">
                <img
                  src={`/storage/images/atp-vision.jpg`}
                  alt="image 1"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Texto a la derecha */}
              <div className="md:w-1/2 md:text-right p-8 md:p-16">
                <Typography
                  variant="h1"
                  color="black"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                >
                  Misión
                </Typography>
                <Typography
                  variant="lead"
                  color="black"
                  className="opacity-80 leading-relaxed text-lg"
                >
                  {landingData?.section3_mission ?? 'Fundada en 1992, Contabilidad Surcos es una firma de servicio completo que ofrece soluciones de contabilidad asequibles para particulares y empresas locales e internacionales.'}
                </Typography>
              </div>
            </div>

            {/* Slide 2 - Nuestra Visión */}
            <div className="relative h-full w-full flex flex-col md:flex-row items-center">
              {/* Imagen a la izquierda */}
              <div className="md:w-1/2">
                <img
                  src={`/storage/images/atp-vision.jpg`}
                  alt="image 2"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Texto a la derecha */}
              <div className="md:w-1/2 md:text-right p-8 md:p-16">
                <Typography
                  variant="h1"
                  color="black"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                >
                  Visión
                </Typography>
                <Typography
                  variant="lead"
                  color="black"
                  className="opacity-80 leading-relaxed text-lg"
                >
                  {landingData?.section3_vision ?? 'Ser la firma de contabilidad de confianza para todos nuestros clientes, brindando soluciones de alta calidad y accesibles.'}
                </Typography>
              </div>
            </div>

          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
