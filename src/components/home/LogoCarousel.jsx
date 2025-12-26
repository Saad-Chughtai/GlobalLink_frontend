import { motion } from 'framer-motion';
import { schools } from '../../data/schools';
import { fadeInUp } from '../../utils/animations';
import './LogoCarousel.css';

const LogoCarousel = () => {
  // Duplicate schools array for seamless infinite scroll
  const duplicatedSchools = [...schools, ...schools, ...schools];

  return (
    <section id="schools-section" className="logo-carousel-section">
      <div className="container">
        <motion.h2
          className="logo-carousel-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          More than 5,000 students gained admission to these schools thanks to Global Link
        </motion.h2>
        <div className="logo-carousel-wrapper">
          <div className="logo-carousel-track">
            {duplicatedSchools.map((school, index) => (
              <div key={`${school.id}-${index}`} className="logo-carousel-item">
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

