import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardList,
  Compass,
  MailCheck,
  MessageSquareText,
  MousePointer2,
  Play,
  Radar,
  ShieldCheck,
  Sparkles,
  TimerReset,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  ['problem', 'Problem'],
  ['system', 'System'],
  ['agents', 'Agents'],
  ['proof', 'Proof'],
  ['pricing', 'Pricing'],
  ['faq', 'FAQ'],
];

const stats = [
  ['128', 'matched roles tracked weekly'],
  ['96%', 'ATS alignment target'],
  ['24h', 'follow-up rhythm'],
];

const problems = [
  ['Search drift', 'Tabs multiply, job boards blur together, and promising roles disappear before you tailor anything.'],
  ['Resume fatigue', 'Every application asks for a different story, so your best proof gets buried in rewrites.'],
  ['Pipeline amnesia', 'You forget who needs a follow-up, what version was sent, and which recruiter replied.'],
];

const systemSteps = [
  ['01', 'Map', 'Career GPS builds a live target map from your goals, salary floor, location, strengths, and preferred company signals.'],
  ['02', 'Match', 'The OS scores every role, highlights missing keywords, and blocks distractions before they enter your queue.'],
  ['03', 'Move', 'Agents tailor, submit, follow up, and prep you while human coaches tune the strategy behind the scenes.'],
];

const agents = [
  ['Role Radar', Radar, 'Finds fresh-fit openings and detects stale postings before they waste your morning.'],
  ['Resume Mechanic', ClipboardList, 'Reorders real experience around each role without inventing credentials.'],
  ['LinkedIn Signal', MousePointer2, 'Turns profile sections into recruiter-search magnets with practical edits.'],
  ['Outreach Desk', MailCheck, 'Drafts warm, specific notes for hiring managers, alumni, and recruiters.'],
  ['Interview Coach', MessageSquareText, 'Creates prep drills from the actual job description and your background.'],
  ['Offer Guard', ShieldCheck, 'Compares compensation signals and prepares negotiation talking points.'],
];

const proof = [
  ['Monday', 'Target map approved and 43 roles filtered down to 11 high-fit openings.'],
  ['Tuesday', 'Six tailored resumes generated, reviewed, and queued with matching cover notes.'],
  ['Thursday', 'Three recruiter replies surfaced in the dashboard with suggested next moves.'],
  ['Friday', 'Mock interview pack built from the strongest active opportunity.'],
];

const faqs = [
  ['Is Career GPS a recruiting agency?', 'No. It works for the candidate. The product is designed to improve your pipeline, positioning, and interview readiness.'],
  ['Does the AI make up experience?', 'No. The system reshapes and emphasizes verified career history; it does not fabricate skills, employers, or results.'],
  ['How fast can I start?', 'The dashboard is designed for same-day onboarding. Human-supported plans include a strategy kickoff after setup.'],
  ['Can I cancel?', 'Yes. Plans are month-to-month so you can stop when the search no longer needs an operating system.'],
];

function SectionLabel({ children }) {
  return <p className="section-label js-reveal">{children}</p>;
}

function AnimatedTitle({ children }) {
  return <h2 className="section-title js-title">{children}</h2>;
}

