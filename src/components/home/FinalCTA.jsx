import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { scaleIn } from '../../utils/animations';
import './FinalCTA.css';

const FinalCTA = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/apply');
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const formSection = document.getElementById('application-form');
      if (formSection) {
        formSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

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
              onClick={handleApplyNow}
            >
              Apply Now →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
