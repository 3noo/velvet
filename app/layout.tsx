import type { Metadata } from "next";
import { Allura, Instrument_Serif, Sofia_Sans } from "next/font/google";

import "@/app/globals.css";
import { ClientEffects } from "@/components/ClientEffects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";

// Temporary Google substitutes until licensed fonts are provided.
// Swap path: replace these with `next/font/local` and keep the same CSS vars.
const body = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-clarion-body",
  display: "swap",
  weight: ["400", "500", "700"]
});

const display = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-clarion-display",
  display: "swap",
  weight: ["400"]
});

const script = Allura({
  subsets: ["latin"],
  variable: "--font-clarion-script",
  display: "swap",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: {
    default: SITE.fullName,
    template: `%s | ${SITE.fullName}`
  },
  description:
    "Clarion Studio (Barcelona): brand strategy and social media strategy for founder-led brands where clarity comes first.",
  applicationName: SITE.fullName,
  icons: {
    icon: [{ url: "/img/favicon.svg", type: "image/svg+xml" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`js ${body.variable} ${display.variable} ${script.variable}`}
    >
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important;transition:none!important}`}</style>
        </noscript>

        <a className="skip-link" href="#content">
          Skip to content
        </a>

        <SiteHeader />

        <main id="content">{children}</main>

        <SiteFooter />

        <ClientEffects />
      </body>
    </html>
  );
}
