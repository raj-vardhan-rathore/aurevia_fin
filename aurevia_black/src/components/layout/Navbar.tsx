"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { EASE_REVEAL, EASE_MICRO } from "@/lib/motion";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Sits fixed above everything. On the homepage, starts invisible and the
 * landing screen's gate fades it in the moment it opens (fading back out if
 * the visitor scrolls all the way back to the landing screen). On every
 * other page there is no gate to open, so the navbar shows immediately —
 * otherwise a visitor landing directly on /portfolio, /about, etc. (or
 * following any of these links, prior to this fix, as a full page
 * navigation) would never see it revealed at all.
 */
export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    if (!isHome) {
      gsap.set(el, { opacity: 1, y: 0, pointerEvents: "auto" });
      return;
    }

    gsap.set(el, { opacity: 0, y: -12, pointerEvents: "none" });

    const handleReveal = () => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        pointerEvents: "auto",
        duration: 1,
        ease: EASE_REVEAL,
      });
    };

    const handleHide = () => {
      gsap.to(el, {
        opacity: 0,
        y: -12,
        pointerEvents: "none",
        duration: 0.6,
        ease: EASE_MICRO,
      });
    };

    window.addEventListener("aurevia:reveal-nav", handleReveal);
    window.addEventListener("aurevia:hide-nav", handleHide);
    return () => {
      window.removeEventListener("aurevia:reveal-nav", handleReveal);
      window.removeEventListener("aurevia:hide-nav", handleHide);
    };
  }, [isHome]);

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14"
    >
      <Link
        href="/"
        className="font-display text-lg tracking-[0.14em] text-ivory transition-colors duration-500 hover:text-gold"
      >
        AUREVIA
      </Link>

      <ul className="hidden items-center gap-10 md:flex">
        {LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-body text-[0.68rem] uppercase tracking-widest2 text-ivory-muted transition-colors duration-500 hover:text-gold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href="#discovery-call"
        className="font-body text-[0.68rem] uppercase tracking-widest2 text-ivory transition-colors duration-500 hover:text-gold"
      >
        Book a Call
      </a>
    </nav>
  );
}
