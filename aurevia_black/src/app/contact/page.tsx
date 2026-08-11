import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { AlternateContact } from "@/components/sections/contact/AlternateContact";
import { MarqueeRow } from "@/components/ui/MarqueeRow";
import { QUOTES_LEFT, QUOTES_RIGHT } from "@/lib/quotes";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact — Aurevia",
  description:
    "Tell us about your vision — we reply personally within two business days. We accept a handful of engagements each quarter.",
};

export default function ContactPage() {
  return (
    <main className="relative bg-ink">
      <PageHeader
        chapter="Chapter — Contact"
        title="Begin the"
        italicWord="brief."
        kicker="Tell us about your vision — we reply personally within two business days."
        blurb="We accept a handful of engagements each quarter. The more you share below, the faster we can propose the right path forward."
      />

      <section className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 pb-24 sm:px-10 md:gap-16 md:pb-32 lg:px-14">
        <div className="col-span-12 md:col-span-4">
          <AlternateContact />
        </div>
        <div className="col-span-12 md:col-span-8">
          <ContactForm />
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-line bg-ink-950 py-14 md:py-20">
        <div className="space-y-4">
          <MarqueeRow items={QUOTES_LEFT} />
          <MarqueeRow items={QUOTES_RIGHT} reverse />
        </div>
      </section>

      <Footer />
    </main>
  );
}
