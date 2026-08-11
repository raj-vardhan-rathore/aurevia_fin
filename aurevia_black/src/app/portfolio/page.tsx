import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { PortfolioGrid } from "@/components/sections/portfolio/PortfolioGrid";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Portfolio — Aurevia",
  description:
    "Forty stories. Twenty industries. One studio. A private gallery of Aurevia engagements — each one a study in restraint, motion, and business outcome.",
};

export default function PortfolioPage() {
  return (
    <main className="relative bg-ink">
      <PageHeader
        chapter="Chapter — Portfolio"
        title="Selected"
        italicWord="work."
        kicker="Forty stories. Twenty industries. One studio."
        blurb="A private gallery of Aurevia engagements — each one a study in restraint, motion, and business outcome. Click any project to open its dossier."
      />
      <PortfolioGrid />
      <Footer />
    </main>
  );
}
