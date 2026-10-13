import "./Global.css";
import logo from "../assets/img/Logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="Navbar">
      <div className="navbarlogo">
        <img src={logo} className="imglogo" alt="AI Trip Planner logo" />
      </div>

      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "×" : "☰"}
      </button>

      <div className={`navbarlist${menuOpen ? " is-open" : ""}`}>
        <NavLink className="list" to="/home" onClick={closeMenu}>
          <li>Home</li>
        </NavLink>
        <NavLink className="list" to="/Dest" onClick={closeMenu}>
          {" "}
          <li>Destination</li>
        </NavLink>
        <NavLink className="list" to="/Trip" onClick={closeMenu}>
          <li>Trip Planner</li>
        </NavLink>
        <NavLink className="list" to="/About" onClick={closeMenu}>
          <li>About</li>
        </NavLink>
        <NavLink className="list" to="/contact" onClick={closeMenu}>
          <li>Contact</li>
        </NavLink>
      </div>

      <div className="navbarbutton">
        <button className="buttonnav">Sign IN</button>
      </div>
    </div>
  );
}
export default Navbar;
