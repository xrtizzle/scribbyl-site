import StepsVisual from "../assets/images/steps.svg";
import TrackedButton from "./TrackedButton";

export default function FourStepProcess() {
  return (
    <section className="relative bg-[#FAF9F6] overflow-hidden py-24 px-6 md:px-24">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="text-left">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
  Accelerate Your Growth, One Experience at a Time.
</h2>
<p className="text-lg text-[#526074] font-body mb-10 max-w-xl">
  In a fragmented data landscape, Scribbyl brings clarity. Our four-step process offers clear insights and streamlined execution, helping you understand what drives growth and what holds it back.
</p>
          <TrackedButton
            className="inline-block bg-[#73A6E4] text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-[#567EAF] transition"
            eventLabel="Home - Four Step CTA"
            href="/services"
          >
            Learn More
          </TrackedButton>
        </div>

        {/* Right Column with Custom Glow and Visual */}
        <div className="relative flex justify-center items-center z-10">
         
          {/* Steps Visual */}
          <img
            src={StepsVisual}
            alt="Scribbyl's 4-step growth process. Audit and Analyze. Strategize and Plan. Implement and Optimize. Monitor and Evolve  "
            className="w-full max-w-[900px] relative z-10"
          />
        </div>
      </div>
    </section>
  );
}

