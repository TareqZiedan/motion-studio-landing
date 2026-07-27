"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import StarRating from "@/components/ui/StarRating";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  useGSAP(
    () => {
      if (!cardRef.current) return;
      // Reduced motion: no blur/slide entrance; the card swaps in instantly.
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 24, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" },
      );
    },
    { dependencies: [index], scope: sectionRef },
  );

  const current = testimonials[index];
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Voices"
          title="Don't take our word for it."
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-16">
          <div
            ref={cardRef}
            className="rounded-3xl border border-border bg-bg-elevated/40 p-10 text-center sm:p-14"
          >
            <StarRating rating={current.rating} className="mx-auto justify-center" />
            <p className="mt-6 font-display text-xl leading-relaxed text-text sm:text-2xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border">
                <Image src={current.avatar} alt={current.name} fill unoptimized className="object-cover" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-text">{current.name}</p>
                <p className="text-sm text-text-muted">
                  {current.role}, {current.company}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-primary"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-gradient-brand" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-primary"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
