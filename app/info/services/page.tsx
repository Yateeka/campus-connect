'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import HelpAssistant from '../../components/HelpAssistant';
import Footer from '../../about/Footer';

const sections = [
  {
    title: 'Visa & Docs',
    items: [
      { title: 'OPT Deadlines', description: 'Important dates for Optional Practical Training (OPT).' },
      { title: 'Renewal Alerts', description: 'Stay notified when your visa or documents need renewal.' },
      { title: 'Document Storage', description: 'Tips on organizing and storing your documents securely.' },
    ],
  },
  {
    title: 'Setup Help',
    items: [
      { title: 'SSN Guide', description: 'Step-by-step instructions to apply for your SSN.' },
      { title: 'Bank Account', description: 'Open a U.S. bank account with confidence.' },
      { title: 'Phone Plans', description: 'Affordable mobile plans for students.' },
    ],
  },
  {
    title: 'Support',
    items: [
      { title: 'Emergency Contacts', description: 'Reach out when you need help fast.' },
      { title: 'Legal Help', description: 'Find free or discounted legal support for students.' },
    ],
  },
];

export default function EssentialServices() {
  const [activeContent, setActiveContent] = useState(sections[0].items[0]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col md:flex-row w-full px-6 py-10 gap-8">
        <aside className="w-full md:w-[280px] space-y-6">
          <h1 className="text-2xl font-bold text-[#0A2D81] mb-2">Essential Services</h1>
          {sections.map((section) => (
            <div key={section.title} className="bg-white shadow-md rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li
                    key={item.title}
                    className={`cursor-pointer px-3 py-2 rounded-md text-sm transition-colors ${
                      activeContent.title === item.title
                        ? 'bg-blue-100 text-[#0A2D81]'
                        : 'hover:bg-gray-100 text-gray-800'
                    }`}
                    onClick={() => setActiveContent(item)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Main content */}
        <section className="flex-grow bg-white rounded-xl shadow-md p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-[#0A2D81] mb-2">{activeContent.title}</h2>
            <p className="text-gray-700 text-base">{activeContent.description}</p>
          </div>

          {/* Placeholder for video */}
          <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/FILL_THIS"
              title="Video related to content"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>

      <HelpAssistant />
      <Footer />
    </div>
  );
}
