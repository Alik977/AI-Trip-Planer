import "./Global.css";
import logo from "../assets/img/Logo.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbarlogo">
        <img src={logo} className="imglogo" alt="" />
      </div>

      <div className="navbarlist">
        <NavLink className="list" to="/home">
          <li>Home</li>
        </NavLink>
        <NavLink className="list" to="/Dest">
          {" "}
          <li>Destination</li>
        </NavLink>
        <NavLink className="list" to="/Trip">
          <li>Trip Planner</li>
        </NavLink>
        <NavLink className="list" to="/About">
          <li>About</li>
        </NavLink>
        <NavLink className="list" to="/contact">
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
