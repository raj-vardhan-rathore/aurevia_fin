"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { EASE_CINEMATIC, DURATION } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const PARTICLES = Array.from({ length: 18 }, (_, i) => i);

// How far (in px) a wheel/touch gesture must travel before it counts as
// "the visitor wants to move on" — filters out trackpad noise.
const GESTURE_THRESHOLD = 12;
// How close to the very top of the page counts as "back at the landing".
const RETURN_THRESHOLD = 4;

/**
 * The opening scene. Exactly 100vh, nothing else visible. The very first
 * scroll/wheel/touch/keyboard gesture plays a single cinematic transition
 * into the Hero — the visitor never manually scrolls through this screen.
 * Scrolling back up to the top reverses the same transition.
 */
export function LandingScreen() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { lenis, prefersReducedMotion } = useLenis();

  // SmoothScrollProvider creates its Lenis instance asynchronously (it's an
  // ancestor, so its effect runs *after* this component's effect on mount),
  // so `lenis` is null for an instant after this component first mounts.
  // Reading it through a ref — instead of depending on it directly in the
  // gesture effect below — means that instant doesn't tear down and rebuild
  // all the wheel/touch/keydown listeners the moment Lenis becomes ready.
  const lenisRef = useRef(lenis);
  useEffect(() => {
    lenisRef.current = lenis;
  }, [lenis]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    // Reduced motion: skip the gate entirely. Show the landing screen as a
    // normal first screen the visitor scrolls past at their own pace.
    if (prefersReducedMotion) {
      window.dispatchEvent(new Event("aurevia:reveal-nav"));
      window.dispatchEvent(new Event("aurevia:hero-enter"));
      return;
    }

    let isOpen = false;
    let isAnimating = false;
    let hasArmedReturn = false;

    // Lock native + Lenis scrolling at the very top while the gate is closed.
    const lockScroll = () => {
      window.scrollTo(0, 0);
      lenisRef.current?.stop();
      document.documentElement.style.overflow = "hidden";
    };
    const unlockScroll = () => {
      lenisRef.current?.start();
      document.documentElement.style.overflow = "";
    };

    gsap.set(wrapper, { opacity: 1, pointerEvents: "auto" });
    lockScroll();

    const play = (opening: boolean) => {
      isAnimating = true;

      if (!opening) {
        // Make sure the overlay can receive input again before it fades in.
        gsap.set(wrapper, { pointerEvents: "auto" });
      }

      const tl = gsap.timeline({
        defaults: { duration: DURATION.gate, ease: EASE_CINEMATIC },
        onComplete: () => {
          isAnimating = false;
          isOpen = opening;
          if (opening) {
            gsap.set(wrapper, { pointerEvents: "none" });
            unlockScroll();
            window.dispatchEvent(new Event("aurevia:hero-enter"));
            requestAnimationFrame(() => ScrollTrigger.refresh());
          } else {
            lockScroll();
            hasArmedReturn = false;
          }
        },
      });

      if (opening) {
        tl.to(wrapper, { opacity: 0 }, 0);
        tl.to(content, { opacity: 0, y: -70, scale: 0.96, filter: "blur(4px)" }, 0);
        window.dispatchEvent(new Event("aurevia:reveal-nav"));
      } else {
        window.dispatchEvent(new Event("aurevia:hide-nav"));
        tl.to(wrapper, { opacity: 1 }, 0);
        tl.to(content, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, 0);
      }
    };

    const tryOpen = () => {
      if (isOpen || isAnimating) return;
      play(true);
    };

    const tryClose = () => {
      if (!isOpen || isAnimating) return;
      play(false);
    };

    // --- Gesture detection while closed: wheel / touch / keyboard ---
    const onWheel = (e: WheelEvent) => {
      if (isOpen) return;
      if (Math.abs(e.deltaY) > GESTURE_THRESHOLD) {
        e.preventDefault();
        tryOpen();
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isOpen) return;
      const deltaY = touchStartY - (e.touches[0]?.clientY ?? 0);
      if (Math.abs(deltaY) > GESTURE_THRESHOLD) {
        e.preventDefault();
        tryOpen();
      }
    };

    const ADVANCE_KEYS = new Set([
      "ArrowDown",
      "PageDown",
      " ",
      "Spacebar",
      "End",
    ]);
    const onKeydown = (e: KeyboardEvent) => {
      if (isOpen) return;
      if (ADVANCE_KEYS.has(e.key)) {
        e.preventDefault();
        tryOpen();
      }
    };

    // --- Return-to-top detection while open ---
    const onScroll = () => {
      if (!isOpen || isAnimating) return;
      const y = window.scrollY;

      // Only arm the "return to landing" watcher once the visitor has
      // actually scrolled into the page — otherwise the instant the gate
      // opens (scrollY still ~0) would immediately close it again.
      if (!hasArmedReturn) {
        if (y > window.innerHeight * 0.15) hasArmedReturn = true;
        return;
      }

      if (y <= RETURN_THRESHOLD) {
        tryClose();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeydown);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener("scroll", onScroll);
      unlockScroll();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-40 h-screen w-full overflow-hidden bg-ink"
    >
      {/* ambient particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {PARTICLES.map((i) => {
          const left = (i * 137.5) % 100;
          const top = (i * 61.8) % 100;
          const size = 1 + (i % 3);
          const duration = 10 + (i % 6) * 2;
          const delay = (i % 5) * 0.8;
          return (
            <span
              key={i}
              className="absolute rounded-full bg-ivory/25 animate-drift"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      <div className="relative flex h-full w-full items-center justify-center px-6">
        <div
          ref={contentRef}
          className="flex flex-col items-center gap-8 text-center animate-breathe"
        >
          <h1 className="font-display text-[clamp(2.75rem,9vw,7rem)] leading-none tracking-[0.05em] text-ivory">
            AUREVIA
          </h1>
          <p className="font-body text-xs uppercase tracking-widest2 text-ivory-muted sm:text-sm">
            Digital Growth Systems for Modern Businesses
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 text-ivory-muted">
            <span className="font-body text-[0.65rem] uppercase tracking-widest2">
              Scroll to Begin
            </span>
            <span className="block h-10 w-px bg-gradient-to-b from-gold/70 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
