import { profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 md:px-8 py-8"
      style={{ borderTop: "1px solid var(--color-line)", backgroundColor: "var(--color-bg-deep)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs" style={{ color: "var(--color-muted)" }}>
        <p>© {year} {profile.name}. Built with React &amp; Tailwind.</p>
        <p>Designed and developed by {profile.displayName}.</p>
      </div>
    </footer>
  );
}
