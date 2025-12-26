import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ensure layout is stable before showing content
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600); // Slightly longer delay to ensure CSS is loaded
    
    const counterTimer = setInterval(() => {
      setCounter((prev) => {
        if (prev < 97) return prev + 1;
        clearInterval(counterTimer);
        return prev;
      });
    }, 40);

    return () => {
      clearTimeout(timer);
      clearInterval(counterTimer);
    };
  }, []);

  const scrollToSchools = () => {
    const schoolsSection = document.getElementById('schools-section');
    if (schoolsSection) {
      schoolsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      {/* Content with Speed X alignment structure */}
      <div className="hero-content-wrapper">
        <div className="hero-content-container">
          <div
            className={`hero-content-inner ${
              isVisible ? "hero-visible" : "hero-hidden"
            }`}
          >
            {/* Heading - Speed X Style */}
            <h1 className="hero-heading-speedx">
              <span className="hero-brand-gradient">Global</span>
              <br />
              <span className="hero-brand-white">Link</span>
            </h1>

            {/* Subtext - Speed X Style */}
            <p className="hero-subheading-speedx">
              We help students find the{" "}
              <span className="hero-highlight">best academic opportunities</span>{" "}
              while we handle the applications and admissions process.
            </p>

            {/* CTA Buttons - Speed X style positioning */}
            <div className="hero-cta-speedx">
              <button 
                onClick={() => navigate('/apply')}
                className="btn-speedx btn-primary-speedx"
              >
                <svg
                  className="btn-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Free Consultation</span>
              </button>
              
              <button
                onClick={scrollToSchools}
                className="btn-speedx btn-outline-speedx"
              >
                Learn More
              </button>
            </div>

            {/* Stats Counter - Speed X Style */}
            <div className="hero-stats-speedx">
              <div className="stats-card-speedx">
                <div className="stats-number-speedx">
                  {counter}%
                </div>
                <div className="stats-label-speedx">
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
