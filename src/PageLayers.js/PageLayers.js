import React, { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "react-spring";
import FirstSection from "../FirstSection/FirstSection";
import MainSection from "../MainSection.js/MainSection";
import MembersSection from "../MembersSection.js/MembersSection";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimationDiv from "../AnimationDiv";
// import "./scrollPage.css";

function PageLayers() {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 2000,
  //     });
  //   }, []);
  const n = useRef(0);
  const styles = useSpring({
    from: { x: 0 },
    config: { duration: 5000 },
    to: {
      x: 300,
    },
    loop: { reverse: true },
  });
  return (
    <div>
      some header
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            // color: "white",
            backgroundColor: "black",
          }}
        >
          {/* <FirstSection /> */}
          <MainSection />
          {/* <p>Scroll down</p> */}
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={5}
          style={{ backgroundColor: "black" }}
        />

        <ParallaxLayer
          offset={1}
          speed={2.5}
          style={{
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            backgroundColor: "black",
          }}
        >
          {/* <p>some text</p> */}
          <MembersSection />
          {/* <AnimationDiv /> */}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default PageLayers;
