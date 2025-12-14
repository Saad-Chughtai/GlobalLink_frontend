import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import './MediaMentions.css';

const publications = [
  { id: 1, name: 'Forbes', logo: '/images/media/forbes.png' },
  { id: 2, name: 'Financial Times', logo: '/images/media/ft.png' },
  { id: 3, name: 'The Economist', logo: '/images/media/economist.png' },
  { id: 4, name: 'Bloomberg', logo: '/images/media/bloomberg.png' },
  { id: 5, name: 'Wall Street Journal', logo: '/images/media/wsj.png' },
  { id: 6, name: 'Poets&Quants', logo: '/images/media/pq.png' },
  { id: 7, name: 'Harvard Business Review', logo: '/images/media/hbr.png' },
  { id: 8, name: 'CNBC', logo: '/images/media/cnbc.png' },
];

const MediaMentions = () => {
  return (
    <section className="media-mentions">
      <div className="container">
        <motion.h2
          className="media-mentions-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Globally Recognized Experts in Education & Admissions
        </motion.h2>
        <motion.div
          className="media-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {publications.map((publication) => (
            <motion.div
              key={publication.id}
              className="media-item"
              variants={fadeInUp}
            >
              <img
                src={publication.logo}
                alt={publication.name}
                className="media-logo"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaMentions;
