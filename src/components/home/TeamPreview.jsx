import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CoachCard from '../team/CoachCard';
import Button from '../common/Button';
import { coaches } from '../../data/coaches';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import './TeamPreview.css';

const TeamPreview = () => {
  const navigate = useNavigate();
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
            src="/images/team/team-featured.jpg"
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
          <Button
            variant="outline"
            size="large"
            onClick={() => navigate('/college/team')}
          >
            College Coaches
          </Button>
          <Button
            variant="outline"
            size="large"
            onClick={() => navigate('/mba/team')}
          >
            MBA Coaches
          </Button>
          <Button
            variant="outline"
            size="large"
            onClick={() => navigate('/law/team')}
          >
            Law School Coaches
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
