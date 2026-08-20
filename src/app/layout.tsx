import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { LangueProvider } from "@/components/LangueProvider";
import { Nav } from "@/components/Nav";
import { SelecteurLangue } from "@/components/SelecteurLangue";
import { Assistant } from "@/components/Assistant";
import { RegisterSW } from "@/components/RegisterSW";

const display = Bricolage_Grotesque({ variable: "--font-display", subsets: ["latin"] });
const body = Figtree({ variable: "--font-body", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muna · grandir ensemble",
  description:
    "Plateforme inclusive pour la parentalité positive au Cameroun : assistant multilingue, micro-apprentissage, accessibilité et bas-débit.",
  icons: { icon: "/icon-192.png", apple: "/icon-192.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LangueProvider>
          <div className="ndop-band" aria-hidden />
          <header className="sticky top-0 z-30 border-b border-soft bg-cream/90 backdrop-blur">
            <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
              <Link
                href="/"
                className="text-2xl font-extrabold tracking-tight text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Muna<span className="text-accent">.</span>
              </Link>
              <div className="flex items-center gap-3">
                <Nav />
                <SelecteurLangue />
              </div>
            </div>
          </header>
          <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">{children}</main>
          <hr className="ndop-rule mx-auto mt-6 w-full max-w-5xl" />
          <footer className="px-4 py-6 text-center text-sm text-muted">
            Muna · programme national de parentalité positive · MINPROFF · UNICEF Cameroun
          </footer>
          <Assistant />
          <RegisterSW />
        </LangueProvider>
      </body>
    </html>
  );
}
