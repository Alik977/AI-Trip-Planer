import "./Global.css";
import logo from "../assets/img/Logo.png";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbarlogo">
        <img src={logo} className="imglogo" alt="" />
      </div>
      
        <div className="navbarlist">
          <li>Destination</li>
          <li>Trip Planner</li>
          <li>About</li>
          <li>Contact</li>
       
      </div>

      <div className="navbarbutton">
        <button className="buttonnav">Sign IN</button>
      </div>
    </div>
  );
}
export default Navbar;
