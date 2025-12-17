import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from '../common/Button';
import { submitLawSchoolConsultation } from '../../services/api';
import PrivacyTermsModal from '../common/PrivacyTermsModal';

const LAW_SCHOOLS = [
  { value: 'stanford', label: 'Stanford Law School' },
  { value: 'columbia', label: 'Columbia University Law School' },
  { value: 'georgetown', label: 'Georgetown University Law School' },
  { value: 'yale', label: 'Yale Law School' },
  { value: 'virginia', label: 'University of Virginia Law School' },
  { value: 'minnesota', label: 'University of Minnesota Law School' },
  { value: 'chicago', label: 'University of Chicago Law School' },
  { value: 'northwestern', label: 'Northwestern University Law School' },
  { value: 'usc', label: 'USC Law School' },
  { value: 'upenn', label: 'University of Pennsylvania Law School' },
  { value: 'berkeley', label: 'UC Berkeley School of Law' },
  { value: 'utexas', label: 'UT-Austin Law School' },
  { value: 'duke', label: 'Duke University Law School' },
  { value: 'michigan', label: 'University of Michigan Law School' },
  { value: 'vanderbilt', label: 'Vanderbilt University Law School' },
  { value: 'nyu', label: 'New York University Law School' },
  { value: 'cornell', label: 'Cornell University Law School' },
  { value: 'other', label: 'Other' },
];

const SERVICE_CHOICES = [
  { value: 'personal_statement', label: 'Personal Statement Planning' },
  { value: 'interview_prep', label: 'Interview Prep Package' },
  { value: 'five_school', label: 'All-inclusive 5-School Package' },
  { value: 'hourly', label: 'Hourly Consulting' },
];

const LawSchoolConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedLawSchools, setSelectedLawSchools] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const handleLawSchoolChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedLawSchools([...selectedLawSchools, value]);
      setValue('law_schools_considering', [...selectedLawSchools, value]);
    } else {
      const updated = selectedLawSchools.filter((school) => school !== value);
      setSelectedLawSchools(updated);
      setValue('law_schools_considering', updated);
    }
  };

  const handleServiceChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedServices([...selectedServices, value]);
      setValue('services_interested', [...selectedServices, value]);
    } else {
      const updated = selectedServices.filter((service) => service !== value);
      setSelectedServices(updated);
      setValue('services_interested', updated);
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Extract file from FileList if present
      // React Hook Form returns FileList for file inputs
      let resumeFile = null;
      
      // Handle different possible formats from React Hook Form
      if (data.resume) {
        // FileList object (most common)
        if (data.resume instanceof FileList) {
          if (data.resume.length > 0) {
            resumeFile = data.resume[0];
          }
        }
        // Direct File object
        else if (data.resume instanceof File) {
          resumeFile = data.resume;
        }
        // Array of files
        else if (Array.isArray(data.resume) && data.resume.length > 0) {
          resumeFile = data.resume[0];
        }
        // NodeList (if somehow converted)
        else if (data.resume.length !== undefined && data.resume.length > 0) {
          resumeFile = data.resume[0];
        }
      }
      
      // Debug logging
      if (import.meta.env.DEV) {
        console.log('Form submission data:', {
          originalResume: data.resume,
          resumeType: data.resume ? typeof data.resume : 'null',
          isFileList: data.resume instanceof FileList,
          isFile: data.resume instanceof File,
          extractedFile: resumeFile,
          hasFile: !!resumeFile,
        });
      }
      
      // Prepare form data - only include resume if file exists
      const formData = {
        ...data,
        law_schools_considering: selectedLawSchools,
        services_interested: selectedServices,
      };
      
      // Only add resume if file was actually selected
      if (resumeFile) {
        formData.resume = resumeFile;
      } else {
        // Remove resume field entirely if no file
        delete formData.resume;
      }

      await submitLawSchoolConsultation(formData);
      setSubmitSuccess(true);
      reset();
      setSelectedLawSchools([]);
      setSelectedServices([]);
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
      {/* Basic Information */}
      <h3 style={{ marginTop: 0, marginBottom: 'var(--spacing-md)' }}>
        Basic Information
      </h3>
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
        <label htmlFor="resume">Resume (PDF)</label>
        <input
          id="resume"
          type="file"
          accept=".pdf"
          {...register('resume', {
            validate: (files) => {
              if (files && files.length > 0) {
                const file = files[0];
                if (file.type !== 'application/pdf') {
                  return 'Please upload a PDF file';
                }
                if (file.size > 5 * 1024 * 1024) {
                  return 'File size must be less than 5MB';
                }
              }
              return true;
            },
          })}
          className={errors.resume ? 'error' : ''}
        />
        {errors.resume && (
          <span className="error-message">{errors.resume.message}</span>
        )}
        <small className="form-hint">
          Upload your resume in PDF format (optional, max 5MB)
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="linkedin_profile_url">
          LinkedIn Profile URL <span className="required">*</span>
        </label>
        <input
          id="linkedin_profile_url"
          type="url"
          {...register('linkedin_profile_url', {
            required: 'LinkedIn profile URL is required',
            pattern: {
              value:
                /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/i,
              message: 'Please enter a valid LinkedIn profile URL',
            },
          })}
          placeholder="https://linkedin.com/in/yourprofile"
          className={errors.linkedin_profile_url ? 'error' : ''}
        />
        {errors.linkedin_profile_url && (
          <span className="error-message">
            {errors.linkedin_profile_url.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="city_of_residence">
          City of Residence <span className="required">*</span>
        </label>
        <input
          id="city_of_residence"
          {...register('city_of_residence', {
            required: 'City of residence is required',
          })}
          className={errors.city_of_residence ? 'error' : ''}
        />
        {errors.city_of_residence && (
          <span className="error-message">
            {errors.city_of_residence.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="citizenships">
          Citizenships <span className="required">*</span>
        </label>
        <input
          id="citizenships"
          {...register('citizenships', {
            required: 'Citizenships is required',
          })}
          placeholder="e.g., US, Canada"
          className={errors.citizenships ? 'error' : ''}
        />
        {errors.citizenships && (
          <span className="error-message">{errors.citizenships.message}</span>
        )}
      </div>

      {/* Undergraduate Information */}
      <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
        Undergraduate Information
      </h3>
      <div className="form-group">
        <label htmlFor="undergraduate_university">
          Undergraduate University <span className="required">*</span>
        </label>
        <input
          id="undergraduate_university"
          {...register('undergraduate_university', {
            required: 'Undergraduate university is required',
          })}
          className={errors.undergraduate_university ? 'error' : ''}
        />
        {errors.undergraduate_university && (
          <span className="error-message">
            {errors.undergraduate_university.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="degree_and_major">
          Degree and Major <span className="required">*</span>
        </label>
        <input
          id="degree_and_major"
          {...register('degree_and_major', {
            required: 'Degree and major is required',
          })}
          placeholder="e.g., BA in Political Science"
          className={errors.degree_and_major ? 'error' : ''}
        />
        {errors.degree_and_major && (
          <span className="error-message">
            {errors.degree_and_major.message}
          </span>
        )}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="gpa">
            GPA <span className="required">*</span>
          </label>
          <input
            id="gpa"
            type="number"
            step="0.01"
            min="0"
            max="4"
            {...register('gpa', {
              required: 'GPA is required',
              valueAsNumber: true,
              min: {
                value: 0,
                message: 'GPA must be between 0 and 4.0',
              },
              max: {
                value: 4,
                message: 'GPA must be between 0 and 4.0',
              },
            })}
            placeholder="3.75"
            className={errors.gpa ? 'error' : ''}
          />
          {errors.gpa && (
            <span className="error-message">{errors.gpa.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="graduation_year">
            Graduation Year <span className="required">*</span>
          </label>
          <input
            id="graduation_year"
            type="number"
            min="2000"
            max="2030"
            {...register('graduation_year', {
              required: 'Graduation year is required',
              valueAsNumber: true,
            })}
            className={errors.graduation_year ? 'error' : ''}
          />
          {errors.graduation_year && (
            <span className="error-message">
              {errors.graduation_year.message}
            </span>
          )}
        </div>
      </div>

      {/* Tests Taken */}
      <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
        Tests Taken
      </h3>
      <div className="form-group">
        <label htmlFor="tests_taken">
          Tests Taken <span className="required">*</span>
        </label>
        <select
          id="tests_taken"
          {...register('tests_taken', {
            required: 'Please select a test option',
          })}
          className={errors.tests_taken ? 'error' : ''}
        >
          <option value="">Select...</option>
          <option value="gre">GRE</option>
          <option value="lsat">LSAT</option>
          <option value="none">Neither GRE nor LSAT</option>
        </select>
        {errors.tests_taken && (
          <span className="error-message">{errors.tests_taken.message}</span>
        )}
      </div>

      {/* Law School Plans */}
      <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
        Law School Plans
      </h3>
      <div className="form-group">
        <label htmlFor="start_law_school_year">
          Start Law School Year <span className="required">*</span>
        </label>
        <input
          id="start_law_school_year"
          {...register('start_law_school_year', {
            required: 'Start law school year is required',
          })}
          placeholder="e.g., Fall 2025"
          className={errors.start_law_school_year ? 'error' : ''}
        />
        {errors.start_law_school_year && (
          <span className="error-message">
            {errors.start_law_school_year.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="applied_previously">
          Have you applied previously? <span className="required">*</span>
        </label>
        <select
          id="applied_previously"
          {...register('applied_previously', {
            required: 'Please select an option',
          })}
          className={errors.applied_previously ? 'error' : ''}
        >
          <option value="">Select...</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        {errors.applied_previously && (
          <span className="error-message">
            {errors.applied_previously.message}
          </span>
        )}
      </div>

      {/* Law Schools Considering */}
      <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
        Law Schools Considering
      </h3>
      <div className="form-group">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--spacing-sm)',
            maxHeight: '200px',
            overflowY: 'auto',
            padding: 'var(--spacing-sm)',
            border: '1px solid var(--light-gray)',
            borderRadius: 'var(--border-radius)',
          }}
        >
          {LAW_SCHOOLS.map((school) => (
            <div key={school.value} className="form-group checkbox">
              <input
                id={`law_school_${school.value}`}
                type="checkbox"
                value={school.value}
                onChange={handleLawSchoolChange}
                checked={selectedLawSchools.includes(school.value)}
              />
              <label htmlFor={`law_school_${school.value}`}>
                {school.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Services Interested */}
      <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
        Services Interested In
      </h3>
      <div className="form-group">
        {SERVICE_CHOICES.map((service) => (
          <div key={service.value} className="form-group checkbox">
            <input
              id={`service_${service.value}`}
              type="checkbox"
              value={service.value}
              onChange={handleServiceChange}
              checked={selectedServices.includes(service.value)}
            />
            <label htmlFor={`service_${service.value}`}>
              {service.label}
            </label>
          </div>
        ))}
      </div>

      {/* Coach & Referral */}
      <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
        Coach & Referral
      </h3>
      <div className="form-group">
        <label htmlFor="specific_coach_name">Specific Coach Name</label>
        <input
          id="specific_coach_name"
          {...register('specific_coach_name')}
          className={errors.specific_coach_name ? 'error' : ''}
        />
        {errors.specific_coach_name && (
          <span className="error-message">
            {errors.specific_coach_name.message}
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
        <label htmlFor="referred_by_name">Referred By Name</label>
        <input
          id="referred_by_name"
          {...register('referred_by_name')}
          className={errors.referred_by_name ? 'error' : ''}
        />
        {errors.referred_by_name && (
          <span className="error-message">
            {errors.referred_by_name.message}
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

export default LawSchoolConsultationForm;

