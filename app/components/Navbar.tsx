'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="w-full flex items-center justify-between px-6 sm:px-10 py-6 text-[#0A2D81]">
            <div className="space-x-6 sm:space-x-10 text-base sm:text-lg font-semibold">
                <Link
                    href="/"
                    className={`underline-offset-4 decoration-2 ${
                        pathname === '/' ? 'underline text-[#0A2D81]' : 'hover:text-blue-700'
                    }`}
                >
                    HOME
                </Link>
                <Link
                    href="/About"
                    className={`underline-offset-4 decoration-2 ${
                        pathname.startsWith('/About') ? 'underline text-[#0A2D81]' : 'hover:text-blue-700'
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
    );
}
