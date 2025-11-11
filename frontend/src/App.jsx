import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage/Home";
import Education from "./pages/Education/Education";
import Community from "./pages/Community/Community";
import Treatment from "./pages/Treatment/Treatment";
import Resources from "./pages/Resources/Resources";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/community" element={<Community />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
