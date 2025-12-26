import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleNavigateToForm = () => {
    navigate('/apply');
    // Small delay to ensure page loads before scrolling
    setTimeout(() => {
      const formElement = document.getElementById('application-form');
      if (formElement) {
        formElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Contact form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us - Global Link Admissions"
        description="Get in touch with Global Link Admissions. Contact our expert team for admissions consulting, questions, or to schedule a consultation."
        keywords="contact Global Link Admissions, admissions consulting contact, education consulting"
      />
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-background"></div>
          <div className="container">
            <div className="contact-hero-content">
              <motion.div
                className="contact-hero-text"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h1
                  className="contact-hero-heading"
                  variants={fadeInUp}
                >
                  Let's Start Your <span className="hero-highlight">Success Story</span>
                </motion.h1>
                <motion.p
                  className="contact-hero-subtitle"
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  Ready to transform your academic future? Our expert team is here to guide you every step of the way.
                </motion.p>
                <motion.div
                  className="contact-hero-stats"
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }}
                >
                  <div className="hero-stat">
                    <span className="stat-number">24h</span>
                    <span className="stat-label">Response Time</span>
                  </div>
                  <div className="hero-stat">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Students Helped</span>
                  </div>
                  <div className="hero-stat">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Success Rate</span>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                className="contact-hero-visual"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <div className="hero-contact-card">
                  <div className="contact-card-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3>Get Expert Guidance</h3>
                  <p>Connect with our admissions specialists today</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-content">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Information */}
              <motion.div
                className="contact-info"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp}>Multiple Ways to Connect</motion.h2>
                <motion.p variants={fadeInUp} className="contact-description">
                  Choose the method that works best for you. Our dedicated team is ready to help you achieve your educational goals and answer any questions you may have.
                </motion.p>
                
                <motion.div className="contact-methods" variants={fadeInUp}>
                  <div className="contact-method">
                    <div className="method-icon email-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Email Us</h3>
                      <p>info@globallinkadmissions.com</p>
                      <span className="method-note">We respond within 24 hours</span>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon phone-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Call Us</h3>
                      <p>+1 (555) 123-4567</p>
                      <span className="method-note">Direct line to our experts</span>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon hours-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 13H8V11H11V7H13V11C13 12.1 12.1 13 11 13H13V13Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Office Hours</h3>
                      <p>Monday - Friday</p>
                      <span className="method-note">9:00 AM - 6:00 PM EST</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div className="contact-cta-info" variants={fadeInUp}>
                  <div className="cta-info-card">
                    <h4>Prefer to Schedule a Call?</h4>
                    <p>Book a free 30-minute consultation with our admissions experts</p>
                    <Button size="medium" variant="secondary" onClick={handleNavigateToForm}>
                      Schedule Free Consultation
                    </Button>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                className="contact-form-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <div className="form-header">
                  <h3>Send Us a Message</h3>
                  <p>Tell us about your goals and we'll get back to you within 24 hours</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">How can we help you? *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Tell us about your academic goals, target schools, or any specific questions you have..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="form-message success">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
                      </svg>
                      Thank you for your message! We'll get back to you within 24 hours.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="form-message error">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                      </svg>
                      There was an error sending your message. Please try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="large"
                    variant="primary"
                    disabled={isSubmitting}
                    fullWidth
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
                        </svg>
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-cta">
          <div className="container">
            <div className="cta-content">
              <motion.div
                className="cta-text-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2
                  className="cta-heading"
                  variants={fadeInUp}
                >
                  Ready to Begin Your Journey?
                </motion.h2>
                <motion.p
                  className="cta-text"
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  Take the next step towards your dream university. Our comprehensive application process is designed to maximize your chances of success.
                </motion.p>
                <motion.div
                  className="cta-buttons"
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }}
                >
                  <Button size="large" variant="secondary" onClick={handleNavigateToForm}>
                    Free Consultation
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="cta-visual"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <div className="cta-stats-grid">
                  <div className="cta-stat">
                    <div className="stat-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Success Stories</span>
                  </div>
                  <div className="cta-stat">
                    <div className="stat-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9.5L21 9ZM3 9V7L9 7.5V9.5L3 9ZM15 10.5V19L13.5 17.5L12 19L10.5 17.5L9 19V10.5L15 10.5Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Acceptance Rate</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

