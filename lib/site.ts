export const SITE = {
  name: "Clarion",
  fullName: "Clarion Studio",
  logoLight: "/img/brand/logo-wordmark-light.png",
  logoDark: "/img/brand/logo-wordmark-brown.png",
  faviconPng: "/img/brand/favicon.png",
  footerTagline: "Brand strategy for founder-led businesses",
  footerStatement: "For brands that choose depth over noise.",
  announcementText: "Now booking spring brand strategy projects - Barcelona and worldwide.",
  email: "hello@clarion.studio",
  location: "Barcelona, Spain",
  instagramHandle: "@clarionstudio",
  instagramUrl: "https://instagram.com/clarionstudio",
  whatsappUrl: "",
  linkedinUrl: "https://www.linkedin.com/company/clarionstudio"
} as const;

export const NAV = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/story", label: "Story" },
  { href: "/contact", label: "Contact" }
] as const;

const u = (base: string, w: number, h?: number) =>
  `${base}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=80`;

export const MEDIA = {
  // Homepage hero image.
  heroPhoto:
    "https://cdn.coverr.co/videos/coverr-beach-photo-session-in-progress/thumbnail?width=2000",
  heroVideoMp4: "https://cdn.coverr.co/videos/coverr-beach-photo-session-in-progress/720p.mp4",

  // Sticky pinned media for the portfolio showcase.
  portfolioPinnedImage: u(
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
    2400,
    1600
  ),

  // Supporting photos.
  storyPhoto: u("https://images.unsplash.com/photo-1524504388940-b1c1722653e1", 1800, 2000),
  howWeWorkPhoto: u("https://images.unsplash.com/photo-1497215728101-856f4ea42174", 1800, 2000),
  servicesPhoto: u("https://images.unsplash.com/photo-1460925895917-afdab827c52f", 1800, 2000),
  contactPhoto: u("https://images.unsplash.com/photo-1531496635011-06e2870a6722", 1800, 2000),

  // Work sample pools used by carousels and grids.
  workSamples: [
    u("https://images.unsplash.com/photo-1531496635011-06e2870a6722", 1800, 1350),
    u("https://images.unsplash.com/photo-1460925895917-afdab827c52f", 1800, 1350),
    u("https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a", 1800, 1350),
    u("https://images.unsplash.com/photo-1487014679447-9f8336841d58", 1800, 1350),
    u("https://images.unsplash.com/photo-1524758631624-e2822e304c36", 1800, 1350),
    u("https://images.unsplash.com/photo-1529333166437-7750a6dd5a70", 1800, 1350),
    u("https://images.unsplash.com/photo-1545239351-1141bd82e8a6", 1800, 1350),
    u("https://images.unsplash.com/photo-1497215728101-856f4ea42174", 1800, 1350),
    u("https://images.unsplash.com/photo-1522202176988-66273c2fd55f", 1800, 1350),
    u("https://images.unsplash.com/photo-1521737604893-d14cc237f11d", 1800, 1350)
  ],

  instagramPlaceholders: [
    u("https://images.unsplash.com/photo-1515879218367-8466d910aaa4", 1200, 1200),
    u("https://images.unsplash.com/photo-1524758631624-e2822e304c36", 1200, 1200),
    u("https://images.unsplash.com/photo-1526481280695-3c687fd643ed", 1200, 1200),
    u("https://images.unsplash.com/photo-1487014679447-9f8336841d58", 1200, 1200),
    u("https://images.unsplash.com/photo-1529333166437-7750a6dd5a70", 1200, 1200),
    u("https://images.unsplash.com/photo-1545239351-1141bd82e8a6", 1200, 1200),
    u("https://images.unsplash.com/photo-1498050108023-c5249f4df085", 1200, 1200),
    u("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", 1200, 1200),
    u("https://images.unsplash.com/photo-1521737604893-d14cc237f11d", 1200, 1200)
  ]
} as const;
