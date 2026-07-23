import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, Play, BadgeCheck, Compass, Send, Check, 
  Linkedin, Shield, Sparkles, RefreshCw, MessageSquare, 
  Layers, CheckCircle, TrendingUp, AlertCircle 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─── Custom Typing Terminal Logger ───────────────────────────────────────────
function AgentLogger() {
  const [logs, setLogs] = useState([
    "Initialising Career GPS OS v1.0...",
    "Agent job search pipeline starting..."
  ]);
  const logQueue = [
    "Scanned 14 matches on LinkedIn.",
    "Tailored resume for Stripe (96% ATS Match).",
    "Outbound application sent to Stripe.",
    "Drafted cold outreach sequence to Hiring Manager.",
    "Audited Vercel JD: Match score 92%.",
    "Tailoring resume for Vercel...",
    "Vercel application submitted successfully.",
    "Sarah Chen (Google) message flagged in Inbox.",
    "Generating behavioral mock prep for Google screen...",
    "ATS Profile Score updated: 96% (+4% improvement)."
  ];
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const currentLog = logQueue[index];
      if (currentLog) {
        setLogs(prev => [...prev.slice(-3), `> ${currentLog}`]);
      }
      index = (index + 1) % logQueue.length;
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[9px] text-[#10b981]/80 space-y-1 leading-relaxed overflow-hidden h-[55px]">
      {logs.map((log, i) => (
        <div key={i} className="truncate select-none animate-fade-in">
          {log}
        </div>
      ))}
      <div className="inline-block w-1 h-3 bg-[#10b981] animate-pulse ml-0.5" />
    </div>
  );
}

// ─── SVG Progress Ring ─────────────────────────────────────────────────────────
function ProgressRing({ value, size = 52, stroke = 2.5, color = '#10b981' }) {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const [offset, setOffset] = useState(circ);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(circ - (value / 100) * circ);
    }, 200);
    return () => clearTimeout(timer);
  }, [value, circ]);

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.25, 1, 0.5, 1)' }} />
    </svg>
  );
}

