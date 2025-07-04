import { useState, useEffect } from "react";

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 640);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      setVisible(true); // always show on large screens
      return;
    }

    const onScroll = () => {
      setVisible(window.scrollY > 50); // show on scroll on small screens
    };

    window.addEventListener("scroll", onScroll);

    // Check on mount in case already scrolled
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [isLargeScreen]);

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 text-center text-[#0A2D81] text-base sm:text-lg lg:text-xl font-bold py-4 transition-opacity duration-500 z-50
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: 0,
        margin: 0,
      }}
    >
      CAMPUS CONNECT
    </footer>
  );
}
