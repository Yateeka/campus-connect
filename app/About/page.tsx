'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AboutPage() {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-gradient-to-r from-black via-[#050074] to-[#1745E2] text-white px-6 py-6 relative">
            {/* Navbar */}
            <nav className="w-full flex items-center justify-between px-10 py-6 text-white">
                <div className="space-x-10 text-lg font-semibold">
                    <Link
                        href="/"
                        className={`underline-offset-4 decoration-2 ${
                            pathname === '/' ? 'underline text-blue-300' : 'text-white hover:text-blue-300'
                        }`}
                    >
                        HOME
                    </Link>
                    <Link
                        href="/About"
                        className={`underline-offset-4 decoration-2 ${
                            pathname.startsWith('/About') ? 'underline text-blue-300' : 'text-white hover:text-blue-300'
                        }`}
                    >
                        ABOUT US
                    </Link>
                </div>
                <img
                    src="/profile.svg"
                    alt="Profile Icon"
                    className="w-8 h-8 cursor-pointer invert hover:scale-110 transition-transform duration-200"
                />
            </nav>

            {/* Content */}
            <div className="flex justify-center items-center h-[calc(100vh-12rem)] text-3xl font-bold underline">
                About Us Page Coming Soon!
            </div>

            {/* Footer */}
            <footer className="absolute bottom-4 right-6 flex items-center gap-3 text-white text-xl font-bold underline">
                <img src="/logo.svg" alt="Logo" className="w-30 h-30 object-contain" />
                <span className="align-middle leading-none">CAMPUS CONNECT</span>
            </footer>
        </div>
    );
}
