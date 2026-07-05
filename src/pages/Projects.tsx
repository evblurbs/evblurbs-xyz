import { Link } from "react-router-dom";
import { projects } from "../data/projects";
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
            {projects.map((project) => (
              <div key={project.slug} className="project-item">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <Link
                  to={`/projects/${project.slug}`}
                  className="project-link"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
