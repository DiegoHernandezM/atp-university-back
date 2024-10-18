import React, { useState } from 'react';
import Contact from '@/Components/Landing/Contact.jsx';
export default function ContactPage({ landingData, isPrev }) {
  return (
    <div className="landing-page">
      <Contact landingData={landingData} isPrev={isPrev} />
    </div >
  );
};

