"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/content";

export default function Project() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll("[data-card]");

      // Cards start hidden via CSS (opacity-0 translate-y-10). Under reduced
      // motion, reveal them immediately instead of on scroll.
      if (prefersReducedMotion()) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }

      ScrollTrigger.batch(cards, {
        start: "top 85%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" }),
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="More Work" title="A broader look at our portfolio." />

        <div ref={gridRef} className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              data-card
              className="group relative aspect-[4/3] translate-y-10 overflow-hidden rounded-2xl border border-border opacity-0"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-white/10" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-xs uppercase tracking-widest text-accent">{project.category}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">{project.title}</h3>
              </div>
              <div className="absolute right-5 top-5 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                ↗
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
