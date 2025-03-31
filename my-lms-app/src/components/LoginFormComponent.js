import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginFormComponent = () => {
  const { authData, setAuthData } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setAuthData({
        type: 'error',
        message: 'Username and password cannot be empty.',
      });
      return;
    }
  
    if (password.length < 8) {
      setAuthData({
        type: 'error',
        message: 'Password must be at least 8 characters long.',
      });
      return;
    }
  
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
  
      const match = users.find(
        (user) => user.username === username && user.email === password
      );
  
      if (match) {
        setAuthData({
          type: 'success',
          message: 'Login successful! Redirecting...',
        });
      } else {
        setAuthData({
          type: 'error',
          message: 'Invalid username or password.',
        });
      }
    } catch (err) {
      setAuthData({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    }
  };
  

  useEffect(() => {
    if (authData.type === 'success') {
      const timer = setTimeout(() => {
        navigate('/courses');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [authData, navigate]);

  return (
    <main className="login-form">
      <h2>Login</h2>
  
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
  
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
  
      <button onClick={handleLogin}>Login</button>
  
      <p className="forgot-password">Forgot Password?</p>
    </main>
  );
}  

export default LoginFormComponent;
