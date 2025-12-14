import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './Corporate.css';

const Corporate = () => {
  return (
    <>
      <SEO 
        title="Corporate Services"
        description="Fortuna Admissions offers corporate admissions consulting services for organizations supporting their employees' educational advancement."
        keywords="corporate admissions consulting, employee education support, corporate MBA programs, corporate law school admissions"
        image="/images/corporate/og-image.jpg"
      />
      <div className="corporate-page">
        {/* Hero Section */}
        <section className="corporate-hero">
          <div className="container">
            <motion.h1
              className="corporate-hero-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Corporate Services
            </motion.h1>
            <motion.p
              className="corporate-hero-subtitle"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Supporting your employees' educational advancement
            </motion.p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="corporate-overview">
          <div className="container">
            <motion.div
              className="overview-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp}>Why Partner With Fortuna</motion.h2>
              <motion.p variants={fadeInUp} className="overview-text">
                Many forward-thinking organizations invest in their employees' professional development 
                by supporting their pursuit of advanced degrees. Fortuna Admissions offers comprehensive 
                corporate services to help your employees successfully navigate the admissions process 
                for MBA, law school, and graduate programs.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="corporate-services">
          <div className="container">
            <motion.h2
              className="section-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Our Corporate Services
            </motion.h2>
            <motion.div
              className="services-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="service-item" variants={fadeInUp}>
                <h3>Group Workshops</h3>
                <p>
                  Customized workshops for your employees covering application strategy, essay writing, 
                  and interview preparation. Available in-person or virtually.
                </p>
              </motion.div>
              <motion.div className="service-item" variants={fadeInUp}>
                <h3>Individual Coaching</h3>
                <p>
                  One-on-one coaching sessions for employees pursuing advanced degrees. Flexible packages 
                  tailored to your organization's needs and budget.
                </p>
              </motion.div>
              <motion.div className="service-item" variants={fadeInUp}>
                <h3>Application Review</h3>
                <p>
                  Comprehensive review of applications before submission, ensuring your employees present 
                  their best candidacy to top programs.
                </p>
              </motion.div>
              <motion.div className="service-item" variants={fadeInUp}>
                <h3>Program Selection Guidance</h3>
                <p>
                  Strategic guidance to help employees identify programs that align with their career goals 
                  and your organization's needs.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="corporate-benefits">
          <div className="container">
            <motion.h2
              className="section-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Benefits for Your Organization
            </motion.h2>
            <motion.div
              className="benefits-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="benefit-item" variants={fadeInUp}>
                <h3>Employee Retention</h3>
                <p>
                  Supporting employees' educational goals demonstrates your commitment to their professional 
                  development, improving retention and engagement.
                </p>
              </motion.div>
              <motion.div className="benefit-item" variants={fadeInUp}>
                <h3>Enhanced Skills</h3>
                <p>
                  Employees who pursue advanced degrees bring new skills, perspectives, and networks back 
                  to your organization.
                </p>
              </motion.div>
              <motion.div className="benefit-item" variants={fadeInUp}>
                <h3>Competitive Advantage</h3>
                <p>
                  Offering educational support as a benefit helps attract top talent and positions your 
                  organization as an employer of choice.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="corporate-cta">
          <div className="container">
            <motion.h2
              className="cta-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Ready to Support Your Employees?
            </motion.h2>
            <motion.p
              className="cta-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Contact us to discuss how we can customize our services for your organization.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Link to="/contact">
                <Button size="large">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Corporate;

