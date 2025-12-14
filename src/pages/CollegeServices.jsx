import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/services/ServiceCard';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';
import { collegeServices } from '../data/services';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import './CollegeServices.css';

const CollegeServices = () => {
  const navigate = useNavigate();

  // Transform collegeServices data to match ServiceCard structure
  const transformedServices = collegeServices.map((service, index) => ({
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
        title="College Admissions Consulting Services"
        description="Expert college admissions consulting from former admissions officers. College counseling, essay support, and test prep strategy."
        keywords="college admissions consulting, college counseling, college application help, undergraduate admissions"
        image="/images/college/og-image.jpg"
      />
      <div className="college-services-page">
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
              College Admissions Services
            </motion.h1>
            <motion.p
              className="services-hero-subtitle"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Expert guidance for your undergraduate college application journey.
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
              Our College Services
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

export default CollegeServices;

