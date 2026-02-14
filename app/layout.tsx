import type { Metadata } from "next";

import "@/app/globals.css";
import { ClientEffects } from "@/components/ClientEffects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: SITE.fullName,
    template: `%s | ${SITE.fullName}`
  },
  description:
    "Clarion Studio (Barcelona): brand strategy and social media strategy for founder-led brands where clarity comes first.",
  applicationName: SITE.fullName,
  icons: {
    icon: [{ url: SITE.faviconPng, type: "image/png" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="js">
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
