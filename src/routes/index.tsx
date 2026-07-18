import { createFileRoute } from "@tanstack/react-router";
import App from "../App.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "I love you Manal" },
      {
        name: "description",
        content:
          "A cinematic, museum-style birthday experience. Six chapters, one masterpiece — you.",
      },
      { property: "og:title", content: "A Life Worth Framing" },
      {
        property: "og:description",
        content:
          "A luxury digital gallery, curated with love, for the greatest masterpiece.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});
