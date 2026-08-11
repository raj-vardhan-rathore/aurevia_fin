"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE_EDITORIAL } from "@/lib/motion";
import type { Project } from "@/types";
import type { MouseEvent } from "react";

interface ProjectCardProps {
  project: Project;
  i: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, i, onOpen }: ProjectCardProps) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 100, damping: 18 });
  const sry = useSpring(ry, { stiffness: 100, damping: 18 });
  const smx = useSpring(mx, { stiffness: 120, damping: 20 });
  const smy = useSpring(my, { stiffness: 120, damping: 20 });

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 5);
    rx.set(-py * 5);
    mx.set(px * 14);
    my.set(py * 14);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.button
      layout
      layoutId={`card-${project.slug}`}
      onClick={() => onOpen(project)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: EASE_EDITORIAL, delay: (i % 6) * 0.05 }}
      className="group relative overflow-hidden rounded-[24px] border border-line bg-ink-900 text-left transition-shadow duration-700 hover:shadow-[0_40px_100px_-50px_rgba(201,169,97,0.3)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div style={{ x: smx, y: smy }} className="absolute -inset-3">
          <Image
            src={project.desktop}
            alt={project.title}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-luxury group-hover:scale-[1.06]"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 font-body text-[10px] uppercase tracking-widest2 text-ivory backdrop-blur">
          {project.industry}
        </span>
      </div>

      <div className="flex items-start justify-between gap-4 p-6 md:p-7">
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-3 font-body text-[10px] uppercase tracking-widest2 text-ivory-muted">
            <span>{project.year}</span>
          </div>
          <h3 className="truncate font-display text-[26px] leading-tight text-ivory md:text-[28px]">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 font-body text-[13px] leading-[1.6] text-ivory-muted">
            {project.oneLiner}
          </p>
        </div>
        <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
          <ArrowUpRight size={14} strokeWidth={1.2} />
        </span>
      </div>
    </motion.button>
  );
}
