import React from "react";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

export default function Metricts({ landingData, containerVariants, countVariants }) {
  return (
    <section id="statistics" className="services-section py-20 bg-gradient-to-b from-[#8C8C8C] to-[#E0E0E0]">
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
              className="relative bg-gradient-to-t from-gray-200 via-gray-300 to-gray-400 rounded-full p-4 sm:p-8 mb-6">
              <div className="p-6 rounded-full shadow-md bg-white flex items-center justify-center">
                <div>
                  <h3 className="text-5xl font-bold text-gray-800 mb-4">
                    <CountUp end={count.quantity} duration={2} />
                  </h3>
                  <h3 className="text-xl font-bold text-gray-600">{count.title}</h3>
                </div>
              </div>
              {/* Card overlay */}
              <div className="absolute inset-0 grid h-full w-full items-center">
                <div className="p-6 rounded-full shadow-md bg-black/55">
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
