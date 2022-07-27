import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(!click);
  const navItems = [
    {
      id: 1,
      name: "home",
      path: "home",
    },
    {
      id: 2,
      name: "about",
      path: "about",
    },
    {
      id: 3,
      name: "services",
      path: "services",
    },
    {
      id: 4,
      name: "skills",
      path: "skills",
    },
    {
      id: 5,
      name: "projects",
      path: "projects",
    },
    {
      id: 6,
      name: "contacts",
      path: "contacts",
    },
  ];

  return (
    <nav>
      <div className="logo-container">
        <img src="/images/about-img.jpg" alt="" />
        <h2>Mubarak Muhammed</h2>
      </div>

      <ul className={click ? "nav-container active" : "nav-container "}>
        {navItems.map((item) => {
          return (
            <>
              <li className="nav-item" key={item.id}>
                <Link
                  to={item.path}
                  onClick={closeMobileMenu}
                  smooth={true}
                  duration={1000}
                  className="link"
                >
                  {item.name}
                </Link>
              </li>
            </>
          );
        })}
      </ul>

      <button className="menu-btn" onClick={handleClick}>
        {click ? <GrClose /> : <BiMenuAltLeft />}
      </button>
    </nav>
  );
};

export default Navbar;
