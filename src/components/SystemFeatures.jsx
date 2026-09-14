import React from 'react';

export default function SystemFeatures() {
  const agents = [
    {
      span: 'bento-span-8',
      badge: 'Core Diagnostic',
      title: 'Automated Career Health Diagnostic',
      desc: 'Our proprietary algorithm scans your resume against current hiring standards for 200+ roles, identifying exact ATS gaps, missing impact metrics, and seniority misalignments in seconds.',
      features: ['90-point ATS vulnerability breakdown', 'Competitive benchmark vs. top 10% candidates', 'Actionable remediation roadmap']
    },
    {
      span: 'bento-span-4',
      badge: 'ATS Scanner',
      title: 'Real-Time ATS Keyword Matcher',
      desc: 'Inject high-scoring semantic keywords directly into your bullet points without awkward keyword stuffing.',
      features: ['Tailored to job description', 'Verified by human coaches']
    },
    {
      span: 'bento-span-4',
      badge: 'Visibility Engine',
      title: 'Inbound Recruiter Attractor',
      desc: 'Transform your LinkedIn profile into a recruiter magnet with algorithmic headline optimization, SEO rich summaries, and engagement hooks.',
      features: ['+300% search appearances', 'Verified recruiter keywords']
    },
    {
      span: 'bento-span-8',
      badge: 'Outreach Automation',
      title: 'High-Conversion Outbound Campaign Agent',
      desc: 'Generate tailored, hyper-personalized outreach sequences to hiring managers and alumni. Built on frameworks tested across 10,000+ successful applications.',
      features: ['Custom hiring manager targeting', 'Automated follow-up sequences', '4x reply rate over generic templates']
    },
    {
      span: 'bento-span-4',
      badge: 'Interview Coach',
      title: 'Behavioral & Tech Interview Simulator',
      desc: 'Practice role-specific STAR-method questions with real-time AI feedback on clarity, metrics, and conciseness.',
      features: ['Company-specific question banks', 'Instant response scoring']
    },
    {
      span: 'bento-span-4',
      badge: 'Compensation Intelligence',
      title: 'Salary Negotiation Benchmarking',
      desc: 'Never leave money on the table. Access real-time compensation data across levels, equity grants, and signing bonuses.',
      features: ['Level-by-level salary bands', 'Negotiation scripts & counter-offers']
    },
    {
      span: 'bento-span-4',
      badge: 'Orchestration',
      title: 'Unified Job Search Database',
      desc: 'All your applications, resumes, recruiter threads, and interview dates tracked automatically in one synchronized dashboard.',
      features: ['Zero manual spreadsheets', 'Automatic status detection']
    }
  ];

  return (
    <section className="section system-section" id="features" aria-labelledby="features-heading">
      <div className="container">
        
        <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
          <div className="badge badge-purple">
            <span className="pulse-dot purple" aria-hidden="true"></span>
            <span>Comprehensive Architecture</span>
          </div>
          <h2 className="section-title" id="features-heading">
            Your Dedicated AI Search Team.<br />
            <span className="gradient-text">8 Specialized Agents Working 24/7.</span>
          </h2>
          <p className="section-subtitle">
            Each agent handles a specific bottleneck in the recruitment funnel, sharing data seamlessly so your job hunt gains momentum every single day.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid" role="list">
          {agents.map((item, idx) => (
            <article key={idx} className={`glass-panel bento-card ${item.span}`} role="listitem">
              <div className="bento-header">
                <span className="badge-emerald-sm">{item.badge}</span>
              </div>
              <h3 className="bento-title">{item.title}</h3>
              <p className="bento-desc">{item.desc}</p>
              <ul className="bento-features-list">
                {item.features.map((feat, fIdx) => (
                  <li key={fIdx} className="bento-feature-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
