import React from 'react';
import brandLogo from '../assets/images/crafture-logo.jpg';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
    <div className="container footer-container">
      
      <div className="footer-brand">
        <img src={brandLogo} alt="Career GPS Logo" className="footer-logo-img" width="28" height="28" />
        <span className="footer-title">CAREER <span className="brand-accent">GPS™</span></span>
      </div>

      <nav aria-label="Footer Navigation" className="footer-nav">
        <a href="#problem">Problem</a>
        <a href="#careergps">Career GPS</a>
        <a href="#features">System</a>
        <a href="#human">Human + AI</a>
        <a href="#pricing">Pricing</a>
        <a href="#community">Community</a>
        <a href="#faq">FAQ</a>
      </nav>

      <div className="footer-copy">
        © 2026 Career GPS Inc. All rights reserved.
      </div>

    </div>
  </footer>
  );
}
