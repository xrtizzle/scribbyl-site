// ServiceTierPreview.js
import TrackedButton from "./TrackedButton";
import { Lightbulb, BarChart2, Rocket } from "lucide-react";

const tiers = [
  {
    icon: Lightbulb,
    tier: "Tier 1",
    name: "Signal Scan",
    label: "Discover",
    description: "For businesses unsure what's working—or what's even tracking.",
    eventLabel: "Homepage - View Tier 1",
  },
  {
    icon: BarChart2,
    tier: "Tier 2",
    name: "Unified Source Map",
    label: "Align",
    description: "Get your marketing, analytics, and CX finally working together.",
    eventLabel: "Homepage - View Tier 2",
    featured: true, // middle one is recommended
  },
  {
    icon: Rocket,
    tier: "Tier 3",
    name: "Growth Ops Partner",
    label: "Grow",
    description: "Plug us in as your fractional growth team—CX, content, and conversion all aligned.",
    eventLabel: "Homepage - View Tier 3",
  },
];

export default function ServiceTierPreview() {
  return (
    <section className="bg-[#F5F5F5] py-16 px-4 md:px-10 text-[#0D0D0D]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
          Choose Your Growth Plan
        </h2>
        <p className="text-base text-[#526074] mb-12">
          Each tier builds on the last—start with clarity, scale with confidence.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 flex flex-col items-center text-center shadow-md 
                bg-white/70 backdrop-blur-sm border border-white
                ${tier.featured ? "ring-2 ring-[#73A6E4]" : ""}`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-[#73A6E4] text-white shadow">
                  Recommended
                </span>
              )}

              <span className="text-xs uppercase font-bold tracking-wide text-[#567EAF] mb-2">
                {tier.tier}
              </span>
              <tier.icon className="w-10 h-10 text-[#73A6E4] mb-3" />
              <h3 className="text-lg font-heading font-semibold mb-1">{tier.label}</h3>
              <p className="text-sm text-[#526074] font-body mb-6">{tier.description}</p>

              <TrackedButton
                className="bg-[#73A6E4] text-white text-sm font-semibold px-5 py-2 rounded-xl shadow hover:bg-[#567EAF] transition"
                href={`/services#${tier.label.toLowerCase()}`}
                eventLabel={tier.eventLabel}
              >
                View Plan Details ↗
              </TrackedButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
