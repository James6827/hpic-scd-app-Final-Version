import React from "react";
import "./earlyDetection.css"; // or shared theme file

export default function EarlyDetection() {
  return (
    <div className="page-container">
      <h2 className="page-title">Early Detection</h2>

      <div className="section-block">
        <h3>Why Early Detection Is Important</h3>
        <p>
          Early diagnosis of Sickle Cell Disease allows individuals to begin
          preventive care that can reduce complications and improve long-term
          outcomes. Screening programs ensure newborns receive prompt treatment.
        </p>
      </div>

      <div className="section-block">
        <h3>Common Screening Methods</h3>
        <ul>
          <li>Newborn screening tests</li>
          <li>Hemoglobin electrophoresis</li>
          <li>Genetic testing for carrier status</li>
        </ul>
      </div>
    </div>
  );
}
