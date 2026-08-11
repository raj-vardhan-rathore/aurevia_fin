"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WORKFLOW } from "@/lib/studio-data";
import { WORKFLOW_ICONS } from "@/lib/icons";
import { EASE_EDITORIAL } from "@/lib/motion";
import { Reveal } from "@/components/ui/Reveal";
import type { WorkflowStep } from "@/types";

function RoadmapNode({
  step,
  i,
  isActive,
  hasPassed,
}: {
  step: WorkflowStep;
  i: number;
  isActive: boolean;
  hasPassed: boolean;
}) {
  const Icon = WORKFLOW_ICONS[step.icon];
  const isEven = i % 2 === 0;

  return (
    <li
      data-active={isActive ? "true" : "false"}
      className="relative grid grid-cols-12 items-center gap-6"
    >
      {/* Node dot column */}
      <div className="col-span-12 flex justify-start pl-1 md:col-span-2 md:col-start-6 md:justify-center md:pl-0">
        <div className="relative">
          {isActive && (
            <>
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full border border-gold/55"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full border border-gold/40"
                initial={{ scale: 1, opacity: 0.35 }}
                animate={{ scale: 2.8, opacity: 0 }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
              />
              <div aria-hidden className="pointer-events-none absolute inset-0">
                {Array.from({ length: 6 }).map((_, k) => {
                  const a = (k / 6) * Math.PI * 2;
                  return (
                    <motion.span
                      key={k}
                      className="absolute left-1/2 top-1/2 h-[3px] w-[3px] rounded-full bg-gold"
                      initial={{ x: 0, y: 0, opacity: 1 }}
                      animate={{ x: Math.cos(a) * 42, y: Math.sin(a) * 42, opacity: 0 }}
                      transition={{ duration: 1.4, ease: "easeOut" }}
                    />
                  );
                })}
              </div>
            </>
          )}

          <motion.div
            animate={
              isActive
                ? {
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 8px 30px -12px rgba(201,169,97,0.35)",
                      "0 14px 50px -12px rgba(201,169,97,0.75)",
                      "0 8px 30px -12px rgba(201,169,97,0.35)",
                    ],
                  }
                : hasPassed
                ? { scale: 1, boxShadow: "0 6px 24px -14px rgba(201,169,97,0.35)" }
                : { scale: 1, boxShadow: "0 4px 20px -12px rgba(0,0,0,0.4)" }
            }
            transition={{ duration: 3.4, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
            className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border bg-ink-900 transition-colors duration-700 ${
              isActive
                ? "border-gold text-gold"
                : hasPassed
                ? "border-gold/50 text-gold/80"
                : "border-line text-ivory-muted/60"
            }`}
          >
            <Icon size={22} strokeWidth={1.2} />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-body text-[10px] tracking-widest2 text-ivory-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Text column */}
      <motion.div
        animate={
          isActive
            ? { opacity: 1, x: 0 }
            : hasPassed
            ? { opacity: 0.7, x: 0 }
            : { opacity: 0.3, x: isEven ? -10 : 10 }
        }
        transition={{ duration: 0.9, ease: EASE_EDITORIAL }}
        className={`col-span-12 pl-[76px] md:col-span-4 md:pl-0 ${
          isEven ? "md:order-first md:pr-8 md:text-right" : "md:col-start-9 md:pl-8 md:text-left"
        }`}
      >
        <h3
          className={`font-display text-[30px] leading-[1.05] transition-colors duration-700 md:text-[38px] ${
            isActive ? "text-ivory" : hasPassed ? "text-ivory/80" : "text-ivory/40"
          }`}
        >
          {step.step}
        </h3>
        <p
          className={`mt-2 max-w-[320px] font-body text-sm leading-relaxed transition-colors duration-700 md:max-w-none ${
            isActive ? "text-ivory-muted" : "text-ivory-muted/50"
          }`}
        >
          {step.detail}
        </p>
      </motion.div>
    </li>
  );
}

export function InteractiveRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 40%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [activeIndex, setActiveIndex] = useState(-1);
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      if (v <= 0) {
        setActiveIndex(-1);
        return;
      }
      if (v >= 1) {
        setActiveIndex(WORKFLOW.length - 1);
        return;
      }
      const idx = Math.min(WORKFLOW.length - 1, Math.floor(v * WORKFLOW.length));
      setActiveIndex(idx);
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="mb-16 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <span className="font-body text-[0.7rem] uppercase tracking-widest2 text-gold">
                Workflow
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-3 font-display text-[10vw] leading-[0.98] text-ivory md:text-[64px]">
                Ten movements.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="max-w-[420px] font-body text-[15px] leading-[1.7] text-ivory-muted md:pt-6">
              Every engagement follows the same score — but never the same tempo. Scroll through
              the journey below.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-[33px] top-0 h-full w-px bg-line md:left-1/2 md:-translate-x-px" />
          <motion.div
            style={{ height: lineHeight }}
            className="pointer-events-none absolute left-[33px] top-0 w-px md:left-1/2 md:-translate-x-px"
          >
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(201,169,97,0) 0%, rgba(201,169,97,0.9) 30%, rgba(201,169,97,0.9) 70%, rgba(201,169,97,0) 100%)",
                boxShadow: "0 0 24px rgba(201,169,97,0.55)",
              }}
            />
          </motion.div>

          <ol className="relative space-y-14 md:space-y-20">
            {WORKFLOW.map((step, i) => (
              <RoadmapNode
                key={step.step}
                step={step}
                i={i}
                isActive={i === activeIndex}
                hasPassed={i < activeIndex}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
