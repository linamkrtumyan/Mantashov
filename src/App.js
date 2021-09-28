import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimationDiv from "./AnimationDiv";
import Header from "./Header/Header";
import FirstSection from "./FirstSection/FirstSection";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import PageLayers from "./PageLayers.js/PageLayers";
import MembersSection from "./MembersSection.js/MembersSection";
import MainSection from "./MainSection.js/MainSection";
import Events from "./Events/Events";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    // document.body
    //   .querySelector("#root")
    //   .addEventListener("scroll", AOS.refresh);
  }, []);

  return (
    <div className="MainContainer">
      <Header />
      {/* <MainSection /> */}
      {/* <MembersSection /> */}
      {/* <AnimationDiv /> */}

      <div className="wrapper">
        {/* <FirstSection /> */}
        {/* <WhoWeAre /> */}
        <MainSection />
        {/* <MembersSection /> */}
        {/* <div className="content">
        <div className="content_body">
          <AnimationDiv />
          <WhoWeAre />
          <MainSection />
        </div>
      </div> */}
      </div>
      <div className="wrapper">
        <MembersSection />
      </div>
      <div className="wrapper3">
        <Events />
      </div>

      <footer className="footer">
        <div className="footer_body">
          Voluptate non eu occaecat ex labore deserunt nulla et nulla excepteur
        </div>
      </footer>
      {/* </div> */}

      {/* <PageLayers /> */}
      <div>{/* <MembersSection /> */}</div>
    </div>
  );
}

export default App;
