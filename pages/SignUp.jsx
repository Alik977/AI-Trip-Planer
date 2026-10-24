import "../pages/Pages.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import planesign from ".//../src/assets/img/planpng.png"
function Signup() {
  return (
    <div>
      <div className="formall">
        <div className="signleft">
          {" "}
          <h1>
            Start Your Next Adventure <span className="signh1">Today</span>
          </h1>
          <p>Create your account and let AI plan your dream trip</p>
       <img src={planesign} className="planesign" alt="" />
       </div>

        <form className="formsign" action=""></form>
      </div>
    </div>
  );
}
export default Signup;
