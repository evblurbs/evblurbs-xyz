import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="layout">
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="nav-brand">
            evblurbs
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}
          onClick={closeMobileMenu}
        >
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-links">
              <Link
                to="/"
                className={`mobile-nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                to="/bookshelf"
                className={`mobile-nav-link ${
                  location.pathname === "/bookshelf" ? "active" : ""
                }`}
                onClick={closeMobileMenu}
              >
                Bookshelf
              </Link>
              <Link
                to="/photos"
                className={`mobile-nav-link ${
                  location.pathname === "/photos" ? "active" : ""
                }`}
                onClick={closeMobileMenu}
              >
                Photos
              </Link>
              <Link
                to="/projects"
                className={`mobile-nav-link ${
                  location.pathname === "/projects" ? "active" : ""
                }`}
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
              <Link
                to="/resume"
                className={`mobile-nav-link ${
                  location.pathname === "/resume" ? "active" : ""
                }`}
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </div>
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
