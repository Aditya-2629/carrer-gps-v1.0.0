import React, { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const keywords = ['prep interviews', 'ship code', 'work your day job', 'relax and sleep'];
  const [keywordIndex, setKeywordIndex] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex(prev => (prev + 1) % keywords.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [keywords.length]);

  // Ambient fluid gradient canvas effect (Indigo, Violet, Emerald base colors)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    let t = 0;
    let mouse = { x: width * 0.5, y: height * 0.35 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      t += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Node 1: Primary Electric Indigo
      const x1 = width * 0.45 + Math.sin(t * 0.9) * (width * 0.22) + (mouse.x - width * 0.5) * 0.08;
      const y1 = height * 0.35 + Math.cos(t * 0.7) * (height * 0.18) + (mouse.y - height * 0.3) * 0.08;
      const r1 = Math.min(width, height) * 0.65;
      const g1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, r1);
      g1.addColorStop(0, 'rgba(99, 102, 241, 0.40)');
      g1.addColorStop(0.5, 'rgba(79, 70, 229, 0.15)');
      g1.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // Node 2: Vivid Violet
      const x2 = width * 0.55 + Math.cos(t * 0.8) * (width * 0.2) - (mouse.x - width * 0.5) * 0.06;
      const y2 = height * 0.5 + Math.sin(t * 1.1) * (height * 0.16);
      const r2 = Math.min(width, height) * 0.55;
      const g2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, r2);
      g2.addColorStop(0, 'rgba(124, 58, 237, 0.32)');
      g2.addColorStop(0.6, 'rgba(124, 58, 237, 0.08)');
      g2.addColorStop(1, 'rgba(124, 58, 237, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      // Node 3: Neon Emerald Growth Touch
      const x3 = width * 0.3 + Math.sin(t * 1.2) * (width * 0.15);
      const y3 = height * 0.65 + Math.cos(t * 0.9) * (height * 0.12);
      const r3 = Math.min(width, height) * 0.45;
      const g3 = ctx.createRadialGradient(x3, y3, 0, x3, y3, r3);
      g3.addColorStop(0, 'rgba(16, 185, 129, 0.20)');
      g3.addColorStop(0.7, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-title">
      {/* Dynamic Animated Ambient Aurora Canvas Background */}
      <canvas ref={canvasRef} className="hero-gradient-canvas" aria-hidden="true" />
      <div className="hero-radial-vignette" aria-hidden="true" />

      <div className="container hero-container">
        
        {/* Live Status Pill Badge */}
        <div className="hero-badge-wrap">
          <span className="badge badge-emerald">
            <span className="pulse-dot" aria-hidden="true"></span>
            AI Career Operating System
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title" id="hero-title">
          Everything Between You and Your<br />
          <span className="gradient-text">Next U.S. Job—In One Place.</span>
        </h1>

        {/* Dynamic Rotating Subtitle (Crafture Brand) */}
        <div className="hero-rotating-wrap">
          <span>Crafture powers your search while you</span>
          <span className="rotating-pill" id="rotatingKeyword">{keywords[keywordIndex]}</span>
        </div>

        {/* Hero Description Copy */}
        <p className="hero-desc">
          Stop paying for multiple AI tools, expensive consultancies, and disconnected courses. Crafture is the AI-powered Career Operating System that identifies what's blocking your job search, automates repetitive work, and gives you expert guidance—so you can focus on getting hired.
        </p>

        {/* Primary Call to Actions */}
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

        {/* Real Job Seeker Social Proof Card with Authentic Avatar Cluster */}
        <div className="job-seeker-proof-card" aria-label="Candidate testimonial">
          <div className="job-seeker-avatar-cluster">
            <img 
              src="/assets/images/hero-icons.webp" 
              alt="Diverse successful job seekers placed at Amazon, Wise, and top companies" 
              className="job-seeker-avatars-img"
              width="192"
              height="48"
              loading="eager"
            />
          </div>
          <div className="job-seeker-quote-box">
            <p className="job-seeker-quote-text">
              "I got recruiters from Amazon, Wise, and other companies reaching out to me already!!"
            </p>
          </div>
        </div>

        {/* Trust Checkpoints Grid */}
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
