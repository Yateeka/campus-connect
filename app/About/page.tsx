'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AboutPage() {
    const pathname = usePathname();

    return (
        <div className="min-h-screen text-[#0A2D81] px-6 py-6 relative">
            {/* Navbar */}
            <nav className="w-full flex items-center justify-between px-10 py-6">
                <div className="space-x-10 text-lg font-semibold">
                    <Link
                        href="/"
                        className={`underline-offset-4 decoration-2 ${
                            pathname === '/' ? 'underline text-[#0A2D81]' : 'text-[#0A2D81] hover:text-blue-700'
                        }`}
                    >
                        HOME
                    </Link>
                    <Link
                        href="/About"
                        className={`underline-offset-4 decoration-2 ${
                            pathname.startsWith('/About') ? 'underline text-[#0A2D81]' : 'text-[#0A2D81] hover:text-blue-700'
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

            {/* Content */}
            <div className="flex justify-center items-center h-[calc(100vh-12rem)] text-3xl font-bold underline">
                About Us Page Coming Soon!
            </div>

            {/* Help Assistant */}
            <div className="fixed bottom-4 right-6 flex flex-col items-center gap-1 z-50">
                <div className="relative bg-white text-[#0A2D81] font-semibold text-sm px-4 py-2 rounded-xl shadow-lg max-w-xs">
                    <p>Need help navigating?<br />I’m here!</p>
                    <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white rotate-45 z-[-1]"></div>
                </div>

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
