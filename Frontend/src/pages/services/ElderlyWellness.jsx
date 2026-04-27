import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Home, UserCheck, CheckCircle, ArrowLeft } from 'lucide-react';

const ElderlyWellness = () => {
  return (
    <div className="service-detail-page">
      <div className="main-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <section className="service-hero">
          <div className="service-hero-content">
            <div className="service-tag">Compassionate Care</div>
            <h1>Premium <span>Elderly Wellness</span> Services</h1>
            <p className="service-lead">
              Home-based grooming, health tracking, and companionship services specifically designed for senior citizens.
            </p>
            <Link to="/register" className="btn btn-primary">Request Home Visit</Link>
          </div>
          <div className="service-hero-icon elderly-icon">
            <Heart size={80} strokeWidth={1.5} />
          </div>
        </section>

        <section className="service-features">
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon"><Home size={24} /></div>
              <h3>In-Home Grooming</h3>
              <p>Professional salon and hygiene services in the comfort and safety of home.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><UserCheck size={24} /></div>
              <h3>Certified Caregivers</h3>
              <p>Every specialist is background-checked and trained in geriatric care protocols.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><CheckCircle size={24} /></div>
              <h3>Wellness Logs</h3>
              <p>Real-time updates for family members about the wellness and activity levels.</p>
            </div>
          </div>
        </section>

        <section className="service-info-section">
          <div className="info-content">
            <h2>Dignity and Care in Every Service</h2>
            <p>
              We believe that aging should be graceful and well-supported. Our elderly wellness program combines technology with a human touch, ensuring that our seniors feel valued, clean, and healthy.
            </p>
            <div className="info-stats">
              <div className="stat-card">
                <h4>24/7</h4>
                <p>Family notification system</p>
              </div>
              <div className="stat-card">
                <h4>500+</h4>
                <p>Satisfied senior families</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ElderlyWellness;
