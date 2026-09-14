# Career GPS™ — AI Career Operating System

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Design](https://img.shields.io/badge/Design_Theme-Referso_SaaS-8B5CF6?style=flat-square)](./docs/design.md)
[![SEO](https://img.shields.io/badge/SEO_Schemas-JSON--LD-10B981?style=flat-square)](./docs/seo-and-geo.md)

Career GPS™ is an AI-powered Career Operating System engineered to help U.S. professionals bypass candidate friction, automate ATS-optimized job applications, scale recruiter outreach, and land senior tech roles faster.

---

## 📚 Documentation Directory

Complete, easy-to-understand manuals are organized in the [`docs/`](./docs) folder:

| Document | Description |
| :--- | :--- |
| 🎨 **[`docs/design.md`](./docs/design.md)** | Complete Referso-inspired design manual, color tokens, typography scales, glassmorphism specs, and WCAG AA guidelines. |
| 🏗️ **[`docs/architecture.md`](./docs/architecture.md)** | Pure React 19 component tree, hook lifecycle (`useState`, `useEffect`, `useRef`), and state flow. |
| 🔍 **[`docs/seo-and-geo.md`](./docs/seo-and-geo.md)** | Complete Google Rich Snippets & AI Search (GEO) schemas (`SoftwareApplication`, `Organization`, `FAQPage`). |
| 🧩 **[`docs/components-guide.md`](./docs/components-guide.md)** | Developer catalog for all 14 modular React components in `src/components/`. |
| ⚡ **[`docs/skill.md`](./docs/skill.md)** | Antigravity design-system skill specification for UI tokens and quality gates. |

---

## 🚀 Quick Start & Development

### 1. Install Dependencies
```bash
npm install
# or using bun
bun install
```

### 2. Start Local Development Server
```bash
npm run dev
# or using bun
bun dev
```
The application will launch with instant Hot Module Replacement (HMR) at:
👉 **`http://localhost:3000/`** (or your local Vite/Bun port).

### 3. Production Build
```bash
npm run build
```
Compiles and tree-shakes all React modules into the optimized `dist/` directory with zero errors.

---

## 🌟 Key Features & Highlights

- **100% Pure React Architecture:** Zero legacy scripts (`app.js`) or external styling files (`styles.css`). All styling is bundled via `src/index.css` and all interactivity is driven by native React hooks.
- **Vibrant Referso-Inspired Theme:** Electric indigo (`#6366F1`), vivid violet (`#8B5CF6`), and neon growth emerald (`#10B981`) on a deep cosmic obsidian canvas (`#08090D`).
- **Interactive Cockpit Preview:** Real-time simulated typing terminal of 8 autonomous agents, animated SVG circular 96% ATS progress ring, and live recruiter alert toasts.
- **Draggable Before/After Comparison Slider:** Smooth pointer and touch dragging physics comparing manual job search friction against the automated Career GPS OS.
- **Dynamic Pricing Calculator:** Interactive Monthly vs. Annual toggle with automatic 20% discount calculations ($150 → $120/mo, $300 → $240/mo).
- **Accessible FAQ Accordion:** ARIA-compliant expandable answers for Google SERP and AI search citations.
- **High-Converting Assessment Links:** Directly connected to the official assessment engine at `https://carrer-gps-asess.onrender.com/`.

---

## 📁 Source Code Structure

```text
src/
├── components/
│   ├── Navbar.jsx           # Floating capsule navigation + mobile drawer
│   ├── Hero.jsx             # Hero with rotating keyword cycler
│   ├── CockpitPreview.jsx   # Live typing terminal + 96% ATS progress ring
│   ├── ProblemSection.jsx   # 6 friction cards + Cost of Delay matrix
│   ├── DiagnosticSection.jsx# 3D concentric orbital dials + 5 dimensions
│   ├── BentoFeatures.jsx    # 8-agent autonomous fleet bento grid
│   ├── ComparisonSlider.jsx # Draggable Before/After comparison slider
│   ├── HumanAiSection.jsx   # Dual-engine strategy + competitive matrix
│   ├── PricingSection.jsx   # Dynamic monthly/annual pricing calculator
│   ├── ProcessTimeline.jsx  # 4-phase chronological career roadmap
│   ├── CommunitySection.jsx # 1,200+ placed statistics & verified reviews
│   ├── FaqSection.jsx       # Expanding/collapsing FAQ accordion
│   ├── FinalCta.jsx         # Bottom high-conversion banner
│   └── Footer.jsx           # Semantic footer & sitemap
├── App.jsx                  # Main application assembler
├── index.css                # Pure design system stylesheet
└── main.jsx                 # React root mount
```

---

## 🔒 License & Brand
Copyright © Career GPS Inc. All rights reserved. Built with modern web standards and Referso-inspired SaaS visual architecture.
