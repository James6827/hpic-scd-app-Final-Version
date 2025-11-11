import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/HomePage/Home";
import EarlyDetection from "./pages/EarlyDetection/EarlyDetection";
import TreatmentOptions from "./pages/TreatmentOptions/TreatmentOptions";
import Community from "./pages/Community/Community";
import Education from "./pages/Education/Education";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/early-detection" element={<EarlyDetection />} />
          <Route path="/treatment-options" element={<TreatmentOptions />} />
          <Route path="/community" element={<Community />} />
          <Route path="/education" element={<Education />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
