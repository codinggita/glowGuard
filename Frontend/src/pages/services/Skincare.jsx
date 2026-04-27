import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Clock, CheckCircle, ArrowLeft } from 'lucide-react';

const Skincare = () => {
  return (
    <div className="service-detail-page">
      <div className="main-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <section className="service-hero">
          <div className="service-hero-content">
            <div className="service-tag">AI-Powered Precision</div>
            <h1>Precision <span>Skincare</span> Analysis</h1>
            <p className="service-lead">
              Our advanced AI technology analyzes your skin at a microscopic level to provide personalized treatment plans that actually work.
            </p>
            <Link to="/register" className="btn btn-primary">Start Free Analysis</Link>
          </div>
          <div className="service-hero-icon skincare-icon">
            <Sparkles size={80} strokeWidth={1.5} />
          </div>
        </section>

        <section className="service-features">
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon"><Shield size={24} /></div>
              <h3>Deep Pore Mapping</h3>
              <p>We analyze 14 different skin markers including hydration, sebum, and melanin levels.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Clock size={24} /></div>
              <h3>Real-time Tracking</h3>
              <p>Monitor your skin's progress over time with our dynamic dashboard and weekly scans.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><CheckCircle size={24} /></div>
              <h3>Safe Ingredients</h3>
              <p>Every recommendation is double-checked against your known allergies and sensitivities.</p>
            </div>
          </div>
        </section>

        <section className="service-info-section">
          <div className="info-content">
            <h2>Scientific Precision meets Dermatological Expertise</h2>
            <p>
              Unlike generic skincare routines, GlowGuard's Precision Skincare uses proprietary algorithms trained on millions of dermatological images. We don't just guess your skin type; we measure it.
            </p>
            <div className="info-stats">
              <div className="stat-card">
                <h4>98%</h4>
                <p>Accuracy in skin type detection</p>
              </div>
              <div className="stat-card">
                <h4>15k+</h4>
                <p>Personalized routines generated</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skincare;
