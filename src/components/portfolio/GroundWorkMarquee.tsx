import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item =
  | { kind: "video"; src: string; title: string }
  | { kind: "image"; src: string; title: string };

const items: Item[] = [
  { kind: "image", src: "/wellwith/award-tic-core-leader.jpg", title: "TIC Core Leader · 10X Growth Summit 2024" },
  { kind: "image", src: "/wellwith/ayuzera-stall.jpg", title: "Ayuzera × Wellwith — on-ground activation" },
  { kind: "video", src: "/wellwith/groundwork-1.mp4", title: "Field activation — sampling day" },
  { kind: "video", src: "/wellwith/groundwork-2.mp4", title: "On-ground brand storytelling" },
];

export function GroundWorkMarquee() {
  const [active, setActive] = useState<number | null>(null);
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? 0 : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  useEffect(() => {
    if (active === null || !playerRef.current) return;
    if (items[active].kind !== "video") return;
    playerRef.current.muted = false;
    playerRef.current.currentTime = 0;
    playerRef.current.play().catch(() => {});
  }, [active]);

  const loop = [...items, ...items];

  return (
    <section
      aria-label="Ground work and base-level activations"
      className="relative overflow-hidden border-y border-orange-300/15 bg-[#150805] py-12 md:py-16"
    >
      <div className="mx-auto mb-6 max-w-7xl px-6 md:mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
          Behind the brand
        </p>
        <h2 className="mt-2 font-display text-3xl text-cream font-700 md:text-4xl">
          Ground work & base-level activations
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-cream/65">
          Field days, sampling, awards and on-ground storytelling — the unglamorous,
          essential layer that makes the brand real. Tap any tile to play 9:16.
        </p>
      </div>

      <div className="flex w-max animate-[gw-scroll_55s_linear_infinite] gap-4 px-4 md:gap-6 md:px-6">
        {loop.map((it, i) => {
          const realIdx = i % items.length;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActive(realIdx)}
              className="group relative aspect-[9/16] h-[260px] shrink-0 overflow-hidden rounded-2xl border border-orange-300/15 bg-black shadow-2xl transition-transform hover:-translate-y-1 hover:border-orange-300 md:h-[400px] md:rounded-3xl"
              aria-label={`Open ${it.title}`}
            >
              {it.kind === "video" ? (
                <video
                  src={it.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f0603]/85 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-orange-300 text-[#1a0a05] shadow-xl">
                  {it.kind === "video" ? "▶" : "↗"}
                </span>
              </div>
              <span className="absolute bottom-2 left-2 rounded-full bg-orange-300/95 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-[#1a0a05] md:bottom-3 md:left-3 md:px-3 md:text-[10px]">
                {it.kind === "video" ? "Reel" : "Photo"} {(realIdx + 1).toString().padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <style>{`@keyframes gw-scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/95 p-3 md:p-6"
            onClick={() => setActive(null)}
          >
            <div
              className="flex w-full max-w-md items-center justify-between pb-3 text-cream md:max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs uppercase tracking-widest text-cream/60">
                {(active + 1).toString().padStart(2, "0")} / {items.length.toString().padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="rounded-full border border-cream/20 px-4 py-1.5 text-xs uppercase tracking-widest text-cream hover:border-orange-300 hover:text-orange-300"
              >
                ← Close
              </button>
            </div>

            <motion.div
              key={active}
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative mx-auto flex aspect-[9/16] max-h-[78svh] w-auto items-center justify-center overflow-hidden rounded-2xl border border-orange-300/15 bg-black shadow-[0_30px_80px_-10px_rgba(255,138,30,0.45)]"
              onClick={(e) => e.stopPropagation()}
            >
              {items[active].kind === "video" ? (
                <video
                  ref={playerRef}
                  src={items[active].src}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={items[active].src}
                  alt={items[active].title}
                  className="h-full w-full object-contain"
                />
              )}
            </motion.div>

            <div
              className="mt-4 flex w-full max-w-md items-center justify-between gap-3 md:max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() =>
                  setActive((i) => (i === null ? 0 : (i - 1 + items.length) % items.length))
                }
                className="flex-1 rounded-full border border-cream/20 py-3 text-xs font-semibold uppercase tracking-widest text-cream hover:border-orange-300 hover:text-orange-300"
              >
                ← Prev
              </button>
              <p className="hidden text-center text-sm text-cream/70 md:block">
                {items[active].title}
              </p>
              <button
                type="button"
                onClick={() => setActive((i) => (i === null ? 0 : (i + 1) % items.length))}
                className="flex-1 rounded-full bg-orange-300 py-3 text-xs font-semibold uppercase tracking-widest text-[#1a0a05] hover:bg-orange-200"
              >
                Next →
              </button>
            </div>
            <p className="mt-3 text-center text-xs text-cream/50 md:hidden">
              {items[active].title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
