"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Services", href: "#services" },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  // true = user has scrolled down past the Hero
  const [scrolled, setScrolled] = useState(false);
  // true = mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // ── Scroll listener ─────────────────────────────────────────────────────────
  // useEffect runs after the component mounts in the browser.
  // We attach a scroll listener and clean it up when the component unmounts.
  // This pattern (add listener → return cleanup fn) is the standard way to
  // handle browser events in React.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []); // ← empty array means "run once on mount"

  // Close mobile menu when a link is clicked
  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    // ── Sticky nav wrapper ───────────────────────────────────────────────────
    // fixed + top-0 + z-50  → always visible, above all other content
    // transition-all        → smoothly animates background + shadow changes
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-sm"  // frosted glass when scrolled
          : "bg-transparent"                           // invisible over Hero
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* ── Logo / name ─────────────────────────────────────────────────── */}
        <a
          href="#hero"
          className={`text-lg font-bold tracking-tight transition-colors ${
            scrolled ? "text-gray-900" : "text-gray-900"
          }`}
        >
          DeShaun<span className="text-indigo-500">.</span>
        </a>

        {/* ── Desktop nav links (hidden on mobile) ────────────────────────── */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-500 transition-colors hover:text-indigo-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA button ───────────────────────────────────────────── */}
        <a
          href="#contact"
          className="hidden rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-600 md:block"
        >
          Hire Me
        </a>

        {/* ── Mobile hamburger button (visible only on small screens) ──────── */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {/* Swap between hamburger and X icon based on menu state */}
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </nav>

      {/* ── Mobile dropdown menu ──────────────────────────────────────────────
          AnimatePresence lets Framer Motion animate an element OUT of the DOM.
          Without it, the exit animation never plays because React removes the
          element immediately before the animation can run. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-100 bg-white md:hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-3 border-t border-gray-100 pt-3">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="block rounded-full bg-indigo-500 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-600"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
