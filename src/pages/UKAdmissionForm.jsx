import FinalForm from '../components/forms/FinalForm';
import SEO from '../components/common/SEO';

const UKAdmissionForm = () => {
  const handleFormSubmit = async (apiData) => {
    // Custom form submission logic with the already transformed data
    console.log('UK Admission Form Data (API format):', apiData);
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/applications/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Application submitted successfully:', result);
        alert('Application submitted successfully! We will contact you soon.');
      } else {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(`Submission failed: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your application. Please check your connection and try again.');
    }
  };

  return (
    <>
      <SEO 
        title="UK University Admission Application"
        description="Apply for UK university admission with our comprehensive application form. Get expert guidance for your UK education journey."
        keywords="UK university admission, UK education, university application, study in UK"
      />
      <div className="page-container">
        <FinalForm 
          onSubmit={handleFormSubmit}
          apiUrl="http://127.0.0.1:8000/api/applications/"
        />
      </div>
    </>
  );
};

export default UKAdmissionForm;