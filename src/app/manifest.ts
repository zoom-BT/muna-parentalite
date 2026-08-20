import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muna · grandir ensemble",
    short_name: "Muna",
    description:
      "Assistant de parentalité positive au Cameroun : multilingue, hors ligne.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f1e4",
    theme_color: "#1b2a4a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
