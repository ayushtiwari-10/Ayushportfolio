import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Briefcase, Heart, Compass, Award } from "lucide-react";
import { profile, developer } from "../data/content";

const chip = {
  backgroundColor: "color-mix(in srgb, var(--color-amber) 12%, transparent)",
  color: "var(--color-amber)",
};

function Label({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2 mb-3 font-mono text-xs tracking-widest" style={{ color: "var(--color-amber)" }}>
      <Icon size={14} />
      {children}
    </div>
  );
}

export default function MeetDeveloper({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ backgroundColor: "color-mix(in srgb, var(--color-bg-deep) 75%, transparent)", backdropFilter: "blur(6px)" }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Meet the developer"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl"
            style={{ backgroundColor: "var(--color-surface)", border: "1px solid var(--color-line)" }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors"
              style={{ border: "1px solid var(--color-line)", color: "var(--color-text)", backgroundColor: "var(--color-surface)" }}
            >
              <X size={16} />
            </button>

            <div className="grid md:grid-cols-[0.8fr_1.2fr]">
              {/* Photo */}
              <div className="relative md:min-h-full" style={{ backgroundColor: "var(--color-bg-deep)" }}>
                <img
                  src={developer.photo}
                  alt={`${profile.name}, ${developer.role}`}
                  className="w-full h-72 md:h-full object-cover"
                />
                <div
                  className="absolute inset-x-0 bottom-0 p-6 pt-16"
                  style={{ background: "linear-gradient(to top, color-mix(in srgb, var(--color-bg-deep) 90%, transparent), transparent)" }}
                >
                  <h3 className="font-display text-3xl" style={{ color: "#f7f5f0" }}>
                    {profile.name}
                    <span style={{ color: "var(--color-amber)" }}>.</span>
                  </h3>
                  <p className="font-mono text-xs mt-1 flex items-center gap-1.5" style={{ color: "#c4c5ca" }}>
                    <MapPin size={12} /> {developer.role} · {profile.location}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 md:p-10 space-y-8">
                <div>
                  <span className="font-mono text-xs tracking-widest" style={{ color: "var(--color-amber)" }}>
                    MEET THE DEVELOPER
                  </span>
                  <p className="font-display text-xl md:text-2xl italic leading-snug mt-3" style={{ color: "var(--color-text)" }}>
                    {developer.intro}
                  </p>
                </div>

                <div>
                  <Label icon={Briefcase}>TECH CAREER</Label>
                  <ol className="space-y-4 pl-4" style={{ borderLeft: "1px solid var(--color-line)" }}>
                    {developer.career.map((c) => (
                      <li key={c.year + c.title} className="relative">
                        <span
                          className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full"
                          style={{ backgroundColor: "var(--color-amber)" }}
                        />
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-xs tabular" style={{ color: "var(--color-muted)" }}>{c.year}</span>
                          <span className="font-medium" style={{ color: "var(--color-text)" }}>{c.title}</span>
                        </div>
                        <p className="text-sm mt-0.5" style={{ color: "var(--color-text-dim)" }}>{c.detail}</p>
                        {c.link && (
                          <a
                            href={c.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-full font-mono text-xs transition-colors hover:brightness-110"
                            style={{ border: "1px solid var(--color-amber)", color: "var(--color-amber)" }}
                          >
                            <Award size={12} />
                            {c.link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <Label icon={Heart}>HOBBIES</Label>
                    <div className="flex flex-wrap gap-2">
                      {developer.hobbies.map((h) => (
                        <span key={h} className="font-mono text-xs px-3 py-1 rounded-full" style={chip}>{h}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label icon={Compass}>INTERESTS</Label>
                    <div className="flex flex-wrap gap-2">
                      {developer.interests.map((i) => (
                        <span key={i} className="font-mono text-xs px-3 py-1 rounded-full" style={chip}>{i}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}