"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { EASE_EDITORIAL } from "@/lib/motion";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { lenis } = useLenis();

  useEffect(() => {
    if (!project) return;

    // Robust freeze: position:fixed on the body (rather than just
    // overflow:hidden) blocks every path back to background scroll —
    // wheel, touch, keyboard, and programmatic — and, unlike overflow
    // alone, doesn't let the page silently jump to the top. The exact
    // scroll offset is captured here and restored on close, and every
    // property this touches is restored from what it actually was
    // beforehand, so repeated open/close cycles never accumulate state.
    const scrollY = window.scrollY;
    const body = document.body;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    // Freezes Lenis's own internal scroll state/RAF loop while the modal
    // is open — but this is NOT what lets wheel scrolling work inside the
    // modal. Verified directly in Lenis's source (node_modules/lenis/dist/
    // lenis.mjs): while `isStopped` is true, Lenis's wheel handler still
    // calls `event.preventDefault()` on every wheel event site-wide before
    // returning — it doesn't release the event back to the browser. What
    // actually lets the modal scroll natively is the `data-lenis-prevent`
    // attribute on the modal's scroll container below, which is checked
    // *before* the isStopped branch and makes Lenis skip that element
    // (and its children) entirely, regardless of stopped state.
    lenis?.stop();

    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);

      lenis?.start();
      window.removeEventListener("keydown", onEsc);
    };
  }, [project, onClose, lenis]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          data-lenis-prevent
          className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto overscroll-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
        >
          <motion.div
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />

          <button
            onClick={onClose}
            className="fixed right-6 top-6 z-[95] inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-ink-900/90 text-ivory shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)] backdrop-blur transition-all duration-500 hover:border-gold hover:text-gold md:right-10 md:top-10"
            aria-label="Close"
          >
            <X size={18} strokeWidth={1.2} />
          </button>

          <motion.div
            layoutId={`card-${project.slug}`}
            className="relative z-10 my-8 w-[min(1200px,94vw)] overflow-hidden rounded-[28px] bg-ink-900 border border-line"
            initial={{ y: 40, opacity: 0.9 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.8, ease: EASE_EDITORIAL }}
          >
            {/* Hero desktop mockup */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.desktop}
                alt={project.title}
                fill
                sizes="(min-width: 1200px) 1200px, 94vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
              <div className="absolute -bottom-6 right-6 hidden aspect-[9/16] w-40 overflow-hidden rounded-[24px] border-[6px] border-ink shadow-2xl md:right-16 md:block md:w-48">
                <Image src={project.mobile} alt="" fill sizes="192px" className="object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-8 px-6 pb-16 pt-12 md:gap-16 md:px-16 md:pt-20">
              <div className="col-span-12 md:col-span-5">
                <div className="mb-3 font-body text-[0.7rem] uppercase tracking-widest2 text-gold">
                  {project.industry}
                </div>
                <h2 className="font-display text-[48px] leading-[1] text-ivory md:text-[64px]">
                  {project.title}
                </h2>
                <p className="mt-6 max-w-[420px] font-body text-base leading-[1.7] text-ivory-muted">
                  {project.oneLiner}
                </p>

                <div className="mt-10 space-y-6 text-[13px]">
                  <div>
                    <div className="mb-1 font-body text-[10px] uppercase tracking-widest2 text-ivory-muted">
                      Technology
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-line px-3 py-1 font-body text-[11px] uppercase tracking-widest2 text-ivory/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 font-body text-[10px] uppercase tracking-widest2 text-ivory-muted">
                      Motion Highlights
                    </div>
                    <div className="font-body text-ivory/80">{project.motion}</div>
                  </div>
                  <div>
                    <div className="mb-1 font-body text-[10px] uppercase tracking-widest2 text-ivory-muted">
                      Business Impact
                    </div>
                    <div className="font-display text-[22px] italic leading-tight text-gold">
                      {project.impact}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-7">
                <div className="mb-3 font-body text-[0.7rem] uppercase tracking-widest2 text-gold">
                  Overview
                </div>
                <p className="font-body text-base leading-[1.75] text-ivory/85">
                  {project.overview}
                </p>

                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <div className="mb-3 font-body text-[0.7rem] uppercase tracking-widest2 text-gold">
                      Challenge
                    </div>
                    <p className="font-body text-sm leading-[1.7] text-ivory-muted">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="mb-3 font-body text-[0.7rem] uppercase tracking-widest2 text-gold">
                      Objectives
                    </div>
                    <ul className="space-y-2">
                      {project.objectives.map((o) => (
                        <li
                          key={o}
                          className="flex items-start gap-3 font-body text-sm leading-[1.6] text-ivory/85"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="mb-3 font-body text-[0.7rem] uppercase tracking-widest2 text-gold">
                    Our Approach
                  </div>
                  <p className="font-body text-[15px] leading-[1.75] text-ivory/85">
                    {project.approach}
                  </p>
                </div>

                {/* Gallery */}
                <div className="mt-12 grid grid-cols-3 gap-3">
                  {project.gallery.map((g, gi) => (
                    <motion.div
                      key={gi}
                      className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px]"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease: EASE_EDITORIAL, delay: 0.3 + gi * 0.08 }}
                    >
                      <Image
                        src={g}
                        alt=""
                        fill
                        loading="lazy"
                        sizes="(min-width: 768px) 220px, 33vw"
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="group mt-12 inline-flex items-center gap-2 rounded-full border border-ivory/25 px-8 py-4 font-body text-[0.72rem] uppercase tracking-[0.22em] text-ivory transition-all duration-500 ease-luxury hover:border-gold/70 hover:text-gold"
                >
                  Start a similar project
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.2}
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
