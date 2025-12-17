import { Link } from "react-router";
import { Logo } from "./logo";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/#about" },
  { title: "Projects", href: "/#projects" },
  { title: "Contact", href: "/#contact" },
];

export default function FooterSection() {
  return (
    <footer className="relative mt-24">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-sm text-foreground/80">
              © {new Date().getFullYear()} Tanish
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {links.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="text-foreground/80 transition hover:text-foreground"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-6 text-xs text-foreground/80/70">
          Built with React, Tailwind, and Firebase. Designed for clarity.
        </p>
      </div>
    </footer>
  );
}
