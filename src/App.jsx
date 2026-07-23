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
  { q: "Why not just use ChatGPT?", a: "ChatGPT is a general LLM that requires hours of manual copy-pasting, custom prompting, and checking for hallucinations. Career GPS™ is a purpose-built Career OS featuring 8 specialized agents working concurrently—analyzing ATS, optimizing LinkedIn searchability, submitting matching roles, and automating outreach automatically." },
  { q: "How is this different from consultancies?", a: "Traditional consultancies charge heavy upfront fees (often thousands of dollars) or take a large percentage of your final salary. Career GPS™ is an outcome-driven monthly platform with zero salary-share and no heavy initial consulting costs, putting control and savings back in your hands." },
  { q: "Why not buy separate AI tools?", a: "Paying for separate ATS scanners, resume tailors, outreach message templates, LinkedIn indexers, and application trackers quickly adds up to hundreds of dollars a month in disconnected tools. Career GPS™ unites everything into a single, cohesive operating system where every piece shares data to optimize your target pipeline." },
  { q: "Is Career GPS free?", a: "Yes! Our Starter tier is completely free. It includes one full Career Health Analysis, an ATS diagnostic scan, 5 AI resume optimizations, and baseline salary benchmarking. It requires no credit card to start." },
  { q: "Can I upgrade later?", a: "Absolutely. You can start with our free assessment, get your report, and upgrade to the AI Plan or the Elite (AI + Human) plan whenever you are ready to launch your background job search campaigns. Cancel or downgrade anytime." },
];



