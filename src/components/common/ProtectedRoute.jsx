import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import './ProtectedRoute.css';

const ProtectedRoute = ({ children, requiredKey = 'admin123' }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [securityKey, setSecurityKey] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already authenticated (stored in sessionStorage)
    const storedAuth = sessionStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (securityKey === requiredKey) {
      setIsAuthenticated(true);
      sessionStorage.setItem('isAuthenticated', 'true');
    } else {
      setError('Invalid security key. Please try again.');
      setSecurityKey('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
    setSecurityKey('');
  };

  if (isLoading) {
    return (
      <div className="protected-route-loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="protected-route-container">
        <div className="security-form-wrapper">
          <div className="security-form-card">
            <h2>Secure Access Required</h2>
            <p>Please enter the security key to access this page.</p>
            
            <form onSubmit={handleSubmit} className="security-form">
              <div className="form-group">
                <label htmlFor="securityKey">Security Key</label>
                <input
                  type="password"
                  id="securityKey"
                  value={securityKey}
                  onChange={(e) => setSecurityKey(e.target.value)}
                  placeholder="Enter security key"
                  required
                  autoFocus
                />
              </div>
              
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              
              <button type="submit" className="submit-btn">
                Access Page
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="protected-content">
      <div className="protected-header">
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
      {children}
    </div>
  );
};

export default ProtectedRoute;