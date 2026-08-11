"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { PROJECTS } from "@/lib/projects";
import type { Project } from "@/types";
import { CategoryFilter } from "./CategoryFilter";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function PortfolioGrid() {
  const [active, setActive] = useState("all");
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <CategoryFilter active={active} onChange={setActive} />

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-10 md:py-20 lg:px-14">
        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
            <AnimatePresence>
              {filtered.map((p, i) => (
                <ProjectCard key={p.slug} project={p} i={i} onOpen={setOpen} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filtered.length === 0 && (
          <div className="py-24 text-center font-body text-ivory-muted">
            No projects in this category yet.
          </div>
        )}
      </section>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </>
  );
}
