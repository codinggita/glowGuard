import React from 'react';
import Card from '../components/Card';
import healthcareRoomImg from '../assets/healthcare_room_3d.png';

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const ActivityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"></path>
  </svg>
);

const UserHeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
    <path d="M16 11l2 2 4-4" stroke="#2AA7A0"></path>
  </svg>
);

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Where Scientific <span>Precision</span> Meets Human Care.</h1>
          <p>Personalized skincare, safe hair treatments, and elderly wellness services powered by modern technology and expert professionals.</p>
          <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            Start Your Analysis
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          
          <div className="search-container">
            <span className="search-icon"><SearchIcon /></span>
            <input type="text" className="search-input" placeholder="Search services..." />
          </div>
        </div>
      </section>

      {/* Image Card Section */}
      <section className="image-card-section">
        <div className="image-card-container">
          <div className="image-card">
            <div className="floating-icon icon-1">
              <ActivityIcon />
            </div>
            <div className="floating-icon icon-2">
              <ShieldIcon />
            </div>
            <img src={healthcareRoomImg} alt="Modern Healthcare Room" />
          </div>
          <div className="image-card-heading">
            <h2>Comprehensive Specialists</h2>
            <p>Our team of expert professionals provides personalized care tailored to your unique needs. From AI-powered skin analysis to safe hair treatments and elderly wellness services, we ensure the highest quality of care with cutting-edge technology and compassionate service.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="services-grid">
          <Card 
            icon={<SparklesIcon />}
            title="Precision Skincare"
            description="AI-powered skin analysis and customized treatment recommendations."
          />
          <Card 
            icon={<ShieldIcon />}
            title="Hair Safety"
            description="Certified safe hair treatments with professional monitoring."
          />
          <Card 
            icon={<UserHeartIcon />}
            title="Elderly Wellness"
            description="Home-based grooming and wellness services designed for senior citizens."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <h2>Ready for a Healthier Tomorrow?</h2>
          <p>Join our care ecosystem and get personalized services at your convenience.</p>
          <button className="btn btn-white">Talk to Our Specialist</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
