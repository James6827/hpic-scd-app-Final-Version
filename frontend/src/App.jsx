import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./pages/HomePage/Home";
import InfoSection from "./pages/Information section/InfoSection";

// Pages
import Symptoms from "./Navbar/buttons/Symptoms";
import Treatment from "./Navbar/buttons/Treatment";
import MyJournal from "./Navbar/buttons/MyJournal";
import Language from "./Navbar/buttons/Language";
import Login from "./Navbar/buttons/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/symptoms" element={<Symptoms />} />
            <Route path="/treatment" element={<Treatment />} />
            <Route path="/myjournal" element={<MyJournal />} /> {/* fixed */}
            <Route path="/ENFR" element={<Language />} />
            <Route path="/login" element={<Login />} /> 
          </Routes>
        </div>
        <InfoSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
