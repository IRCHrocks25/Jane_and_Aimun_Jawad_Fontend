import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

export const authService = {
  async login(username: string, password: string): Promise<void> {
    // Authenticate with Django
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/login/`,
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
    try {
      await axios.post(`${API_BASE_URL}/api/auth/logout/`, {}, { withCredentials: true });
    } catch (error) {
      // Ignore errors on logout
    }
  },
  
  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  },
};

