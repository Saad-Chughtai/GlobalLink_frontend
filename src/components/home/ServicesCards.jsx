import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBuilding, FaGraduationCap, FaGavel } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import './ServicesCards.css';

const services = [
  {
    id: 1,
    title: 'Undergrad College Admissions',
    image: '/images/services/college-building.jpg',
    icon: FaBuilding,
    link: '/college',
    consultation: '/college/free-consultation',
  },
  {
    id: 2,
    title: 'Business School Admissions',
    image: '/images/services/business-school.jpg',
    icon: FaGraduationCap,
    link: '/mba',
    consultation: '/mba/free-consultation',
  },
  {
    id: 3,
    title: 'Law School Admissions',
    image: '/images/services/law-school.jpg',
    icon: FaGavel,
    link: '/law',
    consultation: '/law/free-consultation',
  },
];

const ServicesCards = () => {
  return (
    <section className="services-cards-section">
      <div className="container">
        <motion.h2
          className="services-cards-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          The Smarter Way to Apply to School
        </motion.h2>
        <motion.p
          className="services-cards-subheading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Leverage our insider expertise to open the doors to the school of your dreams.
        </motion.p>
        <motion.div
          className="services-cards-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={fadeInUp}>
                <div className="service-card">
                  <div className="service-card-image">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="service-card-content">
                    <div className="service-card-icon">
                      <Icon />
                    </div>
                    <h3 className="service-card-title">{service.title}</h3>
                    <div className="service-card-links">
                      <Link to={service.link} className="service-link">
                        Learn More →
                      </Link>
                      <Link to={service.consultation} className="service-link">
                        Free Consultation →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCards;

