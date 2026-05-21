import React from "react";
import projectp1 from "../assets/projectp1.png";

export default function Projects() {
  return (
    <div className="section" id="projects">
      <h2 className="section-title">My Project</h2>

      <div className="projects-grid">
        <div className="project-box">
          <img src={projectp1} alt="project" />

          <h3>Portfolio Website</h3>
          <p>
            A modern portfolio website built using React with dark theme UI and
            responsive design.
          </p>

          <div className="project-links">
            <a href="#" target="_blank" rel="noreferrer">
              Live Demo
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}