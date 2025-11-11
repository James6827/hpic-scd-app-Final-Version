import React from "react";
import "./Navbar.css";
import logo from "../assets/Logo.png"; // path to your logo image

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="HPIC Logo" className="logo" />
        <div className="logo-text">
          <strong>HPIC</strong>
          <span>Health Partners International</span>
        </div>
      </div>

      <div className="navbar-center">
        <button>Home</button>
        <button>Education</button>
        <button>Community</button>
        <button>Treatment</button>
      </div>

      <div className="navbar-right">
        <span>EN | FR</span>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}
