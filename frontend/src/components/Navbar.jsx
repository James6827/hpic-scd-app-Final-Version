import React from "react";
import "./Navbar.css";
import logo from "../assets/Logo.png"; // path to logo image

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left"> {/* positioning of logo on page */}
        <img src={logo} alt="HPIC Logo" className="logo" /> {/* HPIC logo image */}
      </div>

      {/* what is a button in  centre of navigation section of app */}
      <div className="navbar-center">
        <button>Home</button>
        <button>Symptoms</button>
        <button>Treatment</button>
        <button>My Journal</button>

      </div>

      {/* right ish side of navigation bar for language options*/}
 <div className="navbar-end">
  <div className="navbar-leftright">
    <button className="language-btn">EN/FR</button>
  </div>
  <div className="navbar-right">
    <button className="login-btn">Login/Sign Up</button>
  </div>
</div>

    </nav>
  );
}
