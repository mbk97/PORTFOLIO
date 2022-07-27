import React from "react";
import "./Introduction.css";
import Typical from "react-typical";
const Introduction = () => {
  return (
    <div className="main-introduction-container">
      <div className="introduction-container"></div>
      <div className="typing-container">
        <Typical
          steps={["hi i'm mubarak", 3000, "a Front-end developer", 3000]}
          loop={Infinity}
          wrapper="h3"
        />
      </div>
    </div>
  );
};
export default Introduction;
