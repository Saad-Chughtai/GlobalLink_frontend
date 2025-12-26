import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FinalForm from '../components/forms/FinalForm';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import './Apply.css';

const Apply = () => {
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate('/contact');
  };

  const handleStartJourney = () => {
    const formSection = document.getElementById('application-form');
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const handleFormSubmit = async (formDataOrJson, hasFiles = true) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      let response;
      
      if (hasFiles && formDataOrJson instanceof FormData) {
        // Try FormData first
        response = await fetch('https://globallink.eu.pythonanywhere.com/api/applications/', {
          method: 'POST',
          body: formDataOrJson, // FormData - don't set Content-Type header
        });
      } else {
        // Fallback to JSON
        response = await fetch('https://globallink.eu.pythonanywhere.com/api/applications/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataOrJson),
        });
      }
      
      if (response.ok) {
        const result = await response.json();
        console.log('Application submitted successfully:', result);
        setSubmitStatus('success');
        
        // Scroll to success message
        setTimeout(() => {
          document.getElementById('submit-status')?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }, 100);
      } else {
        let errorMessage = `Submission failed: ${response.status}`;
        try {
          const errorData = await response.json();
          console.error('API Error Details:', errorData);
          errorMessage = errorData.detail || errorData.message || errorData.error || errorMessage;
        } catch (e) {
          console.error('Could not parse error response');
        }
        setSubmitStatus('error');
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      
      // If it's a 400 error and we tried FormData, the form will handle the fallback
      if (!error.message.includes('400')) {
        throw error; // Re-throw non-400 errors
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Apply Now - Global Link Admissions"
        description="Submit your application to Global Link Admissions. Get expert guidance for your university admission journey with our comprehensive application form."
        keywords="apply now, university admission application, Global Link Admissions, education consulting"
      />
      
      {/* Hero / Introduction Section */}
      <section className="apply-hero">
        <div className="container">
          <div className="apply-hero-content">
            <h1>Transform Your Future with Expert University Guidance</h1>
            <p>
              Join thousands of successful students who achieved their dreams through our comprehensive 
              application support. From program selection to visa assistance, we're with you every step 
              of the way to ensure your application stands out.
            </p>
            <div className="apply-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>98% Success Rate</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Expert Review Process</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>500+ Partner Universities</span>
              </div>
            </div>
            <div className="hero-cta">
              <Button
                variant="primary"
                size="large"
                onClick={handleStartJourney}
                className="hero-cta-button"
              >
                Start the Journey →
              </Button>
            </div>
          </div>
        </div>
      </section>

     

      {/* Trust & Credibility Section */}
      <section className="apply-trust">
        <div className="container">
          <div className="trust-header">
            <h2>Why 98% of Our Students Get Accepted</h2>
            <p>Our proven methodology and expert guidance ensure your application success</p>
          </div>
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Personalized Strategy</h3>
              <p>Every application is crafted with a unique strategy based on your profile, goals, and target universities to maximize acceptance chances.</p>
              <div className="trust-stat">
                <span className="stat-number">1-on-1</span>
                <span className="stat-label">Expert Consultation</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Multi-Level Quality Check</h3>
              <p>Your application undergoes rigorous review by admission experts, ensuring every detail meets university standards before submission.</p>
              <div className="trust-stat">
                <span className="stat-number">3-Stage</span>
                <span className="stat-label">Review Process</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Exclusive University Partnerships</h3>
              <p>Direct relationships with 500+ universities worldwide provide insider knowledge of admission preferences and fast-track opportunities.</p>
              <div className="trust-stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Partner Universities</span>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4905 2.02168 11.3363C2.16356 9.18218 2.99721 7.13677 4.39828 5.49707C5.79935 3.85736 7.69279 2.71548 9.79619 2.24015C11.8996 1.76482 14.1003 1.98466 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>End-to-End Support</h3>
              <p>From application to visa approval, we provide comprehensive support throughout your entire journey to studying abroad.</p>
              <div className="trust-stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="apply-form-section">
        <div className="container">
          <div className="form-section-header">
            <h2>Start Your Journey Today</h2>
            <p>Complete our comprehensive application form below. Our expert team will review your profile and contact you within 24 hours with a personalized action plan.</p>
          </div>

          {/* Submit Status Messages */}
          {submitStatus && (
            <div id="submit-status" className={`submit-status ${submitStatus}`}>
              {submitStatus === 'success' ? (
                <div className="status-content success">
                  <div className="status-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="status-text">
                    <h3>Application Submitted Successfully!</h3>
                    <p>Thank you for choosing Global Link Admissions. Our expert team will review your application and contact you within 24 hours with your personalized university matching strategy.</p>
                    <div className="next-steps">
                      <h4>What happens next?</h4>
                      <ul>
                        <li>✓ Expert review of your profile (within 24 hours)</li>
                        <li>✓ Personalized university recommendations</li>
                        <li>✓ Free consultation call to discuss your options</li>
                        <li>✓ Customized application timeline</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="status-content error">
                  <div className="status-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
                      <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="status-text">
                    <h3>Submission Error</h3>
                    <p>We encountered an issue submitting your application. Please check your internet connection and try again, or contact us directly for assistance.</p>
                    <div className="error-actions">
                      <button 
                        className="btn btn-secondary"
                        onClick={() => setSubmitStatus(null)}
                      >
                        Try Again
                      </button>
                      <a href="tel:+44-123-456-7890" className="btn btn-outline">
                        Call Us: +44 123 456 7890
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <FinalForm 
            onSubmit={handleFormSubmit}
            apiUrl="https://globallink.eu.pythonanywhere.com/api/applications/"
            isSubmitting={isSubmitting}
            disabled={submitStatus === 'success'}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="apply-final-cta">
        <div className="container">
          <div className="apply-final-cta-content">
            <h2 className="apply-final-cta-heading">
              Need Help with Your Application? <strong>We're Here to Guide You.</strong>
            </h2>
            <div className="apply-final-cta-buttons">
              <Button
                variant="primary"
                size="large"
                onClick={handleContactUs}
              >
                Contact Us →
              </Button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Apply;