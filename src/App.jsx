import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import heroAsset from './assets/career-gps-hero.svg';
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDot,
  ClipboardCheck,
  Compass,
  FileSearch,
  Handshake,
  HeartHandshake,
  LayoutDashboard,
  Linkedin,
  MessageSquareText,
  Network,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const assessmentUrl = 'https://superprofile.bio/crafture2/VMPxHtEVyi';
const aiUrl = 'https://superprofile.bio/crafture2/scVicvBNXL';
const humanUrl = 'https://superprofile.bio/crafture2/cJaJPBufBv';

const nav = [
  ['problem', 'Problem'],
  ['gps', 'Career GPS'],
  ['platform', 'Platform'],
  ['plans', 'Plans'],
  ['community', 'Community'],
  ['faq', 'FAQ'],
];

const trust = ['No Heavy Upfront Consultancy Fees', 'No Salary Percentage', 'AI + Human Experts', 'Built for U.S. IT Job Seekers'];
const painPoints = ['Resume not ATS-friendly', 'Weak LinkedIn profile', 'Applying to the wrong jobs', 'No recruiter outreach', 'Poor networking', 'Weak interview preparation', 'No follow-up system', 'Too many disconnected tools'];
const gpsItems = ['Career Health Score', 'Strengths', 'Weaknesses', 'Missing Opportunities', 'Personalized Roadmap'];
const platformTools = ['Resume Builder', 'ATS Scanner', 'LinkedIn Optimization', 'AI Job Search', 'Networking', 'Recruiter Outreach', 'Interview Prep', 'Progress Tracking', 'Community'];
const features = [
  ['Resume Optimization', FileSearch],
  ['LinkedIn Optimization', Linkedin],
  ['AI Job Search Automation', Radar],
  ['AI Networking', Network],
  ['Recruiter Outreach', MessageSquareText],
  ['Interview Preparation', BookOpenCheck],
  ['Mock Interviews', Users],
  ['Application Tracker', ClipboardCheck],
  ['Community', HeartHandshake],
  ['Progress Dashboard', LayoutDashboard],
];

const plans = [
  {
    name: 'Career GPS',
    badge: 'FREE',
    line: 'Best for discovering what is blocking your job search.',
    url: assessmentUrl,
    cta: 'Start Free Assessment',
    points: ['Career health score', 'Blocker diagnosis', 'Personalized roadmap', 'Plan recommendation'],
  },
  {
    name: 'Career GPS AI',
    badge: 'AI does the work',
    line: 'AI-powered job search system configured for you.',
    url: aiUrl,
    cta: 'Choose AI Plan',
    points: ['Resume and ATS workflows', 'Job search automation', 'Networking prompts', 'Progress tracking'],
  },
  {
    name: 'Career GPS AI + Human',
    badge: 'Most guided',
    line: 'AI plus dedicated recruiter and coach support.',
    url: humanUrl,
    cta: 'Choose AI + Human',
    points: ['Everything in AI', 'Recruiter strategy', 'Interview coaching', 'Accountability and reviews'],
  },
];

const howItWorks = [
  ['1', 'Take FREE Career GPS Assessment'],
  ['2', 'Receive Personalized Career Report'],
  ['3', 'Choose Your Plan'],
  ['4', 'Start Landing More Interviews'],
];

const community = ['Weekly Sessions', 'Resume Reviews', 'Hiring Trends', 'Peer Networking', 'Free Resources'];
const faqs = [
  ['Why not just use ChatGPT?', 'ChatGPT is a general assistant. Crafture connects diagnosis, workflows, tracking, AI execution, and expert support in one career operating system.'],
  ['How is this different from consultancies?', 'Crafture starts with a free GPS assessment and does not require heavy upfront consultancy fees or salary-percentage commitments.'],
  ['Why not buy separate AI tools?', 'Separate tools create separate tabs, bills, and workflows. Career GPS keeps resume, ATS, LinkedIn, outreach, interviews, and tracking connected.'],
  ['Is Career GPS free?', 'Yes. The Career GPS assessment is free and helps identify what is blocking your job search before you choose any paid support.'],
  ['Can I upgrade later?', 'Yes. Start with Career GPS, then upgrade to AI or AI + Human support when you want execution and coaching.'],
];

function SectionKicker({ children }) {
  return <p className="section-kicker js-rise"><CircleDot className="h-3.5 w-3.5" />{children}</p>;
}

function SectionTitle({ children }) {
  return <h2 className="section-title js-title">{children}</h2>;
}

function CTAButton({ href, children, variant = 'primary' }) {
  return <a className={`cta cta-${variant}`} href={href}>{children}<ArrowRight className="h-4 w-4" /></a>;
}

