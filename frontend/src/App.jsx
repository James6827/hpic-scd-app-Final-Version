import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage/Home"

// Pages
import Symptoms from "./pages/Symptoms";
import Treatment from "./pages/Treatment";
import Community from "./pages/Community/Community";
import Education from "./pages/Education";

import "./App.css";

function App() {
// layout of the contents of the app
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;