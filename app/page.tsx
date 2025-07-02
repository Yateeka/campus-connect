'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HelpAssistant from './components/HelpAssistant';
import Footer from './About/Footer';
import FlippableCard from './components/FlippableCard';

export default function Dashboard() {
  const items = [
  {
    label: "ESSENTIAL SERVICES",
    icon: "/backpack.svg",
    description:
      "Stay organized with visa reminders, setup guides (SSN, bank, phone), and 24/7 emergency contacts.",
  },
  {
    label: "COMMUNITY & SUPPORT",
    icon: "/community.svg",
    description:
      "Find your people through cultural clubs, peer mentoring programs, support groups, and safe spaces.",
  },
  {
    label: "ACADEMIC",
    icon: "/academic.svg",
    description:
      "Get academic support with free tutoring, course planning tools, advisor access, and success workshops.",
  },
  {
    label: "HOUSING & JOBS",
    icon: "/housing.svg",
    description:
      "Explore affordable housing, learn how to find student jobs, and understand your work eligibility.",
  },
  {
    label: "FINANCE",
    icon: "/finance.svg",
    description:
      "Manage your money with guidance on budgeting, opening a bank account, and accessing financial aid.",
  },
  {
    label: "HEALTH",
    icon: "/health.svg",
    description:
      "Prioritize your wellness with campus clinics, mental health support, and insurance help.",
  },
  {
    label: "EVENTS & ACTIVITIES",
    icon: "/events.svg",
    description:
      "Stay involved with campus events, cultural festivals, volunteer opportunities, and student meetups.",
  },
  {
    label: "TRANSPORTATION",
    icon: "/transport.svg",
    description:
      "Navigate the city with MARTA tips, campus shuttle maps, and discounted transit passes.",
  },
  {
    label: "CAMPUS LIFE",
    icon: "/campus.svg",
    description:
      "Explore student orgs, leadership programs, and everything else that makes GSU life vibrant.",
  },
  {
    label: "TECHNOLOGY & RESOURCES",
    icon: "/tech.svg",
    description:
      "Access software, Wi-Fi help, printing services, and tech support to power your student life.",
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
    <div className="min-h-screen flex flex-col px-4 sm:px-6 relative">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pb-[140px]">
        <div className="flex justify-center items-center space-x-4 sm:space-x-6 max-w-[1200px] w-full px-2">
          <button
            onClick={handlePrev}
            className="text-4xl sm:text-5xl hover:scale-110 transition disabled:opacity-30"
            disabled={startIndex === 0}
            aria-label="Previous page"
          >
            ◀
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[960px]">
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
