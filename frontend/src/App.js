import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from "./Pages/Profile";

import Home from "./Pages/Home";
import QA from "./Pages/QA";
import TC from "./Pages/TC";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/QA" element={<QA/>} />
        <Route path="/TC" element={<TC/>} /> 
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
