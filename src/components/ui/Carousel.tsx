"use client";

import { useRef, useEffect, useState, useCallback } from "react";

export function Carousel({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const hasDragged = useRef(false);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

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
  }, [updateArrows]);

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardW = firstCard ? firstCard.offsetWidth + 20 : el.clientWidth * 0.55;
    el.scrollBy({ left: dir === "right" ? cardW : -cardW, behavior: "smooth" });
  }

  // Pointer drag handlers (works for mouse + touch)
  function onPointerDown(e: React.PointerEvent) {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.clientX;
    startScrollLeft.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 4) hasDragged.current = true;
    scrollRef.current.scrollLeft = startScrollLeft.current - dx;
  }

  function onPointerUp(e: React.PointerEvent) {
    if (!isDragging.current || !scrollRef.current) return;
    isDragging.current = false;
    scrollRef.current.releasePointerCapture(e.pointerId);
    scrollRef.current.style.cursor = "grab";
    scrollRef.current.style.userSelect = "";
  }

  function onClickCapture(e: React.MouseEvent) {
    // Suppress click on child links if we actually dragged
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  const ArrowBtn = ({
    dir,
    disabled,
  }: {
    dir: "left" | "right";
    disabled: boolean;
  }) => (
    <button
      onClick={() => scroll(dir)}
      disabled={disabled}
      aria-label={dir === "left" ? "Poprzedni" : "Następny"}
      className={`
        absolute top-1/2 -translate-y-1/2 z-20
        ${dir === "left" ? "-left-5 md:-left-6" : "-right-5 md:-right-6"}
        w-12 h-12 md:w-14 md:h-14 rounded-full
        flex items-center justify-center
        bg-[#FDFAF6] border-2 border-[#DDD6CB]
        text-[#1A1714] shadow-lg shadow-[#1A1714]/10
        transition-all duration-200
        hover:border-[#B5926A] hover:text-[#B5926A] hover:shadow-[#B5926A]/20 hover:scale-105
        disabled:opacity-0 disabled:pointer-events-none
      `}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        {dir === "left"
          ? <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          : <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />}
      </svg>
    </button>
  );

  return (
    <div className="relative px-2">
      <ArrowBtn dir="left" disabled={!canLeft} />

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-5 overflow-x-auto pb-4 select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          cursor: "grab",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClickCapture={onClickCapture}
      >
        {children}
      </div>

      <ArrowBtn dir="right" disabled={!canRight} />

      {/* Scroll hint fade edges */}
      {canLeft && (
        <div className="absolute left-0 top-0 bottom-4 w-16 pointer-events-none z-10"
          style={{ background: "linear-gradient(to right, var(--fade-color, rgba(243,237,227,0.8)), transparent)" }}
        />
      )}
      {canRight && (
        <div className="absolute right-0 top-0 bottom-4 w-16 pointer-events-none z-10"
          style={{ background: "linear-gradient(to left, var(--fade-color, rgba(243,237,227,0.8)), transparent)" }}
        />
      )}
    </div>
  );
}
