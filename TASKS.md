# Clarion Studio Site Tasks

Last updated: 2026-02-10

## Done (Implemented From Spec)
- Brand palette + warm editorial theme tokens in `app/globals.css`
- Temporary font system wired via `next/font/google` in `app/layout.tsx` (swap-ready for licensed fonts later)
- Navigation updated to Clarion (logo + handwritten tagline + menu + Book a Call) in `components/SiteHeader.tsx`
- Footer rebuilt to Clarion-style centered stack in `components/SiteFooter.tsx`
- Homepage rebuilt into the 9 content sections (Hero through Instagram) in `app/page.tsx`
- Work carousels + portfolio carousels (auto-advance + swipe) in `components/clarion/AutoCarousel.tsx`
- Testimonials auto-advance rail (swipe + reduced-motion fallback) in `components/clarion/TestimonialsRail.tsx`
- Story page created at `/story` in `app/story/page.tsx`
- `/about` redirects to `/story` in `app/about/page.tsx`
- `/services`, `/work`, `/contact` rewritten to Clarion voice/layout in:
  - `app/services/page.tsx`
  - `app/work/page.tsx`
  - `app/contact/page.tsx`
- Contact form “Project type” options aligned to Clarion offerings in `app/contact/ContactForm.tsx`
- Site config consolidated (name/nav/media placeholders/social links) in `lib/site.ts`
- Icons updated to Clarion mark in `public/img/favicon.svg`, `app/icon.svg`, `public/img/mark.svg`, `public/img/logo.svg`
- Performance: hero image loads eagerly + carousels preload upcoming slides in `app/page.tsx`, `components/clarion/AutoCarousel.tsx`, `app/head.tsx`

## Next (You Need To Provide / Decide)
- Replace placeholders with real assets:
  - Hero photo, Story photo, How-we-work photo
  - Work sample images
  - Portfolio background video (or remove it)
  - Instagram grid images (or connect a real embed)
- Provide real contact links:
  - `SITE.email` (if not `hello@clarion.studio`)
  - `SITE.whatsappUrl`
  - `SITE.linkedinUrl`
- Replace testimonial placeholders with real quotes + names
- Confirm final copy:
  - Hero headline + subhead
  - Services descriptions
  - Story page copy

## Fonts (Licensed Swap)
- Provide font files:
  - Meno Banner (Regular)
  - Sofia Pro (Regular, Italic, Medium, Bold)
  - Allura or Southam Demo (Regular)
- Implementation task:
  - Add fonts under `public/fonts/clarion/`
  - Replace Google font imports in `app/layout.tsx` with `next/font/local`
  - Keep CSS vars the same: `--font-clarion-display`, `--font-clarion-body`, `--font-clarion-script`

## Optional Improvements
- Replace `SmartImage` `<img>` with `next/image` for local assets (better perf/LCP once assets are in `public/`)
- Add real Instagram integration (embed/widget/API) if you want it auto-updating
- Tighten responsive breakpoint to exactly 768px if you want to match the doc literally
- SEO pass: page titles/descriptions per page + OG image

## Commands
- Dev: `env -u _VOLTA_TOOL_RECURSION npm run dev`
- Lint: `env -u _VOLTA_TOOL_RECURSION npm run lint`
- Build: `env -u _VOLTA_TOOL_RECURSION npm run build`
