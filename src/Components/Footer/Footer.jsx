import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="info-container">
          <span className="title-info">COMPANY</span>
          <span>Story</span>
          <span>Mission</span>
          <span>Lokasi</span>
          <span>CSR</span>
        </div>
        <div className="info-container">
          <span className="title-info">OTHER</span>
          <span>Trend Rambut</span>
          <span>Gallery</span>
          <span>Karir</span>
          <span>Kontak</span>
          <span>Privacy Policy</span>
          <span>Terms of Serivice</span>
        </div>
      </div>

      <div className="map">
        <span className="title-info">LOCATION</span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.49131702408!2d106.6647009199301!3d-6.229720927628747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1739191187636!5m2!1sid!2sid"
          width="350"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
