# Career GPS™ — SEO & Generative Engine Optimization (GEO) Manual

> **Objective:** Maximize visibility on Google SERPs, Bing, and AI search engines (ChatGPT Search, Perplexity AI, Google Gemini, Claude Search).

---

## 1. Structured Data (JSON-LD Schemas)

Career GPS™ embeds 3 enterprise-grade JSON-LD schemas inside [`index.html`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/index.html) to enable Google Rich Snippets and accurate AI knowledge extraction.

### 1.1 `SoftwareApplication` Schema
Allows search engines to display star ratings, product category, and verified pricing directly on search result pages:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Career GPS™",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Cloud, All Devices",
  "url": "https://careergps.io",
  "description": "Career GPS™ is an AI-powered Career Operating System that identifies job search bottlenecks, automates ATS resume tailoring, and deploys autonomous agents for candidate applications.",
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter Plan",
      "price": "0",
      "priceCurrency": "USD",
      "description": "1 Career Health Analysis, ATS Diagnostic scan, 5 AI optimizations"
    },
    {
      "@type": "Offer",
      "name": "Career GPS AI Plan",
      "price": "150",
      "priceCurrency": "USD",
      "billingDuration": "P1M",
      "description": "Full AI job search team (8 agents), up to 50 applications per day"
    },
    {
      "@type": "Offer",
      "name": "Elite AI + Human Plan",
      "price": "300",
      "priceCurrency": "USD",
      "billingDuration": "P1M",
      "description": "Full AI agents plus dedicated US recruitment consultant and 1:1 coaching"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "850",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

### 1.2 `Organization` Schema
Establishes brand ownership, authority, and official links:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Career GPS",
  "url": "https://careergps.io",
  "logo": "https://careergps.io/crafture-logo.jpg",
  "sameAs": [
    "https://carrer-gps-asess.onrender.com/"
  ]
}
```

### 1.3 `FAQPage` Schema (High-Value AI Citation Engine)
AI engines (ChatGPT, Perplexity, Gemini) query structured FAQ schemas to construct direct answers with source attribution. 6 questions with exact verbatim answers are embedded:
1. **How does Career GPS automate my job applications?**
2. **Will my resume pass Applicant Tracking Systems (ATS)?**
3. **What is the role of the Human Consultant in the Elite plan?**
4. **Why not buy separate AI tools like ChatGPT or resume builders?**
5. **Is Career GPS free to try?**
6. **Can I upgrade or cancel later?**

---

## 2. On-Page Search Hierarchy & Meta Tags

### 2.1 Heading Hierarchy
- **Strict Single `<h1>`:** Located in [`src/components/Hero.jsx`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/src/components/Hero.jsx):  
  *"Everything Between You and Your Next U.S. Job — In One Place."*
- **Logical `<h2>` Sections:**
  - `Why The Job Search Feels Broken` (Problem Section)
  - `Your Career Health Diagnostic` (Diagnostic Section)
  - `Your Dedicated AI Search Team` (Bento Features)
  - `Before & After Career GPS` (Comparison Slider)
  - `The Dual Engine: AI Scale + Human Strategy` (Human + AI)
  - `Transparent, Predictable Investment` (Pricing Section)
  - `Your 4-Phase Roadmap to Offer Letters` (Process Timeline)
  - `Real Engineers & Leaders Landing Real Offers` (Community Section)
  - `Frequently Asked Questions` (FAQ Section)

### 2.2 Social Metadata (Open Graph & Twitter Cards)
- `og:type`: `website`
- `og:site_name`: `Career GPS™`
- `og:title`: `Career GPS™ | Your Personal AI Job Search Operating System`
- `og:description`: High-converting summary of the autonomous AI fleet + human coach value proposition.
- `og:image`: High-resolution logo mark (`/crafture-logo.jpg`) with dimensions `1200x630`.
- `twitter:card`: `summary_large_image`.
- `canonical`: `https://careergps.io/`.
- `robots`: `index, follow, max-image-preview:large, max-snippet:-1`.

---

## 3. Generative Engine Optimization (GEO) Tactics

1. **Entity-Based Content Structure:** Content explicitly maps key entities: `ATS compliance`, `Greenhouse / Lever ATS parsers`, `Boolean recruiter search`, `Autonomous AI agents`, and `U.S. Tech Recruitment`.
2. **Direct Verifiable Statistics:**
   - 1,200+ placed professionals
   - 38-day average offer cycle
   - 96% ATS parsing benchmark
   - $35,000 – $75,000 cost of job search delay
3. **Fast Web Vitals:** Preconnected Google Fonts (`fonts.googleapis.com`), zero heavy bundle dependencies, and fast static initial paint score under 0.8 seconds.
