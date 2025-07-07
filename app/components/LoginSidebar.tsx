'use client';

import React from 'react';
import Link from 'next/link';

export default function LoginSidebar() {
  return (
    <div className="h-screen w-80 bg-[#012E7C] text-white flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-semibold mb-6">Welcome Back!</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 px-4 py-2 rounded bg-white text-black placeholder-gray-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 px-4 py-2 rounded bg-white text-black placeholder-gray-500"
      />
      <button className="w-full bg-[#4CA7F5] hover:bg-[#3c91db] text-white py-2 rounded mb-4">
        Log In
      </button>
      <Link href="/signup">
        <button className="w-full border border-white py-2 rounded hover:bg-white hover:text-[#012E7C] transition-all">
          Sign Up
        </button>
      </Link>
      <p className="text-sm mt-4 opacity-80">or</p>
      <Link href="/">
        <button className="mt-2 text-sm underline hover:opacity-80">
          Continue as Guest
        </button>
      </Link>
    </div>
  );
}
