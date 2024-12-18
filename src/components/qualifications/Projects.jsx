import React from "react";
import "./ScrollSection.css";
import { projectData } from "../../data/projectsData";


const Projects = () => {
 

  return (
    <>
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Featured Work</span>
      <div className="projects__container">
        {projectData.map((item, i) => (
          <div
            className="card"
            
            key={i}
          >
            <div
              className="top-section"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
              }}
            >
              <div className="border"></div>
              <div className="icons">
                <div className="social-media">
                  <a
                    href={item.codeSource}
                    target="_blank"
                    rel="noreferrer"
                    title="Github Code"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      className="svg"
                    >
                      <path
                        fill="white"
                        d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    title="Live Link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 16 16"
                      className="svg"
                    >
                      <path
                        fill="none"
                        stroke="white"
                        d="M11.5 10.5v-6m0 0h-6m6 0l-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom-section">
              <span className="title" title={`${item.projectTitle} Project `}>
                {item.projectTitle}
              </span>
              <div className="regular-text ">{item.projectDetail?.split(" ").length > 30 ? item.projectDetail.split(" ").slice(0,20).join(" ")+"..." : item.projectDetail }</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
