import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout">
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="nav-brand">
            evblurbs
          </Link>
          <div className="nav-links">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/bookshelf"
              className={`nav-link ${
                location.pathname === "/bookshelf" ? "active" : ""
              }`}
            >
              Bookshelf
            </Link>
            <Link
              to="/photos"
              className={`nav-link ${
                location.pathname === "/photos" ? "active" : ""
              }`}
            >
              Photos
            </Link>
            <Link
              to="/projects"
              className={`nav-link ${
                location.pathname === "/projects" ? "active" : ""
              }`}
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className={`nav-link ${
                location.pathname === "/resume" ? "active" : ""
              }`}
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
