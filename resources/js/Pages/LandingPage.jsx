import React, { useState } from 'react';
import NavBar from '@/Components/Landing/NavBar';
import PrincipalVideo from '@/Components/Landing/PrincipalVideo';
import Metricts from '@/Components/Landing/Metricts';
import MisionVision from '@/Components/Landing/MisionVision';
import Services from '@/Components/Landing/Services';
import Simulators from '@/Components/Landing/Simulators';
import Testimonials from '@/Components/Landing/Testimonials';
import Contact from '@/Components/Landing/Contact';

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


export default function LandingPage({ landingData, fixedNav = true }) {
  const section1_video_extension = landingData.section1_video?.split('.').pop().toLowerCase();
  return (
    <div className="landing-page">
      <NavBar title={landingData?.title} fixed={fixedNav} />
      <PrincipalVideo landingData={landingData} />
      <Metricts landingData={landingData} containerVariants={containerVariants} countVariants={countVariants} />
      <div className="relative mission-vision-section py-20 relative bg-gradient-to-b from-[#E0E0E0] to-[#8C8C8C]">
        {/* SVG de las líneas, con z-index bajo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 600"
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            {/* Líneas con más giros y curvas */}
            <path fill="none" stroke="#FFD700" strokeWidth="2" d="M1440 0C1200 100 1000 200 800 250C600 300 400 320 200 300C0 280 -100 180 0 120L0 320Z" />
            <path fill="none" stroke="#FFD700" strokeWidth="2" d="M1440 50C1200 150 1000 250 800 300C600 350 400 370 200 350C0 330 -100 230 0 170L0 320Z" />
            <path fill="none" stroke="#FFD700" strokeWidth="2" d="M1440 100C1200 200 1000 300 800 350C600 400 400 420 200 400C0 380 -100 280 0 220L0 320Z" />
            <path fill="none" stroke="#FFD700" strokeWidth="2" d="M1440 150C1200 250 1000 350 800 400C600 450 400 470 200 450C0 430 -100 330 0 270L0 320Z" />
          </svg>
        </div>

        {/* Tus componentes por encima de las líneas */}
        <div className="relative z-10">
          <MisionVision landingData={landingData} />
          <Services landingData={landingData} containerVariants={containerVariants} />
        </div>
      </div>
      <Simulators landingData={landingData} />
      <Testimonials landingData={landingData} />
      <Contact />
    </div >
  );
};

