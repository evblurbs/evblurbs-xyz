import { Link } from "react-router-dom";
import "./Page.css";
import "./Blog.css";

const posts = [
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

const Blog = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Blog</h1>
        <div className="page-body">
          <p>Occasional notes on things I'm building and learning.</p>
          <div className="blog-list">
            {posts.map((post) => (
              <article key={post.slug} className="blog-item">
                <div className="blog-date">{post.date}</div>
                <h3 className="blog-post-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="blog-read-link">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
