"use client";

import Link from "next/link";
import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import { RosePetals } from "@/components/layout/RosePetals";

const SITEMAP = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      {/* soft gradient lighting behind the wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gold/10 blur-[140px]"
      />
      <RosePetals />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 sm:px-10 lg:px-14">
        {/* Closing note + mini CTA before the divider */}
        <Reveal>
          <div className="flex flex-col items-center gap-8 text-center">
            <span className="font-body text-[0.7rem] uppercase tracking-widest2 text-gold">
              Ready When You Are
            </span>
            <h2 className="max-w-2xl font-display text-3xl leading-[1.15] text-ivory sm:text-4xl">
              Let&rsquo;s build the presence your brand deserves.
            </h2>
            <Button variant="secondary" size="sm">
              Start a Conversation
            </Button>
          </div>
        </Reveal>

        {/* premium divider */}
        <div className="my-20 h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="grid grid-cols-1 gap-16 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <Reveal>
            <div className="max-w-sm">
              <span className="font-display text-4xl tracking-[0.1em] text-ivory">
                AUREVIA
              </span>
              <p className="mt-5 font-body text-sm leading-relaxed text-ivory-muted">
                A digital atelier for brands with presence to protect &mdash;
                crafting cinematic, considered work that refuses to be
                ordinary.
              </p>
              <div className="mt-8 flex items-center gap-5">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group text-ivory-muted transition-colors duration-500 hover:text-gold"
                  >
                    <Icon
                      className="h-[18px] w-[18px] transition-transform duration-500 ease-luxury group-hover:-translate-y-0.5 group-hover:rotate-6"
                      strokeWidth={1.4}
                    />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div>
              <h4 className="font-body text-xs uppercase tracking-widest2 text-gold">
                Sitemap
              </h4>
              <ul className="mt-6 flex flex-col gap-3">
                {SITEMAP.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-ivory-muted transition-colors duration-500 hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <h4 className="font-body text-xs uppercase tracking-widest2 text-gold">
                Contact
              </h4>
              <ul className="mt-6 flex flex-col gap-4">
                <li>
                  <a
                    href="mailto:hello@aureviastudio.uk"
                    className="flex items-start gap-3 font-body text-sm text-ivory-muted transition-colors duration-500 hover:text-ivory"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.4} />
                    hello@aureviastudio.uk
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919329205534"
                    className="flex items-start gap-3 font-body text-sm text-ivory-muted transition-colors duration-500 hover:text-ivory"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.4} />
                    +91 93292 05534
                  </a>
                </li>
                <li className="flex items-start gap-3 font-body text-sm text-ivory-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.4} />
                  Indore, Madhya Pradesh, India
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div>
              <h4 className="font-body text-xs uppercase tracking-widest2 text-gold">
                Studio Hours
              </h4>
              <p className="mt-6 font-body text-sm leading-relaxed text-ivory-muted">
                Monday &mdash; Friday
                <br />
                9:00 &mdash; 18:00 PST
              </p>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-8 font-body text-xs text-ivory-muted sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Aurevia. All rights reserved.</span>
          <span className="italic text-ivory-muted/80">Crafted beyond ordinary.</span>
        </div>
      </div>
    </footer>
  );
}
