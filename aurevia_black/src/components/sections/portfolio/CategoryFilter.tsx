"use client";

import { CATEGORIES } from "@/lib/projects";

interface CategoryFilterProps {
  active: string;
  onChange: (id: string) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="sticky top-[76px] z-20 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4 sm:px-10 md:py-5 lg:px-14 [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => onChange(c.id)}
            className={`whitespace-nowrap rounded-full border px-4 py-2 font-body text-[11px] uppercase tracking-widest2 transition-all duration-500 ${
              active === c.id
                ? "border-gold bg-gold text-ink"
                : "border-line text-ivory-muted hover:border-gold/60 hover:text-gold"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}
