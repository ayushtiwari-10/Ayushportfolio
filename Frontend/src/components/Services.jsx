import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Services() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="px-6 md:px-8 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
        >
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest" style={{ color: "var(--color-amber)" }}>
              SERVICES
            </span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight" style={{ color: "var(--color-text)" }}>
              What I can take off your plate.
            </h2>
          </div>
          <p className="font-mono text-sm max-w-xs" style={{ color: "var(--color-muted)" }}>
            Every project is different, so pricing is discussed once I understand what you
            need — not before.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "var(--color-line)" }}
        >
          {services.map((service) => (
            <motion.button
              key={service.title}
              variants={fadeUp}
              onClick={scrollToContact}
              className="group text-left p-7 md:p-8 transition-colors"
              style={{ backgroundColor: "var(--color-bg)" }}
            >
              <h3
                className="font-display text-xl leading-snug transition-colors"
                style={{ color: "var(--color-text)" }}
              >
                {service.title}
              </h3>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {service.description}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-medium mt-5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--color-amber)" }}
              >
                Inquire <ArrowRight size={14} />
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
