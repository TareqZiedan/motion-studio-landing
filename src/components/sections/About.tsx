"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { label: "Founded", value: "2016" },
  { label: "Team Members", value: "24" },
  { label: "Countries Served", value: "12" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!imageRef.current) return;
      // Reduced motion: skip the reveal; image and content stay in place.
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(15% 15% 15% 15% round 24px)", scale: 1.1 },
        {
          clipPath: "inset(0% 0% 0% 0% round 24px)",
          scale: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        "[data-reveal]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section id="about" ref={sectionRef} className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div
            ref={imageRef}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border"
          >
            <Image
              src="/images/about/about-team.svg"
              alt="BSC team collaborating"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div
            data-reveal
            className="absolute -bottom-10 -right-6 hidden aspect-[4/3] w-2/5 overflow-hidden rounded-2xl border-4 border-bg shadow-2xl sm:block"
          >
            <Image
              src="/images/about/about-office.svg"
              alt="BSC studio space"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <div data-reveal>
            <SectionHeading
              eyebrow="About BSC"
              title="A studio built by builders, for builders."
              description="Founded by a small group of designers and engineers tired of slow, generic agency work, BSC has grown into a full-service partner for brands who care about craft."
            />
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label} data-reveal>
                <p className="font-display text-3xl font-bold text-gradient">{s.value}</p>
                <p className="mt-1 text-sm text-text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
