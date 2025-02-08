import React, { useRef } from "react";
import "./Service.css";
import srvImg from "../../assets/img1.jpg";
const Service = ({ children }) => {
  const slider = useRef();
  let tx = 0;

  //perbaiki juga perhitungan logic slider
  const slideForward = () => {
    if (tx > -60) {
      // Batas sekitar -67 untuk memungkinkan slide ke posisi terakhir
      tx -= 33.33; // Bergerak per 33.33% untuk setiap slide
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 33.33; // Kembali per 33.33%
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="service">
      <div className="service-left">{children}</div>
      <div className="service-right">
        <i className="next-btn fa-solid fa-solid fa-angle-right" onClick={slideForward}></i>
        <i className="back-btn fa-solid fa-solid fa-angle-left" onClick={slideBackward}></i>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="card-slider">
                <img src={srvImg} alt="" />

                <div className="srv-info">
                  <h3>judul</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati asperiores aliquid tenetur, voluptatum expedita, necessitatibus placeat aperiam architecto nemo iusto iure fugiat explicabo laborum dolor error
                    dicta accusamus sunt.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="card-slider">
                <img src={srvImg} alt="" />

                <div className="srv-info">
                  <h3>judul 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati asperiores aliquid tenetur, voluptatum expedita, necessitatibus placeat aperiam architecto nemo iusto iure fugiat explicabo laborum dolor error
                    dicta accusamus sunt.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="card-slider">
                <img src={srvImg} alt="" />

                <div className="srv-info">
                  <h3>judul 3 </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati asperiores aliquid tenetur, voluptatum expedita, necessitatibus placeat aperiam architecto nemo iusto iure fugiat explicabo laborum dolor error
                    dicta accusamus sunt.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
