import axios from 'axios';

// Use production backend URL in production, otherwise use localhost or env variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || 
  (import.meta.env.PROD 
    ? 'https://janeandaimunjawadbackend-production.up.railway.app/api'
    : 'http://localhost:8000/api');

export const authService = {
  async login(username: string, password: string): Promise<void> {
    // Authenticate with Django
    // Note: API_BASE_URL already includes /api, so we don't add it again
    const response = await axios.post(
      `${API_BASE_URL}/auth/login/`,
      { username, password },
      { withCredentials: true } // Important for session cookies
    );
    
    if (response.data.token) {
      // Store token if using JWT
      localStorage.setItem('auth_token', response.data.token);
    }
    
    return response.data;
  },
  
  async logout(): Promise<void> {
    localStorage.removeItem('auth_token');
    // Optionally call Django logout endpoint
    // Note: API_BASE_URL already includes /api, so we don't add it again
    try {
      await axios.post(`${API_BASE_URL}/auth/logout/`, {}, { withCredentials: true });
    } catch (error) {
      // Ignore errors on logout
    }
  },
  
  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  },
};

