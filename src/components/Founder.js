import { useEffect } from "react";
import {
  PenLine,
  Shapes,
  Wand2,
  Bolt
} from "lucide-react";
import FounderImage from "../assets/images/founder.jpg";

export default function Founder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="story" className="relative bg-[#0D0D0D] text-white py-16 px-4 md:px-10 overflow-hidden">
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

      {/* Founder Section */}
      <div className="max-w-6xl mx-auto text-white relative z-10">
        <h2 className="text-center text-3xl font-bold mb-12">Who's Behind Scribbyl?</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-64 h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src={FounderImage}
              alt="Xenia - Founder"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <ul className="text-white/80 space-y-3 text-lg max-w-md">
            <p className="text-white/60 text-xl mb-6">
              “<em>I built Scribbyl with a Y because I've always asked: Why? Why do customers bounce? Why isn't this converting? Why are we guessing instead of knowing?”</em>
            </p>
            <li><PenLine className="inline mr-2 text-[#73A6E4]" /> CX strategist & 2x founder</li>
            <li><Shapes className="inline mr-2 text-[#73A6E4]" /> Data & funnel nerd with a design habit</li>
            <li><Wand2 className="inline mr-2 text-[#73A6E4]" /> Fixer of broken journeys & buried insights</li>
            <li><Bolt className="inline mr-2 text-[#73A6E4]" /> Curious enough to find the problem; technical enough to fix it</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
