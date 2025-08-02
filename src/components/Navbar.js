import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          NirogGyan
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          {/* Book link disabled if no doctor is selected */}
          <Link to="/book" className="nav-link">
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
