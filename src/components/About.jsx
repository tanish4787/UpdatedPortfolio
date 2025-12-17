import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";

const About = () => {
  const transitionVariants = {
    item: {
      hidden: { opacity: 0, y: 16 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.25,
          duration: 1.4,
        },
      },
    },
  };
  return (
    <section
      className="mx-auto max-w-4xl px-6 pt-28 pb-24 text-center"
      id="about"
    >
      <AnimatedGroup variants={transitionVariants}>
        {/* Heading */}
        <h1
          className="mx-auto max-w-3xl  
        text-balance text-4xl font-semibold tracking-tight md:text-5xl
        "
        >
          <TextEffect preset="fade-in-blur" as="span">
            Hi, I’m
          </TextEffect>{" "}
          <span className="text-primary">Tanish</span>
        </h1>

        {/* Role */}
        <TextEffect
          as="h2"
          preset="fade-in-blur"
          delay={0.15}
          className="mx-auto mt-4 max-w-3xl text-balance text-xl text-foreground/80 md:text-2xl"
        >
          Full-Stack Web Developer
        </TextEffect>

        {/* Value */}
        <TextEffect
          as="p"
          preset="fade-in-blur"
          delay={0.3}
          className="mx-auto mt-6 max-w-2xl text-balance text-base text-foreground/80"
        >
          I build production-ready web applications with a strong focus on clean
          architecture, performance, and maintainable code.
        </TextEffect>
        <br />

        <TextEffect
          as="p"
          preset="fade-in-blur"
          delay={0.35}
          className="mx-auto mt-4 max-w-2xl text-balance text-base text-foreground/80 leading-relaxed "
        >
          React and MERN stack developer with hands-on experience building
          responsive UIs, implementing authentication, protected routes, and
          integrating REST APIs. Strong understanding of JavaScript
          fundamentals, React Hooks, and frontend application structure. Looking
          for an entry-level React or MERN role with immediate joining and real
          project exposure.
        </TextEffect>
        <br />

        <TextEffect
          as="p"
          preset="fade-in-blur"
          delay={0.45}
          className="mx-auto max-w-2xl mt-6 font-mono text-md text-foreground/80"
        >
          React | Node.js | Express | MongoDB | REST APIs | Tailwind CSS | Git |
          GitHub
        </TextEffect>

        {/* CTAs */}
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
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="rounded-xl px-6">
            <Link to="/projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button asChild size="lg" variant="ghost" className="rounded-xl px-6">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </AnimatedGroup>
      </AnimatedGroup>
    </section>
  );
};

export default About;
