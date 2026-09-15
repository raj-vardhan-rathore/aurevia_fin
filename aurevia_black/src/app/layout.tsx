import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { BRAND, absoluteUrl } from "@/lib/brand";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  applicationName: BRAND.name,
  title: {
    default: "Aurevia — Digital Growth Systems for Modern Businesses",
    template: "%s | Aurevia",
  },
  description: BRAND.description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Aurevia — Digital Growth Systems for Modern Businesses",
    description: BRAND.description,
    url: BRAND.siteUrl,
    siteName: BRAND.name,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Aurevia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurevia — Digital Growth Systems for Modern Businesses",
    description: BRAND.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-ink font-body text-ivory antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": absoluteUrl("/#organization"),
                  name: BRAND.name,
                  url: absoluteUrl(),
                  description: BRAND.description,
                  logo: absoluteUrl(BRAND.logoPath),
                  email: BRAND.email,
                  telephone: BRAND.telephone,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: BRAND.locality,
                    addressCountry: BRAND.countryCode,
                  },
                  ...(BRAND.sameAs.length > 0 ? { sameAs: BRAND.sameAs } : {}),
                },
                {
                  "@type": "WebSite",
                  "@id": absoluteUrl("/#website"),
                  name: BRAND.name,
                  url: absoluteUrl(),
                  description: BRAND.description,
                  publisher: { "@id": absoluteUrl("/#organization") },
                },
              ],
            }),
          }}
        />
        <SmoothScrollProvider>
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
