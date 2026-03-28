"use client";
// ↑ This tells Next.js to run this component in the browser (client-side).
//   We need it because Framer Motion animations run in the browser, not on
//   the server. Any component using hooks (useState, useEffect) or browser
//   APIs also needs this directive.

import { motion } from "framer-motion";

// ─── Animation variants ───────────────────────────────────────────────────────
// A "variant" is a named animation state. We define "hidden" and "visible"
// once here, then reuse them across multiple elements.
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },   // start: invisible, 24px below final position
  visible: { opacity: 1, y: 0 },    // end:   fully visible, in place
};

export default function Hero() {
  return (
    // ─── Section wrapper ─────────────────────────────────────────────────────
    // min-h-screen   → takes up at least the full viewport height
    // flex + items/justify center → vertically and horizontally centers content
    // px-6           → horizontal padding so text doesn't touch the screen edge on mobile
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/* ── Animated container — staggers children in one by one ────────────
          staggerChildren: each child waits 0.15s after the previous one starts.
          This creates the cascading "fade up" effect without writing separate
          delays for every element. */}
      <motion.div
        className="max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden:  {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Eyebrow label — small text above the name */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-500"
        >
          Full-Stack Web Developer · Atlanta, GA
        </motion.p>

        {/* Main headline — your name, large and bold */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl"
        >
          Hi, I&apos;m{" "}
          {/* The accent color highlights your name and draws the eye */}
          <span className="text-indigo-500">DeShaun Holden</span>
        </motion.h1>

        {/* Tagline — one punchy sentence about what you do */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 text-xl leading-relaxed text-gray-500 sm:text-2xl"
        >
          I build custom web apps for small businesses. Available for freelance projects and open to full-time roles.
        </motion.p>

        {/* CTA button — scrolls to the Projects section */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <a
            href="#projects"
            // group — lets child elements react to the parent's hover state
            className="group inline-flex items-center gap-2 rounded-full bg-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-indigo-600 hover:shadow-indigo-200 hover:shadow-xl"
          >
            View My Work
            {/* Arrow icon that slides right on hover */}
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator — subtle bouncing arrow at the bottom ───────────
          This reassures visitors that there's more content below. */}
      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}        // bounces 8px down then back
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-gray-300"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
