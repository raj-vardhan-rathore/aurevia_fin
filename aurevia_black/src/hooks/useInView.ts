"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Returns true once the observed element has entered the viewport (expanded
 * by `rootMargin`), and stays true thereafter — used to defer heavy asset
 * loading (frame sequences) until a section is actually about to be seen.
 */
export function useInView<T extends Element>(
  ref: RefObject<T>,
  rootMargin = "200% 0px"
): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return;
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin, inView]);

  return inView;
}
