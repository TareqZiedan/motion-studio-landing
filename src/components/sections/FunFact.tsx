"use client";

import Image from "next/image";
import Counter from "@/components/ui/Counter";
import { stats } from "@/data/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FunFact() {
  const ref = useScrollReveal<HTMLElement>({ y: 30, start: "top 80%" });

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <Image src="/images/funfact/funfact-bg.svg" alt="" fill unoptimized className="object-cover" />
        <div className="absolute inset-0 bg-bg/80" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} data-reveal className="text-center">
            <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
