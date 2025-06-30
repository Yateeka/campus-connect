'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HelpAssistant from './components/HelpAssistant';
import Footer from './components/Footer';

export default function Dashboard() {
	const items = [
		{ label: "ESSENTIAL & SERVICES", icon: "/backpack.svg" },
		{ label: "COMMUNITY & SUPPORT", icon: "/community.svg" },
		{ label: "ACADEMIC", icon: "/academic.svg" },
		{ label: "HOUSING & JOBS", icon: "/housing.svg" },
		{ label: "FINANCE", icon: "/finance.svg" },
		{ label: "HEALTH", icon: "/health.svg" },
		{ label: "EVENTS & ACTIVITIES", icon: "/globe.svg" },
		{ label: "TRANSPORTATION", icon: "/window.svg" },
		{ label: "CAMPUS LIFE", icon: "/vercel.svg" },
		{ label: "TECHNOLOGY & RESOURCES", icon: "/next.svg" },
	];

	const [startIndex, setStartIndex] = useState(0);
	const visibleItems = items.slice(startIndex, startIndex + 6);

	const handleNext = () => {
		if (startIndex + 6 < items.length) {
			setStartIndex(startIndex + 6);
		}
	};

	const handlePrev = () => {
		if (startIndex - 6 >= 0) {
			setStartIndex(startIndex - 6);
		}
	};

	return (
		<div className="min-h-screen px-4 sm:px-6 py-6 relative">
			<Navbar />

			<div className="flex flex-col justify-center items-center min-h-[calc(100vh-12rem)]">
				<div className="flex items-center">
					<button
						onClick={handlePrev}
						className="mr-4 sm:mr-6 text-3xl hover:scale-110 transition disabled:opacity-30"
						disabled={startIndex === 0}
					>
						◀
					</button>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 px-2">
						{visibleItems.map((item, idx) => (
							<div
								key={idx}
								className="w-full sm:w-[280px] h-[150px] sm:h-[160px] lg:h-[180px] bg-white bg-opacity-70 backdrop-blur-md shadow-lg rounded-2xl flex flex-col items-center justify-center font-semibold text-[#0A2D81] text-center text-base sm:text-lg lg:text-xl hover:scale-105 transition"
							>
								<img
									src={item.icon}
									alt={item.label}
									className="w-10 h-10 mb-2"
								/>
								<span>{item.label}</span>
							</div>
						))}
					</div>

					<button
						onClick={handleNext}
						className="ml-4 sm:ml-6 text-3xl hover:scale-110 transition disabled:opacity-30"
						disabled={startIndex + 6 >= items.length}
					>
						▶
					</button>
				</div>
			</div>

			<HelpAssistant />
			<Footer />
		</div>
	);
}
