import "../pages/Pages.css";
function Planner() {
  return (
    <div className="Aiplanner">
      <div className="AitripH1">
        <h1>Plan Your Trip</h1>
        <p>Tell us your preferences and let Ai handle the rest</p>
      </div>
      <div className="homebottom1">
        <input
          type="text"
          className="tripinput1"
          placeholder="Ask AI to plan your trip... ⭐"
        />
        <button className="tripaibutton1"> Generate My Trip ✨ </button>
      </div>
    </div>
  );
}
export default Planner;
