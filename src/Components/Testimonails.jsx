import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { GiFlowerStar } from "react-icons/gi";
import Company from "../Assets/company.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Testimonials() {
  return (
    <React.Fragment>
      <AnimationOnScroll animateIn="text-pop-up-top ">
        <div className="testimonialHeader">
          <h2> Testimonials</h2>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="text-pop-up-top ">
        <div className="testimonialMainBox ">
          <div className="testimonialBoxOne ">
            <ImQuotesLeft className="quotes" />

            <p className="testimonialPara ">
              Working together with CodesClan , we are very thankful for our
              loyal clients . Our business is one of close relationships and we
              are very fortunate to be able to share.
            </p>
          </div>
          <div className="testimonialBoxTwo">
            <GiFlowerStar className="asterisk rotate-in-center" />
            <div className="testRightInside">
              <h2 className="bhasker">Bhasker </h2>
              <p className="bhaskerCEO"> CEO of CODESCLAN</p>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
      {/* <AnimationOnScroll animateIn="text-pop-up-top ">
        <div className="learnMoreTwo">
          <img
            src={Company}
            alt="company"
            width="850px"
            height="50px"
            paddingLeft="150px"
          />
        </div>
      </AnimationOnScroll> */}
    </React.Fragment>
  );
}
