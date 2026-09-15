import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { PortfolioGrid } from "@/components/sections/portfolio/PortfolioGrid";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "View selected Aurevia digital design and technology work, created to give ambitious businesses a more distinctive and effective online presence.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Aurevia Selected Work",
    description: "View selected Aurevia digital design and technology work, created to give ambitious businesses a more distinctive and effective online presence.",
    url: "/portfolio",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Aurevia Selected Work",
    description: "View selected Aurevia digital design and technology work, created to give ambitious businesses a more distinctive and effective online presence.",
    images: ["/opengraph-image"],
  },
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
