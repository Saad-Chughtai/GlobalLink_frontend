import { motion } from 'framer-motion';
import { features } from '../../data/features';
import Card from '../common/Card';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import './ValueProps.css';

const ValueProps = () => {
  return (
    <section className="value-props">
      <div className="container">
        <motion.h2
          className="value-props-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          What Makes Fortuna Different
        </motion.h2>
        <motion.div
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div key={feature.id} variants={fadeInUp}>
                <Card hoverable padding="large" className="feature-card">
                  <div className="feature-icon">
                    <Icon />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProps;
