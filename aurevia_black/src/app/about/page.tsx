import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Principles } from "@/components/sections/studio/Principles";
import { InteractiveRoadmap } from "@/components/sections/studio/InteractiveRoadmap";
import { StudioStats } from "@/components/sections/studio/StudioStats";
import { FounderCard } from "@/components/sections/studio/FounderCard";
import { EditorialCTA } from "@/components/sections/EditorialCTA";
import { Reveal } from "@/components/ui/Reveal";
import { Footer } from "@/components/layout/Footer";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Meet Aurevia, a digital growth studio in Indore, India combining strategy, design, technology, and thoughtful digital systems.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Aurevia",
    description: "Meet Aurevia, a digital growth studio in Indore, India combining strategy, design, technology, and thoughtful digital systems.",
    url: "/about",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "About Aurevia",
    description: "Meet Aurevia, a digital growth studio in Indore, India combining strategy, design, technology, and thoughtful digital systems.",
    images: ["/opengraph-image"],
  },
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
                Aurevia is a digital growth company based in Indore, India. We help businesses
                improve their digital presence through strategy, design, technology, and digital
                systems that make customer journeys clearer and more useful.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                We work with businesses that need their online presence to do more than look
                considered: it should support visibility, enquiries, bookings, and revenue.
                Every engagement connects brand decisions with the systems behind them.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p>
                Our belief is that a website is a room. It should be composed, not configured —
                and built with the clarity to grow with the business.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-950 px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <article>
            <h2 className="font-display text-3xl text-ivory">What Aurevia does</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-ivory-muted">
              We shape digital growth systems: the strategy, design, technology, and operational
              details that help a business show up clearly online.
            </p>
          </article>
          <article>
            <h2 className="font-display text-3xl text-ivory">Who we help</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-ivory-muted">
              Aurevia works with businesses that want a stronger digital presence and more
              considered customer journeys, from first impression to enquiry or booking.
            </p>
          </article>
          <article>
            <h2 className="font-display text-3xl text-ivory">How we are different</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-ivory-muted">
              We join brand craft with practical systems, so the visible experience and the work
              behind it move toward the same business outcome.
            </p>
          </article>
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
