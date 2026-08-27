/*import "../pages/Pages.css";
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
      <button className="tripaibutton" > Generate My Trip ✨ </button>
      
      </div>
    </div>
  );
}
export default Home;*/
import "../pages/Pages.css";
import about from "..//src/assets/img/about.jpg";
import about2 from "..//src/assets/img/about1.jpg";
import about3 from "..//src/assets/img/arm.png";
import about4 from "..//src/assets/img/all.png";
import plan from "..//src/assets/img/plan.png";

import { useEffect, useState } from "react";

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [about, about2, about3,about4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
          <img
            src={images[currentImage]}
            alt=""
          />
        </div>
      </div>

      <div className="homebottom">
        <input
          type="text"
          className="tripinput"
          placeholder="Ask AI to plan your trip... ⭐"
        />
        <button className="tripaibutton">
          Generate My Trip ✨
        </button>
      </div>
    </div>
  );
}

export default Home;
