import React from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const menuItems = [
  { name: "Home", to: "/", id: "home" },
  { name: "About", to: "/about", id: "about" },
  { name: "Projects", to: "/projects", id: "projects" },
  { name: "Contact", to: "/contact", id: "contact" },
];

export const HeroHeader = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="px-2">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl rounded-2xl px-6 transition-all duration-300 lg:px-12",
            isScrolled && "border bg-background/70 backdrop-blur"
          )}
        >
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Logo />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden gap-8 text-sm lg:flex">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button
                    className="text-foreground/80 transition hover:text-foreground"
                    onClick={() => {
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop actions */}
            <div className="hidden lg:flex gap-3">
              <ThemeToggle />
              <Button asChild variant="outline" size="sm">
                <a href="/resume.pdf" download>
                  Resume
                </a>
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden border-t pb-6 pt-4">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        document
                          .getElementById(item.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                        setMenuOpen(false);
                      }}
                      className="block text-foreground/80 transition hover:text-foreground"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <ThemeToggle />
                <Button asChild className="w-full" variant="outline">
                  <a href="/resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
