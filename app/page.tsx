import Hero from "@/components/Hero";
import PopularTests from "@/components/PopularTests";
import { WhyStandOut, AboutHealthPlus, StatsBand } from "@/components/AboutSections";
import { PackagesSection, ProcessSection, FAQ, CTABand } from "@/components/HomeSections";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyStandOut />
      <AboutHealthPlus />
      <StatsBand />
      <PopularTests />
      <PackagesSection />
      <ProcessSection />
      <FAQ />
      <CTABand />
    </main>
  );
}
