import React, { useState } from 'react';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="section pricing-section" id="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        
        <div className="section-intro text-center">
          <div className="badge badge-emerald">Pricing</div>
          <h2 className="section-heading" id="pricing-heading">
            Transparent, outcome-driven <span className="gradient-text">pricing.</span>
          </h2>
          <p className="section-subtext">No hidden fees. Month-to-month. Cancel anytime.</p>
        </div>

        {/*  Billing Cycle Toggle (Referso Pattern)  */}
        <div className="billing-toggle-wrap">
          <div className="toggle-pill-container" role="radiogroup" aria-label="Billing frequency">
            <button 
              className={`toggle-option ${!isAnnual ? 'active' : ''}`}
              id="billingMonthlyBtn" 
              role="radio" 
              aria-checked={!isAnnual}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button 
              className={`toggle-option ${isAnnual ? 'active' : ''}`}
              id="billingAnnualBtn" 
              role="radio" 
              aria-checked={isAnnual}
              onClick={() => setIsAnnual(true)}
            >
              Annual <span className="badge-save">Save 20%</span>
            </button>
          </div>
        </div>

        {/*  Pricing Cards Grid  */}
        <div className="pricing-cards-grid">
          
          {/*  Plan 1: Starter (Free)  */}
          <div className="pricing-card glass-panel">
            <div className="card-plan-header">
              <span className="plan-label">Starter</span>
              <div className="price-row">
                <span className="price-val">Free</span>
              </div>
              <p className="plan-desc">Run your first Career Health Analysis and audit your current materials — no credit card required.</p>
            </div>

            <div className="plan-divider"></div>

            <ul className="plan-features-list">
              <li><span className="check-emerald">✓</span> Career Health Report </li>
              <li><span className="check-emerald">✓</span> Career GPS Score </li>
              <li><span className="check-emerald">✓</span> Which phase of the job hunt the candidate is currently in </li>
              <li><span className="check-emerald">✓</span> Primary bottleneck </li>
              <li><span className="check-emerald">✓</span> What needs to be changed </li>
              <li><span className="check-emerald">✓</span> How to change it </li>
              <li><span className="check-emerald">✓</span> Personalized job-search strategies & tips </li>
              <li><span className="check-emerald">✓</span> Which phase of the job hunt the candidate is currently in </li>
              <li><span className="check-emerald">✓</span> 30/60/90-Day Plan </li>
              <li><span className="check-emerald">✓</span> Free Career Coach call </li>
              
            </ul>

            <div className="plan-action">
              <a href="https://carrer-gps-asess.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-block">
                Run Free Scan
              </a>
            </div>
          </div>

          {/*  Plan 2: Career GPS AI (Most Popular)  */}
          <div className="pricing-card pricing-card-featured glass-panel">
            <div className="featured-badge">Most Popular</div>
            
            <div className="card-plan-header">
              <span className="plan-label text-emerald">Career GPS AI</span>
              <div className="price-row">
                <span className="price-currency">$</span>
                <span className="price-val" id="priceValAi">{isAnnual ? '120' : '150'}</span>
                <span className="price-period">/month</span>
              </div>
              {isAnnual && (
                <div className="billing-sub-note" id="billingSubAi">
                  Billed annually — save $360/yr
                </div>
              )}
              <p className="plan-desc">Full AI automation running 24/7. Our agents handle scanning, tailoring, submitting, and following up while you prepare for interviews.</p>
            </div>

            <div className="plan-divider"></div>

            <ul className="plan-features-list">
              <li><span className="check-emerald">✓</span> Everything in Starter</li>
              <li><span className="check-emerald">✓</span> Full AI Job Search Team (8 agents)</li>
              <li><span className="check-emerald">✓</span> Up to 50 applications / day</li>
              <li><span className="check-emerald">✓</span> Automated recruiter cold outreach</li>
              <li><span className="check-emerald">✓</span> Campaign dashboard & analytics</li>
              <li><span className="check-emerald">✓</span> Continuous resume & LinkedIn SEO</li>
              <li><span className="check-emerald">✓</span> Automated follow-up sequences</li>
              <li><span className="check-emerald">✓</span> Salary intelligence feed</li>
              <li><span className="check-emerald">✓</span> Weekly Industry Expert Sessions</li>
            </ul>

            <div className="plan-action">
              <a href="https://superprofile.bio/vp/6a46b68049a6e500138a886a" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block btn-shimmer">
                Start AI Plan
              </a>
            </div>
          </div>

          {/*  Plan 3: Elite · AI + Human  */}
          <div className="pricing-card glass-panel">
            <div className="card-plan-header">
              <span className="plan-label text-blue">Elite · AI + Human</span>
              <div className="price-row">
                <span className="price-currency">$</span>
                <span className="price-val" id="priceValElite">{isAnnual ? '240' : '300'}</span>
                <span className="price-period">/month</span>
              </div>
              {isAnnual && (
                <div className="billing-sub-note text-blue" id="billingSubElite">
                  Billed annually — save $720/yr
                </div>
              )}
              <p className="plan-desc">Maximum firepower. Every AI agent plus a dedicated US-based recruitment expert coaching you to the offer.</p>
            </div>

            <div className="plan-divider"></div>

            <ul className="plan-features-list">
              <li><span className="check-emerald">✓</span> Everything in Career GPS AI</li>
              <li><span className="check-emerald">✓</span> Up to 100 applications / day</li>
              <li><span className="check-emerald">✓</span> Dedicated US Human Consultant</li>
              <li><span className="check-emerald">✓</span> Expert ATS Resume Rewrite</li>
              <li><span className="check-emerald">✓</span> LinkedIn Positioning Audit</li>
              <li><span className="check-emerald">✓</span> Weekly 1-on-1 Interview Coaching</li>
              <li><span className="check-emerald">✓</span> Offer & Salary Negotiation Support</li>
              <li><span className="check-emerald">✓</span> Priority support queue</li>
              <li><span className="check-emerald">✓</span> Weekly Industry Expert Sessions</li>
            </ul>

            <div className="plan-action">
              <a href="https://superprofile.bio/vp/6a46baf515e3cc0013660b1e" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-block">
                Get Human + AI
              </a>
            </div>
          </div>

        </div>

        <p className="pricing-micro-note text-center">
          All plans are month-to-month · No contracts · Cancel from your dashboard at any time
        </p>

      </div>
    </section>
  );
}
