"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  value: number;
  suffix?: string;
  className?: string;
};

export default function Counter({ value, suffix = "", className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const el = ref.current;

      // Reduced motion: show the final value immediately, no count-up (the DOM
      // renders "0" by default, so we must set it explicitly here).
      if (prefersReducedMotion()) {
        el.textContent = `${Math.round(value).toLocaleString()}${suffix}`;
        return;
      }

      const proxy = { val: 0 };

      const tween = gsap.to(proxy, {
        val: value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${Math.round(proxy.val).toLocaleString()}${suffix}`;
        },
      });

      return () => {
        tween.kill();
      };
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
