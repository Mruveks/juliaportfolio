"use client";

import { useRef, useEffect, useState } from "react";

export function Carousel({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  function updateArrows() {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, []);

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardW = firstCard ? firstCard.offsetWidth + 20 : el.clientWidth * 0.55;
    el.scrollBy({ left: dir === "right" ? cardW : -cardW, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-5 overflow-x-auto pb-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </div>

      <div className="flex items-center justify-end gap-2 mt-6">
        <button
          onClick={() => scroll("left")}
          disabled={!canLeft}
          aria-label="Poprzedni"
          className="w-11 h-11 rounded-full border border-[#DDD6CB] bg-[#FDFAF6] flex items-center justify-center text-[#1A1714] transition-all duration-200 hover:border-[#B5926A] hover:text-[#B5926A] disabled:opacity-25 disabled:cursor-not-allowed hover:shadow-md"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canRight}
          aria-label="Następny"
          className="w-11 h-11 rounded-full border border-[#DDD6CB] bg-[#FDFAF6] flex items-center justify-center text-[#1A1714] transition-all duration-200 hover:border-[#B5926A] hover:text-[#B5926A] disabled:opacity-25 disabled:cursor-not-allowed hover:shadow-md"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
