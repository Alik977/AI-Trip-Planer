import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import Planner from "../pages/Planner.jsx";
import Distination from "./components/DestinationCard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Trip" element={<Planner />}></Route>
         <Route path="/Dest" element={<Distination />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
