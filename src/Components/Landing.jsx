import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import LeftSidebar from "./LeftSideBar";
import RightSidebar from "./RightSideBar";
import AboutUs from "./AboutUs";
import Services from "./Services";
import LearnMore from "./LearnMore";
import Testimonials from "./Testimonails";
import Footer from "./Footer";

export default function Landing() {
  return (
    <React.Fragment>
      <LeftSidebar />
      <div className="topGreyBox"></div>
      <div className="bigBlackBox">
        <NavBar />
        <Header />
        <AboutUs />
        <Services />
        <LearnMore />
        <Testimonials />
        <Footer />
      </div>
      <RightSidebar />
    </React.Fragment>
  );
}
