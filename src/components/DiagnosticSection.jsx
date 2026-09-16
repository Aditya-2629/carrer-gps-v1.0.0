import React, { useState, useEffect, useRef } from 'react';

export default function DiagnosticSection() {
  const [healthScore, setHealthScore] = useState(0);
  const dialRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = dialRef.current;
    if (!el) return;

    const startAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      const duration = 1600;
      const start = 0;
      const end = 88;
      const startTime = performance.now();

      const frame = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + eased * (end - start));
        setHealthScore(current);

        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          setHealthScore(end);
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
    <section className="section diagnostic-section" id="careergps" aria-labelledby="diagnostic-heading">
      <div className="container">
        
        <div className="diagnostic-layout">
          
          {/*  Left Column: Diagnostic Dimensions  */}
          <div className="diagnostic-content">
            <div className="badge badge-emerald">
              <span className="pulse-dot" aria-hidden="true"></span>
              System Diagnostic
            </div>
            <h2 className="section-heading" id="diagnostic-heading">
              Meet Crafture <span className="gradient-text">Career GPS.</span>
            </h2>
            <p className="section-subtext">
              Career GPS is your automated diagnostic engine. It continuously runs scans across your entire candidate profile, identifying the silent blockers keeping you from interviews.
            </p>

            {/*  5 Dimensions List  */}
            <div className="diagnostic-list">
              
              <div className="diagnostic-item">
                <div className="item-number">1</div>
                <div className="item-body">
                  <h3 className="item-title">Career Health Score</h3>
                  <p className="item-desc">An index of your active pipeline strength and market value.</p>
                </div>
              </div>

              <div className="diagnostic-item">
                <div className="item-number">2</div>
                <div className="item-body">
                  <h3 className="item-title">Candidate Strengths</h3>
                  <p className="item-desc">Identifies high-value skills and matching vectors where you excel.</p>
                </div>
              </div>

              <div className="diagnostic-item">
                <div className="item-number">3</div>
                <div className="item-body">
                  <h3 className="item-title">Blockers & Weaknesses</h3>
                  <p className="item-desc">Flags resume format faults, keyword gaps, and bad search SEO.</p>
                </div>
              </div>

              <div className="diagnostic-item">
                <div className="item-number">4</div>
                <div className="item-body">
                  <h3 className="item-title">Missing Opportunities</h3>
                  <p className="item-desc">Exposes hidden job markets and direct manager connections.</p>
                </div>
              </div>

              <div className="diagnostic-item">
                <div className="item-number">5</div>
                <div className="item-body">
                  <h3 className="item-title">Personalized Roadmap</h3>
                  <p className="item-desc">A step-by-step checklist customized to your target job search.</p>
                </div>
              </div>

            </div>

            <div className="diagnostic-cta-wrap">
              <a href="https://carrer-gps-asess.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg btn-shimmer">
                Start Free Assessment
              </a>
            </div>
          </div>

          {/*  Right Column: 3D Dials Visualization (Referso Aesthetic)  */}
          <div className="diagnostic-visual-wrap">
            <div className="diagnostic-dial-widget glass-panel" ref={dialRef}>
              
              {/*  Orbital Rings  */}
              <div className="orbital-ring ring-outer"></div>
              <div className="orbital-ring ring-middle"></div>
              <div className="orbital-ring ring-inner"></div>

              {/*  Central Health Score Dial  */}
              <div className="dial-center">
                <span className="dial-eyebrow">HEALTH SCORE</span>
                <span className="dial-score" id="diagnosticScoreNum">{healthScore}%</span>
                <span className="dial-status">CALIBRATED</span>
              </div>

              {/*  Floating Chips  */}
              <div className="floating-chip chip-top">
                <div className="chip-label">ATS STATUS</div>
                <div className="chip-val text-emerald">88% MATCH OPTIMAL</div>
              </div>

              <div className="floating-chip chip-bottom-left">
                <div className="chip-label">LINKEDIN SEO</div>
                <div className="chip-val text-blue">TOP 5% INQUIRIES</div>
              </div>

              <div className="floating-chip chip-bottom-right">
                <div className="chip-status-text">Roadmap: Calibrated</div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
