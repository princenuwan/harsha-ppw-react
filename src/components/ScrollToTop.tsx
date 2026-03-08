import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(32);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);

      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const buttonSize = 48 + 16; // button height + desired gap (4px * 4)
        if (footerTop < windowHeight) {
          setBottomOffset(windowHeight - footerTop + 16);
        } else {
          setBottomOffset(32);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{ bottom: `${bottomOffset}px` }}
      className={`fixed right-8 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:opacity-90 hover:scale-110 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
