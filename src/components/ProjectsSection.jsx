import { useEffect, useState } from "react";
import { fetchProjects } from "../hooks/useProject.js";
import { ProjectCard } from "./ProjectCard";
import { deleteProject } from "../lib/projectActions.js";
import { getAuth } from "firebase/auth";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const auth = getAuth();
  const isAdmin = !!auth.currentUser;

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  function handleDelete(id) {
    const ok = window.confirm("Delete this project?");
    if (!ok) return;

    deleteProject(id).then(() => {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    });
  }

  function handleEdit(id) {
    // TEMP — we’ll wire edit route later
    console.log("Edit project:", id);
  }

  return (
    <section id="projects" className="relative py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-muted/30 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
             Projects
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            A curated set of projects that reflect my approach to design, devlop and maintain clean architecture, in production-ready frontend projects.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              isAdmin={isAdmin}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
