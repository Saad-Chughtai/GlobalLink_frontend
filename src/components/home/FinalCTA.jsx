import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { scaleIn } from '../../utils/animations';
import './FinalCTA.css';

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="final-cta">
      <div className="container">
        <motion.div
          className="final-cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
        >
          <motion.h2
            className="final-cta-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ delay: 0.2 }}
          >
            You bring the ambition. <strong>We'll bring the strategy.</strong>
          </motion.h2>
          <motion.p
            className="final-cta-subheading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ delay: 0.3 }}
          >
            Get candid feedback and strategic advice from former admissions decision-makers
          </motion.p>
          <motion.div
            className="final-cta-buttons"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate('/college/free-consultation')}
            >
              College Free Consultation →
            </Button>
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate('/mba/free-consultation')}
            >
              MBA Free Consultation →
            </Button>
            <Button
              variant="primary"
              size="large"
              onClick={() => navigate('/law/free-consultation')}
            >
              Law Free Consultation →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
