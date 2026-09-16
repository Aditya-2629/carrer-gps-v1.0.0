# Career GPS Assessment — Theme Redesign Implementation Guide

> **Target Project:** [Career GPS Assessment App (`carrer-gps-asess.onrender.com`)](https://carrer-gps-asess.onrender.com/)  
> **Goal:** Redesign the assessment site to match the Referso-inspired modern SaaS visual theme (Electric Indigo, Vivid Violet, Neon Growth Emerald, Poppins & Plus Jakarta Sans typography, and sleek glassmorphism).

---

## 📋 Table of Contents

1. [Overview & Visual Identity](#1-overview--visual-identity)
2. [Step 1: Update `index.html` (Fonts & Metadata)](#step-1-update-indexhtml-fonts--metadata)
3. [Step 2: Replace Styling Tokens in `index.css`](#step-2-replace-styling-tokens-in-indexcss)
4. [Step 3: Component-by-Component CSS Upgrades](#step-3-component-by-component-css-upgrades)
   - [Buttons (`.btn-primary`, `.btn-ghost`)](#31-buttons-btn-primary--btn-ghost)
   - [Radio Options (`.radio-option`, `.radio-dot`)](#32-radio-options-radio-option--radio-dot)
   - [Checkbox Options (`.checkbox-option`, `.checkbox-box`)](#33-checkbox-options-checkbox-option--checkbox-box)
   - [Inputs & OTP Code Boxes (`.premium-input`, `.otp-input`)](#34-inputs--otp-code-boxes-premium-input--otp-input)
   - [Resume File Drop Zone (`.file-drop`)](#35-resume-file-drop-zone-file-drop)
   - [Progress Track & Timeline (`.progress-fill`, `.timeline-line`)](#36-progress-track--timeline-progress-fill--timeline-line)
5. [Step 4: Add Ambient Background & Glow Effects](#step-4-add-ambient-background--glow-effects)
6. [Step 5: Brand Logo Integration](#step-5-brand-logo-integration)
7. [Verification Checklist](#7-verification-checklist)

---

## 1. Overview & Visual Identity

### The Color Palette

| Token                    | Value                                        | Visual Purpose                                    |
| :----------------------- | :------------------------------------------- | :------------------------------------------------ |
| **Canvas Background**    | `#08090D` (Obsidian) or `#F8FAFC` (Luminous) | Deep space cosmic background                      |
| **Glass Surface**        | `rgba(15, 17, 26, 0.75)` / `#FFFFFF`         | Form cards, question cards, option containers     |
| **Primary Brand Accent** | `#6366F1` (Electric Indigo)                  | Primary CTA buttons, focus rings, progress bar    |
| **Secondary Accent**     | `#7C3AED` / `#8B5CF6` (Vivid Violet)         | Gradient fills, active pills, badge borders       |
| **Growth Emerald**       | `#10B981` (Neon Growth Green)                | Success badges, match scores, verified checkmarks |
| **Information Sky**      | `#38BDF8` (Sky Blue)                         | Secondary counters, informational hints           |
| **Warning / Cost Alert** | `#F43F5E` (Crimson Rose)                     | Blockers, errors, validation messages             |

---

## Step 1: Update `index.html` (Fonts & Metadata)

Open `index.html` in the assessment project. Replace the existing fonts (`Space Grotesk` and `Inter`) with **Poppins** (Headings) and **Plus Jakarta Sans** (Body):

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/jpeg" href="/crafture-logo.jpg" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=5"
    />
    <meta name="theme-color" content="#6366F1" />
    <title>Career GPS | Career Health & ATS Assessment</title>
    <meta
      name="description"
      content="Discover your personalized roadmap, ATS compliance score, and salary benchmarks with Career GPS Assessment."
    />

    <!-- Google Fonts: Poppins (Headings) + Plus Jakarta Sans (Body & Form Options) -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Poppins:wght@500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## Step 2: Replace Styling Tokens in `index.css`

In your assessment project (`src/index.css` or `src/App.css`), add Tailwind v4 theme configurations and replace the `:root` variables:

```css
@import "tailwindcss";

@theme {
  --color-primary: #6366f1;
  --color-primary-dark: #4f46e5;
  --color-primary-accent: #7c3aed;
  --color-emerald: #10b981;
  --color-emerald-dark: #059669;
  --color-canvas: #08090d;
  --color-surface: rgba(15, 17, 26, 0.75);
  --font-head: "Poppins", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --font-mono: "Fira Code", monospace;
}

:root {
  /* Canvas & Cards */
  --bg: #08090d;
  --surface-01: rgba(255, 255, 255, 0.04);
  --surface-02: rgba(255, 255, 255, 0.08);
  --surface-card: rgba(15, 17, 26, 0.75);
  --border: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(99, 102, 241, 0.4);
  --border-active: rgba(139, 92, 246, 0.6);

  /* Accents */
  --primary: #6366f1;
  --primary-gradient: linear-gradient(
    135deg,
    #6366f1 0%,
    #7c3aed 50%,
    #9333ea 100%
  );
  --emerald: #10b981;
  --emerald-dim: #059669;
  --emerald-glow: rgba(16, 185, 129, 0.25);
  --error: #f43f5e;
  --error-dim: rgba(244, 63, 94, 0.12);
  --warning: #f59e0b;
  --sky: #38bdf8;

  /* Typography */
  --font-head: "Poppins", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --font-mono: "Fira Code", monospace;

  /* Radii & Shadows */
  --r-sm: 8px;
  --r-md: 12px;
  --r-lg: 18px;
  --r-full: 9999px;
  --shadow-card: 0 12px 36px rgba(0, 0, 0, 0.45);
  --shadow-glow: 0 0 32px rgba(99, 102, 241, 0.35);
}

body {
  background-color: var(--bg);
  color: #ffffff;
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}

h1,
h2,
h3,
h4 {
  font-family: var(--font-head);
  letter-spacing: -0.025em;
}
```

---

## Step 3: Component-by-Component CSS Upgrades

Paste these upgraded classes directly into your assessment project's stylesheet to replace the old flat styles:

### 3.1 Buttons (`.btn-primary` & `.btn-ghost`)

```css
/* High-Energy Shimmer Button */
.btn-primary {
  background: var(--primary-gradient);
  color: #ffffff;
  font-family: var(--font-head);
  font-weight: 700;
  letter-spacing: -0.01em;
  border-radius: var(--r-md);
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  font-size: 0.95rem;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.6);
}

.btn-primary:active:not(:disabled) {
  transform: scale(0.98);
}

.btn-primary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
}

/* Secondary / Ghost Button */
.btn-ghost {
  color: #94a3b8;
  font-family: var(--font-body);
  font-weight: 600;
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  background: var(--surface-01);
  backdrop-filter: blur(12px);
  padding: 12px 20px;
  font-size: 0.88rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background: var(--surface-02);
  color: #ffffff;
  border-color: var(--border-hover);
}
```

### 3.2 Radio Options (`.radio-option` & `.radio-dot`)

```css
.radio-option {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  cursor: pointer;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}

.radio-option:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(99, 102, 241, 0.35);
  transform: translateY(-1px);
}

.radio-option.selected {
  background: rgba(99, 102, 241, 0.12);
  border-color: var(--primary);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.25);
}

.radio-dot {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: border-color 0.2s ease;
}

.radio-option.selected .radio-dot {
  border-color: var(--primary);
}

.radio-dot-inner {
  background: linear-gradient(135deg, #6366f1, #7c3aed);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  box-shadow: 0 0 8px #6366f1;
}
```

### 3.3 Checkbox Options (`.checkbox-option` & `.checkbox-box`)

```css
.checkbox-option {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  cursor: pointer;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}

.checkbox-option:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(16, 185, 129, 0.35);
  transform: translateY(-1px);
}

.checkbox-option.selected {
  background: rgba(16, 185, 129, 0.12);
  border-color: var(--emerald);
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.25);
}

.checkbox-box {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.checkbox-option.selected .checkbox-box {
  background: var(--emerald);
  border-color: var(--emerald);
  box-shadow: 0 0 8px #10b981;
}
```

### 3.4 Inputs & OTP Code Boxes (`.premium-input` & `.otp-input`)

```css
.premium-input {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.95rem;
  padding: 14px 18px;
  width: 100%;
  outline: none;
  transition: all 0.2s ease;
}

.premium-input::placeholder {
  color: #64748b;
}

.premium-input:focus {
  border-color: var(--primary);
  background: rgba(99, 102, 241, 0.06);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
}

/* OTP 6-Digit Verification Inputs */
.otp-input {
  font-family: var(--font-mono);
  text-align: center;
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  color: #ffffff;
  width: clamp(44px, 14vw, 56px);
  height: clamp(52px, 16vw, 64px);
  font-size: 1.5rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.04);
  outline: none;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  caret-color: var(--primary);
}

.otp-input:focus {
  border-color: var(--primary);
  background: rgba(99, 102, 241, 0.08);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
}

.otp-input.filled {
  border-color: var(--emerald);
  background: rgba(16, 185, 129, 0.08);
  color: #10b981;
}
```

### 3.5 Resume File Drop Zone (`.file-drop`)

```css
.file-drop {
  border: 2px dashed rgba(99, 102, 241, 0.35);
  background: rgba(15, 17, 26, 0.6);
  border-radius: var(--r-lg);
  padding: 44px 28px;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease;
  backdrop-filter: blur(16px);
}

.file-drop:hover,
.file-drop.drag-over {
  border-color: var(--primary);
  background: rgba(99, 102, 241, 0.1);
  box-shadow: 0 0 32px rgba(99, 102, 241, 0.25);
  transform: translateY(-2px);
}

.file-drop.uploaded {
  border-style: solid;
  border-color: var(--emerald);
  background: rgba(16, 185, 129, 0.08);
}
```

### 3.6 Progress Track & Timeline (`.progress-fill` & `.timeline-line`)

```css
.progress-track {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
  height: 6px;
  overflow: hidden;
}

.progress-fill {
  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #10b981 100%);
  height: 100%;
  border-radius: 9999px;
  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 0 12px rgba(99, 102, 241, 0.5);
}

.timeline-line {
  background: linear-gradient(180deg, #6366f1 0%, #10b981 100%);
  width: 2px;
  position: absolute;
  top: 42px;
  bottom: 0;
  left: 19px;
}
```

---

## Step 4: Add Ambient Background & Glow Effects

In `src/App.jsx` (or your top-level layout component), wrap your views with the ambient light orbs:

```jsx
<div className="min-h-screen bg-[#08090D] relative overflow-hidden text-white">
  {/* Ambient Background Light Orbs */}
  <div className="fixed inset-0 pointer-events-none z-0">
    <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18)_0%,transparent_70%)] blur-3xl animate-pulse" />
    <div className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.14)_0%,transparent_70%)] blur-3xl" />
    <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,transparent_70%)] blur-3xl" />
  </div>

  {/* Main Assessment Content Container */}
  <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">
    {/* Assessment Steps */}
  </div>
</div>
```

---

## Step 5: Brand Logo Integration

1. Copy [`crafture-logo.jpg`](file:///c:/Users/hp/Desktop/ADITYA/exp/referso%20clone/crafture-logo.jpg) into the assessment app's `src/assets/images/crafture-logo.jpg` and `public/crafture-logo.jpg`.
2. In the header bar of the assessment:

```jsx
import brandLogo from "./assets/images/crafture-logo.jpg";

export function AssessmentHeader() {
  return (
    <header className="flex items-center justify-between py-6 mb-8 border-b border-white/10">
      <div className="flex items-center gap-3">
        <img
          src={brandLogo}
          alt="Career GPS"
          className="w-9 h-9 rounded-lg shadow-md"
        />
        <span className="font-['Poppins'] font-bold text-lg text-white">
          Career <span className="text-[#6366F1]">GPS</span>
        </span>
      </div>
      <div className="text-xs font-semibold uppercase tracking-wider text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/30 px-3 py-1 rounded-full">
        ● Live Diagnostic
      </div>
    </header>
  );
}
```

---

## 7. Verification Checklist

- [ ] **Fonts Loaded**: Open DevTools → Network → Font and confirm `Poppins` and `Plus Jakarta Sans` are loaded.
- [ ] **Primary Button**: Verify the shimmer gradient (`#6366F1` → `#7C3AED`) and glow hover effect.
- [ ] **Radio/Checkbox Selection**: Clicking an option highlights it with the electric indigo / neon emerald border and smooth glow.
- [ ] **OTP Input**: Typing numbers highlights the box in neon emerald (`.filled`) with crisp typography.
- [ ] **Resume Upload**: Hovering/dragging a file over the drop zone reveals the violet dashed border and glow.
- [ ] **Progress Bar**: Progress fill transitions with the vibrant multi-color gradient (`#6366F1` → `#10B981`).
