"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Props = {
  words: string[];
  speed?: number;
  className?: string;
};

export default function Marquee({ words, speed = 60, className = "" }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!trackRef.current) return;
      const track = trackRef.current;
      // Reduced motion: no infinite scroll; the words rest in place.
      if (prefersReducedMotion()) return;
      const totalWidth = track.scrollWidth / 2;

      const tween = gsap.to(track, {
        x: -totalWidth,
        duration: totalWidth / speed,
        ease: "none",
        repeat: -1,
      });

      return () => {
        tween.kill();
      };
    },
    { scope: trackRef },
  );

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex w-max items-center gap-10 whitespace-nowrap will-change-transform">
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-3xl font-semibold text-text-muted/30 md:text-5xl"
          >
            {word}
            <span className="text-gradient">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
