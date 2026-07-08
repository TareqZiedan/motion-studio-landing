"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { team } from "@/data/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Team() {
  const ref = useScrollReveal<HTMLElement>({ y: 34, start: "top 80%" });

  return (
    <section id="team" ref={ref} className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal>
          <SectionHeading eyebrow="The People" title="Meet the studio." align="center" className="mx-auto" />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} data-reveal className="group text-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-3 pb-5">
                    {["in", "X"].map((label) => (
                      <span
                        key={label}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-white backdrop-blur"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 font-display text-sm font-semibold text-text">{member.name}</p>
              <p className="mt-1 text-xs text-text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
