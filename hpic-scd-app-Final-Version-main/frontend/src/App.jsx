import Signup from "./pages/Signup/Signup";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./pages/HomePage/Home";
import ScrollToTop from "./ScrollToTop";

// Pages
import Symptoms from "./Navbar/buttons/Symptoms";
import Treatment from "./Navbar/buttons/Treatment";
import MyJournal from "./Navbar/buttons/MyJournal";
import Language from "./Navbar/buttons/Language";
import Login from "./Navbar/buttons/Login";

// InfoSection pages
import TreatmentOptions from "./pages/InformationSection/TreatmentOptions/TreatmentOptions";
import Community from "./pages/InformationSection/Community/Community";
import Education from "./pages/InformationSection/Education/Education";
import EarlyDetection from "./pages/InformationSection/EarlyDetection/EarlyDetection";

import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/symptoms" element={<Symptoms />} />
            <Route path="/treatment" element={<Treatment />} />
            <Route path="/myjournal" element={<MyJournal />} />
            <Route path="/language" element={<Language />} />
            <Route path="/login" element={<Login />} />

            {/* Signup Page */}
            <Route path="/signup" element={<Signup />} />

            {/* InfoSection cards */}
            <Route path="/EarlyDetection" element={<EarlyDetection />} />
            <Route path="/TreatmentOptions" element={<TreatmentOptions />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/Education" element={<Education />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
