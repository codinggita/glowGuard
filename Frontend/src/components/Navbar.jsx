import React from 'react';
import { Link } from 'react-router-dom';

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const ActivityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const Navbar = () => {
  return (
    <header className="header">
      <div className="main-container">
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <ActivityIcon />
          GlowGuard
        </Link>
        <nav className="desktop-nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
          <Link to="/dashboard" className="nav-login-btn">Dashboard</Link>
          <Link to="/login" className="nav-login-btn">Log In</Link>
          <Link to="/register" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}>Sign Up</Link>
        </nav>
        <button className="hamburger">
          <HamburgerIcon />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

