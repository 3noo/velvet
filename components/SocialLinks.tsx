import type { ReactNode } from "react";

import { SITE } from "@/lib/site";

type SocialLinksProps = {
  className?: string;
};

type SocialItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

export function SocialLinks({ className = "" }: SocialLinksProps) {
  const items: SocialItem[] = [
    {
      label: "Instagram",
      href: SITE.instagramUrl,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <circle cx="12" cy="12" r="4.1" />
          <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      )
    },
    {
      label: "Email",
      href: `mailto:${SITE.email}`,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
          <path d="M4.5 7.2L12 13l7.5-5.8" />
        </svg>
      )
    }
  ];

  if (SITE.linkedinUrl) {
    items.push({
      label: "LinkedIn",
      href: SITE.linkedinUrl,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="4" y="4" width="4" height="4" rx="1" fill="currentColor" stroke="none" />
          <rect x="4" y="10" width="4" height="10" rx="1" fill="currentColor" stroke="none" />
          <path
            d="M14 10c-2.21 0-4 1.79-4 4v6h4v-6c0-1.1.9-2 2-2s2 .9 2 2v6h4v-6c0-3.31-2.69-6-6-6z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      )
    });
  }

  if (SITE.whatsappUrl) {
    items.push({
      label: "WhatsApp",
      href: SITE.whatsappUrl,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 4a8 8 0 0 0-6.9 12.1L4 20l3.9-1A8 8 0 1 0 12 4z" />
          <path d="M9.2 9.1c-.3 0-.5.1-.7.4-.3.4-.9 1-.9 2.5s1 2.9 1.2 3.1c.2.2 2 3.2 4.9 4.3.7.3 1.2.4 1.6.3.5-.1 1.5-.6 1.7-1.1.2-.5.2-1 .1-1.1-.1-.1-.4-.2-.9-.4s-1-.4-1.2-.4c-.3-.1-.5-.1-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.5-1.2-.7-1.7-.2-.4-.4-.4-.7-.4z" />
        </svg>
      )
    });
  }

  return (
    <nav className={`social-links ${className}`.trim()} aria-label="Social links">
      {items.map((item) => (
        <a
          key={item.label}
          className="social-links__item"
          href={item.href}
          target={item.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
          data-no-transition
          aria-label={item.label}
          title={item.label}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
}
