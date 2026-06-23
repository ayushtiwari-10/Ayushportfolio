import { useEffect, useRef, useState } from "react";

/**
 * CursorBlob — a small circular cursor companion that follows the mouse
 * with slight lag, and grows/morphs when hovering elements marked
 * data-cursor="view" or data-cursor="link".
 * Desktop only — hidden automatically on touch devices via CSS media query.
 */
export default function CursorBlob() {
  const blobRef = useRef(null);
  const [label, setLabel] = useState("");
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const handleOver = (e) => {
      const el = e.target.closest("[data-cursor]");
      setLabel(el ? el.getAttribute("data-cursor") : "");
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    let raf;
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  const isView = label === "view";
  const isLink = label === "link";
  const active = isView || isLink;

  return (
    <div
      ref={blobRef}
      aria-hidden="true"
      className="hidden md:flex fixed top-0 left-0 z-[100] items-center justify-center pointer-events-none"
      style={{
        width: active ? (isView ? 84 : 56) : 16,
        height: active ? (isView ? 84 : 56) : 16,
        borderRadius: "50%",
        backgroundColor: active ? "var(--color-amber)" : "transparent",
        border: active ? "none" : "1.5px solid var(--color-text)",
        opacity: active ? 1 : 0.5,
        transition: "width 0.25s cubic-bezier(0.22,1,0.36,1), height 0.25s cubic-bezier(0.22,1,0.36,1), background-color 0.25s, opacity 0.2s",
        mixBlendMode: active ? "normal" : "difference",
      }}
    >
      {isView && (
        <span className="font-mono text-[10px] tracking-wider select-none" style={{ color: "#15161A" }}>
          VIEW
        </span>
      )}
    </div>
  );
}