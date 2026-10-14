import React from 'react';

export default function CompanyMarquee() {
  const companies = [
    { name: 'Google', logo: '/assets/images/logos/google.svg', width: 92 },
    { name: 'Amazon', logo: '/assets/images/logos/amazon.svg', width: 88 },
    { name: 'Meta', logo: '/assets/images/logos/meta.svg', width: 84 },
    { name: 'Netflix', logo: '/assets/images/logos/netflix.svg', width: 84 },
    { name: 'Microsoft', logo: '/assets/images/logos/microsoft.svg', width: 96 },
    { name: 'Airbnb', logo: '/assets/images/logos/airbnb.svg', width: 86 },
    { name: 'Spotify', logo: '/assets/images/logos/spotify.svg', width: 90 },
    { name: 'Tesla', logo: '/assets/images/logos/tesla.svg', width: 84 },
    { name: 'Bloomberg', logo: '/assets/images/logos/bloomberg.svg', width: 94 },
    { name: 'Adobe', logo: '/assets/images/logos/adobe.svg', width: 84 }
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...companies, ...companies];

  return (
    <section className="companies-marquee-section" aria-label="Trusted by top company employees">
      <div className="container">
        <div className="section-intro text-center">
          <div className="badge badge-emerald">
            <span className="pulse-dot" aria-hidden="true"></span>
            Proven Hiring Track Record
          </div>
          <h2 className="section-heading text-balance">
            Trusted by job seekers who've landed at <span className="gradient-text">top companies</span>
          </h2>
          <p className="section-subtext">
            Our users have secured positions at industry-leading companies such as
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Track with Real Original Company Logos */}
      <div className="marquee-outer-container">
        <div className="marquee-fade-overlay-left" aria-hidden="true"></div>
        <div className="marquee-fade-overlay-right" aria-hidden="true"></div>

        <div className="marquee-track" role="region" aria-label="Company logos carousel">
          {marqueeItems.map((company, index) => (
            <div 
              key={`${company.name}-${index}`} 
              className="marquee-logo-badge" 
              title={company.name}
            >
              <img 
                src={company.logo} 
                alt={`${company.name} official logo`} 
                className="marquee-real-logo" 
                style={{ maxWidth: `${company.width}px` }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
