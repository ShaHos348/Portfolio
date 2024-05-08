import React from "react";
import ProjectCard from "./ProjectCard";
import "./styles/Projects.css";
import projectData from "./data/projectData";

const Projects = () => {
  return (
    <div id="projects" className="section">
      <h1 className="section-header">Projects</h1>
      <div className="project-section">
        {projectData.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
