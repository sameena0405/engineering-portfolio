import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>{"<Sameena/>"}</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a className="btn-outline" href="/resume.pdf" download>
        Download CV
      </a>
    </div>
  );
}