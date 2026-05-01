import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const PASSWORD = "vandana2026";
const STORAGE_KEY = "vy_portal_data";

type PortalData = {
  email: string;
  youtube: string;
  about: string;
  notes: string;
  customLinks: { label: string; url: string }[];
};

const DEFAULTS: PortalData = {
  email: "vandana@example.com",
  youtube: "https://www.youtube.com/@indianbhaktiaisongs",
  about: "",
  notes: "",
  customLinks: [],
};

export const Route = createFileRoute("/portal")({
  component: PortalPage,
  head: () => ({
    meta: [
      { title: "Vandana · Admin Portal" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function PortalPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [data, setData] = useState<PortalData>(DEFAULTS);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("vy_portal_auth") === "1") setAuthed(true);
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try { setData({ ...DEFAULTS, ...JSON.parse(raw) }); } catch {}
    }
  }, []);

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  const submitPw = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === PASSWORD) {
      sessionStorage.setItem("vy_portal_auth", "1");
      setAuthed(true);
    } else {
      alert("Wrong password");
    }
  };

  if (!authed) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#0a0a0f] px-6 text-cream">
        <form onSubmit={submitPw} className="w-full max-w-sm space-y-5 rounded-3xl border border-cream/10 bg-cream/5 p-8 backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-coral">Private</p>
            <h1 className="mt-2 font-display text-3xl font-700">Admin Portal</h1>
            <p className="mt-1 text-sm text-cream/60">Vandana — sign in to edit content.</p>
          </div>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border border-cream/15 bg-black/30 px-4 py-3 text-sm text-cream outline-none focus:border-coral"
            autoFocus
          />
          <button className="w-full rounded-xl bg-coral px-4 py-3 text-sm font-semibold uppercase tracking-widest text-ink hover:bg-coral/90">
            Enter
          </button>
          <p className="text-center text-[10px] text-cream/40">Hint: vandana2026</p>
          <Link to="/" className="block text-center text-xs text-cream/50 hover:text-coral">← back to site</Link>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] px-6 py-16 text-cream">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-coral">Portal</p>
            <h1 className="mt-2 font-display text-4xl font-700">Edit & extend</h1>
            <p className="mt-1 text-sm text-cream/60">Quick edits live in your browser. For permanent site changes, message me what to add.</p>
          </div>
          <Link to="/" className="rounded-full border border-cream/20 px-4 py-2 text-xs uppercase tracking-widest hover:border-coral hover:text-coral">View site</Link>
        </header>

        <section className="space-y-4 rounded-3xl border border-cream/10 bg-cream/5 p-6">
          <h2 className="font-display text-xl">Contact</h2>
          <Field label="Email" value={data.email} onChange={(v) => setData({ ...data, email: v })} />
          <Field label="YouTube URL" value={data.youtube} onChange={(v) => setData({ ...data, youtube: v })} />
        </section>

        <section className="space-y-4 rounded-3xl border border-cream/10 bg-cream/5 p-6">
          <h2 className="font-display text-xl">About (draft)</h2>
          <textarea
            value={data.about}
            onChange={(e) => setData({ ...data, about: e.target.value })}
            rows={5}
            placeholder="Drop a new bio here…"
            className="w-full rounded-xl border border-cream/15 bg-black/30 px-4 py-3 text-sm outline-none focus:border-coral"
          />
        </section>

        <section className="space-y-4 rounded-3xl border border-cream/10 bg-cream/5 p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl">Custom links</h2>
            <button
              onClick={() => setData({ ...data, customLinks: [...data.customLinks, { label: "", url: "" }] })}
              className="rounded-full bg-coral px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink"
            >+ add</button>
          </div>
          {data.customLinks.length === 0 && <p className="text-sm text-cream/50">No custom links yet.</p>}
          {data.customLinks.map((l, i) => (
            <div key={i} className="grid grid-cols-[1fr_2fr_auto] gap-2">
              <input
                value={l.label}
                onChange={(e) => {
                  const next = [...data.customLinks];
                  next[i] = { ...next[i], label: e.target.value };
                  setData({ ...data, customLinks: next });
                }}
                placeholder="Label"
                className="rounded-xl border border-cream/15 bg-black/30 px-3 py-2 text-sm outline-none focus:border-coral"
              />
              <input
                value={l.url}
                onChange={(e) => {
                  const next = [...data.customLinks];
                  next[i] = { ...next[i], url: e.target.value };
                  setData({ ...data, customLinks: next });
                }}
                placeholder="https://"
                className="rounded-xl border border-cream/15 bg-black/30 px-3 py-2 text-sm outline-none focus:border-coral"
              />
              <button
                onClick={() => setData({ ...data, customLinks: data.customLinks.filter((_, j) => j !== i) })}
                className="rounded-xl border border-cream/15 px-3 text-xs hover:border-coral hover:text-coral"
              >✕</button>
            </div>
          ))}
        </section>

        <section className="space-y-4 rounded-3xl border border-cream/10 bg-cream/5 p-6">
          <h2 className="font-display text-xl">Notes for the developer</h2>
          <textarea
            value={data.notes}
            onChange={(e) => setData({ ...data, notes: e.target.value })}
            rows={5}
            placeholder="What should we add next? New project video, a new section, a brand color tweak…"
            className="w-full rounded-xl border border-cream/15 bg-black/30 px-4 py-3 text-sm outline-none focus:border-coral"
          />
          <p className="text-xs text-cream/50">Tip: copy this text and paste it in chat — I'll wire it permanently.</p>
        </section>

        <div className="sticky bottom-6 flex items-center justify-between rounded-2xl border border-cream/10 bg-black/60 p-4 backdrop-blur">
          <span className="text-sm text-cream/70">{saved ? "✓ Saved locally" : "Changes not saved yet"}</span>
          <button onClick={save} className="rounded-full bg-coral px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-ink hover:bg-coral/90">
            Save
          </button>
        </div>
      </div>
    </main>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs uppercase tracking-widest text-cream/60">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-cream/15 bg-black/30 px-4 py-3 text-sm outline-none focus:border-coral"
      />
    </label>
  );
}
