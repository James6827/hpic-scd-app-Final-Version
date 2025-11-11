import React from "react";
import "./Home.css";
import ribbon from "../../assets/ribbon.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Early Detection Saves Lives</h1>
          <p>Learn how awareness and proactive care can make all the difference.</p>
          <button className="cta-btn" onClick={() => navigate("/education")}>
            Learn More
          </button>
        </div>
        <div className="hero-image">
          <img src={ribbon} alt="Awareness Ribbon" />
        </div>
      </section>

      <section className="nav-grid">
        <div className="nav-card" onClick={() => navigate("/education")}>
          <h3>Education</h3>
        </div>
        <div className="nav-card" onClick={() => navigate("/community")}>
          <h3>Community</h3>
        </div>
        <div className="nav-card" onClick={() => navigate("/treatment")}>
          <h3>Treatment</h3>
        </div>
        <div className="nav-card" onClick={() => navigate("/resources")}>
          <h3>Resources</h3>
        </div>
      </section>
    </div>
  );
}
