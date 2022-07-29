import React, { useEffect } from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Experience from "./experience/Experience";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About me</h2>

      <div className="about-details-container">
        <div className="about-img-container" data-aos="fade-right">
          <img src="/images/new-about-img.jpeg" alt="" />
        </div>

        <div className="about-text" data-aos="fade-left">
          <h1>Hi, i'm Mubarak</h1>
          <p>
            A detail-oriented Front-end web developer, with over 2 years of
            progressive experience and Diligence about producing exceptionally
            clean, and secure code; while successfully achieving browser, device
            and operating system compatibility objectives.
          </p>

          <div className="experience_wrapper">
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
