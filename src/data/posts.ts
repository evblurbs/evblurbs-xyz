// Shared source of truth for blog post metadata, used by both the Blog
// listing page and the homepage preview. Newest first.
export type Post = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
};

export const posts: Post[] = [
  {
    title: "Teaching a Computer to Ignore Everything Else",
    slug: "teaching-a-computer-to-ignore-everything-else",
    date: "July 5, 2026",
    excerpt:
      "A follow-up on my basketball make-detector. Four filters cut my review pile from 448 candidates to 251 — without losing a single made basket. And writing the post exposed problems I didn't know I had.",
  },
  {
    title: "Teaching a Computer to Find Made Baskets",
    slug: "teaching-a-computer-to-find-made-baskets",
    date: "June 7, 2026",
    excerpt:
      "Using computer vision to spot made shots in pickup basketball. I spent a Sunday morning rebuilding the detector for Saturday Hoops NYC with Claude — here's the approach, the dead ends, and what I learned along the way.",
  },
];
