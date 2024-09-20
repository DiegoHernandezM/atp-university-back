import React from "react";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

export default function Metricts({ landingData, containerVariants, countVariants }) {
  return (
    <section id="statistics" className="services-section py-20 bg-gradient-to-b from-[#EEEEEE] to-[#FFFFFF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">NUESTRAS ESTADÍSTICAS</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {landingData.section2_counts ? JSON.parse(landingData.section2_counts).map((count, index) => (
            <motion.div
              variants={countVariants}
              key={`count-div-${index}`}
              className="relative flex flex-col items-center">
              {/* Contenedor del círculo más grande y con color #2597F3 y sombra */}
              <div className="w-32 h-32 bg-[#2597F3] rounded-full flex items-center justify-center shadow-xl shadow-blue-500/50">
                <h3 className="text-5xl font-bold text-white">
                  <CountUp end={count.quantity} duration={2} />
                </h3>
              </div>
              {/* Título debajo del círculo */}
              <div className="mt-4">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">{count.title}</h1>
                <h1 className="text-gray-600 mt-2">{count.description}</h1>
              </div>
            </motion.div>
          )) : null}
        </motion.div>
      </div>
    </section>
  );
}
