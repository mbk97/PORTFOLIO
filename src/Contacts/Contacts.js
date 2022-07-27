import React, { useEffect } from "react";
import "./Contacts.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { contactDetails } from "./data";

const Contacts = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="contacts-section" id="contacts">
      <h2 className="section-title">Contact</h2>
      <p className="contact-text">get in touch</p>

      <div className="contact-container">
        {contactDetails.map((item) => {
          return (
            <div className="contact-details" key={item.id}>
              <div className="icon-container">
                <a href={item.link} className="icon">
                  {item.icon}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contacts;
