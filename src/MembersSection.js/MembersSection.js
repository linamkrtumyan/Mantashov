import React, { useEffect } from "react";
import "./membersSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSpring, animated } from "react-spring";

import member from "../img/artashes.jpg";

function MembersSection() {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 2000,
  //     });
  //   }, []);
  const [active, setActive] = React.useState(false);
  useEffect(() => {
    setActive(false);
  }, []);

  const props = useSpring({
    transform: active ? "scale(1.2)" : "scale(1)",
    filter: active ? "saturate(1)" : "saturate(0)",
    color: active ? "white" : "#FFE79D",
  });
  return (
    <>
      <div className="members_section">
        <div className="members_container" data-aos="fade-up">
          <animated.div
            style={{
              transform: props.transform,
              filter: props.filter,
            }}
            onMouseOver={() => {
              setActive(true);
            }}
            onMouseOut={() => {
              setActive(false);
            }}
            className="member_card"
          />
          <animated.div
            style={{ color: props.color }}
            className="member_text_container"
          >
            <div>Name Surname</div>
            <div>Occupation</div>
          </animated.div>
        </div>
      </div>
      <div className="ball_container" data-aos="zoom-in-left">
        <div className="ball"></div>
      </div>
      <div className="big_ball_container" data-aos="zoom-in-left">
        <div className="big_ball"></div>
      </div>
    </>
  );
}

export default MembersSection;
