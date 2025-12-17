import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from '../common/Button';
import { submitCollegeConsultation } from '../../services/api';
import PrivacyTermsModal from '../common/PrivacyTermsModal';

const CollegeConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const userType = watch('user_type');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await submitCollegeConsultation(data);
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
      {/* I am a */}
      <div className="form-group">
        <label htmlFor="user_type">
          I am a <span className="required">*</span>
        </label>
        <select
          id="user_type"
          {...register('user_type', { required: 'Please select an option' })}
          className={errors.user_type ? 'error' : ''}
        >
          <option value="">Select...</option>
          <option value="student">Student</option>
          <option value="parent">Parent</option>
        </select>
        {errors.user_type && (
          <span className="error-message">{errors.user_type.message}</span>
        )}
      </div>

      {/* Student Details */}
      <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
        Student Details
      </h3>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="student_first_name">
            Student First Name <span className="required">*</span>
          </label>
          <input
            id="student_first_name"
            {...register('student_first_name', {
              required: 'Student first name is required',
              minLength: {
                value: 2,
                message: 'Minimum 2 characters',
              },
            })}
            className={errors.student_first_name ? 'error' : ''}
          />
          {errors.student_first_name && (
            <span className="error-message">
              {errors.student_first_name.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="student_last_name">
            Student Last Name <span className="required">*</span>
          </label>
          <input
            id="student_last_name"
            {...register('student_last_name', {
              required: 'Student last name is required',
              minLength: {
                value: 2,
                message: 'Minimum 2 characters',
              },
            })}
            className={errors.student_last_name ? 'error' : ''}
          />
          {errors.student_last_name && (
            <span className="error-message">
              {errors.student_last_name.message}
            </span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="student_email">Student Email</label>
          <input
            id="student_email"
            type="email"
            {...register('student_email', {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className={errors.student_email ? 'error' : ''}
          />
          {errors.student_email && (
            <span className="error-message">
              {errors.student_email.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="student_phone">Student Phone</label>
          <input
            id="student_phone"
            type="tel"
            {...register('student_phone')}
            className={errors.student_phone ? 'error' : ''}
          />
          {errors.student_phone && (
            <span className="error-message">
              {errors.student_phone.message}
            </span>
          )}
        </div>
      </div>

      {/* Parent Details */}
      <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
        Parent Details
      </h3>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="parent_first_name">
            Parent First Name <span className="required">*</span>
          </label>
          <input
            id="parent_first_name"
            {...register('parent_first_name', {
              required: 'Parent first name is required',
              minLength: {
                value: 2,
                message: 'Minimum 2 characters',
              },
            })}
            className={errors.parent_first_name ? 'error' : ''}
          />
          {errors.parent_first_name && (
            <span className="error-message">
              {errors.parent_first_name.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="parent_last_name">
            Parent Last Name <span className="required">*</span>
          </label>
          <input
            id="parent_last_name"
            {...register('parent_last_name', {
              required: 'Parent last name is required',
              minLength: {
                value: 2,
                message: 'Minimum 2 characters',
              },
            })}
            className={errors.parent_last_name ? 'error' : ''}
          />
          {errors.parent_last_name && (
            <span className="error-message">
              {errors.parent_last_name.message}
            </span>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="parent_email">
            Parent Email <span className="required">*</span>
          </label>
          <input
            id="parent_email"
            type="email"
            {...register('parent_email', {
              required: 'Parent email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className={errors.parent_email ? 'error' : ''}
          />
          {errors.parent_email && (
            <span className="error-message">{errors.parent_email.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="parent_phone">Parent Phone</label>
          <input
            id="parent_phone"
            type="tel"
            {...register('parent_phone')}
            className={errors.parent_phone ? 'error' : ''}
          />
          {errors.parent_phone && (
            <span className="error-message">
              {errors.parent_phone.message}
            </span>
          )}
        </div>
      </div>

      {/* Other Fields */}
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
        <label htmlFor="high_school_graduation_year">
          High School Graduation Year <span className="required">*</span>
        </label>
        <input
          id="high_school_graduation_year"
          type="number"
          min="2020"
          max="2030"
          {...register('high_school_graduation_year', {
            required: 'High school graduation year is required',
            valueAsNumber: true,
          })}
          className={errors.high_school_graduation_year ? 'error' : ''}
        />
        {errors.high_school_graduation_year && (
          <span className="error-message">
            {errors.high_school_graduation_year.message}
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

export default CollegeConsultationForm;

