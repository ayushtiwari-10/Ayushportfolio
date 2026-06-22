import { motion } from "framer-motion";
import { skills } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-8 py-24 md:py-32" style={{ backgroundColor: "var(--color-bg-deep)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <span className="font-mono text-xs tracking-widest" style={{ color: "var(--color-amber)" }}>
            STACK
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight" style={{ color: "var(--color-text)" }}>
            What I actually build with.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className="p-6 rounded-xl"
              style={{ border: "1px solid var(--color-line)", backgroundColor: "var(--color-surface)" }}
            >
              <h3 className="font-mono text-xs tracking-widest mb-4" style={{ color: "var(--color-amber)" }}>
                {group.category.toUpperCase()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: "var(--color-surface-2)", color: "var(--color-text-dim)" }}
                  >
                    {skill}
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
