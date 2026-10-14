import React, { useState, useEffect, useRef } from 'react';

export default function CommunitySection() {
  const testimonials = [
    {
      id: 1,
      quote: "Very good service and excellent support. I really like the weekly discussions with the Crafture team. I’ve had a great experience with Crafture so far.",
      author: "Hari Duraidhayalu",
      date: "Edited 3 weeks ago",
      profileUrl: "https://www.google.com/maps/contrib/118319777645624714709/reviews?hl=en-IN",
      initials: "HD",
      stars: 5,
      likes: 1,
      avatarBg: "linear-gradient(135deg, #6366F1, #8B5CF6)"
    },
    {
      id: 2,
      quote: "I had a positive experience with Crafture. The support, communication, and career guidance were all really good. Definitely recommend their service!",
      author: "Manasa Gayathri Jagarlamudi",
      date: "3 weeks ago · New",
      profileUrl: "https://www.google.com/maps/contrib/116678909707237294020/reviews?hl=en-IN",
      initials: "MJ",
      stars: 5,
      likes: 1,
      avatarBg: "linear-gradient(135deg, #10B981, #059669)"
    },
    {
      id: 3,
      quote: "Very good service and excellent support. They helped me understand what I was missing in my job search and gave me clear guidance to improve.",
      author: "Rudrani V",
      date: "3 weeks ago · New",
      profileUrl: "https://www.google.com/maps/contrib/111656046378392026465/reviews?hl=en-IN",
      initials: "RV",
      stars: 5,
      likes: 1,
      avatarBg: "linear-gradient(135deg, #F59E0B, #D97706)"
    },
    {
      id: 4,
      quote: "I’ve had a great experience with Crafture so far. The weekly detailed discussions make a big difference because I always know what I should focus on next in my job search.",
      author: "Alekya",
      date: "4 weeks ago",
      profileUrl: "https://www.google.com/maps/contrib/105274928390625510121/reviews?hl=en-IN",
      initials: "A",
      stars: 5,
      likes: 1,
      avatarBg: "linear-gradient(135deg, #EC4899, #8B5CF6)"
    },
    {
      id: 5,
      quote: "Really happy with Crafture’s service. They helped me improve my resume and guided me throughout my job search. Very supportive and professional team.",
      author: "Swapnil Jadhav",
      date: "4 weeks ago",
      profileUrl: "https://www.google.com/maps/contrib/114371167551401716595/reviews?hl=en-IN",
      initials: "SJ",
      stars: 5,
      likes: 0,
      avatarBg: "linear-gradient(135deg, #3B82F6, #1D4ED8)"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-advance every 4.5 seconds unless paused on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 4500);
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
        
        {/* Section Header with Verified Google Reviews Tag */}
        <div className="section-intro text-center">
          <div className="badge badge-emerald">
            {/* Google "G" Icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ marginRight: '4px' }}>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            Verified Google Reviews
          </div>
          <h2 className="section-heading" id="community-heading">
            Hear From Our <span className="gradient-text">Community</span>
          </h2>
          <p className="section-subtext">
            Real feedback from professionals getting hired with Crafture.
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
          aria-label="Google Reviews Community Testimonials"
        >
          {/* Controls Bar */}
          <div className="slider-controls-bar">
            <button 
              className="slider-nav-btn prev-btn glass-panel" 
              onClick={handlePrev} 
              aria-label="Previous Review"
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
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button 
              className="slider-nav-btn next-btn glass-panel" 
              onClick={handleNext} 
              aria-label="Next Review"
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
                    
                    {/* Quotation, Google Stars & Source Header */}
                    <div className="testimonial-card-header">
                      <div className="review-meta-left">
                        <div className="testimonial-stars" aria-label="5 stars rating">
                          {[...Array(item.stars)].map((_, idx) => (
                            <svg key={idx} width="18" height="18" viewBox="0 0 24 24" fill="#FBBC04" aria-hidden="true">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                          ))}
                        </div>
                        <span className="google-badge-inline">
                          <svg width="14" height="14" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                          </svg>
                          Google Review
                        </span>
                      </div>
                      
                      <a 
                        href={item.profileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="google-review-link"
                        title="View review on Google Maps"
                      >
                        <span>View on Google</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="testimonial-quote-body">
                      “{item.quote}”
                    </p>

                    {/* Author Meta Row */}
                    <div className="testimonial-author-row">
                      <div className="author-avatar-circle" style={{ background: item.avatarBg }}>
                        {item.initials}
                      </div>
                      <div className="author-info-col">
                        <a 
                          href={item.profileUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="author-name hover-underline"
                        >
                          {item.author}
                        </a>
                        <div className="author-subtext">
                          <span className="author-role">{item.date}</span>
                          <span className="author-dot">·</span>
                          <span className="author-company-badge">1 review</span>
                          {item.likes > 0 && (
                            <span className="review-likes-pill">❤️ {item.likes}</span>
                          )}
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
