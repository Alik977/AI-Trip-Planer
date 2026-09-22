import "../pages/Pages.css";
import plane from "../src/assets/img/icon/airplane.png"
import map from "../src/assets/img/icon/globe.png"
import Ai from "../src/assets/img/icon/star.png"
import support from "../src/assets/img/icon/support_247.png"
function About() {
  return (
    <div className="aboutallme">

  <div className="about-content">

    <div className="aboutus">
      About Us
    </div>

    <h1 className="more">
      More Than a Planner
      <br />
      Your{" "}
      <span className="aitravelcomp">
        AI Travel Companion
      </span>
    </h1>

    <p className="about-description">
      AI Trip Planner is built for dreamers, explorers and curious minds.
      We use the power of artificial intelligence to turn your travel ideas
      into real, personalized itineraries — in seconds.
    </p>

    <div className="about-stats">

      <div className="about-stat">
        <img src={plane} alt="" />
        <strong>10K+</strong>
        <span>Happy Travelers</span>
      </div>

      <div className="about-stat">
        <img src={map} alt="" />
        <strong>50+</strong>
        <span>Destinations</span>
      </div>

      <div className="about-stat">
        <img src={Ai} alt="" />
        <strong>AI</strong>
        <span>Powered Planning</span>
      </div>

      <div className="about-stat">
        <img src={support} alt="" />
        <strong>24/7</strong>
        <span>Support</span>
      </div>

    </div>

  </div>


  

  

</div>
  );
}
export default About;
