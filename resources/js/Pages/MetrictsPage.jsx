import React, { useState } from 'react';
import Metricts from '@/Components/Landing/Metricts';

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


export default function MetricsPage({ landingData, isPrev = true }) {
    return (
        <div className="landing-page">
            <Metricts landingData={landingData} containerVariants={containerVariants} countVariants={countVariants} isPrev={isPrev} />
            <div className="relative mission-vision-section py-20 relative bg-gradient-to-b from-[#BDBDBD] to-[#EEEEEE]">
                {/* SVG de las líneas, con z-index bajo */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                        src={`/storage/lin.png`}
                        alt="image 2"
                        className="h-full w-full object-cover rounded-l-lg"
                    />
                </div>
            </div>
        </div>
    );
};

