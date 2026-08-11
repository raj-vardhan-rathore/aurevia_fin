"use client";

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import gsap from "gsap";
import { EASE_MICRO, DURATION } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface StoryTextHandle {
  setProgress: (progress: number) => void;
}

interface ScrollStoryTextProps {
  lines: string[];
  /**
   * Progress values in [0, 1) at which each line becomes active. Defaults to
   * evenly-spaced thresholds across the number of lines.
   */
  thresholds?: number[];
  className?: string;
  lineClassName?: string;
}

/**
 * Stacks each line in the same spot and crossfades (fade + blur + slide)
 * between whichever one is "active" for the current progress value. The
 * driver (a ScrollTrigger elsewhere) calls setProgress on every tick; this
 * component only re-animates when the active line actually changes.
 */
export const ScrollStoryText = forwardRef<StoryTextHandle, ScrollStoryTextProps>(
  function ScrollStoryText({ lines, thresholds, className, lineClassName }, ref) {
    const lineRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const activeIndexRef = useRef(0);
    const prefersReducedMotion = useReducedMotion();

    const resolvedThresholds =
      thresholds ?? lines.map((_, i) => i / lines.length);

    const goTo = (index: number) => {
      const prevIndex = activeIndexRef.current;
      if (index === prevIndex) return;
      activeIndexRef.current = index;

      const prevEl = lineRefs.current[prevIndex];
      const nextEl = lineRefs.current[index];
      const goingForward = index > prevIndex;

      // Defensive: a fast scroll can cross two thresholds within a single
      // tick (e.g. a trackpad flick jumping straight from state 0 to state
      // 2). Without this, an older line's fade-out tween from a
      // now-superseded goTo() call keeps running on its own schedule,
      // independent of the new transition — which is exactly how multiple
      // text states end up visually stacked at once. Hard-killing and
      // hiding every line except the outgoing/incoming pair guarantees at
      // most two lines are ever mid-transition, never three or more.
      lineRefs.current.forEach((el, i) => {
        if (!el || i === prevIndex || i === index) return;
        gsap.killTweensOf(el);
        gsap.set(el, { opacity: 0 });
      });

      // Sequential, not overlapping: the outgoing line fully exits, then —
      // after a short clean beat — the incoming line enters. This keeps
      // exactly one state dominant at any given moment instead of two
      // crossfading blocks competing for attention.
      const exitDuration = prefersReducedMotion ? 0 : DURATION.story * 0.5;
      const enterDuration = prefersReducedMotion ? 0 : DURATION.story;
      const enterDelay = prefersReducedMotion
        ? 0
        : exitDuration + DURATION.story * 0.2;

      if (prevEl) {
        gsap.killTweensOf(prevEl);
        gsap.to(prevEl, {
          opacity: 0,
          y: goingForward ? -14 : 14,
          filter: "blur(6px)",
          duration: exitDuration,
          ease: EASE_MICRO,
        });
      }
      if (nextEl) {
        gsap.killTweensOf(nextEl);
        gsap.fromTo(
          nextEl,
          {
            opacity: 0,
            y: goingForward ? 14 : -14,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: enterDuration,
            ease: EASE_MICRO,
            delay: enterDelay,
          }
        );
      }
    };

    useImperativeHandle(
      ref,
      () => ({
        setProgress: (progress: number) => {
          let index = 0;
          for (let i = 0; i < resolvedThresholds.length; i++) {
            if (progress >= resolvedThresholds[i]!) index = i;
          }
          goTo(index);
        },
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [prefersReducedMotion]
    );

    useEffect(() => {
      lineRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: i === 0 ? 1 : 0, y: 0, filter: "blur(0px)" });
      });
      activeIndexRef.current = 0;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lines]);

    return (
      <div className={cn("relative", className)}>
        {lines.map((line, i) => (
          <span
            key={line}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            className={cn("block", i > 0 && "absolute inset-0", lineClassName)}
          >
            {line}
          </span>
        ))}
      </div>
    );
  }
);
