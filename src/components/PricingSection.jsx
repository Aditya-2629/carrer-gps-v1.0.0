import React, { useState } from 'react';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  // State to track expanded 'See all features' for each card
  const [expandedPlans, setExpandedPlans] = useState({
    starter: false,
    elite: false,
    ai: false,
  });

  const toggleExpand = (planKey) => {
    setExpandedPlans(prev => ({
      ...prev,
      [planKey]: !prev[planKey]
    }));
  };

  const pricingData = {
    monthly: {
      elitePrice: '300',
      eliteSub: null,
      aiPrice: '150',
      aiSub: null,
    },
    quarterly: {
      elitePrice: '270',
      eliteSub: 'Billed every 3 months ($810) — save $90',
      aiPrice: '135',
      aiSub: 'Billed every 3 months ($405) — save $45',
    },
  };

  const currentPricing = pricingData[billingCycle];

  const starterCore = [
    'Career Health Report',
    'Career GPS Score',
    'Which phase of the job hunt the candidate is currently in',
    'Primary bottleneck identification'
  ];

  const starterExtended = [
    'What needs to be changed in your materials',
    'How to change it with actionable steps',
    'Personalized job-search strategies & tips',
    'Tailored 30/60/90-Day Execution Plan',
    'Free 1-on-1 Career Coach diagnostic call'
  ];

  const eliteCore = [
    'Everything in Career GPS AI',
    'Personalized 100 applications / day',
    'Dedicated US Human Recruitment Consultant',
    'Expert ATS Resume Rewrite by Senior Coach'
  ];

  const eliteExtended = [
    'LinkedIn Positioning & SEO Audit',
    'Weekly 1-on-1 Live Interview Coaching',
    'Offer & Salary Negotiation Support with Live Scripts',
    'Priority Support Queue with Direct WhatsApp/Slack',
    'Weekly Industry Expert Sessions & Hot Leads'
  ];

  const aiCore = [
    'Everything in Starter Plan',
    'Full AI Job Search Team (8 autonomous agents)',
    'Up to 50 applications / day across US portals',
    'Automated recruiter cold outreach sequences'
  ];

  const aiExtended = [
    'Live Campaign Dashboard & Recruiter Analytics',
    'Continuous Resume & LinkedIn Keyword SEO',
    'Automated Multi-Stage Follow-Up Sequences',
    'Real-time Salary Intelligence & Market Feed',
    'Weekly Industry Expert Sessions'
  ];

  return (
    <section className="section pricing-section" id="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        
        <div className="section-intro text-center">
          <div className="badge badge-emerald">Pricing</div>
          <h2 className="section-heading" id="pricing-heading">
            Transparent, outcome-driven <span className="gradient-text">pricing.</span>
          </h2>
          <p className="section-subtext">No hidden fees. Flexible options. Cancel anytime.</p>
        </div>

        {/* Billing Cycle Toggle (Referso Pattern) */}
        <div className="billing-toggle-wrap">
          <div className="toggle-pill-container" role="radiogroup" aria-label="Billing frequency">
            <button 
              className={`toggle-option ${billingCycle === 'monthly' ? 'active' : ''}`}
              id="billingMonthlyBtn" 
              role="radio" 
              aria-checked={billingCycle === 'monthly'}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`toggle-option ${billingCycle === 'quarterly' ? 'active' : ''}`}
              id="billingQuarterlyBtn" 
              role="radio" 
              aria-checked={billingCycle === 'quarterly'}
              onClick={() => setBillingCycle('quarterly')}
            >
              3 Months <span className="badge-save">Save 10%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-cards-grid">
          
          {/* Plan 1: Starter (Free) */}
          <div className="pricing-card glass-panel">
            <div className="card-plan-header">
              <span className="plan-label">Starter</span>
              <div className="price-row">
                <span className="price-val">Free</span>
              </div>
              <p className="plan-desc">Run your first Career Health Analysis and audit your current materials — no credit card required.</p>
            </div>

            <div className="plan-divider"></div>

            {/* Core Features */}
            <ul className="plan-features-list">
              {starterCore.map((feature, i) => (
                <li key={i}>
                  <span className="check-emerald">✓</span> {feature}
                </li>
              ))}
            </ul>

            {/* Collapsible Extended Features with Dropdown */}
            <div className={`pricing-features-accordion ${expandedPlans.starter ? 'is-open' : ''}`}>
              <ul className="plan-features-list accordion-list">
                {starterExtended.map((feature, i) => (
                  <li key={i}>
                    <span className="check-emerald">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dropdown Toggle Button */}
            <button 
              type="button"
              className={`pricing-dropdown-toggle ${expandedPlans.starter ? 'active' : ''}`}
              onClick={() => toggleExpand('starter')}
              aria-expanded={expandedPlans.starter}
            >
              <span>{expandedPlans.starter ? 'See less features' : 'See all features'}</span>
              <svg 
                className={`chevron-icon ${expandedPlans.starter ? 'rotated' : ''}`} 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            <div className="plan-action">
              <a href="https://carrer-gps-asess.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-block">
                Run Free Scan
              </a>
            </div>
          </div>

          {/* Plan 2: Elite · AI + Human (Most Popular) */}
          <div className="pricing-card pricing-card-featured glass-panel">
            <div className="featured-badge">Most Popular</div>
            
            <div className="card-plan-header">
              <span className="plan-label text-blue">Elite · AI + Human</span>
              <div className="price-row">
                <span className="price-currency">$</span>
                <span className="price-val" id="priceValElite">{currentPricing.elitePrice}</span>
                <span className="price-period">/month</span>
              </div>
              {currentPricing.eliteSub && (
                <div className="billing-sub-note text-blue" id="billingSubElite">
                  {currentPricing.eliteSub}
                </div>
              )}
              <p className="plan-desc">Maximum firepower. Every AI agent plus a dedicated US-based recruitment expert coaching you to the offer.</p>
            </div>

            <div className="plan-divider"></div>

            {/* Core Features */}
            <ul className="plan-features-list">
              {eliteCore.map((feature, i) => (
                <li key={i}>
                  <span className="check-emerald">✓</span> {feature}
                </li>
              ))}
            </ul>

            {/* Collapsible Extended Features with Dropdown */}
            <div className={`pricing-features-accordion ${expandedPlans.elite ? 'is-open' : ''}`}>
              <ul className="plan-features-list accordion-list">
                {eliteExtended.map((feature, i) => (
                  <li key={i}>
                    <span className="check-emerald">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dropdown Toggle Button */}
            <button 
              type="button"
              className={`pricing-dropdown-toggle ${expandedPlans.elite ? 'active' : ''}`}
              onClick={() => toggleExpand('elite')}
              aria-expanded={expandedPlans.elite}
            >
              <span>{expandedPlans.elite ? 'See less features' : 'See all features'}</span>
              <svg 
                className={`chevron-icon ${expandedPlans.elite ? 'rotated' : ''}`} 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            <div className="plan-action">
              <a href="https://superprofile.bio/vp/6a46baf515e3cc0013660b1e" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block btn-shimmer">
                Get Human + AI
              </a>
            </div>
          </div>

          {/* Plan 3: Career GPS AI (Coming Soon) */}
          <div className="pricing-card glass-panel">
            <div className="coming-soon-badge">Coming Soon</div>

            <div className="card-plan-header">
              <span className="plan-label text-emerald">Career GPS AI</span>
              <div className="price-row">
                <span className="price-currency">$</span>
                <span className="price-val" id="priceValAi">{currentPricing.aiPrice}</span>
                <span className="price-period">/month</span>
              </div>
              {currentPricing.aiSub && (
                <div className="billing-sub-note" id="billingSubAi">
                  {currentPricing.aiSub}
                </div>
              )}
              <p className="plan-desc">Full AI automation running 24/7. Our agents handle scanning, tailoring, submitting, and following up while you prepare for interviews.</p>
            </div>

            <div className="plan-divider"></div>

            {/* Core Features */}
            <ul className="plan-features-list">
              {aiCore.map((feature, i) => (
                <li key={i}>
                  <span className="check-emerald">✓</span> {feature}
                </li>
              ))}
            </ul>

            {/* Collapsible Extended Features with Dropdown */}
            <div className={`pricing-features-accordion ${expandedPlans.ai ? 'is-open' : ''}`}>
              <ul className="plan-features-list accordion-list">
                {aiExtended.map((feature, i) => (
                  <li key={i}>
                    <span className="check-emerald">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dropdown Toggle Button */}
            <button 
              type="button"
              className={`pricing-dropdown-toggle ${expandedPlans.ai ? 'active' : ''}`}
              onClick={() => toggleExpand('ai')}
              aria-expanded={expandedPlans.ai}
            >
              <span>{expandedPlans.ai ? 'See less features' : 'See all features'}</span>
              <svg 
                className={`chevron-icon ${expandedPlans.ai ? 'rotated' : ''}`} 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            <div className="plan-action">
              <a href="https://superprofile.bio/vp/6a46b68049a6e500138a886a" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-block">
                Start AI Plan
              </a>
            </div>
          </div>

        </div>

        <p className="pricing-micro-note text-center">
          All plans are flexible · No contracts · Cancel from your dashboard at any time
        </p>

      </div>
    </section>
  );
}
