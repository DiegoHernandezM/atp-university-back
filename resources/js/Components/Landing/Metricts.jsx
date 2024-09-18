import React from "react";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

export default function Metricts({ landingData, containerVariants, countVariants }) {
  return (
    <section id="statistics" className="statistics-section py-20 bg-gray-100 relative overflow-hidden">
      {/* Líneas amarillas en forma de ola */}
      <div className="absolute inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 right-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path fill="none" stroke="#FFD700" strokeWidth="2" d="M1440 0C1200 100 1000 200 800 250C600 300 400 320 200 300C0 280 -100 180 0 120L0 320Z" />
          <path fill="none" stroke="#FFD700" strokeWidth="2" d="M1440 50C1200 150 1000 250 800 300C600 350 400 370 200 350C0 330 -100 230 0 170L0 320Z" />
          <path fill="none" stroke="#FFD700" strokeWidth="2" d="M1440 100C1200 200 1000 300 800 350C600 400 400 420 200 400C0 380 -100 280 0 220L0 320Z" />
          <path fill="none" stroke="#FFD700" strokeWidth="2" d="M1440 150C1200 250 1000 350 800 400C600 450 400 470 200 450C0 430 -100 330 0 270L0 320Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Nuestras Estadísticas</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.5 }}
          className="grid grid-cols-4 gap-8">
          {landingData.section2_counts ? JSON.parse(landingData.section2_counts).map((count, index) => (
            <motion.div
              variants={countVariants}
              key={`count-div-${index}`}
              className="relative bg-gradient-to-t from-gray-200 via-gray-300 to-gray-400 rounded-full p-8">
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
