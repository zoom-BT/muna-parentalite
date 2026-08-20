"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLangue } from "./LangueProvider";
import { IconMenu, IconX } from "./icons";
import type { Strings } from "@/core/i18n";

function liensDe(t: Strings) {
  return [
    { href: "/", label: t.navAccueil },
    { href: "/parent", label: t.navParent },
    { href: "/apprendre", label: t.navApprendre },
    { href: "/podcast", label: t.navPodcast },
    { href: "/facilitateur", label: t.navFacilitateur },
    { href: "/tableau-de-bord", label: t.navTableau },
  ];
}
const estActif = (path: string, href: string) =>
  href === "/" ? path === "/" : path.startsWith(href);

// Desktop : onglets horizontaux
export function Nav() {
  const { t } = useLangue();
  const path = usePathname();
  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation">
      {liensDe(t).map((l) => (
        <Link
          key={l.href}
          href={l.href}
          aria-current={estActif(path, l.href) ? "page" : undefined}
          className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
            estActif(path, l.href)
              ? "bg-brand/10 text-brand-dark"
              : "text-ink/70 hover:bg-soft"
          }`}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}

// Mobile : menu regroupé (hamburger), placé à l'extrémité droite
export function MenuMobile() {
  const { t } = useLangue();
  const path = usePathname();
  const [ouvert, setOuvert] = useState(false);
  useEffect(() => setOuvert(false), [path]);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOuvert((o) => !o)}
        aria-label="Menu"
        aria-expanded={ouvert}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-soft bg-surface text-ink shadow-sm hover:bg-soft"
      >
        {ouvert ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
      </button>
      {ouvert && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={() => setOuvert(false)}
            aria-hidden
          />
          <nav
            className="absolute right-0 top-full z-40 mt-2 w-56 overflow-hidden rounded-2xl border border-soft bg-surface p-2 shadow-xl"
            aria-label="Navigation"
          >
            {liensDe(t).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOuvert(false)}
                aria-current={estActif(path, l.href) ? "page" : undefined}
                className={`block rounded-xl px-4 py-2.5 text-sm font-semibold ${
                  estActif(path, l.href)
                    ? "bg-brand/10 text-brand-dark"
                    : "text-ink hover:bg-soft"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
