import React from "react";
import myphoto from "../assets/myphoto.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero-left">
        <p style={{ color: "#aaa", fontSize: "18px" }}>Hello 👋 I'm</p>

        <h1 style={{ margin: "10px 0" }}>
          <span style={{ color: "#fff" }}>Sameena</span>{" "}
          <span style={{ color: "#a855f7" }}>Farwej</span>
        </h1>

        <h2 style={{ color: "#ec4899" }}>Full Stack Developer</h2>

        <p>
          I am a BTech student passionate about building modern and responsive
          web applications using <b>React.js</b>, <b>Node.js</b>, <b>Java</b>,
          <b> HTML</b>, <b>CSS</b> and <b>SQL</b>.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href={process.env.PUBLIC_URL + "/resume.pdf"}
            className="btn-outline"
            target="_blank"
            rel="noreferrer">
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div style={{ display: "flex", gap: "20px", marginTop: "25px" }}>
          <a href="https://github.com/sameena0405" target="_blank" rel="noreferrer">
            <FaGithub size={28} color="#fff" />
          </a>

          <a href="https://www.linkedin.com/in/shaik-sameena-farwej-4053b1331" target="_blank" rel="noreferrer">
            <FaLinkedin size={28} color="#0A66C2" />
          </a>

          <a href="mailto:sameenaparves0405@gmail.com">
            <FaEnvelope size={28} color="#ec4899" />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={myphoto} alt="profile" className="hero-img" />
      </div>
    </div>
  );
}