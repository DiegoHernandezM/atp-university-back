import React from "react";
import { motion } from "framer-motion";

export default function Services({ landingData, containerVariants }) {
  const serviceVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="services" className="services-section py-20 relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-12">NUESTROS SERVICIOS</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 2.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center"
        >
          {landingData.section4_services ? JSON.parse(landingData.section4_services).map((service, index) => (
            <motion.div
              variants={serviceVariants}
              key={`service-div-${index}`}
              className="w-full flex justify-center items-center"
            >
              {/* Contenedor de imagen circular */}
              <div className="flex flex-col items-center">
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                  <div className="w-32 h-32 rounded-full bg-gray-400 mb-4 flex justify-center items-center">
                    <img
                      src={`/storage/images/${service.image}`}
                      alt={service.title}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </a>
                {/* Texto debajo de la imagen */}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            </motion.div>
          )) : null}
        </motion.div>
      </div>
    </section>
  );
}
