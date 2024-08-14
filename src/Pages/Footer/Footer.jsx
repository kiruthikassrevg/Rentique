// Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/Rentique-whiteback.png';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
        <img src = {logo} alt ='logo'/>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <a href="/Aboutus">About Us</a>
            <a href="/TC">terms and conditions</a>
            <a href="/Rev">Review</a>
          </div>
          <div className="footer-column">
            <h3>Customer Service</h3>
            <a href="/PrivacyPolicy">Privacy Policy</a>
            <a href="/Faq">Faq</a>
            <a href="/Contactus">Contact Us</a>
            <a href="/ReturnPolicy">Return Policy</a>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>rentique@gmail.com
            +91876543210
            Coimbatore</p>
          </div>
        </div>
        
        
        <div className="footer-social">
          
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 FashionRent. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
