"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, prefersReducedMotion } from "@/lib/gsap";
import Marquee from "@/components/ui/Marquee";
import { marqueeWords } from "@/data/content";

export default function TextArea() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      if (!paragraphRef.current || !pinRef.current) return;
      // Reduced motion: no pin/scrub; the paragraph shows fully, no dimming.
      if (prefersReducedMotion()) return;

      const split = new SplitText(paragraphRef.current, { type: "words" });
      gsap.set(split.words, { opacity: 0.12 });

      gsap.to(split.words, {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=1100",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      return () => split.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative">
      <Marquee words={marqueeWords} className="border-y border-border py-6" />
      <div ref={pinRef} className="flex min-h-[70vh] items-center py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p
            ref={paragraphRef}
            className="font-display text-3xl font-medium leading-snug text-text sm:text-4xl md:text-5xl"
          >
            We believe a website is more than a digital brochure — it&apos;s the clearest
            expression of what your company stands for. Every layout, transition and pixel is
            a decision that either builds trust or costs it, and we obsess over getting that
            decision right.
          </p>
        </div>
      </div>
    </section>
  );
}
