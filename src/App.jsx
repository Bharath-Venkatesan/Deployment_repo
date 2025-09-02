import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import HowItWorks from "./Pages/HowItWorks";
import Admin from "./Pages/Admin";  // ✅ Add Admin Page
import PatientForm from "./Pages/Patientform";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navbar always at the top */}
      <Navbar />

      {/* Main content */}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/admin" element={<Admin />} /> {/* Admin Route */}
          <Route path="/add-patient" element={<PatientForm />} />
        </Routes>
      </div>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
