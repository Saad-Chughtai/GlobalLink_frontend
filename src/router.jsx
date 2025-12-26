import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
// Import Applications and Contact directly instead of lazy loading
import ApplicationsFixed from './pages/ApplicationsFixed';
import Contact from './pages/Contact';

// Lazy load remaining pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Apply = lazy(() => import('./pages/Apply'));
const UKAdmissionForm = lazy(() => import('./pages/UKAdmissionForm'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Wrapper component for Suspense
const LazyLoadWrapper = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <LazyLoadWrapper>
            <Home />
          </LazyLoadWrapper>
        ),
      },
      {
        path: 'about',
        element: (
          <LazyLoadWrapper>
            <About />
          </LazyLoadWrapper>
        ),
      },
      {
        path: 'apply',
        element: (
          <LazyLoadWrapper>
            <Apply />
          </LazyLoadWrapper>
        ),
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'uk-admission',
        element: (
          <LazyLoadWrapper>
            <UKAdmissionForm />
          </LazyLoadWrapper>
        ),
      },
      {
        path: 'applications',
        element: <ApplicationsFixed />,
      },
      {
        path: 'privacy-policy',
        element: (
          <LazyLoadWrapper>
            <PrivacyPolicy />
          </LazyLoadWrapper>
        ),
      },
      {
        path: 'terms-of-service',
        element: (
          <LazyLoadWrapper>
            <TermsOfService />
          </LazyLoadWrapper>
        ),
      },
      {
        path: '*',
        element: (
          <LazyLoadWrapper>
            <NotFound />
          </LazyLoadWrapper>
        ),
      },
    ],
  },
]);
