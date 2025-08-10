import React from "react";
import education from "./data/education.json";

const Education = () => {
  return (
    <>
      <div className="container ed" id="education">
        <h1>EDUCATION</h1>
        {education.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ed-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="right">
                  <h2>{data.school}</h2>
                  <h4 style={{ color: "yellowgreen" }}>{data.passOutYear}</h4>
                  <h5 style={{ color: "yellow" }}>{data.marks}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Education;
