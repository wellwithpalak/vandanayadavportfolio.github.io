import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect } from "react";
import { CursorFX } from "@/components/portfolio/CursorFX";
import { MicDropLoader } from "@/components/portfolio/MicDropLoader";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vandana Yadav — MBA Finance · Leadership · AI-Driven Marketing" },
      { name: "description", content: "Portfolio of Vandana Yadav — MBA Finance professional from Delhi leading large teams, building AI-powered marketing systems and B2B growth playbooks." },
      { name: "author", content: "Vandana Yadav" },
      { property: "og:title", content: "Vandana Yadav — MBA Finance · Leadership · AI-Driven Marketing" },
      { property: "og:description", content: "Portfolio of Vandana Yadav — MBA Finance professional from Delhi leading large teams, building AI-powered marketing systems and B2B growth playbooks." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Vandana Yadav — MBA Finance · Leadership · AI-Driven Marketing" },
      { name: "twitter:description", content: "Portfolio of Vandana Yadav — MBA Finance professional from Delhi leading large teams, building AI-powered marketing systems and B2B growth playbooks." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b81b78e7-53f6-4485-8816-082c97219d11/id-preview-ade35c53--e8d2013e-8873-45cd-89c8-c339edcd5d93.lovable.app-1777606607245.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b81b78e7-53f6-4485-8816-082c97219d11/id-preview-ade35c53--e8d2013e-8873-45cd-89c8-c339edcd5d93.lovable.app-1777606607245.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,900&family=Inter:wght@400;500;600;700&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
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
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      document.documentElement.classList.add("has-custom-cursor");
    }
  }, []);
  return (
    <>
      <MicDropLoader />
      <CursorFX />
      <Outlet />
    </>
  );
}
