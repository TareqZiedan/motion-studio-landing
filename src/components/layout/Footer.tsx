"use client";

import Link from "next/link";
import { navLinks, services } from "@/data/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Footer.module.scss";

const socials = [
  {
    label: "X",
    href: "https://x.com",
    path: "M18.9 3H22l-7.6 8.7L23.3 21h-6.9l-5.4-6.6L4.8 21H1.6l8.1-9.3L1 3h7.1l4.9 6.1L18.9 3Zm-1.2 16.2h1.9L7.4 4.7H5.4l12.3 14.5Z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.2c2.7 0 3 .01 4.05.06 1.05.05 1.77.22 2.4.46.65.25 1.2.6 1.75 1.14.5.5.86 1.1 1.14 1.75.24.63.4 1.35.46 2.4.05 1.05.06 1.35.06 4.05s-.01 3-.06 4.05c-.05 1.05-.22 1.77-.46 2.4a4.7 4.7 0 0 1-1.14 1.75c-.5.5-1.1.86-1.75 1.14-.63.24-1.35.4-2.4.46-1.05.05-1.35.06-4.05.06s-3-.01-4.05-.06c-1.05-.05-1.77-.22-2.4-.46a4.7 4.7 0 0 1-1.75-1.14 4.7 4.7 0 0 1-1.14-1.75c-.24-.63-.4-1.35-.46-2.4C2.2 15 2.2 14.7 2.2 12s.01-3 .06-4.05c.05-1.05.22-1.77.46-2.4.25-.65.6-1.2 1.14-1.75.5-.5 1.1-.86 1.75-1.14.63-.24 1.35-.4 2.4-.46C9 2.2 9.3 2.2 12 2.2Zm0 1.8c-2.66 0-2.97 0-4.02.06-.86.04-1.32.18-1.63.3-.41.16-.7.35-1 .66-.31.3-.5.6-.66 1a4.2 4.2 0 0 0-.3 1.63C4.33 8.7 4.33 9 4.33 12s0 2.97.06 4.02c.04.86.18 1.32.3 1.63.16.41.35.7.66 1 .3.31.6.5 1 .66.31.12.77.26 1.63.3 1.05.06 1.36.06 4.02.06s2.97 0 4.02-.06c.86-.04 1.32-.18 1.63-.3.41-.16.7-.35 1-.66.31-.3.5-.6.66-1 .12-.31.26-.77.3-1.63.06-1.05.06-1.36.06-4.02s0-2.97-.06-4.02c-.04-.86-.18-1.32-.3-1.63a2.9 2.9 0 0 0-.66-1c-.3-.31-.6-.5-1-.66a4.2 4.2 0 0 0-1.63-.3C14.97 4 14.66 4 12 4Zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm4.8-2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z",
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com",
    path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.8 5.4a8.3 8.3 0 0 1 1.7 4.9c-.25-.05-2.7-.55-5.2-.24-.06-.13-.11-.27-.17-.4-.15-.36-.32-.72-.5-1.07 2.75-1.12 4-2.72 4.17-3.18ZM12 3.7c1.9 0 3.65.7 5 1.85-.13.19-1.24 1.68-3.87 2.68a37 37 0 0 0-3.1-4.31c.63-.15 1.29-.22 1.97-.22Zm-3.6.83A34.6 34.6 0 0 1 11.5 8.7c-3.9 1.04-7.35 1-7.72 1a8.35 8.35 0 0 1 4.62-5.17ZM3.68 12.03v-.24c.36.01 4.4.06 8.56-1.18.24.46.46.93.67 1.4-.11.03-.23.07-.34.1-4.3 1.4-6.58 5.2-6.77 5.53a8.3 8.3 0 0 1-2.12-5.61ZM12 20.3a8.3 8.3 0 0 1-5.2-1.82c.15-.3 1.85-3.6 6.55-5.26l.1-.03a41 41 0 0 1 2.06 6.9 8.28 8.28 0 0 1-3.51.21Zm5.15-1.14a43 43 0 0 0-1.9-6.32c2.3-.36 4.31.24 4.55.32a8.34 8.34 0 0 1-2.65 6Z",
  },
];

export default function Footer() {
  const ref = useScrollReveal<HTMLElement>({ y: 30, start: "top 90%" });

  return (
    <footer id="contact" ref={ref} className={`${styles.footer} bg-bg-elevated`}>
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div
          data-reveal
          className="grid grid-cols-1 gap-12 border-b border-border pb-14 md:grid-cols-2 lg:grid-cols-5"
        >
          <div className="lg:col-span-2">
            <Link href="#top" className="flex items-center gap-2 font-display text-xl font-bold text-text">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-sm text-white">
                BS
              </span>
              <span>BSC</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
              We&apos;re a web design &amp; development studio helping ambitious brands ship
              fast, beautiful, high-converting websites.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className={`${styles.social} flex h-10 w-10 items-center justify-center text-text-muted transition-colors hover:text-text`}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-text">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-muted transition-colors hover:text-text">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-text">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.title} className="text-sm text-text-muted">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-text">
              Stay in the loop
            </h3>
            <p className="mt-4 text-sm text-text-muted">
              Studio news and case studies, once a month. No spam.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center gap-2"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className={`${styles.newsletterInput} w-full px-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:outline-none`}
              />
              <button
                type="submit"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white transition-transform hover:scale-105"
                aria-label="Subscribe"
              >
                →
              </button>
            </form>
            <p className="mt-4 text-sm text-text-muted">hello@bsc-studio.com</p>
          </div>
        </div>

        <div
          data-reveal
          className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-text-muted md:flex-row"
        >
          <p>© {new Date().getFullYear()} BSC Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition-colors hover:text-text">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-text">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
