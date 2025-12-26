import { useState, useEffect } from 'react';

const ApplicationsFixed = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [securityKey, setSecurityKey] = useState('');
  const [error, setError] = useState('');
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedAuth = sessionStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
      fetchApplications();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (securityKey === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('isAuthenticated', 'true');
      setError('');
      fetchApplications();
    } else {
      setError('Invalid security key');
      setSecurityKey('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
    setSecurityKey('');
  };

  const fetchApplications = async () => {
    setLoading(true);
    try {
      console.log('🔄 Fetching applications from:', 'http://127.0.0.1:8000/api/applications/');
      
      const response = await fetch('http://127.0.0.1:8000/api/applications/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors', // Explicitly set CORS mode
      });
      
      console.log('📡 Response status:', response.status);
      console.log('📡 Response ok:', response.ok);
      console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));
      
      if (response.ok) {
        const data = await response.json();
        console.log('📊 Raw API data:', data);
        console.log('📊 Data type:', typeof data);
        console.log('📊 Is array:', Array.isArray(data));
        
        const processedData = Array.isArray(data) ? data : data.results || [];
        console.log('📊 Processed applications:', processedData);
        console.log('📊 Applications count:', processedData.length);
        
        setApplications(processedData);
      } else {
        console.error('❌ Failed to fetch applications. Status:', response.status);
        const errorText = await response.text();
        console.error('❌ Error response:', errorText);
      }
    } catch (err) {
      console.error('❌ Network error fetching applications:', err);
      console.error('❌ Error details:', err.message);
      console.error('❌ Error stack:', err.stack);
      
      // Check if it's a CORS error
      if (err.message.includes('CORS') || err.message.includes('fetch')) {
        console.error('🚨 This looks like a CORS issue. Check your Django CORS settings.');
      }
    } finally {
      setLoading(false);
    }
  };

  const filteredApplications = applications.filter(app => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    const searchableFields = [
      app.first_name, app.last_name, app.email, app.phone, 
      app.country_of_residence, app.nationality, app.preferred_course,
      app.institution_name, app.field_of_study, app.level_of_study
    ];
    
    return searchableFields.some(field => 
      field && String(field).toLowerCase().includes(searchLower)
    );
  });

  if (!isAuthenticated) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
            🔐 Admin Access Required
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
            Please enter the security key to access the applications dashboard.
          </p>
          
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Security Key
              </label>
              <input
                type="password"
                value={securityKey}
                onChange={(e) => setSecurityKey(e.target.value)}
                placeholder="Enter security key"
                required
                autoFocus
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e1e5e9',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            
            {error && (
              <div style={{
                background: '#fee',
                color: '#c53030',
                padding: '12px',
                borderRadius: '6px',
                marginBottom: '20px',
                fontSize: '14px',
                border: '1px solid #fed7d7'
              }}>
                {error}
              </div>
            )}
            
            <button 
              type="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '14px 20px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1600px', margin: '0 auto', background: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        background: 'white',
        padding: '25px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)'
      }}>
        <div>
          <h1 style={{ margin: 0, color: '#1a202c', fontSize: '28px' }}>🎓 UK University Applications</h1>
          <p style={{ margin: '5px 0 0 0', color: '#718096', fontSize: '14px' }}>
            Comprehensive admissions dashboard
          </p>
        </div>
        <button 
          onClick={handleLogout}
          style={{
            background: '#e53e3e',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          🚪 Logout
        </button>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
        overflow: 'hidden'
      }}>
        <div style={{ 
          padding: '25px', 
          background: '#f7fafc', 
          borderBottom: '1px solid #e2e8f0'
        }}>
          <div style={{
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <input
                type="text"
                placeholder="🔍 Search by name, email, phone, course, institution..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
            </div>
            
            <button 
              onClick={fetchApplications}
              disabled={loading}
              style={{
                background: loading ? '#a0aec0' : '#48bb78',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '8px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              {loading ? '⏳ Loading...' : '🔄 Refresh'}
            </button>
          </div>

          <div style={{ 
            marginTop: '15px', 
            fontSize: '14px',
            color: '#4a5568'
          }}>
            📊 Showing <strong>{filteredApplications.length}</strong> of <strong>{applications.length}</strong> applications
            {process.env.NODE_ENV === 'development' && (
              <div style={{ marginTop: '10px', fontSize: '12px', color: '#718096' }}>
                🔧 Debug: API URL = http://127.0.0.1:8000/api/applications/ | Loading: {loading ? 'Yes' : 'No'}
              </div>
            )}
          </div>
        </div>

        <div style={{ padding: '25px' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>⏳</div>
              <p style={{ color: '#718096', fontSize: '16px' }}>Loading applications...</p>
            </div>
          ) : (
            <>
              {filteredApplications.length > 0 ? (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse', 
                    fontSize: '14px',
                    background: 'white'
                  }}>
                    <thead>
                      <tr style={{ background: '#edf2f7' }}>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600' }}>👤 Name</th>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600' }}>📧 Contact</th>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600' }}>🌍 Location</th>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600' }}>🎓 Academic</th>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600' }}>📚 Course</th>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600' }}>🗣️ English</th>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600' }}>📅 Date</th>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600' }}>⚡ Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredApplications.map((app, index) => (
                        <tr key={app.id || index} style={{ borderBottom: '1px solid #e2e8f0' }}>
                          <td style={{ padding: '15px 12px' }}>
                            <div style={{ fontWeight: '600', marginBottom: '4px' }}>
                              {[app.first_name, app.last_name].filter(Boolean).join(' ') || 'N/A'}
                            </div>
                            <div style={{ fontSize: '12px', color: '#718096' }}>
                              ID: {app.id || index + 1}
                            </div>
                          </td>
                          <td style={{ padding: '15px 12px' }}>
                            <div style={{ marginBottom: '4px' }}>
                              {app.email ? (
                                <a href={`mailto:${app.email}`} style={{ color: '#3182ce', textDecoration: 'none', fontSize: '13px' }}>
                                  📧 {app.email}
                                </a>
                              ) : 'N/A'}
                            </div>
                            <div>
                              {app.phone ? (
                                <a href={`tel:${app.phone}`} style={{ color: '#38a169', textDecoration: 'none', fontSize: '13px' }}>
                                  📱 {app.phone}
                                </a>
                              ) : 'N/A'}
                            </div>
                          </td>
                          <td style={{ padding: '15px 12px' }}>
                            <div style={{ marginBottom: '4px', fontWeight: '500' }}>
                              🏠 {app.country_of_residence || 'N/A'}
                            </div>
                            <div style={{ fontSize: '12px', color: '#718096' }}>
                              🌍 {app.nationality || 'N/A'}
                            </div>
                          </td>
                          <td style={{ padding: '15px 12px' }}>
                            <div style={{ marginBottom: '4px', fontWeight: '500' }}>
                              🎓 {app.highest_qualification || 'N/A'}
                            </div>
                            <div style={{ fontSize: '12px', color: '#718096' }}>
                              📖 {app.field_of_study || 'N/A'}
                            </div>
                          </td>
                          <td style={{ padding: '15px 12px' }}>
                            <div style={{ marginBottom: '4px', fontWeight: '500' }}>
                              📚 {app.level_of_study || 'N/A'}
                            </div>
                            <div style={{ fontSize: '12px', color: '#718096' }}>
                              🎯 {app.preferred_course || 'N/A'}
                            </div>
                          </td>
                          <td style={{ padding: '15px 12px' }}>
                            <div style={{ marginBottom: '4px', fontWeight: '500' }}>
                              🗣️ {app.english_test || 'N/A'}
                            </div>
                            {app.english_score && (
                              <div style={{ fontSize: '12px', color: '#718096' }}>
                                📊 {app.english_score}
                              </div>
                            )}
                          </td>
                          <td style={{ padding: '15px 12px' }}>
                            <div style={{ fontSize: '12px', color: '#718096' }}>
                              {app.created_at ? 
                                new Date(app.created_at).toLocaleDateString('en-GB') : 'N/A'}
                            </div>
                          </td>
                          <td style={{ padding: '15px 12px' }}>
                            <button
                              onClick={() => {
                                const details = Object.entries(app)
                                  .map(([key, value]) => `${key}: ${value || 'N/A'}`)
                                  .join('\n');
                                alert(`Application Details:\n\n${details}`);
                              }}
                              style={{
                                background: '#4299e1',
                                color: 'white',
                                border: 'none',
                                padding: '8px 12px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '12px'
                              }}
                            >
                              👁️ View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '60px', color: '#718096' }}>
                  <div style={{ fontSize: '64px', marginBottom: '20px' }}>📋</div>
                  <h3 style={{ marginBottom: '10px' }}>No applications found</h3>
                  <p>Applications will appear here once students submit their forms.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationsFixed;