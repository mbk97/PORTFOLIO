import React, { useEffect } from "react";
import "./Services.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { cardItems } from "./data";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">services</h2>
      <p className="services-text">Some of the services i render includes</p>
      <div className="cards-container">
        <div className="cards">
          {cardItems.map((item) => {
            return (
              <div className="card" key={item.id} data-aos={item.dataAos}>
                <div className="card-icon">{item.icon}</div>
                <h4 className="card-title">{item.cardName}</h4>
                <p className="card-text">{item.cardText}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
