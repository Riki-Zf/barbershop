import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="info-container">
          <h4 className="title-info">COMPANY</h4>
          <p>Story</p>
          <p>Mission</p>
          <p>Lokasi</p>
          <p>CSR</p>
        </div>
        <div className="info-container">
          <h4 className="title-info">OTHER</h4>
          <p>Trend Rambut</p>
          <p>Gallery</p>
          <p>Karir</p>
          <p>Kontak</p>
          <p>Privacy Policy</p>
          <p>Terms of Serivice</p>
        </div>
        <div className="info-container">
          <h4 className="title-info">SUPPORT</h4>
          <p>Jl. Lorem, ipsum dolor.</p>
          <p>0812 3333 4444 </p>
          <p>cs@barber.co.id</p>
        </div>
        <div className="info-container">
          <h4 className="title-info">MAP</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63767.90759788765!2d121.03280343844823!3d-2.6677672612815866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d90f81eb675147f%3A0x7e8978a7ae9a713b!2sWewang%20Riu%2C%20Kec.%20Malili%2C%20Kabupaten%20Luwu%20Timur%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1739225146649!5m2!1sid!2sid"
            width="320"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="copyright">Copyright &copy; 2025 | riki-zf</div>
      <hr />
    </>
  );
};

export default Footer;
