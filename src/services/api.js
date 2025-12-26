// API Configuration
// In development with Vite proxy, use relative URLs
// In production, use full URL from environment variable
const API_BASE_URL = import.meta.env.DEV 
  ? (import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000')
  : (import.meta.env.VITE_API_BASE_URL || 'https://globallink.eu.pythonanywhere.com');

/**
 * API Service for consultation forms
 */
class ApiService {
  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  /**
   * Make a GET request to the API
   * @param {string} endpoint - API endpoint (e.g., '/api/applications/')
   * @returns {Promise<object>}
   */
  async get(endpoint) {
    const url = `${this.baseURL}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = 
          errorData.message || 
          errorData.detail || 
          errorData.error ||
          `HTTP error! status: ${response.status}`;
        
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
   * Make a POST request to the API
   * @param {string} endpoint - API endpoint (e.g., '/api/applications/')
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
   * Get Applications
   * @returns {Promise<object>}
   */
  async getApplications() {
    return this.get('/api/applications/');
  }

  /**
   * Submit General Consultation
   * @param {object} data - Form data
   * @returns {Promise<object>}
   */
  async submitGeneralConsultation(data) {
    return this.post('/api/consultations/', data);
  }
}

// Export singleton instance
export const apiService = new ApiService();

// Export individual functions for convenience
export const getApplications = () =>
  apiService.getApplications();

export const submitGeneralConsultation = (data) =>
  apiService.submitGeneralConsultation(data);

export default apiService;

