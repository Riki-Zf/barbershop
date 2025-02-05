import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${isScrolled ? "scrolled" : ""}`}>
      <ul>
        <li>Pricelist</li>
        <li>Lokasi</li>
        <img src={logo} alt="" className="logo" />
        <li>Hair Trends</li>
        <li>Captain Academy</li>
      </ul>
    </nav>
  );
};

export default Navbar;
