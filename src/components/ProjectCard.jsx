import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectCard({
  id,
  title,
  description,
  image,
  status,
  features = [],
  github,
  live,
  isAdmin = false,
  onEdit,
  onDelete,
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl",
        "border border-border/60 bg-card/60 backdrop-blur",
        "transition-all duration-300 hover:shadow-lg"
      )}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold tracking-tight">{title}</h3>

            {status && (
              <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium">
                {status}
              </span>
            )}
          </div>

          <p className="mt-1 text-sm text-foreground/80">{description}</p>
        </div>

        {features.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {features.map((feature) => (
              <span
                key={feature}
                className="rounded-md border bg-background/60 px-2.5 py-1 text-xs"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto space-y-3">
          <div className="flex gap-3">
            {github && (
              <Button asChild variant="outline" size="sm">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}

            {live && (
              <Button asChild size="sm">
                <a href={live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live
                </a>
              </Button>
            )}
          </div>

          {isAdmin && (
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => onEdit(id)}>
                Edit
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => onDelete(id)}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
