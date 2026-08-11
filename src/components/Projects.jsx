import React, { useState } from "react";
import projects from "./data/projects.json";

const Projects = () => {
  const [tab, setTab] = useState("mobile");
  const filtered = projects.filter((p) => p.category === tab);

  return (
    <section id="projects" data-aos="zoom-in" data-aos-duration="1000">
      <div className="section-head">
        <span className="section-num">03</span>
        <h2 className="section-title-main">Projects</h2>
      </div>
      <div className="section-underline"></div>

      <div className="proj-tabs">
        <button
          className={`proj-tab ${tab === "mobile" ? "active" : ""}`}
          onClick={() => setTab("mobile")}
        >
          <svg className="icon" viewBox="0 0 24 24" style={{ width: 15, height: 15 }}>
            <rect x="7" y="2" width="10" height="20" rx="2" />
          </svg>
          Mobile Apps
        </button>
        <button
          className={`proj-tab ${tab === "web" ? "active" : ""}`}
          onClick={() => setTab("web")}
        >
          <svg className="icon" viewBox="0 0 24 24" style={{ width: 15, height: 15 }}>
            <circle cx="12" cy="12" r="9" />
            <line x1="3" y1="12" x2="21" y2="12" />
          </svg>
          Web Projects
        </button>
      </div>

      <div className="projects-grid">
        {filtered.map((data) => (
          <div className="proj-card" key={data.key} data-aos="fade-up" data-aos-duration="800">
            <div className="proj-img-wrap">
              <img src={data.imageSrc} alt={data.title} className="proj-img" />
            </div>
            <div className="proj-name">{data.title}</div>
            <div className="proj-desc">{data.description}</div>
            <div className="proj-links">
              {data.demo && (
                <a href={data.demo} target="_blank" rel="noreferrer" className="proj-btn solid">
                  Demo
                </a>
              )}
              {data.source && (
                <a href={data.source} target="_blank" rel="noreferrer" className="proj-btn">
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p style={{ color: "#8b92a5", fontSize: "0.85rem" }}>
            No {tab} projects added yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;