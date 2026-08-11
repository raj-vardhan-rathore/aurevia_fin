import {
  Compass,
  Target,
  BadgeCheck,
  Search,
  LayoutGrid,
  Palette,
  Code2,
  Sparkles,
  Cpu,
  LineChart,
  BarChart3,
  Rocket,
  Wrench,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { ServiceStage, WorkflowStep } from "@/types";

export const SERVICE_STAGE_ICONS: Record<ServiceStage["icon"], LucideIcon> = {
  compass: Compass,
  target: Target,
  "badge-check": BadgeCheck,
  search: Search,
  layout: LayoutGrid,
  palette: Palette,
  code: Code2,
  sparkles: Sparkles,
  cpu: Cpu,
  "line-chart": LineChart,
  "bar-chart": BarChart3,
  rocket: Rocket,
  wrench: Wrench,
  "trending-up": TrendingUp,
};

export const WORKFLOW_ICONS: Record<WorkflowStep["icon"], LucideIcon> = {
  compass: Compass,
  search: Search,
  target: Target,
  layout: LayoutGrid,
  palette: Palette,
  code: Code2,
  sparkles: Sparkles,
  wrench: Wrench,
  rocket: Rocket,
  "trending-up": TrendingUp,
};
