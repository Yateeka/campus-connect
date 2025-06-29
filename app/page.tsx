'use client';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black via-[#050074] to-[#1745E2] text-white px-6 py-6 relative">
            {/* Navbar */}
            <nav className="w-full flex items-center justify-between px-10 py-6 text-white">
            <div className="space-x-10 text-lg font-semibold">
                <a href="#" className="underline">HOME</a>
                <a href="#" className="underline">ABOUT US</a>
            </div>

            {/* Profile Icon (SVG from public folder or external) */}
            <img
                src="/profile.svg"
                alt="Profile Icon"
                className="w-8 h-8 cursor-pointer invert hover:scale-110 transition-transform duration-200"
            />
        </nav>

            {/* Centered Grid */}
            <div className="flex flex-col justify-center items-center h-[calc(100vh-10rem)]">
                <div className="flex items-center">
                    {/* Left Arrow */}
                    <button className="mr-4 text-white text-3xl hover:scale-110 transition">
                        ◀
                    </button>

                    {/* Grid */}
                    <div className="grid grid-cols-3 gap-8">
                        {[
                            "ESSENTIAL & SERVICES",
                            "COMMUNITY & SUPPORT",
                            "ACADEMIC",
                            "HOUSING & JOBS",
                            "FINANCE",
                            "HEALTH"
                        ].map((label, idx) => (
                            <div
                                key={idx}
                                className="w-[250px] h-[150px] bg-white text-blue-900 rounded-2xl flex items-center justify-center font-semibold text-center text-lg hover:scale-105 transition"
                            >
                                {label}
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button className="ml-4 text-white text-3xl hover:scale-110 transition">
                        ▶
                    </button>
                </div>
            </div>

            <footer className=" absolute bottom-4 right-6 text-white text-xl font-bold underline">
            Campus Connect
            </footer>


        </div>
    );
}
