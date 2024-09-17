import React from "react";
import { motion } from "framer-motion";
import { Carousel, IconButton, Typography } from '@material-tailwind/react';

export default function MisionVision({ landingData }) {
  return (
    <section id="mission-vision" className="mission-vision-section py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative w-full max-w-full mx-auto overflow-hidden">

          <Carousel loop={true} className="rounded-xl" prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-1 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-1 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}>

            {/* Slide 1 - Nuestra Misión */}
            <div className="relative h-full w-full">
              <img
                src={`/storage/images/atp-vision.jpg`}
                alt="image 2"
                className="h-300 w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                <div className="flex flex-col md:flex-row justify-between w-full px-12 md:px-32 space-y-8 md:space-y-0 md:space-x-16">

                  {/* Título a la derecha, con más grande */}
                  <div className="md:text-right">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold"
                    >
                      Nuestra Misión
                    </Typography>
                  </div>

                  {/* Contenido a la izquierda */}
                  <div className="text-left">
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80 leading-relaxed"
                    >
                      {landingData?.section3_mission ?? '-'}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 - Nuestra Visión */}
            <div className="relative h-full w-full">
              <img
                src={`/storage/images/atp-vision.jpg`}
                alt="image 2"
                className="h-300 w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                <div className="flex flex-col md:flex-row justify-between w-full px-12 md:px-32 space-y-8 md:space-y-0 md:space-x-16"> {/* Añadido espacio entre los elementos */}

                  {/* Título a la derecha */}
                  <div className="md:text-right">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold"
                    >
                      Nuestra Visión
                    </Typography>
                  </div>

                  {/* Contenido a la izquierda */}
                  <div className="text-left">
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80 leading-relaxed"
                    >
                      {landingData?.section3_vision ?? '-'}
                    </Typography>
                  </div>
                </div>
              </div>

            </div>

          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
