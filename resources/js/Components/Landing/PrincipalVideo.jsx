import React from "react";
import { motion } from "framer-motion";

export default function PrincipalVideo({ landingData }) {
  const section1_video_extension = landingData.isPrev ? landingData.type : landingData.section1_video?.split('.').pop().toLowerCase();
  return (
    <section id="video" className="video-section bg-gradient-to-r from-white-500 to-white-600 text-white py-20 w-full min-h-[75vh] relative flex justify-center items-center">
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0">
        {['video/mp4', 'video/webm', 'video/ogg', 'video/mov', 'mp4', 'webm', 'ogg', 'mov'].includes(section1_video_extension) ? (
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src={landingData.isPrev ? landingData.section1_video : `/storage/images/${landingData.section1_video}`} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        ) : (
          <img src={landingData.isPrev ? landingData.section1_video : `/storage/images/${landingData.section1_video}`} alt="" className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      </motion.div>
      <div className="relative z-10 text-center text-white flex justify-center items-center w-full px-4">
        <p className="text-6xl font-bold">{landingData?.section1_video_description}</p>
      </div>
    </section>
  );
}
