import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, Award, CheckCircle, ArrowLeft } from 'lucide-react';

const HairSafety = () => {
  return (
    <div className="service-detail-page">
      <div className="main-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <section className="service-hero">
          <div className="service-hero-content">
            <div className="service-tag">Safety First</div>
            <h1>Professional <span>Hair Safety</span> Monitoring</h1>
            <p className="service-lead">
              Certified safe hair treatments with real-time scalp health monitoring and professional chemical analysis.
            </p>
            <Link to="/register" className="btn btn-primary">Book Consultation</Link>
          </div>
          <div className="service-hero-icon hair-icon">
            <ShieldCheck size={80} strokeWidth={1.5} />
          </div>
        </section>

        <section className="service-features">
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon"><Award size={24} /></div>
              <h3>Certified Products</h3>
              <p>We only use products that pass our strict 50-point chemical safety check.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Activity size={24} /></div>
              <h3>Scalp Health Index</h3>
              <p>Measure your scalp sensitivity and health before and after any chemical treatment.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><CheckCircle size={24} /></div>
              <h3>Allergy Testing</h3>
              <p>Mandatory patch testing recorded and verified in your digital health profile.</p>
            </div>
          </div>
        </section>

        <section className="service-info-section">
          <div className="info-content">
            <h2>Your Safety is Our Top Priority</h2>
            <p>
              In an industry where chemical treatments are often performed without enough data, GlowGuard brings transparency. We monitor the concentration levels and exposure times to ensure your hair and scalp remain healthy.
            </p>
            <div className="info-stats">
              <div className="stat-card">
                <h4>0</h4>
                <p>Adverse reactions reported</p>
              </div>
              <div className="stat-card">
                <h4>100%</h4>
                <p>Ingredient transparency</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HairSafety;
