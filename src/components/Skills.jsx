import React from "react";

const skillsData = [
  {
    name: "React Native",
    sub: "mobile",
    cat: "mob",
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </>
    ),
  },
  {
    name: "TypeScript",
    sub: "language",
    cat: "web",
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  {
    name: "React.js",
    sub: "web",
    cat: "web",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <path d="M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" />
      </>
    ),
  },
  {
    name: "Redux Toolkit",
    sub: "state",
    cat: "mob",
    icon: (
      <>
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 5-6" />
      </>
    ),
  },
  {
    name: "Zustand",
    sub: "state",
    cat: "mob",
    icon: (
      <>
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M12 8v4l3 3" />
      </>
    ),
  },
  {
    name: "React Query",
    sub: "data fetching",
    cat: "web",
    icon: (
      <>
        <path d="M21 12a9 9 0 11-9-9c2.5 0 4.7 1 6.4 2.6" />
        <polyline points="21 3 21 9 15 9" />
      </>
    ),
  },
  {
    name: "REST APIs",
    sub: "backend",
    cat: "web",
    icon: (
      <path d="M4 17V7a2 2 0 012-2h6l6 6v6a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
    ),
  },
  {
    name: "JavaScript",
    sub: "language",
    cat: "web",
    icon: <path d="M3 3h18v18H3z" />,
  },
  {
    name: "HTML5 / CSS3",
    sub: "markup",
    cat: "web",
    icon: (
      <>
        <path d="M4 3h16l-1.5 15L12 21l-6.5-3L4 3z" />
      </>
    ),
  },
  {
    name: "Git",
    sub: "tooling",
    cat: "mob",
    icon: (
      <>
        <circle cx="6" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="12" r="2" />
        <path d="M6 8v8M8 6h4a4 4 0 014 4" />
      </>
    ),
  },
  {
    name: "SQL",
    sub: "database",
    cat: "web",
    icon: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </>
    ),
  },
  {
    name: "Postman",
    sub: "API testing",
    cat: "web",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
  {
    name: "Grafana",
    sub: "monitoring",
    cat: "web",
    icon: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-8M21 20H3" />
      </>
    ),
  },
  {
    name: "Claude",
    sub: "AI assistant",
    cat: "ai",
    icon: (
      <>
        <path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />
      </>
    ),
  },
  {
    name: "Cursor",
    sub: "AI code editor",
    cat: "ai",
    icon: (
      <>
        <path d="M4 3l16 8-7 2-2 7-7-17z" />
      </>
    ),
  },
  {
    name: "Kiro",
    sub: "AI assistant",
    cat: "ai",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 9h.01M15 9h.01M8 15c1 1.5 2.5 2 4 2s3-.5 4-2" />
      </>
    ),
  },
];

const Skills = () => {
  return (
    <section id="skills" data-aos="flip-left" data-aos-duration="1000">
      <div className="section-head">
        <span className="section-num">02</span>
        <h2 className="section-title-main">Skills</h2>
      </div>
      <div className="section-underline"></div>
      <div className="skills-grid">
        {skillsData.map((skill, i) => (
          <div className="skill-card" key={i}>
            <div className={`skill-icn ${skill.cat}`}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                style={{ width: 18, height: 18 }}
              >
                {skill.icon}
              </svg>
            </div>
            <div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-sub">{skill.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;