import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  //toggle menu
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className={`container ${isScrolled ? "scrolled" : ""}`}>
      <img src={logo} alt="" className="mobile-logo" />

      <i className="menu-bar fa-solid fa-bars" onClick={toggleSidebar}></i>
      <ul className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <i className="fa-solid fa-times" style={{ color: "#76abae", alignSelf: "flex-start", cursor: "pointer", fontSize: "20px" }} onClick={closeSidebar} />
        <li>
          <Link to="card" smooth={true} offset={-435} duration={500} className="btn from-center">
            About us
          </Link>
        </li>
        <li>
          <Link to="service" smooth={true} offset={-100} duration={500} className="btn from-center">
            Service
          </Link>
        </li>
        <li>
          <Link to="pricelist" smooth={true} offset={-100} duration={500} className="btn from-center">
            Pricelist
          </Link>
        </li>
        <li>
          <Link to="trend" smooth={true} offset={-300} duration={500} className="btn from-center">
            Trend
          </Link>
        </li>
      </ul>
      <ul>
        <img src={logo} alt="" className="logo" />
        <li>
          <Link to="card" smooth={true} offset={-435} duration={500} className="btn from-center">
            About us
          </Link>
        </li>
        <li>
          <Link to="service" smooth={true} offset={-100} duration={500} className="btn from-center">
            Service
          </Link>
        </li>
        <li>
          <Link to="pricelist" smooth={true} offset={-100} duration={500} className="btn from-center">
            Pricelist
          </Link>
        </li>
        <li>
          <Link to="trend" smooth={true} offset={-300} duration={500} className="btn from-center">
            Trend
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
