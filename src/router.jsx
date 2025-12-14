import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const MBAServices = lazy(() => import('./pages/MBAServices'));
const LawServices = lazy(() => import('./pages/LawServices'));
const CollegeServices = lazy(() => import('./pages/CollegeServices'));
const MBATeam = lazy(() => import('./pages/MBATeam'));
const LawTeam = lazy(() => import('./pages/LawTeam'));
const CollegeTeam = lazy(() => import('./pages/CollegeTeam'));
const FreeConsultation = lazy(() => import('./pages/FreeConsultation'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const About = lazy(() => import('./pages/About'));
const Corporate = lazy(() => import('./pages/Corporate'));
const Contact = lazy(() => import('./pages/Contact'));
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
        path: 'free-consultation',
        element: (
          <LazyLoadWrapper>
            <FreeConsultation />
          </LazyLoadWrapper>
        ),
      },
      {
        path: 'mba',
        children: [
          {
            index: true,
            element: (
              <LazyLoadWrapper>
                <MBAServices />
              </LazyLoadWrapper>
            ),
          },
          {
            path: 'services',
            element: (
              <LazyLoadWrapper>
                <MBAServices />
              </LazyLoadWrapper>
            ),
          },
          {
            path: 'team',
            element: (
              <LazyLoadWrapper>
                <MBATeam />
              </LazyLoadWrapper>
            ),
          },
          {
            path: 'free-consultation',
            element: (
              <LazyLoadWrapper>
                <FreeConsultation />
              </LazyLoadWrapper>
            ),
          },
        ],
      },
      {
        path: 'law',
        children: [
          {
            index: true,
            element: (
              <LazyLoadWrapper>
                <LawServices />
              </LazyLoadWrapper>
            ),
          },
          {
            path: 'services',
            element: (
              <LazyLoadWrapper>
                <LawServices />
              </LazyLoadWrapper>
            ),
          },
          {
            path: 'team',
            element: (
              <LazyLoadWrapper>
                <LawTeam />
              </LazyLoadWrapper>
            ),
          },
          {
            path: 'free-consultation',
            element: (
              <LazyLoadWrapper>
                <FreeConsultation />
              </LazyLoadWrapper>
            ),
          },
        ],
      },
      {
        path: 'college',
        children: [
          {
            index: true,
            element: (
              <LazyLoadWrapper>
                <CollegeServices />
              </LazyLoadWrapper>
            ),
          },
          {
            path: 'services',
            element: (
              <LazyLoadWrapper>
                <CollegeServices />
              </LazyLoadWrapper>
            ),
          },
          {
            path: 'team',
            element: (
              <LazyLoadWrapper>
                <CollegeTeam />
              </LazyLoadWrapper>
            ),
          },
          {
            path: 'free-consultation',
            element: (
              <LazyLoadWrapper>
                <FreeConsultation />
              </LazyLoadWrapper>
            ),
          },
        ],
      },
      {
        path: 'blog',
        children: [
          {
            index: true,
            element: (
              <LazyLoadWrapper>
                <Blog />
              </LazyLoadWrapper>
            ),
          },
          {
            path: ':slug',
            element: (
              <LazyLoadWrapper>
                <BlogPost />
              </LazyLoadWrapper>
            ),
          },
        ],
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
        path: 'corporate',
        element: (
          <LazyLoadWrapper>
            <Corporate />
          </LazyLoadWrapper>
        ),
      },
      {
        path: 'contact',
        element: (
          <LazyLoadWrapper>
            <Contact />
          </LazyLoadWrapper>
        ),
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
