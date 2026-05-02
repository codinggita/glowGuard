import React from 'react';
import { Camera, Droplets, Wind, Sun, AlertTriangle, Activity, Microscope, FileText, Shield, Scan } from 'lucide-react';


const SkinAnalysis = () => {
  return (
    <div className="skin-analysis-container">
      <div className="page-header">
        <h1>Skin Analysis</h1>
        <p>Advanced AI scanning for personalized dermatological care.</p>
      </div>

      <div className="dashboard-grid analysis-grid">
        {/* LEFT COLUMN: Main Content (70%) */}
        <div className="left-column">
          
          {/* Face Scan Card */}
          <section className="analysis-card face-scan-card">
            <div className="card-header">
              <h2>Face Scan</h2>
              <p className="subtitle">Upload a clear photo in natural light for best results.</p>
            </div>
            
            <div className="upload-box" id="upload-box">
              <div className="upload-content">
                <div className="upload-icon-wrapper">
                  <Camera size={40} className="upload-icon" />
                </div>
                <span className="upload-text">Tap to upload photo</span>
                <span className="upload-subtext">JPG, PNG (Max 10MB)</span>
              </div>
            </div>

            <div className="checkbox-container">
              <label className="custom-checkbox">
                <input type="checkbox" id="prep-checkbox" />
                <span className="checkmark"></span>
                <span className="checkbox-label">Remove glasses and makeup. Ensure your hair is pulled back from your face for accurate topographic mapping.</span>
              </label>
            </div>

            <button className="primary-btn pulse-effect">
              <Scan size={20} />
              Analyze My Skin
            </button>
          </section>

          {/* Environmental Factors Card */}
          <section className="analysis-card env-factors-card">
            <div className="card-header flex-between">
              <h2>Environmental Factors</h2>
              <span className="badge live-badge"><span className="dot"></span>LIVE: SAN FRANCISCO</span>
            </div>

            <div className="progress-bars">
              {/* Humidity */}
              <div className="progress-item">
                <div className="progress-label">
                  <div className="label-left">
                    <div className="icon-box blue-icon"><Droplets size={20} /></div>
                    <span>Humidity</span>
                  </div>
                  <span className="value">42%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill blue-fill" style={{ width: '42%' }}></div>
                </div>
              </div>

              {/* Pollution */}
              <div className="progress-item">
                <div className="progress-label">
                  <div className="label-left">
                    <div className="icon-box orange-icon"><Wind size={20} /></div>
                    <span>Pollution (AQI)</span>
                  </div>
                  <span className="value orange-text">Moderate</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill orange-fill" style={{ width: '60%' }}></div>
                </div>
              </div>

              {/* UV Index */}
              <div className="progress-item">
                <div className="progress-label">
                  <div className="label-left">
                    <div className="icon-box red-icon"><Sun size={20} /></div>
                    <span>UV Index</span>
                  </div>
                  <span className="value red-text">8 (High)</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill red-fill" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>

            {/* Warning Alert */}
            <div className="alert-box warning-alert">
              <AlertTriangle size={24} className="alert-icon" />
              <div className="alert-content">
                <strong>Active Recommendation</strong>
                <p>High UV levels detected. Apply broad-spectrum SPF 50+ and stay in the shade during peak hours (10 AM - 4 PM).</p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Sidebar (30%) */}
        <div className="right-column">
          
          {/* Tracking Progress */}
          <section className="analysis-card tracking-card dark-card">
            <h2>Tracking Progress</h2>
            <div className="stats-grid">
              <div className="stat-box">
                <span className="stat-label">Hydration</span>
                <span className="stat-value positive">+12%</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Elasticity</span>
                <span className="stat-value positive">+4%</span>
              </div>
            </div>
          </section>

          {/* Neural Mapping */}
          <section className="analysis-card info-card">
            <div className="card-icon"><Activity size={24} /></div>
            <div className="card-content">
              <h3>Neural Mapping</h3>
              <p>Our AI identifies over 50 unique skin markers including hydration levels and pore density.</p>
            </div>
          </section>

          {/* Clinical Log */}
          <section className="analysis-card info-card">
            <div className="card-icon"><FileText size={24} /></div>
            <div className="card-content">
              <h3>Clinical Log</h3>
              <p>Automatically record and compare scans over time to see the efficacy of your treatment plan.</p>
            </div>
          </section>

          {/* Privacy First */}
          <section className="analysis-card info-card">
            <div className="card-icon"><Shield size={24} /></div>
            <div className="card-content">
              <h3>Privacy First</h3>
              <p>Encryption ensures your biometric data remains yours alone. HIPAA compliant storage.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SkinAnalysis;
