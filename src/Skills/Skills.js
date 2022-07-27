import "./Skills.css";
import { skillsData } from "./skillData";
const Skills = () => {
  //   const colorFunc = (skill) => {
  //     if (skill === "JavaScript") {
  //       return "javascript";
  //     }
  // };

  const colorFunc = (skill) => {
    switch (skill) {
      case "JavaScript":
        return "javascript";
      case "React js":
        return "react";
      case "Redux":
        return "redux";
      case "Typescript":
        return "ts";
      case "Firebase":
        return "fire";
      case "git":
        return "git";
      case "Jest":
        return "jest";
      case "Styled Components":
        return "styled";
      case "Html":
        return "html";
      case "Css":
        return "css";
      default:
        return null;
    }
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">skills</h2>
      <p className="skill-text">Some of the tools i work with </p>
      <div className="skills-container">
        {skillsData.map((item) => {
          const { id, skill, img } = item;
          return (
            <div key={id} className={`skill-card ${colorFunc(skill)}`}>
              <div className="card-img">
                <img src={img} alt="skill" />
              </div>
              <h4>{skill}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

// completed={item.completed}
