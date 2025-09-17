import { BarChart2, MousePointerClick, Search, FileText, Code2 } from "lucide-react";
import TrackedButton from "./TrackedButton";

const powerUps = [
  {
    icon: BarChart2,
    category: "CX Deep Dives",
    description: "Journey mapping, click heatmaps, and mobile UX audits."
  },
  {
    icon: MousePointerClick,
    category: "Conversion Boosters",
    description: "A/B testing, CTA optimization, and offer experimentation."
  },
  {
    icon: Search,
    category: "Search & Visibility",
    description: "SEO audits, keyword opportunity maps, and on-page fixes."
  },
  {
    icon: FileText,
    category: "Funnel + Content Strategy",
    description: "Email revamps, lead gen flows, and blog audits."
  },
  {
    icon: Code2,
    category: "Custom Dev",
    description: "Landing pages, site speed improvements, and interactive builds."
  }
];

export default function PowerUpsSection() {
  return (
    <section className="relative bg-[#395577] text-white py-20 px-4 sm:px-8 md:px-10 overflow-hidden">
      {/* Blurred Orb Background */}
      <div className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-white opacity-40 rounded-full blur-[160px] z-0"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Enhance Your Growth Plan</h2>
        <p className="text-base text-white/80 mb-12">
          Add these high-impact upgrades to any tier.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {powerUps.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] text-[#0D0D0D] rounded-2xl p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition"
            >
              <item.icon className="w-8 h-8 text-[#73A6E4] mb-4" />
              <h3 className="text-lg font-heading font-semibold mb-2">{item.category}</h3>
              <p className="text-sm text-[#526074] font-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}