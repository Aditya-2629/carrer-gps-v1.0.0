import React, { useState, useEffect } from 'react';
import brandLogo from '../assets/images/crafture-logo.jpg';
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = ['hero', 'problem', 'careergps', 'features', 'human', 'pricing', 'howitworks', 'faq'];
      const scrollPos = window.scrollY + 180;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner" id="mainHeader">
      <div className="container nav-container">
        <a href="#hero" className="brand-logo" aria-label="Career GPS Home" onClick={() => setIsDrawerOpen(false)}>
          <img src={brandLogo} alt="Career GPS Logo" className="brand-logo-img" width="36" height="36" />
          <span className="brand-name">Career <span className="brand-accent">GPS</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary Navigation" className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#problem" className={`nav-link ${activeNav === 'problem' ? 'active' : ''}`}>Overview</a></li>
            <li><a href="#careergps" className={`nav-link ${activeNav === 'careergps' ? 'active' : ''}`}>Career GPS</a></li>
            <li><a href="#features" className={`nav-link ${activeNav === 'features' ? 'active' : ''}`}>System</a></li>
            <li><a href="#human" className={`nav-link ${activeNav === 'human' ? 'active' : ''}`}>Human + AI</a></li>
            <li><a href="#pricing" className={`nav-link ${activeNav === 'pricing' ? 'active' : ''}`}>Pricing</a></li>
            <li><a href="#howitworks" className={`nav-link ${activeNav === 'howitworks' ? 'active' : ''}`}>Process</a></li>
            <li><a href="#faq" className={`nav-link ${activeNav === 'faq' ? 'active' : ''}`}>FAQ</a></li>
          </ul>
        </nav>

        {/* Nav Action CTA & Theme Switcher */}
        <div className="nav-actions">
          <ThemeToggle />

          <a href="https://carrer-gps-asess.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn-shimmer btn-sm nav-cta" id="navFreeAnalysisBtn">
            <span>Free Analysis</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-nav-toggle" 
            id="mobileMenuBtn" 
            aria-label="Toggle navigation menu" 
            aria-expanded={isDrawerOpen}
            onClick={() => setIsDrawerOpen(prev => !prev)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`} id="mobileDrawer" style={{ display: isDrawerOpen ? 'flex' : 'none' }}>
        <a href="#hero" className="mobile-link" onClick={() => setIsDrawerOpen(false)}>Home</a>
        <a href="#problem" className="mobile-link" onClick={() => setIsDrawerOpen(false)}>Overview</a>
        <a href="#careergps" className="mobile-link" onClick={() => setIsDrawerOpen(false)}>Career GPS</a>
        <a href="#features" className="mobile-link" onClick={() => setIsDrawerOpen(false)}>System</a>
        <a href="#human" className="mobile-link" onClick={() => setIsDrawerOpen(false)}>Human + AI</a>
        <a href="#pricing" className="mobile-link" onClick={() => setIsDrawerOpen(false)}>Pricing</a>
        <a href="#howitworks" className="mobile-link" onClick={() => setIsDrawerOpen(false)}>Process</a>
        <a href="#community" className="mobile-link" onClick={() => setIsDrawerOpen(false)}>Community</a>
        <a href="#faq" className="mobile-link" onClick={() => setIsDrawerOpen(false)}>FAQ</a>
        
        <div className="mobile-drawer-theme-row">
          <span className="mobile-theme-text">Theme Preference</span>
          <ThemeToggle showLabel={true} className="mobile-theme-btn" />
        </div>

        <div className="mobile-drawer-cta">
          <a href="https://carrer-gps-asess.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
            Start Free Assessment
          </a>
        </div>
      </div>
    </header>
  );
}
