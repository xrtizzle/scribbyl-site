// QuickWinsExpanded.js — same visual style & responsive layout, default "open" with price
import TrackedButton from "./TrackedButton";
import { Search, Activity, BarChart, Share2, Mail, AlertTriangle, TrendingUp, MessageSquare, Funnel } from "lucide-react";

const quickWins = [
  {
    icon: Search,
    name: "Local SEO Jumpstart",
    blurb: "Be seen by local customers when it matters most.",
    details: [
      "Get found on Google Maps and search faster",
      "Optimize Google Business Profile + directories",
      "Target high-intent local keywords that convert",
    ],
    price: "$499",
    eventLabel: "Services - Quick Win SEO Audit",
  },
  {
    icon: Funnel,
    name: "Funnel + Conversion Fix",
    blurb: "Patch the leaks in your most valuable user journeys",
    details: [
      "Review and optimize your top conversion path",
      "Implement 3 high-impact UX or copy updates",
      "Track performance improvements with GA4",
    ],
    price: "$750",
    eventLabel: "Services - Quick Win Funnel Health Check",
  },
  {
    icon: BarChart,
    name: "Website Speed & Mobile Boost",
    blurb: "Fix the tech that's slowing down your growth.",
    details: [
      "Improve page speed + Core Web Vitals",
      "Mobile UX fixes for smoother navigation",
      "Faster sites rank higher and convert better",
    ],
    price: "$650",
    eventLabel: "Services - Quick Win GA4 Setup",
  },
  {
    icon: Share2,
    name: "Social Media Starter Pack",
    blurb: "Upgrade your social presence with strategy + content.",
    details: [
      "Channel review + audience trends",
      "5 custom post templates + optimized captions",
      "Hashtag research + mini content calendar",
    ],
    price: "$499",
    eventLabel: "Services - Quick Win Social Snapshot",
  },
  {
    icon: MessageSquare,
    name: "Voice of Customer Mini Program",
    blurb: "Get answers straight from your customers.",
    details: [
      "Hosted survey",
      "Summary of pain points + exact quotes",
      "3 actionable CX improvements with visualsp",
    ],
    price: "$600",
    eventLabel: "Services - Quick Win Email Audit",
  },
  {
    icon: TrendingUp,
    name: "Ad Boost Micro Campaign",
    blurb: "Run a smart, targeted ad — fast.",
    details: [
      "Meta, TikTok or Google campaign setup",
      "Ad creative + audience targeting",
      "Performance report with next steps",
    ],
    price: "$899 (+ ad spend)",
    eventLabel: "Services - Quick Win CX Risk Check",
  },
];

export default function QuickWinsExpanded() {
  return (
    <section className="relative bg-[#395577] text-white py-20 px-4 sm:px-8 md:px-10 overflow-hidden">
      {/* Gradient Background */}
<div className="absolute inset-0 bg-gradient-to-br from-[#73A6E4]/30 via-[#395577]/20 to-[#1C150C]/30 opacity-80 blur-3xl z-0" />


      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
          Fast Answers. Strategic Impact.
        </h2>
        <p className="text-base text-white/80 mb-12">
          Choose a project that solves what matters most right now — and sets you up for sustainable success.
        </p>

        {/* Mobile: stacked (keeps your original spacing) */}
        <div className="md:hidden mx-auto max-w-md space-y-6">
          {quickWins.map((item) => (
            <CardOpen key={item.name} item={item} />
          ))}
        </div>

        {/* Desktop: your original 2 rows of 3 */}
        <div className="hidden md:block">
          {/* Row 1 */}
          <div className="grid gap-8 md:grid-cols-3">
            {quickWins.slice(0, 3).map((item) => (
              <CardOpen key={item.name} item={item} />
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/15 mt-10 mb-10" />

          {/* Row 2 */}
          <div className="grid gap-8 md:grid-cols-3">
            {quickWins.slice(3, 6).map((item) => (
              <CardOpen key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 mb-8">
          <TrackedButton
            className="bg-[#73A6E4] text-white text-base font-semibold px-8 py-3 rounded-xl shadow hover:bg-[#567EAF] transition"
            href="/contact"
            eventLabel="Services - Quick Wins CTA"
          >
            Book a Discovery Call ↗
          </TrackedButton>
        </div>
      </div>
    </section>
  );
}

/** Open-state card that matches original styling */
function CardOpen({ item }) {
  const Icon = item.icon;
  return (
    <div className="rounded-2xl bg-white text-[#0D0D0D] p-6 flex flex-col items-center text-center shadow-md">
      {/* Price badge (top-right) 
      <div className="self-end -mt-2 mb-2">
        <span className="inline-flex items-center rounded-full border border-[#E5EEF9] bg-[#F7FAFF] text-[#0D3B66] text-xs font-semibold px-3 py-1">
          {item.price}
        </span>
      </div>*/}

      <Icon className="w-10 h-10 mb-3 text-[#73A6E4]" aria-hidden="true" />
      <h3 className="text-lg font-heading font-semibold mb-1">{item.name}</h3>

      {/* Short blurb (your existing description) */}
      <p className="text-sm text-[#526074] font-body max-w-xs min-h-[2rem] leading-snug">
  {item.blurb}
</p>

      {/* Divider */}
      <div className="w-full max-w-sm mx-auto border-t border-[#E7EEF8] mt-3 mb-3" />

      {/* Details list */}
      <ul className="text-left list-disc list-inside space-y-1 text-sm text-[#526074] max-w-sm">
        {item.details.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </div>
  );
}
