import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vandanaa Yadav · AI Content Creator & Video Editor" },
      { name: "description", content: "Get in touch with Vandanaa Yadav for AI content creation, video editing, CapCut production, prompt engineering and B2B strategy engagements." },
      { property: "og:title", content: "Contact Vandanaa Yadav" },
      { property: "og:description", content: "AI content, cinematic video editing, prompt engineering and B2B strategy — let's build something." },
    ],
  }),
  component: ContactPage,
});

const EMAIL = "vandanaayadavwork@gmail.com";
const INSTAGRAM = "https://www.instagram.com/vaandana.yadav";

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Project enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Vandanaa,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-cream text-ink">
      {/* Ambient color */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 rounded-full bg-coral/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[40vmin] w-[40vmin] rounded-full bg-coral-soft/40 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Top bar */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-ink/60 hover:text-coral transition-colors">
            ← Back to portfolio
          </Link>
          <span className="font-display text-base font-semibold text-ink">VY</span>
        </div>

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-20 lg:grid-cols-12 lg:gap-20 lg:py-28">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-coral"
            >
              Let's build something
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 font-display text-5xl font-700 leading-[0.95] text-balance md:text-6xl lg:text-7xl"
            >
              Get in <span className="italic text-coral">touch</span>.
            </motion.h1>
            <p className="mt-6 max-w-md text-lg text-ink/70 text-pretty">
              For AI content creation, cinematic video editing, CapCut production,
              prompt engineering and B2B strategy engagements.
            </p>

            <div className="mt-12 space-y-6">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center justify-between rounded-2xl border border-ink/15 bg-white p-5 transition-all hover:border-coral hover:-translate-y-0.5"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50">Email</p>
                  <p className="mt-1 font-display text-xl font-semibold">{EMAIL}</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-cream transition-transform group-hover:rotate-45">↗</span>
              </a>

              <div className="rounded-2xl border border-ink/15 bg-white p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50">Based in</p>
                <p className="mt-1 font-display text-xl font-semibold">Delhi, India</p>
                <p className="mt-1 text-sm text-ink/60">Open to remote and on-site</p>
              </div>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-ink/15 bg-white p-5 transition-all hover:border-coral hover:-translate-y-0.5"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50">Instagram</p>
                  <p className="mt-1 font-display text-xl font-semibold">@vaandana.yadav</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-cream transition-transform group-hover:rotate-45">↗</span>
              </a>
            </div>
          </div>

          {/* RIGHT — form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-ink/10 bg-white p-8 shadow-soft lg:col-span-7 lg:p-10"
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field
                label="Your name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
            </div>
            <div className="mt-5">
              <Field
                label="Subject"
                value={form.subject}
                onChange={(v) => setForm({ ...form, subject: v })}
              />
            </div>
            <div className="mt-5">
              <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/60">
                Message
              </label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full rounded-xl border border-ink/15 bg-cream/50 px-4 py-3 text-sm text-ink placeholder:text-ink/30 outline-none focus:border-coral focus:ring-2 focus:ring-coral/30"
                placeholder="Tell me about your brand, goals and timeline…"
              />
            </div>
            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-cream transition-all hover:bg-coral hover:text-ink md:w-auto"
            >
              Send message →
            </button>
            <p className="mt-4 text-xs text-ink/50">
              Submitting opens your email client with the message pre-filled to {EMAIL}.
            </p>
          </motion.form>
        </section>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/60">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-ink/15 bg-cream/50 px-4 py-3 text-sm text-ink placeholder:text-ink/30 outline-none focus:border-coral focus:ring-2 focus:ring-coral/30"
      />
    </div>
  );
}
