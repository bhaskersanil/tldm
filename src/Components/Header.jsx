import React from "react";
import HelmetScripts from "../HelmetScripts";

import HeaderOffice from "../Assets/headerOffice.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Header() {
  return (
    <React.Fragment>
      <div className="smallHeader">
        <HelmetScripts />
      </div>
      <div className="headerFlex">
        <h1 className="mainHeader  ">
          <br></br>IDEAS AS
          <br></br>DIGITAL<br></br> OUTCOMES
        </h1>
        <div class="cubo"></div>
      </div>

      {/* <div className="imageOne"> */}
      {/* <p className="agency">
          Turn your ideas into reality with innovative <br></br>strategies and
          outstanding implementation
        </p> */}

      <AnimationOnScroll animateIn="slide-in-bck-bottom">
        <img
          src={HeaderOffice}
          alt="Office"
          height="700px"
          width="100%"
          className="headerImage "
        ></img>
      </AnimationOnScroll>

      {/* </div> */}
    </React.Fragment>
  );
}
