import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage/Home";
import Education from "./pages/Education/Education";
import Community from "./pages/Community/Community";
import TreatmentOptions from "./pages/TreatmentOptions/TreatmentOptions";
import EarlyDetection from "./pages/EarlyDetection/EarlyDetection";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/community" element={<Community />} />
        <Route path="/treatment options" element={<TreatmentOptions />} />
        <Route path="/earlydetection" element={<EarlyDetection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