// ─── Interactive Product Hero Component ─────────────────────────────────────────
export function ProductHero() {
  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const dashboardRef = useRef(null);

  // Widget Refs for Mouse/Scroll Parallax
  const wATS = useRef(null);
  const wInbox = useRef(null);
  const wJobs = useRef(null);
  const wProgress = useRef(null);
  const wLinkedIn = useRef(null);
  const wResume = useRef(null);
  const wPipeline = useRef(null);
  const wAgent = useRef(null);

  // Countup State
  const [atsScore, setAtsScore] = useState(0);
  const [jobsMatched, setJobsMatched] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  // Resume Checklist Items
  const [checklist, setChecklist] = useState([
    { text: "Inject keywords from job description", checked: false },
    { text: "Optimise bullet layout for ATS", checked: false },
    { text: "Highlight relevant leadership experience", checked: false }
  ]);

  useEffect(() => {
    // ATS Score countup
    let count = 0;
    const interval = setInterval(() => {
      count += 2;
      if (count >= 96) {
        setAtsScore(96);
        clearInterval(interval);
      } else {
        setAtsScore(count);
      }
    }, 20);

    // Job matches countup
    let jCount = 0;
    const jInterval = setInterval(() => {
      jCount += 3;
      if (jCount >= 128) {
        setJobsMatched(128);
        clearInterval(jInterval);
      } else {
        setJobsMatched(jCount);
      }
    }, 15);

    // Recruiter toast notification delay
    const toastTimer = setTimeout(() => {
      setShowNotification(true);
    }, 2000);

    // Checkbox sequential checking animation
    const checkTimers = checklist.map((item, idx) => {
      return setTimeout(() => {
        setChecklist(prev => prev.map((c, i) => i === idx ? { ...c, checked: true } : c));
      }, 800 + idx * 600);
    });

    return () => {
      clearInterval(interval);
      clearInterval(jInterval);
      clearTimeout(toastTimer);
      checkTimers.forEach(t => clearTimeout(t));
    };
  }, []);

  // ── GSAP Reveals and Parallax ────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split Text character reveal
      const chars = document.querySelectorAll('.hero-char');
      gsap.fromTo(chars, 
        { opacity: 0, y: 25 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: 'power4.out', stagger: 0.015, delay: 0.1 }
      );

      // Fade-in other left column elements
      gsap.fromTo('.hero-fade-left',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1, delay: 0.35 }
      );

      // Dashboard cards entrance animation
      const cards = [
        wAgent.current, wATS.current, wProgress.current, 
        wResume.current, wLinkedIn.current, wJobs.current, 
        wInbox.current, wPipeline.current
      ].filter(Boolean);

      gsap.fromTo(cards,
        { scale: 0.92, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.1)', stagger: 0.06, delay: 0.25 }
      );

      // Setup media queries using gsap.matchMedia
      const mm = gsap.matchMedia();

      // Desktop: Pin layout and scroll-linked 3D depth adjustments
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: `+=${window.innerHeight * 1.5}`,
          pin: true,
          scrub: 1.1,
          onUpdate: (self) => {
            const p = self.progress;
            if (dashboardRef.current) {
              dashboardRef.current.style.transform = `perspective(1000px) rotateX(${10 - p * 8}deg) rotateY(${-8 + p * 8}deg) scale(${1 + p * 0.04})`;
            }
            const factor = p * 25;
            if (wATS.current) wATS.current.style.transform = `translate(${-factor * 0.8}px, ${-factor * 0.6}px) translateZ(${factor * 0.5}px)`;
            if (wInbox.current) wInbox.current.style.transform = `translate(${factor * 0.9}px, ${-factor * 0.7}px) translateZ(${factor * 0.6}px)`;
            if (wJobs.current) wJobs.current.style.transform = `translate(${-factor * 0.7}px, ${factor * 0.8}px) translateZ(${factor * 0.4}px)`;
            if (wLinkedIn.current) wLinkedIn.current.style.transform = `translate(${factor * 0.6}px, ${factor * 0.9}px) translateZ(${factor * 0.3}px)`;
            if (wResume.current) wResume.current.style.transform = `translate(${-factor * 0.5}px, ${-factor * 0.9}px) translateZ(${factor * 0.2}px)`;
            if (wPipeline.current) wPipeline.current.style.transform = `translate(${factor * 0.8}px, ${factor * 0.5}px) translateZ(${factor * 0.7}px)`;
          }
        });

        // Mouse Parallax for Desktop only
        const handleMouseMove = (e) => {
          const halfX = window.innerWidth / 2;
          const halfY = window.innerHeight / 2;
          const mX = (e.clientX - halfX) / halfX;
          const mY = (e.clientY - halfY) / halfY;

          if (dashboardRef.current) {
            dashboardRef.current.style.transform = `perspective(1000px) rotateX(${10 - mY * 4}deg) rotateY(${-8 + mX * 4}deg) scale(1.005)`;
          }

          const widgets = [
            [wAgent, 0.3], [wATS, 0.5], [wProgress, 0.4], 
            [wResume, 0.6], [wLinkedIn, 0.7], [wJobs, 0.8], 
            [wInbox, 0.9], [wPipeline, 0.5]
          ];
          widgets.forEach(([ref, intensity]) => {
            if (ref.current) {
              ref.current.style.transform = `translate(${mX * 10 * intensity}px, ${mY * 10 * intensity}px)`;
            }
          });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
      });

      // Mobile/Tablet: 3D tilting on scroll (No pinning to avoid safari address bar jumping)
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(dashboardRef.current, 
          { rotateX: 18, rotateY: -12, scale: 0.96 },
          { 
            rotateX: -6, rotateY: 8, scale: 1.02,
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top 10%',
              end: 'bottom 20%',
              scrub: 1
            }
          }
        );

        // Mobile widget translations
        const factor = 12;
        if (wATS.current) {
          gsap.to(wATS.current, { y: -factor * 0.5, x: -factor * 0.3, scrollTrigger: { trigger: heroRef.current, start: 'top 10%', end: 'bottom 20%', scrub: 1 } });
        }
        if (wInbox.current) {
          gsap.to(wInbox.current, { y: -factor * 0.6, x: factor * 0.4, scrollTrigger: { trigger: heroRef.current, start: 'top 10%', end: 'bottom 20%', scrub: 1 } });
        }
        if (wJobs.current) {
          gsap.to(wJobs.current, { y: factor * 0.4, x: -factor * 0.4, scrollTrigger: { trigger: heroRef.current, start: 'top 10%', end: 'bottom 20%', scrub: 1 } });
        }
        if (wLinkedIn.current) {
          gsap.to(wLinkedIn.current, { y: factor * 0.5, x: factor * 0.3, scrollTrigger: { trigger: heroRef.current, start: 'top 10%', end: 'bottom 20%', scrub: 1 } });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  // ── Magnetic Button Script ───────────────────────────────────────────────────
  useEffect(() => {
    const magButtons = document.querySelectorAll('.btn-magnetic');
    const cleanups = [];
    magButtons.forEach(btn => {
      const onMove = (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.3, ease: 'power2.out' });
      };
      const onLeave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1.1, 0.5)' });
      };
      btn.addEventListener('mousemove', onMove);
      btn.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        btn.removeEventListener('mousemove', onMove);
        btn.removeEventListener('mouseleave', onLeave);
      });
    });
    return () => cleanups.forEach(c => c());
  }, []);


  // ── Split Text character layout helper ────────────────────────────────────────
  const renderTextSpans = (text) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block whitespace-nowrap mr-[0.22em]">
        {word.split("").map((char, j) => (
          <span key={j} className="hero-char inline-block opacity-0">
            {char}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <section ref={heroRef} id="hero" 
      className="relative w-full min-h-screen lg:h-screen lg:max-h-[850px] flex items-center bg-[#050505] overflow-hidden select-none px-6 md:px-12 lg:px-20 pt-28 md:pt-32 pb-10">
      
      {/* ── Background Lights ──────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#10b981]/4 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-500/3 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
        
        {/* ── Left Content Panel ──────────────────────────────────────────────── */}
        <div ref={leftColRef} className="lg:col-span-5 flex flex-col justify-center text-left">
          
          {/* Badge */}
          <div className="hero-fade-left opacity-0 mb-4.5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#10b981]/20 bg-[#10b981]/5 text-[10px] font-['Barlow_Semi_Condensed'] font-bold text-[#10b981] uppercase tracking-[0.14em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              AI Career Operating System
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-['Barlow_Semi_Condensed'] font-extrabold leading-[0.96] tracking-[-0.04em] text-white mb-4.5"
              style={{ fontSize: 'clamp(2.1rem, 4.8vw, 3.8rem)' }}>
            <div>{renderTextSpans("Everything Between")}</div>
            <div>{renderTextSpans("You and Your")}</div>
            <div>{renderTextSpans("Next U.S. Job—")}</div>
            <div className="text-[#10b981]">{renderTextSpans("In One Place.")}</div>
          </h1>

          {/* Supporting Description */}
          <p className="hero-fade-left opacity-0 text-white/50 text-xs md:text-sm leading-[1.62] mb-6.5 max-w-[485px]">
            Stop paying for multiple AI tools, expensive consultancies, and disconnected courses. Crafture is the AI-powered Career Operating System that identifies what's blocking your job search, automates repetitive work, and gives you expert guidance—so you can focus on getting hired.
          </p>

          {/* CTAs */}
          <div className="hero-fade-left opacity-0 flex flex-wrap items-center gap-3.5 mb-7">
            <a href="https://carrer-gps-asess.onrender.com/" 
               target="_blank"
               rel="noopener noreferrer"
               className="btn-magnetic btn-shimmer inline-flex items-center gap-2 bg-[#10b981] text-black font-['Barlow_Semi_Condensed'] font-extrabold text-[11px] uppercase tracking-[0.15em] px-7 py-3.5 rounded-full transition-transform"
               style={{ boxShadow: '0 8px 30px rgba(16,185,129,0.3)' }}>
              Start Your FREE Career GPS Assessment
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="https://carrer-gps-asess.onrender.com/" target="_blank"
               className="btn-magnetic inline-flex items-center gap-2 text-[11px] font-['Barlow_Semi_Condensed'] font-bold text-white/60 hover:text-white border border-white/10 hover:border-white/25 px-6 py-3.5 rounded-full transition-colors backdrop-blur-md bg-white/2">
              See Pricing
            </a>
          </div>

          {/* Trust Metrics */}
          <div className="hero-fade-left opacity-0 flex flex-wrap gap-4">
            {['No Heavy Upfront Consultancy Fees', 'No Salary Percentage', 'AI + Human Experts', 'Built for U.S. IT & Non-IT Professionals'].map(t => (
              <span key={t} className="flex items-center gap-1.5 text-[9.5px] text-white/28 font-['Barlow_Semi_Condensed'] uppercase tracking-[0.08em]">
                <BadgeCheck className="w-3.5 h-3.5 text-[#10b981]" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right Dashboard Mockup ─────────────────────────────────────────── */}
        <div className="lg:col-span-7 flex justify-center w-full relative z-20">
          
          <div ref={dashboardRef} 
               className="w-full max-w-[590px] rounded-2xl glass-ultra p-3.5 md:p-4 flex flex-col gap-3.5 border border-white/[0.07] overflow-hidden"
               style={{
                 perspective: '1000px',
                 transformStyle: 'preserve-3d',
                 transform: 'rotateX(10deg) rotateY(-8deg)',
                 boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 80px rgba(16,185,129,0.02)',
                 transition: 'transform 0.15s ease-out',
                 willChange: 'transform'
               }}>
            
            {/* Top Chrome Window Bar */}
            <div className="flex justify-between items-center border-b border-white/[0.05] pb-2.5 text-[10px] font-mono text-white/30">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ef4444]/60" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <span className="w-2 h-2 rounded-full bg-[#10b981]/60" />
                <span className="ml-1.5 text-white/40 text-[9px]">career_gps_dashboard.app</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#10b981] font-bold font-['Barlow_Semi_Condensed'] uppercase text-[9px] tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                GPS Agent Active
              </div>
            </div>

            {/* Dashboard Inner Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 text-left">
              
              {/* Left widgets panel */}
              <div className="md:col-span-7 space-y-3.5">
                
                {/* AI Agent Console status */}
                <div ref={wAgent} className="glass-widget rounded-xl p-3.5 border border-white/[0.04] transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[8.5px] text-white/30 font-['Barlow_Semi_Condensed'] uppercase tracking-widest">Active Agent: Job Hunter</span>
                    <RefreshCw className="w-2.5 h-2.5 text-[#10b981] animate-spin" style={{ animationDuration: '3.5s' }} />
                  </div>
                  <AgentLogger />
                </div>

                {/* Sub-grid for ATS & LinkedIn stats */}
                <div className="grid grid-cols-2 gap-3.5">
                  
                  {/* Circular ATS score widget */}
                  <div ref={wATS} className="glass-widget rounded-xl p-3.5 border border-white/[0.04] flex flex-col items-center justify-center text-center transition-all">
                    <span className="text-[8.5px] text-white/35 font-['Barlow_Semi_Condensed'] uppercase tracking-widest mb-2.5">ATS SCORE</span>
                    <div className="relative">
                      <ProgressRing value={atsScore} size={54} stroke={2.5} />
                      <div className="absolute inset-0 flex items-center justify-center text-[12px] font-extrabold text-white">
                        {atsScore}%
                      </div>
                    </div>
                    <span className="text-[8.5px] text-[#10b981] font-bold uppercase tracking-widest mt-1.5">Optimal Fit</span>
                  </div>

                  {/* LinkedIn SEO Strength widget */}
                  <div ref={wLinkedIn} className="glass-widget rounded-xl p-3.5 border border-white/[0.04] flex flex-col justify-between transition-all">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                      <span className="text-[8.5px] text-white/40 uppercase tracking-widest font-['Barlow_Semi_Condensed']">LinkedIn SEO</span>
                    </div>
                    <div className="text-[13px] font-bold text-white font-['Barlow_Semi_Condensed']">94% Strength</div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden my-2">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#10b981] to-[#3b82f6]" style={{ width: '94%' }} />
                    </div>
                    <span className="text-[8px] text-[#10b981] font-bold">+18 views today</span>
                  </div>
                </div>

                {/* Resume checklist */}
                <div ref={wResume} className="glass-widget rounded-xl p-3.5 border border-white/[0.04] block transition-all">
                  <span className="text-[8.5px] text-white/35 font-['Barlow_Semi_Condensed'] uppercase tracking-widest block mb-2.5">Resume ATS Checklist</span>
                  <div className="space-y-2">
                    {checklist.map((item, i) => (
                      <div key={i} className="flex gap-2.5 items-start">
                        <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 transition-colors ${item.checked ? 'bg-[#10b981]/20 border-[#10b981]' : 'border-white/10'}`}>
                          {item.checked && <Check className="w-2.5 h-2.5 text-[#10b981]" />}
                        </div>
                        <span className={`text-[9.5px] leading-tight transition-colors ${item.checked ? 'text-white/80' : 'text-white/35'}`}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right widgets panel */}
              <div className="md:col-span-5 space-y-3.5">
                
                {/* Active matches widget */}
                <div ref={wJobs} className="glass-widget rounded-xl p-3.5 border border-white/[0.04] flex flex-col justify-between transition-all">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-[8.5px] text-white/35 font-['Barlow_Semi_Condensed'] uppercase tracking-widest">Active matches</span>
                    <span className="text-[8.5px] text-[#10b981] font-bold font-['Barlow_Semi_Condensed'] uppercase">{jobsMatched} Found</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { role: 'Frontend Engineer', co: 'Stripe · Remote', status: 'Submitted', match: '96%' },
                      { role: 'UI Engineer', co: 'Vercel · Hybrid', status: 'In Review', match: '92%' }
                    ].map((j, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/2 border border-white/5">
                        <div className="min-w-0">
                          <div className="text-[9.5px] font-bold text-white truncate">{j.role}</div>
                          <div className="text-[8px] text-white/30 truncate">{j.co}</div>
                        </div>
                        <span className="text-[8.5px] font-['Barlow_Semi_Condensed'] font-bold text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded">{j.match}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recruiter alerts */}
                <div ref={wInbox} 
                     className={`glass-widget rounded-xl p-3 border border-white/[0.04] block transition-all duration-750 transform ${showNotification ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-3 opacity-0 scale-95'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6.5 h-6.5 rounded-full bg-[#10b981]/15 text-[#10b981] text-[9px] font-extrabold flex items-center justify-center shrink-0">SC</div>
                    <div className="min-w-0">
                      <div className="text-[9px] font-bold text-white truncate">Sarah Chen</div>
                      <div className="text-[8px] text-white/40">Recruiter · Google</div>
                    </div>
                    <span className="text-[8px] text-white/25 ml-auto">Now</span>
                  </div>
                  <div className="p-2 rounded bg-white/3 border border-white/5 text-[9px] text-white/70 leading-relaxed font-sans">
                    "Hi! Your optimized resume matches our senior role. Let's schedule a call..."
                  </div>
                </div>

                {/* Weekly progress chart */}
                <div ref={wProgress} className="glass-widget rounded-xl p-3.5 border border-white/[0.04] block transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[8.5px] text-white/35 font-['Barlow_Semi_Condensed'] uppercase tracking-widest">Outreach Velocity</span>
                    <TrendingUp className="w-3 h-3 text-[#10b981]" />
                  </div>
                  <svg className="w-full h-[45px]" viewBox="0 0 100 35">
                    <path d="M0,32 Q15,22 30,28 T60,12 T90,6 T100,5" fill="none" stroke="#10b981" strokeWidth="1.8" 
                      strokeDasharray="200" strokeDashoffset="0" style={{ transition: 'stroke-dashoffset 2s ease' }} />
                    <path d="M0,32 Q15,22 30,28 T60,12 T90,6 T100,5 L100,35 L0,35 Z" fill="url(#chartGrad)" opacity="0.08" />
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Pipeline Stages widget */}
                <div ref={wPipeline} className="glass-widget rounded-xl p-3.5 border border-white/[0.04] block transition-all">
                  <span className="text-[8.5px] text-white/35 font-['Barlow_Semi_Condensed'] uppercase tracking-widest block mb-2">Interview Pipeline</span>
                  <div className="flex items-center gap-1.5 justify-between">
                    {['Tailored', 'Applied', 'Screen', 'Offered'].map((s, idx) => (
                      <React.Fragment key={idx}>
                        <div className="flex flex-col items-center gap-1">
                          <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-bold ${idx < 3 ? 'bg-[#10b981]/25 text-[#10b981] border border-[#10b981]/30' : 'bg-white/5 text-white/20'}`}>
                            {idx < 3 ? '✓' : idx + 1}
                          </span>
                          <span className={`text-[8px] font-['Barlow_Semi_Condensed'] uppercase ${idx < 3 ? 'text-white/80' : 'text-white/25'}`}>{s}</span>
                        </div>
                        {idx < 3 && <div className={`flex-1 h-px ${idx < 2 ? 'bg-[#10b981]/30' : 'bg-white/5 border-dashed border-t'}`} />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
