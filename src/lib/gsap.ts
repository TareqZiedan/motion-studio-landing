"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  gsap.defaults({ ease: "power3.out", duration: 1 });
}

/**
 * True when the user has asked the OS to minimize motion
 * (`prefers-reduced-motion: reduce`). Guard GSAP animations with this so that
 * reduced-motion users get a still page. Because our animations create their
 * hidden states via GSAP (`.from`/`.fromTo`/`.set`), simply not running them
 * leaves elements in their natural, visible DOM state — except where the
 * initial hidden state comes from CSS or JS (Project cards, the Showcase
 * gallery, Counter), which set an explicit visible/final state instead.
 */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, ScrollTrigger, SplitText };
