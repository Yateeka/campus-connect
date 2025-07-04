'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import HelpAssistant from '../components/HelpAssistant';
import Footer from './Footer';

export default function AboutPage() {
  const [showLoginPanel, setShowLoginPanel] = useState(false);

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 relative">
      {/* Pass the setter to Navbar */}
      <Navbar setShowLoginPanel={setShowLoginPanel} />

      <main className="flex-grow flex items-center justify-center pb-[140px] text-[#0A2D81]">
        <div className="text-3xl font-bold underline text-center">
          About Us Page Coming Soon!
        </div>
      </main>

      {/* Login Panel */}
      {showLoginPanel && (
        <aside className="fixed top-0 right-0 h-full w-[320px] bg-white shadow-lg p-6 border-l border-gray-300 z-50">
          <button
            className="mb-4 text-xl font-bold text-gray-500 hover:text-red-600"
            onClick={() => setShowLoginPanel(false)}
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-[#0A2D81] mb-6">Iniciar sesión</h2>

          {/* Dummy login input */}
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="p-4 border rounded-lg text-black text-lg mb-6 w-full"
          />

          <button className="bg-[#0A2D81] text-white py-3 rounded-lg font-semibold hover:bg-blue-900 w-full">
            Ingresar / Registrarse
          </button>
        </aside>
      )}

      <HelpAssistant />
      <Footer />
    </div>
  );
}
