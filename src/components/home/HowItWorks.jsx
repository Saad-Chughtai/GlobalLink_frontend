import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import './HowItWorks.css';

const steps = [
  {
    id: 1,
    number: '1',
    title: 'Book your free consultation',
    description: 'Gain strategic insights and candid feedback on your candidacy from a Fortuna expert.',
    image: '/images/process/step1.jpg',
  },
  {
    id: 2,
    number: '2',
    title: 'Personalized coaching, step by step',
    description: "We craft a tailored strategy and guide you through the application process, leveraging our team's collective expertise at key intervals.",
    image: '/images/process/step2.jpg',
  },
  {
    id: 3,
    number: '3',
    title: 'Get admitted',
    description: 'Secure your place at a top institution, just like thousands of successful Fortuna clients before you.',
    image: '/images/process/step3.jpg',
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
          Your Story. Our Expertise. Admissions Success.
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
                <img
                  src={step.image}
                  alt={step.title}
                  className="step-image"
                  loading="lazy"
                />
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
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
