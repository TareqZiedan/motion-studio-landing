"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, prefersReducedMotion } from "@/lib/gsap";
import GradientButton from "@/components/ui/GradientButton";
import styles from "./Hero.module.scss";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!headingRef.current) return;
      // Reduced motion: skip the split/timeline/parallax; content stays visible.
      if (prefersReducedMotion()) return;

      const split = new SplitText(headingRef.current, {
        type: "lines,words",
        linesClass: "overflow-hidden",
      });
      gsap.set(split.words, { yPercent: 120, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.to(split.words, { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.04 })
        .from("[data-hero-fade]", { y: 24, opacity: 0, duration: 0.8, stagger: 0.12 }, "-=0.5")
        .from(imageRef.current, { scale: 1.15, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=0.9");

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      return () => split.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section id="top" ref={sectionRef} className={`${styles.hero} relative flex min-h-screen items-center pt-28`}>
      <div className={`${styles.blob} ${styles.blobOne}`} />
      <div className={`${styles.blob} ${styles.blobTwo}`} />
      <div className={`${styles.blob} ${styles.blobThree}`} />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 lg:grid-cols-2 lg:px-8">
        <div>
          <span
            data-hero-fade
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent"
          >
            Web Design &amp; Development Studio
          </span>
          <h1
            ref={headingRef}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] text-text sm:text-6xl lg:text-7xl"
          >
            We build websites that move people.
          </h1>
          <p data-hero-fade className="mt-6 max-w-lg text-lg text-text-muted">
            BSC partners with ambitious brands to design and build fast, beautiful,
            high-converting digital experiences — from first sketch to launch day and beyond.
          </p>
          <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-4">
            <GradientButton href="#contact">Start a Project</GradientButton>
            <GradientButton href="#showcase" variant="outline">
              View Our Work
            </GradientButton>
          </div>
        </div>

        <div
          ref={imageRef}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border"
        >
          <Image
            src="/images/hero/hero-main.svg"
            alt="BSC studio workspace"
            fill
            unoptimized
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className={`${styles.scrollCue} absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-text-muted`}>
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
          <rect x="1" y="1" width="22" height="34" rx="11" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="10" r="3" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
