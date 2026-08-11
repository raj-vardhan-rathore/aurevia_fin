"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SERVICE_STAGES } from "@/lib/services-data";
import { SERVICE_STAGE_ICONS } from "@/lib/icons";
import { EASE_EDITORIAL } from "@/lib/motion";
import type { ServiceStage } from "@/types";

function Stage({ stage, i }: { stage: ServiceStage; i: number }) {
  const Icon = SERVICE_STAGE_ICONS[stage.icon];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const isEven = i % 2 === 0;

  return (
    <div ref={ref} className="relative grid grid-cols-12 gap-6 py-8 md:gap-10 md:py-14">
      {/* Vertical connector */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-line md:block" />

      {/* Stage node */}
      <div className="col-span-12 flex justify-center md:col-span-2 md:col-start-6">
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE_EDITORIAL, delay: 0.1 }}
          className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-ink-900 text-gold shadow-[0_10px_40px_-20px_rgba(201,169,97,0.55)]"
        >
          <Icon size={22} strokeWidth={1.2} />
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-body text-[10px] uppercase tracking-widest2 text-ivory-muted">
            {String(i + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Stage content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: EASE_EDITORIAL, delay: 0.15 }}
        className={`col-span-12 md:col-span-4 ${
          isEven ? "md:order-first md:text-right" : "md:col-start-9 md:text-left"
        }`}
      >
        <h3 className="font-display text-[36px] leading-[1.05] text-ivory md:text-[42px]">
          {stage.title}
        </h3>
        <p className="mt-3 max-w-[380px] font-body text-[15px] leading-[1.7] text-ivory-muted md:max-w-none">
          {stage.body}
        </p>
      </motion.div>
    </div>
  );
}

export function ServiceRoadmap() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 md:py-24 lg:px-14">
      {SERVICE_STAGES.map((stage, i) => (
        <Stage key={stage.title} stage={stage} i={i} />
      ))}
    </section>
  );
}
