'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import HelpAssistant from './HelpAssistant';
// import Footer from './About/Footer';
import FlippableCard from './FlippableCard';

export default function Dashboard() {
  const items = [
    {
      label: "ESSENTIAL & SERVICES",
      icon: "/backpa ck.svg",
      description: "Access food, supplies, immigration help, and more.",
      link: "/services"
    },
    {
      label: "ACADEMIC",
      icon: "/academic.svg",
      description: "Resources for tutoring, advising, and course planning.",
      link: "/academic"
    },
    {
      label: "FINANCE",
      icon: "/finance.svg",
      description: "Help with financial aid, banking, and budgeting.",
      link: "/finance"
    },
    {
      label: "COMMUNITY & SUPPORT",
      icon: "/community.svg",
      description: "Clubs, peer mentoring, and safe spaces.",
      link: "/community"
    },
    {
      label: "HOUSING & JOBS",
      icon: "/housing.svg",
      description: "Find affordable housing and student jobs.",
      link: "/housing"
    },
    {
      label: "HEALTH",
      icon: "/health.svg",
      description: "Physical and mental health support.",
      link: "/health"
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = items.slice(startIndex, startIndex + 6);

  const handleNext = () => {
    if (startIndex + 6 < items.length) setStartIndex(startIndex + 6);
  };

  const handlePrev = () => {
    if (startIndex - 6 >= 0) setStartIndex(startIndex - 6);
  };

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 py-8 relative">
      <Navbar />

      <main className="flex-grow pb-[140px]">
        <div className="flex justify-center items-center space-x-4 sm:space-x-6 max-w-[1200px] w-full mx-auto">
          <button
            onClick={handlePrev}
            className="text-4xl sm:text-5xl hover:scale-110 transition disabled:opacity-30"
            disabled={startIndex === 0}
          >
            ◀
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[960px]">
            {visibleItems.map((item, idx) => (
              <div
                key={idx}
                className="w-full h-[150px] sm:h-[160px] lg:h-[160px] bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-3xl flex flex-col items-center justify-center font-semibold text-[#0A2D81] text-center text-xl sm:text-2xl hover:scale-105 transition"
              >
                <FlippableCard
                  label={item.label}
                  icon={item.icon}
                  description={item.description}
                  link={item.link}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-4xl sm:text-5xl hover:scale-110 transition disabled:opacity-30"
            disabled={startIndex + 6 >= items.length}
          >
            ▶
          </button>
        </div>
      </main>

      <HelpAssistant />
    </div>
  );
}
