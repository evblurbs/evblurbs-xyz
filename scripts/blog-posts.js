// Single source of truth for per-post SEO metadata used by the prerender step.
// Add a new entry here (and a matching rewrite in vercel.json) when publishing a post.
export const SITE_URL = "https://evblurbs.xyz";

export const blogPosts = [
  {
    slug: "teaching-a-computer-to-find-made-baskets",
    title: "Teaching a Computer to Find Made Baskets",
    description:
      "Using computer vision to spot made shots in pickup basketball. I spent a Sunday morning rebuilding the detector for Saturday Hoops NYC with Claude — here's the approach, the dead ends, and what I learned along the way.",
    image: "/blog/made-baskets/og-image.png",
  },
  {
    slug: "teaching-a-computer-to-ignore-everything-else",
    title: "Teaching a Computer to Ignore Everything Else",
    description:
      "A follow-up on my basketball make-detector. Four filters cut my review pile from 448 candidates to 251 — without losing a single made basket. And writing the post exposed problems I didn't know I had.",
    image: "/blog/ignore-everything-else/og-image.png",
  },
];
