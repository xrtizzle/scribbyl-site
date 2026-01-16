import { useEffect } from "react";
import ScribbleUnderline from "../assets/images/scribble-underline.svg";
import Founder from "../components/Founder";
import ScribbylAboutHero from "../assets/images/ScribbylAboutHero.png";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="bg-[#0D0D0D] text-white">
      {/* Hero Section Matching Services */}
<section
  className="relative bg-[#F5F5F5] text-[#fffff] px-4 sm:px-6 md:px-10 overflow-hidden h-[100vh] min-h-[700px] flex items-center"
>
  <div
    className="absolute inset-0 bg-no-repeat bg-right bg-cover z-0"
    style={{ backgroundImage: `url(${ScribbylAboutHero})` }}
    aria-hidden="true"
  />

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
    <div>
      <p className="uppercase text-sm tracking-wider text-[#A3CCFF] mb-2 font-body font-medium">
        About Us
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6">
        The Studio Behind the Growth
      </h1>
      <p className="text-base sm:text-lg text-[#DEE0E4] font-body mb-8 max-w-xl">
        At Scribbyl, we connect customer experience, data, and design to power brands built to scale.
      </p>
      <a
        href="#story"
        className="inline-block bg-[#73A6E4] text-white text-base font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#567EAF] transition"
      >
        Meet the Team ↗
      </a>
    </div>
    <div className="hidden md:block" />
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