function App() {
  const [active, setActive] = useState('hero');
  const [openFaq, setOpenFaq] = useState(0);
  const heroRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.from('.hero-word', { y: 56, opacity: 0, rotateX: -18, stagger: 0.06, duration: 0.9, ease: 'power4.out' });
      gsap.from('.hero-fade', { y: 24, opacity: 0, stagger: 0.12, duration: 0.8, delay: 0.25, ease: 'power3.out' });
      gsap.from('.dashboard-card', { y: 34, opacity: 0, scale: 0.96, stagger: 0.08, duration: 0.9, delay: 0.35, ease: 'back.out(1.2)' });

      gsap.to('.orbit-node', {
        y: (i) => (i % 2 ? -12 : 12),
        x: (i) => (i % 3 ? 10 : -10),
        repeat: -1,
        yoyo: true,
        duration: (i) => 2.3 + i * 0.18,
        ease: 'sine.inOut',
        stagger: 0.08,
      });

      gsap.utils.toArray('section[id]').forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 45%',
          end: 'bottom 45%',
          onEnter: () => setActive(section.id),
          onEnterBack: () => setActive(section.id),
        });
      });

      gsap.utils.toArray('.js-title').forEach((title) => {
        gsap.from(title, { y: 44, opacity: 0, duration: 0.75, ease: 'power3.out', scrollTrigger: { trigger: title, start: 'top 85%' } });
      });

      gsap.utils.toArray('.js-reveal').forEach((el) => {
        gsap.from(el, { y: 24, opacity: 0, duration: 0.65, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
      });

      gsap.utils.toArray('.js-card').forEach((card, index) => {
        gsap.from(card, {
          y: 38,
          opacity: 0,
          rotateX: 7,
          duration: 0.75,
          delay: (index % 3) * 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%' },
        });
      });

      gsap.to('.route-line', {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: { trigger: '#system', start: 'top 70%', end: 'bottom 45%', scrub: 1 },
      });

      gsap.to('.proof-rail', {
        xPercent: -38,
        ease: 'none',
        scrollTrigger: { trigger: '#proof', start: 'top 20%', end: '+=900', scrub: 1, pin: true },
      });
    }, heroRef);

    return () => {
      ctx.revert();
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main ref={heroRef} className="min-h-screen overflow-hidden bg-[#0b0b09] text-stone-100">
      <div className="grain" />
      <nav ref={navRef} className="fixed left-1/2 top-4 z-50 flex w-[min(94vw,1120px)] -translate-x-1/2 items-center justify-between rounded-full border border-stone-200/10 bg-[#0b0b09]/85 px-4 py-3 shadow-2xl backdrop-blur-xl">
        <a href="#hero" className="flex items-center gap-2 font-black uppercase tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-emerald-400/30 bg-emerald-400/10"><Compass className="h-4 w-4 text-emerald-300" /></span>
          Career GPS
        </a>
        <div className="hidden items-center gap-5 text-xs font-bold uppercase tracking-[0.18em] text-stone-400 md:flex">
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'text-emerald-300' : 'hover:text-stone-100'}>{label}</a>)}
        </div>
        <a href="#pricing" className="rounded-full bg-stone-100 px-4 py-2 text-sm font-extrabold text-stone-950 transition hover:-translate-y-0.5">Start</a>
      </nav>

      <section id="hero" className="relative grid min-h-screen place-items-center px-5 pb-20 pt-32">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="hero-fade mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
              <Sparkles className="h-4 w-4" /> Candidate operating system
            </div>
            <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,8.4rem)] font-black leading-[0.86] tracking-[-0.08em] text-stone-50">
              {['Stop', 'job', 'searching.', 'Start', 'career', 'routing.'].map((word) => <span className="hero-word mr-4 inline-block" key={word}>{word}</span>)}
            </h1>
            <p className="hero-fade mt-7 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">Career GPS turns scattered job hunting into a calm, managed pipeline: role discovery, resume tailoring, outreach, interview prep, and negotiation signals moving together.</p>
            <div className="hero-fade mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#pricing" className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-4 font-black text-stone-950 transition hover:-translate-y-1 hover:bg-emerald-200">Build my route <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></a>
              <a href="#system" className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-100/15 bg-stone-100/5 px-6 py-4 font-black text-stone-100 transition hover:-translate-y-1 hover:bg-stone-100/10"><Play className="h-4 w-4" /> See the system</a>
            </div>
            <div className="hero-fade mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {stats.map(([value, label]) => <div className="rounded-3xl border border-stone-100/10 bg-stone-100/[0.04] p-4" key={label}><div className="text-2xl font-black text-emerald-200">{value}</div><div className="mt-1 text-xs leading-5 text-stone-400">{label}</div></div>)}
            </div>
          </div>

          <div className="dashboard-card relative min-h-[560px] rounded-[2rem] border border-stone-100/10 bg-[#11110e] p-5 shadow-2xl">
            <div className="absolute inset-5 rounded-[1.5rem] border border-stone-100/10" />
            <div className="relative flex items-center justify-between rounded-3xl border border-stone-100/10 bg-[#171712] p-4">
              <div><p className="text-xs uppercase tracking-[0.2em] text-stone-500">Live route</p><h3 className="text-2xl font-black">Product Manager · Remote</h3></div>
              <span className="rounded-full bg-emerald-300 px-3 py-1 text-sm font-black text-stone-950">96%</span>
            </div>
            <div className="relative mt-5 grid gap-4 sm:grid-cols-2">
              {agents.slice(0, 4).map(([name, Icon, text], i) => <div key={name} className="orbit-node rounded-3xl border border-stone-100/10 bg-[#0d0d0b] p-4"><Icon className="mb-5 h-6 w-6 text-emerald-200" /><h4 className="font-black">{name}</h4><p className="mt-2 text-sm leading-6 text-stone-400">{text}</p><div className="mt-4 h-2 rounded-full bg-stone-800"><span className="block h-full rounded-full bg-emerald-300" style={{ width: `${72 + i * 6}%` }} /></div></div>)}
            </div>
            <div className="relative mt-5 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-emerald-100"><BadgeCheck className="mr-2 inline h-5 w-5" /> Three priority moves are ready before your next coffee.</div>
          </div>
        </div>
      </section>

      <section id="problem" className="px-5 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>The quiet leak in every search</SectionLabel>
          <AnimatedTitle>Your energy is being spent on coordination, not opportunity.</AnimatedTitle>
          <div className="mt-12 grid gap-5 md:grid-cols-3">{problems.map(([title, text]) => <article className="js-card rounded-[2rem] border border-stone-100/10 bg-[#11110e] p-7" key={title}><TimerReset className="h-8 w-8 text-red-300" /><h3 className="mt-8 text-2xl font-black">{title}</h3><p className="mt-4 leading-7 text-stone-400">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="system" className="relative px-5 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>The Career GPS method</SectionLabel>
          <AnimatedTitle>A route, not another productivity dashboard.</AnimatedTitle>
          <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
            <svg className="pointer-events-none absolute left-0 top-1/2 hidden w-full -translate-y-1/2 lg:block" viewBox="0 0 1000 120" fill="none"><path className="route-line" d="M40 72 C250 2 360 118 500 62 C650 0 760 114 960 44" stroke="#6ee7b7" strokeWidth="3" strokeDasharray="1200" strokeDashoffset="1200" /></svg>
            {systemSteps.map(([num, title, text]) => <article className="js-card relative rounded-[2rem] border border-stone-100/10 bg-[#11110e] p-8" key={num}><span className="text-sm font-black text-emerald-200">{num}</span><h3 className="mt-10 text-3xl font-black">{title}</h3><p className="mt-4 leading-7 text-stone-400">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="agents" className="px-5 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Animated specialist stack</SectionLabel>
          <AnimatedTitle>Every section moves because every part of the search moves.</AnimatedTitle>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{agents.map(([name, Icon, text]) => <article className="js-card group rounded-[2rem] border border-stone-100/10 bg-[#11110e] p-7 transition hover:-translate-y-2 hover:border-emerald-300/40" key={name}><Icon className="h-8 w-8 text-emerald-200" /><h3 className="mt-8 text-2xl font-black">{name}</h3><p className="mt-4 leading-7 text-stone-400">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="proof" className="overflow-hidden px-5 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>One honest week</SectionLabel>
          <AnimatedTitle>Less hustle theatre. More visible momentum.</AnimatedTitle>
          <div className="proof-rail mt-12 flex w-[150vw] gap-5">{proof.map(([day, text]) => <article className="js-card min-w-[320px] rounded-[2rem] border border-stone-100/10 bg-[#11110e] p-7 md:min-w-[460px]" key={day}><CalendarCheck className="h-8 w-8 text-emerald-200" /><h3 className="mt-10 text-4xl font-black">{day}</h3><p className="mt-5 text-lg leading-8 text-stone-300">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="pricing" className="px-5 py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div><SectionLabel>Simple start</SectionLabel><AnimatedTitle>Begin with a route audit, then scale support when interviews arrive.</AnimatedTitle><p className="js-reveal mt-6 text-lg leading-8 text-stone-400">No visual tricks, no inflated promises. The page uses tactile panels, type, motion, and spacing instead of gradients so it feels more editorial and less generated.</p></div>
          <div className="js-card rounded-[2.2rem] border border-emerald-300/25 bg-[#11110e] p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-6"><div><p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-200">Career GPS OS</p><h3 className="mt-3 text-4xl font-black">Starter Route</h3></div><div className="text-right"><span className="text-5xl font-black">$0</span><p className="text-stone-500">audit</p></div></div>
            <div className="mt-8 grid gap-3">{['Career health analysis', 'ATS diagnostic scan', 'Role-fit target map', 'Five resume scans', 'Upgrade path to managed agents'].map((item) => <p key={item} className="flex items-center gap-3 text-stone-300"><Check className="h-5 w-5 text-emerald-200" /> {item}</p>)}</div>
            <a href="mailto:hello@careergps.example" className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-4 font-black text-stone-950 transition hover:-translate-y-1 hover:bg-emerald-200">Request route audit <ArrowRight className="h-5 w-5" /></a>
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-28">
        <div className="mx-auto max-w-4xl"><SectionLabel>Questions</SectionLabel><AnimatedTitle>Designed to feel useful, not magical.</AnimatedTitle><div className="mt-10 space-y-3">{faqs.map(([q, a], i) => <button key={q} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="js-card w-full rounded-3xl border border-stone-100/10 bg-[#11110e] p-5 text-left"><span className="flex items-center justify-between gap-5 text-lg font-black">{q}<ChevronDown className={`h-5 w-5 transition ${openFaq === i ? 'rotate-180 text-emerald-200' : 'text-stone-500'}`} /></span>{openFaq === i && <p className="mt-4 leading-7 text-stone-400">{a}</p>}</button>)}</div></div>
      </section>

      <footer className="border-t border-stone-100/10 px-5 py-10 text-center text-sm text-stone-500">© 2026 Career GPS. Built for candidates who want a cleaner route.</footer>
    </main>
  );
}

export default App;
