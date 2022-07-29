import React from "react";
import "./Introduction.css";
import { MdWavingHand } from "react-icons/md";

const Introduction = () => {
  return (
    <div className="main-introduction-container">
      <div className="introduction-container">
        <div className="typing-container">
          <h3 className="intro-text">
            Hello <MdWavingHand className="wave" />, I'm
          </h3>
          <h1 className="name">Mubarak Muhammed</h1>
          <h3 className="job-title">I build things for the web.</h3>
          <p className="intro-paragraph">
            I’m a software engineer specialized in using the best web
            development tools to build exceptional digital experience
          </p>
          <button className="cv-btn">
            <a href="/Resume/mbk.pdf" download>
              Download Cv
            </a>
          </button>
        </div>
        <div className="introduction-img">
          <img src="/images/web-dev2.jpeg" alt="intro-img" />
        </div>
      </div>
    </div>
  );
};
export default Introduction;
