import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Keyboard from "./Keyboard";
export default function AboutUs() {
  const count = useMotionValue(0);
  const countTwo = useMotionValue(0);
  const countThree = useMotionValue(0);

  const rounded = useTransform(count, Math.round);
  const roundedTwo = useTransform(countTwo, Math.round);
  const roundedThree = useTransform(countThree, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 10 });

    return animation.stop;
  }, []);

  useEffect(() => {
    const animationTwo = animate(countTwo, 200, { duration: 10 });
    return animationTwo.stop;
  }, []);

  useEffect(() => {
    const animationThree = animate(countThree, 300, { duration: 10 });
    return animationThree.stop;
  }, []);

  return (
    <React.Fragment>
      <div id="aboutUsNav" className="aboutUs">
        <AnimationOnScroll animateIn="text-pop-up-top ">
          <h1 className="aboutUsH1">
            What Makes Us <br></br>Stand Out!
          </h1>
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll animateIn="text-pop-up-top ">
        <div className="mainDiv">
          <div className="div1">
            <h2 className="numbers">{rounded.get()}+</h2>

            <p style={{ fontSize: "13px", marginTop: "0px", color: "#868e96" }}>
              Project Completed
            </p>
          </div>
          <div className="div1">
            <h2 className="numbers">{roundedTwo.get()}+</h2>
            <p style={{ fontSize: "13px", marginTop: "0px", color: "#868e96" }}>
              Professional Teams
            </p>
          </div>
          <div className="div1">
            <h2 className="numbers">{roundedThree.get()}+</h2>
            <p style={{ fontSize: "13px", marginTop: "0px", color: "#868e96" }}>
              Years Experience
            </p>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="text-pop-up-top  ">
        <div className="aboutUsPara">
          <p>
            Our Services help you create digital products and solve your
            problems objectively,strategy,technology and analysis. Our service
            also has a high appeal because it has beautiful color combination
            and a minimalist concept We are an award-winning strategic design
            company that provides consultancy services worldwide.
            {/* Our team
            consists of a superb blend of thinkers, strategists, designers,
            researchers, developers and organisers. Not too big, not too small,
            quite sensible and completely independent. */}
          </p>
        </div>
      </AnimationOnScroll>
      <div>
        <AnimationOnScroll animateIn="text-pop-up-top ">
          {/* <div className="keyboard"> */}
          {/* <Keyboard /> */}
          <h1 id="services" className="aboutUsH1  ">
            We Offer The <br></br>Best Services
          </h1>
          {/* </div> */}
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="text-pop-up-top ">
          <p
            style={{
              fontSize: "15px",

              textAlign: "center",
              lineHeight: "25px",
              marginTop: "35px",
              // marginRight: "35px",

              color: "#868e96",
            }}
          >
            We present the best product digital marketing<br></br> service
            carried out professionally.
          </p>
        </AnimationOnScroll>
      </div>
    </React.Fragment>
  );
}
