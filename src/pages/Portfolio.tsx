import { Link } from "react-router-dom";
import "./Page.css";
import "./ProjectDetail.css";

const Portfolio = () => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="project-detail">
          <div className="project-header">
            <Link to="/projects" className="back-link">
              ← Back to Projects
            </Link>
            <h1 className="project-title">Portfolio</h1>
            <p className="project-tagline">
              This website which shares what I've read, projects that I've
              worked on, and my resume.
            </p>
          </div>

          <div className="project-content">
            <div className="project-section">
              <h2>What is this Portfolio?</h2>
              <p>
                I was asked for an updated resume, so I decided to build a
                digital version of it and add a few other features. Now, it
                serves as a place for me to share what I've read, projects that
                I've worked on, some of my photography, and my resume. In the
                future, I plan to add a blog. You can view the source code for
                this project on my{" "}
                <a
                  href="https://github.com/evblurbs/evblurbs-xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                .
              </p>
              <p>
                <b>
                  Below is the AI's own analysis of my code repositories for
                  this project.
                </b>
              </p>
            </div>

            <div className="project-section">
              <h2>Technology Stack</h2>

              <h3>Frontend Application (evblurbs-xyz)</h3>
              <p>
                The website is built using React with Vite, providing a fast and
                modern single-page application optimized for performance and
                developer experience:
              </p>
              <ul>
                <li>
                  <strong>Core Technologies:</strong> React 18.3.1, TypeScript,
                  Vite 5.4.1, React Router DOM 7.9.1, CSS3
                </li>
                <li>
                  <strong>Key Features:</strong> Responsive design, client-side
                  routing, component-based architecture, modern ES6+ JavaScript
                </li>
                <li>
                  <strong>Deployment:</strong> Vercel for hosting with automatic
                  deployments, optimized build process with Vite bundling
                </li>
              </ul>

              <h3>Styling & UI Architecture</h3>
              <p>
                The design system emphasizes clean, minimalist aesthetics with
                consistent typography and spacing:
              </p>
              <ul>
                <li>
                  <strong>Core Technologies:</strong> Custom CSS with CSS Grid
                  and Flexbox, responsive design principles, mobile-first
                  approach
                </li>
                <li>
                  <strong>Design System:</strong> Consistent color palette
                  (#111827, #374151, #6b7280), typography hierarchy,
                  component-based styling
                </li>
                <li>
                  <strong>Layout Features:</strong> Responsive navigation,
                  grid-based layouts, optimized print styles for resume page
                </li>
              </ul>

              <h3>Development & Build System</h3>
              <p>
                The project leverages modern frontend tooling for optimal
                development and production performance:
              </p>
              <ul>
                <li>
                  <strong>Core Technologies:</strong> Vite for fast development
                  server and optimized builds, ESLint for code quality,
                  TypeScript for type safety
                </li>
                <li>
                  <strong>Development Features:</strong> Hot module replacement,
                  TypeScript compilation, automated linting, modern ES modules
                </li>
                <li>
                  <strong>Performance:</strong> Optimized bundle splitting,
                  asset optimization, fast refresh development experience
                </li>
              </ul>
            </div>

            <div className="project-section">
              <h2>Key Features</h2>

              <h3>Multi-Section Portfolio</h3>
              <p>
                The website serves as a comprehensive personal showcase with
                distinct sections for different aspects of professional and
                personal interests:
              </p>
              <ul>
                <li>
                  <strong>Resume Section:</strong> Print-optimized layout with
                  professional formatting, mobile-responsive design,
                  downloadable PDF functionality
                </li>
                <li>
                  <strong>Projects Gallery:</strong> Detailed project pages with
                  technical documentation, code architecture descriptions, and
                  development insights
                </li>
                <li>
                  <strong>Bookshelf:</strong> Personal reading collection with
                  book tracking and recommendations
                </li>
                <li>
                  <strong>Photo Gallery:</strong> Visual storytelling through
                  photography with responsive image grids
                </li>
              </ul>

              <h3>Performance-First Design</h3>
              <p>
                The architecture prioritizes fast loading and smooth user
                experience across all devices:
              </p>
              <ul>
                <li>
                  <strong>Optimized Assets:</strong> SVG icons for crisp
                  scaling, optimized images, minimal bundle size
                </li>
                <li>
                  <strong>Responsive Performance:</strong> Mobile-first CSS,
                  efficient grid layouts, smooth navigation transitions
                </li>
                <li>
                  <strong>SEO Optimization:</strong> Open Graph meta tags,
                  Twitter Cards, structured HTML, semantic markup
                </li>
              </ul>

              <h3>Developer Experience</h3>
              <p>
                The codebase emphasizes maintainability and modern development
                practices:
              </p>
              <ul>
                <li>
                  <strong>Type Safety:</strong> Full TypeScript implementation
                  with strict type checking
                </li>
                <li>
                  <strong>Code Quality:</strong> ESLint configuration with
                  React-specific rules, consistent code formatting
                </li>
                <li>
                  <strong>Component Architecture:</strong> Reusable components
                  with clear separation of concerns
                </li>
              </ul>
            </div>

            <div className="project-section">
              <h2>Architecture & Development</h2>

              <h3>Development Approach</h3>
              <p>
                Built as a modern React SPA with a focus on clean architecture
                and maintainable code:
              </p>
              <ul>
                <li>
                  <strong>Component Structure:</strong> Organized pages with
                  shared layouts, reusable components, clear file structure
                </li>
                <li>
                  <strong>Routing Strategy:</strong> Client-side routing with
                  React Router, nested routes for project details
                </li>
                <li>
                  <strong>State Management:</strong> React hooks for local
                  state, context-free architecture for simplicity
                </li>
              </ul>

              <h3>Deployment Strategy</h3>
              <p>
                Streamlined deployment process with modern hosting and
                automation:
              </p>
              <ul>
                <li>
                  <strong>Hosting Platform:</strong> Vercel for global CDN,
                  automatic HTTPS, and seamless Git integration
                </li>
                <li>
                  <strong>Build Process:</strong> Vite-powered builds with
                  optimized assets and code splitting
                </li>
                <li>
                  <strong>Performance Monitoring:</strong> Built-in Vercel
                  analytics and performance insights
                </li>
              </ul>

              <h3>Technical Challenges & Solutions</h3>
              <ul>
                <li>
                  <strong>Print Optimization:</strong> Custom CSS print styles
                  for resume with proper page breaks and formatting
                </li>
                <li>
                  <strong>Image Optimization:</strong> Responsive image handling
                  with proper sizing and loading strategies
                </li>
                <li>
                  <strong>Cross-Browser Compatibility:</strong> Modern CSS with
                  fallbacks for older browsers
                </li>
                <li>
                  <strong>Mobile Experience:</strong> Touch-friendly navigation
                  and responsive layouts for all screen sizes
                </li>
              </ul>
            </div>

            <div className="project-section">
              <h2>Future Enhancements</h2>
              <p>
                The architecture supports planned enhancements including dynamic
                content management, blog functionality, contact forms with
                backend integration, and advanced analytics. The modular design
                allows for easy expansion of features, additional project
                showcases, and integration with external APIs for enhanced
                functionality.
              </p>
              <p>
                The website represents a successful demonstration of modern
                frontend development practices, showcasing both technical skills
                and design sensibility through a clean, professional
                presentation of personal and professional work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
