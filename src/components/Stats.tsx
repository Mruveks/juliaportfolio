"use client";

import { useEffect, useRef, useState } from "react";
import { SiteContent } from "@/lib/content";

function useCountUp(target: number, duration = 1400, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
}

function StatCard({
  stat,
  active,
}: {
  stat: SiteContent["stats"][0];
  active: boolean;
}) {
  const count = useCountUp(stat.value, 1400, active);

  const formatted =
    stat.value >= 1000000
      ? (count / 1000000).toFixed(1).replace(/\.0$/, "") + "M+"
      : stat.value >= 1000
      ? (count / 1000).toFixed(0) + "k+"
      : count + (stat.display.endsWith("%") ? "%" : stat.display.endsWith("+") ? "+" : "");

  return (
    <div className="text-center p-8 rounded-2xl bg-[#FDFAF6] border border-[#DDD6CB]">
      <div
        className="text-4xl md:text-5xl font-bold text-[#1A1714] mb-3 tabular-nums"
        style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
      >
        {active ? formatted : "0"}
      </div>
      <p className="text-sm text-[#8A8078] leading-snug">{stat.label}</p>
    </div>
  );
}

export default function Stats({ content }: { content: SiteContent }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-28 bg-[#F3EDE3]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-10 h-px bg-[#B5926A]" aria-hidden="true" />
          <span className="text-sm font-medium text-[#B5926A] uppercase tracking-widest">Wyniki</span>
        </div>
        <h2
          className="text-4xl md:text-5xl font-bold leading-tight text-[#1A1714] mb-16"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Liczby mówią same za siebie.
        </h2>
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {content.stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
