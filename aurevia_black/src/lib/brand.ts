export const BRAND = {
  name: "Aurevia",
  siteUrl: "https://aureviastudio.uk",
  description:
    "Aurevia helps businesses grow through strategy, design, technology, and digital systems that turn attention into enquiries, bookings, and revenue.",
  email: "hello@aureviastudio.uk",
  telephone: "+919329205534",
  locality: "Indore",
  countryCode: "IN",
  logoPath: "/icon.svg",
  /** Add verified, official profile URLs here when they are available. */
  sameAs: [] as string[],
} as const;

export const absoluteUrl = (path = "/") => new URL(path, BRAND.siteUrl).toString();
