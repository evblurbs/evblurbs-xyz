import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/evblurbs"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.github.com/evblurbs"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:hello@evblurbs.xyz">hello@evblurbs.xyz</a>
        </div>
        <div className="footer-message">
          Made with <span className="heart">💙</span> in{" "}
          <span className="nyc">NYC</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
