import React, { useEffect } from 'react';
import axios from 'axios';
import NavBar from '@/Components/Landing/NavBar';
import PrincipalVideo from '@/Components/Landing/PrincipalVideo';
import Metricts from '@/Components/Landing/Metricts';
import MisionVision from '@/Components/Landing/MisionVision';
import Services from '@/Components/Landing/Services';
import Simulators from '@/Components/Landing/Simulators';
import Testimonials from '@/Components/Landing/Testimonials';
import Courses from '@/Components/Landing/CoursesGalarey';
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


export default function LandingPage({ landingData, courses, fixedNav = true }) {
  const section1_video_extension = landingData.section1_video?.split('.').pop().toLowerCase();
  useEffect(() => {
    axios.post('/register-visit', {
      url: window.location.pathname,
    })
    .then((response) => {
      console.log('Visita registrada con éxito:', response.data);
    })
    .catch((error) => {
      console.error('Error al registrar la visita:', error);
    });
  }, []);
  return (
    <div className="landing-page">
      <NavBar title={landingData?.title} fixed={fixedNav} />
      <PrincipalVideo landingData={landingData} />
      <Metricts landingData={landingData} containerVariants={containerVariants} countVariants={countVariants} />
      <div className="relative mission-vision-section py-20 relative bg-gradient-to-b from-[#BDBDBD] to-[#EEEEEE]">
        {/* SVG de las líneas, con z-index bajo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={`/storage/lin.png`}
            alt="image 2"
            className="h-full w-full object-cover rounded-l-lg"
          />
        </div>
        <div className="relative z-10">
          <MisionVision landingData={landingData} />
          <Services landingData={landingData} containerVariants={containerVariants} />
          <Simulators landingData={landingData} />
          <Testimonials landingData={landingData} />
        </div>
      </div>
      {courses && courses.length > 0 && (
        <Courses courses={courses} />
      )}
      <Contact landingData={landingData} />
    </div >
  );
};

