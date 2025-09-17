import gmLogo from "../assets/images/gmlogo.svg";
import idLogo from "../assets/images/idlogo.svg";
import metaLogo from "../assets/images/metalogo.svg";
import strobelogo from "../assets/images/strobelogo.svg";
import tqlLogo from "../assets/images/tqllogo.svg";

const logos = [
  { src: gmLogo, alt: "General Motors" },
  { src: idLogo, alt: "Interior Define" },
  { src: metaLogo, alt: "Meta" },
  { src: strobelogo, alt: "Strobe" },
  { src: tqlLogo, alt: "Total Quality Logistics" },
];

export default function ScrollBar() {
  return (
    <section className="py-6 bg-[#FAF9F6] w-full">
      <div className="overflow-hidden relative">
        <div className="animate-marquee flex gap-20 items-center w-max px-6">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition duration-300 ease-in-out filter grayscale"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
