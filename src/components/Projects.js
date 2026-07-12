import React from "react";
import projectp1 from "../assets/projectp1.png";
import projectp2 from "../assets/projectp2.png";

export default function Projects() {
  return (
    <div className="section" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-box">
          <img src={projectp1} alt="Portfolio Website" />

          <h3>Portfolio Website</h3>
          <p>
            A modern portfolio website built using React with a dark theme UI
            and responsive design to showcase my skills, projects, and contact
            information.
          </p>

          <div className="project-links">
            <a
              href="https://sameena0405.github.io/engineering-portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/sameena0405/engineering-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-box">
          <img src={projectp2} alt="EcomHub" />

          <h3>EcomHub - E-Commerce Website</h3>
          <p>
            A responsive e-commerce web application developed using Spring Boot for backend and React.js with vite for frontend,
            featuring product browsing, category filtering, shopping cart, and a
            modern user-friendly interface.
          </p>

          <div className="project-links">
            <a
              href="https://sameena0405.github.io/ecomhub-frontend/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/sameena0405/ecomhub-frontend"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}