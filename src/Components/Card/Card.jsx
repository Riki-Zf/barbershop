import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      <div className="stat-card">
        <i className="fa-solid fa-house "></i>
        <div className="number">111</div>
        <div className="label">Total Cabang</div>
      </div>
      <div className="stat-card">
        <i className="fa-solid fa-people-group"></i>
        <div className="number">11M+</div>
        <div className="label">pelanggan</div>
      </div>
      <div className="stat-card">
        <i className="fa-solid fa-scissors"></i>
        <div className="number">777+</div>
        <div className="label">Kapster Profesional</div>
      </div>
      <div className="stat-card">
        <i className="fa-solid fa-people-robbery"></i>
        <div className="number">457+</div>
        <div className="label">style dibuat</div>
      </div>
    </div>
  );
};

export default Card;
