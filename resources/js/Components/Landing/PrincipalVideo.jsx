import React from "react";
import { motion } from "framer-motion";

export default function PrincipalVideo({ landingData, isPrev }) {
    // Obtener la extensión del archivo de video, ya sea de previsualización o guardado
    const section1_video_extension = isPrev
        ? landingData.type?.split('/').pop().toLowerCase()
        : landingData.section1_video?.split('.').pop().toLowerCase();
    let file = '';
    if (isPrev && landingData?.section1_video && landingData.section1_video.startsWith('blob')) {
        file = landingData.section1_video; // Usar el blob
    } else if (isPrev && landingData?.section1_video && !landingData.section1_video.startsWith('blob')) {
        file = `storage/images/${landingData.section1_video}`;
    } else {
        file = `/storage/images/${landingData.section1_video}`;
    }
    return (
        <section id="video" className="video-section bg-gradient-to-r from-white-500 to-white-600 text-white py-20 w-full min-h-[75vh] relative flex justify-center items-center">
            <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0">
                {/* Si es un archivo de video válido, mostrar el video */}
                {['mp4', 'webm', 'ogg', 'mov', ''].includes(section1_video_extension) ? (
                    <video className="w-full h-full object-cover" autoPlay loop muted>
                        <source
                            src={file} // Archivo guardado (URL en el servidor)
                            type={isPrev ? landingData.type : 'video/mp4'}
                        />
                        Tu navegador no soporta el elemento de video.
                    </video>
                ) : (
                    // Si no es un video, mostrar la imagen
                    <img
                        src={file} // Imagen guardada (URL en el servidor)
                        alt="Imagen de fondo"
                        className="w-full h-full object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            </motion.div>

            {/* Descripción del video o imagen */}
            <div className="relative z-10 text-center text-white flex justify-center items-center w-full px-4">
                <p className="text-6xl font-bold">{landingData?.section1_video_description}</p>
            </div>
        </section>
    );
}
