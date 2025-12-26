# GLOBALINK - University Consulting Platform

A modern, responsive React application for Global Link Admissions, providing comprehensive university admissions consulting services. Built with React, Vite, and modern web technologies.

## 🚀 Features

### Core Functionality
- **Multi-page Application** with React Router
- **Responsive Design** optimized for all devices
- **Modern UI/UX** with smooth animations and transitions
- **Form Management** with React Hook Form
- **SEO Optimization** with React Helmet Async
- **Performance Optimized** with lazy loading and code splitting

### Key Pages
- **Home** - Hero section, value propositions, testimonials, and statistics
- **About** - Company information and team details
- **Apply** - Comprehensive application form with validation
- **Contact** - Contact information and inquiry form with EmailJS integration
- **Applications Dashboard** - Protected route for application management
- **Legal Pages** - Privacy Policy and Terms of Service

### Technical Features
- **Protected Routes** with authentication
- **API Integration** for form submissions
- **Animated Components** using Framer Motion
- **Custom Hooks** for form validation and scroll animations
- **Modular CSS** with CSS variables and responsive design
- **Error Boundaries** for graceful error handling
- **Loading States** and user feedback

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS3 with CSS Variables
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **SEO**: React Helmet Async
- **Icons**: React Icons
- **HTTP Client**: Fetch API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fortuna-admissions
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🏗️ Project Structure

```
fortuna-admissions/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   └── back.jpg           # Hero background
├── src/
│   ├── components/        # Reusable components
│   │   ├── common/        # Shared components
│   │   ├── forms/         # Form components
│   │   ├── home/          # Home page components
│   │   ├── layout/        # Layout components
│   │   └── services/      # Service components
│   ├── data/              # Static data files
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── services/          # API services
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── router.jsx         # Route configuration
├── package.json
└── vite.config.js
```

## 🎨 Design System

### Color Palette
- **Primary Green**: #63B54A (Brand color)
- **Soft Light Green**: #8FD26A (Accent)
- **Deep Navy**: #1E2A4A (Text)
- **Primary Dark Blue**: #0F3A5F (Headers)
- **Secondary Navy Blue**: #1E2A4A (Backgrounds)

### Typography
- **Heading Font**: Inter (System font stack)
- **Body Font**: Inter (System font stack)
- **Font Sizes**: Responsive clamp() functions

### Components
- **Cards**: Consistent padding, shadows, and hover effects
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Forms**: Comprehensive validation and error handling
- **Animations**: Smooth transitions and scroll-triggered animations

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_URL=your_api_endpoint
VITE_APP_TITLE=Fortuna Admissions
```

### API Configuration
The application connects to a backend API for:
- Application form submissions
- Contact form handling
- Newsletter subscriptions

API endpoint configuration is in `src/services/api.js`.

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## 🚀 Performance Optimizations

### Code Splitting
- Lazy loading for all page components
- Dynamic imports for heavy components
- Route-based code splitting

### Image Optimization
- WebP format support
- Responsive image loading
- Optimized asset delivery

### CSS Optimization
- CSS variables for consistent theming
- Minimal CSS bundle size
- Critical CSS inlining

## 🔒 Security Features

- **Protected Routes** with authentication
- **Form Validation** on client and server side
- **XSS Protection** with proper data sanitization
- **CORS Configuration** for API security

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## 🐛 Recent Fixes & Improvements

### Layout Stability Fixes
- **Hero Button Alignment**: Fixed button misalignment on page navigation
- **ValueProps Layout**: Resolved grid collapse issues in "What Makes Us Different" section
- **Animation Timing**: Improved Framer Motion animation reliability

### Code Cleanup
- **Unused Components**: Removed 24 unused files and components
- **Dead Code Elimination**: Cleaned up unused imports and dependencies
- **File Structure**: Organized components and improved maintainability

### Performance Improvements
- **CSS Grid Stability**: Implemented layout containment for better performance
- **Animation Optimization**: Added `will-change` properties for smoother animations
- **Bundle Size**: Reduced overall bundle size through cleanup



