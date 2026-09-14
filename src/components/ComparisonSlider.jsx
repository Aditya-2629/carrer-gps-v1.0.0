import React, { useState, useRef, useCallback, useEffect } from 'react';

export default function ComparisonSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [boxWidth, setBoxWidth] = useState(900);
  const isDragging = useRef(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setBoxWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {}
    handleMove(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e) => {
    isDragging.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {}
  };

  const handlePointerCancel = () => {
    isDragging.current = false;
  };

  return (
    <section className="section slider-section" id="beforeafter" aria-labelledby="slider-heading">
      <div className="container">
        
        <div className="section-intro text-center">
          <div className="badge badge-emerald">Interactive Slider</div>
          <h2 className="section-heading" id="slider-heading">
            Slide to reveal the <span className="gradient-text">transformation.</span>
          </h2>
          <p className="section-subtext">
            Click and drag the green divider line to compare manual search against Career GPS Operating System.
          </p>
        </div>

        {/*  Static Slider Headers  */}
        <div className="slider-labels-header">
          <span className="label-manual text-crimson">Without Career GPS (Manual)</span>
          <span className="label-auto text-emerald">With Career GPS (Automated OS)</span>
        </div>

        {/*  Draggable Slider Container  */}
        <div 
          className="interactive-slider-box" 
          id="comparisonSliderBox"
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          style={{ touchAction: 'none' }}
        >
          
          {/*  Background: Without Career GPS (Manual)  */}
          <div className="slider-panel panel-before">
            <div className="panel-inner">
              <div className="panel-badge-wrap">
                <span className="badge badge-crimson-sm">STAGES 1-7</span>
              </div>
              <div className="panel-checklist">
                <div className="check-item">
                  <span className="cross-icon">✕</span>
                  <div>
                    <h4 className="item-heading">Resume Customization</h4>
                    <p className="item-text">2+ hours of rewriting and editing per application description.</p>
                  </div>
                </div>
                <div className="check-item">
                  <span className="cross-icon">✕</span>
                  <div>
                    <h4 className="item-heading">Outbound Submissions</h4>
                    <p className="item-text">Manual scrolling, copy-pasting, profile creation.</p>
                  </div>
                </div>
                <div className="check-item">
                  <span className="cross-icon">✕</span>
                  <div>
                    <h4 className="item-heading">Outreach Pipeline</h4>
                    <p className="item-text">Cold outreach stops during active interview prep.</p>
                  </div>
                </div>
                <div className="check-item">
                  <span className="cross-icon">✕</span>
                  <div>
                    <h4 className="item-heading">Inbox Management</h4>
                    <p className="item-text">Recruiter threads missed, ghosted pipeline stages.</p>
                  </div>
                </div>
              </div>
              <div className="panel-footer-note text-crimson">
                ⚠️ Interrupted search momentum resets stage progress
              </div>
            </div>
          </div>

          {/*  Foreground Clip: With Career GPS (Automated OS)  */}
          <div 
            className="slider-panel panel-after" 
            id="sliderAfterPanel"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <div className="panel-inner">
              <div className="panel-badge-wrap">
                <span className="badge badge-emerald-sm">24/7 ONLINE</span>
              </div>
              <div className="panel-checklist">
                <div className="check-item">
                  <span className="check-icon text-emerald">✓</span>
                  <div>
                    <h4 className="item-heading">Resume Customization</h4>
                    <p className="item-text">AI-tailored drafts generated in under 3 seconds per JD.</p>
                  </div>
                </div>
                <div className="check-item">
                  <span className="check-icon text-emerald">✓</span>
                  <div>
                    <h4 className="item-heading">Outbound Submissions</h4>
                    <p className="item-text">Up to 100 precision matches submitted daily.</p>
                  </div>
                </div>
                <div className="check-item">
                  <span className="check-icon text-emerald">✓</span>
                  <div>
                    <h4 className="item-heading">Outreach Pipeline</h4>
                    <p className="item-text">Agents keep scanning and sending during mock preps.</p>
                  </div>
                </div>
                <div className="check-item">
                  <span className="check-icon text-emerald">✓</span>
                  <div>
                    <h4 className="item-heading">Inbox Management</h4>
                    <p className="item-text">Autopilot flags matching opportunities and drafts replies.</p>
                  </div>
                </div>
              </div>
              <div className="panel-footer-note text-emerald">
                ✅ Active campaign logs track outreach velocity automatically
              </div>
            </div>
          </div>

          {/*  Slider Handle  */}
          <div 
            className="slider-drag-handle" 
            id="sliderDragHandle"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="slider-divider-line"></div>
            <div className="slider-handle-knob">
              <span>⇄</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

