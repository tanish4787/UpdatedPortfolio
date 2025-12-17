import { Users, Gauge, Code2, Rocket } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "15+", icon: Code2 },
  { label: "Months Experience", value: "12+", icon: Gauge },
  { label: "Technologies Used", value: "10+", icon: Rocket },
  { label: "Team & Solo Work", value: "Yes", icon: Users },
];

export default function FeaturesCard() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <div
        className="
          relative rounded-2xl
          border border-border/60
          bg-card/60 backdrop-blur
          shadow-lg
        "
      >
        <div className="border-b border-border/50 px-6 py-5">
          <h3 className="text-lg font-semibold tracking-tight">
            Developer Snapshot
          </h3>
          <p className="mt-1 text-sm text-foreground/80">
            Quick overview of my hands-on development experience
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                group flex items-center gap-4
                rounded-xl
                border border-border/50
                bg-background/40
                p-4
                transition-all duration-300
                hover:border-border
                hover:bg-background/70
              "
            >
              <div
                className="
                  flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-lg
                  bg-primary/10
                  transition-transform duration-300
                  group-hover:scale-105
                "
              >
                <item.icon className="h-5 w-5 text-primary" />
              </div>

              <div className="leading-tight">
                <p className="text-xl font-semibold tracking-tight">
                  {item.value}
                </p>
                <p className="text-sm text-foreground/80">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
