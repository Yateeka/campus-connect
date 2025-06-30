'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Dashboard() {
    const pathname = usePathname();

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
        <div className="min-h-screen text-[#0A2D81] px-6 py-6 relative">
            {/* Navbar */}
            <nav className="w-full flex items-center justify-between px-10 py-6">
                <div className="space-x-10 text-lg font-semibold">
                    <Link
                        href="/"
                        className={`underline-offset-4 decoration-2 ${
                            pathname === '/'
                                ? 'underline text-[#0A2D81]'
                                : 'text-[#0A2D81] hover:text-blue-700'
                        }`}
                    >
                        HOME
                    </Link>
                    <Link
                        href="/About"
                        className={`underline-offset-4 decoration-2 ${
                            pathname.startsWith('/About')
                                ? 'underline text-[#0A2D81]'
                                : 'text-[#0A2D81] hover:text-blue-700'
                        }`}
                    >
                        ABOUT US
                    </Link>
                </div>
                <img
                    src="/profile.svg"
                    alt="Profile Icon"
                    className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-200"
                />
            </nav>

            {/* Centered Grid with Arrows */}
            <div className="flex flex-col justify-center items-center h-[calc(100vh-10rem)]">
                <div className="flex items-center">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="mr-6 text-[#0A2D81] text-3xl hover:scale-110 transition disabled:opacity-30"
                        disabled={startIndex === 0}
                    >
                        ◀
                    </button>

                    {/* Grid */}
                    <div className="grid grid-cols-3 gap-x-10 gap-y-10">
                        {visibleItems.map((label, idx) => (
                            <div
                                key={idx}
                                className="w-[280px] h-[170px] bg-white text-[#0A2D81] rounded-2xl flex items-center justify-center font-semibold text-center text-lg hover:scale-105 transition underline"
                            >
                                {label}
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="ml-6 text-[#0A2D81] text-3xl hover:scale-110 transition disabled:opacity-30"
                        disabled={startIndex + 6 >= items.length}
                    >
                        ▶
                    </button>
                </div>
            </div>

            {/* Help Assistant */}
            <div className="fixed bottom-4 right-6 flex flex-col items-center gap-1 z-50">
                {/* Speech Bubble */}
                <div className="relative bg-white text-[#0A2D81] font-semibold text-sm px-4 py-2 rounded-xl shadow-lg max-w-xs">
                    <p>Need help navigating?<br />I’m here!</p>
                    <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white rotate-45 z-[-1]"></div>
                </div>

                {/* Assistant Image Below */}
                <img
                    src="/logo.svg"
                    alt="Help Assistant"
                    className="w-30 h-30 object-contain drop-shadow-md"
                />
            </div>

            {/* Footer */}
            <footer className="absolute bottom-4 left-0 w-full flex justify-center items-center gap-3 text-[#0A2D81] text-xl font-bold">
                <span className="align-middle leading-none">CAMPUS CONNECT</span>
            </footer>
        </div>
    );
}
