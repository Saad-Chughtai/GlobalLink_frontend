import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/services/ServiceCard';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';
import { mbaServices } from '../data/services';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import './MBAServices.css';

const MBAServices = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="MBA Admissions Consulting Services"
        description="Expert MBA admissions consulting from former admissions directors. All-inclusive packages, hourly coaching, and school-specific interview prep."
        keywords="MBA admissions consulting, MBA application help, MBA interview prep, business school admissions"
        image="/images/mba/og-image.jpg"
      />
      <div className="mba-services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <motion.h1
            className="services-hero-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Pick The Service That's Right For You
          </motion.h1>
          <motion.p
            className="services-hero-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Getting into top schools isn't easy, but we've got your back.
          </motion.p>
        </div>
      </section>

      {/* Popular Services */}
      <section className="popular-services">
        <div className="container">
          <motion.h2
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Most Popular Services
          </motion.h2>
          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {mbaServices.popular.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* School-Specific Prep */}
      <section className="school-specific">
        <div className="container">
          <motion.h2
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            School-Specific Interview Prep
          </motion.h2>
          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {mbaServices.schoolSpecific.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <ServiceCard service={service} showLogo />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <motion.h2
            className="cta-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            Ready to get started?
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Button
              size="large"
              onClick={() => navigate('/free-consultation')}
            >
              Book Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default MBAServices;
