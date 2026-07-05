import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import { projects } from "../data/projects";
import { books } from "../data/books";
import { photos } from "../data/photos";
import "./Page.css";
import "./Home.css";

const favoriteBooks = books.filter((b) => b.isFavorite);
const previewPhotos = photos.slice(0, 6);

const Home = () => {
  return (
    <div className="page">
      <div className="page-content home">
        <section className="home-hero">
          <h1 className="home-title">Hi, I'm Evan.</h1>
          <p className="home-intro">
            I'm a software engineer in New York. By day I build high-scale
            products at Amazon; on the side I tinker with computer vision and AI,
            run a pick-up basketball community, and read more than I probably
            should.
          </p>
          <Link to="/about" className="home-more">
            More about me →
          </Link>
        </section>

        <section className="home-section">
          <div className="home-section-head">
            <h2>Writing</h2>
            <Link to="/blog" className="home-section-link">
              All posts →
            </Link>
          </div>
          <div className="home-posts">
            {posts.slice(0, 2).map((post) => (
              <article key={post.slug} className="home-post">
                <div className="home-post-date">{post.date}</div>
                <h3 className="home-post-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="home-post-excerpt">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="home-section-head">
            <h2>Projects</h2>
            <Link to="/projects" className="home-section-link">
              All projects →
            </Link>
          </div>
          <ul className="home-projects">
            {projects.map((project) => (
              <li key={project.slug} className="home-project">
                <Link to={`/projects/${project.slug}`} className="home-project-title">
                  {project.title}
                </Link>
                <p className="home-project-description">{project.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-section">
          <div className="home-section-head">
            <h2>Bookshelf</h2>
            <Link to="/bookshelf" className="home-section-link">
              Full bookshelf →
            </Link>
          </div>
          <ul className="home-books">
            {favoriteBooks.map((book) => (
              <li key={book.title} className="home-book">
                <span className="home-book-title">{book.title}</span>
                <span className="home-book-author">{book.authors}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-section">
          <div className="home-section-head">
            <h2>Photos</h2>
            <Link to="/photos" className="home-section-link">
              All photos →
            </Link>
          </div>
          <div className="home-photos">
            {previewPhotos.map((photo) => (
              <Link to="/photos" key={photo} className="home-photo">
                <img src={`/photos/${photo}`} alt="" loading="lazy" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
