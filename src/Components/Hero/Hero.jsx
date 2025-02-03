import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-img"></div>
      <div className="hero">
        <div className="hero-info">
          <h3>Layanan Pelanggan</h3>
          <div className="info-content">
            <i className="fa-brands fa-whatsapp"></i>
            <p>081234567899</p>
          </div>
        </div>

        <div className="hero-info">
          <h3>Kantor Pusat</h3>
          <div className="info-content">
            <i className="fa-solid fa-location-dot"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>

        <div className="hero-info">
          <h3>Jam Operasional</h3>
          <div className="info-content">
            <i className="fa-regular fa-clock"></i>
            <p>10.00 - 22.00 Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
