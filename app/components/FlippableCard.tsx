'use client';

import { useState } from 'react';

interface FlippableCardProps {
  label: string;
  icon: string;
  description: string;
  link: string;
}

export default function FlippableCard({ label, icon, description, link }: FlippableCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card w-full h-full cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          setFlipped(!flipped);
        }
      }}
      aria-pressed={flipped}
    >
      <div className={`flip-inner relative w-full h-full ${flipped ? 'flipped' : ''}`}>
        {/* Front Side */}
        <div className="flip-front flex flex-col items-center justify-center">
          <img src={icon} alt={`${label} icon`} className="w-12 h-12 mb-3" />
          <h2 className="text-lg font-semibold text-[#0A2D81]">{label}</h2>
        </div>

        {/* Back Side */}
        <div className="flip-back flex items-center justify-center">
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}
