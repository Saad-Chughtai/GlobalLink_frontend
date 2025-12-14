import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium' }) => {
  return (
    <div className="loading-spinner-container">
      <div className={`loading-spinner spinner-${size}`} aria-label="Loading content"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
