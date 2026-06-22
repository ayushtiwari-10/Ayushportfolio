import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonial } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonial() {
  return (
    <section className="px-6 md:px-8 py-20 md:py-28" style={{ backgroundColor: "var(--color-bg-deep)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Quote
            size={32}
            className="mx-auto mb-6"
            style={{ color: "var(--color-amber)" }}
          />
          <p
            className="font-display text-2xl md:text-3xl italic leading-snug"
            style={{ color: "var(--color-text)" }}
          >
            "{testimonial.quote}"
          </p>
          <div className="mt-6">
            <p className="font-medium" style={{ color: "var(--color-text)" }}>
              {testimonial.name}
            </p>
            <p className="font-mono text-xs mt-1" style={{ color: "var(--color-muted)" }}>
              {testimonial.role}
            </p>
          </div>
          {testimonial.isPlaceholder && (
            <p
              className="font-mono text-[11px] mt-6 px-3 py-1.5 rounded-full inline-block"
              style={{ border: "1px dashed var(--color-line)", color: "var(--color-muted)" }}
            >
              placeholder — real quote pending
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
