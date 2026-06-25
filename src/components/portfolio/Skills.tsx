import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Sparkles, Film, Scissors } from "lucide-react";

const skills = [
  { title: "Video Editing", items: ["Reels editing", "YouTube editing", "Shorts editing", "Storytelling", "Motion graphics", "Visual branding"] },
  { title: "Generative AI", items: ["ChatGPT", "Gemini", "Midjourney", "Runway", "Kling", "Canva AI", "CapCut AI"] },
  { title: "Marketing Strategy", items: ["B2B & B2C funnels", "Brand positioning", "Campaign planning", "Growth playbooks"] },
  { title: "Brand Storytelling", items: ["Voice & narrative", "Audience research", "Visual brochures", "Launch communications"] },
  { title: "Prompt Engineering", items: ["Prompt systems", "AI workflows", "Content automation", "Creative scaling"] },
  { title: "Personal Branding", items: ["Creator positioning", "Voice & tone", "Content pillars", "Audience growth"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">Skill stack</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl font-700 tracking-tight">
            A creator toolkit built for <span className="italic">modern</span> brands.
          </h2>
        </div>

        {/* Featured CapCut card */}
        <div className="mb-8 relative overflow-hidden rounded-3xl border-2 border-coral/60 bg-gradient-to-br from-ink via-[#1a1a1a] to-coral/30 p-8 shadow-[0_20px_60px_-20px_rgba(255,107,74,0.5)]">
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-coral/40 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.12)_50%,transparent_70%)] bg-[length:200%_100%] animate-[shine_3s_linear_infinite]" />
          <style>{`@keyframes shine{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-coral px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                <Sparkles className="h-3 w-3" /> Featured · CapCut Expert
              </span>
              <h3 className="mt-4 font-display text-4xl md:text-5xl font-700 text-cream">
                CapCut <span className="bg-gradient-to-r from-coral to-amber-300 bg-clip-text text-transparent">Mastery</span>
              </h3>
              <p className="mt-3 text-cream/75 max-w-md">
                Advanced editing pipeline for viral short-form content — from raw clips to export.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {["Advanced Transitions", "AI Effects", "Auto Captions", "Viral Editing", "Motion Tracking", "Pro Export Workflow"].map((i) => (
                <li key={i} className="flex items-center gap-2 rounded-xl border border-cream/15 bg-cream/5 px-3 py-2.5 text-sm text-cream backdrop-blur transition-all hover:border-coral hover:-translate-y-0.5">
                  <Scissors className="h-3.5 w-3.5 text-coral" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl border border-ink/10 bg-card p-7"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-coral/15 text-coral font-display font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              </div>
              <ul className="mt-5 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-sm text-ink/70">
                    <span className="h-1 w-1 rounded-full bg-ink/40" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tools row + small YouTube side note */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-ink/10 bg-card p-7 md:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">Core tools</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {["CapCut", "AI generative tools"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink/15 bg-secondary px-4 py-2 text-sm font-semibold text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-ink/60">
              Lean stack — CapCut for video, AI for ideation and creative scale.
            </p>
          </div>

          {/* small side-project YouTube card */}
          <a
            href="https://www.youtube.com/@indianbhaktiaisongs"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-3xl border border-ink/10 bg-card p-6 transition-all hover:border-coral hover:-translate-y-0.5"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink/5 text-ink/60">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M23 12s0-3.6-.5-5.3a2.8 2.8 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.7a2.8 2.8 0 0 0-2 2C1 8.4 1 12 1 12s0 3.6.5 5.3a2.8 2.8 0 0 0 2 2c1.8.7 8.5.7 8.5.7s6.7 0 8.5-.7a2.8 2.8 0 0 0 2-2C23 15.6 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
            </span>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink/50">Side project</p>
              <p className="font-display text-base font-semibold text-ink">@indianbhaktiaisongs</p>
              <p className="text-xs text-ink/60">A small creative outlet on YouTube.</p>
            </div>
          </a>
        </div>

        {/* Featured link to Wellwith */}
        <Link
          to="/wellwith"
          className="group mt-8 flex flex-col items-start justify-between gap-6 rounded-3xl border border-coral/40 bg-gradient-to-br from-coral/15 via-cream to-coral-soft/40 p-8 transition-all hover:-translate-y-1 hover:shadow-xl md:flex-row md:items-center"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">Featured experience</p>
            <p className="mt-1 font-display text-2xl font-semibold text-ink">Wellwith — Seabuckthorn Brand Journey</p>
            <p className="text-sm text-ink/60">Click to open the full marketing & content journey.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-cream group-hover:bg-coral group-hover:text-ink transition-colors">
            Open journey →
          </span>
        </Link>
      </div>
    </section>
  );
}
