import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { ProductHero } from './components/ProductHero';
import {
  Compass, Check, X, ChevronDown, RefreshCw, Sparkles,
  AlertTriangle, Clock, Zap, Shield, Users, BarChart3,
  FileSearch, Star, Lock, TrendingUp, Play, ArrowRight,
  Cpu, Calendar, CheckCircle2, CircleX, RotateCcw,
  BrainCircuit, ScanSearch, FileText, Linkedin,
  MessageCircle, Send, Target, BadgeCheck, FlaskConical,
  Globe, Briefcase
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "Is Career GPS free to start?", a: "Yes. The Starter tier is completely free — it gives you one full Career Health Analysis, an ATS diagnostic scan, 5 AI resume scans, and baseline salary benchmarking. Paid plans unlock 24/7 AI agent automation and human consultancy access." },
  { q: "Is this a recruitment agency or a consultancy?", a: "We are a career consultancy, not a recruiting agency. We represent you — not the employer. That means we optimize for your compensation, timeline, and career trajectory, not for the fastest placement at the lowest cost." },
  { q: "How long does the initial setup take?", a: "Your dashboard activates immediately. AI agents can configure and begin your first scan in under 10 minutes. For Human+AI plans, your dedicated coach books a strategy kickoff within 24–48 hours." },
  { q: "Do I need technical skills to use Career GPS?", a: "None. We build and manage every automation system for you. Your interaction is a clean dashboard with daily priority tasks. All configuration, agent setup, and technical maintenance is handled by our team." },
  { q: "What if I already use ChatGPT for job searching?", a: "ChatGPT is a general tool that requires hours of daily manual prompting. Career GPS™ is a purpose-built OS — multiple specialized agents work concurrently across resume tailoring, LinkedIn SEO, outbound applications, and cold outreach." },
  { q: "How does the human support component work?", a: "AI handles volume: scanning, tailoring, submitting, and following up. Human experts handle strategy: resume rewriting, mock interview coaching, direct recruiter messaging, and salary negotiation scripts. You get both layers running concurrently." },
  { q: "What industries and locations do you support?", a: "We serve professional corporate roles across the USA, focusing on Technology, Finance, Marketing, Operations, and Healthcare Management." },
  { q: "Can I cancel anytime?", a: "Yes. All paid plans are month-to-month. No annual contracts, no cancellation penalties. Manage everything from your billing dashboard in one click." },
  { q: "Does Career GPS guarantee a job offer?", a: "No service can legally guarantee a job — final decisions belong to employers. We guarantee a dramatically improved pipeline: more applications submitted, more recruiter outreach, and more interview opportunities than you would generate manually." },
  { q: "How does the AI tailor resumes without making things up?", a: "Our agents only work with verified data from your career history. They restructure, reorder, and re-emphasize your actual experience using ATS keyword patterns from each target job description. No hallucinated skills or fabricated credentials." },
];

const aiAgents = [
  { id: "01", icon: <ScanSearch className="w-5 h-5" />, title: "Job Scan Agent", desc: "Continuously scrapes LinkedIn, Indeed, ZipRecruiter, and company career pages. Filters to your 85%+ match threshold and queues applications automatically." },
  { id: "02", icon: <FileText className="w-5 h-5" />, title: "Resume Tailor", desc: "Re-ranks bullets, injects role-specific keywords, and reformats structure per JD. Every application gets a fresh, ATS-optimized version of your resume." },
  { id: "03", icon: <Linkedin className="w-5 h-5" />, title: "LinkedIn Optimizer", desc: "Audits headline, about section, and skills in real-time against active recruiter search patterns. Pushes profile to the top of filtered searches." },
  { id: "04", icon: <Send className="w-5 h-5" />, title: "Cold Outreach Bot", desc: "Maps org structures at target companies, identifies hiring managers, and sends personalized LinkedIn messages and email sequences on your behalf." },
  { id: "05", icon: <BrainCircuit className="w-5 h-5" />, title: "Interview Prep AI", desc: "Generates role-specific behavioral and technical questions from each JD. Runs mock sessions and tracks weak areas to focus coaching attention." },
  { id: "06", icon: <MessageCircle className="w-5 h-5" />, title: "Inbox Copilot", desc: "Monitors your primary inbox for recruiter messages, flags urgent responses, and drafts reply templates so you never miss a time-sensitive opportunity." },
  { id: "07", icon: <RefreshCw className="w-5 h-5" />, title: "Follow-Up Engine", desc: "Tracks every open application and auto-sends polite follow-up messages when pipelines go quiet beyond 5–7 business days." },
  { id: "08", icon: <Target className="w-5 h-5" />, title: "Salary Intelligence", desc: "Continuously pulls comp data from current market sources. Flags roles below target and flags counteroffers when final negotiation begins." },
];

const problemStages = [
  { n: "7", label: "The Reset", detail: "Back to zero. No pipeline, no momentum. Start the whole cycle again.", color: "border-red-500/25 bg-red-500/5" },
  { n: "6", label: "The Rejection / Ghost", detail: "Offer goes cold. ATS filtered you. Recruiter never responded.", color: "border-red-500/20 bg-red-500/3" },
  { n: "5", label: "Stop Applying", detail: "Interview prep consumes all your time. Application pipeline dries up.", color: "border-white/10 bg-white/[0.03]" },
  { n: "4", label: "Interview Call", detail: "Finally got one. You scramble to research, prep answers, schedule.", color: "border-white/10 bg-white/[0.03]" },
  { n: "3", label: "Wait & Hope", detail: "Resume submitted. Now you wait. ATS may have already filtered you.", color: "border-white/[0.08] bg-white/[0.02]" },
  { n: "2", label: "Manual Tailoring", detail: "2+ hours rewriting the same experience for one job description.", color: "border-white/[0.08] bg-white/[0.02]" },
  { n: "1", label: "JD Hunt", detail: "Scrolling boards manually. Most roles are already filled internally.", color: "border-white/5 bg-white/[0.01]" },
];

