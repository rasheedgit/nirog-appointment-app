import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          NirogGyan
        </Link>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/book" className="nav-link" onClick={closeMenu}>
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
