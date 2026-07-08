"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import GradientButton from "@/components/ui/GradientButton";

export default function Cta() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to("[data-float]", {
        y: -20,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.4, from: "random" },
      });

      gsap.fromTo(
        "[data-reveal]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0">
        <Image src="/images/cta/cta-bg.svg" alt="" fill unoptimized className="object-cover" />
        <div className="absolute inset-0 bg-bg/70" />
      </div>

      <div
        data-float
        className="absolute left-[10%] top-[15%] h-16 w-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
      />
      <div
        data-float
        className="absolute right-[15%] top-[25%] h-10 w-10 rounded-full border border-white/10 bg-white/5 backdrop-blur"
      />
      <div
        data-float
        className="absolute bottom-[20%] left-[20%] h-12 w-12 rotate-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur"
      />
      <div
        data-float
        className="absolute bottom-[15%] right-[12%] h-20 w-20 rounded-full border border-white/10 bg-white/5 backdrop-blur"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2
          data-reveal
          className="font-display text-4xl font-bold leading-tight text-text sm:text-5xl md:text-6xl"
        >
          Let&apos;s build something <span className="text-gradient">worth talking about.</span>
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-xl text-lg text-text-muted">
          Tell us about your project and we&apos;ll get back to you within one business day with
          next steps.
        </p>
        <div data-reveal className="mt-10 flex justify-center">
          <GradientButton href="#contact">Get In Touch</GradientButton>
        </div>
      </div>
    </section>
  );
}
