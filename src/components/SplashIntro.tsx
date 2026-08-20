"use client";

import { useEffect, useState } from "react";

export function SplashIntro() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("out"), 1600);
    const t2 = setTimeout(() => setPhase("done"), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-cream transition-opacity duration-500 ${
        phase === "out" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="splash-logo flex flex-col items-center">
        <span
          className="text-6xl font-extrabold tracking-tight text-ink"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Muna<span className="text-accent">.</span>
        </span>
        <span className="splash-underline mt-3 h-1.5 w-28 rounded-full" />
        <span className="splash-tagline mt-4 text-sm font-semibold text-muted">
          grandir ensemble
        </span>
      </div>
    </div>
  );
}
