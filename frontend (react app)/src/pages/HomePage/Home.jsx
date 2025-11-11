import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/logo.png" alt="HPIC Logo" className="logo" />
          <div className="logo-text">
            <strong>HPIC</strong><br />
            <span>Health Promotion International Centre</span>
          </div>
        </div>

        <div className="navbar-center">
          <button>Symptoms</button>
          <button>Treatments</button>
          <button>Contact Us</button>
        </div>

        <div className="navbar-right">
          <span>EN/FR</span>
          <button className="login-btn">Login / Sign Up</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h2>
            <span className="highlight">7.74 Million People</span> live with SCD Worldwide
          </h2>
          <p>
            Sickle-cell disease (SCD) is a genetic disorder that affects haemoglobin, 
            the molecule in red blood cells responsible for carrying oxygen.
          </p>
          <p>
            SCD is most common in individuals of African, Mediterranean, Middle Eastern, and Indian descent.
          </p>
          <p>
            Early diagnosis is crucial for managing the disease and preventing complications.
          </p>
        </div>
        <div className="hero-image">
          <img src="/doctor-ribbon.jpg" alt="Doctor holding awareness ribbon" />
        </div>
      </section>

      {/* HOW HPIC CAN HELP */}
      <section className="help-section">
        <h2>How <span className="highlight">HPIC</span> Can Help!</h2>
        <p className="help-description">
          We offer many tools and resources for you to discover how to take care of yourself 
          and your loved ones who are affected by Sickle Cell Disease.
        </p>

        <div className="help-grid">
          <div className="help-card">
            <h3>Early Detection</h3>
            <p>
              Comprehensive screening programs and genetic testing to identify SCD early 
              and begin treatment promptly.
            </p>
          </div>

          <div className="help-card">
            <h3>Treatment Options</h3>
            <p>
              Access to the latest options, pain management strategies, and medication guidance.
            </p>
          </div>

          <div className="help-card">
            <h3>Community</h3>
            <p>
              Connect with others living with SCD, share experiences, and find support groups in your area.
            </p>
          </div>

          <div className="help-card">
            <h3>Education</h3>
            <p>
              Comprehensive resources for patients, families, and healthcare providers about SCD.
            </p>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="stats-section">
        <div className="stat">
          <h3>300,000</h3>
          <p>Babies born with SCD Annually</p>
        </div>
        <div className="stat">
          <h3>50+</h3>
          <p>Years average lifespan with treatment</p>
        </div>
        <div className="stat">
          <h3>90%</h3>
          <p>Of SCD cases in Sub-Saharan Africa</p>
        </div>
        <div className="stat">
          <h3>24/7</h3>
          <p>Support & Resources available</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>HPIC</h4>
            <p>
              Health Promotion International Centre<br />
              Empowering lives through education, support, and comprehensive care 
              for sickle-cell disease.
            </p>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li>Patient Portal</li>
              <li>Support Groups</li>
              <li>Publications</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <p>Email: info@hpic.org</p>
            <p>Phone: 1-800-HPIC-HELP</p>
            <p>Emergency: 911</p>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} HPIC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
