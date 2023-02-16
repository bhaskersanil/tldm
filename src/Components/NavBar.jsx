// import React from "react";
import React, { useEffect, useState } from "react";
import Logo from "../Assets/line.png";

import { render } from "react-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
// import styled from "styled-components";

export default function NavBar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <React.Fragment>
      <main className="topFlex">
        <div className="firstBox pointer">
          <img src={Logo} alt="logo" height="100px" width="300px" />
        </div>
        <div className="navFlex">
          <li className=" pointer nav">
            <Link
              activeClass="active"
              // style={{ padding: "10px 15px" }}
              to="#"
              spy={true}
              smooth={true}
              offset={-80}
            >
              Home
            </Link>
          </li>
          <li className=" pointer nav">
            <Link
              activeClass="active"
              // style={{ padding: "10px 15px" }}
              to="aboutUsNav"
              spy={true}
              smooth={true}
              offset={-80}
            >
              About Us
            </Link>
          </li>
          <li className="pointer nav">
            <Link
              activeClass="active"
              // style={{ padding: "10px 15px" }}
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
            >
              Services
            </Link>
          </li>
          <li className="pointer nav">
            <Link
              activeClass="active"
              // style={{ padding: "10px 15px" }}
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
            >
              Contact Us
            </Link>
          </li>
        </div>
      </main>
    </React.Fragment>
  );
}
