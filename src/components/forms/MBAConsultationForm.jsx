import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from '../common/Button';
import { submitMBAConsultation } from '../../services/api';
import PrivacyTermsModal from '../common/PrivacyTermsModal';

const MBAConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await submitMBAConsultation(data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      
      // Show detailed error message
      let errorMessage = error.message || 'There was an error submitting your form. Please try again.';
      
      // Check for CORS/network errors
      if (error.message && error.message.includes('CORS')) {
        errorMessage = error.message;
      } else if (error.message && error.message.includes('Failed to fetch')) {
        errorMessage = 
          'Failed to connect to the server. Please check:\n' +
          '1. Django server is running on http://127.0.0.1:8000\n' +
          '2. CORS is configured in Django settings\n' +
          '3. Check browser console for more details';
      }
      
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="success-message">
        <h2>Thank You!</h2>
        <p>
          We've received your consultation request. A team member will contact
          you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="consultation-form">
      {/* Basic Info */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="first_name">
            First Name <span className="required">*</span>
          </label>
          <input
            id="first_name"
            {...register('first_name', {
              required: 'First name is required',
              minLength: {
                value: 2,
                message: 'Minimum 2 characters',
              },
            })}
            className={errors.first_name ? 'error' : ''}
          />
          {errors.first_name && (
            <span className="error-message">{errors.first_name.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="last_name">
            Last Name <span className="required">*</span>
          </label>
          <input
            id="last_name"
            {...register('last_name', {
              required: 'Last name is required',
              minLength: {
                value: 2,
                message: 'Minimum 2 characters',
              },
            })}
            className={errors.last_name ? 'error' : ''}
          />
          {errors.last_name && (
            <span className="error-message">{errors.last_name.message}</span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
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
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && (
            <span className="error-message">{errors.phone.message}</span>
          )}
        </div>
      </div>

      {/* Other Details */}
      <div className="form-group">
        <label htmlFor="country_of_residence">
          Country of Residence <span className="required">*</span>
        </label>
        <input
          id="country_of_residence"
          {...register('country_of_residence', {
            required: 'Country of residence is required',
          })}
          className={errors.country_of_residence ? 'error' : ''}
        />
        {errors.country_of_residence && (
          <span className="error-message">
            {errors.country_of_residence.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="referral_source">
          Referral Source <span className="required">*</span>
        </label>
        <input
          id="referral_source"
          {...register('referral_source', {
            required: 'Referral source is required',
          })}
          className={errors.referral_source ? 'error' : ''}
        />
        {errors.referral_source && (
          <span className="error-message">
            {errors.referral_source.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="gmat_gre_status">GMAT/GRE Status</label>
        <select
          id="gmat_gre_status"
          {...register('gmat_gre_status')}
          className={errors.gmat_gre_status ? 'error' : ''}
        >
          <option value="">Select...</option>
          <option value="gmat">GMAT</option>
          <option value="gre">GRE</option>
          <option value="both">Both</option>
          <option value="not_taken">Not Taken</option>
        </select>
        {errors.gmat_gre_status && (
          <span className="error-message">
            {errors.gmat_gre_status.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="linkedin_profile">LinkedIn Profile</label>
        <input
          id="linkedin_profile"
          type="url"
          {...register('linkedin_profile', {
            pattern: {
              value:
                /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/i,
              message: 'Please enter a valid LinkedIn profile URL',
            },
          })}
          placeholder="https://linkedin.com/in/yourprofile"
          className={errors.linkedin_profile ? 'error' : ''}
        />
        {errors.linkedin_profile && (
          <span className="error-message">
            {errors.linkedin_profile.message}
          </span>
        )}
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
          I agree to the{' '}
          <button
            type="button"
            className="link-button"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
          >
            Privacy Policy and Terms of Service
          </button>{' '}
          <span className="required">*</span>
        </label>
        {errors.consent && (
          <span className="error-message">{errors.consent.message}</span>
        )}
      </div>

      <PrivacyTermsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Button
        type="submit"
        size="large"
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Book My Free Consultation'}
      </Button>
    </form>
  );
};

export default MBAConsultationForm;

