"use client";

import { useState } from "react";
import { IconVolume, IconVolumeX } from "./icons";

export function LecteurAudio({ src, label }: { src: string; label: string }) {
  const [erreur, setErreur] = useState(false);

  if (erreur) {
    return (
      <p className="inline-flex items-center gap-2 rounded-xl bg-soft px-3 py-2 text-sm text-muted">
        <IconVolumeX className="h-4 w-4" /> {label} : audio bientôt disponible
      </p>
    );
  }

  return (
    <div className="rounded-xl bg-soft p-3">
      <p className="mb-1 inline-flex items-center gap-2 text-sm font-semibold text-ink">
        <IconVolume className="h-4 w-4" /> {label}
      </p>
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
