import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import './HowItWorks.css';

const steps = [
  {
    id: 1,
    number: '1',
    title: 'Book your free consultation',
    description: 'Get honest, strategic feedback oyourn your candidacy from a Fortuna expert.',
    image: '/images/process/1.png',
  },
  {
    id: 2,
    number: '2',
    title: 'Personalized coaching, step by step',
    description: 'Get honest, strategic feedback oyourn your candidacy from a Fortuna expert.',
    image: '/images/process/2.webp',
  },
  {
    id: 3,
    number: '3',
    title: 'Get admitted',
    description: 'Get honest, strategic feedback oyourn your candidacy from a Fortuna expert.',
    image: '/images/process/3.png',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <motion.h2
          className="how-it-works-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="how-it-works-subtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Your Journey. Our Insight. Admission Success.
        </motion.p>
        <motion.div
          className="steps-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="step"
              variants={fadeInUp}
            >
              <div className="step-number">
                <span>{step.number}</span>
              </div>
              <div className="step-content">
                
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              <img
                  src={step.image}
                  alt={step.title}
                  className="step-image"
                  loading="lazy"
                />
              {index < steps.length - 1 && (
                <div className="step-connector" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
