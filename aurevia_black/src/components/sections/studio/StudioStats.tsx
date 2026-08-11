"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { STUDIO_STATS } from "@/lib/studio-data";
import { EASE_EDITORIAL } from "@/lib/motion";
import { Reveal } from "@/components/ui/Reveal";
import type { StudioStat } from "@/types";

function Counter({ end, suffix, label, i }: StudioStat & { i: number }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, end, {
      duration: 2,
      ease: EASE_EDITORIAL,
      onUpdate: (v) => setVal(Math.round(v)),
      delay: i * 0.08,
    });
    return () => controls.stop();
  }, [inView, end, i]);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="font-display text-[12vw] leading-[0.9] text-ivory md:text-[80px]">
        {val}
        <span className="text-gold">{suffix}</span>
      </span>
      <span className="mt-3 font-body text-[11px] uppercase tracking-widest2 text-ivory-muted">
        {label}
      </span>
    </div>
  );
}

export function StudioStats() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <Reveal>
          <span className="mb-8 block font-body text-[0.7rem] uppercase tracking-widest2 text-gold">
            By the numbers
          </span>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4">
          {STUDIO_STATS.map((stat, i) => (
            <Counter key={stat.label} {...stat} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
