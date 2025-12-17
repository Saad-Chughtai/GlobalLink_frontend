import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './About.css';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Global Link Admissions - a top-ranked global admissions consulting firm with former admissions directors from the world's top schools."
        keywords="about Global Link Admissions, admissions consulting firm, former admissions directors, MBA admissions consultants"
        image="/images/about/og-image.jpg"
      />
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <motion.h1
              className="about-hero-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              About Global Link Admissions
            </motion.h1>
            <motion.p
              className="about-hero-subtitle"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              The dream team of former admissions directors from the world's top schools
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <div className="container">
            <motion.div
              className="mission-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp}>Our Mission</motion.h2>
              <motion.p variants={fadeInUp} className="mission-text">
                At Global Link Admissions, we believe that every candidate has a unique story worth telling. 
                Our mission is to help you tell that story in a way that resonates with admissions committees 
                at the world's top schools. With over 13 years of experience and a team of former admissions 
                directors, we've helped thousands of students gain admission to their dream schools.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="container">
            <motion.h2
              className="section-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              What Makes Us Different
            </motion.h2>
            <motion.div
              className="values-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="value-item" variants={fadeInUp}>
                <h3>Insider Expertise</h3>
                <p>
                  Our team consists of former admissions directors and officers from top schools. 
                  We've evaluated thousands of applications and know exactly what admissions committees are looking for.
                </p>
              </motion.div>
              <motion.div className="value-item" variants={fadeInUp}>
                <h3>Personalized Approach</h3>
                <p>
                  As a boutique firm, we work with a select number of clients. Our high-touch coaching 
                  is fully customized to your needs, pairing you with a dedicated coach while drawing 
                  on the expertise of our entire team.
                </p>
              </motion.div>
              <motion.div className="value-item" variants={fadeInUp}>
                <h3>Proven Results</h3>
                <p>
                  Working with Global Link more than triples your chances of admission. That's why 40% of 
                  our clients are referred by former clients - they know we deliver.
                </p>
              </motion.div>
              <motion.div className="value-item" variants={fadeInUp}>
                <h3>Global Reach</h3>
                <p>
                  With team members across the globe, we understand the nuances of different markets 
                  and can help you navigate the admissions process regardless of where you're applying from.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats">
          <div className="container">
            <motion.div
              className="stats-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="stat-item" variants={fadeInUp}>
                <h3 className="stat-number">5,000+</h3>
                <p className="stat-label">Students Admitted</p>
              </motion.div>
              <motion.div className="stat-item" variants={fadeInUp}>
                <h3 className="stat-number">13+</h3>
                <p className="stat-label">Years of Experience</p>
              </motion.div>
              <motion.div className="stat-item" variants={fadeInUp}>
                <h3 className="stat-number">3x</h3>
                <p className="stat-label">Higher Admission Rate</p>
              </motion.div>
              <motion.div className="stat-item" variants={fadeInUp}>
                <h3 className="stat-number">40%</h3>
                <p className="stat-label">Referral Rate</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="container">
            <motion.h2
              className="cta-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              className="cta-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Book a free consultation to learn how we can help you achieve your admissions goals.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <Link to="/free-consultation">
                <Button size="large">
                  Book Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

