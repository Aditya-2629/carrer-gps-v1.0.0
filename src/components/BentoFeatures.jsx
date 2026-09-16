import React from 'react';

export default function BentoFeatures() {
  return (
    <section className="section bento-section" id="features" aria-labelledby="features-heading">
      <div className="container">
        
        <div className="section-intro text-center">
          <div className="badge badge-emerald">All-In-One Platform</div>
          <h2 className="section-heading" id="features-heading">
            One cohesive system <span className="gradient-text">instead of 10 disconnected tools.</span>
          </h2>
          <p className="section-subtext">
            Stop paying for separate resume builders, ATS scanners, tracking sheets, and outreach bots. Career GPS unites every single component into one unified operating system.
          </p>
        </div>

        {/*  Asymmetric Bento Grid (Referso Layout)  */}
        <div className="bento-grid">
          
          {/*  Bento 1: Double Width (ATS Analyzer & Resume Optimization)  */}
          <div className="bento-card bento-span-8 glass-panel">
            <div className="bento-card-content">
              <div className="bento-icon-wrap icon-emerald">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <h3 className="bento-title">ATS Analyzer & Resume Optimization</h3>
              <p className="bento-desc">
                Instant parsing simulator identifies format faults, keyword gaps, and semantic alignment against USA target jobs. Keeps your resume tailored continuously.
              </p>
            </div>

            {/*  In-Card Live Simulation Widget  */}
            <div className="bento-mockup terminal-mockup">
              <div className="mockup-header">
                <span className="file-name">analyzing_resume.docx</span>
                <span className="badge-emerald-sm">92% MATCH</span>
              </div>
              <div className="mockup-line">
                <span>[x] Injected: "Micro-frontends"</span>
                <span className="text-emerald">✓</span>
              </div>
              <div className="mockup-line">
                <span>[x] Formatted: ATS-Friendly Header</span>
                <span className="text-emerald">✓</span>
              </div>
              <div className="mockup-progress">
                <div className="mockup-progress-bar" style={{'width': '92%'}}></div>
              </div>
            </div>
          </div>

          {/*  Bento 2: Single Width (LinkedIn SEO)  */}
          <div className="bento-card bento-span-4 glass-panel">
            <div className="bento-card-content">
              <div className="bento-icon-wrap icon-blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.65 1.65 1.65 0 0 0 1.65-1.65c0-.92-.74-1.66-1.65-1.66Z"/></svg>
              </div>
              <h3 className="bento-title">LinkedIn SEO & Networking</h3>
              <p className="bento-desc">
                Syncs search optimization clusters to target active recruiter queries automatically, doubling search impressions.
              </p>
            </div>
            <div className="bento-mini-stat">
              <span className="stat-label">Recruiter Impressions</span>
              <span className="stat-value text-emerald">+248%</span>
            </div>
          </div>

          {/*  Bento 3: Single Width (AI Job Search & Outreach)  */}
          <div className="bento-card bento-span-4 glass-panel">
            <div className="bento-card-content">
              <div className="bento-icon-wrap icon-emerald">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </div>
              <h3 className="bento-title">Job Search & Outreach</h3>
              <p className="bento-desc">
                Background scraper scans corporate portals, maps hiring managers, and sends outbound templates 24/7.
              </p>
            </div>
            <div className="bento-mini-log">
              <div className="log-row">OUTBOUND STATUS:</div>
              <div className="log-detail">Sent email to Netflix Principal Dev...</div>
              <div className="log-response text-emerald">Response: Booking Call</div>
            </div>
          </div>

          {/*  Bento 4: Double Width (Interview Prep & Mock Lab)  */}
          <div className="bento-card bento-span-8 glass-panel">
            <div className="bento-card-content">
              <div className="bento-icon-wrap icon-blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
              </div>
              <h3 className="bento-title">Interview Prep & Mock Lab</h3>
              <p className="bento-desc">
                Generates real interactive mock interview scenarios built from target JD descriptions. Analyzes STAR structure and response velocity.
              </p>
            </div>
            <div className="bento-mockup interview-mockup">
              <span className="mockup-tag">[MOCK INTERVIEW ANALYSIS]</span>
              <p className="mockup-quote">"Describe how you handle state sync across multiple tabs..."</p>
              <div className="mockup-star-status">
                STAR Structure: Valid (94%) · Velocity: Normal
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
