// Codes by mahdi tasha
// Importing part
import type { MetadataRoute } from "next";

// Creating and exporting manifest of the app
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Podcast Showcase",
    short_name: "Podcast",
    description:
      "A small podcast pwa app which showcases my (Mahdi Tasha) skills in style and animation.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0466c8",
    orientation: "portrait-primary",
    categories: ["podcast", "music", "showcase"],
    lang: "en",
    prefer_related_applications: false,
    icons: [
      {
        src: "../public/image/manifest/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "../public/image/manifest/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "../public/image/manifest/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "../public/image/manifest/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
