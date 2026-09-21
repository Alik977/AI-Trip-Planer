import "../pages/Pages.css";
import back from ".//../src/assets/img/back.png";
function About() {
  return (
    <div className="aboutallme">
      <div className="aboutmeleft">
        <h3>____ ABOUT US</h3>
        <h1>More Than a Planner Your AI Travel Companion</h1>
      </div>
      <div className="aboutmeright">
        <img src={back} alt="" />
      </div>
    </div>
  );
}
export default About;
