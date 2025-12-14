import { Link } from 'react-router-dom';

const PricingCard = ({ title, price, features, popular = false }) => {
  return (
    <div className={`pricing-card ${popular ? 'popular' : ''}`}>
      {popular && <div className="popular-badge">Most Popular</div>}
      <h3>{title}</h3>
      <div className="pricing-price">
        <span className="price-amount">${price}</span>
      </div>
      <ul className="pricing-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link to="/free-consultation" className="btn btn-primary">
        Get Started
      </Link>
    </div>
  );
};

export default PricingCard;

