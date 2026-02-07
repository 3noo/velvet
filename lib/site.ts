export const SITE = {
  name: "Velvet",
  fullName: "Velvet Studio",
  tagline: "Barcelona",
  email: "hello@velvet.studio",
  bookingNote: "Booking new projects from March 2026. Barcelona-based, working worldwide."
} as const;

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
] as const;

const u = (base: string, w: number, h?: number) =>
  `${base}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=80`;

export const MEDIA = {
  hero: "https://cdn.coverr.co/videos/coverr-beach-photo-session-in-progress/thumbnail?width=2400",
  heroVideoMp4: "https://cdn.coverr.co/videos/coverr-beach-photo-session-in-progress/720p.mp4",
  band: u("https://images.unsplash.com/photo-1762062537479-31ef040b81a6", 2400, 1200),
  services: u("https://images.unsplash.com/photo-1750306955715-85fdf631bd0b", 1400, 1600),
  services2: u("https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00", 1400, 1600),
  workHero: u("https://images.unsplash.com/photo-1759986452774-be47f7db2362", 1400, 1600),
  workReelPoster:
    "https://cdn.coverr.co/videos/coverr-teamwork-in-the-office-7943/thumbnail?width=1600",
  workReelMp4: "https://cdn.coverr.co/videos/coverr-teamwork-in-the-office-7943/720p.mp4",
  aboutHero: u("https://images.unsplash.com/photo-1685551207595-1f25ecc702f0", 1400, 1600),
  aboutBand: u("https://images.unsplash.com/photo-1751200065697-4461cc2b43cb", 2400, 1200),
  about2: u("https://images.unsplash.com/photo-1764755932155-dabbee87df7e", 1400, 1600),
  contactHero: u("https://images.unsplash.com/photo-1747336754882-dfa5c49f15da", 1400, 1600),
  gallery: [
    u("https://images.unsplash.com/photo-1762755815418-914fd0250de5", 1600, 1200),
    u("https://images.unsplash.com/photo-1743300873236-39e755465c7a", 1600, 1200),
    u("https://images.unsplash.com/photo-1764755932155-dabbee87df7e", 1600, 1200),
    u("https://images.unsplash.com/photo-1768836180167-6d4a25c421b2", 1600, 1200),
    u("https://images.unsplash.com/photo-1446688568582-55ddb4b37cad", 1600, 1200),
    u("https://images.unsplash.com/photo-1750306955715-85fdf631bd0b", 1600, 1200)
  ]
} as const;
