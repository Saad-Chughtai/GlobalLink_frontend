import { motion } from 'framer-motion';
import { schools } from '../../data/schools';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import './LogoGrid.css';

const LogoGrid = () => {
  return (
    <section className="logo-grid-section">
      <div className="container">
        <motion.h2
          className="logo-grid-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          More than 5,000 students gained admission to these schools thanks to Global Link
        </motion.h2>
        <motion.div
          className="logo-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {schools.map((school) => (
            <motion.div
              key={school.id}
              className="logo-item"
              variants={fadeInUp}
            >
              <img
                src={school.logo}
                alt={school.name}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoGrid;
