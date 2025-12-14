import ConsultationForm from '../components/forms/ConsultationForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h1>Contact Us</h1>
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Reach out with any questions or inquiries.</p>
            <div className="contact-details">
              <p><strong>Email:</strong> info@fortunaadmissions.com</p>
              <p><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Education Street, New York, NY 10001</p>
            </div>
          </div>
          <div className="contact-form">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