const painPoints = [
  { n: "8", label: "Disconnected Tools", detail: "Using 10+ different single-purpose AI sites, tracking sheets, and tools that do not communicate.", color: "border-red-500/25 bg-red-500/5" },
  { n: "7", label: "No Follow-Up System", detail: "Outbound threads go cold. Recruiters ghost because you lack automated check-in systems.", color: "border-red-500/20 bg-red-500/3" },
  { n: "6", label: "Weak Interview Prep", detail: "behavioral and technical prep is generic, not calibrated to the company's active JDs.", color: "border-white/10 bg-white/[0.03]" },
  { n: "5", label: "Poor Networking", detail: "Relying purely on forms. No warm referral mapping or manager matching to bypass filters.", color: "border-white/10 bg-white/[0.03]" },
  { n: "4", label: "No Recruiter Outreach", detail: "Hiring managers never see your credentials because your application sits flat in the ATS database.", color: "border-white/[0.08] bg-white/[0.02]" },
  { n: "3", label: "Wrong Job Targets", detail: "Scrolling boards manually, applying to expired listings or roles filled internally.", color: "border-white/[0.08] bg-white/[0.02]" },
  { n: "2", label: "Weak LinkedIn SEO", detail: "recruiter queries filter you out because your profile lacks search optimized keyword clusters.", color: "border-white/5 bg-white/[0.01]" },
  { n: "1", label: "ATS Hostile Resume", detail: "Parsing errors block you. Formatting issues prevent automated screening algorithms from matching.", color: "border-white/5 bg-white/[0.01]" },
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
    const sections = ['hero', 'problem', 'careergps', 'features', 'human', 'pricing', 'community', 'faq'];
    sections.forEach(s => {
      ScrollTrigger.create({
        trigger: `#${s}`,
        start: 'top 35%',
        end: 'bottom 35%',
        onEnter: () => setActiveSection(s),
        onEnterBack: () => setActiveSection(s),
      });
    });

    // ── Navbar entrance on load ─────────────────────────────────────────────
    gsap.fromTo('header',
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.2 }
    );

    // ── Aurora parallax background ──────────────────────────────────────────
    gsap.to('.js-aurora-bg', {
      yPercent: 12, ease: 'none',
      scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: true },
    });

    // ── Staggered title reveals (global) ────────────────────────────────────
    gsap.utils.toArray('.js-reveal-title').forEach(el => {
      gsap.from(el, {
        yPercent: 110, opacity: 0, duration: 0.9, ease: 'power4.out',
        scrollTrigger: { trigger: el, start: 'top 94%', toggleActions: 'play none none none' },
      });
    });

    // ══ SECTION 2 · PROBLEM ═══════════════════════════════════════════════

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      painPoints.forEach((s, i) => {
        const el = problemCardsRef.current[i];
        if (!el) return;
        gsap.set(el, {
          transformStyle: 'preserve-3d',
          transform: `translateZ(${i * -30}px) translateY(${i * 24}px) rotateX(-4deg)`
        });
        el.addEventListener('mouseenter', () => {
          gsap.to(el, { transform: `translateZ(45px) translateY(${i * 24 - 18}px) rotateX(0deg)`, duration: 0.3, ease: 'power2.out' });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(el, { transform: `translateZ(${i * -30}px) translateY(${i * 24}px) rotateX(-4deg)`, duration: 0.4, ease: 'power2.out' });
        });
      });

      gsap.from('.js-prob-card', {
        x: 200, rotateY: 50, opacity: 0, stagger: 0.06,
        scrollTrigger: { trigger: '#problem', start: 'top 78%', end: 'top 28%', scrub: 1.2 },
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.from('.js-prob-card', {
        x: 120, rotateY: 20, opacity: 0, stagger: 0.06,
        scrollTrigger: { trigger: '#problem', start: 'top 85%', end: 'top 40%', scrub: 1 }
      });
    });

    // Cost cards — batch reveal with stagger
    ScrollTrigger.batch('.js-cost-card', {
      start: 'top 92%',
      once: true,
      onEnter: (batch) => gsap.fromTo(batch,
        { scale: 0.85, opacity: 0, y: 25 },
        { scale: 1, opacity: 1, y: 0, duration: 0.55, ease: 'back.out(1.5)', stagger: 0.07, overwrite: true }
      ),
    });

    // ══ SECTION 3 · CAREER GPS ════════════════════════════════════════════

    // Diagnostic rings scroll-linked rotation
    gsap.fromTo('.js-diagnostic-ring-1', { rotate: 0 }, {
      rotate: 360, ease: 'none',
      scrollTrigger: { trigger: '#careergps', start: 'top bottom', end: 'bottom top', scrub: 1 }
    });
    gsap.fromTo('.js-diagnostic-ring-2', { rotate: 0 }, {
      rotate: -360, ease: 'none',
      scrollTrigger: { trigger: '#careergps', start: 'top bottom', end: 'bottom top', scrub: 1 }
    });
    gsap.fromTo('.js-diagnostic-ring-3', { rotate: 0 }, {
      rotate: 180, ease: 'none',
      scrollTrigger: { trigger: '#careergps', start: 'top bottom', end: 'bottom top', scrub: 1 }
    });

    // Diagnostic score countup 0 → 88%
    const scoreVal = { val: 0 };
    gsap.to(scoreVal, {
      val: 88, duration: 1.8, ease: 'power2.out',
      scrollTrigger: { trigger: '#careergps', start: 'top 72%', once: true },
      onUpdate: () => {
        const el = document.getElementById('diagnostic-score-num');
        if (el) el.textContent = Math.round(scoreVal.val) + '%';
      }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isLoaded]);

  // ── Helper to position active indicator dot ───────────────────────────────
  const getNavOffset = (sec) => {
    const list = ['hero', 'problem', 'careergps', 'features', 'human', 'pricing', 'community', 'faq'];
    const idx = list.indexOf(sec);
    return idx >= 0 ? idx * 56 : 0;
  };

  return (
    <>


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
                {[['#hero','Home','hero'],['#problem','Problem','problem'],['#careergps','Career GPS','careergps'],['#features','System','features'],['#human','Human+AI','human'],['#pricing','Pricing','pricing'],['#community','Community','community'],['#faq','FAQ','faq']].map(([h,l,id]) => (
                  <a key={h} href={h} className={`nav-link hover:text-white transition-colors py-1 ${activeSection === id ? 'active text-[#10b981]' : ''}`}>{l}</a>
                ))}
              </nav>
            </div>

            <a href="https://carrer-gps-asess.onrender.com/"
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
              <SectionLabel text="Why Candidates Fail" color="red" />
              <div className="overflow-hidden">
                <SectionH2>
                  <span className="js-reveal-title block">Why most job seekers</span>
                  <span className="js-reveal-title block text-red-400 mt-1">never get enough interviews.</span>
                </SectionH2>
              </div>
              <p className="text-white/50 font-sans text-[1.02rem] leading-[1.72] max-w-md">
                Most candidates don't fail because they lack skills. They fail because their job search system is broken. Career GPS™ automates the pipeline so you never reset.
              </p>
              <div className="p-5 rounded-xl border border-red-500/12 flex gap-4" style={{ background: 'rgba(239,68,68,0.03)' }}>
                <CircleX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-['Barlow_Semi_Condensed'] font-bold text-[12px] text-white uppercase tracking-wide mb-1">Find what's holding you back</p>
                  <p className="text-[11px] text-white/40 leading-relaxed">Our diagnostic assessment scans 8 primary pipeline dimensions, indexing ATS parsing faults, LinkedIn SEO rankings, and application rates.</p>
                </div>
              </div>
            </div>

            {/* Right — 3D stacked cards / Carousel */}
            <div className="relative w-full max-w-lg mx-auto md:max-w-none" style={{ perspective: '1200px' }}>
              {/* Desktop Stacked look, Mobile horizontally scrolling 3D track */}
              <div className="flex overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 gap-5 md:gap-0 snap-x snap-mandatory md:relative md:block md:w-[390px] md:h-[450px] mx-auto" style={{ transformStyle: 'preserve-3d' }}>
                {painPoints.map((s, i) => (
                  <div key={i}
                       ref={el => (problemCardsRef.current[i] = el)}
                       className="js-prob-card shrink-0 w-[280px] md:w-full snap-center snap-always md:absolute cursor-pointer transition-all duration-300"
                       style={{ 
                         transformStyle: 'preserve-3d',
                         zIndex: 10 - i
                       }}>
                    <TiltCard maxTilt={6}>
                      <div className={`glass-ultra rounded-2xl p-5 border ${s.color} h-full w-full shadow-lg`}>
                        <div className="flex justify-between items-center">
                          <span className="font-['Barlow_Semi_Condensed'] font-bold text-[13px] text-white tracking-wide uppercase">{s.label}</span>
                          <span className="text-[9px] font-mono text-red-400">PAIN {s.n}</span>
                        </div>
                        <p className="text-[11px] text-white/40 mt-2 leading-relaxed font-sans">{s.detail}</p>
                      </div>
                    </TiltCard>
                  </div>
                ))}
              </div>
            </div>

            {/* The cost of inaction sub-grid */}
            <div className="lg:col-span-2 border-t border-white/[0.04] pt-16 mt-16">
              <div className="mb-8">
                <SectionLabel text="The Cost of Inaction" color="red" />
                <h3 className="font-['Barlow_Semi_Condensed'] font-bold text-xl text-white uppercase mt-2">Every day you delay costs you opportunities</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { icon: <Clock className="w-4 h-4" />, t: 'Recruiters Move On', d: 'Top recruiters finalise shortlists within 72 hours of posting.' },
                  { icon: <Briefcase className="w-4 h-4" />, t: 'Listings Expire', d: 'High-traffic corporate roles close when application counts exceed 200.' },
                  { icon: <Globe className="w-4 h-4" />, t: 'Networks Go Cold', d: 'Referral leads expire when internal teams fill roles or headcount freezes.' },
                  { icon: <BarChart3 className="w-4 h-4" />, t: 'Pipelines Empty', d: 'Pausing applications during active loops leaves zero backups.' },
                  { icon: <TrendingUp className="w-4 h-4" />, t: 'Confidence Drops', d: 'Repeated rejection cycles damage performance in active interviews.' },
                ].map((c, i) => (
                  <div key={i} className="js-cost-card glass-ultra rounded-xl p-4 border border-white/[0.04] hover:border-red-500/15 transition-colors">
                    <div className="text-red-400 mb-2">{c.icon}</div>
                    <h4 className="font-['Barlow_Semi_Condensed'] font-bold text-[10px] text-white uppercase tracking-wider mb-1.5">{c.t}</h4>
                    <p className="text-[10px] text-white/35 leading-relaxed font-sans">{c.d}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <div className="section-divider" />

        {/* ══ SECTION 3 · MEET CAREER GPS ════════════════════════════════════ */}
        <section id="careergps" className="relative py-36 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-8">
              <SectionLabel text="System Diagnostic" color="green" />
              <div className="overflow-hidden">
                <SectionH2>
                  <span className="js-reveal-title block">Meet Crafture</span>
                  <span className="js-reveal-title block text-[#10b981] mt-1">Career GPS™.</span>
                </SectionH2>
              </div>
              <p className="text-white/50 font-sans text-[1.02rem] leading-[1.72] max-w-md">
                Career GPS™ is your automated diagnostic engine. It continuously runs scans across your entire candidate profile, identifying the silent blockers keeping you from interviews.
              </p>
              
              {/* Dimensions list */}
              <div className="space-y-4">
                {[
                  { t: 'Career Health Score', d: 'An index of your active pipeline strength and market value.' },
                  { t: 'Candidate Strengths', d: 'Identifies high-value skills and matching vectors where you excel.' },
                  { t: 'Blockers & Weaknesses', d: 'Flags resume format faults, keyword gaps, and bad search SEO.' },
                  { t: 'Missing Opportunities', d: 'Exposes hidden job markets and direct manager connections.' },
                  { t: 'Personalized Roadmap', d: 'A step-by-step checklist customized to your target job search.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] font-mono text-[9px] font-bold mt-1">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-['Barlow_Semi_Condensed'] font-bold text-[12px] text-white uppercase tracking-wide">{item.t}</h4>
                      <p className="text-[11px] text-white/40 leading-relaxed font-sans">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a href="https://carrer-gps-asess.onrender.com/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="btn-shimmer btn-magnetic inline-block bg-[#10b981] text-black font-['Barlow_Semi_Condensed'] font-extrabold text-[11px] uppercase tracking-[0.14em] px-8 py-4 rounded-full"
                   style={{ boxShadow: '0 8px 30px rgba(16,185,129,0.2)' }}>
                  Start Free Assessment
                </a>
              </div>
            </div>

            {/* Right: 3D Dials Diagnostic visualization */}
            <div className="relative flex justify-center" style={{ perspective: '1200px' }}>
              <TiltCard maxTilt={5}>
                <div className="relative w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] rounded-full border border-white/[0.04] bg-white/[0.01] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transform-style-3d">
                  
                  {/* Central glowing health score */}
                  <div className="relative z-10 w-36 h-36 rounded-full bg-black/60 border border-white/10 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.15)]">
                    <span className="text-[9px] font-mono text-[#10b981]/50 tracking-wider">HEALTH SCORE</span>
                    <span id="diagnostic-score-num" className="text-4xl font-['Barlow_Semi_Condensed'] font-extrabold text-white mt-1">0%</span>
                    <span className="text-[8px] font-mono text-white/20 mt-1">CALIBRATED</span>
                  </div>

                  {/* Concentric Rotating Ring 1 */}
                  <div className="js-diagnostic-ring-1 absolute inset-4 rounded-full border-2 border-dashed border-[#10b981]/15 pointer-events-none" />
                  
                  {/* Concentric Rotating Ring 2 */}
                  <div className="js-diagnostic-ring-2 absolute inset-10 rounded-full border border-dashed border-blue-500/12 pointer-events-none" />
                  
                  {/* Concentric Rotating Ring 3 */}
                  <div className="js-diagnostic-ring-3 absolute inset-16 rounded-full border-2 border-dotted border-white/5 pointer-events-none" />

                  {/* Floating Metric tag 1 */}
                  <div className="js-metric-tag absolute top-10 right-4 p-3 rounded-lg border border-[#10b981]/15 bg-black/50 text-[10px] font-mono text-left space-y-1" style={{ transform: 'translateZ(30px)', opacity: 0 }}>
                    <div className="text-white/25">ATS STATUS</div>
                    <div className="text-[#10b981] font-bold">88% MATCH OPTIMAL</div>
                  </div>

                  {/* Floating Metric tag 2 */}
                  <div className="js-metric-tag absolute bottom-12 left-2 p-3 rounded-lg border border-blue-500/15 bg-black/50 text-[10px] font-mono text-left space-y-1" style={{ transform: 'translateZ(40px)', opacity: 0 }}>
                    <div className="text-white/25">LINKEDIN SEO</div>
                    <div className="text-blue-400 font-bold">TOP 5% INQUIRIES</div>
                  </div>

                  {/* Floating Metric tag 3 */}
                  <div className="js-metric-tag absolute bottom-8 right-6 p-2 rounded-lg border border-white/10 bg-black/50 text-[9px] font-mono text-left" style={{ transform: 'translateZ(25px)', opacity: 0 }}>
                    <div className="text-white/35">Roadmap: Calibrated</div>
                  </div>

                </div>
              </TiltCard>
            </div>

          </div>
        </section>



        {/* ══ SECTION 4 · BENTO GRID FEATURES ═════════════════════════════════ */}
        <section id="features" className="relative py-36 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            
            <div className="max-w-3xl mb-20">
              <SectionLabel text="All-In-One Platform" />
              <div className="overflow-hidden">
                <SectionH2>
                  <span className="js-reveal-title block">One cohesive system</span>
                  <span className="js-reveal-title block text-[#10b981] mt-1">instead of 10 disconnected tools.</span>
                </SectionH2>
              </div>
              <p className="mt-5 text-white/45 font-sans text-base leading-[1.7] max-w-xl">
                Stop paying for separate resume builders, ATS scanners, tracking sheets, and outreach bots. Career GPS™ unites every single component into one unified operating system.
              </p>
            </div>

            {/* Bento Grid Panel */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5" style={{ perspective: '1200px' }}>
              
              {/* Cell 1: Double Width (ATS Analyzer & Resume Optimization) */}
              <div className="js-feat-card md:col-span-8">
                <TiltCard maxTilt={3}>
                  <div className="glass-ultra rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start gap-8 min-h-[300px] border border-white/[0.05] hover:border-[#10b981]/15 transition-all">
                    <div className="max-w-xs space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#10b981]"><FileSearch className="w-5.5 h-5.5" /></div>
                      <h3 className="font-['Barlow_Semi_Condensed'] font-bold text-[15px] text-white uppercase tracking-wide">ATS Analyzer & Resume Optimization</h3>
                      <p className="text-[11px] text-white/40 leading-relaxed">Instant parsing simulator identifies format faults, keyword gaps, and semantic alignment against USA target jobs. Keeps your resume tailored continuously.</p>
                    </div>
                    {/* Live preview visual inside bento */}
                    <div className="w-full md:w-[280px] p-4 rounded-xl border border-white/5 bg-black/40 text-left font-mono text-[9px] text-white/40 space-y-2">
                      <div className="flex justify-between text-white/20 pb-1.5 border-b border-white/5 mb-1">
                        <span>analyzing_resume.docx</span>
                        <span className="text-[#10b981] font-bold">92% MATCH</span>
                      </div>
                      <div className="flex justify-between items-center text-white/70">
                        <span>[x] Injected: "Micro-frontends"</span>
                        <Check className="w-3 h-3 text-[#10b981]" />
                      </div>
                      <div className="flex justify-between items-center text-white/70">
                        <span>[x] Formatted: ATS-Friendly Header</span>
                        <Check className="w-3 h-3 text-[#10b981]" />
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-[#10b981] w-[92%]" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Cell 2: Single Width (LinkedIn SEO) */}
              <div className="js-feat-card md:col-span-4">
                <TiltCard maxTilt={4}>
                  <div className="glass-ultra rounded-2xl p-8 flex flex-col justify-between min-h-[300px] border border-white/[0.05] hover:border-[#10b981]/15 transition-all">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400"><Linkedin className="w-5.5 h-5.5" /></div>
                      <h3 className="font-['Barlow_Semi_Condensed'] font-bold text-[15px] text-white uppercase tracking-wide">LinkedIn SEO & Networking</h3>
                      <p className="text-[11px] text-white/40 leading-relaxed">Syncs search optimization clusters to target active recruiter queries automatically, doubling search impressions.</p>
                    </div>
                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg flex items-center justify-between text-[11px]">
                      <span className="text-white/60">Recruiter Impressions</span>
                      <span className="text-[#10b981] font-bold font-mono">+248%</span>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Cell 3: Single Width (AI Job Search Automation) */}
              <div className="js-feat-card md:col-span-4">
                <TiltCard maxTilt={4}>
                  <div className="glass-ultra rounded-2xl p-8 flex flex-col justify-between min-h-[300px] border border-white/[0.05] hover:border-[#10b981]/15 transition-all">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#10b981]"><Send className="w-5.5 h-5.5" /></div>
                      <h3 className="font-['Barlow_Semi_Condensed'] font-bold text-[15px] text-white uppercase tracking-wide">Job Search & Outreach</h3>
                      <p className="text-[11px] text-white/40 leading-relaxed">Background scraper scans corporate portals, maps hiring managers, and sends outbound templates 24/7.</p>
                    </div>
                    <div className="p-2.5 bg-black/40 border border-white/5 rounded-lg text-[9px] font-mono space-y-1">
                      <div className="text-white/30">OUTBOUND STATUS:</div>
                      <div className="text-white/70">Sent email to Netflix Principal Dev...</div>
                      <div className="text-[#10b981] font-bold">Response: Booking Call</div>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Cell 4: Double Width (Interview Preparation & Mock Lab) */}
              <div className="js-feat-card md:col-span-8">
                <TiltCard maxTilt={3}>
                  <div className="glass-ultra rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start gap-8 min-h-[300px] border border-white/[0.05] hover:border-[#10b981]/15 transition-all">
                    <div className="max-w-xs space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400"><Compass className="w-5.5 h-5.5" /></div>
                      <h3 className="font-['Barlow_Semi_Condensed'] font-bold text-[15px] text-white uppercase tracking-wide">Interview Prep & Mock Lab</h3>
                      <p className="text-[11px] text-white/40 leading-relaxed">Generates real interactive mock interview scenarios built from target JD descriptions. Analyzes STAR structure and response velocity.</p>
                    </div>
                    <div className="w-full md:w-[260px] p-3 rounded-lg border border-white/5 bg-black/40 text-left font-mono text-[9px] text-[#10b981] space-y-1.5">
                      <span className="text-white/25">[MOCK INTERVIEW ANALYSIS]</span>
                      <p className="text-white/60">"Describe how you handle state sync across multiple tabs..."</p>
                      <div className="bg-white/3 border border-white/5 rounded p-2 text-white/40">
                        STAR Structure: Valid (94%) · Velocity: Normal
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



        {/* ══ SECTION 7 · HUMAN SUPPORT (glassmorphic grid update) ══════════════ */}
        <section id="human" className="relative py-36 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <SectionLabel text="Human + AI" />
              <div className="overflow-hidden">
                <SectionH2>
                  <span className="js-reveal-title block">When AI</span>
                  <span className="js-reveal-title block text-[#10b981] mt-1">Isn't Enough.</span>
                </SectionH2>
              </div>
              <p className="text-white/48 font-sans text-base leading-[1.72]">
                AI automates repetitive work. Human experts provide strategy, accountability, and interview coaching. Together they deliver better results.
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
              <TiltCard maxTilt={3}>
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
              </TiltCard>
            </div>
          </div>

          {/* Unified Comparison Block */}
          <div className="lg:col-span-2 border-t border-white/[0.04] pt-20 mt-20">
            <div className="text-center mb-12">
              <SectionLabel text="Why Different" />
              <h3 className="font-['Barlow_Semi_Condensed'] font-bold text-2xl text-white uppercase mt-2">Why Career GPS™ is different</h3>
              <p className="mt-3 text-white/35 text-[11px] font-sans">More than a course. More than a consultancy. More than just AI.</p>
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
                    <a href="https://carrer-gps-asess.onrender.com/"
                       target="_blank"
                       rel="noopener noreferrer" 
                       className="mt-8 w-full block text-center py-3 rounded-full border border-[#10b981]/25 text-[11px] font-['Barlow_Semi_Condensed'] font-bold uppercase tracking-wider text-[#10b981] hover:bg-[#10b981]/10 transition-all">
                      Run Free Scan
                    </a>
                  </div>
                </TiltCard>
              </div>

              {/* AI Plan — Popular */}
              <div className="js-price-card">
                <TiltCard>
                  <div className="glass-ultra rounded-2xl p-8 flex flex-col justify-between min-h-[580px] relative overflow-hidden h-full border border-[#10b981]/30 hover:border-[#10b981]/60 transition-colors"
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
                    <a href="https://superprofile.bio/vp/6a46b68049a6e500138a886a"
                       target="_blank"
                       rel="noopener noreferrer"
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
                    <a href="https://superprofile.bio/vp/6a46baf515e3cc0013660b1e"
                       target="_blank"
                       rel="noopener noreferrer" 
                       className="mt-8 w-full block text-center py-3 rounded-full border border-blue-500/25 text-[11px] font-['Barlow_Semi_Condensed'] font-bold uppercase tracking-wider text-blue-400 hover:bg-blue-500/[0.07] transition-all">
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
                  <span className="js-reveal-title block">Four steps.</span>
                  <span className="js-reveal-title block text-[#10b981]">Then we take over.</span>
                </SectionH2>
              </div>
              <p className="mt-6 text-white/42 font-sans text-base leading-[1.7]">Start with a free assessment, select your strategy, and launch your automated candidate pipeline.</p>
            </div>

            <div className="relative pl-11 mt-14">
              {/* Timeline bar with active ScrollTrigger drawing line */}
              <div className="absolute left-[3px] top-0 h-full w-[2px] bg-white/[0.04]">
                <div className="js-timeline-fill w-full bg-[#10b981] origin-top h-0 relative" style={{ boxShadow: '0 0 12px rgba(16, 185, 129, 0.65)' }}>
                  <div className="absolute -bottom-2 -left-[5px] w-3.5 h-3.5 rounded-full bg-[#10b981] border-2 border-white/20 animate-pulse" style={{ boxShadow: '0 0 12px rgba(16, 185, 129, 0.9)' }} />
                </div>
              </div>
              {[
                { t: 'Take FREE Career GPS Assessment', d: 'Upload your profile. We scan your resume formatting, ATS parsing indicators, and LinkedIn search searchability in 3 minutes.' },
                { t: 'Receive Personalized Career Report', d: 'Get a structured breakdown detailing your Career Health Score, strengths, parsing errors, keyword gaps, and targeted market openings.' },
                { t: 'Choose Your Plan', d: 'Select our configured AI agents or add a dedicated US-based recruiter for interview prep, custom negotiation, and strategic outreach.' },
                { t: 'Start Landing More Interviews', d: 'We configure every background pipeline. Our AI engines run continuously, and human coaches sync weekly to close offers. We do not stop until you get hired.' },
              ].map((s, i) => (
                <div key={i} className="js-timeline-step relative mb-12 last:mb-0" style={{ perspective: '1000px' }}>
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

        {/* ══ SECTION 9 · COMMUNITY ════════════════════════════════════════════ */}
        <section id="community" className="relative py-36 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <SectionLabel text="Community" color="green" />
              <div className="overflow-hidden">
                <SectionH2>
                  <span className="js-reveal-title block">Join the Crafture</span>
                  <span className="js-reveal-title block text-[#10b981] mt-1">community.</span>
                </SectionH2>
              </div>
              <p className="mt-6 text-white/45 font-sans text-base leading-[1.7]">
                Connect with thousands of USA IT and Non-IT professionals and experts. Learn what is working in active job markets right now.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" style={{ perspective: '1000px' }}>
              {[
                { icon: <Users className="w-5 h-5" />, t: 'Weekly Sessions', d: 'Live Q&A sessions with coaches and recruitment specialists discussing current hiring loops.' },
                { icon: <FileText className="w-5 h-5" />, t: 'Resume Reviews', d: 'Get actionable, direct peer feedback and coach diagnostics on your optimized resume files.' },
                { icon: <TrendingUp className="w-5 h-5" />, t: 'Hiring Trends', d: 'Real-time indexes of active US tech headcount freezes, updates, and open hiring windows.' },
                { icon: <Lock className="w-5 h-5" />, t: 'Free Resources', d: 'Instant access to cold message swipe files, negotiation templates, and salary benchmarking datasets.' },
              ].map((c, i) => (
                <div key={i} className="js-community-card">
                  <TiltCard>
                    <div className="glass-ultra rounded-2xl p-6 h-full flex flex-col justify-between border border-white/[0.05] hover:border-[#10b981]/20 transition-colors min-h-[220px]">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#10b981] shrink-0 mb-5"
                           style={{ background: 'rgba(16,185,129,0.06)' }}>
                        {c.icon}
                      </div>
                      <div>
                        <h3 className="font-['Barlow_Semi_Condensed'] font-bold text-[12px] text-white uppercase tracking-wide mb-2">{c.t}</h3>
                        <p className="text-[11px] text-white/40 leading-relaxed font-sans">{c.d}</p>
                      </div>
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
              Ready to<br />
              <span className="text-[#10b981]">Stop Guessing?</span>
            </SectionH2>
            <p className="text-white/45 font-sans text-[clamp(1rem,1.8vw,1.15rem)] max-w-xl mx-auto leading-[1.72]">
              Everything between you and your next U.S. job is finally in one place.
            </p>
            <div className="pt-2 flex flex-col items-center gap-4">
              <a href="https://carrer-gps-asess.onrender.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="btn-shimmer btn-magnetic inline-block bg-[#10b981] text-black font-['Barlow_Semi_Condensed'] font-extrabold text-[12px] uppercase tracking-[0.16em] px-12 py-5 rounded-full hover:scale-[1.03] transition-all"
                 style={{ boxShadow: '0 8px 50px rgba(16,185,129,0.4), 0 0 0 1px rgba(16,185,129,0.2)' }}>
                Start Your FREE Career GPS Assessment →
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
              {[['#problem','Problem'],['#careergps','Career GPS'],['#features','System'],['#human','Human+AI'],['#pricing','Pricing'],['#community','Community'],['#faq','FAQ']].map(([h,l]) => (
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
