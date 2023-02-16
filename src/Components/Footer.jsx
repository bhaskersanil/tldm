import React from "react";
import { GiFlowerStar } from "react-icons/gi";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { render } from "react-dom";
import { motion } from "framer-motion";

import Logo from "../Assets/footerline.png";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="lastBox">
        <GiFlowerStar className="asteriskFooter rotate-in-center" />
        <div className="lastInsideBox">
          <h1 className="haveAnAwesome">
            Have an<br></br> awesome<br></br> project ?
          </h1>

          <GiFlowerStar className="asteriskFooterTwo rotate-in-center" />

          <div className=" smallOrangeBox">
            <a href="#" className="letsDiscuss">
              {" "}
              Let's Discuss!
            </a>
          </div>
        </div>
        <div className="footerLine"></div>
        <div className="footerLastFlex">
          <div className="lastBoxTwo">
            <img src={Logo} alt="logo" height="60px" width="200px" />
          </div>
          <p className="copyRight">
            Copyright @CodesClan 2023 All Rights Reserved
          </p>
          <div className="logoCollection">
            <BsFacebook className="social" />
            <FaInstagramSquare className="social" />
            <AiFillTwitterCircle className="social" />
            <SiYoutubemusic className="social" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
