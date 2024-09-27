import React, { useState } from 'react';
import NavBar from '@/Components/Landing/NavBar';
import PrincipalVideo from '@/Components/Landing/PrincipalVideo';

export default function WelcomePage({ landingData, fixedNav = true }) {
    return (
        <div className="landing-page">
            <NavBar title={landingData.title} fixed={fixedNav} />
            <PrincipalVideo landingData={landingData} />
        </div >
    );
};

