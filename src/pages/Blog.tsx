import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import "./Page.css";
import "./Blog.css";

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
