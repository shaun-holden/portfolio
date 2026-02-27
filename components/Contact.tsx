"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// ─── YOUR FORMSPREE ENDPOINT ──────────────────────────────────────────────────
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form — it will give you an ID like "xyzabcde"
// 3. Replace "YOUR_FORM_ID" below with that ID
const FORMSPREE_URL = "https://formspree.io/f/mzdawpon";

// ─── Contact link data ────────────────────────────────────────────────────────
const contactLinks = [
  {
    label: "shaunm78@me.com",       // ← update if you want a different email shown
    href: "mailto:shaunm78@me.com",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "LinkedIn — DeShaun Holden",
    href: "https://linkedin.com/in/deshaun-holden-17791011",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "github.com/shaun-holden",
    href: "https://github.com/shaun-holden",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

// ─── Form state type ──────────────────────────────────────────────────────────
type Status = "idle" | "submitting" | "success" | "error";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  // Track what the user has typed into each field
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  // Track where we are in the submission lifecycle
  const [status, setStatus] = useState<Status>("idle");

  // Generic change handler — works for any input/textarea
  // e.target.name matches the `name` attribute on each field
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();  // stop the browser from reloading the page
    setStatus("submitting");

    try {
      // POST the form data to Formspree as JSON
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        setStatus("success");
        setFields({ name: "", email: "", message: "" }); // clear the form
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-gray-50 py-28 px-6">
      <div className="mx-auto max-w-5xl">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-500">
            Contact
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Let&apos;s talk. I respond within 24 hours.
          </p>
        </motion.div>

        {/* ── Two-column layout ───────────────────────────────────────────── */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">

          {/* ── Left: warm copy + contact links ────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Whether you have a clear idea or just a problem you need solved —
              reach out. I&apos;ll ask the right questions and give you an honest
              assessment of what it would take to build.
            </p>

            {/* Contact links */}
            <ul className="space-y-5">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-gray-600 transition-colors hover:text-indigo-600"
                  >
                    {/* Icon circle */}
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gray-400 shadow-sm ring-1 ring-gray-100 transition-all group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:ring-indigo-100">
                      {link.icon}
                    </span>
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right: contact form ────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            {/* Success state — shown after a successful submission */}
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-green-100 bg-green-50 px-8 py-16 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Message sent!</h3>
                <p className="text-gray-500">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-indigo-500 hover:text-indigo-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                {/* Name field */}
                <div className="mb-5">
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={fields.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                {/* Email field */}
                <div className="mb-5">
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={fields.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                {/* Message field */}
                <div className="mb-6">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={fields.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    Something went wrong. Please try emailing me directly at{" "}
                    <a href="mailto:shaunm78@me.com" className="font-semibold underline">
                      shaunm78@me.com
                    </a>
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
