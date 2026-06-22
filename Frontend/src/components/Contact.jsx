import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { profile } from "../data/content";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.74.4-1.26.72-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.08.78 2.18v3.23c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    // Fallback: no backend configured yet, open the visitor's email client instead.
    if (!profile.contactApiUrl) {
      setStatus("sending");
      const subject = encodeURIComponent(`New project inquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setTimeout(() => setStatus("sent"), 600);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`${profile.contactApiUrl.replace(/\/$/, "")}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 md:px-8 py-24 md:py-36 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] rounded-full opacity-[0.12] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-amber), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="font-mono text-xs tracking-widest" style={{ color: "var(--color-amber)" }}>
            LET'S BUILD SOMETHING
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight" style={{ color: "var(--color-text)" }}>
            Got an idea? Let's see if it's a fit.
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "var(--color-text-dim)" }}>
            No retainers, no sales calls you don't need — just tell me what you're trying to
            build, and I'll tell you honestly if I'm the right person for it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 p-5 rounded-xl group transition-colors"
              style={{ border: "1px solid var(--color-line)" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "color-mix(in srgb, var(--color-amber) 15%, transparent)" }}
              >
                <Mail size={18} style={{ color: "var(--color-amber)" }} />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[11px]" style={{ color: "var(--color-muted)" }}>
                  EMAIL
                </p>
                <p className="text-sm truncate" style={{ color: "var(--color-text)" }}>
                  {profile.email}
                </p>
              </div>
              <ArrowUpRight size={16} className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--color-muted)" }} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl group transition-colors"
              style={{ border: "1px solid var(--color-line)" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "color-mix(in srgb, var(--color-amber) 15%, transparent)" }}
              >
                <LinkedinIcon style={{ color: "var(--color-amber)" }} className="w-[18px] h-[18px]" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[11px]" style={{ color: "var(--color-muted)" }}>
                  LINKEDIN
                </p>
                <p className="text-sm truncate" style={{ color: "var(--color-text)" }}>
                  Connect with me
                </p>
              </div>
              <ArrowUpRight size={16} className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--color-muted)" }} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl group transition-colors"
              style={{ border: "1px solid var(--color-line)" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "color-mix(in srgb, var(--color-amber) 15%, transparent)" }}
              >
                <GithubIcon style={{ color: "var(--color-amber)" }} className="w-[18px] h-[18px]" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[11px]" style={{ color: "var(--color-muted)" }}>
                  GITHUB
                </p>
                <p className="text-sm truncate" style={{ color: "var(--color-text)" }}>
                  See the code
                </p>
              </div>
              <ArrowUpRight size={16} className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--color-muted)" }} />
            </a>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="font-mono text-[11px] tracking-wider" style={{ color: "var(--color-muted)" }}>
                YOUR NAME
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jordan Smith"
                className="w-full mt-2 px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-line)", color: "var(--color-text)" }}
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-[11px] tracking-wider" style={{ color: "var(--color-muted)" }}>
                YOUR EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jordan@company.com"
                className="w-full mt-2 px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-line)", color: "var(--color-text)" }}
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-[11px] tracking-wider" style={{ color: "var(--color-muted)" }}>
                WHAT ARE YOU BUILDING?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about the project, timeline, and what you need."
                className="w-full mt-2 px-4 py-3 rounded-lg text-sm outline-none resize-none transition-colors"
                style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-line)", color: "var(--color-text)" }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-sm transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              style={{ backgroundColor: status === "error" ? "var(--color-muted)" : "var(--color-amber)", color: "#15161a" }}
            >
              {status === "sending" && "Sending…"}
              {status === "sent" && (profile.contactApiUrl ? "Message sent" : "Opening your email app…")}
              {status === "error" && "Something went wrong — try again"}
              {status === "idle" && <>Send the message <Send size={15} /></>}
            </button>
            <p className="font-mono text-[11px] text-center" style={{ color: "var(--color-muted)" }}>
              {profile.contactApiUrl
                ? "Sent directly — I'll get back to you at the email you provide."
                : "This opens your email client with the message pre-filled — nothing is sent automatically."}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
