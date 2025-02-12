import React, { useState } from "react";
import "./Heroinfo.css";
const Heroinfo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroData = [
    {
      title: "Layanan Pelanggan",
      icon: "fa-brands fa-whatsapp",
      content: (
        <>
          08123334444 <br />
          Kapten
        </>
      ),
    },
    {
      title: "kantor pusat",
      icon: "fa-solid fa-location-dot",
      content: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Jam Operasional",
      icon: "fa-regular fa-clock",
      content: "10.00-22.00 Lorem ipsum dolor sit amet.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroData.length - 1 : prev - 1));
  };

  //desktop
  const desktopView = (
    <div className="hero desktop-view">
      {heroData.map((item, index) => (
        <div key={index} className="hero-info">
          <h3>{item.title}</h3>
          <div className="info-content">
            <i className={item.icon}></i>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const mobileView = (
    <div className="hero mobile-view">
      <button className="slider-button prev" onClick={prevSlide}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className="hero-info">
        <h3>{heroData[currentSlide].title}</h3>
        <div className="info-content">
          <i className={heroData[currentSlide].icon}></i>
          <p>{heroData[currentSlide].content}</p>
        </div>
      </div>

      <button className="slider-button next" onClick={nextSlide}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="slider-dots">
        {heroData.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => {
              setCurrentSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      {desktopView}
      {mobileView}
    </>
  );
};

export default Heroinfo;
