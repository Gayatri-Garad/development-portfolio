import React from "react";
import education from "./data/education.json";

const Education = () => {
  return (
    <section id="education" data-aos="zoom-in" data-aos-duration="1000">
      <div className="section-head">
        <span className="section-num">04</span>
        <h2 className="section-title-main">Education</h2>
      </div>
      <div className="section-underline"></div>
      <div className="edu-list">
        {education.map((data) => (
          <div className="edu-card" key={data.id}>
            <div className="edu-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 20, height: 20 }}>
                <path d="M22 10L12 5 2 10l10 5 10-5z" />
                <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
              </svg>
            </div>
            <div className="edu-info">
              <div className="edu-school">{data.school}</div>
              <div className="edu-meta">
                <span className="edu-year">{data.passOutYear}</span>
                <span className="edu-dot">•</span>
                <span className="edu-marks">{data.marks}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;