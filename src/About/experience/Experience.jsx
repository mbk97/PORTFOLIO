import React from "react";
import { data } from "./data";

const Experience = () => {
  return (
    <div>
      <h1 className="company_title">Professional Experience</h1>
      <div className="experience_container">
        <h3 className="company_name">
          Front-end developer- F&k Savings (Fintech)
        </h3>
        <button className="date_button">July 2021 - Present</button>
        <ul className="experience_list">
          {data.map((item) => {
            return (
              <li className="list_item" key={item.id}>
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
