import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import './MediaMentions.css';

const publications = [
  { id: 1, name: 'Forbes', logo: '/images/media/forbes.png' },
  { id: 2, name: 'Times Higher Education', logo: '/images/media/the.png' },
  { id: 3, name: 'The Economist', logo: '/images/media/economist.png' },
  { id: 4, name: 'CNN', logo: '/images/media/cnn.png' },
  { id: 5, name: 'Bloomberg', logo: '/images/media/bloomberg.png' },
  { id: 6, name: 'NBC', logo: '/images/media/nbc.png' },
  { id: 7, name: 'Wall Street Journal', logo: '/images/media/wsj.png' },
  { id: 8, name: 'Poets&Quants', logo: '/images/media/pq.png' },
  { id: 9, name: 'Les Echos', logo: '/images/media/les-echos.png' },
  { id: 10, name: 'South China Morning Post', logo: '/images/media/scmp.png' },
  { id: 11, name: 'Handelsblatt', logo: '/images/media/handelsblatt.png' },
  { id: 12, name: 'The Times of India', logo: '/images/media/times-india.png' },
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
        <motion.p
          className="media-mentions-subheading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          As education industry veterans, the Fortuna team is regularly sought out by journalists and media outlets worldwide for expert insights on admissions trends and strategies.
        </motion.p>
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
