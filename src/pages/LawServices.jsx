import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/services/ServiceCard';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';
import { lawServices } from '../data/services';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import './LawServices.css';

const LawServices = () => {
  const navigate = useNavigate();

  // Transform lawServices data to match ServiceCard structure
  const transformedServices = lawServices.map((service, index) => ({
    id: index + 1,
    name: service.title,
    description: service.description,
    features: service.features || [],
    pricing: service.pricing || 'Contact us for pricing',
    featured: index === 0, // First service is featured
  }));

  return (
    <>
      <SEO 
        title="Law School Admissions Consulting Services"
        description="Expert law school admissions consulting from former admissions officers. LSAT prep, application support, and school selection guidance."
        keywords="law school admissions consulting, LSAT prep, law school application help, law school admissions"
        image="/images/law/og-image.jpg"
      />
      <div className="law-services-page">
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
              Law School Admissions Services
            </motion.h1>
            <motion.p
              className="services-hero-subtitle"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Expert guidance for your law school application journey.
            </motion.p>
          </div>
        </section>

        {/* Services */}
        <section className="popular-services">
          <div className="container">
            <motion.h2
              className="section-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our Law School Services
            </motion.h2>
            <motion.div
              className="services-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {transformedServices.map((service) => (
                <motion.div key={service.id} variants={fadeInUp}>
                  <ServiceCard service={service} />
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

export default LawServices;

