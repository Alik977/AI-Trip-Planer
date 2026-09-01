import "../pages/Pages.css";

import about from "../src/assets/img/about.jpg";
import about2 from "../src/assets/img/about1.jpg";
import about3 from "../src/assets/img/armenia.jpg";
import about4 from "../src/assets/img/all.jpg";
import about5 from "../src/assets/img/aboutreal.jpg";
import about6 from "../src/assets/img/Egipt.jpg";
import about7 from "../src/assets/img/Greece.jpg";
import about8 from "../src/assets/img/italy.jpg";
import about9 from "../src/assets/img/sweeden.jpg";
import about10 from "../src/assets/img/Spain.jpg";
import plan from "../src/assets/img/plan.png";

import { useState } from "react";

function Home() {
  const slides = [
    {
      image: about,
      title: "France",
      subtitle: "Explore Paris",
      description: "Discover beautiful places with AI",
    },
    {
      image: about2,
      title: "England",
      subtitle: "London",
      description: "Your next adventure starts here",
    },
    {
      image: about3,
      title: "Armenia",
      subtitle: "The Land of Noah",
      description: "Where ancient history meets breathtaking landscapes",
    },
    {
      image: about4,
      title: "World",
      subtitle: "Travel Anywhere",
      description: "Let AI create your perfect journey",
    },
    {
      image: about5,
      title: "Georgia",
      subtitle: "Tbilisi & Beyond",
      description: "Discover ancient beauty and unforgettable adventures",
    },
    {
      image: about6,
      title: "Egypt",
      subtitle: "Land of Pharaohs",
      description: "Where ancient history meets endless adventure",
    },
    {
      image: about7,
      title: "Greece",
      subtitle: "Land of Legends",
      description: "Where ancient history meets the endless blue",
    },
    {
      image: about8,
      title: "Italy",
      subtitle: "La Dolce Vita",
      description: "Where history, beauty and passion come together",
    },
    {
      image: about9,
      title: "Sweden",
      subtitle: "Nordic Escape",
      description: "Where nature, design and adventure come together",
    },
    {
      image: about10,
      title: "Spain",
      subtitle: "Viva España",
      description:
        "Discover colorful streets, golden beaches and unforgettable moments",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getSlideClass = (index) => {
    const total = slides.length;

    if (index === currentSlide) {
      return "travel-slide active";
    }

    if (index === (currentSlide + 1) % total) {
      return "travel-slide next";
    }

    if (index === (currentSlide - 1 + total) % total) {
      return "travel-slide previous";
    }

    return "travel-slide hidden";
  };

  return (
    <div className="aiplaner">
      <div
        className="travel-background"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      ></div>

      <div className="home">
        <div className="homeleft">
          <div className="homeparagraph">
            <div className="homeh1">
              <h1>
                Your AI Travel Plan in <span className="hometext">Seconds</span>
              </h1>
            </div>

            <p className="travelparagraph">✈️ Plan Less. Travel More.</p>
          </div>

          <img src={plan} alt="AI Travel Plan" className="plantext" />
        </div>

        {/* TRAVEL SLIDER */}

        <div className="travel-slider">
          <button className="slider-btn slider-prev" onClick={prevSlide}>
            ←
          </button>

          <div className="slides-container">
            {slides.map((slide, index) => (
              <div key={index} className={getSlideClass(index)}>
                <div className="slide-inner">
                  <img src={slide.image} alt={slide.title} />

                  <div className="slide-overlay"></div>

                  <div className="slide-info">
                    <h2>{slide.title}</h2>

                    <h3>{slide.subtitle}</h3>

                    <p>{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn slider-next" onClick={nextSlide}>
            →
          </button>
        </div>
      </div>

      <div className="homebottom">
        <input
          type="text"
          className="tripinput"
          placeholder="Ask AI to plan your trip... ⭐"
        />

        <button className="tripaibutton">Generate My Trip ✨</button>
      </div>
    </div>
  );
}

export default Home;
