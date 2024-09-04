import React from "react";
import "../App.css";
import { useState } from "react";
import { Avatar, Cart } from "../utilitis";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleMenuToggleClick = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  return (
    <div className="nav-wrapper relative z-50">
      <div className="grad-bar"></div>
      <nav
        className={`navbar ${isMobileNavActive ? "mobile-nav" : ""} sticky `}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png"
          alt="Company Logo"
        />
        <button
          className={`menu-toggle ${isMobileNavActive ? "is-active" : ""}`}
          onClick={handleMenuToggleClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav ${isSearchActive ? "search" : "no-search"}`}>
          <NavLink to="/" className="nav-item">
            {" "}
            Home
          </NavLink>

          <NavLink to="/about" className="nav-item">
            About Us
          </NavLink>
          <NavLink to="/service" className="nav-item">
            Products
          </NavLink>

          <NavLink to="/projects" className="nav-item">
            Projects
          </NavLink>

            <NavLink to="/training" className="nav-item">
            Training
          </NavLink>
              
          <NavLink to="/contact" className="nav-item">
            Contact Us
          </NavLink>
          <li
            className="nav-item  
 search-icon"
            onClick={handleSearchClick}
          >
            <i className="fas fa-search"></i>
          </li>
          <input
            className={`search-input ${isSearchActive ? "search-active" : ""}`}
            type="text"
            placeholder="Search.."
          />
        </ul>
        <div className="flex flex-center justify-center ">
          <img src={Avatar} className="w-32 cursor-pointer" />
          <img src={Cart} className="w-32  cursor-pointer" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
