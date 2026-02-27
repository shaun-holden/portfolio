"use client";

import { motion } from "framer-motion";

// ─── whileInView ──────────────────────────────────────────────────────────────
// Unlike the Hero which animates on page load, sections below the fold use
// whileInView — the animation only triggers when the element scrolls into
// the browser's visible area. viewport={{ once: true }} means it only plays
// once, not every time you scroll past it.

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

// The things I'm great at — displayed as a simple checklist
const highlights = [
  "Building full-stack apps from concept to deployment",
  "Real-time features with WebSockets (Socket.IO)",
  "Payment integrations with Stripe",
  "Clean, mobile-first UI with React & Tailwind",
  "REST API design with Node.js, Express & Prisma",
  "PostgreSQL database design and optimization",
];

export default function About() {
  return (
    // ─── Section wrapper ─────────────────────────────────────────────────────
    // py-28        → generous top/bottom padding so sections breathe
    // bg-gray-50   → very subtle off-white background differentiates this
    //               section from the white Hero above it
    <section id="about" className="bg-gray-50 py-28 px-6">

      {/* Constrain content width and center it */}
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
          {/* Small indigo label above the heading — consistent with Hero style */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-500">
            About Me
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Developer focused on results
          </h2>
        </motion.div>

        {/* ── Two-column layout ───────────────────────────────────────────── */}
        {/* On mobile: single column. On desktop (lg): side by side.          */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">

          {/* ── Left column: bio text ───────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6 text-lg leading-relaxed text-gray-600"
          >
            <p>
              I&apos;m a full-stack developer based in{" "}
              <span className="font-semibold text-gray-900">Atlanta, Georgia</span>,
              specializing in custom web applications for small businesses. I work
              with clients from initial idea all the way through design, development,
              and deployment.
            </p>
            <p>
              Whether you need an{" "}
              <span className="font-semibold text-gray-900">online ordering platform</span>,
              an{" "}
              <span className="font-semibold text-gray-900">invoicing system</span>, or a{" "}
              <span className="font-semibold text-gray-900">booking tool</span> — I build
              software that solves real problems and helps your business run more smoothly.
            </p>
            <p>
              I care about writing clean code, hitting deadlines, and making sure you
              actually understand what I&apos;ve built. No jargon, no black boxes.
            </p>

            {/* CTA link that scrolls to the contact section */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold text-indigo-500 transition-colors hover:text-indigo-600"
            >
              Let&apos;s work together
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* ── Right column: highlights checklist ─────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden:  {},
              // stagger each list item 0.08s apart
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <ul className="space-y-4">
              {highlights.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex items-start gap-3"
                >
                  {/* Indigo checkmark circle */}
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                    <svg
                      className="h-3.5 w-3.5 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
