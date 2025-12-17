// API Configuration
// In development with Vite proxy, use relative URLs
// In production, use full URL from environment variable
const API_BASE_URL = import.meta.env.DEV 
  ? (import.meta.env.VITE_API_BASE_URL || 'https://globallink.eu.pythonanywhere.com')
  : (import.meta.env.VITE_API_BASE_URL || 'https://globallink.eu.pythonanywhere.com');

/**
 * API Service for consultation forms
 */
class ApiService {
  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  /**
   * Make a POST request to the API
   * @param {string} endpoint - API endpoint (e.g., '/api/law-consultations/')
   * @param {object} data - Data to send
   * @param {boolean} isFormData - Whether to send as FormData (for file uploads)
   * @returns {Promise<Response>}
   */
  async post(endpoint, data, isFormData = false) {
    const url = `${this.baseURL}${endpoint}`;
    
    let headers = {};
    let body;

    if (isFormData) {
      // For FormData, let browser set Content-Type with boundary
      body = data;
    } else {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
        mode: 'cors', // Explicitly set CORS mode
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = 
          errorData.message || 
          errorData.detail || 
          errorData.error ||
          `HTTP error! status: ${response.status}`;
        
        // Log detailed error for debugging
        if (import.meta.env.DEV) {
          console.error('API Error Details:', {
            url,
            status: response.status,
            statusText: response.statusText,
            errorData,
          });
        }
        
        throw new Error(errorMessage);
      }

      return response.json();
    } catch (error) {
      // Enhanced error handling for network/CORS issues
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        const corsError = new Error(
          `Failed to connect to API. This is likely a CORS issue.\n\n` +
          `Please ensure:\n` +
          `1. Django CORS is configured (django-cors-headers)\n` +
          `2. CORS_ALLOWED_ORIGINS includes 'http://localhost:5173'\n` +
          `3. The Django server is running on ${this.baseURL}\n\n` +
          `Original error: ${error.message}`
        );
        corsError.originalError = error;
        throw corsError;
      }
      throw error;
    }
  }

  /**
   * Submit College Consultation
   * @param {object} data - Form data
   * @returns {Promise<object>}
   */
  async submitCollegeConsultation(data) {
    return this.post('/api/college-consultations/', data);
  }

  /**
   * Submit MBA Consultation
   * @param {object} data - Form data
   * @returns {Promise<object>}
   */
  async submitMBAConsultation(data) {
    return this.post('/api/mba-consultations/', data);
  }

  /**
   * Submit Law School Consultation
   * @param {object} data - Form data (may include File object for resume)
   * @returns {Promise<object>}
   */
  async submitLawSchoolConsultation(data) {
    // Check if resume file is present
    const hasFile = data.resume && data.resume instanceof File;
    
    if (import.meta.env.DEV) {
      console.log('Submitting Law School Consultation:', {
        hasFile,
        resume: data.resume,
        resumeType: data.resume ? typeof data.resume : 'null',
        isFile: data.resume instanceof File,
        law_schools: data.law_schools_considering,
        services: data.services_interested,
      });
    }
    
    // Arrays that need to be sent as JSON strings
    const arrayFields = ['law_schools_considering', 'services_interested'];
    
    if (hasFile) {
      // Use FormData for file upload
      const formData = new FormData();
      
      // Append all fields to FormData
      Object.keys(data).forEach((key) => {
        if (key === 'resume' && data[key] instanceof File) {
          formData.append('resume', data[key]);
          if (import.meta.env.DEV) {
            console.log('Appending resume file:', data[key].name, data[key].size);
          }
        } else if (arrayFields.includes(key) && Array.isArray(data[key])) {
          // Send arrays as JSON strings for Django to parse
          formData.append(key, JSON.stringify(data[key]));
          if (import.meta.env.DEV) {
            console.log(`Appending ${key} as JSON:`, JSON.stringify(data[key]));
          }
        } else if (data[key] !== null && data[key] !== undefined && data[key] !== '') {
          // Convert boolean strings to actual booleans
          if (data[key] === 'true' || data[key] === true) {
            formData.append(key, 'true');
          } else if (data[key] === 'false' || data[key] === false) {
            formData.append(key, 'false');
          } else {
            formData.append(key, data[key]);
          }
        }
      });
      
      if (import.meta.env.DEV) {
        // Log FormData contents for debugging
        console.log('FormData entries:');
        for (let pair of formData.entries()) {
          if (pair[1] instanceof File) {
            console.log(pair[0] + ': [File]', pair[1].name, pair[1].size);
          } else {
            console.log(pair[0] + ': ', pair[1]);
          }
        }
      }
      
      return this.post('/api/law-consultations/', formData, true);
    } else {
      // Regular JSON request (no file)
      // Remove resume from data if it's null/undefined
      const { resume, ...jsonData } = data;
      
      // Convert boolean strings to actual booleans
      Object.keys(jsonData).forEach((key) => {
        if (jsonData[key] === 'true') {
          jsonData[key] = true;
        } else if (jsonData[key] === 'false') {
          jsonData[key] = false;
        }
      });
      
      // Arrays are already in correct format for JSON
      if (import.meta.env.DEV) {
        console.log('Sending JSON data:', jsonData);
      }
      
      return this.post('/api/law-consultations/', jsonData);
    }
  }
}

// Export singleton instance
export const apiService = new ApiService();

// Export individual functions for convenience
export const submitCollegeConsultation = (data) =>
  apiService.submitCollegeConsultation(data);

export const submitMBAConsultation = (data) =>
  apiService.submitMBAConsultation(data);

export const submitLawSchoolConsultation = (data) =>
  apiService.submitLawSchoolConsultation(data);

export default apiService;

