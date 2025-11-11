import React from "react";
import "./Navbar.css";
import logo from "../assets/Logo.png"; // path to your logo image

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="HPIC Logo" className="logo" />
      </div>

      <div className="navbar-center">
        <button>Home</button>
        <button>Symptoms</button>
        <button>Treatment</button>
        <button>Contact Us</button>

      </div>

 <div className="navbar-leftright">
        <button className="language-btn">EN / FR</button>
      </div>

      <div className="navbar-right">
        <button className="login-btn">Login / Sign Up</button>
      
      </div>
    </nav>
  );
}
