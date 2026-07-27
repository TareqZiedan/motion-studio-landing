"use client";

import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Options = {
  y?: number;
  stagger?: number;
  start?: string;
  selector?: string;
};

export function useScrollReveal<T extends HTMLElement>(options: Options = {}): RefObject<T | null> {
  const ref = useRef<T>(null);
  const { y = 40, stagger = 0.12, start = "top 82%", selector = "[data-reveal]" } = options;

  useGSAP(
    () => {
      if (!ref.current) return;
      const targets = ref.current.querySelectorAll(selector);
      if (!targets.length) return;
      // Reduced motion: leave targets in their natural, visible state.
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
          },
        },
      );
    },
    { scope: ref },
  );

  return ref;
}
