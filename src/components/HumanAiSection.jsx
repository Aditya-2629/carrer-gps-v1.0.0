import React from 'react';

export default function HumanAiSection() {
  return (
    <section className="section human-section" id="human" aria-labelledby="human-heading">
      <div className="container">
        
        <div className="human-top-grid">
          
          {/*  Left: Narrative + 4 Pillars  */}
          <div className="human-content">
            <div className="badge badge-emerald">Human + AI</div>
            <h2 className="section-heading" id="human-heading">
              When AI <span className="gradient-text">Isn't Enough.</span>
            </h2>
            <p className="section-subtext">
              AI automates repetitive work. Human experts provide strategy, accountability, and interview coaching. Together they deliver better results.
            </p>

            <div className="human-pillars-grid">
              
              <div className="pillar-card glass-panel">
                <div className="pillar-header">
                  <span className="pillar-icon text-emerald">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </span>
                  <h4 className="pillar-title">Expert Resume Rewrite</h4>
                </div>
                <p className="pillar-desc">US-based writers restructure your career story for maximum recruiter and ATS impact.</p>
              </div>

              <div className="pillar-card glass-panel">
                <div className="pillar-header">
                  <span className="pillar-icon text-emerald">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.65 1.65 1.65 0 0 0 1.65-1.65c0-.92-.74-1.66-1.65-1.66Z"/></svg>
                  </span>
                  <h4 className="pillar-title">LinkedIn Brand Audit</h4>
                </div>
                <p className="pillar-desc">Positioning coaches rewrite your profile to surface in recruiter searches at target seniority.</p>
              </div>

              <div className="pillar-card glass-panel">
                <div className="pillar-header">
                  <span className="pillar-icon text-emerald">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </span>
                  <h4 className="pillar-title">Dedicated Career Coach</h4>
                </div>
                <p className="pillar-desc">1-on-1 strategy sessions: target role mapping, mock interviews, and salary benchmarking.</p>
              </div>

              <div className="pillar-card glass-panel">
                <div className="pillar-header">
                  <span className="pillar-icon text-emerald">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </span>
                  <h4 className="pillar-title">Offer & Negotiation</h4>
                </div>
                <p className="pillar-desc">Your coach builds counter-proposals and negotiation scripts when final offers arrive.</p>
              </div>

            </div>
          </div>

          {/*  Right: Key Stat Callouts Panel  */}
          <div className="human-stats-panel glass-panel">
            <div className="stat-callout-row">
              <div className="callout-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <div className="callout-text">
                <div className="callout-primary">Up to 100 <span className="callout-label">AI applications per day</span></div>
                <p className="callout-sub">Precision-targeted. 85%+ match threshold enforced.</p>
              </div>
            </div>

            <div className="stat-callout-row">
              <div className="callout-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div className="callout-text">
                <div className="callout-primary">Dedicated <span className="callout-label">US-based consultant</span></div>
                <p className="callout-sub">Direct access — not a shared support queue.</p>
              </div>
            </div>

            <div className="stat-callout-row">
              <div className="callout-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div className="callout-text">
                <div className="callout-primary">Weekly <span className="callout-label">Interview review sessions</span></div>
                <p className="callout-sub">Live coaching calibrated to your recruiter feedback.</p>
              </div>
            </div>
          </div>

        </div>

        {/*  Comparison Table (Typical Solution vs Limitation vs Career GPS)  */}
        <div className="comparison-matrix-block">
          <div className="matrix-header text-center">
            <div className="badge badge-emerald">Why Different</div>
            <h3 className="matrix-title">Why Career GPS is different</h3>
            <p className="matrix-subtitle">More than a course. More than a consultancy. More than just AI.</p>
          </div>

          <div className="comparison-table-wrapper glass-panel">
            <div className="table-header-row">
              <div className="col-typical">Typical Solution</div>
              <div className="col-limitation">The Limitation</div>
              <div className="col-gps text-emerald">Career GPS</div>
            </div>

            <div className="table-body-row">
              <div className="col-typical font-bold">Resume Writer</div>
              <div className="col-limitation">Static document, no live tailoring or ATS feedback</div>
              <div className="col-gps text-emerald"><span>✓</span> Complete OS: 24/7 custom ATS drafts per JD</div>
            </div>

            <div className="table-body-row">
              <div className="col-typical font-bold">Coaching Calls</div>
              <div className="col-limitation">Hourly billing, zero pipeline tracking or automation</div>
              <div className="col-gps text-emerald"><span>✓</span> Continuous support + active campaign management</div>
            </div>

            <div className="table-body-row">
              <div className="col-typical font-bold">AI Tools (ChatGPT)</div>
              <div className="col-limitation">Generic — hours of daily prompting and copy-pasting</div>
              <div className="col-gps text-emerald"><span>✓</span> Managed AI agents: purpose-built, fully configured</div>
            </div>

            <div className="table-body-row">
              <div className="col-typical font-bold">Online Courses</div>
              <div className="col-limitation">Theory only — zero execution on your behalf</div>
              <div className="col-gps text-emerald"><span>✓</span> We submit applications and manage outreach for you</div>
            </div>

            <div className="table-body-row">
              <div className="col-typical font-bold">Staffing Agency</div>
              <div className="col-limitation">Represents the employer, not you</div>
              <div className="col-gps text-emerald"><span>✓</span> We represent you — maximising your compensation</div>
            </div>

            <div className="table-body-row">
              <div className="col-typical font-bold">DIY SaaS Tools</div>
              <div className="col-limitation">You set up, manage, and maintain everything</div>
              <div className="col-gps text-emerald"><span>✓</span> We build, configure, and operate everything for you</div>
            </div>

            <div className="table-body-row">
              <div className="col-typical font-bold">One-Time Service</div>
              <div className="col-limitation">Static resume creation or mock setup</div>
              <div className="col-gps text-emerald"><span>✓</span> Continuous improvement based on campaign logs</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
