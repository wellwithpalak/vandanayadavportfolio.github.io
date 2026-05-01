import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  { src: "/videos/project-1.mp4", title: "Wellwith — brand reel" },
  { src: "/videos/project-2.mp4", title: "AI marketing campaign" },
  { src: "/videos/project-3.mp4", title: "Leadership Hub training" },
  { src: "/videos/project-4.mp4", title: "Content & creative work" },
];

export function VideoMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const playerRef = useRef<HTMLVideoElement>(null);

  // autoplay muted preview thumbnails when not in player mode
  useEffect(() => {
    if (activeIdx !== null) return;
    const els = containerRef.current?.querySelectorAll("video");
    els?.forEach((v) => {
      v.muted = true;
      v.play().catch(() => {});
    });
  }, [activeIdx]);

  // when a video opens, play it with sound
  useEffect(() => {
    if (activeIdx === null || !playerRef.current) return;
    playerRef.current.muted = false;
    playerRef.current.volume = 1;
    playerRef.current.currentTime = 0;
    playerRef.current.play().catch(() => {
      // autoplay with sound may be blocked — user can hit play
    });
  }, [activeIdx]);

  // ESC to close, arrow keys for prev/next
  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowRight") setActiveIdx((i) => (i === null ? 0 : (i + 1) % videos.length));
      if (e.key === "ArrowLeft")
        setActiveIdx((i) => (i === null ? 0 : (i - 1 + videos.length) % videos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx]);

  const loop = [...videos, ...videos];

  return (
    <section
      id="reels"
      aria-label="Project reels"
      className="relative overflow-hidden bg-ink py-12 md:py-14 border-y border-cream/10"
    >
      <div className="mx-auto mb-6 max-w-7xl px-6 md:mb-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">In motion</p>
        <h2 className="mt-2 font-display text-2xl md:text-4xl text-cream font-700">
          Live reel of recent work
        </h2>
        <p className="mt-2 text-sm text-cream/60">Tap any reel to play with sound.</p>
      </div>

      <div
        ref={containerRef}
        className="flex w-max animate-[reel-scroll_60s_linear_infinite] gap-4 px-4 md:gap-6 md:px-6"
      >
        {loop.map((v, i) => {
          const realIdx = i % videos.length;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIdx(realIdx)}
              className="group relative aspect-[9/16] h-[280px] shrink-0 overflow-hidden rounded-2xl border border-cream/10 bg-black shadow-2xl transition-transform hover:-translate-y-1 hover:border-coral md:h-[420px] md:rounded-3xl"
              aria-label={`Play ${v.title}`}
            >
              <video
                src={v.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent" />
              <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-cream text-ink shadow-xl">
                  ▶
                </span>
              </div>
              <span className="absolute bottom-2 left-2 rounded-full bg-cream/90 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-ink md:bottom-3 md:left-3 md:px-3 md:text-[10px]">
                Reel {(realIdx + 1).toString().padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <style>{`@keyframes reel-scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>

      {/* Lightbox player */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/95 p-3 md:p-6"
            onClick={() => setActiveIdx(null)}
          >
            {/* Top bar */}
            <div
              className="flex w-full max-w-md items-center justify-between pb-3 text-cream md:max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs uppercase tracking-widest text-cream/60">
                Reel {(activeIdx + 1).toString().padStart(2, "0")} / {videos.length.toString().padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => setActiveIdx(null)}
                className="rounded-full border border-cream/20 px-4 py-1.5 text-xs uppercase tracking-widest text-cream hover:border-coral hover:text-coral"
              >
                ← Back
              </button>
            </div>

            {/* Video */}
            <motion.div
              key={activeIdx}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-cream/10 bg-black md:max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={playerRef}
                src={videos[activeIdx].src}
                controls
                autoPlay
                playsInline
                className="aspect-[9/16] h-auto w-full object-contain"
              />
            </motion.div>

            {/* Controls */}
            <div
              className="mt-4 flex w-full max-w-md items-center justify-between gap-3 md:max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() =>
                  setActiveIdx((i) => (i === null ? 0 : (i - 1 + videos.length) % videos.length))
                }
                className="flex-1 rounded-full border border-cream/20 py-3 text-xs font-semibold uppercase tracking-widest text-cream hover:border-coral hover:text-coral"
              >
                ← Prev
              </button>
              <p className="hidden text-center text-sm text-cream/70 md:block">
                {videos[activeIdx].title}
              </p>
              <button
                type="button"
                onClick={() =>
                  setActiveIdx((i) => (i === null ? 0 : (i + 1) % videos.length))
                }
                className="flex-1 rounded-full bg-coral py-3 text-xs font-semibold uppercase tracking-widest text-ink hover:bg-coral/90"
              >
                Next →
              </button>
            </div>
            <p className="mt-3 text-center text-xs text-cream/50 md:hidden">
              {videos[activeIdx].title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
