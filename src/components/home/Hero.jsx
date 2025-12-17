import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container">
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The dream team of former admissions directors from the world's top schools
        </motion.h1>

        <motion.p
          className="hero-subheading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We are a top ranked, global admissions consulting firm.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            variant="primary"
            size="large"
            onClick={() => navigate('/college/free-consultation')}
          >
            College Free Consult →
          </Button>
          <Button
            variant="primary"
            size="large"
            onClick={() => navigate('/mba/free-consultation')}
          >
            Business School Free Consult →
          </Button>
          <Button
            variant="primary"
            size="large"
            onClick={() => navigate('/law/free-consultation')}
          >
            Law School Free Consult →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
