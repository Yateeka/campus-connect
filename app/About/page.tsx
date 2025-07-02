'use client';
import Navbar from '../components/Navbar';
import HelpAssistant from '../components/HelpAssistant';
import Footer from './Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 relative">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pb-[140px] text-[#0A2D81]">
        <div className="text-3xl font-bold underline text-center">
          About Us Page Coming Soon!
        </div>
      </main>

      <HelpAssistant />
      <Footer />
    </div>
  );
}
