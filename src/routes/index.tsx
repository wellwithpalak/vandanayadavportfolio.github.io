import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { VideoMarquee } from "@/components/portfolio/VideoMarquee";
import { StatsCounter } from "@/components/portfolio/StatsCounter";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <StatsCounter />
      <Work />
      <About />
      <Skills />
      <VideoMarquee />
      <Contact />
      <Footer />
    </main>
  );
}
