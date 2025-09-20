import { Link } from "react-router-dom";
import "./Page.css";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Projects</h1>
        <div className="page-body">
          <p>
            A collection of my side projects, experiments, and creative work.
          </p>
          <div className="projects-list">
            <div className="project-item">
              <h3 className="project-title">10YC</h3>
              <p className="project-description">
                A mobile native app that allows users to discover and index
                meals in 10YC under $10.
              </p>
              <Link to="/projects/10yc" className="project-link">
                Read more →
              </Link>
            </div>

            <div className="project-item">
              <h3 className="project-title">Saturday Hoops NYC</h3>
              <p className="project-description">
                A meetup group and web app that allows users to sign up for
                pick-up basketball games and view highlights from past games.
              </p>
              <Link to="/projects/saturday-hoops" className="project-link">
                Read more →
              </Link>
            </div>

            <div className="project-item">
              <h3 className="project-title">Portfolio</h3>
              <p className="project-description">
                This website which shares what I've read, projects that I've
                worked on, and my resume.
              </p>
              <Link to="/projects/portfolio" className="project-link">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
