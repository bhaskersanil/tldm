import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function LearnMore() {
  return (
    <React.Fragment>
      <AnimationOnScroll animateIn="text-pop-up-top ">
        <div className="learnMore">
          <h2 className="learnMoreText ">
            Learn More About Our Services Today
          </h2>
        </div>
      </AnimationOnScroll>
    </React.Fragment>
  );
}
