import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
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
        <i className="fa-solid fa-times" style={{ color: "#76abae", alignSelf: "flex-end", cursor: "pointer", fontSize: "20px" }} onClick={closeSidebar} />
        <img src={logo} alt="" className="logo" />
        <li>Pricelist</li>
        <li>Lokasi</li>
        <li>Trends</li>
        <li>Academy</li>
      </ul>
      <ul>
        <img src={logo} alt="" className="logo" />
        <li>Pricelist</li>
        <li>Lokasi</li>
        <li>Trends</li>
        <li>Academy</li>
      </ul>
    </nav>
  );
};

export default Navbar;
