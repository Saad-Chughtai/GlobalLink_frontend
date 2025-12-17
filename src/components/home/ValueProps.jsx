import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { features } from '../../data/features';
import Card from '../common/Card';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import './ValueProps.css';

const stats = [
  {
    id: 1,
    label: 'Expert Coaches',
    value: 40,
    suffix: '+',
  },
  {
    id: 2,
    label: 'Years of AdCom Experience',
    value: 175,
    suffix: '+',
  },
  {
    id: 3,
    label: 'Applications Reviewed',
    value: 200,
    suffix: 'K+',
  },
  {
    id: 4,
    label: 'Five-Star Client Reviews',
    value: 1000,
    suffix: '+',
  },
  {
    id: 5,
    label: 'Improved Admission Odds',
    value: 300,
    suffix: '%',
  },
  {
    id: 6,
    label: 'Clients From Word-Of-Mouth Referrals',
    value: 40,
    suffix: '%',
  },
];

const AnimatedCounter = ({ value, suffix, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });
  const countRef = useRef(0);

  useEffect(() => {
    if (isInView) {
      const startValue = 0;
      const endValue = value;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        countRef.current = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

        if (ref.current) {
          if (suffix === 'K+') {
            ref.current.textContent = countRef.current + suffix;
          } else if (suffix === '+' && endValue >= 1000) {
            ref.current.textContent = countRef.current.toLocaleString() + suffix;
          } else {
            ref.current.textContent = countRef.current.toLocaleString() + suffix;
          }
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          countRef.current = endValue;
          if (ref.current) {
            if (suffix === 'K+') {
              ref.current.textContent = endValue + suffix;
            } else if (suffix === '+' && endValue >= 1000) {
              ref.current.textContent = endValue.toLocaleString() + suffix;
            } else {
              ref.current.textContent = endValue.toLocaleString() + suffix;
            }
          }
        }
      };

      animate();
    }
  }, [isInView, value, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
};

const ValueProps = () => {
  return (
    <section className="value-props">
      <div className="container">
        <div className="value-props-content">
          {/* Left Side - Statistics */}
          <motion.div
            className="stats-section-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="value-props-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              What Makes Fortuna Different
            </motion.h2>
            <div className="stats-grid">
              {stats.map((stat) => (
                <motion.div key={stat.id} className="stat-item" variants={fadeInUp}>
                  <div className="stat-value">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="stat-underline"></div>
                  <h3 className="stat-label">{stat.label}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Feature Cards */}
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
      </div>
    </section>
  );
};

export default ValueProps;
