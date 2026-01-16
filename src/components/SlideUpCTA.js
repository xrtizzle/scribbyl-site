import TrackedButton from "./TrackedButton";
import BackgroundPattern from "../assets/images/line.svg"; // Tech grid

export default function SlideUpCTA() {
  return (
    <section
      className="relative bg-[#73A6E4] text-white overflow-hidden py-20 px-6 sm:px-10 rounded-2xl max-w-5xl w-full mx-auto shadow-xl"
    >
      {/* Background Grid */}
      <img
        src={BackgroundPattern}
        alt="Decorative tech grid"
        className="absolute inset-0 w-full h-full object-cover opacity-15 z-0 rounded-2xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-heading font-extrabold mb-4">
          Stop Guessing. Start Growing.
        </h2>
        <p className="text-base md:text-lg text-white/80 mb-8 font-body max-w-xl mx-auto">
          No more disconnected tools or mystery metrics. Just clear insights, clean CX,
          and growth you can measure.
        </p>
        <TrackedButton
          className="inline-block bg-white text-[#0D0D0D] text-base font-semibold px-5 py-2.5 rounded-xl shadow-md hover:text-white hover:bg-[#395577] transition-colors duration-300"
          eventLabel="Homepage CTA - SlideUp"
          category="Conversion"
          value={1}
          href="/contact"
        >
          Let’s Talk ↗
        </TrackedButton>
      </div>
    </section>
  );
}
