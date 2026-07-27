"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/data/content";

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const panels = panelsRef.current;
      if (!panels.length || !pinRef.current) return;

      // Reduced motion: don't pin/scrub through stacked panels (which would hide
      // all but one). Lay them out as a plain, scrollable vertical stack so every
      // project stays visible and reachable.
      if (prefersReducedMotion()) {
        gsap.set(pinRef.current, { height: "auto", overflow: "visible" });
        panels.forEach((panel, i) => {
          gsap.set(panel, {
            position: "relative",
            height: "70vh",
            marginBottom: i < panels.length - 1 ? "1.5rem" : 0,
          });
        });
        return;
      }

      gsap.set(panels, { yPercent: (i) => (i === 0 ? 0 : 100) });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: `+=${(panels.length - 1) * 900 + 300}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      panels.forEach((panel, i) => {
        if (i === 0) return;
        tl.to(panels[i - 1], { scale: 0.92, opacity: 0.35, duration: 1 }, `p${i}`).to(
          panel,
          { yPercent: 0, duration: 1 },
          `p${i}`,
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="showcase" ref={sectionRef} className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects we're proud to have shipped."
          description="A look at recent partnerships where thoughtful design met solid engineering."
        />
      </div>

      <div ref={pinRef} className="relative mt-16 h-[70vh] overflow-hidden">
        {featuredProjects.map((project, i) => (
          <div
            key={project.title}
            ref={(el) => {
              if (el) panelsRef.current[i] = el;
            }}
            className="absolute inset-0 mx-auto w-full max-w-6xl px-6 lg:px-8"
            style={{ zIndex: i + 1 }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border">
              <Image src={project.image} alt={project.title} fill unoptimized className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-sm uppercase tracking-widest text-accent">
                  {project.category} · {project.year}
                </p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
