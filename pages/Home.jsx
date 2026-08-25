import "../pages/Pages.css";
import about from "..//src/assets/img/about.jpg";
import plan from "..//src/assets/img/plan.png";
function Home() {
  return (
    <div className="aiplaner">
      {" "}
      <div className="home">
        <div className="homeleft">
          <div className="homeparagraph">
            <div className="homeh1">
              <h1>
                Your AI Travel Plan in{" "}
                <span className="hometext"> Seconds </span>
              </h1>
            </div>
            <p className="travelparagraph">✈️ Plan Less. Travel More.</p>
          </div>
          <img src={plan} alt="" className="plantext" />
        </div>
        <div className="homeright">
          <img src={about} alt="" />
        </div>
      </div>
      <div className="homebottom">
        <input type="text" className="tripinput" placeholder="Ask AI to plan your trip... ⭐" />
      <button className="tripaibutton"> Generate My Trip ✨ </button>
      
      </div>
    </div>
  );
}
export default Home;
