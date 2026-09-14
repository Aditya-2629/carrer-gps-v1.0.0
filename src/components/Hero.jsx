import React, { useState, useEffect } from 'react';

export default function Hero() {
  const keywords = ['prep interviews', 'ship code', 'work your day job', 'relax and sleep'];
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex(prev => (prev + 1) % keywords.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [keywords.length]);

  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-title">
      <div className="container hero-container">
        
        {/*  Live Status Pill Badge  */}
        <div className="hero-badge-wrap">
          <span className="badge badge-emerald">
            <span className="pulse-dot" aria-hidden="true"></span>
            AI Career Operating System
          </span>
        </div>

        {/*  Main Headline  */}
        <h1 className="hero-title" id="hero-title">
          Everything Between You and Your<br />
          <span className="gradient-text">Next U.S. Job—In One Place.</span>
        </h1>

        {/*  Dynamic Rotating Subtitle (Referso Pattern)  */}
        <div className="hero-rotating-wrap">
          <span>Career GPS powers your search while you</span>
          <span className="rotating-pill" id="rotatingKeyword">{keywords[keywordIndex]}</span>
        </div>

        {/*  Hero Description Copy  */}
        <p className="hero-desc">
          Stop paying for multiple AI tools, expensive consultancies, and disconnected courses. Crafture is the AI-powered Career Operating System that identifies what's blocking your job search, automates repetitive work, and gives you expert guidance—so you can focus on getting hired.
        </p>

        {/*  Primary Call to Actions  */}
        <div className="hero-cta-group">
          <a href="https://carrer-gps-asess.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg btn-shimmer" id="heroStartBtn">
            <span>Start Your FREE Career GPS Assessment</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="#pricing" className="btn btn-secondary btn-lg" id="heroPricingBtn">
            <span>See Pricing</span>
          </a>
        </div>

        {/*  Trust Checkpoints Grid (Referso Badge Pattern)  */}
        <div className="hero-trust-list">
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="trust-icon" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
            <span>No Heavy Upfront Consultancy Fees</span>
          </div>
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="trust-icon" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>No Salary Percentage</span>
          </div>
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="trust-icon" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>AI + Human Experts</span>
          </div>
          <div className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="trust-icon" aria-hidden="true">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            <span>Built for U.S. IT & Non-IT Professionals</span>
          </div>
        </div>

      </div>
    </section>
  );
}
