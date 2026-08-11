"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSequence, type SequenceHandle } from "@/components/scroll-sequence/ScrollSequence";
import { ScrollStoryText, type StoryTextHandle } from "@/components/ui/ScrollStoryText";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export const PANTHER_FRAME_COUNT = 246;

const STORY_LINES = ["Precision.", "Craftsmanship.", "Presence.", "Digital Luxury."];
const STORY_THRESHOLDS = [0, 0.28, 0.56, 0.82];
const EDGE_FADE = 0.08;

/**
 * A single, quiet transition between the Hero and the rest of the page: the
 * panther walks across a fixed camera, entirely driven by scroll, and never
 * reappears elsewhere on the homepage.
 */
export function PantherSection() {
  const wrapperRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pantherHandle = useRef<SequenceHandle>(null);
  const storyHandle = useRef<StoryTextHandle>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const stage = stageRef.current;
    if (!wrapper) return;

    if (prefersReducedMotion) {
      pantherHandle.current?.setFrame((PANTHER_FRAME_COUNT - 1) * 0.5);
      storyHandle.current?.setProgress(0.5);
      if (stage) gsap.set(stage, { opacity: 1 });
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        const p = self.progress;
        pantherHandle.current?.setFrame(p * (PANTHER_FRAME_COUNT - 1));
        storyHandle.current?.setProgress(p);

        if (stage) {
          const fadeIn = gsap.utils.clamp(0, 1, p / EDGE_FADE);
          const fadeOut = gsap.utils.clamp(0, 1, (1 - p) / EDGE_FADE);
          gsap.set(stage, { opacity: Math.min(fadeIn, fadeOut) });
        }
      },
    });

    return () => trigger.kill();
  }, [prefersReducedMotion]);

  return (
    <section ref={wrapperRef} className="relative h-[240vh] bg-ink">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div ref={stageRef} className="absolute inset-0 z-0">
          <ScrollSequence
            ref={pantherHandle}
            basePath="/sequences/panther"
            frameCount={PANTHER_FRAME_COUNT}
            label="A panther walking across the screen, scroll-driven"
            className="absolute inset-0 h-full w-full"
            lazy
          />
        </div>

        {/* Top/bottom scrim, plus a soft radial scrim centered behind the
            copy — the linear gradient alone is fully transparent in the
            middle (by design, to not dim the panther), which is exactly
            where the text sits, so it needed its own dedicated contrast
            layer rather than relying on the edge gradient to reach it. */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-ink/55 via-transparent to-ink/45" />
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 55% 42% at 50% 50%, rgba(6,6,5,0.5), transparent 72%)",
          }}
        />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-2xl">
            <span className="font-body text-[0.7rem] uppercase tracking-widest2 text-gold">
              Precision in Motion
            </span>
            <ScrollStoryText
              ref={storyHandle}
              lines={STORY_LINES}
              thresholds={STORY_THRESHOLDS}
              className="mt-6 min-h-[1.3em]"
              lineClassName="font-display text-3xl leading-[1.2] text-ivory sm:text-4xl lg:text-5xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
