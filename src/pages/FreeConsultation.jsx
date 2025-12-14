import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from '../components/common/Button';
import './FreeConsultation.css';

const FreeConsultation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // API call here (placeholder)
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="consultation-page">
      <div className="container">
        <div className="consultation-grid">
          {/* Left Side - Info */}
          <div className="consultation-info">
            <h1>Your Most Valuable 30 Minutes This Week</h1>
            <p className="subtitle">
              At Fortuna Admissions, we don't do sales pitches. We have real
              conversations.
            </p>

            <h3>In your free consultation, we'll:</h3>
            <ul>
              <li>Assess your profile and admissions potential</li>
              <li>Identify your unique strengths and story angles</li>
              <li>Discuss target schools and application strategy</li>
              <li>Answer all your questions about the process</li>
              <li>Determine if we're the right fit for you</li>
            </ul>

            <div className="trust-indicators">
              <p>
                <strong>No obligation</strong>
              </p>
              <p>
                <strong>100% confidential</strong>
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="consultation-form-container">
            {submitSuccess ? (
              <div className="success-message">
                <h2>Thank You!</h2>
                <p>
                  We've received your consultation request. A team member will
                  contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="consultation-form"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      id="firstName"
                      {...register('firstName', {
                        required: 'First name is required',
                        minLength: {
                          value: 2,
                          message: 'Minimum 2 characters',
                        },
                      })}
                      className={errors.firstName ? 'error' : ''}
                    />
                    {errors.firstName && (
                      <span className="error-message">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      id="lastName"
                      {...register('lastName', {
                        required: 'Last name is required',
                        minLength: {
                          value: 2,
                          message: 'Minimum 2 characters',
                        },
                      })}
                      className={errors.lastName ? 'error' : ''}
                    />
                    {errors.lastName && (
                      <span className="error-message">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[\d\s\-\(\)]+$/,
                        message: 'Invalid phone number',
                      },
                    })}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="targetSchools">Target Schools</label>
                  <select id="targetSchools" multiple {...register('targetSchools')}>
                    <option value="harvard">Harvard Business School</option>
                    <option value="stanford">Stanford GSB</option>
                    <option value="wharton">Wharton</option>
                    <option value="columbia">Columbia Business School</option>
                    <option value="booth">Chicago Booth</option>
                    <option value="mit">MIT Sloan</option>
                    <option value="kellogg">Northwestern Kellogg</option>
                    <option value="other">Other</option>
                  </select>
                  <small className="form-hint">
                    Hold Ctrl (Windows) or Cmd (Mac) to select multiple
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">Application Timeline *</label>
                  <select
                    id="timeline"
                    {...register('timeline', {
                      required: 'Please select timeline',
                    })}
                    className={errors.timeline ? 'error' : ''}
                  >
                    <option value="">Select...</option>
                    <option value="2025">This year (2025)</option>
                    <option value="2026">Next year (2026)</option>
                    <option value="2027+">2+ years</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                  {errors.timeline && (
                    <span className="error-message">
                      {errors.timeline.message}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="industry">Current Industry</label>
                  <select id="industry" {...register('industry')}>
                    <option value="">Select...</option>
                    <option value="consulting">Consulting</option>
                    <option value="finance">Finance/Banking</option>
                    <option value="tech">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="engineering">Engineering</option>
                    <option value="nonprofit">Non-profit</option>
                    <option value="government">Government</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="experience">Years of Work Experience</label>
                    <input
                      id="experience"
                      type="number"
                      min="0"
                      max="30"
                      {...register('experience')}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="testScore">GMAT/GRE Score (Optional)</label>
                    <input
                      id="testScore"
                      type="text"
                      {...register('testScore')}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="comments">Additional Comments</label>
                  <textarea
                    id="comments"
                    rows="4"
                    {...register('comments')}
                  />
                </div>

                <div className="form-group checkbox">
                  <input
                    id="consent"
                    type="checkbox"
                    {...register('consent', {
                      required: 'You must agree to continue',
                    })}
                  />
                  <label htmlFor="consent">
                    I agree to the Privacy Policy and Terms of Service *
                  </label>
                  {errors.consent && (
                    <span className="error-message">
                      {errors.consent.message}
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  size="large"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Book My Free Consultation'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultation;
