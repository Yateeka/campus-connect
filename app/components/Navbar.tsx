'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

type NavbarProps = {
  setShowLoginPanel?: (val: boolean) => void; // Optional external control
};

export default function Navbar({ setShowLoginPanel }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [internalShowLoginPanel, setInternalShowLoginPanel] = useState(false);
  const [username, setUsername] = useState('');

  const showLogin = setShowLoginPanel || setInternalShowLoginPanel;

  const handleLogin = () => {
    if (username.trim()) {
      alert(`Welcome, ${username}!`);
      showLogin(false);
    } else {
      alert('Please enter a username.');
    }
  };

  return (
    <>
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
          onClick={() => showLogin(true)}
        />
      </nav>

      {/* Login Panel */}
      {(!setShowLoginPanel && internalShowLoginPanel) && (
        <aside className="fixed top-0 right-0 h-full w-[320px] bg-white shadow-lg p-6 border-l border-gray-300 z-50">
          <button
            className="mb-4 text-xl font-bold text-gray-500 hover:text-red-600"
            onClick={() => setInternalShowLoginPanel(false)}
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
              router.push('/chatroom');
              setInternalShowLoginPanel(false);
            }}
            className="w-full border border-[#0A2D81] text-[#0A2D81] py-3 rounded-lg font-medium hover:bg-blue-50 mb-2"
          >
            Chatroom
          </button>

          <button
            onClick={() => {
              router.push('/faq');
              setInternalShowLoginPanel(false);
            }}
            className="w-full border border-[#0A2D81] text-[#0A2D81] py-3 rounded-lg font-medium hover:bg-blue-50"
          >
            FAQ
          </button>
        </aside>
      )}
    </>
  );
}
