import Image from "next/image";
import Link from "next/link";
import { VALUES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyAurevia() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-32 sm:px-10 lg:px-14 lg:py-40">
      <Image
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover opacity-[0.12]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/92 to-ink" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Aurevia"
          title="Three principles, never compromised."
          align="center"
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {VALUES.map((value, i) => (
            <Reveal key={value.index} delay={i * 0.1}>
              <div className="flex h-full flex-col gap-4 border-t border-line pt-8 text-center sm:text-left">
                <h3 className="font-display text-2xl text-gold">
                  {value.index}
                </h3>
                <p className="font-body text-sm leading-relaxed text-ivory-muted">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex justify-center">
            <Link
              href="/about"
              className="font-body text-xs uppercase tracking-widest2 text-ivory transition-colors duration-500 hover:text-gold"
            >
              More About Aurevia &nbsp;&rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
