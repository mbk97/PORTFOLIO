import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { navItems } from "./data";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = click ? "hidden" : "auto";
  }, [click]);

  return (
    <nav>
      <div className="logo-container">
        <img src="/images/logo.jpg" alt="" />
      </div>

      <ul className={click ? "nav-container active" : "nav-container "}>
        <div className="nav-logo-wrapper">
          <img src="/images/logo.jpg" alt="" className="nav-logo" />
          <h1>Mubarak Muhammed</h1>
        </div>
        {navItems.map((item) => {
          return (
            <>
              <li className="nav-item" key={item.id}>
                <Link
                  to={item.path}
                  onClick={handleClick}
                  smooth={true}
                  duration={1000}
                  className="link"
                >
                  {item.name}
                </Link>
              </li>
              <div className="menu-btn close" onClick={handleClick}>
                <AiOutlineClose />
              </div>
            </>
          );
        })}
      </ul>

      <div
        onClick={handleClick}
        className={click ? "menu-btn hide" : "menu-btn"}
      >
        <BiMenuAltLeft />
      </div>
    </nav>
  );
};

export default Navbar;
