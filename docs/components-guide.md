# Career GPS™ — Developer Component Guide

This guide details all 14 modular React components located in [`src/components/`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/).

---

## Component Catalog

### 1. `Navbar.jsx`
- **Location:** [`src/components/Navbar.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/Navbar.jsx)
- **Role:** Floating capsule header with scroll detection, active navigation links, and mobile navigation drawer.
- **Key Hooks:**
  - `const [isScrolled, setIsScrolled] = useState(false);`
  - `const [mobileMenuOpen, setMobileMenuOpen] = useState(false);`
- **Customization:** Add or remove navigation links in the `nav-links` list; update the brand logo source or brand title.

---

### 2. `Hero.jsx`
- **Location:** [`src/components/Hero.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/Hero.jsx)
- **Role:** Primary hero banner containing the live rotating keyword cycler, live status radar pill, and dual CTAs.
- **Key Hooks:**
  - `const [keywordIndex, setKeywordIndex] = useState(0);`
- **Customization:** Modify the `KEYWORDS` array to test new value propositions (e.g., `["negotiate top offers", "scale applications"]`).

---

### 3. `CockpitPreview.jsx`
- **Location:** [`src/components/CockpitPreview.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/CockpitPreview.jsx)
- **Role:** High-tech interactive dashboard mockup demonstrating real-time candidate operations.
- **Sub-elements:**
  - Dynamic typing terminal logger with autonomous agent messages.
  - Animated SVG circular 96% ATS progress gauge.
  - Real-time job match feed (Stripe, Vercel).
  - Recruiter inbound message alert toast.
- **Customization:** Adjust terminal logging interval or add new agent messages to the rotation pool.

---

### 4. `ProblemSection.jsx`
- **Location:** [`src/components/ProblemSection.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/ProblemSection.jsx)
- **Role:** 6-card friction bento grid highlighting broken parts of the modern job search + side-by-side Cost of Delay calculator.
- **Customization:** Update financial compensation figures or friction card headings.

---

### 5. `DiagnosticSection.jsx`
- **Location:** [`src/components/DiagnosticSection.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/DiagnosticSection.jsx)
- **Role:** 3D concentric orbital dials (`.orbital-ring`) illustrating the 5-dimension Career Health Assessment.
- **Sub-elements:** Concentric rotating rings, center calibrated badge, 5 status dimension tiles.

---

### 6. `BentoFeatures.jsx`
- **Location:** [`src/components/BentoFeatures.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/BentoFeatures.jsx)
- **Role:** Detailed bento grid showcasing the 8-agent AI fleet (Market Intelligence, ATS Optimization, Cover Letter Generator, Auto-applier, Interview Simulator, etc.).

---

### 7. `ComparisonSlider.jsx`
- **Location:** [`src/components/ComparisonSlider.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/ComparisonSlider.jsx)
- **Role:** Interactive draggable Before / After comparison slider with mouse and touch physics.
- **Key Hooks:**
  - `const [sliderPos, setSliderPos] = useState(50);`
  - `const [isDragging, setIsDragging] = useState(false);`
  - `const sliderRef = useRef(null);`

---

### 8. `HumanAiSection.jsx`
- **Location:** [`src/components/HumanAiSection.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/HumanAiSection.jsx)
- **Role:** Dual-pillar architecture (AI Speed + Human Strategy) and 5-column competitive comparison matrix table.

---

### 9. `PricingSection.jsx`
- **Location:** [`src/components/PricingSection.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/PricingSection.jsx)
- **Role:** 3-tier pricing structure with an interactive Monthly / Annual toggle switch.
- **Key Hooks:**
  - `const [isAnnual, setIsAnnual] = useState(false);`
- **Tiers:**
  1. Starter: Free ($0)
  2. Career GPS AI: $150/mo ($120/mo annual)
  3. Elite AI + Human: $300/mo ($240/mo annual)

---

### 10. `ProcessTimeline.jsx`
- **Location:** [`src/components/ProcessTimeline.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/ProcessTimeline.jsx)
- **Role:** 4-phase chronological milestone roadmap from intake scan to final offer negotiation.

---

### 11. `CommunitySection.jsx`
- **Location:** [`src/components/CommunitySection.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/CommunitySection.jsx)
- **Role:** Social proof engine: key metrics (1,200+ placed, 38 days average) and verified candidate reviews with role badges.

---

### 12. `FaqSection.jsx`
- **Location:** [`src/components/FaqSection.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/FaqSection.jsx)
- **Role:** Expandable / collapsible FAQ accordion with accessible ARIA tags.
- **Key Hooks:**
  - `const [activeIndex, setActiveIndex] = useState(0);`

---

### 13. `FinalCta.jsx`
- **Location:** [`src/components/FinalCta.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/FinalCta.jsx)
- **Role:** High-conversion closing banner with a glowing shimmering action button and trust seals.

---

### 14. `Footer.jsx`
- **Location:** [`src/components/Footer.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/Footer.jsx)
- **Role:** Semantic footer with sitemap links, social icons, brand copyright, and legal notices.
