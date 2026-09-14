import React from 'react';

export default function FinalCta() {
  return (
    <section className="section final-cta-section" id="finalcta" aria-labelledby="cta-heading">
      <div className="container final-cta-container text-center">
        
        <div className="final-cta-orb" aria-hidden="true"></div>

        <div className="badge badge-emerald">Get Started</div>
        
        <h2 className="cta-heading" id="cta-heading">
          Ready to<br />
          <span className="gradient-text">Stop Guessing?</span>
        </h2>

        <p className="cta-subtext">
          Everything between you and your next U.S. job is finally in one place.
        </p>

        <div className="cta-btn-wrap">
          <a href="https://carrer-gps-asess.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-xl btn-shimmer" id="finalActionBtn">
            <span>Start Your FREE Career GPS Assessment →</span>
          </a>
          <p className="cta-trust-note">
            Free · No credit card · Takes 3 minutes
          </p>
        </div>

      </div>
    </section>
  );
}
