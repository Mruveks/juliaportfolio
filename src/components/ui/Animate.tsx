"use client";

import { useEffect, useRef, useState } from "react";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/** Fades + slides element up when it enters the viewport. */
export function FadeUp({ children, delay = 0, className = "" }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Wraps an eyebrow + heading pair so each animates in sequence.
 * Eyebrow: 0ms, Heading: 120ms, optional body: 240ms
 */
export function SectionHeader({
  eyebrow,
  heading,
  body,
  align = "left",
}: {
  eyebrow: string;
  heading: React.ReactNode;
  body?: React.ReactNode;
  align?: "left" | "center";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base = "transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]";
  const hidden = "opacity-0 translate-y-7";
  const shown = "opacity-100 translate-y-0";

  return (
    <div ref={ref} className={align === "center" ? "text-center" : ""}>
      <div
        className={`flex items-center gap-3 mb-6 ${align === "center" ? "justify-center" : ""} ${base} ${visible ? shown : hidden}`}
        style={{ transitionDelay: "0ms" }}
      >
        <span className="block w-10 h-px bg-[#B5926A]" aria-hidden="true" />
        <span className="text-sm font-medium text-[#B5926A] uppercase tracking-widest">{eyebrow}</span>
      </div>
      <div
        className={`${base} ${visible ? shown : hidden}`}
        style={{ transitionDelay: "120ms" }}
      >
        {heading}
      </div>
      {body && (
        <div
          className={`${base} ${visible ? shown : hidden}`}
          style={{ transitionDelay: "240ms" }}
        >
          {body}
        </div>
      )}
    </div>
  );
}

/**
 * "Mask reveal" per-line animation for large hero headlines.
 * Each line slides up through an overflow-hidden container.
 */
export function HeroReveal({ lines }: { lines: Array<{ text: string; accent?: boolean }> }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {lines.map((line, i) => (
        <span key={i} style={{ display: "block", overflow: "hidden", lineHeight: 1.05 }}>
          <span
            style={{
              display: "block",
              transform: mounted ? "translateY(0)" : "translateY(105%)",
              transition: `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 140}ms`,
            }}
            className={line.accent ? "text-[#B5926A]" : ""}
          >
            {line.text}
          </span>
        </span>
      ))}
    </>
  );
}
