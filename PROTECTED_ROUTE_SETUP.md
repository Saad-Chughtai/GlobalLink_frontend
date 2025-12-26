# Protected Applications Route

## Overview
A secure route has been implemented to view application data from the API endpoint `http://127.0.0.1:8000/api/applications/`.

## Access Information
- **Route**: `/applications`
- **Security Key**: `admin123`
- **API Endpoint**: `http://127.0.0.1:8000/api/applications/`

## Features

### Security
- Protected route requiring a security key
- Session-based authentication (stays logged in during browser session)
- Logout functionality
- Automatic redirect to login form if not authenticated

### Applications Dashboard
- Displays all applications from the API
- Search functionality (by name, email, phone, country)
- Sortable columns (click column headers to sort)
- Responsive design for mobile and desktop
- Refresh button to reload data
- Error handling with retry functionality

### Data Display
- Name (first name + last name)
- Email (clickable mailto link)
- Phone (clickable tel link)
- Country
- Creation date (formatted)
- View button to see full application details

## Usage

1. Navigate to `/applications` in your browser
2. Enter the security key: `admin123`
3. Click "Access Page" to enter the dashboard
4. Use the search box to filter applications
5. Click column headers to sort data
6. Click "View" button to see full application details
7. Use "Logout" button to exit the protected area

## Technical Implementation

### Components Created
- `ProtectedRoute.jsx` - Security wrapper component
- `Applications.jsx` - Main dashboard page
- Updated `api.js` - Added GET method for applications

### API Configuration
- Development: `http://127.0.0.1:8000`
- Production: `https://globallink.eu.pythonanywhere.com`

### Security Notes
- Security key is stored in sessionStorage (cleared when browser closes)
- Change the `requiredKey` prop in `ProtectedRoute` component to update the security key
- For production, consider implementing proper JWT authentication

## Customization

### Change Security Key
Edit the `requiredKey` prop in `Applications.jsx`:
```jsx
<ProtectedRoute requiredKey="your-new-key">
```

### Modify API Endpoint
Update the `getApplications()` method in `api.js` to change the endpoint.

### Styling
- `ProtectedRoute.css` - Login form styling
- `Applications.css` - Dashboard styling