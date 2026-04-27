import React from 'react';
import { Link } from 'react-router-dom';

const ActivityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <ActivityIcon />
            GlowGuard
          </div>
          <p>Personalized skincare, safe hair treatments, and elderly wellness services powered by modern technology and expert professionals.</p>
        </div>
        
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/skincare">Precision Skincare</Link></li>
            <li><Link to="/services/hair-safety">Hair Safety</Link></li>
            <li><Link to="/services/elderly-wellness">Elderly Wellness</Link></li>
            <li><Link to="/">AI Analysis</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><Link to="/#about">About Us</Link></li>
            <li><Link to="/#careers">Careers</Link></li>
            <li><Link to="/#blog">Blog</Link></li>
            <li><Link to="/#press">Press</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><Link to="/#contact">Contact</Link></li>
            <li><Link to="/#faq">FAQ</Link></li>
            <li><Link to="/#privacy">Privacy Policy</Link></li>
            <li><Link to="/#terms">Terms</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 GlowGuard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
