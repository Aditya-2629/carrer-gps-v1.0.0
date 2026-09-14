import React from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CockpitPreview from './components/CockpitPreview.jsx';
import ProblemSection from './components/ProblemSection.jsx';
import DiagnosticSection from './components/DiagnosticSection.jsx';
import BentoFeatures from './components/BentoFeatures.jsx';
import ComparisonSlider from './components/ComparisonSlider.jsx';
import HumanAiSection from './components/HumanAiSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import ProcessTimeline from './components/ProcessTimeline.jsx';
import CommunitySection from './components/CommunitySection.jsx';
import FaqSection from './components/FaqSection.jsx';
import FinalCta from './components/FinalCta.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        {/* Ambient Light Orbs Background */}
        <div className="ambient-bg" aria-hidden="true">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="ambient-grid"></div>
        </div>

        {/* Floating Capsule Header */}
        <Navbar />

        <main role="main">
          <Hero />
          <CockpitPreview />
          <ProblemSection />
          <DiagnosticSection />
          <BentoFeatures />
          <ComparisonSlider />
          <HumanAiSection />
          <PricingSection />
          <ProcessTimeline />
          <CommunitySection />
          <FaqSection />
          <FinalCta />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
