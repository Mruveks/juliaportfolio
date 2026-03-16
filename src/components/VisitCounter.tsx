"use client";

import { useEffect, useState } from "react";

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Calls the Netlify serverless function that increments + returns total visit count
    fetch("/.netlify/functions/visit-counter")
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.count === "number") setCount(data.count);
      })
      .catch(() => {
        // Silently fail - counter just stays hidden
      });
  }, []);

  if (count === null) return null;

  return (
    <span className="text-xs text-white/20 tabular-nums" title="Łączna liczba odwiedzin">
      {count.toLocaleString("pl-PL")} odwiedzających 
    </span>
  );
}
