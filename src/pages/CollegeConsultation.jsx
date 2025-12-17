import CollegeConsultationForm from '../components/forms/CollegeConsultationForm';
import SEO from '../components/common/SEO';
import './FreeConsultation.css';

const CollegeConsultation = () => {
  return (
    <>
      <SEO
        title="College Admissions Free Consultation"
        description="Book your free 30-minute consultation with our college admissions experts. Get personalized guidance for your college application journey."
        keywords="college admissions consultation, college counseling, free consultation, undergraduate admissions"
      />
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
              <CollegeConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeConsultation;

