'use client';
import Navbar from '../../components/Navbar';
import HelpAssistant from '../../components/HelpAssistant';
import Link from 'next/link';
import Footer from '@/app/about/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 relative">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pb-[140px] text-[#0A2D81]">
        <div className="text-3xl font-bold text-center">Campus Services Info Page</div>
      </main>

      <HelpAssistant />

      {/* Simple footer with back button */}
      <Footer/>
      <footer className="text-center py-6 mt-6">
      <Link href="/" passHref>
        <button className="bg-[#0A2D81] text-white px-4 py-2 rounded hover:bg-blue-900 transition duration-300">
          ⬅ Back
        </button>
      </Link>
    </footer>

    </div>
  );
}