// ─── Section label component ───────────────────────────────────────────────────
function SectionLabel({ text, color = 'green' }) {
  const colors = {
    green: 'border-[#10b981]/20 bg-[#10b981]/6 text-[#10b981]',
    red:   'border-red-500/20   bg-red-500/6   text-red-400',
    blue:  'border-blue-500/20  bg-blue-500/6  text-blue-400',
  };
  return (
    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[10px] font-['Barlow_Semi_Condensed'] font-bold uppercase tracking-[0.14em] mb-6 ${colors[color]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${color === 'green' ? 'bg-[#10b981]' : color === 'red' ? 'bg-red-400' : 'bg-blue-400'} animate-pulse`} />
      {text}
    </div>
  );
}

// ─── Section heading ───────────────────────────────────────────────────────────
function SectionH2({ children, className = '' }) {
  return (
    <h2 className={`font-['Barlow_Semi_Condensed'] font-extrabold text-[clamp(2.2rem,4.8vw,4rem)] tracking-[-0.04em] leading-[1.0] text-white ${className}`}
        style={{ textWrap: 'balance' }}>
      {children}
    </h2>
  );
}

// ─── TiltCard ──────────────────────────────────────────────────────────────────
function TiltCard({ children, className = '', maxTilt = 7 }) {
  const ref = useRef(null);
  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * maxTilt * 2;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * maxTilt * 2;
    ref.current.style.transform = `perspective(900px) rotateX(${-y}deg) rotateY(${x}deg) scale3d(1.012, 1.012, 1.012)`;
  };
  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
  };
  return (
    <div className={`w-full h-full preserve-3d ${className}`}>
      <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
           className="w-full h-full preserve-3d" style={{ willChange: 'transform', transition: 'transform 0.08s linear' }}>
        <div style={{ transform: 'translateZ(16px)' }} className="h-full w-full">{children}</div>
      </div>
    </div>
  );
}

// ─── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [navScrolled, setNavScrolled]   = useState(false);
  const [openFaq, setOpenFaq]           = useState(null);
  const [billingYearly, setBillingYearly] = useState(false);
  const [isLoaded, setIsLoaded]         = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Interactive Slider State
  const [sliderPos, setSliderPos]       = useState(50);
  const sliderRef = useRef(null);

  const problemCardsRef  = useRef([]);
  const aiContainerRef   = useRef(null);
  const aiTriggerRef     = useRef(null);

  // ── Immediate load flag ────────────────────────────────────────────────────
  useEffect(() => { setIsLoaded(true); }, []);

  // ── Navbar scroll detection ────────────────────────────────────────────────
  useEffect(() => {
    const handler = () => setNavScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // ── Drag Slider logic ──────────────────────────────────────────────────────
  const handleSliderMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pos)));
  };

  const handleMouseMoveSlider = (e) => {
    if (e.buttons === 1) { // Left mouse button clicked/dragging
      handleSliderMove(e.clientX);
    }
  };

  const handleTouchMoveSlider = (e) => {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  // ── Custom cursor ──────────────────────────────────────────────────────────
  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    if (!isFine) return;
    const follower = document.getElementById('custom-follower');
    const dot      = document.getElementById('custom-dot');
    if (!follower || !dot) return;

    let tX = 0, tY = 0, fX = 0, fY = 0, dX = 0, dY = 0, raf;
    const onMove = (e) => { tX = e.clientX; tY = e.clientY; };
    const tick   = () => {
      fX += (tX - fX) * 0.12; fY += (tY - fY) * 0.12;
      dX += (tX - dX) * 0.35; dY += (tY - dY) * 0.35;
      follower.style.transform = `translate3d(${fX}px,${fY}px,0) translate(-50%,-50%)`;
      dot.style.transform      = `translate3d(${dX}px,${dY}px,0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    const onOver = (e) => {
      const t = e.target.closest('a,button,[role=button],.cursor-pointer');
      if (t) follower.classList.add('hovering');
    };
    const onOut  = (e) => {
      const t = e.target.closest('a,button,[role=button],.cursor-pointer');
      if (t) follower.classList.remove('hovering');
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout',  onOut,  { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout',  onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  // ── Lenis + GSAP Scroll Animations ────────────────────────────────────────
  useEffect(() => {
    if (!isLoaded) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    // Section scroll tracking active nav state
    const sections = ['hero', 'problem', 'features', 'ai-team', 'human', 'pricing', 'faq'];
    sections.forEach(s => {
      ScrollTrigger.create({
        trigger: `#${s}`,
        start: 'top 35%',
        end: 'bottom 35%',
        onEnter: () => setActiveSection(s),
        onEnterBack: () => setActiveSection(s),
      });
    });

    // Staggered title reveals
    gsap.utils.toArray('.js-reveal-title').forEach(el => {
      gsap.from(el, {
        yPercent: 108, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none none' },
      });
    });

    // Aurora parallax background
    gsap.to('.js-aurora-bg', {
      yPercent: 12, ease: 'none',
      scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: true },
    });

    // Problem cards cascade
    gsap.from('.js-prob-card', {
      x: 220, rotateY: 55, opacity: 0, transformOrigin: 'left center', stagger: 0.06,
      scrollTrigger: { trigger: '#problem', start: 'top 80%', end: 'top 30%', scrub: 1 },
    });
    problemCardsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        y: -15 * (i + 1) * 0.25, ease: 'none',
        scrollTrigger: { trigger: '#problem', start: 'top bottom', end: 'bottom top', scrub: 1.1 },
      });
    });

    // Cost cards pop
    gsap.from('.js-cost-card', {
      scale: 0.2, rotationY: 30, opacity: 0, stagger: 0.06, transformOrigin: 'center center',
      scrollTrigger: { trigger: '#cost', start: 'top 82%', end: 'top 45%', scrub: 1 },
    });

    // Feature cards bento grid reveal
    gsap.from('.js-feat-card', {
      scale: 0.94, opacity: 0, y: 30, stagger: 0.08,
      scrollTrigger: { trigger: '#features', start: 'top 82%', end: 'top 50%', scrub: 1 },
    });

    // AI Team horizontal scroll
    const scrollW   = aiContainerRef.current.scrollWidth;
    const toScroll  = scrollW - window.innerWidth;
    gsap.to(aiContainerRef.current, {
      x: () => -(toScroll + 80), ease: 'none',
      scrollTrigger: {
        trigger: aiTriggerRef.current, pin: true, scrub: 1,
        start: 'top top', end: () => `+=${toScroll + 400}`,
        invalidateOnRefresh: true,
      },
    });

    // Human support cards
    gsap.from('.js-human-card', {
      rotateX: 60, transformOrigin: 'top center', opacity: 0, stagger: 0.06,
      scrollTrigger: { trigger: '#human', start: 'top 82%', end: 'top 42%', scrub: 1 },
    });

    // Comparison rows
    gsap.from('.js-comp-row', {
      x: 80, opacity: 0, stagger: 0.04,
      scrollTrigger: { trigger: '#comparison', start: 'top 85%', end: 'top 55%', scrub: 1 },
    });

    // Pricing cards
    gsap.from('.js-price-card', {
      scale: 0.94, y: 40, opacity: 0, stagger: 0.08,
      scrollTrigger: { trigger: '#pricing', start: 'top 82%', end: 'top 55%', scrub: 1 },
    });

    // Timeline line fill
    gsap.from('.js-timeline-fill', {
      height: '0%', ease: 'none',
      scrollTrigger: { trigger: '#howitworks', start: 'top 55%', end: 'bottom 75%', scrub: 1 },
    });

    // CTA zoom-in
    gsap.from('.js-cta-text', {
      scale: 0.9, opacity: 0.6,
      scrollTrigger: { trigger: '#finalcta', start: 'top 85%', end: 'top 55%', scrub: 1 },
    });
    gsap.to('.js-cta-orb', {
      scale: 1.3, opacity: 0.85,
      scrollTrigger: { trigger: '#finalcta', start: 'top bottom', end: 'bottom top', scrub: 1 },
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isLoaded]);

  // ── Helper to position active indicator dot ───────────────────────────────
  const getNavOffset = (sec) => {
    const list = ['hero', 'problem', 'features', 'ai-team', 'human', 'pricing', 'faq'];
    const idx = list.indexOf(sec);
    return idx >= 0 ? idx * 56 : 0;
  };

  return (
    <>
      {/* ── Custom Cursor Follower ────────────────────────────────────────────── */}
      <div id="custom-follower" className="cursor-follower hidden md:block" style={{ transform: 'translate3d(-200px,-200px,0) translate(-50%,-50%)' }} />
      <div id="custom-dot"      className="cursor-dot      hidden md:block" style={{ transform: 'translate3d(-200px,-200px,0) translate(-50%,-50%)' }} />

      {/* ── Main wrapper (locked against horizontal overflow) ──────────────────── */}
      <div className="relative min-h-screen overflow-x-hidden">

        {/* ── Continuous premium background (Unified layout) ──────────────────── */}
        <div className="js-aurora-bg fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          <div className="noise-overlay absolute inset-0 opacity-[0.024]" />
          <div className="grid-lines absolute inset-0" />
          <div className="light-ray absolute top-0 left-[15%] w-[1px]" />
          <div className="light-ray absolute top-0 left-[50%] w-[1px]" />
          <div className="light-ray absolute top-0 left-[85%] w-[1px]" />
          <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0.02) 50%, transparent 70%)', animation: 'auroraFloat1 20s ease-in-out infinite' }} />
          <div className="absolute bottom-[-10%] right-[-5%] w-[65vw] h-[65vw] rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.02) 50%, transparent 70%)', animation: 'auroraFloat2 26s ease-in-out infinite' }} />
          <div className="absolute top-[35%] right-[5%] w-[40vw] h-[40vw] rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.07) 0%, transparent 60%)', animation: 'auroraFloat3 18s ease-in-out infinite' }} />
        </div>

        {/* ── Navbar ──────────────────────────────────────────────────────────── */}
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
                style={{
                  background: navScrolled ? 'rgba(4,5,4,0.72)' : 'transparent',
                  backdropFilter: navScrolled ? 'blur(28px) saturate(1.5)' : 'none',
                  borderBottom: navScrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
                }}>
          <div className="max-w-7xl mx-auto px-6 h-[68px] flex justify-between items-center relative">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-[#10b981] flex items-center justify-center transition-all duration-300"
                   style={{ boxShadow: '0 0 16px rgba(16,185,129,0.4)' }}>
                <Compass className="w-4 h-4 text-black" />
              </div>
              <span className="font-['Barlow_Semi_Condensed'] font-extrabold text-[14px] tracking-[-0.01em] text-white">
                CAREER <span className="text-[#10b981]">GPS™</span>
              </span>
            </a>

            {/* Nav links with indicator dot */}
            <div className="relative hidden md:flex items-center">
              <nav className="flex items-center gap-7 text-[12px] text-white/45 font-['Barlow_Semi_Condensed'] font-bold uppercase tracking-[0.08em] pr-4">
                {[['#hero','Home','hero'],['#problem','Problem','problem'],['#features','System','features'],['#ai-team','AI Team','ai-team'],['#human','Human+AI','human'],['#pricing','Pricing','pricing'],['#faq','FAQ','faq']].map(([h,l,id]) => (
                  <a key={h} href={h} className={`nav-link hover:text-white transition-colors py-1 ${activeSection === id ? 'active text-[#10b981]' : ''}`}>{l}</a>
                ))}
              </nav>
            </div>

            <a href="#pricing"
               className="btn-shimmer text-[10px] font-['Barlow_Semi_Condensed'] font-bold uppercase tracking-[0.14em] px-5 py-2.5 rounded-full transition-all"
               style={{ border: '1px solid rgba(16,185,129,0.28)', color: '#10b981', background: 'rgba(16,185,129,0.05)' }}>
              Free Analysis
            </a>
          </div>
        </header>

        {/* ══ SECTION 1 · HERO ═══════════════════════════════════════════════════ */}
        <ProductHero />

        <div className="section-divider" />

        {/* ══ SECTION 2 · PROBLEM ═══════════════════════════════════════════════ */}
        <section id="problem" className="relative py-36 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-6">
              <SectionLabel text="Root Cause" color="red" />
              <div className="overflow-hidden">
                <SectionH2>
                  <span className="js-reveal-title block">Your job search doesn't fail</span>
                  <span className="js-reveal-title block text-red-400 mt-1">because it keeps starting over.</span>
                </SectionH2>
              </div>
              <p className="text-white/50 font-sans text-[1.02rem] leading-[1.72] max-w-md">
                Job searching is a pipeline problem. Every time you stop applying to prep for an interview — your pipeline empties. When rejection arrives, you restart from zero.
              </p>
              <div className="p-5 rounded-xl border border-red-500/12 flex gap-4" style={{ background: 'rgba(239,68,68,0.03)' }}>
                <CircleX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-['Barlow_Semi_Condensed'] font-bold text-[12px] text-white uppercase tracking-wide mb-1">Every reset costs you real time and money</p>
                  <p className="text-[11px] text-white/40 leading-relaxed">A gap in outreach breaks market relevance. Companies hire fast. A stalled pipeline means missed windows that don't reopen.</p>
                </div>
              </div>
            </div>

            {/* Right — 3D stacked cards */}
            <div className="relative flex justify-center" style={{ perspective: '1200px' }}>
              <div className="relative w-full max-w-[390px] h-[390px]" style={{ transformStyle: 'preserve-3d' }}>
                {problemStages.map((s, i) => (
                  <div key={i}
                       ref={el => (problemCardsRef.current[i] = el)}
                       className="js-prob-card absolute w-full cursor-pointer"
                       style={{ transform: `translateZ(${i * -28}px) translateY(${i * 22}px) rotateX(-3deg)`, transformStyle: 'preserve-3d', zIndex: 10 - i }}>
                    <TiltCard maxTilt={5}>
                      <div className={`glass-ultra rounded-2xl p-5 border ${s.color} h-full w-full`}>
                        <div className="flex justify-between items-center">
                          <span className="font-['Barlow_Semi_Condensed'] font-bold text-[13px] text-white">{s.label}</span>
                          <span className="text-[9px] font-mono text-white/20">STAGE {s.n}</span>
                        </div>
                        <p className="text-[11px] text-white/40 mt-1.5 leading-relaxed">{s.detail}</p>
                      </div>
                    </TiltCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ══ SECTION 3 · COST OF DELAY ═══════════════════════════════════════ */}
        <section id="cost" className="relative py-36 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-20">
              <SectionLabel text="The Hidden Cost" color="red" />
              <div className="overflow-hidden">
                <SectionH2>
                  <span className="js-reveal-title block">Every day you delay</span>
                  <span className="js-reveal-title block text-white/55 mt-1">costs you opportunities.</span>
                </SectionH2>
              </div>
              <p className="mt-6 text-white/45 font-sans text-base leading-[1.7]">
                While you manually write resumes and wait for responses, live listings close. The compounding cost of inaction is larger than most people calculate.
              </p>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5" style={{ perspective: '1000px' }}>
              {[
                { icon: <Clock className="w-5 h-5" />, t: 'Recruiters Move On', d: 'Top recruiters finalise shortlists within 72 hours of posting. Late applications get filtered before a human reads them.' },
                { icon: <Briefcase className="w-5 h-5" />, t: 'Listings Expire', d: 'High-traffic corporate roles close automatically when application counts exceed 200. The window is shorter than you think.' },
                { icon: <Globe className="w-5 h-5" />, t: 'Networks Go Cold', d: 'Referral leads expire when internal teams fill roles or headcount freezes mid-quarter without announcement.' },
                { icon: <BarChart3 className="w-5 h-5" />, t: 'Pipelines Empty', d: 'Pausing applications during an active interview leaves zero backup options when that loop ends without an offer.' },
                { icon: <TrendingUp className="w-5 h-5" />, t: 'Confidence Drops', d: 'Repeated rejection cycles with no alternative pipeline damage performance at the very screens you prepared for.' },
              ].map((c, i) => (
                <div key={i} className="js-cost-card">
                  <TiltCard>
                    <div className="glass-ultra rounded-2xl p-6 h-full flex flex-col gap-5 border border-white/[0.05] hover:border-red-500/20 transition-colors min-h-[220px]">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-red-400 shrink-0"
                           style={{ background: 'rgba(239,68,68,0.06)' }}>
                        {c.icon}
                      </div>
                      <div>
                        <h3 className="font-['Barlow_Semi_Condensed'] font-bold text-[12px] text-white uppercase tracking-wide mb-2">{c.t}</h3>
                        <p className="text-[11px] text-white/40 leading-relaxed">{c.d}</p>
                      </div>
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ══ SECTION 4 · BENTO GRID FEATURES ═════════════════════════════════ */}
        <section id="features" className="relative py-36 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            
            <div className="max-w-3xl mb-20">
              <SectionLabel text="Bento Grid" />
              <div className="overflow-hidden">
                <SectionH2>
                  <span className="js-reveal-title block">Futuristic modules built</span>
                  <span className="js-reveal-title block text-[#10b981] mt-1">for career command.</span>
                </SectionH2>
              </div>
              <p className="mt-5 text-white/45 font-sans text-base leading-[1.7] max-w-xl">
                Every single piece of our dashboard is dynamic, frosted glass, and designed to give you direct command over recruiter pipelines.
              </p>
            </div>

            {/* Bento Grid Panel */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5" style={{ perspective: '1200px' }}>
              
              {/* Cell 1: Double Width (Bento Core ATS Scanner) */}
              <div className="js-feat-card md:col-span-8">
                <TiltCard maxTilt={4}>
                  <div className="glass-ultra rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start gap-8 min-h-[300px] border border-white/[0.05] hover:border-[#10b981]/15 transition-all">
                    <div className="max-w-xs space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#10b981]"><FileSearch className="w-5.5 h-5.5" /></div>
                      <h3 className="font-['Barlow_Semi_Condensed'] font-bold text-[15px] text-white uppercase tracking-wide">ATS Analyzer & Optimizer</h3>
                      <p className="text-[11px] text-white/40 leading-relaxed">Instant parsing simulator identifies format faults, keywords gap, and semantic alignment against USA target jobs.</p>
                    </div>
                    {/* Live preview visual inside bento */}
                    <div className="w-full md:w-[280px] p-4 rounded-xl border border-white/5 bg-black/40 text-left font-mono text-[9px] text-white/40 space-y-2">
                      <div className="flex justify-between text-white/20 pb-1.5 border-b border-white/5 mb-1">
                        <span>analyzing_resume.docx</span>
                        <span className="text-[#10b981] font-bold">MATCH ACTIVE</span>
                      </div>
                      <div className="flex justify-between items-center text-white/70">
                        <span>[x] Tailor leadership metrics</span>
                        <Check className="w-3 h-3 text-[#10b981]" />
                      </div>
                      <div className="flex justify-between items-center text-white/70 animate-pulse">
                        <span>[ ] Align target keywords</span>
                        <RefreshCw className="w-2.5 h-2.5 text-[#10b981] animate-spin" />
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-[#10b981] w-[65%]" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Cell 2: Single Width (LinkedIn SEO) */}
              <div className="js-feat-card md:col-span-4">
                <TiltCard maxTilt={5}>
                  <div className="glass-ultra rounded-2xl p-8 flex flex-col justify-between min-h-[300px] border border-white/[0.05] hover:border-[#10b981]/15 transition-all">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#0077b5]"><Linkedin className="w-5.5 h-5.5" /></div>
                      <h3 className="font-['Barlow_Semi_Condensed'] font-bold text-[15px] text-white uppercase tracking-wide">LinkedIn SEO Engine</h3>
                      <p className="text-[11px] text-white/40 leading-relaxed">Syncs search optimization clusters to target active recruiter inquiries automatically.</p>
                    </div>
                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-between text-[11px]">
                      <span className="text-white/60">Profile Reach</span>
                      <span className="text-[#10b981] font-bold font-mono">+142%</span>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Cell 3: Single Width (Salary Intelligence) */}
              <div className="js-feat-card md:col-span-4">
                <TiltCard maxTilt={5}>
                  <div className="glass-ultra rounded-2xl p-8 flex flex-col justify-between min-h-[300px] border border-white/[0.05] hover:border-[#10b981]/15 transition-all">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#10b981]"><Target className="w-5.5 h-5.5" /></div>
                      <h3 className="font-['Barlow_Semi_Condensed'] font-bold text-[15px] text-white uppercase tracking-wide">Salary Intelligence</h3>
                      <p className="text-[11px] text-white/40 leading-relaxed">Continuous salary mapping flags under-compensated leads before final screens are booked.</p>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#10b981] to-[#3b82f6] w-[80%]" />
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Cell 4: Double Width (Interview Readiness Lab) */}
              <div className="js-feat-card md:col-span-8">
                <TiltCard maxTilt={4}>
                  <div className="glass-ultra rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start gap-8 min-h-[300px] border border-white/[0.05] hover:border-[#10b981]/15 transition-all">
                    <div className="max-w-xs space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400"><FlaskConical className="w-5.5 h-5.5" /></div>
                      <h3 className="font-['Barlow_Semi_Condensed'] font-bold text-[15px] text-white uppercase tracking-wide">Interview Readiness Lab</h3>
                      <p className="text-[11px] text-white/40 leading-relaxed">Generates real interactive mock interview scenarios built from the JD. Tracks answer velocity and response match indicators.</p>
                    </div>
                    <div className="w-full md:w-[260px] p-3 rounded-lg border border-white/5 bg-black/40 text-left font-mono text-[9px] text-[#10b981] space-y-1.5">
                      <span className="text-white/25">[MOCK RESPONSE FEEDBACK]</span>
                      <p className="text-white/60">"Explain a time when you optimized a slow rendering application..."</p>
                      <div className="bg-white/3 border border-white/5 rounded p-2 text-white/40">
                        Match strength: 91% · Tone: Confident
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>

            </div>

          </div>
        </section>

        <div className="section-divider" />

        {/* ══ SECTION 5 · INTERACTIVE BEFORE/AFTER SLIDER ══════════════════════ */}
        <section id="beforeafter" className="relative py-36 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-2xl mx-auto mb-18">
              <SectionLabel text="Interactive Slider" />
              <div className="overflow-hidden">
                <SectionH2>
                  <span className="js-reveal-title block">Slide to reveal the</span>
                  <span className="js-reveal-title block text-[#10b981] mt-1">transformation.</span>
                </SectionH2>
              </div>
              <p className="mt-5 text-white/45 text-[13px] font-sans">Click and drag the green divider line to compare manual search against Career GPS Operating System.</p>
            </div>

            {/* Static Header Titles above the slider */}
            <div className="max-w-4xl mx-auto flex justify-between items-center mb-5 px-4 text-[13px] font-['Barlow_Semi_Condensed'] font-bold uppercase tracking-wider">
              <span className="text-red-400">Without Career GPS (Manual)</span>
              <span className="text-[#10b981]">With Career GPS (Automated OS)</span>
            </div>

            {/* Slider Mockup Panel */}
            <div ref={sliderRef}
                 onMouseMove={handleMouseMoveSlider}
                 onTouchMove={handleTouchMoveSlider}
                 className="relative w-full max-w-4xl h-[330px] mx-auto rounded-2xl overflow-hidden border border-white/[0.07] bg-[#050505] cursor-ew-resize select-none">
              
              {/* Before Panel (Red styled checklist) - Background */}
              <div className="absolute inset-0 w-full h-full p-8 md:p-10 bg-gradient-to-br from-[#0c0505] to-[#050505] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[9px] px-2.5 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 font-mono">STAGES 1-7</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
                    {[
                      ['Resume Customization', '2+ hours of rewriting and editing per application description.'],
                      ['Outbound Submissions', 'Manual scrolling, copy-pasting, profile creation.'],
                      ['Outreach Pipeline', 'Cold outreach stops during active interview prep.'],
                      ['Inbox Management', 'Recruiter threads missed, ghosted pipeline stages.'],
                    ].map(([l, v]) => (
                      <div key={l} className="flex gap-3 items-start">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-['Barlow_Semi_Condensed'] font-bold text-[11px] text-white uppercase tracking-wide">{l}</p>
                          <p className="text-[10px] text-white/35 mt-0.5 leading-relaxed">{v}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-[9px] text-red-500/35 uppercase tracking-widest font-mono">⚠️ Interrupted search momentum resets stage progress</div>
              </div>

              {/* After Panel (Green styled checklist) - Clip overlay foreground */}
              <div className="absolute inset-0 h-full bg-gradient-to-br from-[#050b07] to-[#050505] flex flex-col justify-between overflow-hidden border-r border-[#10b981]/25"
                   style={{ width: `${sliderPos}%`, pointerEvents: 'none' }}>
                <div className="w-[840px] p-8 md:p-10"> {/* Fixed width content wrapper matching parent constraint */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[9px] px-2.5 py-1 rounded-full border border-[#10b981]/20 bg-[#10b981]/10 text-[#10b981] font-mono">24/7 ONLINE</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
                    {[
                      ['Resume Customization', 'AI-tailored drafts generated in under 3 seconds per JD.'],
                      ['Outbound Submissions', 'Up to 100 precision matches submitted daily.'],
                      ['Outreach Pipeline', 'Agents keep scanning and sending during mock preps.'],
                      ['Inbox Management', 'Autopilot flags matching opportunities and drafts replies.'],
                    ].map(([l, v]) => (
                      <div key={l} className="flex gap-3 items-start">
                        <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-['Barlow_Semi_Condensed'] font-bold text-[11px] text-white uppercase tracking-wide">{l}</p>
                          <p className="text-[10px] text-white/35 mt-0.5 leading-relaxed">{v}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-8 md:p-10 text-[9px] text-[#10b981]/50 uppercase tracking-widest font-mono">✅ Active campaign logs track outreach velocity automatically</div>
              </div>

              {/* Interactive dragging handle */}
              <div className="slider-handle" style={{ left: `${sliderPos}%` }}>
                <div className="slider-button">
                  <span className="text-[11px] select-none text-black">⇄</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        <div className="section-divider" />

        {/* ══ SECTION 6 · AI TEAM HORIZONTAL SCROLL (Existing, elevated glass) ═ */}
        <div ref={aiTriggerRef} className="relative overflow-hidden" style={{ background: 'rgba(4,6,4,0.3)' }}>
          <section id="ai-team" className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <SectionLabel text="AI Team" />
                <div className="overflow-hidden">
                  <SectionH2>
                    <span className="js-reveal-title block">While you focus on interviews,</span>
                    <span className="js-reveal-title block text-[#10b981]">your AI team keeps working.</span>
                  </SectionH2>
                </div>
              </div>
              <p className="text-white/30 text-[12px] font-sans max-w-xs leading-relaxed">Scroll to meet the 8 specialised agents running your background campaign 24/7.</p>
            </div>

            <div ref={aiContainerRef} className="flex gap-5 items-stretch w-max pb-10 pr-20 pl-[4%]">
              {aiAgents.map((a, i) => (
                <div key={i} className="w-[300px] md:w-[330px] shrink-0">
                  <TiltCard>
                    <div className="glass-ultra rounded-2xl p-7 flex flex-col justify-between border border-white/[0.06] hover:border-[#10b981]/18 transition-all h-full min-h-[280px]">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[#10b981]" style={{ background: 'rgba(16,185,129,0.08)' }}>{a.icon}</div>
                          <span className="text-[9px] font-mono text-[#10b981]/55">AGENT_{a.id} · ONLINE</span>
                        </div>
                        <h3 className="font-['Barlow_Semi_Condensed'] font-bold text-[14px] text-white uppercase tracking-wide mb-3">{a.title}</h3>
                        <p className="text-[11px] text-white/42 leading-relaxed">{a.desc}</p>
                      </div>
                      <div className="mt-8 flex items-center justify-between text-[9px] font-['Barlow_Semi_Condensed'] font-bold text-white/20 pt-4 border-t border-white/[0.05]">
                        <span>STATUS: ACTIVE</span>
                        <Zap className="w-3 h-3 text-[#10b981] animate-pulse" />
                      </div>
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-['Barlow_Semi_Condensed'] text-white/12 tracking-widest uppercase">
              We configure every agent for you — no setup required
            </div>
          </section>
        </div>

        <div className="section-divider" />

        {/* ══ SECTION 7 · HUMAN SUPPORT (glassmorphic grid update) ══════════════ */}
        <section id="human" className="relative py-36 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <SectionLabel text="Human + AI" />
              <div className="overflow-hidden">
                <SectionH2>
                  <span className="js-reveal-title block">Need more than</span>
                  <span className="js-reveal-title block">automation?</span>
                  <span className="js-reveal-title block text-[#10b981] mt-1">We cover that too.</span>
                </SectionH2>
              </div>
              <p className="text-white/48 font-sans text-base leading-[1.72]">
                AI manages volume and consistency. Human experts handle strategy, nuance, and the high-touch moments that close offers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <FileText className="w-4 h-4" />, t: 'Expert Resume Rewrite', d: 'US-based writers restructure your career story for maximum recruiter and ATS impact.' },
                  { icon: <Linkedin className="w-4 h-4" />, t: 'LinkedIn Brand Audit', d: 'Positioning coaches rewrite your profile to surface in recruiter searches at target seniority.' },
                  { icon: <Users className="w-4 h-4" />, t: 'Dedicated Career Coach', d: '1-on-1 strategy sessions: target role mapping, mock interviews, and salary benchmarking.' },
                  { icon: <BadgeCheck className="w-4 h-4" />, t: 'Offer & Negotiation', d: 'Your coach builds counter-proposals and negotiation scripts when final offers arrive.' },
                ].map((c, i) => (
                  <div key={i} className="js-human-card">
                    <TiltCard>
                      <div className="glass-ultra rounded-xl p-5 border border-white/[0.06] hover:border-[#10b981]/15 transition-colors h-full">
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <span className="text-[#10b981]">{c.icon}</span>
                          <h4 className="font-['Barlow_Semi_Condensed'] font-bold text-[11px] text-white uppercase tracking-wide">{c.t}</h4>
                        </div>
                        <p className="text-[11px] text-white/38 leading-relaxed">{c.d}</p>
                      </div>
                    </TiltCard>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="glass-ultra rounded-2xl p-10 border border-white/[0.06] space-y-8">
                {[
                  { icon: <Zap className="w-5 h-5 text-[#10b981]" />, val: 'Up to 100', label: 'AI applications per day', sub: 'Precision-targeted. 85%+ match threshold enforced.' },
                  { icon: <Users className="w-5 h-5 text-blue-400" />, val: 'Dedicated', label: 'US-based consultant', sub: 'Direct access — not a shared support queue.' },
                  { icon: <Calendar className="w-5 h-5 text-[#10b981]" />, val: 'Weekly', label: 'Interview review sessions', sub: 'Live coaching calibrated to your recruiter feedback.' },
                ].map((s, i) => (
                  <div key={i} className={`flex gap-5 items-start ${i > 0 ? 'border-t border-white/[0.05] pt-8' : ''}`}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.04)' }}>
                      {s.icon}
                    </div>
                    <div>
                      <div className="font-['Barlow_Semi_Condensed'] font-extrabold text-2xl text-white">
                        {s.val} <span className="text-[13px] font-bold text-white/50">{s.label}</span>
                      </div>
                      <p className="text-[11px] text-white/32 mt-1">{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ══ SECTION 8 · COMPARISON TABLE ════════════════════════════════════ */}
        <section id="comparison" className="relative py-28 px-6 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel text="Why Different" />
              <div className="overflow-hidden">
                <SectionH2>
                  <span className="js-reveal-title block">Why Career GPS™ is different</span>
                </SectionH2>
              </div>
              <p className="mt-5 text-white/38 text-[13px] font-sans">More than a course. More than a consultancy. More than just AI.</p>
            </div>

            <div className="glass-ultra rounded-2xl overflow-hidden border border-white/[0.06]">
              <div className="grid grid-cols-3 gap-4 px-7 py-4 border-b border-white/[0.05] text-[9px] font-['Barlow_Semi_Condensed'] font-bold uppercase tracking-widest text-white/28"
                   style={{ background: 'rgba(255,255,255,0.02)' }}>
                <span>Typical Solution</span>
                <span>The Limitation</span>
                <span className="text-[#10b981]">Career GPS™</span>
              </div>
              {[
                ['Resume Writer', 'Static document, no live tailoring or ATS feedback', 'Complete OS: 24/7 custom ATS drafts per JD'],
                ['Coaching Calls', 'Hourly billing, zero pipeline tracking or automation', 'Continuous support + active campaign management'],
                ['AI Tools (ChatGPT)', 'Generic — hours of daily prompting and copy-pasting', 'Managed AI agents: purpose-built, fully configured'],
                ['Online Courses', 'Theory only — zero execution on your behalf', 'We submit applications and manage outreach for you'],
                ['Staffing Agency', 'Represents the employer, not you', 'We represent you — maximising your compensation'],
                ['DIY SaaS Tools', 'You set up, manage, and maintain everything', 'We build, configure, and operate everything for you'],
                ['One-Time Service', 'Static resume creation or mock setup', 'Continuous improvement based on campaign logs'],
              ].map(([typ, lim, gps], i) => (
                <div key={i} className="js-comp-row grid grid-cols-3 gap-4 px-7 py-4 border-b border-white/[0.04] hover:bg-white/[0.012] transition-colors last:border-0 items-start">
                  <span className="font-['Barlow_Semi_Condensed'] font-bold text-[11px] text-white uppercase tracking-wide">{typ}</span>
                  <span className="text-[11px] text-white/33 leading-relaxed">{lim}</span>
                  <span className="text-[11px] text-[#10b981] font-['Barlow_Semi_Condensed'] font-bold flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />{gps}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ══ SECTION 9 · PRICING ══════════════════════════════════════════════ */}
        <section id="pricing" className="relative py-36 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
              <SectionLabel text="Pricing" />
              <div className="overflow-hidden">
                <SectionH2>
                  <span className="js-reveal-title block">Transparent, outcome-driven pricing.</span>
                </SectionH2>
              </div>
              <p className="mt-5 text-white/42 font-sans text-base">No hidden fees. Month-to-month. Cancel anytime.</p>
            </div>

            {/* Billing toggle */}
            <div className="flex justify-center mb-16">
              <div className="flex items-center gap-2 p-1 rounded-full border border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.025)' }}>
                {[['Monthly', false], ['Annual  Save 20%', true]].map(([label, val]) => (
                  <button key={String(val)} onClick={() => setBillingYearly(!!val)}
                    className={`px-5 py-2 rounded-full text-[11px] font-['Barlow_Semi_Condensed'] font-bold uppercase tracking-wider transition-all ${billingYearly === !!val ? 'bg-[#10b981] text-black shadow-[0_0_16px_rgba(16,185,129,0.4)]' : 'text-white/45'}`}>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto items-stretch" style={{ perspective: '1200px' }}>

              {/* Starter — Free */}
              <div className="js-price-card">
                <TiltCard>
                  <div className="glass-ultra rounded-2xl p-8 flex flex-col justify-between min-h-[530px] border border-white/[0.06] hover:border-white/[0.1] transition-colors h-full">
                    <div>
                      <p className="font-['Barlow_Semi_Condensed'] text-[10px] text-white/32 uppercase tracking-widest mb-3">Starter</p>
                      <div className="flex items-baseline gap-1 mb-4">
                        <span className="font-['Barlow_Semi_Condensed'] font-extrabold text-4xl text-white">Free</span>
                      </div>
                      <p className="text-[11px] text-white/38 leading-relaxed">Run your first Career Health Analysis and audit your current materials — no credit card required.</p>
                      <div className="border-t border-white/[0.05] mt-7 pt-7 space-y-3.5">
                        {['1 Career Health Analysis','ATS Diagnostic Scan','5 AI Resume Optimisations','Baseline Salary Benchmarking','Career Score Dashboard Access'].map(f => (
                          <div key={f} className="flex items-center gap-2.5 text-[11px] text-white/52">
                            <Check className="w-3.5 h-3.5 text-[#10b981] shrink-0" />{f}
                          </div>
                        ))}
                      </div>
                    </div>
                    <a href="#" className="mt-8 w-full block text-center py-3 rounded-full border border-white/[0.1] text-[11px] font-['Barlow_Semi_Condensed'] font-bold uppercase tracking-wider text-white/70 hover:bg-white/[0.05] hover:text-white transition-all">
                      Run Free Scan
                    </a>
                  </div>
                </TiltCard>
              </div>

              {/* AI Plan — Popular */}
              <div className="js-price-card">
                <TiltCard>
                  <div className="gradient-border-card rounded-2xl p-8 flex flex-col justify-between min-h-[580px] relative overflow-hidden h-full"
                       style={{ boxShadow: '0 0 70px rgba(16,185,129,0.15), 0 30px 60px rgba(0,0,0,0.5)' }}>
                    <div className="absolute top-0 right-0 bg-[#10b981] text-black font-['Barlow_Semi_Condensed'] font-extrabold text-[8px] uppercase tracking-widest px-4 py-1.5 rounded-bl-xl z-10">
                      Most Popular
                    </div>
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(16,185,129,0.15)' }} />
                    <div>
                      <p className="font-['Barlow_Semi_Condensed'] text-[10px] text-[#10b981] uppercase tracking-widest mb-3">Career GPS AI</p>
                      <div className="flex items-baseline gap-1 mb-4">
                        <span className="font-['Barlow_Semi_Condensed'] font-extrabold text-5xl text-white">${billingYearly ? '120' : '150'}</span>
                        <span className="text-white/38 text-sm">/month</span>
                      </div>
                      {billingYearly && <p className="text-[10px] text-[#10b981] mb-4 font-['Barlow_Semi_Condensed']">Billed annually — save $360/yr</p>}
                      <p className="text-[11px] text-white/48 leading-relaxed">Full AI automation running 24/7. Our agents handle scanning, tailoring, submitting, and following up while you prepare for interviews.</p>
                      <div className="border-t border-white/[0.07] mt-7 pt-7 space-y-3.5">
                        {['Everything in Starter','Full AI Job Search Team (8 agents)','Up to 50 applications / day','Automated recruiter cold outreach','Campaign dashboard & analytics','Continuous resume & LinkedIn SEO','Automated follow-up sequences','Salary intelligence feed'].map(f => (
                          <div key={f} className="flex items-center gap-2.5 text-[11px] text-white/62">
                            <Check className="w-3.5 h-3.5 text-[#10b981] shrink-0" />{f}
                          </div>
                        ))}
                      </div>
                    </div>
                    <a href="#"
                       className="btn-shimmer mt-8 w-full block text-center py-4 rounded-full bg-[#10b981] text-black font-['Barlow_Semi_Condensed'] font-extrabold text-[11px] uppercase tracking-widest z-10 hover:scale-[1.02] transition-all"
                       style={{ boxShadow: '0 8px 32px rgba(16,185,129,0.4)' }}>
                      Start AI Plan
                    </a>
                  </div>
                </TiltCard>
              </div>

              {/* Elite */}
              <div className="js-price-card">
                <TiltCard>
                  <div className="glass-ultra rounded-2xl p-8 flex flex-col justify-between min-h-[530px] border border-white/[0.06] hover:border-blue-500/20 transition-colors h-full">
                    <div>
                      <p className="font-['Barlow_Semi_Condensed'] text-[10px] text-white/32 uppercase tracking-widest mb-3">Elite · AI + Human</p>
                      <div className="flex items-baseline gap-1 mb-4">
                        <span className="font-['Barlow_Semi_Condensed'] font-extrabold text-4xl text-white">${billingYearly ? '240' : '300'}</span>
                        <span className="text-white/38 text-sm">/month</span>
                      </div>
                      {billingYearly && <p className="text-[10px] text-blue-400 mb-4 font-['Barlow_Semi_Condensed']">Billed annually — save $720/yr</p>}
                      <p className="text-[11px] text-white/38 leading-relaxed">Maximum firepower. Every AI agent plus a dedicated US-based recruitment expert coaching you to the offer.</p>
                      <div className="border-t border-white/[0.05] mt-7 pt-7 space-y-3.5">
                        {['Everything in Career GPS AI','Up to 100 applications / day','Dedicated US Human Consultant','Expert ATS Resume Rewrite','LinkedIn Positioning Audit','Weekly 1-on-1 Interview Coaching','Offer & Salary Negotiation Support','Priority support queue'].map(f => (
                          <div key={f} className="flex items-center gap-2.5 text-[11px] text-white/52">
                            <Check className="w-3.5 h-3.5 text-[#10b981] shrink-0" />{f}
                          </div>
                        ))}
                      </div>
                    </div>
                    <a href="#" className="mt-8 w-full block text-center py-3 rounded-full border border-blue-500/25 text-[11px] font-['Barlow_Semi_Condensed'] font-bold uppercase tracking-wider text-blue-400 hover:bg-blue-500/[0.07] transition-all">
                      Get Human + AI
                    </a>
                  </div>
                </TiltCard>
              </div>
            </div>

            <p className="text-center text-[11px] text-white/22 mt-10 font-sans">
              All plans are month-to-month · No contracts · Cancel from your dashboard at any time
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* ══ SECTION 10 · HOW IT WORKS ════════════════════════════════════════ */}
        <section id="howitworks" className="relative py-36 px-6 overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <div className="mb-18">
              <SectionLabel text="Process" />
              <div className="overflow-hidden">
                <SectionH2>
                  <span className="js-reveal-title block">Five steps.</span>
                  <span className="js-reveal-title block text-[#10b981]">Then we take over.</span>
                </SectionH2>
              </div>
              <p className="mt-6 text-white/42 font-sans text-base leading-[1.7]">You do the setup. We handle execution continuously until you sign an offer.</p>
            </div>

            <div className="relative pl-11 mt-14">
              {/* Timeline bar with active ScrollTrigger drawing line */}
              <div className="absolute left-[3px] top-0 h-full w-[2px] bg-white/[0.04]">
                <div className="js-timeline-fill w-full bg-[#10b981] origin-top h-0 relative" style={{ boxShadow: '0 0 12px rgba(16, 185, 129, 0.65)' }}>
                  <div className="absolute -bottom-2 -left-[5px] w-3.5 h-3.5 rounded-full bg-[#10b981] border-2 border-white/20 animate-pulse" style={{ boxShadow: '0 0 12px rgba(16, 185, 129, 0.9)' }} />
                </div>
              </div>
              {[
                { t: 'Run your free Career Analysis', d: 'Upload your profile. We generate a full diagnostic: ATS score, keyword gaps, salary benchmarks, and market positioning.' },
                { t: 'Review your personalised report', d: 'Get a structured breakdown of exactly what to fix, in priority order, with market comparison data for context.' },
                { t: 'Choose your plan', d: 'Activate AI agents only, or add a dedicated human consultant for senior roles and high-stakes negotiations.' },
                { t: 'We build and launch everything', d: 'We configure every agent, write your templates, tune your LinkedIn, and launch outbound campaigns. You approve the targeting.' },
                { t: 'We run until you get hired', d: "AI maintains daily volume. Human coaches tune strategy weekly. The system doesn't stop until you sign." },
              ].map((s, i) => (
                <div key={i} className="relative mb-12 last:mb-0">
                  <div className="absolute -left-[38px] top-2 w-[22px] h-[22px] rounded-full border border-white/12 flex items-center justify-center z-10 text-[9px] font-['Barlow_Semi_Condensed'] font-bold text-white/30 hover:border-[#10b981] transition-colors"
                       style={{ background: '#050505' }}>
                    {i + 1}
                  </div>
                  <TiltCard maxTilt={4}>
                    <div className="glass-ultra rounded-xl p-6 border border-white/[0.05] hover:border-[#10b981]/14 transition-colors">
                      <h3 className="font-['Barlow_Semi_Condensed'] font-bold text-[13px] text-white uppercase tracking-wide">{s.t}</h3>
                      <p className="text-[11px] text-white/42 mt-2.5 leading-relaxed">{s.d}</p>
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ══ SECTION 11 · FAQ ═════════════════════════════════════════════════ */}
        <section id="faq" className="relative py-36 px-6 overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <SectionLabel text="FAQ" />
              <div className="overflow-hidden">
                <SectionH2>
                  <span className="js-reveal-title block">Common questions,</span>
                  <span className="js-reveal-title block text-white/55">answered directly.</span>
                </SectionH2>
              </div>
            </div>
            <div className="space-y-2.5">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={i} className="glass-ultra rounded-xl border border-white/[0.05] overflow-hidden transition-all hover:border-white/[0.08]">
                    <button onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full px-7 py-5 flex items-center justify-between text-left focus-visible:outline-none group">
                      <span className="font-['Barlow_Semi_Condensed'] font-bold text-[13px] md:text-[14px] text-white/80 group-hover:text-white transition-colors pr-5">{f.q}</span>
                      <ChevronDown className={`w-4 h-4 text-white/28 shrink-0 transition-all duration-300 ${open ? 'rotate-180 text-[#10b981]' : ''}`} />
                    </button>
                    <div className={`transition-all duration-350 ease-in-out overflow-hidden ${open ? 'max-h-[300px]' : 'max-h-0'}`}>
                      <p className="px-7 pb-6 text-[12px] md:text-[13px] text-white/42 leading-relaxed font-sans">{f.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ══ SECTION 12 · FINAL CTA ═══════════════════════════════════════════ */}
        <section id="finalcta" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          <div className="js-cta-text max-w-4xl mx-auto relative z-10 space-y-8">
            <SectionLabel text="Get Started" />
            <SectionH2>
              Your next opportunity<br />
              shouldn't have to wait<br />
              <span className="text-[#10b981]">until tomorrow morning.</span>
            </SectionH2>
            <p className="text-white/45 font-sans text-[clamp(1rem,1.8vw,1.15rem)] max-w-xl mx-auto leading-[1.72]">
              Build a job search system that keeps moving — even while you sleep. Start with a free Career Health Analysis today.
            </p>
            <div className="pt-2 flex flex-col items-center gap-4">
              <a href="#pricing"
                 className="btn-shimmer btn-magnetic inline-block bg-[#10b981] text-black font-['Barlow_Semi_Condensed'] font-extrabold text-[12px] uppercase tracking-[0.16em] px-12 py-5 rounded-full hover:scale-[1.03] transition-all"
                 style={{ boxShadow: '0 8px 50px rgba(16,185,129,0.4), 0 0 0 1px rgba(16,185,129,0.2)' }}>
                Start Free Career GPS Analysis →
              </a>
              <p className="text-[10px] text-white/20 font-['Barlow_Semi_Condensed'] tracking-widest uppercase">Free · No credit card · Takes 3 minutes</p>
            </div>
          </div>

          <div className="js-cta-orb absolute w-[420px] h-[420px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        </section>

        {/* ── Footer ────────────────────────────────────────────────────────────── */}
        <footer className="border-t border-white/[0.04] py-14 px-6 relative z-10" style={{ background: 'rgba(2,3,2,0.92)' }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-['Barlow_Semi_Condensed'] text-white/28">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-[#10b981] flex items-center justify-center" style={{ boxShadow: '0 0 12px rgba(16,185,129,0.28)' }}>
                <Compass className="w-3.5 h-3.5 text-black" />
              </div>
              <span className="font-extrabold text-white/55 tracking-[-0.01em] text-[13px]">CAREER GPS™</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-white/32 uppercase tracking-[0.1em]">
              {[['#problem','Problem'],['#features','System'],['#ai-team','AI Team'],['#human','Human+AI'],['#pricing','Pricing'],['#faq','FAQ']].map(([h,l]) => (
                <a key={h} href={h} className="hover:text-white transition-colors">{l}</a>
              ))}
            </nav>
            <span className="text-white/20">© 2026 Career GPS Inc.</span>
          </div>
        </footer>

      </div>
    </>
  );
}
