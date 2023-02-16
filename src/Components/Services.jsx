import React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";

import { GiFlowerStar } from "react-icons/gi";

export default function Services() {
  return (
    <React.Fragment>
      <div className="gridContainer">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
          <div className="consultant">
            <GiFlowerStar className="asteriskOne rotate-in-center" />

            <h3>Consultant Strategy</h3>
            <p className="insideGrid">
              The strategy and consultancy project is the master plan we develop
              to accomplish your objectives. We listen, understand and analyse
              the needs of the business. Then we define a strategy to deliver
              optimised results so you can move forward.
            </p>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
          <div className="google-Ads">
            <GiFlowerStar className="asteriskTwo rotate-in-center" />

            <h3>Google Ads Management</h3>
            <p className="insideGrid">
              Digital products are the apps, tools, sites, systems —the list is
              long— that you use to watch, buy, create, control and manage
              things digitally. We create functional, intuitive, engaging and
              visually stunning products to elevate the user’s perception
              <br></br> of your brand. We also make them scalable<br></br> so
              they have the potential expand.
            </p>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
          <div className="research">
            <GiFlowerStar className="asteriskTwo rotate-in-center" />

            <h3>Research And Discovery</h3>
            <p className="insideGrid">
              We think technology is a fundamental asset serving the project,
              and it's crucial during the implementation process. With this in
              mind, we can define the project's development and choose the right
              technology to offer the best results to our clients.
            </p>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
          <div className="social-Media">
            <GiFlowerStar className="asteriskTwo rotate-in-center" />

            <h3> Social Media Marketing</h3>
            <p className="insideGrid">
              We define and create digital brands with soul and personality that
              transmit those intangible values that make the brand recognisable
              and remembered in many different ways.
            </p>
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
}
