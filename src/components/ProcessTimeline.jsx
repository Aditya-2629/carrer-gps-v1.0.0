import React from 'react';

export default function ProcessTimeline() {
  return (
    <section className="section process-section" id="howitworks" aria-labelledby="process-heading">
      <div className="container process-container">
        
        <div className="section-intro">
          <div className="badge badge-emerald">Process</div>
          <h2 className="section-heading" id="process-heading">
            Four steps. <span className="gradient-text">Then we take over.</span>
          </h2>
          <p className="section-subtext">
            Start with a free assessment, select your strategy, and launch your automated candidate pipeline.
          </p>
        </div>

        {/*  Vertical Interactive Timeline  */}
        <div className="timeline-wrapper">
          <div className="timeline-line-track">
            <div className="timeline-fill-bar" id="timelineFillBar"></div>
          </div>

          <div className="timeline-steps-list">
            
            <div className="timeline-step-item">
              <div className="step-badge-node">1</div>
              <div className="step-card glass-panel">
                <h3 className="step-card-title">Take FREE Career GPS Assessment</h3>
                <p className="step-card-desc">
                  Upload your profile. We scan your resume formatting, ATS parsing indicators, and LinkedIn search searchability in 3 minutes.
                </p>
              </div>
            </div>

            <div className="timeline-step-item">
              <div className="step-badge-node">2</div>
              <div className="step-card glass-panel">
                <h3 className="step-card-title">Receive Personalized Career Report</h3>
                <p className="step-card-desc">
                  Get a structured breakdown detailing your Career Health Score, strengths, parsing errors, keyword gaps, and targeted market openings.
                </p>
              </div>
            </div>

            <div className="timeline-step-item">
              <div className="step-badge-node">3</div>
              <div className="step-card glass-panel">
                <h3 className="step-card-title">Choose Your Plan</h3>
                <p className="step-card-desc">
                  Select our configured AI agents or add a dedicated US-based recruiter for interview prep, custom negotiation, and strategic outreach.
                </p>
              </div>
            </div>

            <div className="timeline-step-item">
              <div className="step-badge-node">4</div>
              <div className="step-card glass-panel">
                <h3 className="step-card-title">Start Landing More Interviews</h3>
                <p className="step-card-desc">
                  We configure every background pipeline. Our AI engines run continuously, and human coaches sync weekly to close offers. We do not stop until you get hired.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
