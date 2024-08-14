import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const adminEmail = 'kiruthi@gmail.com';
  const adminPassword = 'kk22';

  const handleSignIn = async (e) => {
    e.preventDefault();

    console.log('Attempting to sign in with email:', email);

    // Check if the credentials are for the admin
    if (email === adminEmail && password === adminPassword) {
      alert('Admin login successful!');
      localStorage.setItem('email', email);
      navigate('/admin/dashboard', { state: { email } }); 
      return;
    }

    // Proceed with regular user login
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });

      console.log('Server response:', response);

      if (response.status === 200) {
        const { email } = response.data;
        localStorage.setItem('email', email);
        console.log('Email stored in localStorage:', email);

        alert('Login successful!');
        navigate('/', { state: { email } });
      } else {
        console.log('Login failed with status:', response.status);
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert('Error logging in. Please check your credentials.');
    }
  };

  return (
    <form className="sign-in-form" onSubmit={handleSignIn}>
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ textTransform: 'lowercase' }}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ textTransform: 'lowercase' }}
        />
      </div>
      <input type="submit" value="Login" className="btn solid" />
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <a href="https://www.facebook.com/signup" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/i/flow/signup" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://myaccount.google.com/" className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="https://appleid.apple.com/sign-in" className="social-icon">
          <i className="fab fa-apple"></i>
        </a>
      </div>
    </form>
  );
}

export default SignIn;