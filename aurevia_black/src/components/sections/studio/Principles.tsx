"use client";

import { motion } from "framer-motion";
import { PRINCIPLES } from "@/lib/studio-data";
import { EASE_EDITORIAL } from "@/lib/motion";
import { Reveal } from "@/components/ui/Reveal";

export function Principles() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="mb-14 flex flex-col gap-4 md:mb-20">
          <Reveal>
            <span className="font-body text-[0.7rem] uppercase tracking-widest2 text-gold">
              Our Design Philosophy
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-[10vw] leading-[0.98] text-ivory md:text-[72px]">
              Four quiet <em className="italic text-gold">rules.</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: EASE_EDITORIAL, delay: i * 0.08 }}
              className="rounded-[24px] border border-line bg-ink p-8 md:p-10"
            >
              <div className="flex items-center gap-4">
                <span className="font-body text-xs uppercase tracking-widest2 text-gold">
                  Ch. {p.n}
                </span>
                <span className="h-px w-12 bg-gold/50" />
              </div>
              <h3 className="mt-6 font-display text-[32px] leading-[1.1] text-ivory md:text-[38px]">
                {p.title}
              </h3>
              <p className="mt-4 font-body text-[15px] leading-[1.7] text-ivory-muted">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
