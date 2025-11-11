import React from "react";
import "./Home.css";
import ribbon from "../../assets/Ribbon.jpg"; // adjust path as needed

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Early Detection Saves Lives</h1>
          <p>
            Learn how awareness and proactive care can make all the difference.
          </p>
          <button className="cta-btn">Learn More</button>
        </div>
        <div className="hero-image">
          <img src={ribbon} alt="Awareness Ribbon" />
        </div>
      </section>

      <section className="info-section">
        <h2>How HPIC Can Help</h2>
        <p>
          HPIC supports communities with educational resources, access to
          treatments, and outreach programs to promote awareness.
        </p>
      </section>
    </div>
  );
}
