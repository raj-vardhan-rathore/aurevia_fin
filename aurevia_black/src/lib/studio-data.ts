import type { Principle, WorkflowStep, StudioStat } from "@/types";

export const PRINCIPLES: Principle[] = [
  {
    n: "I",
    title: "Luxury isn't decoration.",
    body: "Luxury is clarity — a decision to remove everything that doesn't earn its place. Every line of ours is a decision.",
  },
  {
    n: "II",
    title: "Business before aesthetics.",
    body: "Beautiful is table stakes. We start with the P&L, the audience, the pipeline — and then we make it exquisite.",
  },
  {
    n: "III",
    title: "Emotion before technology.",
    body: "Feelings compound. We choose motion, typography and tone that make people trust you before they read a word.",
  },
  {
    n: "IV",
    title: "Every pixel earns its place.",
    body: "If it doesn't move the reader, the customer or the number — it doesn't ship. Restraint is the loudest voice.",
  },
];

export const WORKFLOW: WorkflowStep[] = [
  { step: "Discovery", detail: "We listen. We learn what makes the business unrepeatable.", icon: "compass" },
  { step: "Research", detail: "Competitive, cultural, technical. We arrive with a map.", icon: "search" },
  { step: "Strategy", detail: "One opinionated plan with clear metrics.", icon: "target" },
  { step: "Wireframes", detail: "We choreograph the journey before we style it.", icon: "layout" },
  { step: "Design", detail: "Editorial UI with restraint as the loudest voice.", icon: "palette" },
  { step: "Development", detail: "Hand-coded, performance-obsessed.", icon: "code" },
  { step: "Motion", detail: "Framer Motion, GSAP, Lenis — used only when it earns its place.", icon: "sparkles" },
  { step: "Testing", detail: "Real devices, real hands, real conditions.", icon: "wrench" },
  { step: "Launch", detail: "A release ritual — soft, then hard, then celebrated.", icon: "rocket" },
  { step: "Growth", detail: "We stay. Retainers focused on compounding.", icon: "trending-up" },
];

export const STUDIO_STATS: StudioStat[] = [
  { end: 42, suffix: "+", label: "Projects Shipped" },
  { end: 17, suffix: "", label: "Awards" },
  { end: 9, suffix: "", label: "Countries" },
  { end: 98, suffix: "%", label: "Client Retention" },
];
