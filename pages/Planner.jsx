import "../pages/Pages.css";
import { useState } from "react";
function Planner() {
     const [travelStyle, setTravelStyle] = useState("Relaxed");
  const [interests, setInterests] = useState(["Food"]);
  const [travelWith, setTravelWith] = useState("Couple");

  const styles = ["Relaxed", "Adventure", "Luxury", "Budget"];
  const interestList = [
    "Food",
    "Nature",
    "History",
    "Nightlife",
    "Shopping",
  ];
  const companions = ["Solo", "Couple", "Friends", "Family"];

  const toggleInterest = (item) => {
    setInterests((prev) =>
      prev.includes(item)
        ? prev.filter((interest) => interest !== item)
        : [...prev, item]
    );
  };
  return (
    <div className="Aiplanner">
      <div className="Aitripleft">
        {" "}
        <div className="AitripH1">
          <h1>Plan Your Trip</h1>
          <p>Tell us your preferences and let Ai handle the rest</p>
        </div>
        <div className="formtrip">
           <br />
          <form>
            <label htmlFor="go" className="gotrip">
              Where do you want to go?
            </label>
           
            <input
              type="text"
              className="formtext"
              placeholder="Write country"
            />
            
            <br />
            <label htmlFor="day" className="daytrip">
              How many days?
            </label>
            <select name="days" id="days" className="formtext1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              
            </select>
            <br />
            <label htmlFor="money" className="Moneytrip">
              Budget
            </label>
            <br />
            <input
              type="text"
              className="formtext"
              placeholder="Write country"
            />
          </form>
        </div>
        <div className="homebottom1">
          <input
            type="text"
            className="tripinput1"
            placeholder="Ask AI to plan your trip... ⭐"
          />
          <button className="tripaibutton1"> Generate My Trip ✨ </button>
        </div>
         <div className="preferences">

      {/* Travel Style */}
      <div className="preference-section">
        <h3>Travel Style</h3>

        <div className="buttons">
          {styles.map((style) => (
            <button
              key={style}
              className={travelStyle === style ? "selected" : ""}
              onClick={() => setTravelStyle(style)}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="preference-section">
        <h3>Interests (Select all that apply)</h3>

        <div className="buttons">
          {interestList.map((interest) => (
            <button
              key={interest}
              className={interests.includes(interest) ? "selected" : ""}
              onClick={() => toggleInterest(interest)}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      {/* Traveling With */}
      <div className="preference-section">
        <h3>Who are you traveling with?</h3>

        <div className="buttons">
          {companions.map((person) => (
            <button
              key={person}
              className={travelWith === person ? "selected" : ""}
              onClick={() => setTravelWith(person)}
            >
              {person}
            </button>
          ))}
        </div>
      </div>

    </div>
      </div>
      

   

  
   
 <div className="Aitripright">
        <div className="ai-loader">
          <div className="ai-orbit ai-orbit-1"></div>
          <div className="ai-orbit ai-orbit-2"></div>
          <div className="ai-orbit ai-orbit-3"></div>

          <div className="ai-dots"></div>

          <div className="ai-core">
            <span>AI</span>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Planner;
