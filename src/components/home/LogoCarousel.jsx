import { motion } from 'framer-motion';
import { schools } from '../../data/schools';
import { fadeInUp } from '../../utils/animations';
import './LogoCarousel.css';

const LogoCarousel = () => {
  // Select specific schools to match the screenshot layout
  // Carnegie Mellon, Cambridge, Stanford, Columbia, and Harvard
  const featuredSchoolIds = [18, 1, 19, 2, 3]; // IDs for: Carnegie Mellon, Cambridge, Stanford, Columbia, Harvard
  const featuredSchools = schools.filter(school => featuredSchoolIds.includes(school.id));

  return (
    <section className="logo-carousel-section">
      <div className="container">
        <motion.h2
          className="logo-carousel-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          More than 5,000 students gained admission to these schools thanks to Fortuna
        </motion.h2>
        <div className="logo-carousel-wrapper">
          <div className="logo-carousel-track">
            {featuredSchools.map((school) => (
              <div key={school.id} className="logo-carousel-item">
                <img
                  src={school.logo}
                  alt={school.name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;

