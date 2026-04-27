import React from 'react';

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
            HealthCare+
          </div>
          <p>Personalized skincare, safe hair treatments, and elderly wellness services powered by modern technology and expert professionals.</p>
        </div>
        
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Precision Skincare</a></li>
            <li><a href="#">Hair Safety</a></li>
            <li><a href="#">Elderly Wellness</a></li>
            <li><a href="#">AI Analysis</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 HealthCare+. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
