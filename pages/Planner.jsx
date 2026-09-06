import "../pages/Pages.css";
import { useState } from "react";


const API_BASE_URL = "http://localhost:3001";

function Planner() {
  // Trip form fields
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("1");
  const [budget, setBudget] = useState("");
  const [aiPrompt, setAiPrompt] = useState("");

  // Preferences
  const [travelStyle, setTravelStyle] = useState("Relaxed");
  const [interests, setInterests] = useState(["Food"]);
  const [travelWith, setTravelWith] = useState("Couple");

  // Generation state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tripPlan, setTripPlan] = useState(null);

  const styles = ["Relaxed", "Adventure", "Luxury", "Budget"];
  const interestList = ["Food", "Nature", "History", "Nightlife", "Shopping"];
  const companions = ["Solo", "Couple", "Friends", "Family"];

  const toggleInterest = (item) => {
    setInterests((prev) =>
      prev.includes(item)
        ? prev.filter((interest) => interest !== item)
        : [...prev, item]
    );
  };

  const handleGenerate = async (e) => {
    e.preventDefault();

    if (!destination.trim()) {
      setError("Please tell us where you want to go.");
      return;
    }

    setLoading(true);
    setError(null);
    setTripPlan(null);

    const payload = {
      destination,
      days,
      budget,
      travelStyle,
      interests,
      travelWith,
      aiPrompt,
    };

    try {
      const res = await fetch(`${API_BASE_URL}/api/plan-trip`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(
          errBody.error || "The server couldn't generate a trip right now."
        );
      }

      const data = await res.json();
      setTripPlan(data);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
          <form onSubmit={handleGenerate}>
            <label htmlFor="go" className="gotrip">
              Where do you want to go?
            </label>

            <input
              id="go"
              type="text"
              className="formtext"
              placeholder="Write country"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />

            <br />
            <label htmlFor="days" className="daytrip">
              How many days?
            </label>
            <select
              name="days"
              id="days"
              className="formtext1"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <br />
            <label htmlFor="money" className="Moneytrip">
              Budget
            </label>
            <br />
            <input
              id="money"
              type="text"
              className="formtext"
              placeholder="e.g. $1500"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />

            <div className="homebottom1">
              <input
                type="text"
                className="tripinput1"
                placeholder="Ask AI to plan your trip... ⭐"
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
              />
              <button
                type="submit"
                className="tripaibutton1"
                disabled={loading}
              >
                {loading ? "Generating..." : "Generate My Trip ✨"}
              </button>
            </div>

            {error && (
              <p style={{ color: "#ff6b6b", marginTop: "8px" }}>{error}</p>
            )}
          </form>
        </div>
        <div className="preferences">
          {/* Travel Style */}
          <div className="preference-section">
            <h3>Travel Style</h3>

            <div className="buttons">
              {styles.map((style) => (
                <button
                  key={style}
                  type="button"
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
                  type="button"
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
                  type="button"
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
        <div className={`ai-loader${loading ? " loading" : ""}`}>
          <div className="ai-orbit ai-orbit-1"></div>
          <div className="ai-orbit ai-orbit-2"></div>
          <div className="ai-orbit ai-orbit-3"></div>

          <div className="ai-dots"></div>

          <div className="ai-core">
            <span>AI</span>
          </div>
        </div>

        {loading && <p style={{ marginTop: "16px" }}>Planning your trip...</p>}

        {tripPlan && (
          <div className="trip-result" style={{ marginTop: "24px", textAlign: "left" }}>
            <h3>Your Trip Plan</h3>
            <p>{tripPlan.summary}</p>
            {tripPlan.itinerary.map((d) => (
              <div key={d.day} style={{ marginTop: "12px" }}>
                <strong>Day {d.day}</strong>
                <ul>
                  {d.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Planner;