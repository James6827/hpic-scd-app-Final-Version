import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Logo.png"; // path to logo image

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left"> {/* positioning of logo on page */}
        <img src={logo} alt="HPIC Logo" className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}/> {/* HPIC logo image */}
      </div>

      {/* what is a button in  centre of navigation section of app */}
      <div className="navbar-center">
        <button onClick={() => navigate("/symptoms")}>Symptoms</button>
        <button onClick={() => navigate("/treatment")}>Treatment</button>
        <button onClick={() => navigate("/myjournal")}>My Journal</button>
      </div>
        
      {/* right ish side of navigation bar for language options*/}
 <div className="navbar-leftright">
        <button onClick={() => navigate("/ENFR")}>Language</button>
      </div>

      {/* right side of navigation bar for sign in / sign up options*/}
      <div className="navbar-right">
        <button onClick={() => navigate("/login")}>Login / Sign Up</button>
      </div>
    </nav>
  );
}
export default Navbar;