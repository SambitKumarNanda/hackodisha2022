import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/HomePage/Navbar";
import HomePage from "./components/HomePage/HomePage";
import HospitalDetails from "./components/HospitalDetails/Details";
import FindHospital from "./components/HospitalList/HeroSection";
import AppointmentDetails from "./components/appointmentDetails/AppointmentDetails";
import FindDoctor from "./components/FindDoctor";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-hospital" element={<FindHospital />} />
        <Route path="/appointment/details" element={<AppointmentDetails />} />
        <Route path="/find-hospital/details" element={<HospitalDetails />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
