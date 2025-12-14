import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

console.log('main.jsx: Starting React app...');
console.log('main.jsx: Root element:', document.getElementById('root'));

try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  console.log('main.jsx: Root created successfully');
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log('main.jsx: App rendered successfully');
} catch (error) {
  console.error('main.jsx: Error rendering app:', error);
  document.getElementById('root').innerHTML = `
    <div style="padding: 20px; background: red; color: white;">
      <h1>Error Loading App</h1>
      <p>${error.message}</p>
      <pre>${error.stack}</pre>
    </div>
  `;
}
