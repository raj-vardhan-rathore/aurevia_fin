/**
 * Shared motion language for the whole site. Centralising this means every
 * fade, crossfade, and gate transition reads as one considered decision
 * instead of a dozen slightly-different eases picked ad hoc.
 */

/** Standard reveal-on-scroll ease — a soft decelerate, no overshoot. */
export const EASE_REVEAL = "power3.out";

/** Bigger, more deliberate movement: the landing gate, hero release. */
export const EASE_CINEMATIC = "power4.inOut";

/** Micro-interactions: hovers, small state swaps. */
export const EASE_MICRO = "power2.out";

/**
 * Same "considered decelerate" curve as EASE_REVEAL, expressed as a cubic
 * bezier array for Framer Motion (which doesn't understand GSAP's named
 * eases). Used across the interior pages (Services, Studio, Portfolio,
 * Contact) so their motion reads as the same hand as the homepage.
 */
export const EASE_EDITORIAL: [number, number, number, number] = [0.7, 0, 0.15, 1];

export const DURATION = {
  reveal: 1.1,
  micro: 0.5,
  gate: 1.05,
  story: 0.75,
} as const;
