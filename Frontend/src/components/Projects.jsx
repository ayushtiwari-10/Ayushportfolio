import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { projects } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function BrowserFrame({ project }) {
  const displayUrl = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: "1px solid var(--color-line)", backgroundColor: "var(--color-surface)" }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: "1px solid var(--color-line)", backgroundColor: "var(--color-surface-2)" }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div
          className="flex-1 mx-2 px-3 py-1 rounded-md font-mono text-[11px] truncate text-center"
          style={{ backgroundColor: "var(--color-bg)", color: "var(--color-muted)" }}
        >
          {displayUrl}
        </div>
      </div>

      {/* Screenshot */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden group"
        style={{ aspectRatio: "16/10" }}
      >
        <img
          src={project.previewImage}
          alt={`${project.name} screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ backgroundColor: "rgba(21,22,26,0.55)", backdropFilter: "blur(3px)" }}
        >
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium shadow-lg"
            style={{ backgroundColor: "var(--color-amber)", color: "#15161a" }}
          >
            Visit live site <ArrowUpRight size={15} />
          </span>
        </div>
      </a>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid md:grid-cols-2 gap-8 md:gap-12 items-center py-16 md:py-20"
      style={{ borderBottom: "1px solid var(--color-line)" }}
    >
      <div className={reversed ? "md:order-2" : ""}>
        <BrowserFrame project={project} />
      </div>

      <div className={reversed ? "md:order-1" : ""}>
        <div className="flex items-center gap-3 mb-4">
          <span
            className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider px-2.5 py-1 rounded-full"
            style={{ backgroundColor: "color-mix(in srgb, var(--color-amber) 15%, transparent)", color: "var(--color-amber)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--color-amber)" }} />
            {project.status}
          </span>
          {project.hero && (
            <span className="font-mono text-[11px] tracking-wider" style={{ color: "var(--color-muted)" }}>
              FLAGSHIP PROJECT
            </span>
          )}
        </div>

        <h3 className="font-display text-3xl md:text-4xl" style={{ color: "var(--color-text)" }}>
          {project.name}
        </h3>
        <p className="font-display italic text-lg md:text-xl mt-2" style={{ color: "var(--color-amber)" }}>
          {project.tagline}
        </p>

        <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--color-text-dim)" }}>
          {project.description}
        </p>

        <ul className="mt-6 space-y-2.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "var(--color-text-dim)" }}>
              <Check size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--color-amber)" }} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2.5 py-1 rounded-full"
              style={{ border: "1px solid var(--color-line)", color: "var(--color-muted)" }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-7">
          <span className="font-mono text-xs" style={{ color: "var(--color-muted)" }}>
            {project.role}
          </span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:gap-2.5 transition-all"
            style={{ color: "var(--color-text)" }}
          >
            Visit site <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-mono text-xs tracking-widest" style={{ color: "var(--color-amber)" }}>
            SELECTED WORK
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight" style={{ color: "var(--color-text)" }}>
            Two products. Both live. Both still running.
          </h2>
        </motion.div>

        <div className="mt-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}