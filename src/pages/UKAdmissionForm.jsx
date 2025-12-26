import FinalForm from '../components/forms/FinalForm';
import SEO from '../components/common/SEO';

const UKAdmissionForm = () => {
  const handleFormSubmit = async (formDataOrJson, hasFiles = true) => {
    // Custom form submission logic with FormData or JSON
    if (hasFiles && formDataOrJson instanceof FormData) {
      console.log('UK Admission Form Data (FormData):');
      for (let [key, value] of formDataOrJson.entries()) {
        console.log(key, value);
      }
    } else {
      console.log('UK Admission Form Data (JSON):', formDataOrJson);
    }
    
    try {
      let response;
      
      if (hasFiles && formDataOrJson instanceof FormData) {
        response = await fetch('https://globallink.eu.pythonanywhere.com/api/applications/', {
          method: 'POST',
          body: formDataOrJson, // FormData - don't set Content-Type header
        });
      } else {
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
        alert('Application submitted successfully! We will contact you soon.');
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
      console.error('Error:', error);
      
      // If it's a 400 error and we tried FormData, the form will handle the fallback
      if (!error.message.includes('400')) {
        alert('There was an error submitting your application. Please check your connection and try again.');
      }
      throw error;
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
          apiUrl="https://globallink.eu.pythonanywhere.com/api/applications/"
        />
      </div>
    </>
  );
};

export default UKAdmissionForm;