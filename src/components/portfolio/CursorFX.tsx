import { useEffect, useRef, useState } from "react";

/**
 * Cyber-Cinematic cursor — desktop only.
 * Hides on touch devices. Expands and changes color over interactive elements.
 */
export function CursorFX() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;
    setEnabled(true);

    let rx = 0, ry = 0, dx = 0, dy = 0;

    const onMove = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${dx}px, ${dy}px)`;
      }
      const target = e.target as HTMLElement;
      const interactive = !!target?.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor='hover']",
      );
      setHover(interactive);
    };

    let raf = 0;
    const tick = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[100] -ml-5 -mt-5 h-10 w-10 rounded-full border transition-[width,height,margin,border-color,background] duration-200 ease-out mix-blend-difference ${
          hover
            ? "-ml-8 -mt-8 h-16 w-16 border-coral bg-coral/15"
            : "border-white/70"
        }`}
      />
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] -ml-1 -mt-1 h-2 w-2 rounded-full bg-coral mix-blend-difference"
      />
    </>
  );
}
