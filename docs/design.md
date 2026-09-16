# Career GPS — Complete Design System & Style Manual

> **Referso-Inspired Modern SaaS Visual Language**  
> _Target Product:_ **Career GPS** (Personal AI Job Search Operating System)  
> _Live App / Assessment URL:_ [https://carrer-gps-asess.onrender.com/](https://carrer-gps-asess.onrender.com/)  
> _Production URL:_ [https://carrer-gps.vercel.app/](https://carrer-gps.vercel.app/)

---

## 1. Executive Summary & Design Vision

Career GPS is an AI-powered Career Operating System designed for ambitious U.S. professionals. The design philosophy blends the **clean, ultra-high-converting SaaS aesthetic of Referso** with high-tech cockpit dashboard elements.

### Core Design Pillars:

1. **High Visual Excitement ("Popping Palette"):** Deep obsidian space background (`#08090D`) contrasted with vibrant electric indigo (`#6366F1`), vivid violet (`#8B5CF6`), and radiant growth emerald (`#10B981`).
2. **Zero Clutter & Clear Hierarchy:** Every element has a purpose. High-density information is organized into clean glassmorphic Bento cards with subtle borders and gentle glows.
3. **Cockpit Interactivity:** Interactive micro-widgets (real-time terminal logger, 96% ATS progress ring, draggable Before/After slider, monthly/annual pricing toggle) keep users engaged and prove product credibility before sign-up.
4. **Accessible & Responsive:** Meets WCAG 2.2 AA standards with crisp contrast ratios, clear `:focus-visible` outlines, and responsive scaling from 320px mobile screens to 4K ultra-wide monitors.

---

## 2. Design Tokens & Color System

### 2.1 Color Tokens

| Token Name              | Hex / CSS Value             | Semantic Role                                       |
| :---------------------- | :-------------------------- | :-------------------------------------------------- |
| `--bg-canvas`           | `#08090D`                   | Base page background (deep cosmic obsidian)         |
| `--bg-surface`          | `rgba(15, 17, 26, 0.75)`    | Glass cards, bento tiles, cockpit background        |
| `--bg-surface-elevated` | `rgba(23, 26, 40, 0.85)`    | Hover states, modals, elevated pill containers      |
| `--border-subtle`       | `rgba(255, 255, 255, 0.08)` | 1px clean separation lines on cards                 |
| `--border-accent`       | `rgba(99, 102, 241, 0.35)`  | Violet glow border on active and highlighted cards  |
| `--text-primary`        | `#FFFFFF`                   | Headings, primary metrics, active buttons           |
| `--text-secondary`      | `#94A3B8`                   | Body copy, descriptions, navigation links           |
| `--text-muted`          | `#64748B`                   | Footnotes, timestamps, inactive states              |
| `--accent-indigo`       | `#6366F1`                   | Primary brand accent (Referso Royal Indigo)         |
| `--accent-violet`       | `#8B5CF6`                   | Secondary accent, gradient highlights               |
| `--accent-emerald`      | `#10B981`                   | Positive feedback, ATS 96% match, "Save 20%" badges |
| `--accent-sky`          | `#38BDF8`                   | LinkedIn SEO stats, information alerts              |
| `--accent-amber`        | `#F59E0B`                   | Priority alerts, pipeline stage notices             |
| `--accent-rose`         | `#F43F5E`                   | Cost of Delay warnings, candidate pain points       |

### 2.2 Gradient Tokens

- **Brand Gradient:** `linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #D946EF 100%)`
- **Emerald Growth Gradient:** `linear-gradient(135deg, #10B981 0%, #059669 100%)`
- **Card Glass Shimmer:** `linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%)`
- **Text Clip Gradient:** `linear-gradient(135deg, #FFFFFF 30%, #A5B4FC 70%, #C084FC 100%)`

### 2.3 Typography Hierarchy

| Style Role                 | Font Family          | Size        | Weight          | Line Height | Tracking       |
| :------------------------- | :------------------- | :---------- | :-------------- | :---------- | :------------- |
| **Hero Heading (`h1`)**    | Poppins, sans-serif  | 48px – 64px | 800 (Bold)      | 1.15        | -0.02em        |
| **Section Heading (`h2`)** | Poppins, sans-serif  | 32px – 44px | 700 (Bold)      | 1.25        | -0.01em        |
| **Card Heading (`h3`)**    | Poppins, sans-serif  | 20px – 24px | 600 (Semi-bold) | 1.35        | 0em            |
| **Body Text**              | Plus Jakarta Sans    | 15px – 17px | 400 (Regular)   | 1.65        | 0em            |
| **Navigation Links**       | Plus Jakarta Sans    | 14px        | 500 (Medium)    | 1.4         | +0.01em        |
| **Metrics / Badges**       | Plus Jakarta Sans    | 12px – 13px | 600 / 700       | 1.2         | +0.03em (Caps) |
| **Terminal / Code**        | Fira Code, monospace | 12px – 13px | 500 (Medium)    | 1.6         | 0em            |

---

## 3. Layout Grid & Spacing System

- **Maximum Page Container:** `1240px` centered with auto margins.
- **Section Spacing:** `100px – 120px` vertical padding on desktop; `60px – 80px` on mobile.
- **Bento Grid:** 12-column responsive CSS grid with `gap: 24px` on desktop and `gap: 16px` on mobile.
- **Border Radius Standards:**
  - Badges & Buttons: `9999px` (Full Pill)
  - Cards & Bento Panels: `18px – 24px`
  - Dashboard Windows: `20px`
  - Modals & Drawers: `20px`

---

## 4. Component Anatomy & Patterns

### 4.1 Floating Capsule Navbar

- **Structure:** Centered floating capsule positioned `fixed` at `top: 20px`.
- **Glass Effect:** `backdrop-filter: blur(20px); background: rgba(15, 17, 26, 0.85);`
- **Branding:** 3D Crafture brand icon (`crafture-logo.jpg`) with crisp `Career GPS` typography.
- **Single-line Links:** Clean, un-cluttered horizontal list (`Why Career GPS`, `The Platform`, `AI + Human`, `Pricing`, `Reviews`).
- **Call-to-Action:** Shimmering gradient pill button: _"Get Free Analysis"_ linking to the assessment engine.

### 4.2 Hero Section with Dynamic Rotating Keywords

- **Layout:** Vertical stack with high-impact centered typography.
- **Pre-headline Badge:** Neon emerald radar pulse indicator: `● LIVE IN THE U.S. · ACCELERATING CAREERS`.
- **Dynamic Headline:** _"Everything Between You and Your Next U.S. Job — While You `<Rotating Keyword>`."_
  - Keywords automatically cycle smoothly via React state: `prep interviews` → `ship code` → `work your day job` → `relax and sleep`.
- **Dual CTAs:**
  - Primary: Gradient purple _"Start Free Career Assessment"_ with arrow icon.
  - Secondary: Ghost border _"Explore Live Cockpit"_ scrolling smoothly down.

### 4.3 Live Career Cockpit Dashboard

- **Anatomy:** High-fidelity operating system window featuring macOS control dots (red, amber, green) and active URL address pill.
- **Left Panel (Interactive Terminal):**
  - Simulated real-time typing of 8 autonomous agents executing background job applications.
  - Emerald prompt tags (`> [AGENT 01] Scanning Greenhouse & Lever feeds...`).
- **Right Panel (Metrics Engine):**
  - **96% ATS Compliance Ring:** Circular animated SVG with emerald glow.
  - **LinkedIn SEO Strength Meter:** Sky-blue progress bar displaying keyword optimization.
  - **Recruiter Inbound Alert:** Floating glass toast mimicking real recruiter outreach.

### 4.4 6-Point Friction Bento Cards & Cost of Delay

- **Friction Grid:** 6 high-contrast pain cards detailing the modern job hunt breakdown (ATS black holes, ghosting, manual burnout).
- **Cost of Delay Calculator:** Side-by-side metric panel displaying how 3 to 6 months of delayed job landing costs **$35,000 – $75,000+** in lost compensation.

### 4.5 3D Concentric Diagnostic Dials

- Visual representation of the Career Health Assessment engine.
- Three concentric animated orbital rings (`.orbital-ring`) rotating with glowing focal points.
- Center status badge: `88% CALIBRATED`.
- Five dimensional cards: Strategy, Resume, Pipeline, Outreach, and Interview Readiness.

### 4.6 Draggable Before / After Interactive Slider

- **Architecture:** Drag-responsive divider with touch and pointer event listeners in pure React.
- **Left View (Manual Friction):** Muted slate cards, 2% interview rate, 120 hrs wasted, generic cold emails.
- **Right View (Career GPS OS):** Neon-accented glass cards, 24% interview rate, 8 automated agents, bespoke cover letters.

### 4.7 Dual-Pillar AI + Human Section & Comparison Table

- Explains why pure AI fails without human recruitment intuition, and why traditional human coaches are too slow without AI automation.
- Full 5-column competitive comparison matrix evaluating Career GPS against generic AI, resume writers, and standard job boards.

### 4.8 Dynamic Pricing Calculator

- **State Toggle:** Monthly vs. Annual toggle switch.
- **Dynamic Math:**
  - Career GPS AI: `$150/mo` (or `$120/mo` on Annual with 20% savings).
  - Elite AI + Human: `$300/mo` (or `$240/mo` on Annual with 20% savings).
- **Badge:** `MOST POPULAR` electric violet ribbon on the flagship plan.

### 4.9 Chronological 4-Phase Roadmap

- Phase 1: Intake & ATS Deep Scan (Days 1–3)
- Phase 2: Autonomous Pipeline Activation (Days 4–14)
- Phase 3: High-Frequency Recruiter Interviews (Days 15–35)
- Phase 4: Offer Evaluation & Salary Maximization (Day 36+)

### 4.10 Expandable FAQ Accordion

- Accessible `aria-expanded` toggle panels with smooth slide animations.
- Covers automation safety, ATS pass rates, human coaching details, and cancellation policies.

---

## 5. Responsive Breakpoint Rules

| Viewport Width              | Layout Adjustment                                            | Component Behavior                                                                             |
| :-------------------------- | :----------------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| **Desktop (> 1024px)**      | Full 12-column grid, horizontal navbar, side-by-side cockpit | All hover glows, 3D concentric rotations, and floating widgets active                          |
| **Tablet (768px – 1024px)** | 2-column bento grid, scaled-down dashboard                   | Terminal and metric cards stack vertically, font sizes scale down 10%                          |
| **Mobile (< 768px)**        | Single-column stack, mobile slide-out drawer menu            | Floating navbar collapses to logo + burger menu, comparison slider supports smooth touch swipe |

---

## 6. Accessibility (WCAG 2.2 AA) Standards

1. **Color Contrast:** All body text meets at least **4.5:1** contrast ratio against dark cards; large headlines meet **3:1**.
2. **Keyboard Navigation:** All interactive elements (`<button>`, `<a>`, `<input>`) have distinct `:focus-visible` styling (`outline: 2px solid #8B5CF6; outline-offset: 3px;`).
3. **Reduced Motion:** Respects `@media (prefers-reduced-motion: reduce)` by disabling perpetual background animations and rotation rings for sensitive users.
4. **ARIA Standards:** Accordions include `aria-expanded` and `aria-controls`; modals and drawers include proper `role="dialog"` tags.
