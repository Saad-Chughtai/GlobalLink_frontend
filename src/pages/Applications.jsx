import { useState, useEffect } from 'react';
import { getApplications } from '../services/api';
import ProtectedRoute from '../components/common/ProtectedRoute';
import LoadingSpinner from '../components/common/LoadingSpinner';
import './Applications.css';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getApplications();
      setApplications(Array.isArray(data) ? data : data.results || []);
    } catch (err) {
      console.error('Error fetching applications:', err);
      setError(err.message || 'Failed to fetch applications');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchApplications();
  };

  const filteredAndSortedApplications = applications
    .filter(app => {
      if (!searchTerm) return true;
      const searchLower = searchTerm.toLowerCase();
      return (
        (app.first_name && app.first_name.toLowerCase().includes(searchLower)) ||
        (app.last_name && app.last_name.toLowerCase().includes(searchLower)) ||
        (app.email && app.email.toLowerCase().includes(searchLower)) ||
        (app.phone && app.phone.includes(searchTerm)) ||
        (app.country && app.country.toLowerCase().includes(searchLower))
      );
    })
    .sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      // Handle null/undefined values
      if (aValue == null) aValue = '';
      if (bValue == null) bValue = '';
      
      // Handle objects/arrays - convert to JSON string or use a safe fallback
      if (typeof aValue === 'object') {
        aValue = Array.isArray(aValue) ? aValue.join(', ') : JSON.stringify(aValue);
      }
      if (typeof bValue === 'object') {
        bValue = Array.isArray(bValue) ? bValue.join(', ') : JSON.stringify(bValue);
      }
      
      // Convert to string for comparison
      aValue = String(aValue).toLowerCase();
      bValue = String(bValue).toLowerCase();
      
      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const getSortIcon = (field) => {
    if (sortBy !== field) return '↕️';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  return (
    <ProtectedRoute requiredKey="admin123">
      <div className="applications-page">
        <div className="applications-header">
          <h1>Applications Dashboard</h1>
          <div className="header-actions">
            <button onClick={handleRefresh} className="refresh-btn" disabled={loading}>
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
        </div>

        <div className="applications-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by name, email, phone, or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="results-info">
            {filteredAndSortedApplications.length} of {applications.length} applications
          </div>
        </div>

        {error && (
          <div className="error-banner">
            <p>Error: {error}</p>
            <button onClick={handleRefresh} className="retry-btn">
              Retry
            </button>
          </div>
        )}

        {loading ? (
          <div className="loading-container">
            <LoadingSpinner />
            <p>Loading applications...</p>
          </div>
        ) : (
          <div className="applications-content">
            {filteredAndSortedApplications.length === 0 ? (
              <div className="no-data">
                <p>No applications found.</p>
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className="clear-search-btn">
                    Clear Search
                  </button>
                )}
              </div>
            ) : (
              <div className="applications-table-container">
                <table className="applications-table">
                  <thead>
                    <tr>
                      <th onClick={() => handleSort('first_name')} className="sortable">
                        Name {getSortIcon('first_name')}
                      </th>
                      <th onClick={() => handleSort('email')} className="sortable">
                        Email {getSortIcon('email')}
                      </th>
                      <th onClick={() => handleSort('phone')} className="sortable">
                        Phone {getSortIcon('phone')}
                      </th>
                      <th onClick={() => handleSort('country')} className="sortable">
                        Country {getSortIcon('country')}
                      </th>
                      <th onClick={() => handleSort('created_at')} className="sortable">
                        Date {getSortIcon('created_at')}
                      </th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAndSortedApplications.map((app, index) => (
                      <tr key={app.id || index}>
                        <td>
                          <div className="name-cell">
                            <strong>{app.first_name} {app.last_name}</strong>
                          </div>
                        </td>
                        <td>
                          <a href={`mailto:${app.email}`} className="email-link">
                            {app.email}
                          </a>
                        </td>
                        <td>
                          <a href={`tel:${app.phone}`} className="phone-link">
                            {app.phone}
                          </a>
                        </td>
                        <td>{app.country || 'N/A'}</td>
                        <td>{formatDate(app.created_at)}</td>
                        <td>
                          <div className="action-buttons">
                            <button 
                              onClick={() => {
                                const details = JSON.stringify(app, null, 2);
                                alert(`Application Details:\n\n${details}`);
                              }}
                              className="view-btn"
                            >
                              View
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default Applications;