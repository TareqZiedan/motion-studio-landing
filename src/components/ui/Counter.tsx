"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

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
