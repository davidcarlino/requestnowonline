// hero.js

import React from 'react';
import './hero.css'; // Import your CSS file for styling
import heroimage from "../../assets/images/heroimage1.jpg"
import LoadingButton from '../buttons/loadingbuttonblue';

const HeroImage = () => {
  return (
    <div className="hero-image-container">
      <img
        className="hero-image"
        src={heroimage}
        alt="Hero"
      />
      <div className="hero-text">
        <h1>Request Music in Real-Time.</h1>
        <p>Scan The QR Codes at your event or enter a Code.</p>

        <div className='button_container'>
        <a href='qr-scan'><LoadingButton text="Scan QR Code"/> </a>
        <a href='pin'><LoadingButton text="Enter Event PIN"/> </a>
        </div>
      </div>
    </div>
  );
};


export default HeroImage;
