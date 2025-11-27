import React from "react";
import "./TreatmentOptions.css"; 
export default function TreatmentOptions() {
  return (
    <div className="page-container">
      <h2 className="page-title">Treatment Options</h2>

      <div className="section-block">
        <h3>Managing Symptoms</h3>
        <p>
          Maintaining hydration, reducing stress, and avoiding extreme
          temperatures can help lower the risk of pain crises and other
          symptoms.
        </p>
      </div>

      <div className="section-block">
        <h3>Medical Treatments</h3>
        <ul>
          <li>Hydroxyurea therapy</li>
          <li>Blood transfusions</li>
          <li>Pain management medications</li>
          <li>Bone marrow transplant (in select cases)</li>
        </ul>
      </div>

      <div className="section-block">
        <h3>Ongoing Care</h3>
        <p>
          Regular check-ups with healthcare professionals ensure monitoring for
          complications and adjusting treatment plans as needed.
        </p>
      </div>
    </div>
  );
}
