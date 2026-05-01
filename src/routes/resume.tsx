import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, ArrowLeft, Mail, MapPin } from "lucide-react";
import { resumeData as r } from "@/lib/resume-data";
import { generateResumePDF } from "@/lib/generate-resume-pdf";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Vandana Yadav · B2B Marketing Strategist" },
      {
        name: "description",
        content:
          "Resume of Vandana Yadav — MBA Finance, 3+ years B2B/B2C marketing leadership, AI-powered content, 153+ team led, 1,500+ trained.",
      },
      { property: "og:title", content: "Resume — Vandana Yadav" },
      {
        property: "og:description",
        content: "MBA Finance · B2B marketing · AI creative · Leadership.",
      },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <main className="min-h-[100svh] bg-[#1a1a1a] pb-[max(env(safe-area-inset-bottom),2rem)] pt-[max(env(safe-area-inset-top),1rem)] text-cream">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cream/60 transition-colors hover:text-coral"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <button
            type="button"
            onClick={generateResumePDF}
            className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-all hover:-translate-y-0.5 active:scale-95"
          >
            <Download className="h-4 w-4" /> Download PDF
          </button>
        </div>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-cream/10 bg-gradient-to-br from-coral/15 via-cream/[0.02] to-transparent p-6 md:p-10"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-coral">
            Resume
          </p>
          <h1 className="mt-3 font-display text-4xl font-700 leading-[0.95] md:text-6xl">
            {r.name}
          </h1>
          <p className="mt-3 text-base text-cream/75 md:text-lg">{r.title}</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-cream/60 md:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {r.location}
            </span>
            <a
              href={`mailto:${r.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-coral"
            >
              <Mail className="h-3.5 w-3.5" /> {r.email}
            </a>
          </div>
        </motion.header>

        {/* Highlights */}
        <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {r.highlights.map((h, i) => (
            <motion.div
              key={h.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-4 md:p-5"
            >
              <p className="font-display text-2xl font-700 text-coral md:text-3xl">
                {h.k}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-cream/55 md:text-xs">
                {h.v}
              </p>
            </motion.div>
          ))}
        </section>

        {/* Summary */}
        <Section title="Profile">
          <p className="text-sm leading-relaxed text-cream/80 md:text-base">
            {r.summary}
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <div className="space-y-6">
            {r.experience.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-cream/10 bg-cream/[0.025] p-5 md:p-6"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h3 className="font-display text-lg font-semibold md:text-xl">
                    {e.role}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-coral">
                    {e.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-cream/75">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coral" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="grid gap-3 md:grid-cols-2">
            {r.skills.map((s) => (
              <div
                key={s.group}
                className="rounded-2xl border border-cream/10 bg-cream/[0.025] p-4 md:p-5"
              >
                <p className="font-display text-base font-semibold">{s.group}</p>
                <p className="mt-2 text-sm text-cream/65">{s.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          {r.education.map((ed) => (
            <div key={ed.degree} className="flex items-center justify-between">
              <div>
                <p className="font-display text-lg font-semibold">{ed.degree}</p>
                <p className="text-sm text-cream/60">{ed.school}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-coral">
                {ed.period}
              </span>
            </div>
          ))}
        </Section>

        {/* Links */}
        <Section title="Links">
          <ul className="space-y-2">
            {r.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-coral hover:underline"
                >
                  → {l.label}
                </a>
              </li>
            ))}
          </ul>
        </Section>

        {/* Sticky download — mobile */}
        <div className="sticky bottom-3 z-30 mt-10 md:hidden">
          <button
            type="button"
            onClick={generateResumePDF}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-coral px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink shadow-2xl active:scale-95"
          >
            <Download className="h-4 w-4" /> Download Resume PDF
          </button>
        </div>

        <footer className="mt-14 pb-6 text-center text-xs text-cream/40">
          © {new Date().getFullYear()} {r.name} · Generated from this portfolio
        </footer>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      className="mt-10"
    >
      <h2 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-coral">
        {title}
      </h2>
      <div>{children}</div>
    </motion.section>
  );
}
