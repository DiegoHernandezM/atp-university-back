import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Flip from "./Flip"; // This will be your custom Flip component
import "@pqina/flip/dist/flip.min.css"; // Import the necessary CSS for the flip effect

export default function Metricts({ landingData, containerVariants, countVariants }) {
  return (
    <section id="statistics" className="services-section py-20 bg-gradient-to-b from-[#EEEEEE] to-[#BDBDBD]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">NUESTRAS ESTADÍSTICAS</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {landingData.section2_counts ? JSON.parse(landingData.section2_counts).map((count, index) => (
            <motion.div
              variants={countVariants}
              key={`count-div-${index}`}
              className="relative flex flex-col items-center"
            >
              {/* Flip clock effect for the number */}

                <h1 className="text-5xl font-bold text-white">
                  {/* Using Flip to display the number */}
                  <Flip value={count.quantity.toString()} /> {/* Pass the count quantity as the value */}
                </h1>

              {/* Title and description */}
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
