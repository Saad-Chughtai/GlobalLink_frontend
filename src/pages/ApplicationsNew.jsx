import React, { useState, useEffect } from 'react';

const ApplicationsNew = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [securityKey, setSecurityKey] = useState('');
  const [error, setError] = useState('');
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  // Check authentication on mount
  useEffect(() => {
    const storedAuth = sessionStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch applications when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchApplications();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (securityKey === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('isAuthenticated', 'true');
      setError('');
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
      const response = await fetch('https://globallink.eu.pythonanywhere.com/api/applications/');
      if (response.ok) {
        const data = await response.json();
        setApplications(Array.isArray(data) ? data : data.results || []);
      } else {
        console.error('Failed to fetch applications');
      }
    } catch (err) {
      console.error('Error fetching applications:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filter applications based on search and filter criteria
  const filteredApplications = applications.filter(app => {
    // Search filter - matching Django model fields
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const searchableFields = [
        app.first_name, app.last_name, app.email, app.phone, 
        app.country_of_residence, app.nationality, app.preferred_course,
        app.institution_name, app.field_of_study, app.level_of_study
      ];
      
      const matchesSearch = searchableFields.some(field => 
        field && String(field).toLowerCase().includes(searchLower)
      );
      
      if (!matchesSearch) return false;
    }
    
    // Category filter based on Django model fields
    if (filterBy !== 'all') {
      switch (filterBy) {
        case 'recent':
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          const appDate = new Date(app.created_at);
          return appDate >= oneWeekAgo;
        case 'undergraduate':
          return app.level_of_study && String(app.level_of_study).toLowerCase().includes('undergraduate');
        case 'postgraduate':
          return app.level_of_study && (
            String(app.level_of_study).toLowerCase().includes('postgraduate') ||
            String(app.level_of_study).toLowerCase().includes('master') ||
            String(app.level_of_study).toLowerCase().includes('phd')
          );
        case 'uk_residents':
          return app.country_of_residence && String(app.country_of_residence).toLowerCase().includes('uk');
        default:
          return true;
      }
    }
    
    return true;
  });

  // Login form
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

  // Dashboard
  return (
    <div style={{ padding: '20px', maxWidth: '1600px', margin: '0 auto', background: '#f8f9fa', minHeight: '100vh' }}>
      {/* Header */}
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

      {/* Main Content */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
        overflow: 'hidden'
      }}>
        {/* Search and Filter Controls */}
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
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s'
                }}
              />
            </div>
            
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              style={{
                padding: '12px 16px',
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '14px',
                background: 'white',
                minWidth: '180px'
              }}
            >
              <option value="all">📋 All Applications</option>
              <option value="recent">🕒 Recent (Last 7 days)</option>
              <option value="undergraduate">🎓 Undergraduate</option>
              <option value="postgraduate">📚 Postgraduate</option>
              <option value="uk_residents">🇬🇧 UK Residents</option>
            </select>
            
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
                fontWeight: '500',
                minWidth: '120px'
              }}
            >
              {loading ? '⏳ Loading...' : '🔄 Refresh'}
            </button>
          </div>

          <div style={{ 
            marginTop: '15px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            fontSize: '14px',
            color: '#4a5568'
          }}>
            <span>
              📊 Showing <strong>{filteredApplications.length}</strong> of <strong>{applications.length}</strong> applications
            </span>
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                style={{
                  background: '#718096',
                  color: 'white',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                ✕ Clear Search
              </button>
            )}
          </div>
        </div>

        {/* Applications Table */}
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
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600', color: '#2d3748' }}>👤 Name</th>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600', color: '#2d3748' }}>📧 Contact</th>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600', color: '#2d3748' }}>🌍 Location</th>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600', color: '#2d3748' }}>🎓 Academic</th>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600', color: '#2d3748' }}>📚 Course</th>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600', color: '#2d3748' }}>🗣️ English</th>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600', color: '#2d3748' }}>📅 Submitted</th>
                        <th style={{ padding: '15px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', fontWeight: '600', color: '#2d3748' }}>⚡ Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredApplications.map((app, index) => (
                        <tr key={app.id || index} style={{ 
                          borderBottom: '1px solid #e2e8f0',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.parentElement.style.backgroundColor = '#f7fafc'}
                        onMouseLeave={(e) => e.target.parentElement.style.backgroundColor = 'white'}
                        >
                          <td style={{ padding: '15px 12px', verticalAlign: 'top' }}>
                            <div style={{ fontWeight: '600', color: '#2d3748', marginBottom: '4px' }}>
                              {[app.first_name, app.last_name].filter(Boolean).join(' ') || 'N/A'}
                            </div>
                            <div style={{ fontSize: '12px', color: '#718096' }}>
                              ID: {app.id || index + 1}
                            </div>
                          </td>
                          <td style={{ padding: '15px 12px', verticalAlign: 'top' }}>
                            <div style={{ marginBottom: '4px' }}>
                              {app.email ? (
                                <a href={`mailto:${app.email}`} style={{ 
                                  color: '#3182ce', 
                                  textDecoration: 'none',
                                  fontSize: '13px'
                                }}>
                                  📧 {app.email}
                                </a>
                              ) : 'N/A'}
                            </div>
                            <div>
                              {app.phone ? (
                                <a href={`tel:${app.phone}`} style={{ 
                                  color: '#38a169', 
                                  textDecoration: 'none',
                                  fontSize: '13px'
                                }}>
                                  📱 {app.phone}
                                </a>
                              ) : 'N/A'}
                            </div>
                          </td>
                          <td style={{ padding: '15px 12px', verticalAlign: 'top' }}>
                            <div style={{ marginBottom: '4px', fontWeight: '500' }}>
                              🏠 {app.country_of_residence || 'N/A'}
                            </div>
                            <div style={{ fontSize: '12px', color: '#718096' }}>
                              🌍 {app.nationality || 'N/A'}
                            </div>
                            {app.city && (
                              <div style={{ fontSize: '12px', color: '#718096' }}>
                                📍 {app.city}
                              </div>
                            )}
                          </td>
                          <td style={{ padding: '15px 12px', verticalAlign: 'top' }}>
                            <div style={{ marginBottom: '4px', fontWeight: '500' }}>
                              🎓 {app.highest_qualification || 'N/A'}
                            </div>
                            <div style={{ fontSize: '12px', color: '#718096', marginBottom: '2px' }}>
                              📖 {app.field_of_study || 'N/A'}
                            </div>
                            {app.institution_name && (
                              <div style={{ fontSize: '12px', color: '#718096' }}>
                                🏫 {app.institution_name}
                              </div>
                            )}
                            {app.grades_or_cgpa && (
                              <div style={{ fontSize: '12px', color: '#718096' }}>
                                📊 {app.grades_or_cgpa}
                              </div>
                            )}
                          </td>
                          <td style={{ padding: '15px 12px', verticalAlign: 'top' }}>
                            <div style={{ marginBottom: '4px', fontWeight: '500' }}>
                              📚 {app.level_of_study || 'N/A'}
                            </div>
                            <div style={{ fontSize: '12px', color: '#718096', marginBottom: '2px' }}>
                              🎯 {app.preferred_course || 'N/A'}
                            </div>
                            {app.preferred_intake && (
                              <div style={{ fontSize: '12px', color: '#718096' }}>
                                📅 {app.preferred_intake}
                              </div>
                            )}
                          </td>
                          <td style={{ padding: '15px 12px', verticalAlign: 'top' }}>
                            <div style={{ marginBottom: '4px', fontWeight: '500' }}>
                              🗣️ {app.english_test || 'N/A'}
                            </div>
                            {app.english_score && (
                              <div style={{ fontSize: '12px', color: '#718096' }}>
                                📊 Score: {app.english_score}
                              </div>
                            )}
                          </td>
                          <td style={{ padding: '15px 12px', verticalAlign: 'top' }}>
                            <div style={{ fontSize: '12px', color: '#718096' }}>
                              {app.created_at ? 
                                new Date(app.created_at).toLocaleDateString('en-GB', {
                                  day: '2-digit',
                                  month: 'short',
                                  year: 'numeric'
                                }) : 'N/A'}
                            </div>
                            <div style={{ fontSize: '11px', color: '#a0aec0' }}>
                              {app.created_at ? 
                                new Date(app.created_at).toLocaleTimeString('en-GB', {
                                  hour: '2-digit',
                                  minute: '2-digit'
                                }) : ''}
                            </div>
                          </td>
                          <td style={{ padding: '15px 12px', verticalAlign: 'top' }}>
                            <button
                              onClick={() => {
                                const details = [
                                  '🎓 UK UNIVERSITY APPLICATION DETAILS',
                                  '=' .repeat(50),
                                  '',
                                  '👤 PERSONAL INFORMATION:',
                                  `Name: ${app.first_name || ''} ${app.last_name || ''}`,
                                  `Email: ${app.email || 'N/A'}`,
                                  `Phone: ${app.phone || 'N/A'}`,
                                  `Date of Birth: ${app.date_of_birth || 'N/A'}`,
                                  `Gender: ${app.gender || 'N/A'}`,
                                  '',
                                  '🌍 LOCATION & NATIONALITY:',
                                  `Country of Residence: ${app.country_of_residence || 'N/A'}`,
                                  `City: ${app.city || 'N/A'}`,
                                  `Nationality: ${app.nationality || 'N/A'}`,
                                  `Immigration Status: ${app.immigration_status || 'N/A'}`,
                                  '',
                                  '🎓 ACADEMIC BACKGROUND:',
                                  `Highest Qualification: ${app.highest_qualification || 'N/A'}`,
                                  `Field of Study: ${app.field_of_study || 'N/A'}`,
                                  `Institution: ${app.institution_name || 'N/A'}`,
                                  `Grades/CGPA: ${app.grades_or_cgpa || 'N/A'}`,
                                  '',
                                  '🗣️ ENGLISH PROFICIENCY:',
                                  `Test Type: ${app.english_test || 'N/A'}`,
                                  `Score: ${app.english_score || 'N/A'}`,
                                  '',
                                  '📚 COURSE PREFERENCES:',
                                  `Level of Study: ${app.level_of_study || 'N/A'}`,
                                  `Preferred Course: ${app.preferred_course || 'N/A'}`,
                                  `Preferred Intake: ${app.preferred_intake || 'N/A'}`,
                                  '',
                                  '📄 DOCUMENTS:',
                                  `Passport: ${app.passport ? 'Uploaded ✓' : 'Not uploaded'}`,
                                  `Academic Transcripts: ${app.academic_transcripts ? 'Uploaded ✓' : 'Not uploaded'}`,
                                  '',
                                  '💬 ADDITIONAL INFORMATION:',
                                  `Message: ${app.message || 'None'}`,
                                  `Agreed to Contact: ${app.agreed_to_contact ? 'Yes' : 'No'}`,
                                  '',
                                  '📅 SUBMISSION:',
                                  `Created: ${app.created_at ? new Date(app.created_at).toLocaleString() : 'N/A'}`,
                                ].join('\n');
                                
                                alert(details);
                              }}
                              style={{
                                background: '#4299e1',
                                color: 'white',
                                border: 'none',
                                padding: '8px 12px',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: '500'
                              }}
                            >
                              👁️ View Full
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
                  <h3 style={{ marginBottom: '10px', color: '#4a5568' }}>No applications found</h3>
                  <p>Applications will appear here once students submit their UK university applications.</p>
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')}
                      style={{
                        marginTop: '15px',
                        background: '#4299e1',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        cursor: 'pointer'
                      }}
                    >
                      Clear Search Filter
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationsNew;