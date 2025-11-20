import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage/Home"

// Pages
import EarlyDetection from "./pages/EarlyDetection/EarlyDetection";
import TreatmentOptions from "./pages/TreatmentOptions/TreatmentOptions";
import Community from "./pages/Community/Community";
import Education from "./pages/Education/Education";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;