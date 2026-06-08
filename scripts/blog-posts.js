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
];
