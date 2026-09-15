import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceRoadmap } from "@/components/sections/services/ServiceRoadmap";
import { PracticeGrid } from "@/components/sections/services/PracticeGrid";
import { EditorialCTA } from "@/components/sections/EditorialCTA";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Digital Growth Services",
  description:
    "Explore Aurevia's strategy, design, technology, website, software, automation, and brand services for stronger digital customer journeys and business growth.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Aurevia Digital Growth Services",
    description: "Explore Aurevia's strategy, design, technology, website, software, automation, and brand services for stronger digital customer journeys and business growth.",
    url: "/services",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Aurevia Digital Growth Services",
    description: "Explore Aurevia's strategy, design, technology, website, software, automation, and brand services for stronger digital customer journeys and business growth.",
    images: ["/opengraph-image"],
  },
};

export default function ServicesPage() {
  return (
    <main className="relative bg-ink">
      <PageHeader
        chapter="Chapter — Services"
        title="We don't build websites."
        italicWord="We build digital businesses."
        blurb="A single studio, fourteen stages of a growth journey. Each engagement begins as a conversation and ends as a compounding asset."
      />
      <section className="border-b border-line bg-ink-950 px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-3xl leading-tight text-ivory md:text-4xl">
            Digital growth is a connected system, not a collection of deliverables.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <article>
              <h3 className="font-display text-2xl text-gold">Strategy &amp; digital presence</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ivory-muted">
                Research, positioning, customer journeys, and websites that give a business a
                clearer role in the market.
              </p>
            </article>
            <article>
              <h3 className="font-display text-2xl text-gold">Design &amp; technology</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ivory-muted">
                Brand identity, interfaces, custom software, and digital experiences built for
                both attention and everyday use.
              </p>
            </article>
            <article>
              <h3 className="font-display text-2xl text-gold">Business systems &amp; growth</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ivory-muted">
                Automation, analytics, optimisation, and ongoing improvements that help turn
                online visibility into better enquiries, bookings, and revenue.
              </p>
            </article>
          </div>
        </div>
      </section>
      <ServiceRoadmap />
      <PracticeGrid />
      <EditorialCTA
        lead="Ready to begin the"
        emphasis="journey?"
        ctaLabel="Start your project"
      />
      <Footer />
    </main>
  );
}
