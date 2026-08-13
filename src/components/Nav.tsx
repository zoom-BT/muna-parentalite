"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLangue } from "./LangueProvider";

export function Nav() {
  const { t } = useLangue();
  const path = usePathname();
  const liens = [
    { href: "/", label: t.navAccueil },
    { href: "/parent", label: t.navParent },
    { href: "/apprendre", label: t.navApprendre },
    { href: "/facilitateur", label: t.navFacilitateur },
    { href: "/tableau-de-bord", label: t.navTableau },
  ];
  return (
    <nav className="flex flex-wrap items-center gap-1" aria-label="Navigation">
      {liens.map((l) => {
        const actif = l.href === "/" ? path === "/" : path.startsWith(l.href);
        return (
          <Link
            key={l.href}
            href={l.href}
            aria-current={actif ? "page" : undefined}
            className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
              actif ? "bg-brand/10 text-brand-dark" : "text-ink/70 hover:bg-soft"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
