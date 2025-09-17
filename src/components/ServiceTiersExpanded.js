// ServiceTiersExpanded.js
import TrackedButton from "./TrackedButton";
import {
  Lightbulb,
  BarChart2,
  Rocket,
  CheckCircle,
  // add-on icons:
  MousePointerClick,
  Search as SearchIcon,
  FileText,
  Code2,
} from "lucide-react";

/* ---------- Tiers (UNCHANGED) ---------- */
const tiers = [
  {
    icon: Lightbulb,
    tier: "Tier 1",
    name: "Signal Scan",
    label: "Discover",
    description:
      "For businesses unsure what’s working—or what’s even tracking.",
    bullets: [
      "GA4 + Search Console Check",
      "Social & referral traffic scan",
      "Mini CX audit",
      "Source Map PDF + Strategy Call",
    ],
    frequency: "One-time audit",
    bestFor: "Early-stage teams or site handoffs",
    eventLabel: "Homepage - View Tier 1",
    price: "$999",
    priceNote: "one-time",
  },
  {
    icon: BarChart2,
    tier: "Tier 2",
    name: "Unified Source Map",
    label: "Align",
    description:
      "Get your marketing, analytics, and CX finally working together.",
    bullets: [
      "Everything in Tier 1",
      "Scribbyl Central dashboard setup",
      "Light implementation support",
      "Quarterly review with the team",
    ],
    frequency: "3 month minimum",
    bestFor: "Founders actively marketing but flying blind",
    eventLabel: "Homepage - View Tier 2",
    price: "$1,999",
    priceNote: "per month",
  },
  {
    icon: Rocket,
    tier: "Tier 3",
    name: "Growth Ops Partner",
    label: "Grow",
    description:
      "Plug us in as your fractional growth team—CX, content, and conversion all aligned.",
    bullets: [
      "Everything in Tier 2",
      "SEO, content, and analytics strategy",
      "15 hours of Upgrades per month",
      "Monthly review with the team",
    ],
    frequency: "6 month minimum",
    bestFor: "Scaling brands & CX-led founders",
    eventLabel: "Homepage - View Tier 3",
    price: "$3,999",
    priceNote: "per month",
  },
];

/* ---------- Add-ons (attached to tiers) ---------- */
const powerUps = [
  {
    icon: BarChart2,
    category: "CX Deep Dives",
    description: "Journey mapping, click heatmaps, and mobile UX audits.",
  },
  {
    icon: MousePointerClick,
    category: "Conversion Boosters",
    description: "A/B testing, CTA optimization, and offer experimentation.",
  },
  {
    icon: SearchIcon,
    category: "Search & Visibility",
    description:
      "SEO audits, keyword opportunity maps, and on-page fixes.",
  },
  {
    icon: FileText,
    category: "Funnel + Content Strategy",
    description: "Email revamps, lead gen flows, and blog audits.",
  },
  {
    icon: Code2,
    category: "Custom Dev",
    description:
      "Landing pages, site speed improvements, and interactive builds.",
  },
];

export default function ServiceTiersExpanded() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      id="tiers"
      className="bg-[#F5F5F5] py-16 px-4 md:px-10 text-[#0D0D0D]"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
          Choose Your Growth Plan
        </h2>
        <p className="text-base text-[#526074] mb-12">
          Each tier builds on the last—start with clarity, scale with
          confidence.
        </p>

        {/* Tiers grid (UNCHANGED) */}
        <div className="grid gap-10 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between text-left"
            >
              {/* Price Ribbon */}
              <div className="absolute top-0 right-0 bg-[#526074] text-white text-sm font-semibold px-4 py-2 rounded-bl-md shadow-md z-10">
                {tier.price}{" "}
                <span className="text-white/80 text-xs font-normal">
                  ({tier.priceNote})
                </span>
              </div>

              <div className="flex flex-col flex-grow">
                {/* Header */}
                <div className="text-center mb-4 mt-8">
                  <span className="text-xs uppercase font-bold tracking-wide text-[#567EAF] block mb-1">
                    {tier.tier}
                  </span>
                  <tier.icon className="w-10 h-10 text-[#73A6E4] mb-2 mx-auto" />
                  <h3 className="text-lg font-heading font-semibold mb-1">
                    {tier.label}
                  </h3>
                  <p className="text-sm text-[#526074] font-body mb-4">
                    {tier.description}
                  </p>
                </div>

                {/* Bullet List */}
                <ul className="text-sm text-[#0D0D0D] mb-4 space-y-2">
                  {tier.bullets.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>

                <hr className="border-t border-gray-200 my-4" />

                {/* Frequency and Target */}
                <div className="text-sm font-semibold text-[#526074] mb-1 italic border-l-4 pl-3 border-[#73A6E4]">
                  {tier.frequency}
                </div>
                <div className="text-sm font-medium text-[#0D0D0D]">
                  Best for: {tier.bestFor}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <TrackedButton
                  className="inline-block w-full bg-[#73A6E4] text-white text-sm font-semibold px-5 py-2 rounded-xl shadow hover:bg-[#567EAF] transition text-center"
                  href={isMobile ? "tel:+18444727422" : "/contact"}
                  eventLabel={tier.eventLabel}
                >
                  Book a Discovery Call ↗
                </TrackedButton>
              </div>
            </div>
          ))}
        </div>

        {/* ---- Add-ons block (NEW), stays inside the same section ---- */}
        <div className="mt-14 text-center">
          <h3 className="text-2xl md:text-[28px] font-heading font-bold mb-2">
            Enhance Your Growth Plan
          </h3>
          <p className="text-sm md:text-base text-[#526074] mb-8">
            Add these high-impact upgrades to any tier plan 
          </p>

          {/* small helper tag on mobile/desktop */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {powerUps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition"
                >
                 

                  <Icon className="w-8 h-8 text-[#73A6E4] mb-3" />
                  <h4 className="text-base md:text-lg font-heading font-semibold mb-1">
                    {item.category}
                  </h4>
                  <p className="text-sm text-[#526074] font-body">
                    {item.description}
                  </p>

                 
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
