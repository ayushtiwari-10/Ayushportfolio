import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/content";
import { useMagnetic } from "../hooks/useMagnetic";
import MeetDeveloper from "./MeetDeveloper";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const [open, setOpen] = useState(false);
  const magnetic = useMagnetic(0.3);

  return (
    <section id="about" className="px-6 md:px-8 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="font-mono text-xs tracking-widest" style={{ color: "var(--color-amber)" }}>
              ABOUT
            </span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 leading-tight" style={{ color: "var(--color-text)" }}>
              I build the part that has to actually work.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-5 text-base md:text-lg leading-relaxed"
            style={{ color: "var(--color-text-dim)" }}
          >
            <p>
              I'm {profile.name} — a full-stack developer based in {profile.location}. I'm
              finishing my final year of a Computer Science degree, but most of what I know
              came from actually shipping things: real payment flows, real users, real bugs at
              11 PM.
            </p>
            <p>
              I don't build demos. The three projects on this page are live right now — handling
              real payments, real video content, and real people using them. That distinction
              matters to me more than almost anything else: a portfolio full of "in progress"
              projects tells a client nothing about whether you can actually finish.
            </p>
            <p>
              I work mostly in the MERN stack, but I care less about any one technology and
              more about the boring, unglamorous parts most tutorials skip — webhook retries,
              signed tokens, error states, the stuff that's invisible when it works and
              catastrophic when it doesn't.
            </p>
            <p style={{ color: "var(--color-text)" }} className="font-medium">
              If you have an idea and need someone to take it from a Figma file (or a napkin
              sketch) to something people can actually use — that's the work I want.
            </p>
            <div className="pt-3">
              <button
                ref={magnetic.ref}
                onMouseMove={magnetic.onMouseMove}
                onMouseLeave={magnetic.onMouseLeave}
                onClick={() => setOpen(true)}
                style={{ ...magnetic.style, backgroundColor: "var(--color-amber)", color: "#15161a" }}
                className="group items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm"
              >
                Meet the developer
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <MeetDeveloper open={open} onClose={() => setOpen(false)} />
    </section>
  );
}