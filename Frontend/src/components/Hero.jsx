import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "../data/content";
import { useMagnetic } from "../hooks/useMagnetic";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const yearsCoding = new Date().getFullYear() - profile.codingSince;
  const magneticPrimary = useMagnetic(0.3);
  const magneticSecondary = useMagnetic(0.3);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-8 pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient accent glow */}
      <div
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-amber), transparent 70%)" }}
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        {/* Status line — the signature element, echoing real deployment status */}
        <motion.div
          variants={item}
          className="flex items-center gap-2 mb-8 font-mono text-xs md:text-sm"
          style={{ color: "var(--color-muted)" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ backgroundColor: "var(--color-amber)" }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "var(--color-amber)" }} />
          </span>
          <span>status: available for new projects</span>
          <span className="opacity-40">·</span>
          <span>{profile.location}</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-[13vw] md:text-[7.5rem] leading-[0.95] tracking-tight font-medium"
          style={{ color: "var(--color-text)" }}
        >
          <span className="sr-only">Ayush Tiwari — Full Stack Developer in {profile.location}. </span>
          <span aria-hidden="true">
            {profile.displayName}
            <span className="text-amber">.</span>
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="font-display text-2xl md:text-4xl mt-6 md:mt-8 max-w-3xl leading-[1.2] italic"
          style={{ color: "var(--color-text-dim)" }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-4 mt-10 md:mt-14">
          <button
            ref={magneticPrimary.ref}
            onMouseMove={magneticPrimary.onMouseMove}
            onMouseLeave={magneticPrimary.onMouseLeave}
            style={{ ...magneticPrimary.style, backgroundColor: "var(--color-amber)", color: "#15161a" }}
            onClick={() => scrollTo("#work")}
            className="group items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm"
          >
            See the work
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            ref={magneticSecondary.ref}
            onMouseMove={magneticSecondary.onMouseMove}
            onMouseLeave={magneticSecondary.onMouseLeave}
            style={{ ...magneticSecondary.style, border: "1px solid var(--color-line)", color: "var(--color-text)" }}
            onClick={() => scrollTo("#contact")}
            className="items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm"
          >
            Let's talk
          </button>
        </motion.div>

        {/* Stat row — concrete, earned numbers rather than decoration */}
        <motion.div
          variants={item}
          className="flex flex-wrap gap-x-10 gap-y-4 mt-16 md:mt-24 pt-8"
          style={{ borderTop: "1px solid var(--color-line)" }}
        >
          {[
            { label: "live products shipped", value: "2" },
            { label: "years building software", value: `${yearsCoding}+` },
            { label: "payment integrations done right", value: "2" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-4xl tabular" style={{ color: "var(--color-text)" }}>
                {stat.value}
              </div>
              <div className="font-mono text-xs mt-1 max-w-[10rem]" style={{ color: "var(--color-muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollTo("#work")}
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--color-muted)" }}
      >
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.button>
    </section>
  );
}