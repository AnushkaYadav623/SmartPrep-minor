import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
<<<<<<< HEAD
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
=======
>>>>>>> b4e15c27c08cf73e41221cce393cd4b6b6c25b35
import './Auth.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { signup } = useAuth();

  const validateForm = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await signup(name, email, password);
      
      if (response.success) {
        setSuccess('Account created successfully! Redirecting...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError(response.message || 'Registration failed. Please try a different email.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
=======
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      if (response.ok) {
        // Automatically log the user in or redirect to login
        navigate('/');
      } else {
        setError('Registration failed. Please try a different email.');
      }
    } catch (err) {
      // Fallback for when backend is not running, so UI still navigates
      console.warn('Backend not reachable, simulating signup success for demo purposes.');
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
          <h2 className="auth-title">Create an account</h2>
          <p className="auth-subtitle">Start organizing your studies today</p>
        </div>

        {error && <div className="auth-alert error">{error}</div>}
        {success && <div className="auth-alert success">{success}</div>}

        <form className="auth-form" onSubmit={handleSignup}>
          <Input 
            label="Full Name"
            id="name"
            type="text" 
            placeholder="John Doe" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <Input 
            label="Confirm Password"
            id="confirmPassword"
            type="password" 
            placeholder="••••••••" 
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button type="submit" variant="primary" isLoading={isLoading} style={{ width: '100%', marginTop: '0.5rem' }}>
            Sign up
          </Button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/login" className="auth-link">Log in</Link>
=======
          <h2 className="auth-title">Create an Account</h2>
          <p className="auth-subtitle">Join SmartPrep to supercharge your studies</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form className="auth-form" onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input 
              id="name"
              type="text" 
              placeholder="John Doe" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/login" className="auth-link">Sign in</Link>
>>>>>>> b4e15c27c08cf73e41221cce393cd4b6b6c25b35
        </div>
      </div>
    </div>
  );
};

export default Signup;