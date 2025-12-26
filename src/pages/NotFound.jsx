import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-heading">Page Not Found</h2>
          <p className="not-found-description">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="not-found-actions">
            <Button
              variant="primary"
              size="large"
              onClick={() => (window.location.href = '/')}
            >
              Go to Homepage
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

