import React, { useState } from 'react';
import Services from '@/Components/Landing/Services';

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        },
    },
};

export default function ServicesPage({ landingData, isPrev }) {
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
                    <Services landingData={landingData} containerVariants={containerVariants} isPrev={isPrev} />
                </div>
            </div>
        </div >
    );
};

