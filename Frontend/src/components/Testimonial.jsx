import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonial() {
  return (
    <section className="px-6 md:px-8 py-20 md:py-28" style={{ backgroundColor: "var(--color-bg-deep)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs tracking-widest" style={{ color: "var(--color-amber)" }}>
            KIND WORDS
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col p-8 rounded-2xl"
              style={{ border: "1px solid var(--color-line)", backgroundColor: "var(--color-surface)" }}
            >
              <Quote size={24} style={{ color: "var(--color-amber)" }} className="mb-5 flex-shrink-0" />
              <p
                className="font-display text-xl italic leading-relaxed flex-1"
                style={{ color: "var(--color-text)" }}
              >
                "{t.quote}"
              </p>
              <div className="mt-6 pt-5" style={{ borderTop: "1px solid var(--color-line)" }}>
                <p className="font-medium" style={{ color: "var(--color-text)" }}>
                  {t.name}
                </p>
                <p className="font-mono text-xs mt-1" style={{ color: "var(--color-muted)" }}>
                  {t.role}
                </p>
                <span
                  className="inline-block font-mono text-[10px] mt-2 px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--color-amber) 12%, transparent)",
                    color: "var(--color-amber)",
                  }}
                >
                  {t.project}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}