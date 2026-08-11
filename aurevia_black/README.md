# Aurevia — Homepage

A single, cinematic homepage for **Aurevia**, a premium digital agency. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, GSAP + ScrollTrigger, Lenis smooth scroll, and Framer Motion.

Only the homepage is implemented, per the brief — no other routes exist yet, so links to `/services`, `/portfolio`, `/about`, and `/contact` are placeholders for pages to be built later.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## What's inside

- **Landing screen** — pure black, breathing type, ambient particles. Pins on scroll and dissolves into the homepage; the nav fades in the moment the visitor scrolls.
- **Sticky hero** — a pinned two-column hero. The right-hand black rose is a 158-frame image sequence, drawn to `<canvas>` and scrubbed 1:1 with scroll position via GSAP ScrollTrigger (closed → bloom → open → exploded, fully reversible, no autoplay). The rose releases and fades into the page as the hero ends.
- **Panther transition** — a 246-frame sequence of the panther walking, pinned for its own section, scroll-scrubbed behind the copy, appearing once.
- **Featured Services / Work / Why Aurevia / Testimonials / Closing CTA / Footer** — quiet, restrained sections with scroll reveals and subtle hover motion.

All motion respects `prefers-reduced-motion`: sequences fall back to a single settled frame and scroll-triggered reveals appear instantly rather than animating.

## Assets

The rose and panther frame sequences live in `public/sequences/rose` and `public/sequences/panther` as sequentially numbered JPGs (`0001.jpg`, `0002.jpg`, …). `src/hooks/useImageSequence.ts` preloads them and exposes an imperative `setFrame(index)` API that the hero and panther section drive from their own ScrollTriggers — the sequences never play on their own.

## Structure

```
src/
  app/                 # App Router entry (layout, page, globals.css)
  components/
    landing/           # Opening black screen
    hero/              # Sticky hero + rose sequence
    panther/            # Panther transition section + sequence
    sections/          # Services, Work, Why Aurevia, Testimonials, CTA
    layout/             # Navbar, Footer
    providers/          # Lenis + GSAP ScrollTrigger wiring
    ui/                  # Button, Reveal, SectionHeading
  hooks/                 # useImageSequence, useReducedMotion
  lib/                   # cn() helper, static section content
  types/                 # Shared TypeScript types
```

## V2 refinement notes

This pass kept the original architecture and concept intact and focused on interaction quality:

- **Landing screen** is now a true opening scene — fixed at 100vh, scroll-locked via Lenis, and released by a single cinematic gate transition (`~1s`, `power4.inOut`) on the first wheel/touch/keyboard gesture. Scrolling back to the very top reverses it.
- **Rose sequence** now renders at contain-fit, capped at native resolution — frames are never upscaled, which was the source of the pixelation/softness.
- **Hero storytelling** — a shared `ScrollStoryText` component crossfades (blur + slide + opacity) between four lines in sync with the same scroll progress that drives the rose.
- **Panther section** — rebuilt on the same shared `ScrollSequence` primitive as the rose (previously duplicated code), fixed the double-dimming that was making it nearly invisible, added scroll-synced story text, and deferred loading its ~3MB of frames until the section is nearly in view.
- **Portfolio images** — the broken-image bug was Next's Image Optimizer rejecting local SVGs by default; those cards now render `unoptimized` (correct for local vector art anyway).
- **Featured Services** — added per-service icons, a hover-drawn hairline, and a soft hover glow for more depth and hierarchy.
- **Footer** — full redesign: large wordmark with a soft gold glow, a mini closing CTA, sitemap/contact/hours columns, social icons, a gradient divider, and a subtle drifting rose-petal motif that bookends the hero's rose.
- **Motion** — consolidated every ease/duration into `src/lib/motion.ts` so the whole site shares one motion language; removed the conflicting native `scroll-smooth` behavior alongside Lenis.
- All new interactions (gate, sequences, story text) respect `prefers-reduced-motion` with sensible static fallbacks.
