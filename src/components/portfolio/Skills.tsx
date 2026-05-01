import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const skills = [
  { title: "Marketing Strategy", items: ["B2B & B2C funnels", "Brand positioning", "Campaign planning", "Growth playbooks"] },
  { title: "AI-Powered Content", items: ["Generative ad creative", "Visual ideation", "Content automation", "Prompt systems"] },
  { title: "Video & Reels", items: ["CapCut editing", "Short-form storytelling", "Hooks & captions", "Brand reels"] },
  { title: "Brand Storytelling", items: ["Voice & narrative", "Audience research", "Visual brochures", "Launch communications"] },
  { title: "Sales & Growth", items: ["KPI ownership", "Onboarding playbooks", "Client comms", "Pipeline strategy"] },
  { title: "Leadership", items: ["153+ team", "1,500+ trained", "Public speaking", "Training design"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">Skill stack</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl font-700 tracking-tight">
            A marketing toolkit built for <span className="italic">modern</span> brands.
          </h2>
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
