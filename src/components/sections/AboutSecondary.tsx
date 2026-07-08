"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/content";

export default function AboutSecondary() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        });
      }

      gsap.fromTo(
        "[data-step]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section id="process" ref={sectionRef} className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <Image src="/images/mission/mission.svg" alt="" fill unoptimized className="object-cover" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="A process built for clarity, not chaos."
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-20">
          <svg
            className="absolute left-0 top-10 hidden w-full lg:block"
            height="4"
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="processGradient" x1="0" x2="1">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="55%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
            <path d="M0,2 H1000" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
            <path ref={pathRef} d="M0,2 H1000" stroke="url(#processGradient)" strokeWidth="2" fill="none" />
          </svg>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} data-step className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border bg-bg-elevated font-display text-2xl font-bold text-gradient">
                  {step.number}
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-text">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
