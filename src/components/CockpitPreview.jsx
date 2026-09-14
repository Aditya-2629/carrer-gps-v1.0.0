import React, { useState, useEffect, useRef } from 'react';

export default function CockpitPreview() {
  const allLogs = [
    "Scanned 14 matches on LinkedIn.",
    "Tailored resume for Stripe (96% ATS Match).",
    "Outbound application sent to Stripe.",
    "Drafted cold outreach sequence to Hiring Manager.",
    "Audited Vercel JD: Match score 92%.",
    "Tailoring resume for Vercel...",
    "Vercel application submitted successfully.",
    "Sarah Chen (Google) message flagged in Inbox.",
    "Generating behavioral mock prep for Google screen...",
    "ATS Profile Score updated: 96% (+4% improvement)."
  ];

  const [logs, setLogs] = useState([
    "> Initialising Career GPS OS v1.0...",
    "> Agent job search pipeline starting...",
    "> Scanned 14 matches on LinkedIn."
  ]);

  const [atsScore, setAtsScore] = useState(0);
  const atsWidgetRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    let idx = 1;
    const interval = setInterval(() => {
      setLogs(prev => [prev[1], prev[2], `> ${allLogs[idx % allLogs.length]}`]);
      idx++;
    }, 3800);
    return () => clearInterval(interval);
  }, [allLogs.length]);

  useEffect(() => {
    const el = atsWidgetRef.current;
    if (!el) return;

    const startAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      const duration = 1500;
      const start = 0;
      const end = 96;
      const startTime = performance.now();

      const frame = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + eased * (end - start));
        setAtsScore(current);

        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          setAtsScore(end);
        }
      };

      requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      });
    }, { threshold: 0.25 });

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="preview-section" aria-label="Career GPS Live Dashboard Cockpit">
      <div className="container">
        <div className="cockpit-wrapper glass-panel">
          
          {/*  Top Window Bar  */}
          <div className="cockpit-topbar">
            <div className="browser-dots" aria-hidden="true">
              <span className="browser-dot dot-red"></span>
              <span className="browser-dot dot-yellow"></span>
              <span className="browser-dot dot-green"></span>
            </div>
            <div className="cockpit-url">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span>app.careergps.io/cockpit</span>
            </div>
            <div className="cockpit-status-pill">
              <span className="pulse-dot" aria-hidden="true"></span>
              <span>GPS Agent Active</span>
            </div>
          </div>

          {/*  Cockpit Content Grid  */}
          <div className="cockpit-grid">
            
            {/*  Left Sub-panel: Agent Console + ATS Ring + LinkedIn SEO  */}
            <div className="cockpit-col">
              
              {/*  Live Terminal Logger  */}
              <div className="cockpit-widget terminal-widget">
                <div className="widget-header">
                  <span className="widget-title">ACTIVE AGENT: JOB HUNTER</span>
                  <span className="live-tag"><span className="spin-icon">⟳</span> RUNNING</span>
                </div>
                <div className="terminal-logs" id="terminalLogBox" aria-live="polite">
                  {logs.map((log, i) => (
                    <div key={i} className={`terminal-line ${i === logs.length - 1 ? 'line-active' : ''}`}>
                      {log}
                    </div>
                  ))}
                </div>
              </div>

              {/*  Metrics Row: ATS Circular Progress + LinkedIn SEO Strength  */}
              <div className="cockpit-subgrid">
                
                {/*  Circular ATS Score Widget  */}
                <div className="cockpit-widget ats-widget" ref={atsWidgetRef}>
                  <span className="widget-eyebrow">ATS SCORE</span>
                  <div className="progress-ring-wrap">
                    <svg className="progress-ring" width="76" height="76" viewBox="0 0 76 76">
                      <circle className="ring-bg" cx="38" cy="38" r="32" />
                      <circle 
                        className="ring-fill" 
                        id="atsRingCircle" 
                        cx="38" 
                        cy="38" 
                        r="32"
                        style={{
                          strokeDasharray: 201,
                          strokeDashoffset: 201 - (201 * atsScore) / 100,
                          transition: 'stroke-dashoffset 0.1s ease-out'
                        }}
                      />
                    </svg>
                    <div className="ring-center-text">
                      <span className="score-number" id="atsScoreValue">{atsScore}%</span>
                    </div>
                  </div>
                  <span className="score-badge">Optimal Fit</span>
                </div>

                {/*  LinkedIn SEO Strength Widget  */}
                <div className="cockpit-widget linkedin-widget">
                  <div className="widget-flex-header">
                    <div className="linkedin-tag">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#0077b5"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.65 1.65 1.65 0 0 0 1.65-1.65c0-.92-.74-1.66-1.65-1.66Z"/></svg>
                      <span>LinkedIn SEO</span>
                    </div>
                    <span className="status-up">+18 views today</span>
                  </div>
                  <div className="stat-highlight">94% Strength</div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{'width': '94%'}}></div>
                  </div>
                  <span className="widget-caption">Top 5% recruiter visibility</span>
                </div>

              </div>

              {/*  Resume ATS Checklist  */}
              <div className="cockpit-widget checklist-widget">
                <span className="widget-eyebrow">RESUME ATS CHECKLIST</span>
                <div className="checklist-items">
                  <div className="checklist-row checked">
                    <span className="check-box">✓</span>
                    <span>Inject keywords from job description</span>
                  </div>
                  <div className="checklist-row checked">
                    <span className="check-box">✓</span>
                    <span>Optimise bullet layout for ATS</span>
                  </div>
                  <div className="checklist-row checked">
                    <span className="check-box">✓</span>
                    <span>Highlight relevant leadership experience</span>
                  </div>
                </div>
              </div>

            </div>

            {/*  Right Sub-panel: Active Matches + Recruiter Toast + Velocity + Pipeline  */}
            <div className="cockpit-col">
              
              {/*  Active Matches List  */}
              <div className="cockpit-widget matches-widget">
                <div className="widget-flex-header">
                  <span className="widget-title">ACTIVE MATCHES</span>
                  <span className="badge badge-emerald-sm">128 Found</span>
                </div>
                <div className="matches-list">
                  <div className="match-item">
                    <div className="match-meta">
                      <span className="role-name">Frontend Engineer</span>
                      <span className="company-name">Stripe · Remote</span>
                    </div>
                    <div className="match-status">
                      <span className="match-percent">96%</span>
                      <span className="match-badge submitted">Submitted</span>
                    </div>
                  </div>
                  <div className="match-item">
                    <div className="match-meta">
                      <span className="role-name">UI Engineer</span>
                      <span className="company-name">Vercel · Hybrid</span>
                    </div>
                    <div className="match-status">
                      <span className="match-percent">92%</span>
                      <span className="match-badge review">In Review</span>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Inbound Recruiter Toast Alert  */}
              <div className="cockpit-widget toast-widget" id="recruiterToast">
                <div className="toast-header">
                  <div className="toast-avatar">SC</div>
                  <div className="toast-sender">
                    <span className="sender-name">Sarah Chen</span>
                    <span className="sender-role">Recruiter · Google</span>
                  </div>
                  <span className="toast-time">Just now</span>
                </div>
                <p className="toast-body">
                  "Hi! Your optimized resume matches our senior role. Let's schedule a call..."
                </p>
              </div>

              {/*  Velocity Chart Widget  */}
              <div className="cockpit-widget velocity-widget">
                <div className="widget-flex-header">
                  <span className="widget-eyebrow">OUTREACH VELOCITY</span>
                  <span className="trend-icon">↗ +45% This Week</span>
                </div>
                <div className="sparkline-chart">
                  <svg viewBox="0 0 100 32" className="sparkline-svg" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.25"/>
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path d="M0,28 Q15,18 30,24 T60,10 T85,5 L100,4 L100,32 L0,32 Z" fill="url(#chartGlow)" />
                    <path d="M0,28 Q15,18 30,24 T60,10 T85,5 L100,4" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/*  Interview Pipeline Progress  */}
              <div className="cockpit-widget pipeline-widget">
                <span className="widget-eyebrow">INTERVIEW PIPELINE</span>
                <div className="pipeline-track">
                  <div className="pipeline-step completed">
                    <div className="step-dot">✓</div>
                    <span>Tailored</span>
                  </div>
                  <div className="pipeline-line completed"></div>
                  <div className="pipeline-step completed">
                    <div className="step-dot">✓</div>
                    <span>Applied</span>
                  </div>
                  <div className="pipeline-line completed"></div>
                  <div className="pipeline-step active">
                    <div className="step-dot">3</div>
                    <span>Screen</span>
                  </div>
                  <div className="pipeline-line"></div>
                  <div className="pipeline-step">
                    <div className="step-dot">4</div>
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
