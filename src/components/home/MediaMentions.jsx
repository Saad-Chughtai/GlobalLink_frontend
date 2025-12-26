import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import './MediaMentions.css';

const publications = [
  { id: 1, name: 'Forbes', logo: '/images/logos/image-69.png' },
  { id: 2, name: 'Times Higher Education', logo: '/images/logos/image-66.png' },
  { id: 3, name: 'The Economist', logo: '/images/logos/theeconomistlogo-min-1024x500.png' },
  { id: 4, name: 'CNN', logo: '/images/logos/image.png' },
  { id: 5, name: 'Bloomberg', logo: '/images/logos/image-65.png' },
  { id: 6, name: 'NBC', logo: '/images/logos/image-1.png' },
  { id: 7, name: 'Wall Street Journal', logo: '/images/logos/WSJ.png' },
  { id: 8, name: 'Poets&Quants', logo: '/images/logos/poetsandquants-logo.png' },
  { id: 9, name: 'Les Echos', logo: '/images/logos/les-echos.png' },
  { id: 10, name: 'South China Morning Post', logo: '/images/logos/South-China_Morning-Post.png' },
  { id: 11, name: 'Handelsblatt', logo: '/images/logos/Handelsblatt_logo.png' },
  { id: 12, name: 'The Times of India', logo: '/images/logos/The-Times-India-1024x484.png' },
];

const MediaMentions = () => {
  return (
    <section className="media-mentions">
      <div className="container">
        <div className="media-mentions-content">
          <motion.div
            className="media-mentions-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="media-mentions-heading"
              variants={fadeInUp}
            >
              Globally Recognized Experts in Education & Admissions
            </motion.h2>
            <motion.p
              className="media-mentions-subheading"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              As education industry veterans, the Global Link team is regularly sought out by journalists and media outlets worldwide for expert insights on admissions trends and strategies.
            </motion.p>
          </motion.div>
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
      </div>
    </section>
  );
};

export default MediaMentions;
