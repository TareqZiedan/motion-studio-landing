"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { navLinks } from "@/data/content";
import GradientButton from "@/components/ui/GradientButton";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useGSAP(
    () => {
      if (!navRef.current) return;
      const trigger = ScrollTrigger.create({
        start: "top -80",
        end: 999999,
        toggleClass: { targets: navRef.current, className: "scrolled" },
      });
      return () => trigger.kill();
    },
    { scope: navRef },
  );

  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;

      if (open) {
        gsap.set(panel, { display: "flex" });
        gsap.fromTo(
          panel,
          { clipPath: "circle(0% at 100% 0%)" },
          { clipPath: "circle(150% at 100% 0%)", duration: 0.7, ease: "power3.inOut" },
        );
        gsap.fromTo(
          panel.querySelectorAll("[data-mobile-link]"),
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, delay: 0.25, ease: "power3.out" },
        );
      } else {
        gsap.to(panel, {
          clipPath: "circle(0% at 100% 0%)",
          duration: 0.5,
          ease: "power3.inOut",
          onComplete: () => gsap.set(panel, { display: "none" }),
        });
      }
    },
    { dependencies: [open] },
  );

  return (
    <header
      ref={navRef}
      className={`${styles.navbar} fixed inset-x-0 top-0 z-50 border-b border-transparent`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#top" className="flex items-center gap-2 font-display text-xl font-bold text-text">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-sm text-white">
            BS
          </span>
          <span>BSC</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} text-sm font-medium text-text-muted transition-colors hover:text-text`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <GradientButton href="#contact">Start a Project</GradientButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-text transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-text transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-text transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        ref={panelRef}
        className={`${styles.mobilePanel} fixed inset-0 z-40 hidden flex-col items-center justify-center gap-8 md:hidden`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            data-mobile-link
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-display text-3xl font-semibold text-text"
          >
            {link.label}
          </Link>
        ))}
        <div data-mobile-link onClick={() => setOpen(false)}>
          <GradientButton href="#contact">Start a Project</GradientButton>
        </div>
      </div>
    </header>
  );
}
