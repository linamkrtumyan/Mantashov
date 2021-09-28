import React from "react";
import "./mainSection.css";
import video from "../Videos/yerevan.mp4";

function MainSection() {
  return (
    <>
      {/* <section className=""> */}
      {/* <div className="main_section main_section_body">
        <h1 className="main_section_title">Mantashov</h1>
        <div className="main_section_text">Entrepreneurs union</div>
        <div className="main_section_text">
          We unite the armenian entrepreneurs across the world...
        </div>
        <a href="" className="main_section_link">
          join
        </a>
      </div> */}

      <div className="banner">
        <video width="750" height="500" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h2>mantashov</h2>
        <p>Entrepreneurs union</p>
        <button className="main_section_link">join</button>
      </div>
      {/* </section> */}
    </>
  );
}

export default MainSection;
