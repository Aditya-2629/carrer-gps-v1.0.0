import React, { useRef } from 'react';

export function TiltCard({ children, className = '', style = {} }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;

    // Max tilt angle of 5 degrees (0.5 * 10 = 5)
    const rotX = -normalizedY * 10;
    const rotY = normalizedX * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-300 ease-out preserve-3d cursor-pointer ${className}`}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
      }}
    >
      <div style={{ transform: 'translateZ(25px)' }} className="h-full w-full">
        {children}
      </div>
    </div>
  );
}
