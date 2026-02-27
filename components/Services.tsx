"use client";

import { motion } from "framer-motion";

// ─── Service data ─────────────────────────────────────────────────────────────
// `featured: true` on one card gives it the filled indigo treatment.
// This draws the eye and signals "this is the most popular / best value" option.
const services = [
  {
    title: "Business Website",
    price: "$500 – $1,500",
    unit: "one-time",
    description:
      "A clean, fast, mobile-friendly website to establish your online presence and win more customers.",
    includes: [
      "Custom design (no templates)",
      "Up to 5 pages",
      "Contact form",
      "Mobile responsive",
      "SEO basics",
      "1 month of support",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12c0 .778.099 1.533.284 2.253" />
      </svg>
    ),
    featured: false,
  },
  {
    title: "Web Application",
    price: "$1,500 – $5,000",
    unit: "one-time",
    description:
      "A fully custom web app built around your specific workflow — with user accounts, dashboards, and real business logic.",
    includes: [
      "Full-stack development",
      "User authentication & roles",
      "Custom database design",
      "Admin dashboard",
      "API integrations",
      "3 months of support",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    // This is the featured card — it gets the filled indigo background
    featured: true,
  },
  {
    title: "Online Ordering System",
    price: "$2,000 – $4,000",
    unit: "one-time",
    description:
      "A complete ordering platform with a menu, cart, payments, and a real-time dashboard for your team.",
    includes: [
      "Menu management",
      "Cart & checkout",
      "Stripe payments",
      "Real-time order dashboard",
      "Order status updates",
      "3 months of support",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    featured: false,
  },
  {
    title: "Ongoing Maintenance",
    price: "$200 – $500",
    unit: "per month",
    description:
      "I keep your app healthy — updates, bug fixes, new features, and a developer you can reach when something breaks.",
    includes: [
      "Bug fixes & patches",
      "Dependency updates",
      "Small feature additions",
      "Performance monitoring",
      "Priority response time",
      "Monthly check-in call",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    featured: false,
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-28 px-6">
      <div className="mx-auto max-w-6xl">

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
            Services
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            What I Build
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Transparent pricing. No surprises.
          </p>
        </motion.div>

        {/* ── Cards grid ─────────────────────────────────────────────────── */}
        {/* 1 col → 2 col on md → 4 col on xl                                */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

        {/* ── Footer note ────────────────────────────────────────────────── */}
        <motion.p
          className="mt-12 text-center text-sm text-gray-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          Prices vary based on complexity and timeline.{" "}
          <a href="#contact" className="text-indigo-500 hover:underline">
            Let&apos;s talk about your project
          </a>{" "}
          for an accurate quote.
        </motion.p>

      </div>
    </section>
  );
}

// ─── ServiceCard sub-component ───────────────────────────────────────────────
function ServiceCard({ service }: { service: typeof services[0] }) {
  // The featured card gets an inverted color scheme:
  //   - dark indigo background instead of white
  //   - white text instead of gray
  //   - white CTA button instead of indigo
  const f = service.featured;

  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // scale up slightly on hover — more subtle than the project cards
      whileHover={{ y: -4 }}
      className={`relative flex flex-col rounded-2xl p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl ${
        f
          ? "bg-indigo-600 text-white"
          : "border border-gray-100 bg-white text-gray-900"
      }`}
    >
      {/* "Most Popular" badge — only shown on the featured card */}
      {f && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-indigo-600 shadow-md">
          Most Popular
        </span>
      )}

      {/* Icon */}
      <span
        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${
          f ? "bg-white/20" : "bg-indigo-50 text-indigo-600"
        }`}
      >
        {service.icon}
      </span>

      {/* Title & price */}
      <h3 className={`mb-1 text-xl font-bold ${f ? "text-white" : "text-gray-900"}`}>
        {service.title}
      </h3>

      <div className="mb-4">
        <span className={`text-3xl font-extrabold ${f ? "text-white" : "text-gray-900"}`}>
          {service.price}
        </span>
        <span className={`ml-1 text-sm ${f ? "text-indigo-200" : "text-gray-400"}`}>
          {service.unit}
        </span>
      </div>

      <p className={`mb-6 text-sm leading-relaxed ${f ? "text-indigo-100" : "text-gray-500"}`}>
        {service.description}
      </p>

      {/* What's included list — flex-1 pushes the CTA button to the bottom */}
      <ul className="mb-8 flex-1 space-y-3">
        {service.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <svg
              className={`mt-0.5 h-4 w-4 shrink-0 ${f ? "text-indigo-200" : "text-indigo-500"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className={`text-sm ${f ? "text-indigo-100" : "text-gray-600"}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA — scrolls to the Contact section */}
      <a
        href="#contact"
        className={`block rounded-xl py-3 text-center text-sm font-semibold transition-all duration-200 ${
          f
            ? "bg-white text-indigo-600 hover:bg-indigo-50"
            : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
        }`}
      >
        Get Started
      </a>
    </motion.div>
  );
}
