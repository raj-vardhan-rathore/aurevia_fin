import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceRoadmap } from "@/components/sections/services/ServiceRoadmap";
import { PracticeGrid } from "@/components/sections/services/PracticeGrid";
import { EditorialCTA } from "@/components/sections/EditorialCTA";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Services — Aurevia",
  description:
    "A single studio, fourteen stages of a growth journey. Website design, custom software, AI automation, brand identity, mobile apps, and hosting — for brands that refuse to be ordinary.",
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
