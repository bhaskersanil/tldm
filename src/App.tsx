import "./styles.css";
import React from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import LearnMore from "./Components/LearnMore";
import Testimonials from "./Components/Testimonails";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import LeftSidebar from "./Components/LeftSideBar";
import Helmet from "react-helmet";
import HelmetScripts from "./HelmetScripts";

const color = "#fd7427";

const Icosahedron = () => (
  <mesh rotation-x={0.6}>
    <sphereGeometry args={[2]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);

const Star = ({ p }: { p: number }) => {
  const ref = useRef<THREE.Object3D>(null);

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(
      degreesToRadians(60),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.02, 0.02, 0.02]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

function Scene({ numStars = 200 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.1, degreesToRadians(100)]
  );
  const distance = useTransform(scrollYProgress, [0.1, 0.7], [7, 2]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0002
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(1));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} />);
  }
  return (
    <>
      <Icosahedron />
      {stars}
    </>
  );
}

export default function App() {
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos < 7000) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <Canvas gl={{ antialias: true }}>{scroll ? <Scene /> : null}</Canvas>
      </div>
      {/* <LeftSidebar /> */}
      <NavBar />
      <Header />
      <AboutUs />
      <Services />
      <LearnMore />
      <Testimonials />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
