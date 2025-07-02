'use client';

import { useRouter } from 'next/navigation';

interface FlippableCardProps {
  label: string;
  icon: string;
  description: string;
  link: string;
}

export default function FlippableCard({ label, icon, description, link }: FlippableCardProps) {
  const iconClass = `icon-${icon.split('/').pop()?.split('.')[0]}`;
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <div
      className="flip-card w-full h-full cursor-pointer group"
      onClick={handleClick}
    >
      <div className="flip-inner relative w-full h-full transition-transform duration-1000 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="flip-front absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-xl bg-white shadow-md p-4">
          <img src={icon} alt={`${label} icon`} className={`w-12 h-12 mb-3 ${iconClass}`} />
          <h2 className="text-lg font-semibold text-[#0A2D81] text-center">{label}</h2>
        </div>

        {/* Back Side */}
        <div className="flip-back absolute w-full h-full backface-hidden transform rotate-y-180 flex items-center justify-center rounded-xl bg-blue-100 shadow-md p-4">
          <p className="text-center text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
