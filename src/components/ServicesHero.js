import ServiceHeroImg from "../assets/images/serviceheroimg.svg";
import { trackClickEvent } from "../utils/analytics";
import { useEffect, useState } from "react";

export default function ServicesHero() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      trackClickEvent("ServicesHero CTA - Let's Build Growth");
    }

    const button = document.getElementById("services-hero-cta");
    if (button) {
      button.addEventListener("click", handleClick);
    }

    // Trigger fade after delay
    const timer = setTimeout(() => setFadeOut(true), 1500);

    return () => {
      if (button) {
        button.removeEventListener("click", handleClick);
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative bg-[#F5F5F5] text-[#0D0D0D] px-4 sm:px-6 md:px-10 pt-28 pb-2 sm:pt-24 sm:pb-24
 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div>
          <p className="uppercase text-sm tracking-wider text-[#526074] mb-2 font-body font-medium">
            Services
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
            Real Growth Starts with Real Clarity
          </h1>
          <p className="text-base sm:text-lg text-[#526074] font-body mb-8 max-w-xl">
            From disconnected data to aligned growth. We connect the dots between your marketing, analytics, and customer experience so you can stop guessing—and start scaling.
          </p>
          <a
            id="services-hero-cta"
            href="#tiers"
            className="inline-block bg-[#73A6E4] text-white text-base font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#567EAF] transition"
          >
            Let's Build Growth ↗
          </a>
        </div>

        {/* Right Image with Orb Background */}
        <div className="relative w-full h-full">
          {/* Optimized Orb Background */}
          <div
            className={`hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] bg-gradient-radial from-[#567EAF] via-[#73A6E4] to-[#395577] rounded-full transition-all duration-500 ease-out z-0 ${
              fadeOut ? "opacity-0 blur-sm" : "opacity-80"
            }`}
            style={{
              filter: fadeOut ? "blur(0px)" : "blur(40px)",
              willChange: "opacity, transform, filter",
            }}
          ></div>

          <img
  src={ServiceHeroImg}
  alt="Services Hero Visual"
  className="hidden sm:block relative z-10 w-full max-w-[420px] md:max-w-none h-auto drop-shadow-xl mx-auto"
/>

        </div>
      </div>
    </section>
  );
}
