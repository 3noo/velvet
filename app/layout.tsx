import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";

import "@/app/globals.css";
import { ClientEffects } from "@/components/ClientEffects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: {
    default: SITE.fullName,
    template: `%s | ${SITE.fullName}`
  },
  description:
    "Velvet Studio (Barcelona): brand, web, and campaigns with sharp hierarchy, crisp motion, and fast pages.",
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
    <html lang="en" className={`js ${sans.variable} ${serif.variable}`}>
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
