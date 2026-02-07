(() => {
  const body = document.body;
  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // If the page is restored from the back/forward cache, ensure we aren't stuck faded out.
  window.addEventListener("pageshow", () => {
    body.classList.remove("is-leaving");
  });

  // Current year in footer.
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Active nav link.
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("a[data-nav]").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (!href || href.startsWith("http") || href.startsWith("#")) return;
    if (href === current) a.setAttribute("aria-current", "page");
  });

  // Mobile nav.
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-nav-panel]");
  if (toggle && panel) {
    const close = () => {
      toggle.setAttribute("aria-expanded", "false");
      panel.dataset.open = "false";
      body.classList.remove("nav-open");
    };
    const open = () => {
      toggle.setAttribute("aria-expanded", "true");
      panel.dataset.open = "true";
      body.classList.add("nav-open");
    };

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      expanded ? close() : open();
    });

    panel.addEventListener("click", (e) => {
      if (e.target.closest("a")) close();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) close();
    });
  }

  // Scroll reveals.
  const revealables = Array.from(document.querySelectorAll("[data-reveal]"));
  revealables.forEach((el) => {
    el.classList.add("reveal");
    const delay = el.getAttribute("data-reveal-delay");
    if (delay) el.style.setProperty("--reveal-delay", delay);
  });

  if (prefersReducedMotion || revealables.length === 0) {
    revealables.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((ent) => {
          if (!ent.isIntersecting) return;
          ent.target.classList.add("is-visible");
          io.unobserve(ent.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    revealables.forEach((el) => io.observe(el));
  }

  // Simple page transitions on same-origin navigation.
  document.addEventListener("click", (e) => {
    if (e.defaultPrevented) return;
    if (e.button && e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const a = e.target.closest("a");
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href) return;
    if (a.hasAttribute("download")) return;
    if (a.target === "_blank") return;
    if (href.startsWith("#")) return;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
    if (a.origin !== location.origin) return;
    if (prefersReducedMotion) return;

    e.preventDefault();
    body.classList.add("is-leaving");
    window.setTimeout(() => {
      location.href = a.href;
    }, 140);
  });

  // Services FAQ: keep one open at a time.
  const faqDetails = Array.from(document.querySelectorAll(".faq details"));
  if (faqDetails.length) {
    faqDetails.forEach((d) => {
      d.addEventListener("toggle", () => {
        if (!d.open) return;
        faqDetails.forEach((o) => {
          if (o !== d) o.open = false;
        });
      });
    });
  }

  // Contact form: demo-only status message.
  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const status = contactForm.querySelector("[data-form-status]");
      if (status) {
        status.textContent =
          "Thanks. This demo form does not send yet. Connect a form service or backend to make it live.";
        status.dataset.state = "ok";
      }
    });
  }
})();