export default function App() {
  const [active, setActive] = useState('hero');
  const [openFaq, setOpenFaq] = useState(0);
  const rootRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1, smoothWheel: true, syncTouch: true, touchMultiplier: 1.15 });
    const tick = (time) => lenis.raf(time * 1000);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', { yPercent: 110, rotateX: -18, opacity: 0, duration: 0.9, ease: 'power4.out', stagger: 0.08 });
      gsap.from('.hero-pop', { y: 22, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.09, delay: 0.25 });
      gsap.from('.gps-board', { y: 34, opacity: 0, scale: 0.97, duration: 0.85, ease: 'back.out(1.25)', delay: 0.25 });
      gsap.to('.float-chip', { y: -10, repeat: -1, yoyo: true, duration: 2.2, ease: 'sine.inOut', stagger: 0.16 });
      gsap.from('.hero-card', { y: 18, opacity: 0, scale: 0.94, duration: 0.7, ease: 'back.out(1.4)', stagger: 0.12, delay: 0.55 });

      gsap.utils.toArray('section[id]').forEach((section) => {
        ScrollTrigger.create({ trigger: section, start: 'top 45%', end: 'bottom 45%', onEnter: () => setActive(section.id), onEnterBack: () => setActive(section.id) });
      });

      gsap.utils.toArray('.js-title').forEach((el) => {
        gsap.from(el, { y: 42, opacity: 0, duration: 0.75, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
      });
      gsap.utils.toArray('.js-rise').forEach((el) => {
        gsap.from(el, { y: 24, opacity: 0, duration: 0.62, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
      });
      gsap.utils.toArray('.js-card').forEach((el, index) => {
        gsap.from(el, { y: 34, opacity: 0, scale: 0.985, duration: 0.7, ease: 'power3.out', delay: (index % 4) * 0.035, scrollTrigger: { trigger: el, start: 'top 92%' } });
      });
      gsap.to('.gps-route-path', { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '#gps', start: 'top 72%', end: 'bottom 40%', scrub: 0.8 } });
      gsap.to('.tool-strip', { xPercent: -24, ease: 'none', scrollTrigger: { trigger: '#platform', start: 'top 70%', end: 'bottom 25%', scrub: 0.8 } });

      mm.add('(max-width: 767px)', () => {
        gsap.to('.mobile-sway', { x: 8, repeat: -1, yoyo: true, duration: 2.4, ease: 'sine.inOut', stagger: 0.12 });
      });
    }, rootRef);

    return () => {
      ctx.revert();
      mm.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main ref={rootRef} className="site-shell">
      <div className="paper-noise" />
      <nav className="top-nav">
        <a href="#hero" className="brand"><span><Compass className="h-4 w-4" /></span>Crafture</a>
        <div className="nav-links">{nav.map(([id, label]) => <a key={id} className={active === id ? 'is-active' : ''} href={`#${id}`}>{label}</a>)}</div>
        <a className="nav-cta" href={assessmentUrl}>Free GPS</a>
      </nav>

      <section id="hero" className="hero-section section-pad">
        <div className="hero-copy">
          <div className="hero-pop trust-pill"><Sparkles className="h-4 w-4" /> Built for U.S. IT Job Seekers</div>
          <h1>
            <span className="hero-line">Everything Between</span>
            <span className="hero-line">You and Your Next</span>
            <span className="hero-line accent-text">U.S. Job—In One Place.</span>
          </h1>
          <p className="hero-pop hero-subcopy">Stop paying for multiple AI tools, expensive consultancies, and disconnected courses. Crafture is the AI-powered Career Operating System that identifies what's blocking your job search, automates repetitive work, and gives you expert guidance—so you can focus on getting hired.</p>
          <div className="hero-pop cta-row"><CTAButton href={assessmentUrl}>Start Your FREE Career GPS Assessment</CTAButton><CTAButton href="#plans" variant="secondary">See Pricing</CTAButton></div>
          <div className="hero-pop trust-grid">{trust.map((item) => <span key={item}><BadgeCheck className="h-4 w-4" />{item}</span>)}</div>
        </div>

        <div className="hero-visual-wrap">
          <div className="gps-board" aria-label="Career GPS visualization">
            <img className="hero-asset" src={heroAsset} alt="Career GPS route cockpit showing blockers converted into a roadmap, AI workflows, interviews, and coaching" />
            <div className="hero-card hero-card-score float-chip mobile-sway"><span>84</span><strong>Career Health Score</strong></div>
            <div className="hero-card hero-card-report float-chip mobile-sway"><ShieldCheck className="h-4 w-4" /><strong>Free report ready in minutes</strong></div>
            <div className="hero-card hero-card-stack float-chip mobile-sway"><Handshake className="h-4 w-4" /><strong>AI + experts when needed</strong></div>
          </div>
          <div className="diagnosis-grid">
            {gpsItems.map((item, i) => <div key={item}><span>{String(i + 1).padStart(2, '0')}</span><strong>{item}</strong></div>)}
          </div>
        </div>
      </section>

      <section id="problem" className="section-pad">
        <div className="section-head"><SectionKicker>The Problem</SectionKicker><SectionTitle>Why Most Job Seekers Never Get Enough Interviews</SectionTitle><p className="js-rise section-copy">Most candidates don't fail because they lack skills. They fail because their job search system is broken.</p></div>
        <div className="pain-grid">{painPoints.map((point) => <article className="js-card pain-card" key={point}><CircleDot className="h-5 w-5" /><span>{point}</span></article>)}</div>
        <div className="center-cta js-rise"><CTAButton href={assessmentUrl}>Find What's Holding You Back</CTAButton></div>
      </section>

      <section id="gps" className="section-pad split-section">
        <div><SectionKicker>Career GPS</SectionKicker><SectionTitle>Meet Crafture Career GPS™</SectionTitle><p className="js-rise section-copy">Career GPS finds the real blocker first, then turns the diagnosis into a practical search roadmap.</p><div className="cta-row js-rise"><CTAButton href={assessmentUrl}>Start Free Assessment</CTAButton></div></div>
        <div className="score-card js-card">
          <div className="score-ring"><span>84</span><small>Career Health Score</small></div>
          {gpsItems.map((item) => <div className="score-row" key={item}><Check className="h-4 w-4" />{item}</div>)}
        </div>
      </section>

      <section id="platform" className="section-pad">
        <div className="section-head"><SectionKicker>One Platform Instead of 10 Tools</SectionKicker><SectionTitle>Everything works together in one intelligent platform.</SectionTitle></div>
        <div className="comparison-wrap js-card">
          <div className="scattered-tools"><h3>Before Crafture</h3>{['Resume app', 'ATS checker', 'Course', 'Tracker', 'Outreach tool', 'Interview prep'].map((tool) => <span key={tool}>{tool}</span>)}</div>
          <div className="platform-core"><Compass className="h-10 w-10" /><h3>Crafture Career OS</h3><p>One connected workflow for assessment, AI execution, expert support, and progress.</p></div>
        </div>
        <div className="tool-strip">{platformTools.concat(platformTools).map((tool, i) => <span key={`${tool}-${i}`}><Check className="h-4 w-4" />{tool}</span>)}</div>
      </section>

      <section id="plans" className="section-pad">
        <div className="section-head"><SectionKicker>Choose Your Support Level</SectionKicker><SectionTitle>Career GPS finds the problem. AI does the work. AI + Human delivers strategy.</SectionTitle></div>
        <div className="plans-grid">{plans.map((plan) => <article className="js-card plan-card" key={plan.name}><p className="plan-badge">{plan.badge}</p><h3>{plan.name}</h3><p>{plan.line}</p><ul>{plan.points.map((point) => <li key={point}><Check className="h-4 w-4" />{point}</li>)}</ul><CTAButton href={plan.url}>{plan.cta}</CTAButton></article>)}</div>
      </section>

      <section id="how" className="section-pad">
        <div className="section-head"><SectionKicker>How It Works</SectionKicker><SectionTitle>From guessing to a guided route in four moves.</SectionTitle></div>
        <div className="steps-grid">{howItWorks.map(([num, label]) => <article className="js-card step-card" key={num}><span>{num}</span><h3>{label}</h3></article>)}</div>
      </section>

      <section id="features" className="section-pad">
        <div className="section-head"><SectionKicker>Platform Features</SectionKicker><SectionTitle>The daily job-search work, organized and moving.</SectionTitle></div>
        <div className="feature-grid">{features.map(([label, Icon]) => <article className="js-card feature-card" key={label}><Icon className="h-6 w-6" /><span>{label}</span></article>)}</div>
      </section>

      <section id="human" className="section-pad split-section">
        <div><SectionKicker>AI + Human</SectionKicker><SectionTitle>When AI Isn't Enough</SectionTitle><p className="js-rise section-copy">AI automates repetitive work. Human experts provide strategy, accountability, and interview coaching. Together they deliver better results.</p></div>
        <div className="human-card js-card"><BrainCircuit className="h-8 w-8" /><span>AI handles volume</span><HeartHandshake className="h-8 w-8" /><span>Experts sharpen strategy</span><BriefcaseBusiness className="h-8 w-8" /><span>You focus on getting hired</span></div>
      </section>

      <section id="community" className="section-pad split-section">
        <div><SectionKicker>Community</SectionKicker><SectionTitle>Join the Crafture Community</SectionTitle><p className="js-rise section-copy">Keep momentum with people, sessions, reviews, market context, and resources that make the search feel less lonely.</p></div>
        <div className="community-list">{community.map((item) => <div className="js-card" key={item}><Users className="h-5 w-5" />{item}</div>)}</div>
      </section>

      <section id="faq" className="section-pad faq-section">
        <div className="section-head"><SectionKicker>FAQ</SectionKicker><SectionTitle>Questions before you start.</SectionTitle></div>
        <div className="faq-list">{faqs.map(([q, a], i) => <button className="js-card faq-item" key={q} onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}<ChevronDown className={openFaq === i ? 'open' : ''} /></span>{openFaq === i && <p>{a}</p>}</button>)}</div>
      </section>

      <section className="final-cta section-pad">
        <SectionKicker>Ready to Stop Guessing?</SectionKicker>
        <h2>Everything between you and your next U.S. job is finally in one place.</h2>
        <CTAButton href={assessmentUrl}>Start Your FREE Career GPS Assessment</CTAButton>
      </section>

      <footer>© 2026 Crafture. Career GPS for U.S. IT job seekers.</footer>
    </main>
  );
}
