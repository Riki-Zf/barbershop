// Title.jsx
import React from "react";
import "./Title.css";

const Title = ({ title, subTitle, showButton = false }) => {
  return (
    <div className="title-section">
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subTitle}</p>
      {showButton && (
        <button className="more-btn">
          Selengkapnya <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      )}
    </div>
  );
};

export default Title;
