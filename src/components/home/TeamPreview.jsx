import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CoachCard from '../team/CoachCard';

import { coaches } from '../../data/coaches';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import './TeamPreview.css';

const TeamPreview = () => {
  // Show first 8 coaches
  const previewCoaches = coaches.slice(0, 8);

  return (
    <section className="team-preview">
      <div className="container">
        <motion.h2
          className="team-preview-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Meet the Dream Team
        </motion.h2>
        <motion.p
          className="team-preview-subtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          At Fortuna, over the past 13 years we've assembled an unparalleled team
          of admissions coaches who used to run the admissions offices at top schools.
        </motion.p>
        <motion.div
          className="team-featured-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <img
            src="/images/team/team.webp"
            alt="Fortuna Admissions Team"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="team-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
         <Link to="/college/team" className="team-preview-link">
            College Coaches →
          </Link>
          <Link to="/mba/team" className="team-preview-link">
            MBA Coaches →
          </Link>
          <Link to="/law/team" className="team-preview-link">
            Law School Coaches →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
