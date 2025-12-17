import * as React from "react";
import { Card } from "@/components/ui/card";
import {
  VSCode,
  Replit,
  GooglePaLM,
  MediaWiki,
  Gemini,
  MagicUI,
} from "@/components/logos";

export default function ToolsSection() {
  return (
    <section className="relative py-28">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Tools & Technologies I Use
          </h2>
          <p className="mt-4 text-base text-foreground/80 leading-relaxed">
            A focused stack of tools and platforms I use to design, build, and
            ship production-ready web applications.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ToolCard
            title="VS Code"
            description="Primary development environment for writing, debugging, and maintaining code."
          >
            <VSCode />
          </ToolCard>

          <ToolCard
            title="Replit"
            description="Quick prototyping, experiments, and collaborative debugging."
          >
            <Replit />
          </ToolCard>

          <ToolCard
            title="React & UI Libraries"
            description="Component-driven UI development with accessibility and performance in mind."
          >
            <MagicUI />
          </ToolCard>

          <ToolCard
            title="Node.js & APIs"
            description="Designing REST APIs, authentication flows, and backend services."
          >
            <MediaWiki />
          </ToolCard>

          <ToolCard
            title="AI APIs"
            description="Experimenting with AI APIs for automation and intelligent features."
          >
            <Gemini />
          </ToolCard>

          <ToolCard
            title="Cloud & Integrations"
            description="Integrating third-party services to build complete systems."
          >
            <GooglePaLM />
          </ToolCard>
        </div>
      </div>
    </section>
  );
}

function ToolCard({ title, description, children }) {
  return (
    <Card
      className="
        group relative overflow-hidden
        rounded-2xl border border-border/60
        bg-background/60 backdrop-blur
        p-6 transition-all
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      {/* subtle hover glow */}
      <div
        aria-hidden
        className="
          absolute inset-0 opacity-0 transition
          group-hover:opacity-100
          bg-gradient-to-br from-primary/5 to-transparent
        "
      />

      <div className="relative flex flex-col gap-5">
        <div className="flex h-10 w-10 items-center justify-center text-foreground/80">
          {children}
        </div>

        <div>
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
