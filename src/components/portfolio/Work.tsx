import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const projects = [
  {
    n: "01",
    tag: "AI · Marketing",
    title: "AI-Powered Marketing Suite",
    body: "Generative AI workflow that ships ad creative and visuals for B2B healthcare campaigns — cutting content turnaround by 40%.",
    metric: "−40% turnaround",
    accent: "coral",
  },
  {
    n: "02",
    tag: "Featured · Wellwith",
    title: "Wellwith — Seabuckthorn Brand Journey",
    body: "End-to-end marketing for the Wellwith Seabuckthorn brand — strategy, reels, AI creative, and an engaged Instagram health community.",
    metric: "Open journey →",
    accent: "coral",
    href: "/wellwith",
  },
  {
    n: "03",
    tag: "B2B Strategy",
    title: "Operational Excellence Framework",
    body: "A funnel-first B2B playbook that consistently exceeded quarterly KPIs and shaved 25% off team onboarding time.",
    metric: "−25% onboarding",
    accent: "mint",
  },
  {
    n: "04",
    tag: "Leadership",
    title: "The Leadership Hub",
    body: "Designed and delivered training seminars for 1,500+ participants on business development and operational excellence.",
    metric: "1,500+ trained",
    accent: "coral",
  },
  {
    n: "05",
    tag: "Finance · CRM",
    title: "Growth Analytics Dashboard",
    body: "CRM-driven dashboards tracking healthcare data trends — surfacing actionable insights that strengthened client relationships.",
    metric: "Insights → action",
    accent: "ink",
  },
  {
    n: "06",
    tag: "Toolkit",
    title: "Digital Outreach Toolkit",
    body: "20+ printable B2B frameworks and visual brochures that streamlined onboarding and gave the team a sharper client narrative.",
    metric: "20+ assets",
    accent: "mint",
  },
];

export function Work() {
  return (
    <section id="work" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">Selected work</p>
            <h2 className="mt-3 font-display text-5xl md:text-6xl font-700 tracking-tight text-balance">
              Projects across <span className="italic">five</span> disciplines.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            From AI-generated campaigns to leadership stages — a sample of what
            happens when finance, strategy and creativity share one desk.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-3xl text-ink/30">{p.n}</span>
                <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink/70">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold leading-tight text-balance">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground text-pretty">{p.body}</p>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
                <span
                  className={`text-sm font-semibold ${
                    p.accent === "coral" ? "text-coral" : p.accent === "mint" ? "text-ink" : "text-ink"
                  }`}
                >
                  {p.metric}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-cream transition-transform group-hover:rotate-45">
                  ↗
                </span>
              </div>
              {p.accent === "coral" && (
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-coral/10 blur-2xl" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}