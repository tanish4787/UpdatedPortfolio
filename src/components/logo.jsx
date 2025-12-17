import { cn } from "@/lib/utils";

export const Logo = ({ className }) => {
  return (
    <svg
      viewBox="0 0 180 32"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-auto", className)}
      role="img"
      aria-label="Tanish logo"
    >
      <defs>
        <linearGradient id="tanish-gradient" x1="0%" y1="0%" x2="200%" y2="0%">
          <stop offset="0%" stopColor="#9B99FE" />
          <stop offset="50%" stopColor="#5EEAD4" />
          <stop offset="100%" stopColor="#2BC8B7" />
        </linearGradient>
      </defs>

      <text
        x="0"
        y="24"
        fill="url(#tanish-gradient)"
        fontSize="24"
        fontWeight="700"
        letterSpacing="0.14em"
        fontFamily="Inter, ui-sans-serif, system-ui"
        className="tanish-logo-text"
      >
        TANISH
      </text>
    </svg>
  );
};
