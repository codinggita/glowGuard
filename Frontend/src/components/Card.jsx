import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const Card = ({ icon, title, description, linkTo = "/" }) => {
  const navigate = useNavigate();

  return (
    <div className="service-card" onClick={() => navigate(linkTo)} style={{ cursor: 'pointer' }}>
      <div className="service-icon-wrapper">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="learn-more">
        Learn More <ChevronRightIcon />
      </div>
    </div>
  );
};

export default Card;
