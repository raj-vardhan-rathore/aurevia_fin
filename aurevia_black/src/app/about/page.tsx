import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Principles } from "@/components/sections/studio/Principles";
import { InteractiveRoadmap } from "@/components/sections/studio/InteractiveRoadmap";
import { StudioStats } from "@/components/sections/studio/StudioStats";
import { FounderCard } from "@/components/sections/studio/FounderCard";
import { EditorialCTA } from "@/components/sections/EditorialCTA";
import { Reveal } from "@/components/ui/Reveal";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Studio — Aurevia",
  description:
    "A quiet atelier. Aurevia exists because ambitious businesses deserve digital work that feels handmade — even at scale.",
};

export default function AboutPage() {
  return (
    <main className="relative bg-ink">
      <PageHeader
        chapter="Chapter — Studio"
        title="A quiet"
        italicWord="atelier."
        kicker="Aurevia exists because ambitious businesses deserve digital work that feels handmade — even at scale."
        blurb="We are a small studio by design. Fewer engagements. More attention. Deeper craft."
      />

      {/* Why we exist */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-32 lg:px-14">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <span className="font-body text-[0.7rem] uppercase tracking-widest2 text-gold">
                Why we exist
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-3 font-display text-[10vw] leading-[0.98] text-ivory md:text-[64px]">
                To make the internet feel <em className="italic text-gold">handmade</em> again.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 space-y-6 font-body text-base leading-[1.8] text-ivory-muted md:col-span-7">
            <Reveal delay={0.1}>
              <p>
                The web has become fluent in patterns and forgetful of feeling. Templated sites,
                algorithmic layouts, and stock components have made every brand sound like the
                last one. Aurevia was founded to reverse that quietly.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                We take a handful of projects each year. We work with founders and creative
                directors who feel their business deserves the same care they would give a
                boutique physical space — the light, the scent, the pacing, the surprise.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p>Our belief is that a website is a room. And rooms should be composed, not configured.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <FounderCard />
      <Principles />
      <InteractiveRoadmap />
      <StudioStats />
      <EditorialCTA lead="Work with the" emphasis="atelier." ctaLabel="Begin a conversation" />
      <Footer />
    </main>
  );
}
