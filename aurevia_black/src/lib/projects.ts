import type { PortfolioCategory, Project } from "@/types";

/**
 * Aurevia — Portfolio Data
 * 32 fictional luxury projects across 20 industries.
 * Every project shares the same content shape so the Work page + modal
 * can render them identically.
 */

export const CATEGORIES: PortfolioCategory[] = [
  { id: "all", label: "All" },
  { id: "realestate", label: "Property & Real Estate" },
  { id: "architecture", label: "Architecture" },
  { id: "healthcare", label: "Healthcare" },
  { id: "luxury", label: "Luxury Brands" },
  { id: "hotels", label: "Hotels & Hospitality" },
  { id: "restaurants", label: "Restaurants & Cafés" },
  { id: "legal", label: "Law Firms" },
  { id: "finance", label: "Financial Services" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "automobile", label: "Automobile" },
  { id: "billing", label: "Billing Systems" },
  { id: "analytics", label: "Analytics" },
  { id: "dashboards", label: "Dashboards" },
  { id: "ai", label: "AI Products" },
  { id: "corporate", label: "Corporate" },
  { id: "saas", label: "SaaS" },
  { id: "education", label: "Education" },
  { id: "interior", label: "Interior Design" },
  { id: "retail", label: "Retail" },
  { id: "industrial", label: "Industrial" },
];

