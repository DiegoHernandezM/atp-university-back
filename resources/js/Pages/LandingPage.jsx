import { Avatar, Carousel, IconButton, Typography } from '@material-tailwind/react';
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import React, { useState } from 'react';

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const countVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const serviceVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
};

const NavBar = ({ title, fixed }) => {
    const [isOpen, setIsOpen] = useState(false); // Estado para manejar el menú hamburguesa

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`bg-white shadow-md ${fixed ? 'fixed' : ''} w-full z-50`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo y Título */}
                <div className="flex items-center space-x-4">
                    <img src={`/storage/images/logo.png`} alt="Logo" className="h-10 w-15" />
                    <div className="text-2xl font-bold text-blue-500">
                        {title}
                    </div>
                </div>

                {/* Menú en pantallas grandes */}
                <div className="hidden md:flex space-x-8">
                    <a href="#video" className="text-gray-700 hover:text-blue-500">Inicio</a>
                    <a href="#statistics" className="text-gray-700 hover:text-blue-500">Estadísticas</a>
                    <a href="#mission-vision" className="text-gray-700 hover:text-blue-500">Nosotros</a>
                    <a href="#services" className="text-gray-700 hover:text-blue-500">Servicios</a>
                    <a href="#gallery" className="text-gray-700 hover:text-blue-500">Simuladores</a>
                    <a href="#testimonials" className="text-gray-700 hover:text-blue-500">Testimonios</a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-500">Contacto</a>
                </div>

                {/* Botón menú hamburguesa para pantallas pequeñas */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                        {/* Icono de menú hamburguesa */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menú desplegable para pantallas pequeñas */}
            {isOpen && (
                <div className="fixed top-0 right-0 h-full w-4/5 max-w-md p-6 bg-white rounded-l-lg z-40"> {/* Posiciona en la parte superior derecha */}

                    {/* Botón de cierre en la esquina superior derecha */}
                    <button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Opciones del menú */}
                    <div className="flex flex-col justify-center items-center space-y-8 text-lg font-medium">
                        <a href="#video" className="text-gray-700 hover:text-blue-500">Inicio</a>
                        <a href="#statistics" className="text-gray-700 hover:text-blue-500">Estadísticas</a>
                        <a href="#mission-vision" className="text-gray-700 hover:text-blue-500">Nosotros</a>
                        <a href="#services" className="text-gray-700 hover:text-blue-500">Servicios</a>
                        <a href="#gallery" className="text-gray-700 hover:text-blue-500">Simuladores</a>
                        <a href="#testimonials" className="text-gray-700 hover:text-blue-500">Testimonios</a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-500">Contacto</a>
                    </div>

                    {/* Botones adicionales */}
                    <div className="flex flex-col items-center space-y-4 mt-8">
                        <a href="/login" className="w-48 py-2 bg-blue-500 text-white rounded-full text-center">
                            Inicia sesión
                        </a>
                        <a href="/register" className="w-48 py-2 bg-yellow-500 text-black rounded-full text-center">
                            Regístrate
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default function LandingPage({ landingData, fixedNav = true }) {
    const section1_video_extension = landingData.section1_video?.split('.').pop().toLowerCase();
    return (
        <div className="landing-page">
            {/* Sección de video con descripción */}
            <NavBar title={landingData?.title} fixed={fixedNav} />
            <section id="video" className="video-section bg-gradient-to-r from-white-500 to-white-600 text-white py-20 w-full min-h-[75vh] relative flex justify-center items-center">
                <motion.div initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            className="absolute inset-0">
                    {['mp4', 'webm', 'ogg', 'mov'].includes(section1_video_extension) ? (
                        <video className="w-full h-full object-cover" autoPlay loop muted>
                            <source src={`/storage/images/${landingData.section1_video}`} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    ) : (
                        <img src={`/storage/images/${landingData.section1_video}`} alt="" className="w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
                </motion.div>
                <div className="relative z-10 text-center text-white flex justify-center items-center w-full px-4">
                    <p className="text-6xl font-bold">{landingData?.section1_video_description}</p>
                </div>
            </section>

            {/* Sección de estadísticas numéricas */}
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

            {/* Sección de misión y visión */}
            <section id="mission-vision" className="mission-vision-section py-20">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        className="relative w-full max-w-full mx-auto overflow-hidden">

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

                            {/* Slide 1 - Nuestra Misión */}
                            <div className="relative h-full w-full">
                                <img
                                    src={`/storage/images/atp-vision.jpg`}
                                    alt="image 2"
                                    className="h-300 w-full object-cover"
                                />
                                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                                    <div className="flex flex-col md:flex-row justify-between w-full px-12 md:px-32 space-y-8 md:space-y-0 md:space-x-16">

                                        {/* Título a la derecha, con más grande */}
                                        <div className="md:text-right">
                                            <Typography
                                                variant="h1"
                                                color="white"
                                                className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold"
                                            >
                                                Nuestra Misión
                                            </Typography>
                                        </div>

                                        {/* Contenido a la izquierda */}
                                        <div className="text-left">
                                            <Typography
                                                variant="lead"
                                                color="white"
                                                className="mb-12 opacity-80 leading-relaxed"
                                            >
                                                {landingData?.section3_mission ?? '-'}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 2 - Nuestra Visión */}
                            <div className="relative h-full w-full">
                                <img
                                    src={`/storage/images/atp-vision.jpg`}
                                    alt="image 2"
                                    className="h-300 w-full object-cover"
                                />
                                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                                    <div className="flex flex-col md:flex-row justify-between w-full px-12 md:px-32 space-y-8 md:space-y-0 md:space-x-16"> {/* Añadido espacio entre los elementos */}

                                        {/* Título a la derecha */}
                                        <div className="md:text-right">
                                            <Typography
                                                variant="h1"
                                                color="white"
                                                className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold"
                                            >
                                                Nuestra Visión
                                            </Typography>
                                        </div>

                                        {/* Contenido a la izquierda */}
                                        <div className="text-left">
                                            <Typography
                                                variant="lead"
                                                color="white"
                                                className="mb-12 opacity-80 leading-relaxed"
                                            >
                                                {landingData?.section3_vision ?? '-'}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </Carousel>
                    </motion.div>
                </div>
            </section>

            {/* Sección de servicios */}
            <section id="services" className="services-section py-20 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Servicios ofrecidos</h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 2.5 }}
                        className="flex flex-wrap -mx-4 justify-center">

                        {/* Map through services */}
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


            {/* Sección de slider de imágenes */}
            <section id="gallery" className="slider-section py-20 bg-white-100">

                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Simuladores</h2>
                    <div className="max-w-2xl mx-auto overflow-hidden">
                        {landingData.section5_simulators && JSON.parse(landingData.section5_simulators).length > 0 ? (
                            <Carousel loop={true} className="rounded-xl">
                                {JSON.parse(landingData?.section5_simulators).map((simulator, index) => {
                                    if (simulator.file) {
                                        const extension = simulator.file.split('.').pop().toLowerCase();
                                        return (
                                            <figure className="relative h-96 w-full">
                                                {['mp4', 'webm', 'ogg', 'mov'].includes(extension) ? (<video className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" autoPlay loop>
                                                    <source src={`/storage/images/${simulator.file}`} type="video/mp4" />
                                                    Tu navegador no soporta el elemento de video.
                                                </video>) : (
                                                    <img src={`/storage/images/${simulator.file}`} alt="" key={`file-${index}`} className="h-full w-full object-cover" />
                                                )}
                                                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                                                    <div>
                                                        <Typography variant="h5" color="blue-gray">
                                                            {simulator.title}
                                                        </Typography>
                                                        <Typography color="gray" className="mt-2 font-normal">
                                                            {simulator.description}
                                                        </Typography>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        )
                                    } else {
                                        return null
                                    }

                                })}
                            </Carousel>) : null}

                    </div>
                </div>
            </section >


            {/* Sección de opiniones de clientes */}
            <section id="testimonials" className="testimonials-carousel bg-gray-100 py-20" >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Testimonios de Nuestros Estudiantes</h2>
                    <div className="flex overflow-x-auto space-x-4">
                        <div className="flex-none w-full md:w-1/3 p-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-600 italic">"Excelente servicio y atención. ¡Lo recomiendo ampliamente!"</p>
                                <h4 className="text-xl font-semibold mt-4">- Estudiante 1</h4>
                            </div>
                        </div>
                        <div className="flex-none w-full md:w-1/3 p-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-600 italic">"Los cursos que realmente han hecho la diferencia."</p>
                                <h4 className="text-xl font-semibold mt-4">- Estudiante 2</h4>
                            </div>
                        </div>
                        <div className="flex-none w-full md:w-1/3 p-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-600 italic">"Una experiencia increíble, ¡sin duda me volveré piloto!"</p>
                                <h4 className="text-xl font-semibold mt-4">- Estudiante 3</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Sección de contacto */}
            <section id="contact" className="contact-section py-20 bg-blue-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">¿Quieres más información de nuestros servicios?</h2>
                    <p className="text-xl mb-6">Contáctanos completando el formulario y te responderemos pronto.</p>

                    <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-gray-700">
                        <div className="mb-6">
                            <img src={`/storage/images/logo.png`} alt="Logo" className="mx-auto h-20 w-25" /> {/* Ajusta el tamaño del logo según sea necesario */}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-left mb-2">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-left mb-2">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Tu correo electrónico"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-left mb-2">Mensaje</label>
                            <textarea
                                id="message"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                                placeholder="Tu mensaje">
                            </textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Enviar</button>
                    </form>
                </div>
            </section>

        </div >
    );
};

