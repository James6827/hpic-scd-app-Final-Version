import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="HPIC Logo" className="logo" />
        <div className="logo-text">
          <strong>HPIC</strong><br />
          <span>Health Promotion International Centre</span>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/early-detection"><button>Symptoms</button></Link>
        <Link to="/treatment-options"><button>Treatments</button></Link>
        <Link to="/community"><button>Contact Us</button></Link>
      </div>

      <div className="navbar-right">
        <span>EN/FR</span>
        <button className="login-btn">Login / Sign Up</button>
      </div>
    </nav>
  );
}
