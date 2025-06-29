'use client';
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
        <div className="min-h-screen bg-gradient-to-r from-black via-[#050074] to-[#1745E2] text-white px-6 py-6 relative">
            {/* Navbar */}
            <nav className="w-full flex items-center justify-between px-10 py-6 text-white">
                <div className="space-x-10 text-lg font-semibold">
                    <a href="#" className="underline">HOME</a>
                    <a href="#" className="underline">ABOUT US</a>
                </div>
                <img
                    src="/profile.svg"
                    alt="Profile Icon"
                    className="w-8 h-8 cursor-pointer invert hover:scale-110 transition-transform duration-200"
                />
            </nav>

            {/* Centered Grid with Arrows */}
            <div className="flex flex-col justify-center items-center h-[calc(100vh-10rem)]">
                <div className="flex items-center">
                    {/* Left Arrow */}
                    <button onClick={handlePrev} className="mr-6 text-white text-3xl hover:scale-110 transition disabled:opacity-30" disabled={startIndex === 0}>
                        ◀
                    </button>

                    {/* Grid */}
                    <div className="grid grid-cols-3 gap-x-10 gap-y-10">
                        {visibleItems.map((label, idx) => (
                            <div
                                key={idx}
                                className="w-[280px] h-[170px] bg-white text-blue-900 rounded-2xl flex items-center justify-center font-semibold text-center text-lg hover:scale-105 transition underline"
                            >
                                {label}
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button onClick={handleNext} className="ml-6 text-white text-3xl hover:scale-110 transition disabled:opacity-30" disabled={startIndex + 6 >= items.length}>
                        ▶
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-4 right-6 flex items-center gap-2 text-white text-xl font-bold underline">
                <img src="/logo.svg" alt="Logo" className="w-30 h-30 object-contain" />
                <span className="align-middle leading-none">CAMPUS CONNECT</span>
            </footer>




        </div>
    );
}
