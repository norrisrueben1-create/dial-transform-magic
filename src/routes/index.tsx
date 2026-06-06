import { createFileRoute } from "@tanstack/react-router";
import { PhaseProvider } from "@/components/phase-context";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Pricing } from "@/components/pricing";
import { Contact, SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Webify101 — Turn the dial on your web presence" },
      {
        name: "description",
        content:
          "Interactive web design studio. Drag the Webify Dial and watch the site morph from 90s chaos to premium modern.",
      },
      { property: "og:title", content: "Webify101 — Turn the dial" },
      {
        property: "og:description",
        content: "Drag the dial. Change the world. A web design studio for the hardware-obsessed.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PhaseProvider>
      <main className="min-h-screen overflow-x-hidden">
        <Nav />
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Contact />
        <SiteFooter />
      </main>
    </PhaseProvider>
  );
}
