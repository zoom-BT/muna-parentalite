import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { LangueProvider } from "@/components/LangueProvider";
import { Nav } from "@/components/Nav";
import { SelecteurLangue } from "@/components/SelecteurLangue";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muna — grandir ensemble",
  description:
    "Plateforme inclusive pour la parentalité positive au Cameroun : assistant multilingue, micro-apprentissage, accessibilité et bas-débit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LangueProvider>
          <header className="sticky top-0 z-30 border-b border-soft bg-cream/90 backdrop-blur">
            <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
              <Link href="/" className="flex items-center gap-2 text-xl font-extrabold text-brand-dark">
                <span aria-hidden>🌱</span> Muna
              </Link>
              <div className="flex items-center gap-3">
                <Nav />
                <SelecteurLangue />
              </div>
            </div>
          </header>
          <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">{children}</main>
          <footer className="border-t border-soft px-4 py-6 text-center text-sm text-muted">
            Muna — programme national de parentalité positive · MINPROFF · UNICEF Cameroun
          </footer>
        </LangueProvider>
      </body>
    </html>
  );
}
