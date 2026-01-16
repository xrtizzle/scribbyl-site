import { trackClickEvent } from "../utils/analytics";
import ScribbylHeroDark from "../assets/images/scribbylherodark.png"; // right-side visual

export default function ServicesHero() {
  return (
    <section
      className="relative bg-[#F5F5F5] text-[#0D0D0D] px-4 sm:px-6 md:px-10 overflow-hidden h-[100vh] min-h-[700px] flex items-center"
    >
      <div
  className="absolute inset-0 bg-no-repeat bg-cover z-0 bg-[position:60%_center] md:bg-right"
  style={{ backgroundImage: `url(${ScribbylHeroDark})` }}
  aria-hidden="true"
/>


      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Content — Unchanged */}
        <div>
          <p className="uppercase text-sm tracking-wider text-[#526074] mb-2 font-body font-medium">
            Services
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
            Real Growth Starts with Real Clarity
          </h1>
          <p className="text-base sm:text-lg text-[#526074] font-body mb-8 max-w-xl">
            From disconnected data to aligned growth. We connect the dots between your
            marketing, analytics, and customer experience so you can stop guessing—and
            start scaling.
          </p>
          <a
            id="services-hero-cta"
            href="#tiers"
            onClick={() =>
              trackClickEvent("ServicesHero CTA - Let's Build Growth")
            }
            className="inline-block bg-[#73A6E4] text-white text-base font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#567EAF] transition"
          >
            Let's Build Growth ↗
          </a>
        </div>

        {/* Empty Right Column to hold space */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
