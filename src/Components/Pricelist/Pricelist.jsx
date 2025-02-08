import React from "react";
import "./Pricelist.css";
const Pricelist = ({ children }) => {
  return (
    <>
      <div className="harga">
        <div className="jdl-harga">{children}</div>
      </div>

      <div className="list-harga">
        <ul>
          <li>
            <h4>judul</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reprehenderit.</p>
          </li>
          <li>
            <h4>judul</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reprehenderit.</p>
          </li>
          <li>
            <h4>judul</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reprehenderit.</p>
          </li>
          <li>
            <h4>judul</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reprehenderit.</p>
          </li>
          <li>
            <h4>judul</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reprehenderit.</p>
          </li>
          <li>
            <h4>judul</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reprehenderit.</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pricelist;
