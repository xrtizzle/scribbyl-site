//services.js

import ServicesHero from "../components/ServicesHero";
import ServiceHighlights from "../components/ServiceHighlights";
import ServiceTiersExpanded from "../components/ServiceTiersExpanded";
import PowerUpsSection from "../components/PowerUpsSection";
import FinalCTA from "../components/FinalCTA";
import ScrollToHashElement from "../components/ScrollToHashElement";
import QuickWins from "../components/QuickWins";
import QuickWinsExpanded from "../components/QuickWinsExpanded";
import TrackedButton from "../components/TrackedButton";


export default function Services() {
  return (
    <main>
      <ScrollToHashElement />
      <ServicesHero />
      <QuickWinsExpanded/>
      <ServiceHighlights />
     <section className="mb-[-60px]">  <ServiceTiersExpanded /> </section>



      <section className="relative bg-[#F5F5F5] h-[360px] sm:h-[420px] lg:h-[420px]">
              <div className="absolute inset-x-0 -bottom-12 flex justify-center z-10">
                <FinalCTA />
              </div>
            </section>
    
    </main>
  );
}
