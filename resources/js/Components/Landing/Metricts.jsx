import React from "react";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

export default function Metricts({ landingData, containerVariants, countVariants }) {
  return (
    <section id="statistics" className="statistics-section py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Nuestras Estadísticas</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.5 }}
          className="flex justify-center gap-4 overflow-x-auto">
          {landingData.section2_counts ? JSON.parse(landingData.section2_counts).map((count, index) => (
            <motion.div
              variants={countVariants}
              key={`count-div-${index}`}
              className="min-w-[250px] flex-shrink-0 px-4 relative">

              {/* Si hay imagen, la muestra, de lo contrario muestra la card con el contenido */}
              {count.image ? (
                <img
                  src={`/storage/images/${count.image}`}
                  alt=""
                  className="h-full w-full object-cover"
                  width={'100%'}
                  height={'100%'}
                  onError={(e) => { e.target.style.display = 'none'; }} // En caso de error al cargar imagen
                />
              ) : (
                <div className="h-full w-full bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                  <div className="p-6">
                    <h3 className="text-5xl font-bold text-gray-800 mb-4">
                      <CountUp end={count.quantity} duration={2} />
                    </h3>
                    <h3 className="text-xl font-bold text-gray-600">{count.title}</h3>
                  </div>
                </div>
              )}

              {/* Card overlay, siempre visible */}
              <div className="absolute inset-0 grid h-full w-full items-center">
                <div className="p-6 rounded-lg shadow-md bg-black/55">
                  <h3 className="text-5xl font-bold text-white mb-4">
                    <CountUp end={count.quantity} duration={2} /> {/* Contador animado */}
                  </h3>
                  <h3 className="text-xl font-bold text-white">{count.title}</h3>
                </div>
              </div>
            </motion.div>
          )) : null}
        </motion.div>
      </div>
    </section>
  );
}
