# CORS Setup Guide

If you're getting "Failed to fetch" errors, this is likely a CORS (Cross-Origin Resource Sharing) issue.

## Quick Fix: Use Vite Proxy (Recommended for Development)

The `vite.config.js` has been configured with a proxy that automatically forwards `/api/*` requests to `http://127.0.0.1:8000`. This avoids CORS issues in development.

**Restart your Vite dev server** after the configuration change:
```bash
npm run dev
```

## Alternative: Configure Django CORS Headers

If you prefer to handle CORS on the Django side:

### 1. Install django-cors-headers
```bash
pip install django-cors-headers
```

### 2. Add to INSTALLED_APPS in settings.py
```python
INSTALLED_APPS = [
    ...
    'corsheaders',
    ...
]
```

### 3. Add Middleware
```python
MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ...
]
```

### 4. Configure CORS Settings
```python
# Allow requests from Vite dev server
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

# Or allow all origins in development (NOT for production)
# CORS_ALLOW_ALL_ORIGINS = True

# Allow credentials if needed
CORS_ALLOW_CREDENTIALS = True

# Allow specific headers
CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]
```

### 5. Restart Django Server
```bash
python manage.py runserver
```

## Testing the Connection

1. Check if Django server is running:
   ```bash
   curl http://127.0.0.1:8000/api/law-consultations/
   ```

2. Check browser console for detailed error messages

3. Check Network tab in browser DevTools to see the actual request/response

## Common Issues

1. **Django server not running**: Make sure Django is running on port 8000
2. **Wrong port**: Check if Django is on a different port
3. **CORS not configured**: Follow the Django CORS setup above
4. **Firewall blocking**: Check if firewall is blocking the connection

