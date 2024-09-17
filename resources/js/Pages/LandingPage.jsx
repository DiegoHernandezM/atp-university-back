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
      <MisionVision landingData={landingData} />
      <Services landingData={landingData} containerVariants={containerVariants} />
      <Simulators landingData={landingData} />
      <Testimonials landingData={landingData} />
      <Contact />
    </div >
  );
};

