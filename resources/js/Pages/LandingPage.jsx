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
      <div className="relative mission-vision-section py-20 relative bg-gradient-to-b from-[#FFFFFF] to-[#EEEEEE]">
        {/* SVG de las líneas, con z-index bajo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 700"
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path fill="none" stroke="#EFB810" strokeWidth="2"
              d="M0,100 C400,200 600,400 800,300 C1000,200 1200,400 1440,600" />


            <path fill="none" stroke="#EFB810" strokeWidth="2"
              d="M0,110 C400,210 600,410 800,310 C1000,210 1200,410 1440,610" />


            <path fill="none" stroke="#EFB810" strokeWidth="2"
              d="M0,120 C400,220 600,420 800,320 C1000,220 1200,420 1440,620" />


            <path fill="none" stroke="#EFB810" strokeWidth="2"
              d="M0,130 C400,230 600,430 800,330 C1000,230 1200,430 1440,630" />
          </svg>

        </div>
        <div className="relative z-10">
          <MisionVision landingData={landingData} />
          <Services landingData={landingData} containerVariants={containerVariants} />
        </div>
      </div>
      <div className="relative mission-vision-section py-20 relative bg-gradient-to-b from-[#EEEEEE] to-[#FFFFFF]">
        {/* SVG de las líneas, con z-index bajo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 700"
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >

            <path fill="none" stroke="#EFB810" strokeWidth="2"
              d="M1440,100 C1040,200 840,400 640,300 C440,200 240,400 0,600" />


            <path fill="none" stroke="#EFB810" strokeWidth="2"
              d="M1440,110 C1040,210 840,410 640,310 C440,210 240,410 0,610" />


            <path fill="none" stroke="#EFB810" strokeWidth="2"
              d="M1440,120 C1040,220 840,420 640,320 C440,220 240,420 0,620" />


            <path fill="none" stroke="#EFB810" strokeWidth="2"
              d="M1440,130 C1040,230 840,430 640,330 C440,230 240,430 0,630" />
          </svg>

        </div>
        <div className="relative z-10">
          <Simulators landingData={landingData} />
          <Testimonials landingData={landingData} />
        </div>
      </div>
      <Contact />
    </div >
  );
};

