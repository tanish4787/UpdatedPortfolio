import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";

export default function HeroSection() {
  const transitionVariants = {
    item: {
      hidden: { opacity: 0, y: 18 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.2,
          duration: 1.4,
        },
      },
    },
  };

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[30%] h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-32 pb-28 text-center">
        <AnimatedGroup variants={transitionVariants}>
          <h1 className="mx-auto max-w-3xl text-balance text-5xl font-semibold tracking-tight md:text-6xl">
            <TextEffect preset="fade-in-blur" as="span">
              Hi, I’m
            </TextEffect>{" "}
            <span className="text-primary">Tanish</span>
          </h1>

          <TextEffect
            as="h2"
            preset="fade-in-blur"
            delay={0.15}
            className="mx-auto mt-5 max-w-2xl text-lg font-medium text-foreground/80 md:text-xl"
          >
            Full-Stack Web Developer
          </TextEffect>

          <TextEffect
            as="p"
            preset="fade-in-blur"
            delay={0.3}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-foreground/80"
          >
            I build production-ready web applications with a strong focus on
            clean architecture, performance, and long-term maintainability.
          </TextEffect>

          <TextEffect
            as="p"
            preset="fade-in-blur"
            delay={0.45}
            className="mx-auto mt-8 max-w-2xl font-mono text-sm text-foreground/80"
          >
            React · Node.js · Express · MongoDB · REST APIs · Tailwind CSS
          </TextEffect>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.65,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="rounded-xl px-7">
              <Link to="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-xl px-7"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </AnimatedGroup>
        </AnimatedGroup>
      </div>
    </section>
  );
}
