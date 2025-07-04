'use client';

import { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'assistant';
  text: string;
};

export default function HelpAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hi there! Need help navigating? I’m here!" }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessage: Message = { role: 'user', text: userInput };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const res = await fetch('/api/help', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', text: data.reply }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { role: 'assistant', text: "Oops! Something went wrong." }]);
    }

    setUserInput('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-6 flex flex-col items-center gap-2 z-50">
      {/* Chat Box */}
      {isOpen && (
        <div className="relative bg-white text-black text-sm p-4 rounded-2xl shadow-2xl w-[340px] h-[440px] flex flex-col justify-between border border-gray-300">
          {/* Message History */}
          <div className="overflow-y-auto flex-1 space-y-2 pr-1 scroll-smooth">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] px-4 py-2 rounded-xl text-sm whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'ml-auto bg-gray-100 text-black'
                    : 'mr-auto bg-white text-[#0A2D81] font-semibold border border-[#0A2D81]'
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="mt-4 flex gap-2 items-center">
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm"
              placeholder="Ask something..."
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition font-medium"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex flex-col items-center transition-transform hover:scale-105"
      >
        {!isOpen && (
          <div className="relative bg-white text-[#0A2D81] font-semibold text-sm px-4 py-2 rounded-xl shadow-lg max-w-xs mb-2">
            <p>Need help navigating?<br />I’m here!</p>
            <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white rotate-45 z-[-1]"></div>
          </div>
        )}
        <img
          src="/logo.svg"
          alt="Help Assistant"
          className="w-32 h-32 object-contain drop-shadow-md hover:drop-shadow-xl"
        />
      </div>
    </div>
  );
}
