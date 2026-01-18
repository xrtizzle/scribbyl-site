//home.js

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TrackedButton from "../components/TrackedButton";
import LinesBackground from "../assets/images/ScribbylHeroLight.webp";
import LinesBackgroundMobile from "../assets/images/scribbylherolightmobile.webp";
import FourStepProcess from "../components/FourStepProcess";
import ServiceHighlights from "../components/ServiceHighlights";
import SlideUpCTA from "../components/SlideUpCTA";
import ScrollBar from "../components/ScrollBar";
import ServiceTierPreview from "../components/ServiceTierPreview";
import QuickWins from "../components/QuickWins";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const [glow, setGlow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setGlow(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-[#FAF9F6] text-[#0D0D0D]">
      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center overflow-hidden min-h-screen">
        {/* Responsive Background Images */}
        <>
          {/* Mobile Background */}
          <img
            loading="eager"
            src={LinesBackgroundMobile}
            alt="Decorative mobile background"
            className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 sm:hidden opacity-100"
          />

          {/* Desktop Background */}
          <img
            loading="eager"
            src={LinesBackground}
            alt="Decorative desktop background"
            className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 hidden sm:block ${
              glow ? "opacity-100" : "opacity-100"
            }`}
          />
        </>

        {/* Hero Content */}
        <div className="relative z-30 px-6 md:px-24 py-32 w-full max-w-3xl text-center mx-auto">
  <h1 className="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
    Stop Guessing.<br />
    <span className="text-[#73A6E4]"> Start Growing.</span>
  </h1>

  <p className="text-xl font-body text-[#526074] max-w-xl mb-10 mx-auto">
    Scribbyl was born from a simple belief: if you can see the signals, you can grow with certainty.
  </p>

  <div>
    <TrackedButton
      href="/services"
      className="inline-block bg-[#73A6E4] text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-[#567EAF] transition"
      eventLabel="Hero CTA - How we do it"
    >
      How we do it ↗
    </TrackedButton>
  </div>
</div>

      </section>

      {/* Scroll Bar section component */}
      <section>
        <ScrollBar />
      </section>

      {/* SERVICE TIER SECTION */}
      <section className="mb-[-60px]">
        <QuickWins />
      </section>

      {/* SERVICE HIGHLIGHT SECTION */}
      <section>
        <ServiceHighlights />
      </section>

      {/* SERVICE TIER SECTION */}
      <section className="mb-[-60px]">
        <ServiceTierPreview />
      </section>

      {/* FLOATING CTA SECTION */}
      <section className="relative bg-[#F5F5F5] h-[380px] sm:h-[420px] lg:h-[460px]">
        <div className="absolute inset-x-0 -bottom-12 flex justify-center z-10">
          <SlideUpCTA />
        </div>
      </section>
    </main>
  );
}
