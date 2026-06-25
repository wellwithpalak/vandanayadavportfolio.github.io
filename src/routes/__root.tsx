import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { MicDropLoader } from "@/components/portfolio/MicDropLoader";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { SkipToContent } from "@/components/portfolio/SkipToContent";
import { PageTransition } from "@/components/portfolio/PageTransition";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0f] px-4 text-cream">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coral">Lost in the funnel</p>
        <h1 className="mt-3 font-display text-[8rem] font-700 leading-none tracking-tight">404</h1>
        <h2 className="mt-2 font-display text-2xl font-semibold">This page took a coffee break.</h2>
        <p className="mt-3 text-sm text-cream/65">
          The link is broken or the page moved. Let's get you somewhere useful.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-ink transition hover:bg-coral/90"
          >
            ← Home
          </Link>
          <Link
            to="/wellwith"
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-6 py-3 text-sm font-semibold text-cream hover:border-coral hover:text-coral"
          >
            See Wellwith
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#1a1a1a" },
      { name: "format-detection", content: "telephone=no" },
      { title: "Vandanaa Yadav | AI Content Creator & Video Editor" },
      { name: "description", content: "AI Content Creator, Video Editor, Prompt Engineer, and B2B Strategist helping brands create impactful digital experiences." },
      { name: "author", content: "Vandanaa Yadav" },
      { property: "og:title", content: "Vandanaa Yadav | AI Content Creator & Video Editor" },
      { property: "og:description", content: "AI Content Creator, Video Editor, Prompt Engineer, and B2B Strategist helping brands create impactful digital experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Vandanaa Yadav | AI Content Creator & Video Editor" },
      { name: "twitter:description", content: "AI Content Creator, Video Editor, Prompt Engineer, and B2B Strategist helping brands create impactful digital experiences." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b81b78e7-53f6-4485-8816-082c97219d11/id-preview-ade35c53--e8d2013e-8873-45cd-89c8-c339edcd5d93.lovable.app-1777606607245.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b81b78e7-53f6-4485-8816-082c97219d11/id-preview-ade35c53--e8d2013e-8873-45cd-89c8-c339edcd5d93.lovable.app-1777606607245.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Vandanaa Yadav",
          jobTitle: "AI Content Creator · Video Editor · Prompt Engineer · B2B Strategist",
          email: "mailto:vandanaayadavwork@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
          knowsAbout: ["AI Content Creation", "Video Editing", "CapCut", "Prompt Engineering", "B2B Strategy", "Personal Branding", "Content Marketing"],
          sameAs: [
            "https://www.instagram.com/vaandana.yadav",
            "https://www.youtube.com/@indianbhaktiaisongs",
          ],
        }),
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,900&family=Inter:wght@400;500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <MicDropLoader />
      <ScrollProgress />
      <SkipToContent />
      <PageTransition>
        <div id="main">
          <Outlet />
        </div>
      </PageTransition>
      <BackToTop />
    </>
  );
}
