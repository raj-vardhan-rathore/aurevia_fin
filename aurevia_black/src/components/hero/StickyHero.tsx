"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSequence, type SequenceHandle } from "@/components/scroll-sequence/ScrollSequence";
import { ScrollStoryText, type StoryTextHandle } from "@/components/ui/ScrollStoryText";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_REVEAL } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export const ROSE_FRAME_COUNT = 158;

const RELEASE_START = 0.86;

const STORY_LINES = [
  "Every masterpiece begins unseen.",
  "We reveal digital potential.",
  "Crafting Digital Presence Beyond Ordinary.",
  "Every detail engineered for impact.",
];

const STORY_THRESHOLDS = [0, 0.24, 0.5, 0.76];

export function StickyHero() {
  const wrapperRef = useRef<HTMLElement>(null);
  const roseWrapRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const roseHandle = useRef<SequenceHandle>(null);
  const storyHandle = useRef<StoryTextHandle>(null);
  const prefersReducedMotion = useReducedMotion();

  // Fade in the eyebrow + CTAs the moment the landing gate hands off,
  // rather than on a generic "scrolled into view" trigger (the hero is
  // already the first thing visible, so a scroll-position reveal would
  // fire before the cinematic handoff finishes).
  useEffect(() => {
    const intro = introRef.current;
    if (!intro) return;

    if (prefersReducedMotion) {
      gsap.set(intro, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(intro, { opacity: 0, y: 24 });

    const reveal = () => {
      gsap.to(intro, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: EASE_REVEAL,
        delay: 0.15,
      });
    };

    window.addEventListener("aurevia:hero-enter", reveal);
    return () => window.removeEventListener("aurevia:hero-enter", reveal);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const roseWrap = roseWrapRef.current;
    if (!wrapper) return;

    if (prefersReducedMotion) {
      const settledFrame = (ROSE_FRAME_COUNT - 1) * 0.62;
      roseHandle.current?.setFrame(settledFrame);
      storyHandle.current?.setProgress(0.62);
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.4,
      onUpdate: (self) => {
        const p = self.progress;
        roseHandle.current?.setFrame(p * (ROSE_FRAME_COUNT - 1));
        storyHandle.current?.setProgress(p);

        if (roseWrap) {
          const releaseProgress =
            p < RELEASE_START ? 0 : (p - RELEASE_START) / (1 - RELEASE_START);
          gsap.set(roseWrap, {
            opacity: 1 - releaseProgress,
            y: releaseProgress * 48,
          });
        }
      },
    });

    return () => trigger.kill();
  }, [prefersReducedMotion]);

  return (
    <section ref={wrapperRef} className="relative h-[380vh] bg-ink">
      <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden lg:flex-row">
        <div
          ref={introRef}
          className="relative z-10 flex h-[46vh] w-full shrink-0 flex-col justify-center gap-5 overflow-hidden px-6 pb-6 pt-24 sm:gap-6 sm:px-10 sm:pt-28 lg:h-full lg:w-1/2 lg:flex-1 lg:gap-8 lg:px-16 lg:py-0"
        >
          <span className="font-body text-xs uppercase tracking-widest2 text-gold">
            Aurevia &mdash; Digital Atelier
          </span>

          <ScrollStoryText
            ref={storyHandle}
            lines={STORY_LINES}
            thresholds={STORY_THRESHOLDS}
            className="min-h-[3.9em] max-w-xl sm:min-h-[3.2em] lg:min-h-[2.7em]"
            lineClassName="font-display text-[1.9rem] leading-[1.08] text-ivory sm:text-4xl lg:text-6xl xl:text-[4.2rem]"
          />

          <p className="hidden max-w-md font-body text-base leading-relaxed text-ivory-muted sm:block sm:text-lg">
            We design and build digital experiences for brands that refuse
            to be ordinary &mdash; considered enough to feel rare, precise
            enough to feel inevitable.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1 lg:gap-5 lg:pt-2">
            <Button variant="primary">Begin a Project</Button>
            <Button variant="secondary">View Our Work</Button>
          </div>
        </div>

        <div
          ref={roseWrapRef}
          className="relative h-[54vh] w-full shrink-0 lg:h-full lg:w-1/2 lg:flex-1"
        >
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink via-transparent to-transparent lg:bg-gradient-to-l" />
          <ScrollSequence
            ref={roseHandle}
            basePath="/sequences/rose"
            frameCount={ROSE_FRAME_COUNT}
            label="A black rose blooming, scroll-driven"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
