// Temporary test file to verify React is mounting
import React from 'react';

function TestApp() {
  return (
    <div style={{ 
      padding: '50px', 
      background: 'red', 
      color: 'white', 
      fontSize: '24px',
      minHeight: '100vh'
    }}>
      <h1>TEST: React is working!</h1>
      <p>If you see this, React is mounting correctly.</p>
    </div>
  );
}

export default TestApp;

