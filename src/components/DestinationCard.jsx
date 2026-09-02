import React, { useState } from "react";
import destinations from "../data/destinations";
import "../components/Global.css";

function Distination() {
  const [search, setSearch] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const filteredDestinations = destinations.filter((destination) =>
    `${destination.city} ${destination.country}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleExplore = (destination) => {
    setSelectedDestination(destination);
  };

  const closeModal = () => {
    setSelectedDestination(null);
  };

  return (
    <section className="popular-section">

      <div className="popular-header">
        <div>
          <h2>Popular Destinations</h2>
          <p>Discover amazing places around the world</p>
        </div>

        <div className="destination-search">
          <input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="clear-search"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="destinations-grid">

        {filteredDestinations.map((destination) => (
          <article
            className="destination-card"
            key={destination.id}
          >

            <img
              src={destination.image}
              alt={`${destination.city}, ${destination.country}`}
            />

            <div className="destination-overlay"></div>

            <div className="destination-content">

              <span className="destination-country">
                {destination.country}
              </span>

              <h3>{destination.city}</h3>

              <p>{destination.description}</p>

              <button
                className="explore-button"
                onClick={() => handleExplore(destination)}
              >
                Explore
                <span>→</span>
              </button>

            </div>

          </article>
        ))}

      </div>

      {filteredDestinations.length === 0 && (
        <div className="no-results">
          <span>🌍</span>
          <h3>No destinations found</h3>
          <p>Try searching for another city.</p>
        </div>
      )}

      {/* MODAL */}

      {selectedDestination && (
        <div
          className="destination-modal-background"
          onClick={closeModal}
        >

          <div
            className="destination-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={closeModal}
            >
              ×
            </button>

            <img
              className="modal-image"
              src={selectedDestination.image}
              alt={selectedDestination.city}
            />

            <div className="modal-content">

              <span className="modal-country">
                {selectedDestination.country}
              </span>

              <h2>{selectedDestination.city}</h2>

              <p>{selectedDestination.description}</p>

              <div className="modal-info">

                <div>
                  <span>🌍</span>
                  <strong>Destination</strong>
                  <small>
                    {selectedDestination.city},{" "}
                    {selectedDestination.country}
                  </small>
                </div>

                <div>
                  <span>✈️</span>
                  <strong>Perfect for</strong>
                  <small>
                    Travel & Adventure
                  </small>
                </div>

              </div>

              <button
                className="modal-plan-button"
                onClick={() => {
                  console.log(
                    "Plan trip to:",
                    selectedDestination.city
                  );
                }}
              >
                Plan My Trip ✨
              </button>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Distination;