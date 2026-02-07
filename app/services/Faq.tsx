"use client";

import { useState } from "react";

const FAQ = [
  {
    id: "templates",
    q: "Do you work with templates?",
    a: "Sometimes. If a template gets us to the outcome faster without compromising the system, we adapt it and make it feel like you. If not, we build from a blank grid."
  },
  {
    id: "landing",
    q: "Can we start with just a landing page?",
    a: "Yes. It's often the best first step. If the landing converts and the offer is clear, we expand from a place of proof instead of hope."
  },
  {
    id: "need",
    q: "What do you need from me?",
    a: "A clear decision maker, access to existing analytics (if any), and a willingness to cut anything that isn't pulling its weight."
  },
  {
    id: "stack",
    q: "What do you build with?",
    a: "Whatever your team will actually maintain: Webflow, Shopify, a headless CMS, or a custom build. The goal stays the same: speed, clarity, and clean conversion."
  }
] as const;

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(FAQ[0]?.id ?? null);

  return (
    <div className="faq" data-reveal data-reveal-delay="2">
      {FAQ.map((item) => (
        <details
          key={item.id}
          open={openId === item.id}
          onToggle={(e) => {
            const el = e.currentTarget;
            if (el.open) setOpenId(item.id);
            else if (openId === item.id) setOpenId(null);
          }}
        >
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
