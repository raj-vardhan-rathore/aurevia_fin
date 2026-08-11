"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  LayoutGrid,
  TerminalSquare,
  Sparkles,
  Feather,
  Smartphone,
  Server,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import type { Service } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const ICONS: Record<Service["icon"], LucideIcon> = {
  layout: LayoutGrid,
  terminal: TerminalSquare,
  sparkles: Sparkles,
  feather: Feather,
  smartphone: Smartphone,
  server: Server,
};

export function FeaturedServices() {
  return (
    <section className="relative bg-ink px-6 py-32 sm:px-10 lg:px-14 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="A full atelier, called on as needed."
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.06}>
                <Link href={service.href} className="group block h-full">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden bg-ink p-8 transition-colors duration-500 group-hover:bg-ink-900 lg:p-10"
                  >
                    {/* hairline that draws itself in gold on hover */}
                    <span className="absolute inset-x-0 top-0 h-px bg-line" />
                    <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-700 ease-luxury group-hover:scale-x-100" />

                    {/* soft radial glow for depth on hover */}
                    <span className="pointer-events-none absolute -top-16 right-0 h-48 w-48 rounded-full bg-gold/0 blur-3xl transition-colors duration-700 group-hover:bg-gold/10" />

                    <div className="relative flex items-start justify-between">
                      <Icon
                        className="h-6 w-6 text-gold/80 transition-transform duration-500 group-hover:-translate-y-0.5"
                        strokeWidth={1.25}
                      />
                      <ArrowUpRight
                        className="h-5 w-5 shrink-0 text-ivory-muted transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                        strokeWidth={1.25}
                      />
                    </div>

                    <div className="relative mt-10">
                      <h3 className="font-display text-2xl text-ivory transition-colors duration-500 group-hover:text-gold">
                        {service.title}
                      </h3>
                      <p className="mt-4 font-body text-sm leading-relaxed text-ivory-muted">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
