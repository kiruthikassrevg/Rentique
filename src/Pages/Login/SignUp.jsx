//import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
//import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
//
//function SignUp() {
//  return (
//    <form className="sign-up-form">
//      <h2 className="title">Sign up</h2>
//      <div className="input-field">
//        <FontAwesomeIcon icon={faUser} className="icon" />
//        <input type="text" placeholder="Username" />
//      </div>
//      <div className="input-field">
//        <FontAwesomeIcon icon={faEnvelope} className="icon" />
//        <input type="email" placeholder="Email" />
//      </div>
//      <div className="input-field">
//        <FontAwesomeIcon icon={faLock} className="icon" />
//        <input type="password" placeholder="Password" />
//      </div>
//      <input type="submit" className="btn" value="Sign up" />
//      <p className="social-text">Or Sign up with social platforms</p>
//      <div className="social-media">
//        <a href="https://www.facebook.com" className="social-icon">
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
//export default SignUp;

import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users/create', {
        username,
        email,
        password,
      });
      alert('User registered successfully!');
    } catch (error) {
      console.error("There was an error registering the user!", error);
      alert('Error registering user');
    }
  };

  return (
    <form className="sign-up-form" onSubmit={handleSignUp}>
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <input type="submit" className="btn" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
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
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
}

export default SignUp;
//