# API Integration Test

## Test the FinalForm API Integration

### 1. Start Your Backend API
Make sure your Django/FastAPI backend is running on `http://127.0.0.1:8000`

### 2. Start the Frontend
```bash
npm run dev
```

### 3. Test the Form

**Option A: Home Page**
- Visit `http://localhost:5173/`
- Scroll down to find the UK University Admission Form
- Fill out the form and submit

**Option B: Standalone Page**
- Visit `http://localhost:5173/uk-admission`
- Fill out the form and submit

### 4. Expected API Request

When you submit the form, it will send a POST request to:
```
POST http://127.0.0.1:8000/api/applications/
Content-Type: application/json
```

With this JSON structure:
```json
{
  "first_name": "Saad",
  "last_name": "Habib", 
  "email": "saad.habib@example.com",
  "phone": "+92-300-1234567",
  "date_of_birth": "1999-08-15",
  "gender": "Male",
  "country_of_residence": "Pakistan",
  "city": "Lahore",
  "nationality": "Pakistani",
  "immigration_status": "Student Visa",
  "highest_qualification": "Bachelor's Degree",
  "field_of_study": "Software Engineering",
  "institution_name": "FAST University",
  "grades_or_cgpa": "3.45",
  "english_test": "IELTS",
  "english_score": "7.0",
  "level_of_study": "Postgraduate",
  "preferred_course": "Artificial Intelligence",
  "preferred_intake": "September",
  "message": "Looking for scholarship opportunities",
  "agreed_to_contact": true
}
```

### 5. Error Handling

The form includes error handling for:
- Network connection issues
- API server errors (4xx, 5xx responses)
- Form validation errors
- CORS issues (if any)

### 6. CORS Configuration

If you encounter CORS errors, make sure your backend allows:
- Origin: `http://localhost:5173`
- Methods: `POST, OPTIONS`
- Headers: `Content-Type`

### 7. Success Response

On successful submission:
- Form will reset automatically
- Success message will be displayed
- Console will log the API response

### 8. Debugging

Check browser console for:
- Form data transformation logs
- API request/response details
- Any error messages