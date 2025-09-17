import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (!hash) return;

    // Wait for DOM to render before trying to scroll
    const scrollToElement = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Use requestAnimationFrame inside timeout for better timing
    const timeout = setTimeout(() => {
      requestAnimationFrame(scrollToElement);
    }, 150); // slightly increased for safety across page loads

    return () => clearTimeout(timeout);
  }, [location]);

  return null;
}

