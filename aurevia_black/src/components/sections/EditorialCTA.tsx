import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface EditorialCTAProps {
  lead: string;
  emphasis: string;
  ctaLabel: string;
  href?: string;
}

/**
 * The quiet, centered close used on Services, Studio, and Portfolio —
 * a soft gold glow behind an oversized headline with one italic word,
 * then a single link forward to Contact.
 */
export function EditorialCTA({ lead, emphasis, ctaLabel, href = "/contact" }: EditorialCTAProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[80px]"
      />
      <div className="relative z-10 mx-auto max-w-[720px] px-6 text-center">
        <Reveal>
          <h2 className="font-display text-[13vw] leading-[0.98] text-ivory md:text-[80px]">
            {lead} <em className="italic text-gold">{emphasis}</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href={href}
            className="group relative mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-[0.72rem] uppercase tracking-[0.22em] text-ink transition-all duration-500 ease-luxury hover:bg-gold-soft"
          >
            <span className="relative z-10">{ctaLabel}</span>
            <ArrowUpRight
              size={16}
              strokeWidth={1.2}
              className="relative z-10 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
