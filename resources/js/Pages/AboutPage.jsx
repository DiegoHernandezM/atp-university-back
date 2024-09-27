import React, { useState } from 'react';
import NavBar from '@/Components/Landing/NavBar';
import PrincipalVideo from '@/Components/Landing/PrincipalVideo';
import Metricts from '@/Components/Landing/Metricts';
import MisionVision from '@/Components/Landing/MisionVision';
import Services from '@/Components/Landing/Services';
import Simulators from '@/Components/Landing/Simulators';
import Testimonials from '@/Components/Landing/Testimonials';
import Contact from '@/Components/Landing/Contact';

export default function AboutPage({ landingData }) {
    return (
        <div className="landing-page">
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
                </div>
            </div>
        </div >
    );
};

