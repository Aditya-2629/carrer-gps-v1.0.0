---
name: design-system-career-gps
description: Design system guidelines, color tokens, component anatomy, and accessibility standards for the Career GPS™ platform (Referso-inspired SaaS visual architecture).
---

# Career GPS™ — Design System Specification

## 1. Mission
Deliver token-driven, implementation-ready UI guidance for Career GPS™ optimized for consistency, accessibility, and high conversion across the web application and marketing surfaces.

## 2. Brand Identity
- **Product Name:** Career GPS™
- **Live Assessment Engine:** `https://carrer-gps-asess.onrender.com/`
- **Target Audience:** High-performing U.S. software engineers, product managers, data scientists, and tech leaders.
- **Visual Aesthetic:** Referso-inspired modern SaaS aesthetic: deep cosmic obsidian space (`#08090D`), electric indigo (`#6366F1`), vivid violet (`#8B5CF6`), and radiant growth emerald (`#10B981`).

## 3. Style Foundations

### Typography Scale
- **Headings Font Family:** `Poppins, sans-serif`
- **Body Font Family:** `Plus Jakarta Sans, sans-serif`
- **Mono / Code:** `Fira Code, monospace`
- **Size Scale:**
  - `font.size.xs=12px`
  - `font.size.sm=13px`
  - `font.size.base=15px`
  - `font.size.lg=18px`
  - `font.size.xl=24px`
  - `font.size.2xl=32px`
  - `font.size.3xl=44px`
  - `font.size.4xl=60px`

### Color Tokens
- `color.surface.canvas=#08090D` (Obsidian cosmic background)
- `color.surface.card=rgba(15, 17, 26, 0.75)` (Glassmorphism card)
- `color.surface.elevated=rgba(23, 26, 40, 0.85)` (Hover / elevated surface)
- `color.border.subtle=rgba(255, 255, 255, 0.08)`
- `color.border.accent=rgba(99, 102, 241, 0.4)`
- `color.accent.indigo=#6366F1` (Referso Royal Indigo)
- `color.accent.violet=#8B5CF6` (Vivid Violet)
- `color.accent.emerald=#10B981` (Growth / ATS Score)
- `color.accent.sky=#38BDF8` (LinkedIn SEO)
- `color.accent.rose=#F43F5E` (Cost of Delay warning)

### Radius & Shadow
- `radius.pill=9999px` (Buttons, status tags)
- `radius.card=20px` (Bento cards, cockpits)
- `shadow.card=0 8px 32px 0 rgba(0, 0, 0, 0.4)`
- `shadow.glow=0 0 40px rgba(99, 102, 241, 0.25)`

## 4. Accessibility & Quality Gates
- **WCAG 2.2 AA Compliance:** High-contrast text on all surfaces.
- **Focus Indicators:** Clear `:focus-visible` outline for keyboard navigation.
- **Semantic Structure:** Single `<h1>` per page, sequential `<h2>` / `<h3>` hierarchy.
- **No Legacy Scripts:** Pure React hooks for all interactive behaviors.
