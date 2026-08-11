export interface Service {
  title: string;
  description: string;
  href: string;
  icon: "layout" | "terminal" | "sparkles" | "feather" | "smartphone" | "server";
}

export interface WorkItem {
  title: string;
  category: string;
  image: string;
  href: string;
}

export interface ValueCard {
  index: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

/** One stage of the engagement roadmap shown on the Services page. */
export interface ServiceStage {
  icon: "compass" | "target" | "badge-check" | "search" | "layout" | "palette" | "code" | "sparkles" | "cpu" | "line-chart" | "bar-chart" | "rocket" | "wrench" | "trending-up";
  title: string;
  body: string;
}

/** One quiet rule on the Studio (About) page. */
export interface Principle {
  n: string;
  title: string;
  body: string;
}

/** One movement in the Studio workflow scroll-roadmap. */
export interface WorkflowStep {
  step: string;
  detail: string;
  icon: "compass" | "search" | "target" | "layout" | "palette" | "code" | "sparkles" | "wrench" | "rocket" | "trending-up";
}

export interface StudioStat {
  end: number;
  suffix: string;
  label: string;
}

export interface PortfolioCategory {
  id: string;
  label: string;
}

/** A single case study shown in the Portfolio grid + detail modal. */
export interface Project {
  slug: string;
  title: string;
  industry: string;
  category: string;
  year: string;
  oneLiner: string;
  desktop: string;
  mobile: string;
  gallery: string[];
  overview: string;
  challenge: string;
  objectives: string[];
  approach: string;
  stack: string[];
  motion: string;
  impact: string;
}

export interface ImageSequenceOptions {
  /** Base public path, e.g. "/sequences/rose" */
  basePath: string;
  /** Total number of frames in the sequence */
  frameCount: number;
  /** Zero-pad length used in file names, e.g. 4 => 0001.jpg */
  padLength?: number;
  /** File extension, defaults to "jpg" */
  extension?: string;
}
