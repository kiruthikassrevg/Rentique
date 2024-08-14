//import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
//import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
//
//function SignIn() {
//  return (
//    <form className="sign-in-form">
//      <h2 className="title">Sign in</h2>
//      <div className="input-field">
//        <FontAwesomeIcon icon={faUser} className="icon" />
//        <input type="text" placeholder="Username" />
//      </div>
//      <div className="input-field">
//        <FontAwesomeIcon icon={faLock} className="icon" />
//        <input type="password" placeholder="Password" />
//      </div>
//      <input type="submit" value="Login" className="btn solid" />
//      <p className="social-text">Or Sign in with social platforms</p>
//      <div className="social-media">
//        <a href='https://www.facebook.com/' className="social-icon">
//          <FontAwesomeIcon icon={faFacebookF} />
//        </a>
//        <a href="https://www.twitter.com" className="social-icon">
//          <FontAwesomeIcon icon={faTwitter} />
//        </a>
//        <a href="https://www.google.com" className="social-icon">
//          <FontAwesomeIcon icon={faGoogle} />
//        </a>
//        <a href="https://www.linkedin.com" className="social-icon">
//          <FontAwesomeIcon icon={faLinkedinIn} />
//        </a>
//      </div>
//    </form>
//  );
//}
//
//export default SignIn;
//
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { email } = response.data; // Adjust based on your API response
        localStorage.setItem('email', email);
        console.log('Email stored in localStorage:', email); // Debugging
        alert('Login successful!');
        navigate('/', { state: { email } });
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
      alert('Error logging in. Please check your credentials.');
    }
  };

  return (
    <form className="sign-in-form" onSubmit={handleSignIn}>
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
