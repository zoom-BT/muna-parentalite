"use client";

import { useLangue } from "@/components/LangueProvider";
import { LecteurAudio } from "@/components/LecteurAudio";
import { EPISODES } from "@/data/podcast";

export default function PodcastPage() {
  const { t, langue } = useLangue();
  return (
    <div className="flex flex-col gap-6">
      <section>
        <h1 className="text-2xl font-extrabold text-ink">{t.podcastTitre}</h1>
        <p className="mt-1 max-w-2xl text-muted">{t.podcastIntro}</p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        {EPISODES.map((ep) => (
          <article key={ep.id} className="rounded-2xl border border-soft bg-surface p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-accent">
              {ep.langue} · {ep.duree}
            </p>
            <h2 className="mt-1 text-lg font-bold text-ink">{ep.titre[langue]}</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted">{ep.desc[langue]}</p>
            <div className="mt-3">
              <LecteurAudio src={ep.src} label={ep.titre[langue]} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
