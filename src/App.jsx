import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
