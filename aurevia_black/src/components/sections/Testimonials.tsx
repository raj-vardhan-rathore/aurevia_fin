import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink-950 px-6 py-32 sm:px-10 lg:px-14 lg:py-36">
      <Image
        src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover opacity-[0.14]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/90 to-ink-950" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-12">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.author} delay={i * 0.1}>
            <figure className="flex h-full flex-col justify-between gap-8">
              <blockquote className="font-display text-xl italic leading-relaxed text-ivory sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="font-body text-xs uppercase tracking-widest2 text-ivory-muted">
                &mdash; {t.author}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
