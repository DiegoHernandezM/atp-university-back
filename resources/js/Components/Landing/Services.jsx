import React, { useState } from "react";
import { motion } from "framer-motion";
import ServicesLandingDialog from "../Dialogs/ServicesLandingDialog";

export default function Services({ landingData, containerVariants, isPrev }) {
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleOpen = (service) => {
        setSelectedService(service);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedService(null);
    };

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
                    {isPrev
                        ? landingData.map((service, index) => (
                            <motion.div
                                key={`service-prev-${index}`}
                                variants={serviceVariants}
                                className="w-full flex justify-center items-center cursor-pointer"
                                onClick={() => handleOpen(service)}
                            >
                                {/* Contenedor de imagen circular */}
                                <div className="flex flex-col items-center">
                                    <div className="w-32 h-32 rounded-full bg-gray-400 mb-4 flex justify-center items-center shadow-xl shadow-gray-500/50">
                                        <img
                                            src={service?.button_image?.url ?? 'https://via.placeholder.com/128'}
                                            alt={service.title}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    {/* Texto debajo de la imagen */}
                                    <h3 className="text-xl font-semibold">{service.title}</h3>
                                </div>
                            </motion.div>
                        ))
                        : landingData.section4_services
                            ? JSON.parse(landingData.section4_services).map(
                                (service, index) => (
                                    <motion.div
                                        key={`service-div-${index}`}
                                        variants={serviceVariants}
                                        className="w-full flex justify-center items-center cursor-pointer"
                                        onClick={() => handleOpen(service)}
                                    >
                                        {/* Contenedor de imagen circular */}
                                        <div className="flex flex-col items-center">
                                            <div className="w-32 h-32 rounded-full bg-gray-400 mb-4 flex justify-center items-center shadow-xl shadow-gray-500/50">
                                                <img
                                                    src={`/storage/images/${service?.button_image?.url}`}
                                                    alt={service.title}
                                                    className="w-full h-full rounded-full object-cover"
                                                />
                                            </div>
                                            {/* Texto debajo de la imagen */}
                                            <h3 className="text-xl font-semibold">
                                                {service?.title }
                                            </h3>
                                        </div>
                                    </motion.div>
                                )
                            )
                            : null}
                </motion.div>
                <ServicesLandingDialog
                    open={open}
                    onClose={handleClose}
                    selectedService={selectedService}
                    isPrev={isPrev}
                />
            </div>
        </section>
    );
}
