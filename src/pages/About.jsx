import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './About.css';

const aboutStats = [
  {
    id: 1,
    label: 'Students Admitted',
    value: 5000,
    suffix: '+',
  },
  {
    id: 2,
    label: 'Years of Experience',
    value: 13,
    suffix: '+',
  },
  {
    id: 3,
    label: 'Higher Admission Rate',
    value: 3,
    suffix: 'x',
  },
  {
    id: 4,
    label: 'Referral Rate',
    value: 40,
    suffix: '%',
  },
];

const AnimatedCounter = ({ value, suffix, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });
  const countRef = useRef(0);

  useEffect(() => {
    if (isInView) {
      const startValue = 0;
      const endValue = value;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        countRef.current = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

        if (ref.current) {
          if (suffix === '+' && endValue >= 1000) {
            ref.current.textContent = countRef.current.toLocaleString() + suffix;
          } else {
            ref.current.textContent = countRef.current.toLocaleString() + suffix;
          }
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          countRef.current = endValue;
          if (ref.current) {
            if (suffix === '+' && endValue >= 1000) {
              ref.current.textContent = endValue.toLocaleString() + suffix;
            } else {
              ref.current.textContent = endValue.toLocaleString() + suffix;
            }
          }
        }
      };

      animate();
    }
  }, [isInView, value, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
};

const About = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/apply');
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const formSection = document.getElementById('application-form');
      if (formSection) {
        formSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };
  return (
    <>
      <SEO 
        title="About Us - Elite Admissions Team Led by Former Decision-Makers"
        description="Learn about Global Link Admissions - founded by former admissions directors from Harvard, Stanford, and other top schools. We bring insider expertise to your admissions journey."
        keywords="about Global Link Admissions, former admissions directors, elite admissions consulting, Harvard Stanford admissions experts"
        image="/images/about/og-image.jpg"
      />
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          {/* Content with Speed X alignment structure */}
          <div className="about-hero-content-wrapper">
            <div className="about-hero-content-container">
              <div className="about-hero-content-inner about-hero-visible">
                {/* Heading - Speed X Style */}
                <h1 className="about-hero-heading-speedx">
                  <span className="about-hero-brand-gradient">Elite Admissions</span>
                  <br />
                  <span className="about-hero-brand-white">Authority</span>
                </h1>

                {/* Subtext - Speed X Style */}
                <p className="about-hero-subheading-speedx">
                  We are a leading admissions consultancy dedicated to helping ambitious students navigate the highly competitive admissions process at the world’s most prestigious academic institutions.
                  {/* <span className="about-hero-highlight">because we've been there</span> */}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section - Matching Home Page Style */}
        <section className="about-intro-section">
          <div className="container">
            <div className="about-intro-content">
              <h2 className="about-intro-heading">
                We know what matters to Admissions Committees – {" "}
                <span className="about-sub-highlight">because we've been there</span>
              </h2>

              <div className="about-intro-text-wrapper">
                <p className="about-intro-text">
                  Our team consists of <strong>former top-tier college admissions officers and experienced consultants</strong> who bring first hand expertise in academic excellence and competitive college admissions.
                </p>
                <p className="about-intro-text">
                  Using a team-based, high-touch approach, we offer personalized, strategic admissions guidance to help students not only get accepted into their dream schools, but find the best-fit college where they can flourish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-story">
          <div className="container">
            <motion.div
              className="story-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp}>Our Story – From Inside the Admissions Office to Your Side of the Table</motion.h2>
              <motion.p variants={fadeInUp} className="story-text">
                Global Link Admissions was founded in 2012 by former admissions directors and an education industry expert who saw a gap in the industry – too many applicants navigating a high-stakes process without access to honest, accurate guidance. We created Global Link to change that.
              </motion.p>
              <motion.p variants={fadeInUp} className="story-text">
                From our earliest days, our goal has been to provide an ethical, personalized, and deeply strategic approach to competitive admissions. We've walked the halls of the Ivy League schools, led hundreds of admissions committees, and reviewed thousands of applications. Today, we bring that insider expertise directly to you – empowering applicants around the world to pursue their dreams with confidence and clarity.
              </motion.p>
              <motion.p variants={fadeInUp} className="story-text">
                What began as a small group of passionate admissions professionals has grown into a global team united by a common purpose: guiding families through the evolving landscape of higher education, offering personalized roadmaps to top-tier colleges across the United States, Canada, the UK, and Continental Europe.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Values Section - Matching Home Page ValueProps Style */}
        <section className="about-values">
          <div className="container">
            <div className="about-values-content">
              {/* Left Side - Statistics */}
              <div className="about-stats-section-wrapper">
                <h2 className="about-values-heading">
                  What Makes Us Different
                </h2>
                <div className="about-stats-grid">
                  {aboutStats.map((stat) => (
                    <div key={stat.id} className="about-stat-item">
                      <div className="about-stat-value">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="about-stat-underline"></div>
                      <h3 className="about-stat-label">{stat.label}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Feature Cards */}
              <div className="about-features-grid">
                <div className="about-feature-card">
                  <div className="about-feature-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="about-feature-title">Insider Expertise</h3>
                  <p className="about-feature-description">
                    Our team consists of former admissions directors and officers from top schools. 
                    We've evaluated thousands of applications and know exactly what admissions committees are looking for.
                  </p>
                </div>

                <div className="about-feature-card">
                  <div className="about-feature-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                    </svg>
                  </div>
                  <h3 className="about-feature-title">Personalized Approach</h3>
                  <p className="about-feature-description">
                    As a boutique firm, we work with a select number of clients. Our high-touch coaching 
                    is fully customized to your needs, pairing you with a dedicated coach while drawing 
                    on the expertise of our entire team.
                  </p>
                </div>

                <div className="about-feature-card">
                  <div className="about-feature-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h3 className="about-feature-title">Proven Results</h3>
                  <p className="about-feature-description">
                    Working with Global Link more than triples your chances of admission. That's why 40% of 
                    our clients are referred by former clients - they know we deliver.
                  </p>
                </div>

                <div className="about-feature-card">
                  <div className="about-feature-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="about-feature-title">Global Reach</h3>
                  <p className="about-feature-description">
                    With team members across the globe, we understand the nuances of different markets 
                    and can help you navigate the admissions process regardless of where you're applying from.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section - Matching Home Page FinalCTA Style */}
        <section className="about-final-cta">
          <div className="container">
            <div className="about-final-cta-content">
              <h2 className="about-final-cta-heading">
                Ready to Start Your Journey? <strong>We'll guide you there.</strong>
              </h2>
              <div className="about-final-cta-buttons">
                <Button
                  variant="primary"
                  size="large"
                  onClick={handleApplyNow}
                >
                  Apply Now →
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

