import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";

export function ClosingCTA() {
  return (
    <section
      id="discovery-call"
      className="relative flex flex-col items-center gap-10 overflow-hidden bg-ink px-6 py-32 text-center sm:px-10 lg:py-44"
    >
      <Image
        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover opacity-[0.18]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink" />

      <Reveal className="relative z-10">
        <span className="font-body text-xs uppercase tracking-widest2 text-gold">
          Let&rsquo;s Begin
        </span>
      </Reveal>
      <Reveal delay={0.1} y={32} className="relative z-10">
        <h2 className="max-w-3xl font-display text-4xl leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
          A presence worth having is built once, deliberately.
        </h2>
      </Reveal>
      <Reveal delay={0.2} className="relative z-10">
        <Button variant="primary" size="default">
          Book a Discovery Call
        </Button>
      </Reveal>
    </section>
  );
}
