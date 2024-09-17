import React from "react";
import { motion } from "framer-motion";

export default function Services({ landingData, containerVariants }) {
  const serviceVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="services" className="services-section py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Servicios ofrecidos</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 2.5 }}
          className="flex flex-wrap -mx-4 justify-center">

          {landingData.section4_services ? JSON.parse(landingData.section4_services).map((service, index) => (
            <motion.div
              variants={serviceVariants}
              key={`service-div-${index}`}
              className="w-full md:w-1/3 px-4 mb-8">

              {/* Contenedor sin fondo, solo imagen y texto */}
              <div className="flex flex-col items-center">

                {/* Circular image */}
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`/storage/images/${service.image}`}
                    alt="avatar"
                    className="w-24 h-24 rounded-full object-cover mb-4"  // Imagen circular
                  />
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
