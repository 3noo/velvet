"use client";

import { useState } from "react";

import { SITE } from "@/lib/site";

type FormState = "idle" | "ok";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("We reply within 1-2 business days.");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const fd = new FormData(form);
        const name = String(fd.get("name") ?? "").trim();
        const email = String(fd.get("email") ?? "").trim();
        const type = String(fd.get("type") ?? "").trim();
        const budget = String(fd.get("budget") ?? "").trim();
        const bodyMessage = String(fd.get("message") ?? "").trim();

        const subject = `New inquiry: ${type || "Project"}`;
        const body = [
          `Name: ${name}`,
          `Email: ${email}`,
          `Project type: ${type}`,
          `Budget: ${budget}`,
          "",
          "Message:",
          bodyMessage
        ].join("\n");

        const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;

        // Client-only "send" that works without any backend:
        // open a pre-filled email draft to the studio inbox.
        window.location.href = mailto;

        setState("ok");
        setMessage(
          `Email draft opened. If it didn’t, send your note to ${SITE.email}.`
        );
      }}
    >
      <label>
        Name
        <input name="name" autoComplete="name" required />
      </label>

      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>

      <label>
        Project type
        <select name="type" defaultValue="" required>
          <option value="" disabled>
            Select one
          </option>
          <option>Identity Sprint</option>
          <option>Website Build</option>
          <option>Campaign Kit</option>
          <option>Not sure yet</option>
        </select>
      </label>

      <label>
        Budget
        <select name="budget" defaultValue="" required>
          <option value="" disabled>
            Select one
          </option>
          <option>$2k - $5k</option>
          <option>$5k - $10k</option>
          <option>$10k+</option>
          <option>Prefer not to say</option>
        </select>
      </label>

      <label>
        Message
        <textarea
          name="message"
          required
          placeholder="Link your current site and describe the goal."
        ></textarea>
      </label>

      <button className="btn btn--primary" type="submit">
        Send
      </button>

      <div className="form-status" data-state={state} aria-live="polite">
        {message}
      </div>
    </form>
  );
}
