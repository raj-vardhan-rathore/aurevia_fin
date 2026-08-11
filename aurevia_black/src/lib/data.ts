import type { Service, WorkItem, ValueCard, Testimonial } from "@/types";

export const SERVICES: Service[] = [
  {
    title: "Website Design",
    icon: "layout",
    description: "Considered interfaces built for presence, not just pages.",
    href: "/services/website-design",
  },
  {
    title: "Custom Software",
    icon: "terminal",
    description: "Systems engineered around how your business actually runs.",
    href: "/services/custom-software",
  },
  {
    title: "AI Automation",
    icon: "sparkles",
    description: "Quiet intelligence, embedded where it earns its place.",
    href: "/services/ai-automation",
  },
  {
    title: "Brand Identity",
    icon: "feather",
    description: "A visual language your audience recognises before they read a word.",
    href: "/services/brand-identity",
  },
  {
    title: "Mobile Apps",
    icon: "smartphone",
    description: "Native-grade experiences, designed for the hand that holds them.",
    href: "/services/mobile-apps",
  },
  {
    title: "Hosting",
    icon: "server",
    description: "Infrastructure that disappears, so the work never has to.",
    href: "/services/hosting",
  },
];

export const WORK: WorkItem[] = [
  {
    title: "Solene Maison",
    category: "E-Commerce · Brand",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85",
    href: "/portfolio/solene-maison",
  },
  {
    title: "Verrata Studio",
    category: "Web Platform",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
    href: "/portfolio/verrata-studio",
  },
  {
    title: "Noctuelle",
    category: "Mobile · Identity",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=85",
    href: "/portfolio/noctuelle",
  },
];

export const VALUES: ValueCard[] = [
  {
    index: "Precision",
    description: "Every pixel, interaction, and line of code considered with intent.",
  },
  {
    index: "Performance",
    description: "Cinematic experiences that still load, ship, and scale without compromise.",
  },
  {
    index: "Presence",
    description: "Digital work with the weight and quiet confidence of a physical space.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Aurevia gave our brand a presence that felt inevitable — as if it had always looked this way.",
    author: "Founder, Solene Maison",
  },
  {
    quote:
      "The most considered digital partner we have worked with. Nothing arrives unfinished.",
    author: "CMO, Verrata Studio",
  },
];
