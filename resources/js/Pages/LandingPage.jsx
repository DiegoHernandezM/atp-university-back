import { Avatar, Button, Carousel, IconButton, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';


const NavBar = ({ title, fixed }) => {
    return (
        <nav className={`bg-white shadow-md ${fixed ? 'fixed' : ''} w-full z-10`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-500">
                    {title}
                </div>
                {fixed ? (<div className="hidden md:flex space-x-8">
                    <a href="#video" className="text-gray-700 hover:text-blue-500">Inicio</a>
                    <a href="#statistics" className="text-gray-700 hover:text-blue-500">Estadísticas</a>
                    <a href="#mission-vision" className="text-gray-700 hover:text-blue-500">Misión y Visión</a>
                    <a href="#services" className="text-gray-700 hover:text-blue-500">Servicios</a>
                    <a href="#gallery" className="text-gray-700 hover:text-blue-500">Galería</a>
                    <a href="#testimonials" className="text-gray-700 hover:text-blue-500">Opiniones</a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-500">Contacto</a>
                </div>) : null}

            </div>
        </nav>
    );
};

export default function LandingPage({ landingData, fixedNav = true }) {
    const section1_video_extension = landingData.section1_video.split('.').pop().toLowerCase();
    return (
        <div className="landing-page">
            {/* Sección de video con descripción */}
            <NavBar title={landingData?.title} fixed={fixedNav} />
            <section id="video" className="video-section bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-6">
                        {['mp4', 'webm', 'ogg', 'mov'].includes(section1_video_extension) ? (<video className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" controls>
                            <source src={`/images/${landingData.section1_video}`} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>) : (
                            <img src={`/images/${landingData.section1_video}`} alt="Media content" className="w-full" />
                        )}

                    </div>
                    <p className="text-xl">{landingData?.section1_video_description}</p>
                </div>
            </section>

            {/* Sección de estadísticas numéricas */}
            <section id="statistics" className="statistics-section py-20 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Estadísticas</h2>
                    <div className="flex flex-wrap justify-center">
                        {JSON.parse(landingData?.section2_counts).map((count, index) => (
                            <div key={`count-div-${index}`} className="w-full md:w-1/4 px-4 mb-8">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-5xl font-bold text-blue-500 mb-4">{count.quantity}</h3>
                                    <p className="text-gray-600">{count.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sección de misión y visión */}
            <section id="mission-vision" className="mission-vision-section py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
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
                            <div className="relative h-full w-full">
                                <img
                                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                    alt="image 2"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                        >
                                            Nuestra Misión
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-12 opacity-80"
                                        >
                                            {landingData?.section3_mission ?? '-'}
                                        </Typography>

                                    </div>
                                </div>
                            </div>
                            <div className="relative h-full w-full">
                                <img
                                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                    alt="image 2"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                                    <div className="pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                        >
                                            Nuestra Visión
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-12 opacity-80"
                                        >
                                            {landingData?.section3_vision ?? '-'}
                                        </Typography>

                                    </div>
                                </div>
                            </div>

                        </Carousel>

                    </div>
                </div>

            </section>

            {/* Sección de servicios */}
            <section id="services" className="services-section py-20 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Servicios ofrecidos</h2>
                    <div className="flex flex-wrap -mx-4">
                        {JSON.parse(landingData?.section4_services).map((service, index) => (
                            <div key={`service-div-${index}`} className="w-full md:w-1/4 px-4 mb-8">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />
                                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Sección de slider de imágenes */}
            <section id="gallery" className="slider-section py-20 bg-gray-100">

                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Simuladores</h2>
                    <div className="max-w-2xl mx-auto overflow-hidden">
                        {JSON.parse(landingData.section5_simulators).length > 0 ? (<Carousel loop={true} className="rounded-xl">
                            {JSON.parse(landingData?.section5_simulators).map((simulator, index) => (
                                <img src={simulator.file} key={`file-${index}`} alt={`Simulador ${index}`} className="h-full w-full object-cover" />
                            ))}
                        </Carousel>) : null}

                    </div>
                </div>
            </section>


            {/* Sección de opiniones de clientes */}
            <section id="testimonials" className="testimonials-carousel py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Opiniones de Nuestros Clientes</h2>
                    <div className="flex overflow-x-auto space-x-4">
                        <div className="flex-none w-full md:w-1/3 p-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-600 italic">"Excelente servicio y atención al cliente. ¡Lo recomiendo!"</p>
                                <h4 className="text-xl font-semibold mt-4">- Cliente 1</h4>
                            </div>
                        </div>
                        <div className="flex-none w-full md:w-1/3 p-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-600 italic">"Un producto que realmente ha hecho la diferencia en nuestro negocio."</p>
                                <h4 className="text-xl font-semibold mt-4">- Cliente 2</h4>
                            </div>
                        </div>
                        <div className="flex-none w-full md:w-1/3 p-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-600 italic">"Una experiencia increíble, ¡sin duda volveré a trabajar con ellos!"</p>
                                <h4 className="text-xl font-semibold mt-4">- Cliente 3</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de contacto */}
            <section id="contact" className="contact-section py-20 bg-blue-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">¿Quieres más información de nuestros servicios?</h2>
                    <p className="text-xl mb-6">Contáctanos completando el formulario y te responderemos pronto.</p>
                    <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-gray-700">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-left mb-2">Nombre</label>
                            <input type="text" id="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu nombre" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-left mb-2">Correo Electrónico</label>
                            <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu correo electrónico" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-left mb-2">Mensaje</label>
                            <textarea id="message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Tu mensaje"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Enviar</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

