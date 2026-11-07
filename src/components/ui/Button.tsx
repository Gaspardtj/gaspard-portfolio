
import type { ReactNode } from "react";
import { Link } from "react-router";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary";
  download?: boolean;
}

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  download = false,
}: ButtonProps) {
  const classes =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 " +
    (variant === "primary"
      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
      : "border border-white/20 bg-white/5 text-white hover:border-cyan-400/50 hover:bg-white/10");

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        target={!download && href.startsWith("http") ? "_blank" : undefined}
        rel={!download && href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return null;
}
