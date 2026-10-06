import Navbar from "./components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import Planner from "../pages/Planner.jsx";
import Distination from "./components/DestinationCard.jsx";
import About from "../pages/About.jsx";
import Contact from "./components/Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import arrowup from ".//assets/img/icon/arrow-up.png";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
     <a href="#top">
        <img src={arrowup} alt="" className="arrow" />
      </a>
      <Navbar />
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/Trip" element={<Planner />} />
        <Route path="/planner" element={<Planner />} />

        <Route path="/Dest" element={<Distination />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
