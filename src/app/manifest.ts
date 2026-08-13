import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muna — grandir ensemble",
    short_name: "Muna",
    description:
      "Assistant de parentalité positive au Cameroun — multilingue, hors ligne.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf6ee",
    theme_color: "#1f8a70",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
