export default function HelpAssistant() {
    return (
        <div className="fixed bottom-4 right-6 flex flex-col items-center gap-1 z-50">
            {/* Speech Bubble */}
            <div className="relative bg-white text-[#0A2D81] font-semibold text-sm px-4 py-2 rounded-xl shadow-lg max-w-xs">
                <p>Need help navigating?<br />I’m here!</p>
                {/* Bubble Tail */}
                <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white rotate-45 z-[-1]"></div>
            </div>

            {/* Assistant Image */}
            <img
                src="/logo.svg"
                alt="Help Assistant"
                className="w-40 h-40 object-contain drop-shadow-md"
            />
        </div>
    );
}
