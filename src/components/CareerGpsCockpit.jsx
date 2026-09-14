import React, { useState, useEffect } from 'react';

export default function CareerGpsCockpit() {
  const terminalMessages = [
    '> Tailoring resume for Stripe...',
    '> Vercel application submitted successfully.',
    '> Sarah Chen (Google) message flagged in Inbox.',
    '> ATS Diagnostic scan complete: 96% match.',
    '> Generating personalized outreach sequence...'
  ];

  const [activeLogs, setActiveLogs] = useState([terminalMessages[0], terminalMessages[1], terminalMessages[2]]);

  useEffect(() => {
    let msgIdx = 3;
    const interval = setInterval(() => {
      setActiveLogs(prev => {
        const next = [...prev.slice(1), terminalMessages[msgIdx % terminalMessages.length]];
        msgIdx++;
        return next;
      });
    }, 3800);

    return () => clearInterval(interval);
  }, [terminalMessages.length]);

  return (
    <section className="section cockpit-section" id="careergps" aria-labelledby="cockpit-heading">
      <div className="container">
        
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
          <div className="badge badge-emerald">
            <span className="pulse-dot" aria-hidden="true"></span>
            <span>Live Interactive Preview</span>
          </div>
          <h2 className="section-title" id="cockpit-heading">
            Inside Your Personal<br />
            <span className="gradient-text">Job Search Cockpit.</span>
          </h2>
          <p className="section-subtitle">
            A single, cohesive dashboard where AI background agents handle job scanning, resume tailoring, and inbound tracking while you stay focused on interviewing.
          </p>
        </div>

        {/* Mac-Style Window Mockup */}
        <div className="cockpit-window glass-panel" role="region" aria-label="Career GPS Cockpit Interface Preview">
          
          {/* Window Header Bar */}
          <div className="window-header">
            <div className="window-dots" aria-hidden="true">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="window-address-bar">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>app.careergps.io/cockpit</span>
            </div>
            <div className="window-status-pill">
              <span className="pulse-dot" aria-hidden="true"></span>
              <span>GPS Agent Active</span>
            </div>
          </div>

          {/* Cockpit Content Grid */}
          <div className="cockpit-grid">
            
            {/* Left Column: Real-time Terminal & Diagnostics */}
            <div className="cockpit-col-left">
              
              {/* Agent Terminal Box */}
              <div className="cockpit-card terminal-box">
                <div className="terminal-header">
                  <span className="terminal-title">ACTIVE AGENT: JOB HUNTER</span>
                  <span className="terminal-status">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    RUNNING
                  </span>
                </div>
                <div className="terminal-logs" aria-live="polite">
                  {activeLogs.map((log, i) => (
                    <div key={i} className="terminal-line">{log}</div>
                  ))}
                  <div className="terminal-line cursor-line">
                    <span className="term-caret" aria-hidden="true">▋</span>
                  </div>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="cockpit-metrics-row">
                
                {/* ATS Circular Score */}
                <div className="metric-card ats-gauge-card text-center">
                  <span className="widget-label">ATS SCORE</span>
                  <div className="gauge-circle-wrap">
                    <div className="gauge-number">96%</div>
                  </div>
                  <span className="gauge-status-tag">OPTIMAL FIT</span>
                </div>

                {/* LinkedIn Strength */}
                <div className="metric-card linkedin-card">
                  <div className="widget-header-row">
                    <span className="li-badge">in LinkedIn SEO</span>
                    <span className="li-stat">+18 views today</span>
                  </div>
                  <div className="stat-highlight">94% Strength</div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: '94%' }}></div>
                  </div>
                  <span className="widget-caption">Top 5% recruiter visibility</span>
                </div>

              </div>

              {/* Checklist Widget */}
              <div className="cockpit-card checklist-card">
                <span className="widget-label">RESUME ATS CHECKLIST</span>
                <div className="checklist-items">
                  <div className="checklist-row checked">
                    <span className="check-box" aria-hidden="true">✓</span>
                    <span>Inject keywords from job description</span>
                  </div>
                  <div className="checklist-row checked">
                    <span className="check-box" aria-hidden="true">✓</span>
                    <span>Optimise bullet layout for ATS</span>
                  </div>
                  <div className="checklist-row checked">
                    <span className="check-box" aria-hidden="true">✓</span>
                    <span>Highlight relevant leadership experience</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Pipeline, Matches & Inbound Alerts */}
            <div className="cockpit-col-right">
              
              {/* Active Matches Feed */}
              <div className="cockpit-card matches-feed-card">
                <div className="card-top-bar">
                  <span className="widget-label">ACTIVE MATCHES</span>
                  <span className="badge-emerald-sm">128 FOUND</span>
                </div>
                
                <div className="matches-list">
                  <div className="match-item">
                    <div>
                      <span className="role-name">Frontend Engineer</span>
                      <span className="company-name">Stripe · Remote</span>
                    </div>
                    <div className="match-status">
                      <span className="match-pct">96%</span>
                      <span className="status-pill status-submitted">SUBMITTED</span>
                    </div>
                  </div>

                  <div className="match-item">
                    <div>
                      <span className="role-name">UI Engineer</span>
                      <span className="company-name">Vercel · Hybrid</span>
                    </div>
                    <div className="match-status">
                      <span className="match-pct">92%</span>
                      <span className="status-pill status-review">IN REVIEW</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recruiter Message Toast Alert */}
              <div className="cockpit-card recruiter-alert-toast">
                <div className="recruiter-toast-header">
                  <div className="recruiter-avatar" aria-hidden="true">SC</div>
                  <div className="recruiter-info">
                    <span className="recruiter-name">Sarah Chen</span>
                    <span className="recruiter-title">Recruiter · Google</span>
                  </div>
                  <span className="toast-time">Just now</span>
                </div>
                <p className="recruiter-msg-preview">
                  "Hi! Your optimized resume matches our senior role. Let's schedule a call..."
                </p>
              </div>

              {/* Outreach Velocity Sparkline */}
              <div className="cockpit-card velocity-card">
                <div className="card-top-bar">
                  <span className="widget-label">OUTREACH VELOCITY</span>
                  <span className="velocity-trend">↗ +45% This Week</span>
                </div>
                <div className="sparkline-wrap" aria-hidden="true">
                  <svg className="sparkline-svg" viewBox="0 0 300 40" fill="none">
                    <path d="M0 32 Q 50 28, 100 30 T 200 12 T 300 18" stroke="#10B981" strokeWidth="2.5" fill="none"></path>
                    <path d="M0 32 Q 50 28, 100 30 T 200 12 T 300 18 L 300 40 L 0 40 Z" fill="url(#sparkGrad)" opacity="0.15"></path>
                    <defs>
                      <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981"></stop>
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Interview Pipeline Steps */}
              <div className="cockpit-card pipeline-card">
                <span className="widget-label">INTERVIEW PIPELINE</span>
                <div className="pipeline-steps">
                  <div className="pipe-step done">
                    <div className="pipe-circle" aria-label="Step 1: Tailored (Completed)">✓</div>
                    <span>Tailored</span>
                  </div>
                  <div className="pipe-line done" aria-hidden="true"></div>
                  <div className="pipe-step done">
                    <div className="pipe-circle" aria-label="Step 2: Applied (Completed)">✓</div>
                    <span>Applied</span>
                  </div>
                  <div className="pipe-line active" aria-hidden="true"></div>
                  <div className="pipe-step active">
                    <div className="pipe-circle" aria-label="Step 3: Screen (Active)">3</div>
                    <span>Screen</span>
                  </div>
                  <div className="pipe-line" aria-hidden="true"></div>
                  <div className="pipe-step pending">
                    <div className="pipe-circle" aria-label="Step 4: Offered (Upcoming)">4</div>
                    <span>Offered</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
