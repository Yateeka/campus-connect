'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import HelpAssistant from './components/HelpAssistant';
import Footer from './about/Footer';
import FlippableCard from './components/FlippableCard';

export default function Dashboard() {
  const items = [
    {
      label: "ESSENTIAL SERVICES",
      icon: "/backpack.svg",
      description: "Stay organized with visa reminders, setup guides (SSN, bank, phone), and 24/7 emergency contacts.",
      link: "/info/services",
    },
    {
      label: "COMMUNITY & SUPPORT",
      icon: "/community.svg",
      description: "Find your people through cultural clubs, peer mentoring programs, support groups, and safe spaces.",
      link: "/info/community",
    },
    {
      label: "ACADEMIC",
      icon: "/academic.svg",
      description: "Get academic support with free tutoring, course planning tools, advisor access, and success workshops.",
      link: "/info/academic",
    },
    {
      label: "HOUSING & JOBS",
      icon: "/housing.svg",
      description: "Explore affordable housing, learn how to find student jobs, and understand your work eligibility.",
      link: "/info/housing",
    },
    {
      label: "FINANCE",
      icon: "/finance.svg",
      description: "Manage your money with guidance on budgeting, opening a bank account, and accessing financial aid.",
      link: "/info/finance",
    },
    {
      label: "HEALTH",
      icon: "/health.svg",
      description: "Prioritize your wellness with campus clinics, mental health support, and insurance help.",
      link: "/info/health",
    },
    {
      label: "EVENTS & ACTIVITIES",
      icon: "/events.svg",
      description: "Stay involved with campus events, cultural festivals, volunteer opportunities, and student meetups.",
      link: "/info/events",
    },
    {
      label: "TRANSPORTATION",
      icon: "/transport.svg",
      description: "Navigate the city with MARTA tips, campus shuttle maps, and discounted transit passes.",
      link: "/info/transport",
    },
    {
      label: "CAMPUS LIFE",
      icon: "/campus.svg",
      description: "Explore student orgs, leadership programs, and everything else that makes GSU life vibrant.",
      link: "/info/campus",
    },
    {
      label: "TECHNOLOGY & RESOURCES",
      icon: "/tech.svg",
      description: "Access software, Wi-Fi help, printing services, and tech support to power your student life.",
      link: "/info/tech",
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

  // Login panel state & username state
  const [showLoginPanel, setShowLoginPanel] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      alert(`Welcome, ${username}!`);
      setShowLoginPanel(false);
    } else {
      alert('Please enter a username.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 relative">
      <Navbar setShowLoginPanel={setShowLoginPanel} />

      {/* Main content shifts left when login panel is open */}
      <div
        className={`flex-grow max-w-[1200px] mx-auto w-full pt-10 pb-[140px] transition-all duration-500 ease-in-out ${
          showLoginPanel ? 'pr-[340px]' : ''
        }`}
      >
        <div className="flex justify-center items-center space-x-4 sm:space-x-6 w-full px-2">
          <button
            onClick={handlePrev}
            className="text-4xl sm:text-5xl hover:scale-110 transition disabled:opacity-30"
            disabled={startIndex === 0}
            aria-label="Previous page"
          >
            ◀
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1080px]">
            {visibleItems.map((item, idx) => (
              <div key={idx} className="h-[260px] sm:h-[300px] lg:h-[280px]">
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
            aria-label="Next page"
          >
            ▶
          </button>
        </div>
      </div>

      <HelpAssistant />
      <Footer />

      {/* Fixed Login Panel */}
      {showLoginPanel && (
        <aside className="fixed top-0 right-0 h-full w-[320px] bg-white shadow-lg p-6 border-l border-gray-300 z-50">
          <button
            className="mb-4 text-xl font-bold text-gray-500 hover:text-red-600"
            onClick={() => setShowLoginPanel(false)}
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-[#0A2D81] mb-6">Login</h2>

          <input
            type="text"
            placeholder="Username"
            className="p-4 border rounded-lg text-black text-lg mb-6 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="bg-[#0A2D81] text-white py-3 rounded-lg font-semibold hover:bg-blue-900 w-full mb-4"
          >
            Login / Register
          </button>

          <button
            onClick={() => {
              setShowLoginPanel(false);
              alert('Redirect to chatroom');
            }}
            className="w-full border border-[#0A2D81] text-[#0A2D81] py-3 rounded-lg font-medium hover:bg-blue-50 mb-2"
          >
            Chatroom
          </button>

          <button
            onClick={() => {
              setShowLoginPanel(false);
              alert('Redirect to FAQ');
            }}
            className="w-full border border-[#0A2D81] text-[#0A2D81] py-3 rounded-lg font-medium hover:bg-blue-50"
          >
            FAQ
          </button>
        </aside>
      )}
    </div>
  );
}

