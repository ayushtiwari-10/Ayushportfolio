import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Mail, Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { profile, projects } from "../data/content";

const FUN_FACTS = [
  "Both live projects on this site handle real Razorpay payments — not test mode.",
  "This portfolio's contact form runs through a real backend on Render, sending mail via Brevo.",
  "Ayush has been coding since 2023 and shipped two full production apps solo since then.",
  "The Coffee Comfort uses signed, short-lived tokens so video lessons can't be ripped or shared.",
  "Saksham combines geolocation, real-time sockets, and an AI-assisted learning path — all in one app.",
];

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

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [fact, setFact] = useState(null);
  const inputRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMod = e.metaKey || e.ctrlKey;
      if (isMod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setFact(null);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const goTo = (href) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const openExternal = (url) => {
    setOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const showFact = () => {
    setFact(FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)]);
  };

  const actions = useMemo(
    () => [
      { id: "work", label: "Go to Work", hint: "Section", icon: ArrowRight, run: () => goTo("#work") },
      { id: "skills", label: "Go to Skills", hint: "Section", icon: ArrowRight, run: () => goTo("#skills") },
      { id: "services", label: "Go to Services", hint: "Section", icon: ArrowRight, run: () => goTo("#services") },
      { id: "contact", label: "Go to Contact", hint: "Section", icon: ArrowRight, run: () => goTo("#contact") },
      ...projects.map((p) => ({
        id: p.id,
        label: `Open ${p.name}`,
        hint: "Live project",
        icon: ArrowRight,
        run: () => openExternal(p.url),
      })),
      { id: "email", label: "Email Ayush", hint: profile.email, icon: Mail, run: () => openExternal(`mailto:${profile.email}`) },
      { id: "github", label: "Open GitHub", hint: "Profile", icon: GithubIcon, run: () => openExternal(profile.github) },
      { id: "linkedin", label: "Open LinkedIn", hint: "Profile", icon: LinkedinIcon, run: () => openExternal(profile.linkedin) },
      {
        id: "theme",
        label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        hint: "Toggle",
        icon: theme === "dark" ? Sun : Moon,
        run: () => {
          toggleTheme();
          setOpen(false);
        },
      },
      { id: "fact", label: "Tell me a fun fact", hint: "Easter egg", icon: Sparkles, run: showFact },
    ],
    [theme]
  );

  const filtered = actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[12vh] px-4"
          style={{ backgroundColor: "color-mix(in srgb, var(--color-bg-deep) 70%, transparent)" }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl overflow-hidden"
            style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-line)" }}
          >
            <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: "1px solid var(--color-line)" }}>
              <Search size={16} style={{ color: "var(--color-muted)" }} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section, open a project, or ask for a fun fact..."
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: "var(--color-text)" }}
              />
              <kbd
                className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                style={{ border: "1px solid var(--color-line)", color: "var(--color-muted)" }}
              >
                ESC
              </kbd>
            </div>

            {fact && (
              <div
                className="px-5 py-4 text-sm leading-relaxed flex items-start gap-3"
                style={{ borderBottom: "1px solid var(--color-line)", color: "var(--color-text-dim)" }}
              >
                <Sparkles size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-amber)" }} />
                <span>{fact}</span>
              </div>
            )}

            <div className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="px-5 py-6 text-sm text-center" style={{ color: "var(--color-muted)" }}>
                  No matches. Try "contact" or "fact".
                </p>
              )}
              {filtered.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.id}
                    onClick={action.run}
                    className="w-full flex items-center gap-3 px-5 py-2.5 text-left transition-colors hover:bg-[color-mix(in_srgb,var(--color-amber)_10%,transparent)]"
                  >
                    <Icon style={{ color: "var(--color-muted)", width: 15, height: 15 }} className="flex-shrink-0" />
                    <span className="text-sm flex-1" style={{ color: "var(--color-text)" }}>
                      {action.label}
                    </span>
                    <span className="font-mono text-[10px]" style={{ color: "var(--color-muted)" }}>
                      {action.hint}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}