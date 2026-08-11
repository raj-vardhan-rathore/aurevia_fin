import { LandingScreen } from "@/components/landing/LandingScreen";
import { StickyHero } from "@/components/hero/StickyHero";
import { PantherSection } from "@/components/panther/PantherSection";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { WhyAurevia } from "@/components/sections/WhyAurevia";
import { Testimonials } from "@/components/sections/Testimonials";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="relative bg-ink">
      <LandingScreen />
      <StickyHero />
      <PantherSection />
      <FeaturedServices />
      <FeaturedWork />
      <WhyAurevia />
      <Testimonials />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