const img = (id: string, w = 1400): string =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export const PROJECTS: Project[] = [
  {
    slug: "velora-estates",
    title: "Velora Estates",
    industry: "Property & Real Estate",
    category: "realestate",
    year: "2025",
    oneLiner:
      "A private-listing platform for ultra-luxury residences across the Riviera.",
    desktop: img("1600585154340-be6161a56a0c"),
    mobile: img("1512918728675-ed5a9ecdebfd", 600),
    gallery: [
      img("1600607687939-ce8a6c25118c"),
      img("1613490493576-7fde63acd811"),
      img("1512917774080-9991f1c4c750"),
    ],
    overview:
      "Velora Estates required a discreet digital gallery for its most exclusive listings — visible only to vetted collectors and family offices.",
    challenge:
      "Public listing engines commoditised the very properties Velora needed to keep aspirational. We had to create scarcity without secrecy.",
    objectives: [
      "Increase qualified enquiry rate by 40%",
      "Reduce time-to-viewing from 21 to 7 days",
      "Establish a private-client web presence",
    ],
    approach:
      "Slow reveal galleries, editorial floor-plan storytelling, and invitation-only detail pages accessed via passwordless magic links.",
    stack: ["Next.js", "Sanity CMS", "Mapbox", "Framer Motion"],
    motion: "GSAP masked image reveals · Lenis scroll · gold particle drift",
    impact: "+38% qualified leads · 4× average session duration",
  },
  {
    slug: "novaledger",
    title: "NovaLedger",
    industry: "Financial Services",
    category: "finance",
    year: "2025",
    oneLiner: "A private-wealth reporting dashboard for a single-family office.",
    desktop: img("1611974789855-9c2a0a7236a3"),
    mobile: img("1554224155-6726b3ff858f", 600),
    gallery: [
      img("1554224154-26032cbc9a67"),
      img("1553729459-efe14ef6055d"),
      img("1590283603385-17ffb3a7f29f"),
    ],
    overview:
      "A unified view of holdings across 14 custodians, 6 currencies, and 3 generations.",
    challenge:
      "The family needed clarity across a fragmented custody map without hiring a full internal team.",
    objectives: [
      "Consolidate reporting in one interface",
      "Reduce quarterly close from 3 weeks to 4 days",
      "Give heirs a gentle onboarding experience",
    ],
    approach:
      "Editorial dashboards with quiet typography and generous whitespace — Bloomberg's data, Hermès' posture.",
    stack: ["React", "FastAPI", "Postgres", "Recharts"],
    motion: "Number-tick counters · staggered card mounts · slow section fades",
    impact: "6× faster quarterly close · 92% family adoption",
  },
  {
    slug: "altis-finance",
    title: "Altis Finance",
    industry: "Financial Services",
    category: "finance",
    year: "2024",
    oneLiner: "A boutique investment bank's redefinition of its digital identity.",
    desktop: img("1554224154-26032cbc9a67"),
    mobile: img("1519389950473-47ba0277781c", 600),
    gallery: [
      img("1590283603385-17ffb3a7f29f"),
      img("1600880292203-757bb62b4baf"),
      img("1554224155-6726b3ff858f"),
    ],
    overview:
      "A full brand and site rebuild positioning Altis alongside the world's top merchant banks.",
    challenge:
      "The previous identity read as retail — misaligned with a client base of $50M+ founders.",
    objectives: [
      "Reposition as a boutique merchant bank",
      "Attract 4 new founder mandates in Q1",
      "Reduce sales cycle by 30%",
    ],
    approach:
      "Editorial typography, silence-first layouts, and a private deal room for prospective clients.",
    stack: ["Next.js", "MDX", "Sanity", "Vercel"],
    motion: "Chapter transitions · character-by-character reveals",
    impact: "7 mandates closed in 90 days · avg. cheque size +2.3×",
  },
  {
    slug: "lumina-analytics",
    title: "Lumina Analytics",
    industry: "Analytics",
    category: "analytics",
    year: "2025",
    oneLiner: "AI-native analytics for luxury e-commerce operators.",
    desktop: img("1551288049-bebda4e38f71"),
    mobile: img("1460925895917-afdab827c52f", 600),
    gallery: [
      img("1543286386-713bdd548da4"),
      img("1519389950473-47ba0277781c"),
      img("1607799279861-4dd421887fb3"),
    ],
    overview:
      "A copilot that translates raw commerce data into brand-safe narratives for executive teams.",
    challenge:
      "Executives distrusted their dashboards. They wanted a story, not a spreadsheet.",
    objectives: [
      "Deliver weekly narrative briefings",
      "Cut analyst time by 60%",
      "Expose insights without SQL",
    ],
    approach:
      "A conversational surface layered over their warehouse — outputs are always accompanied by a plain-English paragraph and a source trail.",
    stack: ["Next.js", "Python", "OpenAI", "DuckDB"],
    motion: "AI typing effect · glass panels · masked reveals",
    impact: "12h/week saved per operator · NPS 74",
  },
  {
    slug: "horizon-medical",
    title: "Horizon Medical",
    industry: "Healthcare",
    category: "healthcare",
    year: "2024",
    oneLiner: "A private clinic's first digital front door — calm, clear, human.",
    desktop: img("1519494026892-80bbd2d6fd0d"),
    mobile: img("1584982751601-97dcc096659c", 600),
    gallery: [
      img("1576091160399-112ba8d25d1d"),
      img("1631217868264-e5b90bb7e133"),
      img("1587854692152-cbe660dbde88"),
    ],
    overview:
      "Longevity clinics compete on clarity. Horizon's new site turns medicine into a considered ritual.",
    challenge:
      "Prospective patients felt overwhelmed by clinical jargon and pricing opacity.",
    objectives: [
      "Grow booked consultations by 45%",
      "Educate prospects pre-visit",
      "Position clinic as a longevity leader",
    ],
    approach:
      "Editorial protocol pages, calm illustration, and a private patient portal for reports.",
    stack: ["Next.js", "Sanity", "Stripe", "HIPAA-ready hosting"],
    motion: "Soft parallax · gentle SVG line illustrations",
    impact: "+52% consultations · +3× time-on-site",
  },
  {
    slug: "astra-realty",
    title: "Astra Realty",
    industry: "Property & Real Estate",
    category: "realestate",
    year: "2024",
    oneLiner: "A boutique agency's shift from listings to lifestyle publications.",
    desktop: img("1560518883-ce09059eeffa"),
    mobile: img("1600585154340-be6161a56a0c", 600),
    gallery: [
      img("1600607687939-ce8a6c25118c"),
      img("1560448204-e02f11c3d0e2"),
      img("1512918728675-ed5a9ecdebfd"),
    ],
    overview:
      "Astra now publishes stories about neighbourhoods, architects, and residents — properties feel like consequences of taste.",
    challenge:
      "Astra couldn't compete with mass portals on inventory. They had to compete on taste.",
    objectives: [
      "Reposition as a lifestyle brand",
      "Grow direct-inbound leads",
      "Reduce cost-per-lead by 60%",
    ],
    approach: "A magazine-format hub with slow-reading essays and elegant listings.",
    stack: ["Next.js", "MDX", "Sanity"],
    motion: "Chapter transitions · scroll-linked hero video",
    impact: "-58% CPL · +4× organic traffic",
  },
  {
    slug: "vertex-legal",
    title: "Vertex Legal",
    industry: "Law Firms",
    category: "legal",
    year: "2025",
    oneLiner: "A cross-border tax firm's digital atelier for founder clients.",
    desktop: img("1589829545856-d10d557cf95f"),
    mobile: img("1600880292203-757bb62b4baf", 600),
    gallery: [
      img("1521791136064-7986c2920216"),
      img("1450101499163-c8848c66ca85"),
      img("1454165804606-c3d57bc86b40"),
    ],
    overview:
      "A serene, editorial site that made a tax firm feel like a private club for founders.",
    challenge:
      "Law firm websites read as templated. Vertex needed to feel personal, not procedural.",
    objectives: [
      "Attract founders in fundraise mode",
      "Book 20 discovery calls / mo",
      "Move away from hourly-billing perception",
    ],
    approach:
      "Long-form partner essays, quiet case notes, and a members-only knowledge base.",
    stack: ["Next.js", "Sanity", "Postmark"],
    motion: "Reader-first scroll · line-by-line reveals",
    impact: "48 calls booked in Q1 · 6 mandates closed",
  },
  {
    slug: "casa-verde",
    title: "Casa Verde",
    industry: "Hotels & Hospitality",
    category: "hotels",
    year: "2024",
    oneLiner: "A regenerative-tourism resort's editorial website & booking flow.",
    desktop: img("1566073771259-6a8506099945"),
    mobile: img("1571003123894-1f0594d2b5d9", 600),
    gallery: [
      img("1520250497591-112f2f40a3f4"),
      img("1445019980597-93fa8acb246c"),
      img("1519449556851-5720b33024e7"),
    ],
    overview:
      "Casa Verde turns each stay into an editorial — guests read the story before they arrive.",
    challenge:
      "Standard booking engines shattered the mood set by the site's storytelling.",
    objectives: [
      "Increase direct bookings",
      "Grow average length of stay",
      "Reduce reliance on OTAs",
    ],
    approach:
      "A custom booking engine styled like a diary — with pre-arrival rituals.",
    stack: ["Astro", "Payload CMS", "Stripe"],
    motion: "Editorial hero video · masked photography reveals",
    impact: "+61% direct bookings · +2.4 nights avg. stay",
  },
  {
    slug: "titan-logistics",
    title: "Titan Logistics",
    industry: "Industrial",
    category: "industrial",
    year: "2025",
    oneLiner: "A freight-forwarder's premium rebrand & customer portal.",
    desktop: img("1553413077-190dd305871c"),
    mobile: img("1568992687947-868a62a9f521", 600),
    gallery: [
      img("1586528116311-ad8dd3c8310d"),
      img("1580674285054-bed31e145f59"),
      img("1601924582970-9238bcb495d9"),
    ],
    overview:
      "Titan's clients could finally see their shipments the way they see their finances — with dignity.",
    challenge:
      "Freight portals are utilitarian by default. Titan wanted to signal service quality.",
    objectives: [
      "Reduce inbound tracking calls by 70%",
      "Increase renewals by 25%",
      "Signal premium tier to enterprise buyers",
    ],
    approach:
      "A quiet dashboard, hierarchy-first typography, and human-written status updates.",
    stack: ["React", "Node", "Postgres", "GraphQL"],
    motion: "Slow row entries · staggered ETAs · elegant micro-loaders",
    impact: "-72% calls · +19% renewals",
  },
  {
    slug: "bloom-wellness",
    title: "Bloom Wellness",
    industry: "Healthcare",
    category: "healthcare",
    year: "2024",
    oneLiner: "A women's-health brand's editorial platform & member portal.",
    desktop: img("1544367567-0f2fcb009e0b"),
    mobile: img("1512290923902-8a9f81dc236c", 600),
    gallery: [
      img("1522337360788-8b13dee7a37e"),
      img("1487528278747-ba99ed528ebc"),
      img("1466442929976-97f336a657be"),
    ],
    overview:
      "Bloom's members read essays, book coaches, and follow rituals — all inside a calm editorial UI.",
    challenge:
      "Wellness sites are visually loud. Bloom's audience wanted silence and depth.",
    objectives: [
      "Grow paid membership base",
      "Reduce churn by 30%",
      "Create a defensible content moat",
    ],
    approach: "Editorial articles, private cohort spaces, and slow onboarding.",
    stack: ["Next.js", "Sanity", "Stripe", "Mux"],
    motion: "Line-by-line typographic reveals",
    impact: "9,200 members · churn -34%",
  },
  {
    slug: "luxe-hotels",
    title: "Luxe Hotels",
    industry: "Hotels & Hospitality",
    category: "hotels",
    year: "2025",
    oneLiner: "A boutique collection's unified digital identity across 14 properties.",
    desktop: img("1445019980597-93fa8acb246c"),
    mobile: img("1520250497591-112f2f40a3f4", 600),
    gallery: [
      img("1571896349842-33c89424de2d"),
      img("1519449556851-5720b33024e7"),
      img("1566073771259-6a8506099945"),
    ],
    overview:
      "Fourteen properties, one voice. Each hotel keeps its personality while feeling part of a curated collection.",
    challenge:
      "Each hotel had its own site — dilutive, inconsistent, and impossible to cross-sell.",
    objectives: [
      "Unify brand across 14 properties",
      "Grow cross-property bookings",
      "Establish a loyalty programme",
    ],
    approach:
      "A master-brand shell with property personalities layered as editorial issues.",
    stack: ["Next.js", "Sanity", "Contentful", "Stripe"],
    motion: "Property transitions · cinematic hero reveals",
    impact: "+41% cross-property bookings",
  },
  {
    slug: "urban-axis",
    title: "Urban Axis",
    industry: "Architecture",
    category: "architecture",
    year: "2024",
    oneLiner: "A studio-monograph website for a Milan-based architectural practice.",
    desktop: img("1487958449943-2429e8be8625"),
    mobile: img("1518005020951-eccb494ad742", 600),
    gallery: [
      img("1470723710355-95304d8aece4"),
      img("1512918728675-ed5a9ecdebfd"),
      img("1600607687939-ce8a6c25118c"),
    ],
    overview:
      "A digital monograph that lets clients read Urban Axis' portfolio like a coffee-table book.",
    challenge:
      "The old site was a gallery. Clients kept asking for the studio's thinking.",
    objectives: [
      "Publish 4 essays per year",
      "Attract civic-scale commissions",
      "Establish thought leadership",
    ],
    approach:
      "Chapter-based case studies, drawing archives, and long-form partner interviews.",
    stack: ["Astro", "MDX", "Cloudinary"],
    motion: "Chapter fades · drawing-line SVG animation",
    impact: "3 civic commissions · 2 international press features",
  },
  {
    slug: "northpeak-construction",
    title: "NorthPeak Construction",
    industry: "Architecture",
    category: "architecture",
    year: "2025",
    oneLiner: "A high-end residential builder's transparent client portal.",
    desktop: img("1503387762-592deb58ef4e"),
    mobile: img("1518005020951-eccb494ad742", 600),
    gallery: [
      img("1503387762-592deb58ef4e"),
      img("1568992687947-868a62a9f521"),
      img("1518005020951-eccb494ad742"),
    ],
    overview:
      "NorthPeak's clients now watch their homes rise in real time — with photography, cost, and craftsmanship narrated together.",
    challenge:
      "Custom home builds create anxiety. NorthPeak wanted transparency to become their moat.",
    objectives: [
      "Reduce change-order disputes",
      "Grow referrals by 3×",
      "Justify premium pricing",
    ],
    approach:
      "A private portal with photography, milestones, and craftsman notes.",
    stack: ["Next.js", "Supabase", "Cloudinary"],
    motion: "Photo reveals · milestone timeline animations",
    impact: "-68% change-order disputes · referrals 3.2×",
  },
  {
    slug: "nexa-crm",
    title: "Nexa CRM",
    industry: "SaaS",
    category: "saas",
    year: "2025",
    oneLiner: "A relationship-first CRM for boutique advisors.",
    desktop: img("1551288049-bebda4e38f71"),
    mobile: img("1460925895917-afdab827c52f", 600),
    gallery: [
      img("1543286386-713bdd548da4"),
      img("1607799279861-4dd421887fb3"),
      img("1553729459-efe14ef6055d"),
    ],
    overview:
      "Nexa treats each contact like a long-form portrait — not a database row.",
    challenge:
      "Advisors resisted CRMs because they felt transactional. We needed to make relationships legible.",
    objectives: [
      "Grow paid seats 5×",
      "Reduce first-week churn",
      "Increase note-taking discipline",
    ],
    approach:
      "Editorial contact pages, rich note templates, and gentle nudges.",
    stack: ["React", "FastAPI", "Postgres"],
    motion: "Card entrance stagger · rich-text micro-transitions",
    impact: "Seats 5.4× · WAU 82%",
  },
  {
    slug: "pulse-billing",
    title: "Pulse Billing",
    industry: "Billing Systems",
    category: "billing",
    year: "2024",
    oneLiner: "A subscription-billing platform designed like a Swiss watch.",
    desktop: img("1554224155-6726b3ff858f"),
    mobile: img("1554224154-26032cbc9a67", 600),
    gallery: [
      img("1590283603385-17ffb3a7f29f"),
      img("1600880292203-757bb62b4baf"),
      img("1553729459-efe14ef6055d"),
    ],
    overview:
      "Pulse is billing for premium products — invoices that feel like part of the experience.",
    challenge:
      "Invoices from most tools look like receipts. Pulse's customers wanted invoices to feel branded.",
    objectives: [
      "Reduce failed payments by 30%",
      "Improve invoice deliverability",
      "Make dunning feel human",
    ],
    approach:
      "Editorial invoices, human dunning copy, and a customer-facing billing portal.",
    stack: ["Node", "Stripe", "Postgres", "React"],
    motion: "Elegant table sorts · calm success states",
    impact: "-34% failed payments · NPS 71",
  },
  {
    slug: "veritas-ai",
    title: "Veritas AI",
    industry: "AI Products",
    category: "ai",
    year: "2025",
    oneLiner: "An enterprise fact-checking copilot for editorial teams.",
    desktop: img("1620712943543-bcc4688e7485"),
    mobile: img("1550751827-4bd374c3f58b", 600),
    gallery: [
      img("1677442136019-21780ecad995"),
      img("1673187456554-abbd3d78dd3d"),
      img("1655720828015-8ed4a3a1cbfb"),
    ],
    overview:
      "Veritas checks claims against a private corpus — publishers ship faster without ceding accuracy.",
    challenge:
      "Editorial teams distrusted LLMs. Veritas had to earn trust visibly.",
    objectives: [
      "Cut fact-checking time by 60%",
      "Preserve editorial voice",
      "Ship citation-first UI",
    ],
    approach:
      "Every claim is annotated with a source; disagreement is a first-class state.",
    stack: ["Next.js", "OpenAI", "pgvector", "FastAPI"],
    motion: "Streaming citations · calm confidence bars",
    impact: "62% faster edits · zero recalls",
  },
  {
    slug: "atelier-mode",
    title: "Atelier Mode",
    industry: "Luxury Brands",
    category: "luxury",
    year: "2025",
    oneLiner: "A Parisian couture house's private-client digital experience.",
    desktop: img("1490481651871-ab68de25d43d"),
    mobile: img("1483985988355-763728e1935b", 600),
    gallery: [
      img("1445205170230-053b83016050"),
      img("1479064555552-3ef4979f8908"),
      img("1509631179647-0177331693ae"),
    ],
    overview:
      "An invitation-only lookbook and appointment engine for the maison's top 200 clients.",
    challenge:
      "The client list wanted intimacy, not e-commerce.",
    objectives: [
      "Deepen top-client relationships",
      "Move appointments online",
      "Preserve mystery",
    ],
    approach:
      "Editorial lookbook, ateliér diaries, and private appointment scheduling.",
    stack: ["Next.js", "Sanity", "Cal.com API"],
    motion: "Slow parallax · silk-like image reveals",
    impact: "+28% top-client spend · 100% appointment adoption",
  },
  {
    slug: "orfevre-jewelry",
    title: "Orfèvre",
    industry: "Luxury Brands",
    category: "luxury",
    year: "2024",
    oneLiner: "A high-jewelry house's AI-guided curator for private clients.",
    desktop: img("1515562141207-7a88fb7ce338"),
    mobile: img("1611591437281-460bfbe1220a", 600),
    gallery: [
      img("1573408301185-9146fe634ad0"),
      img("1611652022419-a9419f74343d"),
      img("1584302179602-e4ce4fe12e04"),
    ],
    overview:
      "Orfèvre's curator listens to what a client already owns and suggests the next quiet acquisition.",
    challenge:
      "High-jewelry buyers were oversaturated with catalog UX.",
    objectives: [
      "Grow private-client sales",
      "Increase AOV",
      "Reduce time-to-close",
    ],
    approach:
      "A concierge chat surface with human handoff, curated micro-collections, and appointment scheduling.",
    stack: ["Next.js", "OpenAI", "Sanity"],
    motion: "Handwritten cursor path · slow reveal",
    impact: "AOV +38% · time-to-close 3.1× faster",
  },
  {
    slug: "table-noire",
    title: "Table Noire",
    industry: "Restaurants & Cafés",
    category: "restaurants",
    year: "2024",
    oneLiner: "A three-star restaurant's reservation and pre-arrival ritual.",
    desktop: img("1414235077428-338989a2e8c0"),
    mobile: img("1517248135467-4c7edcad34c4", 600),
    gallery: [
      img("1550966871-3ed3cdb5ed0c"),
      img("1552566626-52f8b828add9"),
      img("1600891964599-f61ba0e24092"),
    ],
    overview:
      "Guests receive a pre-arrival letter, a menu preview, and a chef's note — all before setting foot in the room.",
    challenge:
      "The dining experience began at the table. That was too late.",
    objectives: [
      "Reduce no-shows",
      "Deepen the guest experience",
      "Grow tasting-menu adoption",
    ],
    approach:
      "A ritual delivered by email + web — a letter, a menu, a suggested wine pairing.",
    stack: ["Astro", "Sanity", "Postmark"],
    motion: "Handwritten reveals · slow letter opening animation",
    impact: "No-shows -71% · tasting-menu take +42%",
  },
  {
    slug: "cafe-flor",
    title: "Café Flor",
    industry: "Restaurants & Cafés",
    category: "restaurants",
    year: "2025",
    oneLiner: "A specialty coffee brand's story-first e-commerce site.",
    desktop: img("1495474472287-4d71bcdd2085"),
    mobile: img("1509042239860-f550ce710b93", 600),
    gallery: [
      img("1442512595331-e89e73853f31"),
      img("1521017432531-fbd92d768814"),
      img("1442975631115-c81397fe0e3a"),
    ],
    overview:
      "Every bag has a farmer, a story, and a soundtrack. Flor sells context, not caffeine.",
    challenge:
      "Specialty coffee is commoditised online. Flor needed to sell provenance.",
    objectives: [
      "Grow subscription base",
      "Increase repeat purchase rate",
      "Justify premium pricing",
    ],
    approach:
      "Story-led PDPs, farm micro-documentaries, and a subscription onboarding ritual.",
    stack: ["Shopify Hydrogen", "Sanity", "Mux"],
    motion: "Farm story parallax · slow image sequences",
    impact: "+92% subs · repeat rate 3.4×",
  },
  {
    slug: "auto-marchand",
    title: "Auto Marchand",
    industry: "Automobile",
    category: "automobile",
    year: "2024",
    oneLiner: "A classic-car merchant's editorial online showroom.",
    desktop: img("1503376780353-7e6692767b70"),
    mobile: img("1580273916550-e323be2ae537", 600),
    gallery: [
      img("1552519507-da3b142c6e3d"),
      img("1503376780353-7e6692767b70"),
      img("1494976388531-d1058494cdd8"),
    ],
    overview:
      "Every vehicle is a chapter — with owner history, restoration diary, and mechanical dossier.",
    challenge:
      "Classic-car buyers wanted narrative and provenance, not spec sheets.",
    objectives: [
      "Attract higher-tier buyers",
      "Reduce due-diligence back-and-forth",
      "Grow international shipping",
    ],
    approach:
      "Editorial vehicle pages, PDF-quality dossiers, and private client dashboards.",
    stack: ["Next.js", "Sanity", "Stripe"],
    motion: "Slow reveal of restoration timeline",
    impact: "+51% international sales · +2.3× AOV",
  },
  {
    slug: "solene-hotel",
    title: "Solène",
    industry: "Hotels & Hospitality",
    category: "hotels",
    year: "2023",
    oneLiner: "A serene wellness retreat's digital sanctuary.",
    desktop: img("1571003123894-1f0594d2b5d9"),
    mobile: img("1519449556851-5720b33024e7", 600),
    gallery: [
      img("1520250497591-112f2f40a3f4"),
      img("1445019980597-93fa8acb246c"),
      img("1566073771259-6a8506099945"),
    ],
    overview: "A booking flow that feels like the first breath of the retreat.",
    challenge:
      "Standard booking flows broke Solène's sense of calm.",
    objectives: [
      "Grow direct bookings",
      "Introduce wellness upsells gently",
      "Reduce mobile bounce",
    ],
    approach:
      "A calm booking engine, breath-paced transitions, and a pre-arrival ritual sequence.",
    stack: ["Astro", "Payload CMS", "Stripe"],
    motion: "Slow, breath-paced fades",
    impact: "+63% direct bookings · +4.1 nights avg. stay",
  },
  {
    slug: "vestige-interiors",
    title: "Vestige Interiors",
    industry: "Interior Design",
    category: "interior",
    year: "2025",
    oneLiner: "An interior-design studio's project archive & client portal.",
    desktop: img("1618221195710-dd6b41faaea6"),
    mobile: img("1615529162924-f8605388461d", 600),
    gallery: [
      img("1560448204-e02f11c3d0e2"),
      img("1512918728675-ed5a9ecdebfd"),
      img("1600607687939-ce8a6c25118c"),
    ],
    overview: "Clients follow their homes taking shape, room by room.",
    challenge:
      "Design projects were opaque to clients. Vestige wanted transparency without micromanagement.",
    objectives: [
      "Reduce client anxiety mid-project",
      "Grow referrals",
      "Move final approvals online",
    ],
    approach:
      "Editorial project pages with moodboards, samples, and progress reels.",
    stack: ["Next.js", "Sanity", "Cloudinary"],
    motion: "Moodboard image reveals · pin animation",
    impact: "Referrals +2.6× · project NPS 82",
  },
  {
    slug: "praxis-education",
    title: "Praxis Education",
    industry: "Education",
    category: "education",
    year: "2024",
    oneLiner: "A boutique executive-education programme's admissions site.",
    desktop: img("1524178232363-1fb2b075b655"),
    mobile: img("1454165804606-c3d57bc86b40", 600),
    gallery: [
      img("1519389950473-47ba0277781c"),
      img("1521791136064-7986c2920216"),
      img("1450101499163-c8848c66ca85"),
    ],
    overview: "Praxis turned an application form into a slow, considered conversation.",
    challenge:
      "The old form scared off qualified applicants. Praxis wanted rigor without friction.",
    objectives: [
      "Grow qualified applications",
      "Reduce drop-off in application flow",
      "Position as top-tier",
    ],
    approach: "Long-form editorial admissions, alumni stories, and a paced application UX.",
    stack: ["Next.js", "Sanity", "Airtable"],
    motion: "Progress ritual · line reveals",
    impact: "Applications +2.9× · completion rate 84%",
  },
  {
    slug: "mercato-retail",
    title: "Mercato",
    industry: "Retail",
    category: "retail",
    year: "2025",
    oneLiner: "A curated homeware retailer's editorial commerce site.",
    desktop: img("1445205170230-053b83016050"),
    mobile: img("1503602642458-232111445657", 600),
    gallery: [
      img("1483985988355-763728e1935b"),
      img("1445205170230-053b83016050"),
      img("1479064555552-3ef4979f8908"),
    ],
    overview: "Every collection has a curator and a story — commerce feels curated, not clicked.",
    challenge:
      "Homeware is a red ocean online. Mercato needed voice.",
    objectives: [
      "Grow direct-to-consumer sales",
      "Increase AOV",
      "Reduce paid-ad dependence",
    ],
    approach: "Editorial collections, curator interviews, and a slow onboarding.",
    stack: ["Shopify Hydrogen", "Sanity"],
    motion: "Editorial hero videos · staggered product entries",
    impact: "AOV +47% · organic +3.1×",
  },
  {
    slug: "elysian-manufacture",
    title: "Elysian Manufacture",
    industry: "Manufacturing",
    category: "manufacturing",
    year: "2024",
    oneLiner: "A precision-machining group's transparent order portal.",
    desktop: img("1581091226825-a6a2a5aee158"),
    mobile: img("1581092334606-9a4a3cad51ec", 600),
    gallery: [
      img("1581092160607-ee22621dd758"),
      img("1581092338559-93d1cae02c3d"),
      img("1581093458791-9d42e14a5c9c"),
    ],
    overview:
      "Aerospace and medical clients now track their runs the way they track their cash — with dignity.",
    challenge:
      "Precision manufacturers were seen as opaque. Elysian wanted to be legible.",
    objectives: [
      "Reduce buyer status calls",
      "Grow enterprise wins",
      "Justify premium margins",
    ],
    approach:
      "Order-status portals, live shop-floor photography, and quality dossiers.",
    stack: ["React", "FastAPI", "Postgres", "MQTT bridge"],
    motion: "Live tick counters · quiet card entrances",
    impact: "-80% status calls · +12% GM",
  },
  {
    slug: "clarion-corporate",
    title: "Clarion Group",
    industry: "Corporate",
    category: "corporate",
    year: "2025",
    oneLiner: "A holding company's investor-grade corporate website.",
    desktop: img("1497366216548-37526070297c"),
    mobile: img("1497366754035-f200968a6e72", 600),
    gallery: [
      img("1497366811353-6870744d04b2"),
      img("1497366754035-f200968a6e72"),
      img("1519389950473-47ba0277781c"),
    ],
    overview:
      "Clarion's site now sits comfortably between an annual report and a boutique magazine.",
    challenge:
      "Corporate sites read as templated. Clarion needed a mature, singular voice.",
    objectives: [
      "Signal investor-grade quality",
      "Attract acquisition targets",
      "Recruit senior operators",
    ],
    approach:
      "Editorial portfolio, quiet governance pages, and a private investor room.",
    stack: ["Next.js", "MDX", "Sanity"],
    motion: "Chapter fades · quiet parallax",
    impact: "3 acquisitions closed · 12 senior hires",
  },
  {
    slug: "helios-saas",
    title: "Helios",
    industry: "SaaS",
    category: "saas",
    year: "2025",
    oneLiner: "A modern accounting suite for boutique agencies.",
    desktop: img("1460925895917-afdab827c52f"),
    mobile: img("1551288049-bebda4e38f71", 600),
    gallery: [
      img("1543286386-713bdd548da4"),
      img("1553729459-efe14ef6055d"),
      img("1607799279861-4dd421887fb3"),
    ],
    overview:
      "Helios feels less like accounting software and more like a monthly ritual.",
    challenge:
      "Agency founders resisted accounting apps because they felt punitive.",
    objectives: [
      "Grow ARR to $2M",
      "Cut trial-to-paid time",
      "Improve retention",
    ],
    approach: "Editorial dashboards, gentle onboarding, and a monthly briefing.",
    stack: ["React", "FastAPI", "Postgres"],
    motion: "Number tickers · quiet card entrances",
    impact: "ARR +2.6× · churn -41%",
  },
  {
    slug: "aegis-analytics",
    title: "Aegis Analytics",
    industry: "Analytics",
    category: "analytics",
    year: "2024",
    oneLiner: "A private-markets analytics platform for LPs.",
    desktop: img("1590283603385-17ffb3a7f29f"),
    mobile: img("1611974789855-9c2a0a7236a3", 600),
    gallery: [
      img("1554224155-6726b3ff858f"),
      img("1553729459-efe14ef6055d"),
      img("1543286386-713bdd548da4"),
    ],
    overview:
      "Aegis' quarterly LP letters now double as investment-committee prep decks.",
    challenge:
      "LP letters were built in slides. That format didn't scale.",
    objectives: [
      "Reduce IR workload",
      "Improve LP satisfaction",
      "Deliver real-time NAV",
    ],
    approach:
      "A web-first LP portal with editorial letters and portfolio-company deep dives.",
    stack: ["Next.js", "Postgres", "Redis"],
    motion: "Chapter transitions · number tickers",
    impact: "-64% IR hours · LP NPS 78",
  },
  {
    slug: "meridian-dashboard",
    title: "Meridian Ops",
    industry: "Dashboards",
    category: "dashboards",
    year: "2025",
    oneLiner: "A control tower for a network of boutique boutique hotels.",
    desktop: img("1543286386-713bdd548da4"),
    mobile: img("1460925895917-afdab827c52f", 600),
    gallery: [
      img("1553729459-efe14ef6055d"),
      img("1590283603385-17ffb3a7f29f"),
      img("1611974789855-9c2a0a7236a3"),
    ],
    overview:
      "Fourteen properties, one calm dashboard — occupancy, ADR, service tickets, and guest sentiment side by side.",
    challenge:
      "The head office was drowning in tabs. Meridian needed a single quiet surface.",
    objectives: [
      "Reduce time-to-decision",
      "Grow ADR by 6%",
      "Cut ticket resolution time",
    ],
    approach:
      "One editorial dashboard, per-property drilldowns, and daily briefings.",
    stack: ["React", "GraphQL", "ClickHouse"],
    motion: "Slow tickers · quiet card mounts",
    impact: "ADR +7% · TTR -38%",
  },
  {
    slug: "quill-legal",
    title: "Quill & Co.",
    industry: "Law Firms",
    category: "legal",
    year: "2024",
    oneLiner: "A private-client estate firm's confidential portal.",
    desktop: img("1521791136064-7986c2920216"),
    mobile: img("1450101499163-c8848c66ca85", 600),
    gallery: [
      img("1454165804606-c3d57bc86b40"),
      img("1589829545856-d10d557cf95f"),
      img("1519389950473-47ba0277781c"),
    ],
    overview:
      "Families now access their trusts, wills, and estate maps inside a single quiet portal.",
    challenge:
      "Estate law was documented in email. Quill needed a single, permanent surface.",
    objectives: [
      "Reduce email traffic",
      "Improve heir onboarding",
      "Grow multi-generational retention",
    ],
    approach:
      "A private portal with lineage diagrams, document rooms, and family notes.",
    stack: ["Next.js", "Postgres", "S3 with encryption"],
    motion: "Slow diagram reveals · reader-first scroll",
    impact: "Email -84% · heir onboarding 4× faster",
  },
  {
    slug: "corda-ai",
    title: "Corda AI",
    industry: "AI Products",
    category: "ai",
    year: "2025",
    oneLiner: "An enterprise voice assistant for luxury concierge desks.",
    desktop: img("1550751827-4bd374c3f58b"),
    mobile: img("1620712943543-bcc4688e7485", 600),
    gallery: [
      img("1677442136019-21780ecad995"),
      img("1673187456554-abbd3d78dd3d"),
      img("1655720828015-8ed4a3a1cbfb"),
    ],
    overview:
      "Corda handles overflow concierge calls with the poise of a maître d' — humans decide when to step in.",
    challenge:
      "Concierge teams were overrun after 10pm. Standard IVRs broke the brand.",
    objectives: [
      "Handle overflow gracefully",
      "Preserve concierge tone",
      "Escalate at the right moments",
    ],
    approach:
      "A voice model tuned to hospitality tone with visible human-handoff signals.",
    stack: ["Twilio", "OpenAI Realtime", "FastAPI"],
    motion: "Waveform animation · gentle transcripts",
    impact: "40% overflow handled · guest NPS unchanged",
  },
];
