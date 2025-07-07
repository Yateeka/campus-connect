'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarProps = {
  setShowLoginPanel?: (val: boolean) => void;
};

export default function Navbar({ setShowLoginPanel }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="w-full flex items-center justify-between px-6 sm:px-10 py-6 text-[#0A2D81] z-10 relative">
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
          href="/about"
          className={`underline-offset-4 decoration-2 ${
            pathname.startsWith('/about') ? 'underline text-[#0A2D81]' : 'hover:text-blue-700'
          }`}
        >
          ABOUT US
        </Link>
      </div>

      <img
        src="/profile.svg"
        alt="Profile Icon"
        className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-200"
        onClick={() => {
          if (setShowLoginPanel) setShowLoginPanel(true);
        }}
      />
    </nav>
  );
}
