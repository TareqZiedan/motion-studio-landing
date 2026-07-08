import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export default function GradientButton({
  href,
  children,
  variant = "solid",
  className = "",
}: Props) {
  if (variant === "outline") {
    return (
      <Link
        href={href}
        className={`group relative inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-colors duration-300 hover:border-transparent ${className}`}
      >
        <span className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-transform duration-300 hover:scale-[1.03] ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-full" />
    </Link>
  );
}
