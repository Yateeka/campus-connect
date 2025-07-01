'use client';
import Navbar from '../components/Navbar';
import HelpAssistant from '../components/HelpAssistant';
import Footer from './Footer';
export default function AboutPage() {
    return (
        <div className="min-h-screen text-[#0A2D81] px-6 py-6 relative">
            <Navbar />

            {/* Content */}
            <div className="flex justify-center items-center h-[calc(100vh-12rem)] text-3xl font-bold underline text-center">
                About Us Page Coming Soon!
            </div>

            <HelpAssistant />
            <Footer />
        </div>
    );
}
