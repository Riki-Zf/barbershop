import React from "react";
import "./Service.css";
import srvImg from "../../assets/img1.jpg";
const Service = ({ children }) => {
  return (
    <div className="service">
      <div className="service-left">{children}</div>
      <div className="service-right">
        <div className="card-slider">
          <img src={srvImg} alt="" />

          <div className="srv-info">
            <h3>judul</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ea, aspernatur ut vel est in?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
