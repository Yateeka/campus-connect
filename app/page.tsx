'use client';
import Navbar from './components/Navbar';
import HelpAssistant from './components/HelpAssistant';
import Footer from './components/Footer';
import { useState } from 'react';


export default function Dashboard() {
    const items = [
        "ESSENTIAL & SERVICES",
        "COMMUNITY & SUPPORT",
        "ACADEMIC",
        "HOUSING & JOBS",
        "FINANCE",
        "HEALTH",
        "EVENTS & ACTIVITIES",
        "TRANSPORTATION",
        "CAMPUS LIFE",
        "TECHNOLOGY & RESOURCES",
    ];

    const [startIndex, setStartIndex] = useState(0);
    const visibleItems = items.slice(startIndex, startIndex + 6);

    const handleNext = () => {
        if (startIndex + 6 < items.length) {
            setStartIndex(startIndex + 6);
        }
    };

    const handlePrev = () => {
        if (startIndex - 6 >= 0) {
            setStartIndex(startIndex - 6);
        }
    };

    return (
        <div className="min-h-screen text-[#0A2D81] px-4 sm:px-6 py-6 relative">
            <Navbar />

            <div className="flex flex-col justify-center items-center min-h-[calc(100vh-12rem)]">
                <div className="flex items-center">
                    <button
                        onClick={handlePrev}
                        className="mr-4 sm:mr-6 text-[#0A2D81] text-3xl hover:scale-110 transition disabled:opacity-30"
                        disabled={startIndex === 0}
                    >
                        ◀
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 px-2">
                        {visibleItems.map((label, idx) => (
                            <div
                                key={idx}
                                className="w-full sm:w-[280px] h-[150px] sm:h-[160px] lg:h-[180px] bg-white text-[#0A2D81] rounded-2xl flex items-center justify-center font-semibold text-center text-base sm:text-lg lg:text-xl hover:scale-105 transition"
                            >
                                {label}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="ml-4 sm:ml-6 text-[#0A2D81] text-3xl hover:scale-110 transition disabled:opacity-30"
                        disabled={startIndex + 6 >= items.length}
                    >
                        ▶
                    </button>
                </div>
            </div>

            <HelpAssistant />
            <Footer />
        </div>
    );
}
