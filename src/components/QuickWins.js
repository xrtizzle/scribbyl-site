// QuickWins.js — compact card height, balanced padding, morph-on-expand
import { useState } from "react";
import TrackedButton from "./TrackedButton";
import {
  Search,
  Activity,
  BarChart,
  Share2,
  Mail,
  AlertTriangle,
  ChevronDown,
  MessageSquare,
  TrendingUp,
  Funnel
} from "lucide-react";

const quickWins = [
  {
    icon: Search,
    name: "Local SEO Jumpstart",
    description: "Be seen by local customers when it matters most.",
    details: [
      "Get found on Google Maps and search faster",
      "Optimize Google Business Profile + directories",
      "Target high-intent local keywords that convert",
    ],
    eventLabel: "Homepage - Quick Win SEO Audit",
  },
  {
    icon: Funnel,
    name: "Funnel + Conversion Fix",
    description:
      "Patch the leaks in your most valuable user journeys",
    details: [
      "Review and optimize your top conversion path",
      "Implement 3 high-impact UX or copy updates",
      "Track performance improvements with GA4",
    ],
    eventLabel: "Homepage - Quick Win Funnel Health Check",
  },
  {
    icon: BarChart,
    name: "Website Speed & Mobile Boost",
    description:
      "Fix the tech that's slowing down your growth.",
    details: [
      "Improve page speed + Core Web Vitals",
      "Mobile UX fixes for smoother navigation",
      "Faster sites rank higher and convert better",
    ],
    eventLabel: "Homepage - Quick Win GA4 Setup",
  },
  {
    icon: Share2,
    name: "Social Media Starter Pack",
    description:
      "Upgrade your social presence with strategy + content.",
    details: [
      "Channel review + audience trends",
      "5 custom post templates + optimized captions",
      "Hashtag research + mini content calendar",
    ],
    eventLabel: "Homepage - Quick Win Social Snapshot",
  },
  {
    icon: MessageSquare,
    name: "Voice of Customer Mini Program",
    description: "Get answers straight from your customers.",
    details: [
      "Hosted survey",
      "Summary of pain points + exact quotes",
      "3 actionable CX improvements with visuals",
    ],
    eventLabel: "Homepage - Quick Win Email Audit",
  },
  {
    icon: TrendingUp,
    name: "Ad Boost Micro Campaign",
    description: "Run a smart, targeted ad — fast.",
    details: [
      "Meta, TikTok or Google campaign setup",
      "Ad creative + audience targeting",
      "Performance report with next steps",
    ],
    eventLabel: "Homepage - Quick Win CX Risk Check",
  },
];

export default function QuickWins() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative bg-[#395577] text-white py-20 px-4 sm:px-8 md:px-10 overflow-hidden">
      {/* Gradient Background */}
<div className="absolute inset-0 bg-gradient-to-br from-[#73A6E4]/30 via-[#395577]/20 to-[#1C150C]/30 opacity-80 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
          Fast Answers. Strategic Impact.
        </h2>
        <p className="text-base text-white/80 mb-12">
          Choose a project that solves what matters most right now — and sets
          you up for sustainable success.
        </p>

        {/* Mobile (stacked) */}
        <div className="md:hidden mx-auto max-w-md space-y-6">
          {quickWins.map((item, i) => (
            <Card
              key={item.name}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              fixedHeights={{ base: "h-[220px]" }}
            />
          ))}
        </div>

        {/* Desktop (2×3) */}
        <div className="hidden md:block">
          <div className="grid gap-8 md:grid-cols-3">
            {quickWins.slice(0, 3).map((item, i) => (
              <Card
                key={item.name}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                fixedHeights={{ base: "h-[220px]" }}
              />
            ))}
          </div>

          <div className="border-t border-white/15 mt-10 mb-10" />

          <div className="grid gap-8 md:grid-cols-3">
            {quickWins.slice(3, 6).map((item, i) => {
              const idx = i + 3;
              return (
                <Card
                  key={item.name}
                  item={item}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                  fixedHeights={{ base: "h-[220px]" }}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-12 mb-8">
          <TrackedButton
            className="bg-[#73A6E4] text-white text-base font-semibold px-8 py-3 rounded-xl shadow hover:bg-[#567EAF] transition"
            href="/services#quickwins"
            eventLabel="Homepage - Quick Wins CTA"
          >
            Get Started ↗
          </TrackedButton>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Card ---------------- */

function Card({ item, isOpen, onToggle, fixedHeights }) {
  const Icon = item.icon;
  const cardH = fixedHeights?.base ?? "h-[220px]";

  return (
    <div
      className={`relative rounded-2xl bg-white text-[#0D0D0D] shadow-md transition ${cardH} overflow-hidden`}
    >
      {/* tighter vertical padding; we’ll simulate equal top/bottom by shifting header on open */}
      <div className="flex flex-col items-center text-center h-full px-6 py-3">
        {/* icon collapses completely on open */}
        <div
          className={`transition-all duration-200 overflow-hidden ${
            isOpen ? "h-0 mb-0 opacity-0" : "h-10 md:h-10 mb-2 opacity-100"
          }`}
          aria-hidden="true"
        >
          <Icon className="w-10 h-10 md:w-10 md:h-10 text-[#73A6E4]" />
        </div>

        {/* header block: moves up slightly on open to balance space */}
        <div className={`transition-all duration-200 ${isOpen ? "-mt-0" : "mt-0"}`}>
          <h3 className="text-xl md:text-[22px] leading-tight font-heading font-semibold">
            {item.name}
          </h3>
          <p
            className={`text-sm md:text-[15px] leading-snug text-[#526074] font-body max-w-xs mx-auto ${
              isOpen ? "mt-0" : "mt-0"
            }`}
          >
            {item.description}
          </p>
        </div>

        {/* divider (visible only when open) */}
        <div
          className={`w-full max-w-sm mx-auto border-t border-[#E7EEF8] transition-opacity duration-200 ${
            isOpen ? "opacity-100 mt-2" : "opacity-0"
          }`}
        />

        {/* details occupy reclaimed space */}
        <div className="w-full max-w-sm mx-auto">
          <div
            className={`transition-all duration-200 ease-out ${
              isOpen
                ? "opacity-100 translate-y-0 mt-2"
                : "opacity-0 -translate-y-2 pointer-events-none h-0 overflow-hidden"
            }`}
          >
            <ul className="space-y-1 text-sm text-[#526074]">
  {item.details?.map((d) => (
    <li key={d} className="flex justify-center items-start gap-2">
      <span className="text-[#526074]">•</span>
      <span className="text-center">{d}</span>
    </li>
  ))}
</ul>

          </div>
        </div>

        {/* chevron pinned to bottom to keep height consistent */}
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={`Toggle details for ${item.name}`}
          className={`mt-auto inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#1F6AE2]/30 text-[#1F6AE2] hover:bg-[#F2F6FB] transition ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
