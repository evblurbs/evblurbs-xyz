// Single source of truth for per-post SEO metadata used by the prerender step.
// Add a new entry here (and a matching rewrite in vercel.json) when publishing a post.
export const SITE_URL = "https://evblurbs.xyz";

export const blogPosts = [
  {
    slug: "teaching-a-computer-to-find-made-baskets",
    title: "Teaching a Computer to Find Made Baskets",
    description:
      "I spent a Sunday morning rebuilding a made-basket detector for Saturday Hoops NYC with Claude. Here's the approach, the dead ends, and what I learned along the way.",
    image: "/blog/made-baskets/og-image.png",
  },
];
