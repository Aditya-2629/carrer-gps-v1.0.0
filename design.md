# Design Architecture & System Manual: Career GPS™

This document outlines the visual system, typography, color palette, responsive rules, animation choreographies, and component patterns designed for the **Career GPS™ Landing Page**.

---

## 1. Core Vibe & Archetype
* **Design Read:** B2B/B2C Career Operating System for USA IT job seekers.
* **Texture Archetype:** *Ethereal Glass* — Deep OLED black backgrounds (`#050505`), semi-transparent grids, aurora radial ambient glows, and nested high-contrast glass panels.
* **Visual Density:** *Cockpit / Dashboard Data-Dense* — Uses structured tables, checklists, metric dials, and dashboard HUD panels instead of generic marketing illustrations.

---

## 2. Spacing & Visual Rhythm
* **Macro-Whitespace:** Generous layout breathing room. Default section paddings are set to `py-36` (9rem) to prevent grid congestion.
* **Section Dividers:** Removed cheap visual indicators (e.g. glowing dots). Dividers are flat, subtle 1px linear gradients (`rgba(255,255,255,0.04)`) fading out at the edges.
* **Double-Bezel Card Enclosure:**
  * Card elements use a concentric dual-container framework to simulate machined hardware.
  * *Outer Frame:* 1px ring highlights (`border border-white/5`), thin paddings (`p-1.5`), and large concentric radii (`rounded-2xl`).
  * *Inner Core:* Slightly darker backgrounds, inner drop-highlights (`shadow-[inset_0_1px_rgba(255,255,255,0.06)]`), and mathematically matched smaller radii.

---

## 3. Typography System
* **Display & Headlines:** `Barlow Semi Condensed`
  * Exclusively used for titles (`H1`, `H2`, `H3`).
  * Styled as `font-extrabold tracking-tight uppercase leading-none`.
  * Utilizes fluid scaling clamps: `text-[clamp(2.1rem,4.8vw,3.8rem)]`.
* **Body copy:** `Manrope`
  * Designed for high readability.
  * Styled with relaxed line heights (`leading-[1.72]`) and set to comfortable reading widths (`max-w-[65ch]`) in muted silver-grey (`text-white/50`).
* **Tags & Eyebrows:** Monospace uppercase tracking subtitles.
  * Styled as `font-mono text-[9px] uppercase tracking-widest text-[#10b981]/55`.

---

## 4. Color Palette

| Usage | Token | Hex / Value | Description |
| :--- | :--- | :--- | :--- |
| **Canvas** | Base BG | `#050505` | Vantablack canvas to prevent light bleed |
| **Surfaces** | Card BG | `rgba(255,255,255,0.022)` | Multi-layered semi-transparent glass with 40px blur |
| **Accent Primary** | Emerald | `#10b981` | Core indicator color (CTAs, checklist passes, scores) |
| **Accent Secondary**| Cobalt / Blue| `#3b82f6` | LinkedIn metrics, community items, trust indicator highlights |
| **Alert/Warning** | Coral Red | `#ef4444` | Pain points borders, cost of delay indicators |

---

## 5. Motion Choreography & Scroll Physics
Animations simulate physical mass, weight, and friction, avoiding standard `linear` transitions.

* **Spring Transitions:** Standard UI animations use custom cubic-beziers:
  ```css
  transition: all 0.7s ease-[cubic-bezier(0.32,0.72,0,1)];
  ```
* **Active Parallax Viewports (`gsap.matchMedia`):**
  * *Desktop (`min-width: 768px`):* Triggers viewport-locked mockups (ATS reports, pipelines) that float relative to cursor coordinates and page scroll speed.
  * *Mobile (`max-width: 767px`):* Disables stick pinning (eliminating mobile address-bar jumps). Widgets stack into static grids, retaining subtle vertical 3D rotations as they scroll into view.
* **3D Hover Tilt (`TiltCard` Component):**
  * Major dashboard panels tilt dynamically on the X and Y axes using CSS `perspective(900px) rotateX() rotateY()` on hover.
  * Floating interior metrics translate forward on the Z-axis (`translateZ(30px)`) to create real dimensional layering.

---

## 6. Layout Consolidation (Anti-Template Structure)
The page layout is structured to keep sections visually distinct and highly dense, reducing scrolling fatigue:

1. **The Hero Dashboard (`#hero`):** Massive visual focus on the 3D-stacked candidates' tracking cockpit.
2. **The Pipeline Failure (`#problem`):** Stacks the 8 primary candidate pain points on the right, supported by a horizontal row of 5 Cost of Delay warning cards at the bottom.
3. **System Diagnostic (`#careergps`):** Concentric rotating rings spinning in opposite directions on scroll, featuring a score countup from `0%` to `88%`.
4. **The Career OS Module Center (`#features`):** Unites all tool replacements (ATS scanner, LinkedIn SEO reach, Outreach bot logs, STAR Interview analyzer) into visual interactive cells.
5. **AI + Human Calibration (`#human`):** Explains structural strategy splits, combined directly with the Typical vs. Career GPS comparison table.
6. **Billing & Toggles (`#pricing`):** Dynamic annual/monthly pricing panels.
7. **Developer Community (`#community`):** Grid showcasing live sessions and resource archives.
8. **FAQs Accordion (`#faq`):** 5 clean accordion components with animated height transitions.
9. **Final CTA (`#finalcta`):** Restrained typography focus encouraging users to start the assessment.

---

## 7. Performance Guardrails
* **GPU Layering:** All animations are bound to `transform` and `opacity` to prevent layout thrashing and repaint loops.
* **Blur Conservation:** Backdrop blurs (`backdrop-filter`) are restricted only to fixed navigation headers. Scrolling containers use solid fallback colors to prevent mobile GPU frame drops.
