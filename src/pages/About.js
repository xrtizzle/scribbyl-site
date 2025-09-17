import { useEffect } from "react";
import CountUp from "react-countup";
import {
  Users,
  TrendingUp,
  LayoutGrid,
  Activity,
  Clock, 
} from "lucide-react";
import LineGlow from "../assets/images/lineglow1.svg";
import LineGlow2 from "../assets/images/lineglow2.svg"
import ScribbleUnderline from "../assets/images/scribble-underline.svg";
import Founder from "../components/Founder";
import { useInView } from "react-intersection-observer";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-[#0D0D0D] text-white">
      {/* Header Section with Metrics */}
      <section className="relative bg-[#395577] pt-32 pb-12 sm:pt-40 sm:pb-32 px-6 sm:px-10 text-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#73A6E4]/30 via-[#395577]/20 to-[#1C150C]/30 opacity-80 blur-3xl z-0" />

        {/* LineGlow background */}
<img
  src={LineGlow}
  alt="Glow lines"
  className="hidden sm:block absolute bottom-0 left-0 w-full h-auto max-h-[270px] object-cover opacity-10 z-10 pointer-events-none"
/>
<img
  src={LineGlow2}
  alt="Glow lines mobile"
  className="block sm:hidden absolute bottom-0 left-0 w-full h-auto object-cover opacity-10 z-10 pointer-events-none translate-y-8"
/>


        <div className="relative z-20 mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            The Studio Behind the Growth
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            At Scribbyl, we connect customer experience, data, and design to power brands built to scale.
          </p>
        </div>

        {/* Metrics Row */}
     <div
  ref={ref}
  className="relative z-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto justify-center"
>
  <div>
    <TrendingUp className="mx-auto mb-2 text-[#73A6E4] w-8 h-8" />
    <h2 className="text-3xl md:text-4xl font-bold">
      <CountUp end={inView ? 87 : 0} duration={2} suffix="%" />
    </h2>
    <p className="text-sm text-white/80">Avg. user engagement increase</p>
  </div>
  <div>
    <LayoutGrid className="mx-auto mb-2 text-[#73A6E4] w-8 h-8" />
    <h2 className="text-3xl md:text-4xl font-bold">
      <CountUp
        end={inView ? 1.3 : 0}
        duration={2}
        decimals={1}
        formattingFn={(val) => `${val.toLocaleString()}M+`}
      />
    </h2>
    <p className="text-sm text-white/80">Sessions analyzed</p>
  </div>
  <div>
    <Activity className="mx-auto mb-2 text-[#73A6E4] w-8 h-8" />
    <h2 className="text-3xl md:text-4xl font-bold">
      <CountUp end={inView ? 2.2 : 0} duration={2} decimals={1} suffix="x" />
    </h2>
    <p className="text-sm text-white/80">Conversion lift</p>
  </div>
  <div>
    <Clock className="mx-auto mb-2 text-[#73A6E4] w-8 h-8" />
    <h2 className="text-3xl md:text-4xl font-bold">
      <CountUp end={inView ? 11 : 0} duration={2} suffix="+" />
    </h2>
    <p className="text-sm text-white/80">Years of CX experience</p>
  </div>
</div>

      </section>

      {/* Notebook paper section */}
      <section className="relative bg-white text-[#0D0D0D] py-24 px-6 sm:px-10">
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-visible">
          {/* Notebook lines - light blue */}
          <div
            className="w-full h-full bg-[length:100%_5rem] bg-repeat-y"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent, transparent 4.8rem, rgba(147,197,253,0.4) 5rem)",
            }}
          ></div>
          {/* Red margin line */}
          <div className="absolute left-[40px] top-0 w-[2px] h-full bg-red-400 opacity-40"></div>
          {/* Spiral rings - rounder and spaced */}
          <div className="absolute top-0 left-[16px] flex flex-col gap-y-[5rem] h-full justify-around">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-6 h-6 bg-gray-400 opacity-20 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* The Scribbyl Story Section */}
        <div className="max-w-3xl mx-auto relative z-10 shadow-xl rounded-lg bg-white p-8">
          <div className="inline-block relative">
            <h2 className="text-4xl font-marker font-extrabold text-[#0D0D0D] mb-2 -rotate-1">
              The Scribbyl Story
            </h2>
            <div className="relative w-full max-w-fit">
              <img
                src={ScribbleUnderline}
                alt="Underline"
                className="w-full max-w-full h-4 mt-1 mb-4"
              />
            </div>
          </div>

          <h3 className="text-xl text-[#395577] font-semibold mb-6">
            It's 2019. Everyone is online. No one is aligned.
          </h3>
          <p className="text-lg leading-relaxed font-inter">
            Social is exploding. eComm is booming. Brands are sprinting to keep up. Traffic is
            pouring in—yet most teams still don't know what's driving it.
          </p>
          <p className="text-lg leading-relaxed font-inter font-semibold">I started scribbling.</p>
          <p className="text-lg leading-relaxed font-inter">
            Dashboards, social media activity, customer behavior–trying to make sense of it all.
          </p>
          <p className="text-lg leading-relaxed font-inter">
            What I needed didn't exist:{" "}
            <em>
              a single place to see what's working, what's broken, and what to fix first.
            </em>
          </p>
          <p className="text-lg leading-relaxed font-inter">
            <span className="font-semibold">So I built it. </span>
          </p>
          <p className="text-lg leading-relaxed font-inter">
            Scribbyl is what happens when you stop scribbling and start seeing clearly.
          </p>
        </div>
      </section>

      {/* Founder section */}
      <section>
        <Founder />
      </section>
    </div>
  );
}
