"use client";

import { useState } from "react";

export function LecteurAudio({ src, label }: { src: string; label: string }) {
  const [erreur, setErreur] = useState(false);

  if (erreur) {
    return (
      <p className="rounded-xl bg-soft px-3 py-2 text-sm text-muted">
        🔇 {label} — audio bientôt disponible
      </p>
    );
  }

  return (
    <div className="rounded-xl bg-soft p-3">
      <p className="mb-1 text-sm font-semibold text-ink">🔊 {label}</p>
      <audio
        controls
        src={src}
        onError={() => setErreur(true)}
        aria-label={label}
        className="w-full"
      />
    </div>
  );
}
