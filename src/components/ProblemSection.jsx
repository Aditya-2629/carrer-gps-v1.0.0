import React from 'react';

export default function ProblemSection() {
  return (
    <section className="section problem-section" id="problem" aria-labelledby="problem-heading">
      <div className="container">
        
        <div className="section-intro text-center">
          <div className="badge badge-crimson">
            <span className="pulse-dot crimson" aria-hidden="true"></span>
            Why Candidates Fail
          </div>
          <h2 className="section-heading" id="problem-heading">
            Why most job seekers <span className="text-crimson">never get enough interviews.</span>
          </h2>
          <p className="section-subtext">
            Most candidates don't fail because they lack skills. They fail because their job search system is broken. Career GPS automates the pipeline so you never reset.
          </p>
        </div>

        {/*  Problem Highlight Card  */}
        <div className="problem-highlight-banner glass-panel">
          <div className="banner-icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
          </div>
          <div className="banner-text">
            <h3 className="banner-title">Find what's holding you back</h3>
            <p className="banner-desc">
              Our diagnostic assessment scans 8 primary pipeline dimensions, indexing ATS parsing faults, LinkedIn SEO rankings, and application rates.
            </p>
          </div>
          <a href="https://carrer-gps-asess.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm banner-btn">
            Diagnose My Search
          </a>
        </div>

        {/*  8 Pain Points Bento Grid (Numbered 1-8)  */}
        <div className="pain-points-grid">
          
          <div className="pain-card glass-panel">
            <div className="pain-header">
              <span className="pain-tag">PAIN 1</span>
              <span className="pain-severity">Critical</span>
            </div>
            <h3 className="pain-title">ATS Hostile Resume</h3>
            <p className="pain-desc">Parsing errors block you. Formatting issues prevent automated screening algorithms from matching.</p>
          </div>

          <div className="pain-card glass-panel">
            <div className="pain-header">
              <span className="pain-tag">PAIN 2</span>
              <span className="pain-severity">High</span>
            </div>
            <h3 className="pain-title">Weak LinkedIn SEO</h3>
            <p className="pain-desc">Recruiter queries filter you out because your profile lacks search optimized keyword clusters.</p>
          </div>

          <div className="pain-card glass-panel">
            <div className="pain-header">
              <span className="pain-tag">PAIN 3</span>
              <span className="pain-severity">High</span>
            </div>
            <h3 className="pain-title">Wrong Job Targets</h3>
            <p className="pain-desc">Scrolling boards manually, applying to expired listings or roles filled internally.</p>
          </div>

          <div className="pain-card glass-panel">
            <div className="pain-header">
              <span className="pain-tag">PAIN 4</span>
              <span className="pain-severity">Critical</span>
            </div>
            <h3 className="pain-title">No Recruiter Outreach</h3>
            <p className="pain-desc">Hiring managers never see your credentials because your application sits flat in the ATS database.</p>
          </div>

          <div className="pain-card glass-panel">
            <div className="pain-header">
              <span className="pain-tag">PAIN 5</span>
              <span className="pain-severity">Medium</span>
            </div>
            <h3 className="pain-title">Poor Networking</h3>
            <p className="pain-desc">Relying purely on forms. No warm referral mapping or manager matching to bypass filters.</p>
          </div>

          <div className="pain-card glass-panel">
            <div className="pain-header">
              <span className="pain-tag">PAIN 6</span>
              <span className="pain-severity">High</span>
            </div>
            <h3 className="pain-title">Weak Interview Prep</h3>
            <p className="pain-desc">Behavioral and technical prep is generic, not calibrated to the company's active JDs.</p>
          </div>

          <div className="pain-card glass-panel">
            <div className="pain-header">
              <span className="pain-tag">PAIN 7</span>
              <span className="pain-severity">High</span>
            </div>
            <h3 className="pain-title">No Follow-Up System</h3>
            <p className="pain-desc">Outbound threads go cold. Recruiters ghost because you lack automated check-in systems.</p>
          </div>

          <div className="pain-card glass-panel">
            <div className="pain-header">
              <span className="pain-tag">PAIN 8</span>
              <span className="pain-severity">Critical</span>
            </div>
            <h3 className="pain-title">Disconnected Tools</h3>
            <p className="pain-desc">Using 10+ different single-purpose AI sites, tracking sheets, and tools that do not communicate.</p>
          </div>

        </div>

        {/*  The Cost of Inaction Sub-Grid  */}
        <div className="cost-inaction-block">
          <div className="cost-header text-center">
            <div className="badge badge-crimson">The Cost of Inaction</div>
            <h3 className="cost-title">Every day you delay costs you opportunities</h3>
          </div>

          <div className="cost-grid">
            
            <div className="cost-card glass-panel">
              <div className="cost-icon text-crimson">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h4 className="cost-card-title">Recruiters Move On</h4>
              <p className="cost-card-desc">Top recruiters finalise shortlists within 72 hours of posting.</p>
            </div>

            <div className="cost-card glass-panel">
              <div className="cost-icon text-crimson">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <h4 className="cost-card-title">Listings Expire</h4>
              <p className="cost-card-desc">High-traffic corporate roles close when application counts exceed 200.</p>
            </div>

            <div className="cost-card glass-panel">
              <div className="cost-icon text-crimson">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h4 className="cost-card-title">Networks Go Cold</h4>
              <p className="cost-card-desc">Referral leads expire when internal teams fill roles or headcount freezes.</p>
            </div>

            <div className="cost-card glass-panel">
              <div className="cost-icon text-crimson">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <h4 className="cost-card-title">Pipelines Empty</h4>
              <p className="cost-card-desc">Pausing applications during active loops leaves zero backups.</p>
            </div>

            <div className="cost-card glass-panel">
              <div className="cost-icon text-crimson">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <h4 className="cost-card-title">Confidence Drops</h4>
              <p className="cost-card-desc">Repeated rejection cycles damage performance in active interviews.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
