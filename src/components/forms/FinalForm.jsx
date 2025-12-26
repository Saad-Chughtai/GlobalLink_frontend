import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import Modal from '../common/Modal';
import './FinalForm.css';

const FinalForm = ({ onSubmit, className = '', apiUrl = 'https://globallink.eu.pythonanywhere.com/api/applications/', isSubmitting = false, disabled = false }) => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState({
    passport: null,
    transcripts: []
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  // Watch file inputs
  const passportFiles = watch('passport');
  const transcriptFiles = watch('transcripts');

  // Update selected files state when inputs change
  React.useEffect(() => {
    setSelectedFiles({
      passport: passportFiles?.[0] || null,
      transcripts: transcriptFiles ? Array.from(transcriptFiles) : []
    });
  }, [passportFiles, transcriptFiles]);

  const handleFormSubmit = async (data) => {
    try {
      // Create FormData to handle both text and file data
      const formData = new FormData();
      
      // Add text fields
      formData.append('first_name', data.firstName || '');
      formData.append('last_name', data.lastName || '');
      formData.append('email', data.email || '');
      formData.append('phone', data.phone || '');
      formData.append('date_of_birth', data.dateOfBirth || '');
      formData.append('gender', data.gender || '');
      formData.append('country_of_residence', data.residence || '');
      formData.append('city', data.city || '');
      formData.append('nationality', data.nationality || '');
      formData.append('immigration_status', data.immigrationStatus || '');
      formData.append('highest_qualification', data.qualification || '');
      formData.append('field_of_study', data.fieldOfStudy || '');
      formData.append('institution_name', data.institution || '');
      formData.append('grades_or_cgpa', data.grades || '');
      formData.append('english_test', data.englishTest || '');
      formData.append('english_score', data.englishScore || '');
      formData.append('level_of_study', data.studyLevel || '');
      formData.append('preferred_course', data.preferredCourse || '');
      formData.append('preferred_intake', data.intake || '');
      formData.append('message', data.message || '');
      formData.append('agreed_to_contact', data.consent || false);

      // Check if files are selected
      const hasFiles = (data.passport && data.passport[0]) || (data.transcripts && data.transcripts.length > 0);

      // Add file fields if they exist
      if (data.passport && data.passport[0]) {
        formData.append('passport', data.passport[0]);
      }
      
      if (data.transcripts && data.transcripts.length > 0) {
        // Handle multiple transcript files
        for (let i = 0; i < data.transcripts.length; i++) {
          formData.append('academic_transcripts', data.transcripts[i]);
        }
      }

      // Debug: Log FormData contents
      console.log('FormData contents:');
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      if (onSubmit) {
        // For custom onSubmit, try FormData first, fallback to JSON if needed
        try {
          await onSubmit(formData, hasFiles);
        } catch (error) {
          // If FormData fails and we have files, try without files
          if (hasFiles && error.message.includes('400')) {
            console.warn('FormData submission failed, trying without files...');
            const jsonData = {
              first_name: data.firstName || '',
              last_name: data.lastName || '',
              email: data.email || '',
              phone: data.phone || '',
              date_of_birth: data.dateOfBirth || '',
              gender: data.gender || '',
              country_of_residence: data.residence || '',
              city: data.city || '',
              nationality: data.nationality || '',
              immigration_status: data.immigrationStatus || '',
              highest_qualification: data.qualification || '',
              field_of_study: data.fieldOfStudy || '',
              institution_name: data.institution || '',
              grades_or_cgpa: data.grades || '',
              english_test: data.englishTest || '',
              english_score: data.englishScore || '',
              level_of_study: data.studyLevel || '',
              preferred_course: data.preferredCourse || '',
              preferred_intake: data.intake || '',
              message: data.message || '',
              agreed_to_contact: data.consent || false
            };
            await onSubmit(jsonData, false);
            alert('Application submitted successfully! Note: File uploads are not supported by the current backend. Please email your documents separately.');
          } else {
            throw error;
          }
        }
      } else {
        // Default API submission with FormData, fallback to JSON
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            body: formData, // Don't set Content-Type header - browser will set it with boundary
          });

          if (response.ok) {
            const result = await response.json();
            console.log('Application submitted successfully:', result);
            alert('Application submitted successfully! We will contact you soon.');
            reset();
          } else {
            let errorMessage = `Submission failed: ${response.status}`;
            try {
              const errorData = await response.json();
              console.error('API Error Details:', errorData);
              errorMessage = errorData.detail || errorData.message || errorData.error || errorMessage;
            } catch (e) {
              console.error('Could not parse error response');
            }
            throw new Error(errorMessage);
          }
        } catch (error) {
          // If FormData fails with 400 and we have files, try JSON without files
          if (hasFiles && error.message.includes('400')) {
            console.warn('FormData submission failed, trying JSON without files...');
            const jsonData = {
              first_name: data.firstName || '',
              last_name: data.lastName || '',
              email: data.email || '',
              phone: data.phone || '',
              date_of_birth: data.dateOfBirth || '',
              gender: data.gender || '',
              country_of_residence: data.residence || '',
              city: data.city || '',
              nationality: data.nationality || '',
              immigration_status: data.immigrationStatus || '',
              highest_qualification: data.qualification || '',
              field_of_study: data.fieldOfStudy || '',
              institution_name: data.institution || '',
              grades_or_cgpa: data.grades || '',
              english_test: data.englishTest || '',
              english_score: data.englishScore || '',
              level_of_study: data.studyLevel || '',
              preferred_course: data.preferredCourse || '',
              preferred_intake: data.intake || '',
              message: data.message || '',
              agreed_to_contact: data.consent || false
            };

            const fallbackResponse = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(jsonData),
            });

            if (fallbackResponse.ok) {
              const result = await fallbackResponse.json();
              console.log('Application submitted successfully (without files):', result);
              alert('Application submitted successfully! Note: File uploads are not supported by the current backend. Please email your documents to support@globallinkadmissions.com');
              reset();
            } else {
              const errorData = await fallbackResponse.json();
              console.error('Fallback API Error:', errorData);
              throw new Error(`Submission failed: ${fallbackResponse.status}`);
            }
          } else {
            throw error;
          }
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  return (
    <div className={`final-form-container ${className}`}>

      <form className="final-form" onSubmit={handleSubmit(handleFormSubmit)}>
        {/* Personal Information */}
        <fieldset className="form-section">
          <legend>Personal Information</legend>
          <div className="form-row">
            <div className="form-col">
              <FormInput
                label="First Name"
                name="firstName"
                register={register}
                required
                error={errors.firstName}
              />
            </div>
            <div className="form-col">
              <FormInput
                label="Last Name"
                name="lastName"
                register={register}
                required
                error={errors.lastName}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <FormInput
                label="Email"
                name="email"
                type="email"
                register={register}
                required
                error={errors.email}
              />
            </div>
            <div className="form-col">
              <FormInput
                label="Phone Number"
                name="phone"
                type="tel"
                register={register}
                required
                error={errors.phone}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <FormInput
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                register={register}
                error={errors.dateOfBirth}
              />
            </div>
            <div className="form-col">
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  {...register('gender')}
                  className={errors.gender ? 'error' : ''}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && (
                  <span className="error-message">{errors.gender.message}</span>
                )}
              </div>
            </div>
          </div>
        </fieldset>

        {/* Location & Nationality */}
        <fieldset className="form-section">
          <legend>Location & Nationality</legend>
          <div className="form-group">
            <label htmlFor="residence">Country of Residence</label>
            <select
              id="residence"
              {...register('residence', { required: 'Country of residence is required' })}
              className={errors.residence ? 'error' : ''}
            >
              <option value="">Select Country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Other">Other</option>
            </select>
            {errors.residence && (
              <span className="error-message">{errors.residence.message}</span>
            )}
          </div>

          <FormInput
            label="City"
            name="city"
            register={register}
            error={errors.city}
          />

          <FormInput
            label="Nationality"
            name="nationality"
            register={register}
            error={errors.nationality}
          />

          <FormInput
            label="Current Immigration Status"
            name="immigrationStatus"
            register={register}
            error={errors.immigrationStatus}
          />
        </fieldset>

        {/* Academic Background */}
        <fieldset className="form-section">
          <legend>Academic Background</legend>
          <div className="form-group">
            <label htmlFor="qualification">Highest Qualification</label>
            <select
              id="qualification"
              {...register('qualification', { required: 'Qualification is required' })}
              className={errors.qualification ? 'error' : ''}
            >
              <option value="">Select Qualification</option>
              <option value="Matric / O-Levels">Matric / O-Levels</option>
              <option value="Intermediate / A-Levels">Intermediate / A-Levels</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
            </select>
            {errors.qualification && (
              <span className="error-message">{errors.qualification.message}</span>
            )}
          </div>

          <FormInput
            label="Field of Study"
            name="fieldOfStudy"
            register={register}
            error={errors.fieldOfStudy}
          />

          <FormInput
            label="Institution Name"
            name="institution"
            register={register}
            error={errors.institution}
          />

          <FormInput
            label="Grades / CGPA"
            name="grades"
            register={register}
            error={errors.grades}
          />
        </fieldset>

        {/* English Proficiency */}
        <fieldset className="form-section">
          <legend>English Language Proficiency</legend>
          <div className="form-group">
            <label htmlFor="englishTest">English Test</label>
            <select
              id="englishTest"
              {...register('englishTest')}
              className={errors.englishTest ? 'error' : ''}
            >
              <option value="">Select Test</option>
              <option value="Not Taken">Not Taken</option>
              <option value="IELTS">IELTS</option>
              <option value="PTE">PTE</option>
              <option value="Duolingo">Duolingo</option>
            </select>
            {errors.englishTest && (
              <span className="error-message">{errors.englishTest.message}</span>
            )}
          </div>

          <FormInput
            label="Overall Score"
            name="englishScore"
            register={register}
            error={errors.englishScore}
            placeholder="e.g., 7.0 for IELTS"
          />
        </fieldset>

        {/* Course Preferences */}
        <fieldset className="form-section">
          <legend>Course Preferences</legend>
          <div className="form-group">
            <label htmlFor="studyLevel">Level of Study</label>
            <select
              id="studyLevel"
              {...register('studyLevel', { required: 'Study level is required' })}
              className={errors.studyLevel ? 'error' : ''}
            >
              <option value="">Select Level</option>
              <option value="Foundation">Foundation</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="PhD">PhD</option>
            </select>
            {errors.studyLevel && (
              <span className="error-message">{errors.studyLevel.message}</span>
            )}
          </div>

          <FormInput
            label="Preferred Course"
            name="preferredCourse"
            register={register}
            error={errors.preferredCourse}
            placeholder="e.g., Computer Science, Business Administration"
          />

          <div className="form-group">
            <label htmlFor="intake">Preferred Intake</label>
            <select
              id="intake"
              {...register('intake')}
              className={errors.intake ? 'error' : ''}
            >
              <option value="">Select Intake</option>
              <option value="January">January</option>
              <option value="May">May</option>
              <option value="September">September</option>
            </select>
            {errors.intake && (
              <span className="error-message">{errors.intake.message}</span>
            )}
          </div>
        </fieldset>

        {/* Documents */}
        <fieldset className="form-section">
          <legend>Upload Documents (Optional)</legend>
          <div className="form-group">
            <label htmlFor="passport">Passport</label>
            <input
              id="passport"
              type="file"
              {...register('passport')}
              accept=".pdf,.jpg,.jpeg,.png"
            />
            {selectedFiles.passport && (
              <div className="file-selected">
                ✓ Selected: {selectedFiles.passport.name} ({(selectedFiles.passport.size / 1024 / 1024).toFixed(2)} MB)
              </div>
            )}
            <small className="form-help">
              Accepted formats: PDF, JPG, PNG (Max 5MB)
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="transcripts">Academic Transcripts</label>
            <input
              id="transcripts"
              type="file"
              {...register('transcripts')}
              accept=".pdf,.jpg,.jpeg,.png"
              multiple
            />
            {selectedFiles.transcripts.length > 0 && (
              <div className="file-selected">
                ✓ Selected {selectedFiles.transcripts.length} file(s):
                <ul>
                  {selectedFiles.transcripts.map((file, index) => (
                    <li key={index}>
                      {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <small className="form-help">
              You can select multiple files. Accepted formats: PDF, JPG, PNG (Max 5MB each)
            </small>
          </div>
        </fieldset>

        {/* Additional Information */}
        <fieldset className="form-section">
          <legend>Additional Information</legend>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register('message')}
              rows="4"
              placeholder="Tell us about your academic goals, career aspirations, or any specific requirements..."
            />
          </div>

          <div className="form-group checkbox-group">
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="consent-checkbox"
                {...register('consent', { required: 'You must agree to be contacted' })}
              />
              <label htmlFor="consent-checkbox" className="checkbox-label">
                I consent to be contacted and accept the{' '}
                <button
                  type="button"
                  className="link-button"
                  onClick={() => setIsPrivacyModalOpen(true)}
                >
                  Privacy Policy
                </button>
                {' '}&{' '}
                <button
                  type="button"
                  className="link-button"
                  onClick={() => setIsTermsModalOpen(true)}
                >
                  Terms of Service
                </button>
                <span className="required">*</span>
              </label>
            </div>
            {errors.consent && (
              <span className="error-message">{errors.consent.message}</span>
            )}
          </div>
        </fieldset>

        <button 
          type="submit" 
          className="btn btn-primary btn-large btn-full-width"
          disabled={isSubmitting || disabled}
        >
          {isSubmitting ? (
            <>
              <span className="loading-spinner"></span>
              Submitting Application...
            </>
          ) : disabled ? (
            'Application Submitted ✓'
          ) : (
            'Submit My Application'
          )}
        </button>
      </form>

      <div className="form-footer">
        <p>© 2025 UK Education Consultants | Free Consultation</p>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        title="Privacy Policy"
        size="large"
      >
        <div className="legal-content">
          <h3>Information We Collect</h3>
          <p>
            We collect information you provide directly to us, such as when you create an account, 
            fill out a form, or contact us. This may include your name, email address, phone number, 
            educational background, and other information relevant to your university application.
          </p>

          <h3>How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process your university applications and provide consultation services</li>
            <li>Communicate with you about our services, including sending updates and promotional materials</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
          </ul>

          <h3>Information Sharing</h3>
          <p>
            We may share your information with universities and educational institutions as part of 
            your application process. We will only share information necessary for your applications 
            and with your explicit consent.
          </p>

          <h3>Data Security</h3>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, 
            misuse, unauthorized access, disclosure, alteration, and destruction. All personal 
            data is encrypted and stored securely.
          </p>

          <h3>Your Rights</h3>
          <p>
            You have the right to access, update, or delete your personal information. You may 
            also opt out of certain communications from us. To exercise these rights, please 
            contact us at privacy@globallinkadmissions.com.
          </p>

          <h3>Contact Information</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> privacy@globallinkadmissions.com
            <br />
            <strong>Phone:</strong> +44 123 456 7890
          </p>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        title="Terms of Service"
        size="large"
      >
        <div className="legal-content">
          <h3>Acceptance of Terms</h3>
          <p>
            By accessing and using Global Link Admissions services, you accept and agree to be 
            bound by the terms and provision of this agreement.
          </p>

          <h3>Services Provided</h3>
          <p>
            Global Link Admissions provides university admission consulting services, including 
            but not limited to application guidance, document review, and university matching services.
          </p>

          <h3>User Responsibilities</h3>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information in all applications and communications</li>
            <li>Respond promptly to requests for additional information or documentation</li>
            <li>Comply with all university requirements and deadlines</li>
            <li>Pay all fees as agreed upon in your service agreement</li>
          </ul>

          <h3>Service Limitations</h3>
          <p>
            While we strive to provide the best possible service, we cannot guarantee university 
            admission. Success depends on various factors including academic qualifications, 
            competition, and university-specific requirements.
          </p>

          <h3>Fees and Refunds</h3>
          <p>
            Service fees are outlined in your individual service agreement. Refund policies 
            vary based on the specific services purchased and the stage of the application process.
          </p>

          <h3>Intellectual Property</h3>
          <p>
            All content, materials, and resources provided by Global Link Admissions are protected 
            by intellectual property laws and remain our exclusive property.
          </p>

          <h3>Limitation of Liability</h3>
          <p>
            Global Link Admissions shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages resulting from your use of our services.
          </p>

          <h3>Contact Information</h3>
          <p>
            For questions about these Terms of Service, please contact us at:
            <br />
            <strong>Email:</strong> legal@globallinkadmissions.com
            <br />
            <strong>Phone:</strong> +44 123 456 7890
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default FinalForm;