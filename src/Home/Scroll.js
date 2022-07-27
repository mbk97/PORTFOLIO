import React, { useEffect, useState } from "react";
import "./Scroll.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <div onClick={scrollToTop} className="scroll-to-top">
          <span className="scroll-icon">
            <AiOutlineArrowUp />
          </span>
        </div>
      )}
    </div>
  );
};

export default Scroll;
