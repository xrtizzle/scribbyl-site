import { useState } from "react";
import TrackedButton from "./TrackedButton";
import Step1Img from "../assets/images/auditanalyze.png";
import Step2Img from "../assets/images/strategizeplan.png";
import Step3Img from "../assets/images/implementoptimize.png";
import Step4Img from "../assets/images/monitorevolve.png";
import { trackClickEvent } from "../utils/analytics";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Audit & Analyze",
    description:
      "We conduct a thorough examination of your current analytics setup and customer experience to identify opportunities and challenges.",
    bullets: [
      "Analytics Health Check",
      "Customer Journey Review",
      "Tech Stack Evaluation"
    ],
    image: Step1Img,
  },
  {
    title: "Strategize & Plan",
    description:
      "Based on our analysis, we develop a tailored strategy focusing on enhancing user engagement and conversion rates.",
    bullets: [
      "Funnel Optimization Plan",
      "UX & Messaging Improvements",
      "Channel-Specific Tactics"
    ],
    image: Step2Img,
  },
  {
    title: "Implement & Optimize",
    description:
      "We execute the strategy, implementing necessary changes to your website and marketing efforts, continuously optimizing for peak performance.",
    bullets: [
      "Live Site Edits",
      "A/B Testing",
      "SEO & CRO Enhancements"
    ],
    image: Step3Img,
  },
  {
    title: "Monitor & Evolve",
    description:
      "Using custom dashboards, we monitor key metrics, providing ongoing insights and recommendations to adapt to evolving market trends.",
    bullets: [
      "Custom Dashboards",
      "KPI Monitoring",
      "Quarterly Strategy Sync"
    ],
    image: Step4Img,
  },
];

export default function ServiceHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];

  const handleTabClick = (index) => {
    window.gtag && window.gtag("event", "tab_switch", {
      event_category: "Navigation",
      event_label: `Tab Switch - ${steps[index].title}`,
      value: index + 1,
    });
    setActiveIndex(index);
  };

  return (
    <section className="relative bg-[#0D0D0D] text-white py-16 px-4 md:px-10 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full z-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="altGrid" width="160" height="120" patternUnits="userSpaceOnUse">
      <path d="M0 0 V120" stroke="#AAB1BA" strokeWidth="0.3" />
      <path d="M40 0 V120" stroke="#AAB1BA" strokeWidth="0.3" />
      <path d="M60 0 V120" stroke="#AAB1BA" strokeWidth="0.3" />
      <path d="M100 0 V120" stroke="#AAB1BA" strokeWidth="0.3" />
      <path d="M120 0 V120" stroke="#AAB1BA" strokeWidth="0.3" />
      <path d="M160 0 V120" stroke="#AAB1BA" strokeWidth="0.3" />
      <path d="M0 0 H160" stroke="#AAB1BA" strokeWidth="0.3" />
      <path d="M0 60 H160" stroke="#AAB1BA" strokeWidth="0.3" />
      <path d="M0 120 H160" stroke="#AAB1BA" strokeWidth="0.3" />
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#altGrid)" />
</svg>


<div className="relative z-10 max-w-5xl mx-auto text-center">
  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
    Clarity Today. Growth Tomorrow.
  </h2>
  <p className="text-base md:text-lg text-[#AAB1BA] max-w-3xl mx-auto mb-8">
    Our entry projects give you immediate answers. Our 4-Step Growth Process
    ensures those answers turn into repeatable, measurable growth.
  </p>




        {/* Tabs */}
        <div className="flex flex-wrap justify-center border-b border-gray-700 mb-8 overflow-x-auto">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`px-4 py-2 whitespace-nowrap font-semibold transition-all duration-300 border-b-2 ${
                activeIndex === index
                  ? "border-primary text-white"
                  : "border-transparent text-[#AAB1BA] hover:text-[#73A6E4]"
              }`}
            >
              {step.title}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="bg-white text-[#0D0D0D] rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-10 shadow-xl">
          <div className="w-full lg:w-1/2">
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="uppercase text-sm text-gray-500 font-bold mb-2">
              Step {activeIndex + 1} – {active.title}
            </p>
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              {active.title}
            </h3>
            <p className="text-lg text-[#526074] mb-6 font-body">
              {active.description}
            </p>
            <ul className="mb-6 space-y-2">
              {active.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[#526074] font-body">
                  <CheckCircle className="w-5 h-5 mt-1" stroke="#73A6E4" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <TrackedButton
              className="inline-block bg-[#73A6E4] text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-[#567EAF] transition"
              eventLabel={`Service Highlights - ${active.title}`} value={activeIndex + 1} category="Conversion"
              href="/services"
            >
              Learn More
            </TrackedButton>
          </div>
        </div>
      </div>
    </section>
  );
}