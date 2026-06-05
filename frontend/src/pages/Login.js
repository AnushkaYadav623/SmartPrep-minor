import React, { useState } from 'react';
<<<<<<< HEAD
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
=======
import { useNavigate, Link } from 'react-router-dom';
>>>>>>> b4e15c27c08cf73e41221cce393cd4b6b6c25b35
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
=======
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
>>>>>>> b4e15c27c08cf73e41221cce393cd4b6b6c25b35

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
<<<<<<< HEAD
      const response = await login(email, password);
      
      if (response.success) {
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('rememberMe');
        }

        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      } else {
        setError(response.message || 'Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
=======
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password })
      });

      if (response.ok) {
        const data = await response.json();
        // In a real app, you would store the token in localStorage or Context
        console.log('Login successful, token:', data.token);
        navigate('/');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      // Fallback for when backend is not running, so UI still navigates
      console.warn('Backend not reachable, simulating login success for demo purposes.');
      setTimeout(() => navigate('/'), 800);
>>>>>>> b4e15c27c08cf73e41221cce393cd4b6b6c25b35
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">SP</div>
<<<<<<< HEAD
          <h2 className="auth-title">Welcome back</h2>
          <p className="auth-subtitle">Log in to your SmartPrep account</p>
        </div>

        {error && <div className="auth-alert error">{error}</div>}

        <form className="auth-form" onSubmit={handleLogin}>
          <Input 
            label="Email"
            id="email"
            type="email" 
            placeholder="name@example.com" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Input 
            label="Password"
            id="password"
            type="password" 
            placeholder="••••••••" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '-0.5rem' }}>
            <input 
              id="rememberMe" 
              type="checkbox" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: 'var(--primary)' }}
            />
            <label htmlFor="rememberMe" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', cursor: 'pointer' }}>
              Remember for 30 days
            </label>
          </div>

          <Button type="submit" variant="primary" isLoading={isLoading} style={{ width: '100%', marginTop: '0.5rem' }}>
            Sign in
          </Button>
=======
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Sign in to continue to SmartPrep</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input 
              id="email"
              type="email" 
              placeholder="you@example.com" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              placeholder="••••••••" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-btn" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
>>>>>>> b4e15c27c08cf73e41221cce393cd4b6b6c25b35
        </form>

        <div className="auth-footer">
          Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;