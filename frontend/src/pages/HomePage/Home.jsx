import React from "react";
import "./Home.css";
import ribbon from "../../assets/Ribbon.jpg"; // adjust path as needed

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>7.74 Million People live with SCD Worldwide</h1>
          <p>
Sickle-cell disease (SCD) is a genetic disorder that affects haemoglobin, the molecule in red blood cells responsible for carrying oxygen.
          </p>
          <p>
SCD is most common in individuals of African, Mediterranean, Middle Eastern, and Indian descent. 
          </p>
          <p> 
Early diagnosis is crucial for managing the disease and preventing complications.          </p>
        </div>
        <div className="hero-image">
          <img src={ribbon} alt="Awareness Ribbon" />
        </div>
      </section>

      <section className="info-section">
        <h2>How HPIC Can Help</h2>
        <p>
         We offer many tools and resources for you to discover how to take care of yourself and your loved ones who are affected by Sickle Cell Disease.
        </p>
      </section>
    </div>
  );
}
