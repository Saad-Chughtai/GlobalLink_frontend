import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import ErrorBoundary from './components/common/ErrorBoundary';
import './styles/index.css';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
