import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Card from '../common/Card';
import './ServiceCard.css';

const ServiceCard = ({ service, showLogo = false }) => {
  const navigate = useNavigate();

  // Defensive check for undefined service
  if (!service) {
    return null;
  }

  return (
    <Card
      hoverable
      className={`service-card ${service.featured ? 'featured' : ''}`}
      padding="large"
    >
      {showLogo && service.logo && (
        <div className="service-logo">
          <img src={service.logo} alt={service.school || service.name} />
        </div>
      )}
      <h3 className="service-name">{service.name || service.title}</h3>
      {service.school && (
        <p className="service-school">{service.school}</p>
      )}
      <p className="service-description">{service.description}</p>
      {service.features && service.features.length > 0 && (
        <ul className="service-features">
          {service.features.map((feature, index) => (
            <li key={index}>
              <FaCheck className="check-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      {service.pricing && (
        <div className="service-pricing">
          <strong>{service.pricing}</strong>
        </div>
      )}
      <Button
        variant="primary"
        fullWidth
        onClick={() => navigate('/free-consultation')}
        className="service-cta"
      >
        Learn More
      </Button>
    </Card>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    title: PropTypes.string, // Support both name and title
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    pricing: PropTypes.string,
    featured: PropTypes.bool,
    school: PropTypes.string,
    logo: PropTypes.string,
  }),
  showLogo: PropTypes.bool,
};

export default ServiceCard;
