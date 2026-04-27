import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

const AnalysisModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Navigate to dashboard after "analysis"
      navigate('/dashboard');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title">AI Health Analysis</h2>
            <p className="modal-subtitle">Step {step} of 3</p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="modal-form">
          {step === 1 && (
            <div className="modal-field">
              <label>What is your primary health concern?</label>
              <select defaultValue="">
                <option value="" disabled>Select a concern...</option>
                <option value="skin">Skincare & Dermatology</option>
                <option value="hair">Hair Treatment & Safety</option>
                <option value="elderly">Elderly Wellness</option>
                <option value="general">General Consultation</option>
              </select>
            </div>
          )}

          {step === 2 && (
            <div className="modal-field">
              <label>How long have you been experiencing this?</label>
              <select defaultValue="">
                <option value="" disabled>Select duration...</option>
                <option value="days">A few days</option>
                <option value="weeks">A few weeks</option>
                <option value="months">A few months</option>
                <option value="years">More than a year</option>
              </select>
            </div>
          )}

          {step === 3 && (
            <div className="modal-field" style={{ textAlign: 'center', padding: '20px 0' }}>
              <div className="success-icon" style={{ margin: '0 auto 16px' }}>✨</div>
              <h3 style={{ margin: '0 0 8px' }}>Ready for Analysis</h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>
                Our AI is ready to generate your personalized health insights. We will redirect you to your dashboard.
              </p>
            </div>
          )}

          <div className="modal-actions" style={{ marginTop: '16px' }}>
            <button type="button" className="modal-btn-cancel" onClick={onClose}>Cancel</button>
            <button type="button" className="modal-btn-confirm" onClick={handleNext}>
              {step === 3 ? 'Go to Dashboard' : 'Continue'}
              {step < 3 && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dummy data for search suggestions
const SEARCH_SUGGESTIONS = [
  "AI Skin Analysis",
  "Hair Transplant Safety Check",
  "Elderly Home Care Services",
  "Book a General Consultation",
  "Find a Dermatologist near me",
  "Post-surgery Recovery Guide",
];

const Home = () => {
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter suggestions based on input
  const filteredSuggestions = SEARCH_SUGGESTIONS.filter(item => 
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchSelect = (query) => {
    setSearchQuery(query);
    setIsSearchFocused(false);
    // After selection, we could navigate to a results page, but for now let's show a simulated transition
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Where Scientific <span>Precision</span> Meets Human Care.</h1>
          <p>Personalized skincare, safe hair treatments, and elderly wellness services powered by modern technology and expert professionals.</p>
          <button 
            className="btn btn-primary" 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            onClick={() => setShowAnalysisModal(true)}
          >
            Start Your Analysis
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          
          <div className="search-container" ref={searchRef} style={{ position: 'relative' }}>
            <span className="search-icon"><SearchIcon /></span>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search services..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
            />
            
            {/* Search Suggestions Dropdown */}
            {isSearchFocused && (
              <div className="search-dropdown">
                {filteredSuggestions.length > 0 ? (
                  <>
                    <div className="search-dropdown-title">Popular Searches</div>
                    <ul className="search-dropdown-list">
                      {filteredSuggestions.map((suggestion, index) => (
                        <li 
                          key={index} 
                          className="search-dropdown-item"
                          onClick={() => handleSearchSelect(suggestion)}
                        >
                          <SearchIcon />
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <div className="search-dropdown-empty">No matching services found.</div>
                )}
              </div>
            )}
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
            linkTo="/services/skincare"
          />
          <Card 
            icon={<ShieldIcon />}
            title="Hair Safety"
            description="Certified safe hair treatments with professional monitoring."
            linkTo="/services/hair-safety"
          />
          <Card 
            icon={<UserHeartIcon />}
            title="Elderly Wellness"
            description="Home-based grooming and wellness services designed for senior citizens."
            linkTo="/services/elderly-wellness"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <h2>Ready for a Healthier Tomorrow?</h2>
          <p>Join our care ecosystem and get personalized services at your convenience.</p>
          <button className="btn btn-white" onClick={() => setShowAnalysisModal(true)}>Talk to Our Specialist</button>
        </div>
      </section>

      {showAnalysisModal && <AnalysisModal onClose={() => setShowAnalysisModal(false)} />}
    </main>
  );
};

export default Home;
