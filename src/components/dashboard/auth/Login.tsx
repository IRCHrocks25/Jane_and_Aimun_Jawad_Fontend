import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import '@/styles/login.css';

interface LoginForm {
  username: string;
  password: string;
}

const LOGIN_ILLUSTRATION =
  'https://katalyst-crm.com/wp-content/uploads/2024/10/Katalyst-Project-2.1.png';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    try {
      // Use localhost instead of 127.0.0.1 to match React's origin
      const djangoUrl = 'http://localhost:8000';
      
      // First, get CSRF token from Django
      const csrfResponse = await axios.get(`${djangoUrl}/dashboard/login/`, {
        withCredentials: true,
        headers: {
          'Accept': 'application/json',
        },
      });
      
      // Get token from response (primary) or cookie (fallback)
      const csrfToken = csrfResponse.data?.csrf_token || getCookie('csrftoken');
      
      if (!csrfToken) {
        console.error('CSRF Response:', csrfResponse.data);
        throw new Error('Failed to get CSRF token');
      }
      
      console.log('CSRF Token received:', csrfToken ? 'YES' : 'NO');
      
      // Authenticate with Django using JSON
      const loginResponse = await axios.post(
        `${djangoUrl}/dashboard/login/`,
        {
          username: data.username,
          password: data.password,
        },
        {
          withCredentials: true,
          headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        }
      );
      
      // If successful, redirect to Django dashboard
      if (loginResponse.data?.success) {
        toast.success('Login successful!');
        setTimeout(() => {
          window.location.href = 'http://localhost:8000/dashboard/';
        }, 500);
      } else {
        throw new Error('Login failed');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      const errorMessage = error?.response?.data?.error || 
                          error?.response?.data?.message || 
                          error?.message || 
                          'Login failed. Please check your credentials.';
      toast.error(errorMessage);
      setLoading(false);
    }
  };

  // Helper to get CSRF token from cookies
  function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }

  return (
    <div className="login-page">
      {/* Glow background effects */}
      <div className="login-background-glow">
        <div className="login-glow-cyan" />
        <div className="login-glow-violet" />
        <div className="login-radial-gradient" />
      </div>

      <div className="login-container">
        <div className="login-card">
          {/* Left column – image */}
          <div className="login-image-section">
            <div className="login-image-wrapper">
              <img
                src={LOGIN_ILLUSTRATION}
                alt="Centaura CMS dashboard preview"
                className="login-image"
              />
            </div>
            <div className="login-image-overlay" />
            <div className="login-image-content">
              <p className="login-image-badge">Centaura CMS</p>
              <h2 className="login-image-title">
                Your command center for<br />client, deals & dashboards.
              </h2>
              <p className="login-image-description">
                Log in to manage content, media, and high-converting landing pages
                from a single, intelligent control panel.
              </p>
            </div>
          </div>

          {/* Right column – login form */}
          <div className="login-form-section">
            <div className="login-form-wrapper">
              {/* Header */}
              <div className="login-header">
                <div className="login-badge">
                  <span className="login-badge-dot" />
                  <span className="login-badge-text">Secure Admin Access</span>
                </div>
                <h1 className="login-title">Welcome back, creator.</h1>
                <p className="login-subtitle">
                  Sign in to your{' '}
                  <span className="login-subtitle-highlight">
                    Centaura Content Studio
                  </span>{' '}
                  to update pages, media, and SEO in real time.
                </p>
              </div>

              <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="login-form-fields">
                  <div className="login-field">
                    <label htmlFor="username" className="login-label">
                      Username
                    </label>
                    <input
                      {...register('username', { required: 'Username is required' })}
                      type="text"
                      id="username"
                      autoComplete="username"
                      className="login-input"
                      placeholder="your.username"
                    />
                    {errors.username && (
                      <p className="login-error">{errors.username.message}</p>
                    )}
                  </div>

                  <div className="login-field">
                    <div className="login-label-row">
                      <label htmlFor="password" className="login-label">
                        Password
                      </label>
                      <span className="login-label-hint">
                        Protected with encrypted session
                      </span>
                    </div>
                    <input
                      {...register('password', { required: 'Password is required' })}
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      className="login-input"
                      placeholder="••••••••"
                    />
                    {errors.password && (
                      <p className="login-error">{errors.password.message}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="login-button"
                >
                  {loading ? 'Logging you in…' : 'Enter Dashboard'}
                </button>

                <p className="login-disclaimer">
                  By signing in, you confirm you have authorized access to this
                  workspace. Activity may be logged for security and compliance.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
