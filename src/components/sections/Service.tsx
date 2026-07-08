"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services, type ServiceIconKey } from "@/data/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const icons: Record<ServiceIconKey, ReactNode> = {
  design: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="4" rx="1.5" />
      <rect x="13" y="10" width="7" height="10" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
    </>
  ),
  code: (
    <>
      <path d="M8 6 3 12l5 6" />
      <path d="m16 6 5 6-5 6" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2.6 12.4a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 8H6" />
      <circle cx="9.5" cy="20.5" r="1.3" />
      <circle cx="17.5" cy="20.5" r="1.3" />
    </>
  ),
  brand: <path d="M12 3l2.6 5.9L21 10l-4.8 4 1.3 6.4L12 17.6 6.5 20.4 7.8 14 3 10l6.4-1.1L12 3Z" />,
  seo: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5.5 5.5" />
    </>
  ),
  support: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M9.5 9.2a2.5 2.5 0 1 1 3.4 2.3c-.9.4-1.4 1-1.4 2.1" />
      <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function Service() {
  const ref = useScrollReveal<HTMLElement>({ y: 32, start: "top 78%" });

  return (
    <section id="services" ref={ref} className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <Image src="/images/service/service-bg.svg" alt="" fill unoptimized className="object-cover" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div data-reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Full-service web design & development."
            description="From first concept to post-launch support, we cover every step so you don't have to juggle five different vendors."
            align="center"
            className="mx-auto"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              data-reveal
              className="group rounded-2xl border border-border bg-bg-elevated/40 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  {icons[service.icon]}
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-text">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
