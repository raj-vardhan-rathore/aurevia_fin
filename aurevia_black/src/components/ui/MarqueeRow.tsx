"use client";

import { motion } from "framer-motion";

interface MarqueeRowProps {
  items: string[];
  reverse?: boolean;
}

/**
 * A single infinite-scroll row of short phrases separated by a gold star.
 * Two of these, running opposite directions, is the Contact page's closing
 * flourish.
 */
export function MarqueeRow({ items, reverse = false }: MarqueeRowProps) {
  const doubled = items.concat(items);

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex shrink-0 items-center gap-10 pr-10"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((line, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 font-display text-2xl italic text-ivory-muted sm:text-3xl"
          >
            {line}
            <span className="font-body text-base not-italic text-gold">&#10022;</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
