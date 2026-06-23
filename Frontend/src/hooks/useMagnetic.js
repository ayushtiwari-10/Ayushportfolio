import { useRef } from "react";

/**
 * useMagnetic — attaches a subtle cursor-pull effect to a button/element.
 * The element nudges toward the cursor within its bounds, then springs back on leave.
 * Usage: const magnetic = useMagnetic(); <button {...magnetic}>
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { transition: "transform 0.15s ease-out", display: "inline-flex" },
  };
}