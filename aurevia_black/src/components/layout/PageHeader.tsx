"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE_EDITORIAL } from "@/lib/motion";

interface PageHeaderProps {
  chapter: string;
  title: string;
  italicWord?: string;
  kicker?: string;
  blurb?: string;
}

/**
 * Shared editorial header for every interior page. Keeps typography,
 * spacing, and motion aligned with the homepage hero — same gate-release
 * timing, same gold-on-ink posture, just re-staged for a static page
 * instead of a scroll sequence.
 */
export function PageHeader({ chapter, title, italicWord, kicker, blurb }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-ink pt-40 md:pt-52">
      <Image
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        sizes="100vw"
        priority
        className="pointer-events-none select-none object-cover opacity-[0.1]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 20%, rgba(201,169,97,0.12), transparent 65%), radial-gradient(ellipse 50% 40% at 90% 30%, rgba(110,31,43,0.14), transparent 65%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/80 to-ink" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 sm:px-10 md:pb-28 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_EDITORIAL }}
          className="mb-6 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-ivory/40" />
          <span className="font-body text-[11px] uppercase tracking-widest2 text-ivory-muted">
            {chapter}
          </span>
        </motion.div>

        <h1 className="overflow-hidden font-display text-[15vw] leading-[0.94] text-ivory md:text-[7vw]">
          <motion.span
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease: EASE_EDITORIAL, delay: 0.15 }}
            className="block"
          >
            {title}
            {italicWord && (
              <>
                {" "}
                <em className="italic text-gold">{italicWord}</em>
              </>
            )}
          </motion.span>
        </h1>

        {kicker && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: EASE_EDITORIAL }}
            className="mt-8 font-display text-2xl italic leading-tight text-ivory/80 md:text-[32px] md:leading-[1.15]"
          >
            {kicker}
          </motion.div>
        )}

        {blurb && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1, ease: EASE_EDITORIAL }}
            className="mt-8 max-w-[560px] font-body text-base leading-relaxed text-ivory-muted"
          >
            {blurb}
          </motion.p>
        )}
      </div>
      <div className="mx-auto h-px max-w-7xl bg-line" />
    </header>
  );
}
