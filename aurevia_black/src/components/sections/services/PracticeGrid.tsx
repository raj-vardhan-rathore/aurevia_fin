"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PRACTICE_AREAS } from "@/lib/services-data";
import { EASE_EDITORIAL } from "@/lib/motion";
import { Reveal } from "@/components/ui/Reveal";

export function PracticeGrid() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="font-body text-[0.7rem] uppercase tracking-widest2 text-gold">
                Practice
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-3 font-display text-[10vw] leading-[0.98] text-ivory md:text-[72px]">
                What we make.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-[360px] font-body text-[15px] leading-[1.7] text-ivory-muted">
              Fifteen practice areas — each one a chapter of the same story.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 divide-y divide-line border-y border-line md:grid-cols-2 md:divide-x">
          {PRACTICE_AREAS.map((practice, i) => (
            <motion.div
              key={practice}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE_EDITORIAL, delay: (i % 6) * 0.05 }}
              className="group flex cursor-pointer items-center justify-between px-4 py-6 transition-colors duration-500 hover:bg-ink-900 md:px-8 md:py-8"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-body text-[13px] text-ivory-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[22px] leading-tight text-ivory md:text-[26px]">
                  {practice}
                </span>
              </div>
              <ArrowUpRight
                size={18}
                strokeWidth={1.2}
                className="text-ivory-muted transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
