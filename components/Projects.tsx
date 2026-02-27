"use client";

import { motion } from "framer-motion";

// ─── Project data ─────────────────────────────────────────────────────────────
// Keep all project info here. When you have real screenshots, swap the
// `gradient` field for an `image` field and use Next.js <Image />.
// When you have real URLs, replace the placeholder strings below.
const projects = [
  {
    id: 1,
    title: "Restaurant Ordering System",
    description:
      "Full-stack ordering platform where customers browse a menu, customize items, and place orders. Kitchen staff see new orders appear in real-time without refreshing.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Socket.IO", "Tailwind CSS", "Cloudinary"],
    liveUrl: "https://backend-production-71c4.up.railway.app",
    githubUrl: "https://github.com/shaun-holden/restaurant-app",
    // Gradient shown as the card image until you add a real screenshot.
    // Colors chosen to match a warm restaurant feel.
    gradient: "from-orange-400 via-rose-400 to-pink-500",
    icon: (
      <svg className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 19.5l-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Invoice Generator",
    description:
      "Professional invoicing tool that lets freelancers create, customize, and export invoices to PDF. Supports multiple tax lines, currency selection, and auto-incrementing invoice numbers.",
    tech: ["HTML", "CSS", "JavaScript", "localStorage"],
    liveUrl: "https://invoice-generator-production-9dd5.up.railway.app",
    githubUrl: "https://github.com/shaun-holden/invoice-generator",
    gradient: "from-indigo-400 via-blue-400 to-cyan-400",
    icon: (
      <svg className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Booking System",
    description:
      "Appointment scheduling platform where service providers set their availability and customers book time slots online. Includes role-based dashboards and email notifications.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Nodemailer", "Tailwind CSS"],
    liveUrl: "https://booking-system-production-a93a.up.railway.app",
    githubUrl: "https://github.com/shaun-holden/booking-system",
    gradient: "from-emerald-400 via-teal-400 to-green-500",
    icon: (
      <svg className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-28 px-6">
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
            My Work
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Real applications built for real use cases.
          </p>
        </motion.div>

        {/* ── Project cards grid ─────────────────────────────────────────── */}
        {/* 1 column on mobile → 2 on md → 3 on lg                           */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// ─── ProjectCard sub-component ───────────────────────────────────────────────
// Splitting the card into its own component keeps the JSX readable above.
// It receives one project object as a prop and renders the full card.
function ProjectCard({ project }: { project: typeof projects[0] }) {
  const hasLiveUrl   = project.liveUrl   !== "#";
  const hasGithubUrl = project.githubUrl !== "#";

  return (
    <motion.article
      variants={{
        hidden:  { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      // whileHover lifts the card and deepens the shadow on mouse-over.
      // This works alongside the parent stagger — they don't conflict.
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      {/* ── Gradient image placeholder ────────────────────────────────── */}
      {/* aspect-video = 16:9 ratio, same as a screenshot.                 */}
      {/* When you add real screenshots, replace this div with:             */}
      {/*   <Image src="/projects/restaurant.png" alt="..." fill />         */}
      {/*   (and add position-relative + aspect-video to the wrapper)       */}
      <div
        className={`relative flex aspect-video items-center justify-center bg-gradient-to-br ${project.gradient}`}
      >
        {project.icon}
        {/* Subtle overlay so the icon pops on any gradient */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* ── Card body ─────────────────────────────────────────────────── */}
      {/* flex-1 pushes the footer links to the bottom regardless of        */}
      {/* how much text each card has — all cards stay the same height.     */}
      <div className="flex flex-1 flex-col p-6">

        <h3 className="mb-2 text-xl font-bold text-gray-900">
          {project.title}
        </h3>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">
          {project.description}
        </p>

        {/* Tech stack badges */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* ── Links ─────────────────────────────────────────────────── */}
        <div className="flex items-center gap-4 border-t border-gray-100 pt-5">

          {/* Live demo link */}
          {hasLiveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-indigo-500 transition-colors hover:text-indigo-700"
            >
              {/* External link icon */}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Live Demo
            </a>
          ) : (
            <span className="text-sm text-gray-300">Coming soon</span>
          )}

          {/* Divider dot */}
          {hasLiveUrl && hasGithubUrl && (
            <span className="text-gray-200">·</span>
          )}

          {/* GitHub link */}
          {hasGithubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900"
            >
              {/* GitHub mark icon */}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          )}

        </div>
      </div>
    </motion.article>
  );
}
