import React from "react";
import { motion } from "framer-motion";
import { Carousel, IconButton, Typography } from '@material-tailwind/react';

export default function MisionVision({ landingData }) {
  return (
    <section id="mission-vision" className="statistics-section py-20 bg-transparent relative overflow-hidden">

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
