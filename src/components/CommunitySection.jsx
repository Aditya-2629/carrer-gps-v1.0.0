import React from 'react';

export default function CommunitySection() {
  return (
    <section className="section community-section" id="community" aria-labelledby="community-heading">
      <div className="container">
        
        <div className="section-intro text-center">
          <div className="badge badge-emerald">Community</div>
          <h2 className="section-heading" id="community-heading">
            Join the Crafture <span className="gradient-text">community.</span>
          </h2>
          <p className="section-subtext">
            Connect with thousands of USA IT and Non-IT professionals and experts. Learn what is working in active job markets right now.
          </p>
        </div>

        <div className="community-grid">
          
          <div className="community-card glass-panel">
            <div className="community-icon-box icon-emerald">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="community-card-title">Weekly Sessions</h3>
            <p className="community-card-desc">Live Q&A sessions with coaches and recruitment specialists discussing current hiring loops.</p>
          </div>

          <div className="community-card glass-panel">
            <div className="community-icon-box icon-blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <h3 className="community-card-title">Resume Reviews</h3>
            <p className="community-card-desc">Get actionable, direct peer feedback and coach diagnostics on your optimized resume files.</p>
          </div>

          <div className="community-card glass-panel">
            <div className="community-icon-box icon-emerald">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            </div>
            <h3 className="community-card-title">Hiring Trends</h3>
            <p className="community-card-desc">Real-time indexes of active US tech headcount freezes, updates, and open hiring windows.</p>
          </div>

          <div className="community-card glass-panel">
            <div className="community-icon-box icon-blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h3 className="community-card-title">Free Resources</h3>
            <p className="community-card-desc">Instant access to cold message swipe files, negotiation templates, and salary benchmarking datasets.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
