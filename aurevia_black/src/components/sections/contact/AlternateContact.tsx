import { ArrowUpRight, MessageCircle, Mail, CalendarClock } from "lucide-react";

const METHODS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    sub: "Fastest response",
    href: "https://wa.me/919329205534",
  },
  {
    icon: Mail,
    label: "hello@aureviastudio.uk",
    sub: "General enquiries",
    href: "mailto:hello@aureviastudio.uk",
  },
  {
    icon: CalendarClock,
    label: "Schedule a discovery call",
    sub: "30 min · complimentary",
    href: "#discovery-call",
  },
];

export function AlternateContact() {
  return (
    <aside>
      <span className="mb-4 block font-body text-[0.7rem] uppercase tracking-widest2 text-gold">
        Or reach us elsewhere
      </span>
      <div className="space-y-3">
        {METHODS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="group flex items-center gap-4 rounded-[20px] border border-line bg-ink-900 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-ivory transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
              <c.icon size={18} strokeWidth={1.2} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate font-display text-lg leading-none text-ivory">{c.label}</div>
              <div className="mt-1 font-body text-[11px] uppercase tracking-widest2 text-ivory-muted">
                {c.sub}
              </div>
            </div>
            <ArrowUpRight
              size={16}
              strokeWidth={1.2}
              className="text-ivory-muted transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
            />
          </a>
        ))}
      </div>

      <div className="mt-10 space-y-4 border-t border-line pt-8">
        <div>
          <div className="mb-1 font-body text-[10px] uppercase tracking-widest2 text-ivory-muted">
            Atelier
          </div>
          <div className="font-body text-[15px] leading-[1.7] text-ivory/85">
            Indore, Madhya Pradesh, India
          </div>
        </div>
        <div>
          <div className="mb-1 font-body text-[10px] uppercase tracking-widest2 text-ivory-muted">
            Availability
          </div>
          <div className="font-body text-[13px] text-ivory/80">
            Accepting Q2 engagements · Replies within 48 hours
          </div>
        </div>
      </div>
    </aside>
  );
}
