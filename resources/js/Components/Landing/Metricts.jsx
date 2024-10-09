import React from "react";
import { motion } from "framer-motion";
import Flip from "./Flip"; // Tu componente personalizado Flip
import "@pqina/flip/dist/flip.min.css"; // Importar el CSS necesario para el efecto flip

export default function Metricts({ landingData, containerVariants, countVariants, isPrev }) {
    return (
        <section id="statistics" className="services-section py-20 bg-gradient-to-b from-[#EEEEEE] to-[#BDBDBD]">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-12">NUESTRAS ESTADÍSTICAS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {isPrev ? (
                        Array.isArray(landingData.section2_counts) &&
                        landingData.section2_counts.map((count, index) => (
                            <motion.div
                                variants={countVariants}
                                key={`count-div-${index}`}
                                className="relative flex flex-col items-center"
                            >
                                {/* Efecto Flip para el número */}
                                <h1 className="text-5xl font-bold text-white">
                                    <Flip value={count?.quantity ? count.quantity.toString() : '0' } />
                                </h1>

                                {/* Título y descripción */}
                                <div className="mt-4">
                                    <h1 className="text-3xl font-bold mb-8 text-black">{count.title}</h1>
                                    <h1 className="text-black mt-2">{count.description}</h1>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        landingData.section2_counts &&
                        JSON.parse(landingData.section2_counts).map((count, index) => (
                            <motion.div
                                variants={countVariants}
                                key={`count-div-${index}`}
                                className="relative flex flex-col items-center"
                            >
                                {/* Efecto Flip para el número */}
                                <h1 className="text-5xl font-bold text-white">
                                    <Flip value={count?.quantity ? count.quantity.toString() : ''} />
                                </h1>

                                {/* Título y descripción */}
                                <div className="mt-4">
                                    <h1 className="text-3xl font-bold mb-8 text-black">{count.title ?? 'Sin dato'}</h1>
                                    <h1 className="text-black mt-2">{count.description}</h1>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
