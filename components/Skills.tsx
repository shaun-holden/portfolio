"use client";

import { motion } from "framer-motion";

// ─── Skill data ───────────────────────────────────────────────────────────────
// Each skill has a name and a `color` — a small dot shown before the name
// using that technology's official brand color. This makes the list visually
// distinct without needing to load icon libraries.
const categories = [
  {
    name: "Frontend",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: "React",       color: "#61DAFB" },
      { name: "Next.js",     color: "#000000" },
      { name: "TypeScript",  color: "#3178C6" },
      { name: "JavaScript",  color: "#F7DF1E" },
      { name: "Tailwind CSS",color: "#06B6D4" },
      { name: "HTML & CSS",  color: "#E34F26" },
      { name: "Framer Motion", color: "#FF0055" },
    ],
  },
  {
    name: "Backend",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: [
      { name: "Node.js",     color: "#339933" },
      { name: "Express",     color: "#404040" },
      { name: "REST APIs",   color: "#FF6C37" },
      { name: "Socket.IO",   color: "#010101" },
      { name: "JWT Auth",    color: "#D63AFF" },
      { name: "Stripe",      color: "#635BFF" },
      { name: "Nodemailer",  color: "#22B8CF" },
    ],
  },
  {
    name: "Database",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: [
      { name: "PostgreSQL",  color: "#4169E1" },
      { name: "Prisma ORM",  color: "#5A67D8" },
      { name: "SQL",         color: "#F29111" },
    ],
  },
  {
    name: "Tools & Platforms",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    skills: [
      { name: "Git & GitHub",  color: "#F05032" },
      { name: "Railway",       color: "#7B45E7" },
      { name: "Vercel",        color: "#000000" },
      { name: "Cloudinary",    color: "#3448C5" },
      { name: "Postman",       color: "#FF6C37" },
      { name: "VS Code",       color: "#007ACC" },
    ],
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    // Alternating background: gray-50 like the About section
    <section id="skills" className="bg-gray-50 py-28 px-6">
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
            Tech Stack
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            The tools I reach for to get the job done.
          </p>
        </motion.div>

        {/* ── 2×2 category grid ─────────────────────────────────────────── */}
        {/* 1 column on mobile, 2 on md and up                               */}
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              {/* Category title with icon */}
              <div className="mb-6 flex items-center gap-3">
                {/* Icon in an indigo tinted circle */}
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  {cat.icon}
                </span>
                <h3 className="text-lg font-bold text-gray-900">{cat.name}</h3>
              </div>

              {/* Skill badges — flex-wrap so they flow naturally */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-indigo-100 hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    {/* Brand color dot — a small visual cue for each technology */}
                    <span
                      className="h-2 w-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: skill.color }}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
