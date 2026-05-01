import { useEffect, useRef } from "react";

const videos = [
  "/videos/project-1.mp4",
  "/videos/project-2.mp4",
  "/videos/project-3.mp4",
  "/videos/project-4.mp4",
];

export function VideoMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll("video");
    els?.forEach((v) => {
      v.muted = true;
      v.play().catch(() => {});
    });
  }, []);

  // duplicate for seamless loop
  const loop = [...videos, ...videos];

  return (
    <section
      id="reels"
      aria-label="Project reels"
      className="relative overflow-hidden bg-ink py-14 border-y border-cream/10"
    >
      <div className="mx-auto mb-8 max-w-7xl px-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">In motion</p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl text-cream font-700">
          Live reel of recent work
        </h2>
      </div>

      <div
        ref={containerRef}
        className="flex w-max animate-[reel-scroll_60s_linear_infinite] gap-6 px-6"
      >
        {loop.map((src, i) => (
          <div
            key={i}
            className="relative aspect-[9/16] h-[420px] shrink-0 overflow-hidden rounded-3xl border border-cream/10 bg-black shadow-2xl"
          >
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/70 to-transparent" />
            <span className="absolute bottom-3 left-3 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
              Reel {((i % videos.length) + 1).toString().padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

      <style>{`@keyframes reel-scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}
