import React, { useEffect } from "react";
import { projectDetails } from "./projectData";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiOutlineLink, AiFillGithub, AiFillLock } from "react-icons/ai";
import { BsShieldLockFill } from "react-icons/bs";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const lockIcon = (buttonTextTwo) => {
    switch (buttonTextTwo) {
      case "Private":
        return <AiFillLock />;
      default:
        return null;
    }
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">portfolio</h2>
      <p className="portfolio-text">A selection of Stuff i've built</p>

      <div className="projects">
        {projectDetails.map((item) => {
          return (
            <div
              className="project-container"
              key={item.id}
              data-aos={item.dataAos}
            >
              <img src={item.projectImage} alt="" className="project-img" />

              <h2 className="project-title">{item.projectName}</h2>
              <div className="project-button">
                <a
                  href={item.buttonLink}
                  className="see-more-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.buttonText} <AiOutlineLink className="icon_btn" />
                </a>
                <a
                  href={item.buttonLinkTwo}
                  className="see-more-link btn-two"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.buttonTextTwo}{" "}
                  {item.buttonTextTwo === "Private" ? (
                    <BsShieldLockFill className="icon_btn" />
                  ) : (
                    <AiFillGithub className="icon_btn" />
                  )}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
