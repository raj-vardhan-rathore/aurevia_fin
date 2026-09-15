"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WORK } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedWork() {
  return (
    <section className="relative bg-ink-950 px-6 py-32 sm:px-10 lg:px-14 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Recent presence, made real."
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {WORK.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Link href="/portfolio" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line bg-ink-900 transition-colors duration-700 group-hover:border-gold/40">
                  <motion.div
                    className="absolute inset-0"
                    whileHover="hover"
                    initial="rest"
                  >
                    <motion.div
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.05 },
                      }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized
                        loading="lazy"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.div
                      variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-ink/30"
                    />
                  </motion.div>
                </div>
                <div className="mt-5 flex items-baseline justify-between">
                  <h3 className="font-display text-xl text-ivory transition-colors duration-500 group-hover:text-gold">
                    {item.title}
                  </h3>
                  <span className="font-body text-xs uppercase tracking-widest2 text-ivory-muted">
                    {item.category}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
