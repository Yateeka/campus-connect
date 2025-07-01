'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HelpAssistant from './components/HelpAssistant';
import Footer from './About/Footer';
import FlippableCard from './components/FlippableCard';

export default function Dashboard() {
  const items = [
    {
      label: "ESSENTIAL & SERVICES",
      icon: "/backpack.svg",
      description: "Access food, supplies, immigration help, and more.",
    },
    {
      label: "COMMUNITY & SUPPORT",
      icon: "/community.svg",
      description: "Clubs, peer mentoring, and safe spaces.",
    },
    {
      label: "ACADEMIC",
      icon: "/academic.svg",
      description: "Resources for tutoring, advising, and course planning.",
    },
    {
      label: "HOUSING & JOBS",
      icon: "/housing.svg",
      description: "Find affordable housing and student jobs.",
    },
    {
      label: "FINANCE",
      icon: "/finance.svg",
      description: "Help with financial aid, banking, and budgeting.",
    },
    {
      label: "HEALTH",
      icon: "/health.svg",
      description: "Physical and mental health support.",
    },
    {
      label: "EVENTS & ACTIVITIES",
      icon: "/events.svg",
      description: "Stay updated on campus events and activities.",
    },
    {
      label: "TRANSPORTATION",
      icon: "/transport.svg",
      description: "Campus shuttles, public transit info, and more.",
    },
    {
      label: "CAMPUS LIFE",
      icon: "/campus.svg",
      description: "Explore clubs, organizations, and student life.",
    },
    {
      label: "TECHNOLOGY & RESOURCES",
      icon: "/tech.svg",
      description: "IT support, software, and campus resources.",
    },
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
            aria-label="Previous page"
          >
            ◀
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-2 max-w-[960px]">
            {visibleItems.map((item, idx) => (
              <div key={idx} className="h-[260px] sm:h-[300px] lg:h-[280px]">
                <FlippableCard
                  label={item.label}
                  icon={item.icon}
                  description={item.description}
                  link="#"
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-4xl sm:text-5xl hover:scale-110 transition disabled:opacity-30"
            disabled={startIndex + 6 >= items.length}
            aria-label="Next page"
          >
            ▶
          </button>
        </div>
      </main>

      <HelpAssistant />
      <Footer />
    </div>
  );
}
