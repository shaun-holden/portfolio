"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// ─── Project data ─────────────────────────────────────────────────────────────
// To add a real screenshot:
//   1. Take a screenshot of your live app (browser window, ~1280×720)
//   2. Save it to public/projects/ with the filename shown in `image` below
//   3. That's it — the card will automatically show the image instead of the gradient
const projects = [
  {
    id: 0,
    title: "GymHub",
    description: "Real-world SaaS payment platform for competitive gymnastics programs. Gym owners and coaches collect and manage competition fees through a streamlined, Stripe-powered workflow.",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Stripe", "Railway", "Tailwind CSS"],
    liveUrl: "https://gymhub.live",
    githubUrl: "#",
    image: "/projects/gymhub.png",
    gradient: "from-teal-400 via-emerald-400 to-green-500",
    icon: (<svg className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>),
  },
  {
    id: 1,
    title: "Restaurant Ordering System",
    description:
      "Full-stack ordering platform where customers browse a menu, customize items, and place orders. Kitchen staff see new orders appear in real-time without refreshing.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Socket.IO", "Tailwind CSS", "Cloudinary"],
    liveUrl: "https://backend-production-71c4.up.railway.app",
    githubUrl: "https://github.com/shaun-holden/restaurant-app",
    image: "/projects/restaurant.png",     // ← drop screenshot here when ready
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
    image: "/projects/invoice.png",        // ← drop screenshot here when ready
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
    image: "/projects/booking.png",        // ← drop screenshot here when ready
    gradient: "from-emerald-400 via-teal-400 to-green-500",
    icon: (
      <svg className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Cookfectionary",
    description:
      "Full-stack catering platform with online ordering, real-time customer-admin messaging, Stripe payments, invoice management, and a photo gallery with lightbox.",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Socket.IO", "Cloudinary", "Tailwind CSS"],
    liveUrl: "https://cookfectionary-app-production.up.railway.app",
    githubUrl: "https://github.com/shaun-holden/cookfectionary",
    image: "/projects/cookfectionary.png",
    gradient: "from-amber-400 via-orange-400 to-red-500",
    icon: (
      <svg className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "School Bus Tracker",
    description:
      "Real-time GPS tracking platform for school buses with role-based dashboards for parents, drivers, and admins. Features live maps, attendance tracking, and parent notifications.",
    tech: ["React", "TypeScript", "Vite", "Express", "PostgreSQL", "Drizzle", "Leaflet", "Stripe", "Tailwind CSS"],
    liveUrl: "https://successful-creation-production.up.railway.app",
    githubUrl: "https://github.com/shaun-holden/school-bus-tracker",
    image: "/projects/school-bus-tracker.png",
    gradient: "from-yellow-400 via-amber-400 to-orange-500",
    icon: (
      <svg className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Gym Task Manager",
    description:
      "Internal task management app for gyms with role-based workflows, end-of-day reporting templates, real-time notifications via Socket.IO, and automated email reminders.",
    tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma", "Socket.IO", "JWT", "Tailwind CSS"],
    liveUrl: "https://gym-task-manager-production.up.railway.app",
    githubUrl: "#",
    image: "/projects/gym-task-manager.png",
    gradient: "from-blue-400 via-indigo-400 to-violet-500",
    icon: (
      <svg className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
  },
  {
    id: 10,
    title: "Fusion Athletic Center",
    description:
      "Modern website for a gymnastics facility featuring animated hero sections, interactive program selector, class schedules with live day indicator, and Google Maps integration.",
    tech: ["Next.js", "React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://protective-reflection-production-9753.up.railway.app",
    githubUrl: "#",
    image: "/projects/fusion-gymnastics.png",
    gradient: "from-violet-400 via-purple-400 to-indigo-500",
    icon: (
      <svg className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-28 px-6">
      <div className="mx-auto max-w-6xl">

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

// ─── ProjectCard ──────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: typeof projects[0] }) {
  const hasLiveUrl   = project.liveUrl   !== "#";
  const hasGithubUrl = project.githubUrl !== "#";

  // Check if a real screenshot file exists for this project.
  // We do this by checking if the `image` path is set AND the file is present.
  // Next.js <Image> needs `fill` + a positioned parent for aspect-ratio images.
  const hasImage = Boolean(project.image);

  return (
    <motion.article
      variants={{
        hidden:  { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      {/* ── Image area ────────────────────────────────────────────────── */}
      {/* aspect-video keeps 16:9 ratio whether it's a screenshot or gradient */}
      <div className={`relative aspect-video overflow-hidden ${!hasImage ? `bg-gradient-to-br ${project.gradient} flex items-center justify-center` : ""}`}>
        {hasImage ? (
          // Next.js <Image> with fill — fills the aspect-video container.
          // sizes tells the browser how wide the image will be at each breakpoint
          // so it can download the right size (performance optimization).
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <>
            {project.icon}
            <div className="absolute inset-0 bg-black/5" />
          </>
        )}
      </div>

      {/* ── Card body ─────────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-6">

        <h3 className="mb-2 text-xl font-bold text-gray-900">
          {project.title}
        </h3>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">
          {project.description}
        </p>

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

        <div className="flex items-center gap-4 border-t border-gray-100 pt-5">
          {hasLiveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-indigo-500 transition-colors hover:text-indigo-700"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Live Demo
            </a>
          ) : (
            <span className="text-sm text-gray-300">Coming soon</span>
          )}

          {hasLiveUrl && hasGithubUrl && <span className="text-gray-200">·</span>}

          {hasGithubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900"
            >
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
