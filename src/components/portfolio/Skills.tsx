import { motion } from "framer-motion";

const skills = [
  { title: "AI Generative", items: ["LLM workflows", "Midjourney visuals", "Prompt systems", "Content automation"] },
  { title: "Content & Video", items: ["CapCut editing", "Short-form video", "Brand storytelling", "Visual brochures"] },
  { title: "Sales & B2B", items: ["Funnel design", "KPI ownership", "Onboarding playbooks", "Client comms"] },
  { title: "Leadership", items: ["153+ team", "1,500+ trained", "Public speaking", "Training design"] },
  { title: "Finance & CRM", items: ["Financial analysis", "CRM management", "Healthcare data", "Growth dashboards"] },
  { title: "Tools", items: ["Notion · Figma", "HubSpot · Zoho", "Excel · Power BI", "ChatGPT · Claude"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-coral">Skill stack</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl font-700 tracking-tight">
            A toolkit built for <span className="italic">modern</span> teams.
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
      </div>
    </section>
  );
}