import React, { useState, useEffect, useRef } from 'react';

export default function CommunitySection() {
  const testimonials = [
    {
      id: 1,
      quote: "I got recruiters from Amazon, Wise, and Stripe reaching out to me already!! The resume audit and keyword injection completely flipped my response rate in less than one week.",
      author: "Max Li",
      role: "Senior Software Engineer",
      company: "Amazon & Wise Offers",
      initials: "ML",
      stars: 5,
      avatarBg: "linear-gradient(135deg, #6366F1, #8B5CF6)"
    },
    {
      id: 2,
      quote: "Honestly, this platform has been incredibly helpful for my job search. Navigating the US market without the right tools was exhausting, but Career GPS made tailoring 100+ applications feel effortless.",
      author: "Andrii Z",
      role: "Full Stack Engineer",
      company: "Stripe",
      initials: "AZ",
      stars: 5,
      avatarBg: "linear-gradient(135deg, #10B981, #059669)"
    },
    {
      id: 3,
      quote: "Career GPS gave me immense confidence in my CV and Cover Letter with its skill match checker and generator, enabling multiple high-quality submissions that led to 4 final rounds.",
      author: "David Gartner",
      role: "Financial Analyst",
      company: "Bloomberg",
      initials: "DG",
      stars: 5,
      avatarBg: "linear-gradient(135deg, #F59E0B, #D97706)"
    },
    {
      id: 4,
      quote: "The extension and automated pipeline kept me organized with applications, improved my resume and LinkedIn SEO, and aligned my profiles to job requirements, boosting interview calls by 300%.",
      author: "Ntow Emmanuel Akyea",
      role: "Growth & Content Lead",
      company: "Wise",
      initials: "NE",
      stars: 5,
      avatarBg: "linear-gradient(135deg, #EC4899, #8B5CF6)"
    },
    {
      id: 5,
      quote: "Job searching in this market is challenging, but Career GPS has been a game-changer. The ATS score jump from 68% to 96% got me recruiter screens the same week I applied.",
      author: "Sumera Malik",
      role: "Site Reliability Engineer",
      company: "Google",
      initials: "SM",
      stars: 5,
      avatarBg: "linear-gradient(135deg, #3B82F6, #1D4ED8)"
    },
    {
      id: 6,
      quote: "Career GPS is an AI-driven platform that offers personalized career guidance, skill enhancement opportunities, and live US market intelligence. An awesome feeling to have real support.",
      author: "Joanna Taylor",
      role: "Product Strategy Lead",
      company: "Meta",
      initials: "JT",
      stars: 5,
      avatarBg: "linear-gradient(135deg, #8B5CF6, #6366F1)"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-advance every 4.2 seconds unless paused on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };

  return (
    <section className="section community-section" id="community" aria-labelledby="community-heading">
      <div className="container">
        
        {/* Section Header (Careerflow Inspired with Project Base Colors) */}
        <div className="section-intro text-center">
          <div className="badge badge-emerald">
            <span className="pulse-dot" aria-hidden="true"></span>
            1M+ Worldwide Community
          </div>
          <h2 className="section-heading" id="community-heading">
            Hear From Our <span className="gradient-text">Community</span>
          </h2>
          <p className="section-subtext">
            Trusted and loved by over 1M+ users worldwide.
          </p>
        </div>

        {/* Interactive Auto-Slider Carousel */}
        <div 
          className="community-slider-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
          aria-label="Community Testimonials"
        >
          {/* Controls Bar */}
          <div className="slider-controls-bar">
            <button 
              className="slider-nav-btn prev-btn glass-panel" 
              onClick={handlePrev} 
              aria-label="Previous Testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Pagination Indicators */}
            <div className="slider-dots-group" role="tablist">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot-btn ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button 
              className="slider-nav-btn next-btn glass-panel" 
              onClick={handleNext} 
              aria-label="Next Testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Testimonial Active Slide Viewport */}
          <div className="testimonial-slide-viewport">
            <div 
              className="testimonial-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {testimonials.map((item) => (
                <div key={item.id} className="testimonial-slide-item">
                  <div className="testimonial-card-main glass-panel">
                    
                    {/* Quotation & Stars Header */}
                    <div className="testimonial-card-header">
                      <div className="testimonial-stars" aria-label="5 stars rating">
                        {[...Array(item.stars)].map((_, idx) => (
                          <svg key={idx} width="18" height="18" viewBox="0 0 24 24" fill="#10B981" aria-hidden="true">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                          </svg>
                        ))}
                      </div>
                      <span className="quote-mark-icon" aria-hidden="true">“</span>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="testimonial-quote-body">
                      “{item.quote}”
                    </p>

                    {/* Author Meta */}
                    <div className="testimonial-author-row">
                      <div className="author-avatar-circle" style={{ background: item.avatarBg }}>
                        {item.initials}
                      </div>
                      <div className="author-info-col">
                        <h4 className="author-name">{item.author}</h4>
                        <div className="author-subtext">
                          <span className="author-role">{item.role}</span>
                          <span className="author-dot">·</span>
                          <span className="author-company-badge">{item.company}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Existing Community Value Pillars (Preserving 100% of existing content) */}
        <div className="community-sub-features-wrapper">
          <h3 className="community-perks-heading text-center">
            Everything Included When You Join the Crafture Community
          </h3>

          <div className="community-grid">
            <div className="community-card glass-panel">
              <div className="community-icon-box icon-emerald">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4 className="community-card-title">Weekly Sessions</h4>
              <p className="community-card-desc">Live Q&A sessions with coaches and recruitment specialists discussing current hiring loops.</p>
            </div>

            <div className="community-card glass-panel">
              <div className="community-icon-box icon-blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <h4 className="community-card-title">Resume Reviews</h4>
              <p className="community-card-desc">Get actionable, direct peer feedback and coach diagnostics on your optimized resume files.</p>
            </div>

            <div className="community-card glass-panel">
              <div className="community-icon-box icon-emerald">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <h4 className="community-card-title">Hiring Trends</h4>
              <p className="community-card-desc">Real-time indexes of active US tech headcount freezes, updates, and open hiring windows.</p>
            </div>

            <div className="community-card glass-panel">
              <div className="community-icon-box icon-blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h4 className="community-card-title">Free Resources</h4>
              <p className="community-card-desc">Instant access to cold message swipe files, negotiation templates, and salary benchmarking datasets.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
