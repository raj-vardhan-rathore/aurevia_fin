import { Reveal } from "@/components/ui/Reveal";
import { absoluteUrl } from "@/lib/brand";

/**
 * A quiet founder credit for the About page. No personal photograph is
 * used — a deliberate monogram treatment stands in its place, styled as
 * part of the composition rather than as a missing/broken image.
 */
export function FounderCard() {
  return (
    <section className="border-t border-line bg-ink px-6 py-24 sm:px-10 md:py-32 lg:px-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": absoluteUrl("/about#rajvardhan-rathore"),
            name: "Rajvardhan Rathore",
            jobTitle: "Founder & Creative Director",
            worksFor: { "@id": absoluteUrl("/#organization") },
            url: absoluteUrl("/about"),
          }),
        }}
      />
      <div className="mx-auto max-w-7xl">
        <article className="grid grid-cols-12 items-center gap-10 md:gap-16">
          <Reveal className="col-span-12 flex justify-center md:col-span-4 md:justify-start">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-gold/40 bg-ink-900 md:h-48 md:w-48">
              <span className="font-display text-5xl italic tracking-[0.02em] text-gold md:text-6xl">
                RR
              </span>
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="col-span-12 text-center md:col-span-8 md:text-left"
          >
            <span className="font-body text-[0.7rem] uppercase tracking-widest2 text-gold">
              Leadership
            </span>
            <h3 className="mt-3 font-display text-3xl text-ivory md:text-4xl">
              Rajvardhan Rathore
            </h3>
            <p className="mt-2 font-body text-sm uppercase tracking-widest2 text-ivory-muted">
              Founder &amp; Creative Director, Aurevia
            </p>
          </Reveal>
        </article>
      </div>
    </section>
  );
}
