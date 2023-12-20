// hero.js

import React from 'react';
import './pin-hero.css'; // Import your CSS file for styling
import heroimage from "../../assets/images/heroimage2.jpg"
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
      <center> <h1 class="classheader">Enter Pin Below</h1></center>
      <div className="pinenterholder"><input id="pin" name="pin" placeholder="422311"></input></div>
        <br></br><br></br>
        <div className='button_container'>
        <a href='qr-scan'><LoadingButton text="Submit Code"/> </a>
        <a href='pin'><LoadingButton text="Scan QR instead"/> </a>
        </div>
      </div>
    </div>
  );
};


export default HeroImage;
