import React from "react";
import event from "../img/event.jpg";
import "./events.css";

function Events() {
  return (
    <div className="events_wrapper">
      <div data-aos="zoom-in" className="event_title">
        Our Events
      </div>
      <div className="event_container">
        <div data-aos="fade-right" className="event_img">
          {/* <img data-aos="fade-right" className="event_img" src={event} /> */}
        </div>
        <div className="event_text" data-aos="fade-left">
          Տնտեսական լրագրության դասընթացի ընթացքում կառուցապատման ոլորտը
          ներկայացնող բանախոսներից մեկը Դավիթ Մկոյանն է՝ «Մանթաշով» ԳՄ անդամն ու
          «Elite Griup»-ի գլխավոր տնօրենը։
        </div>
      </div>
    </div>
  );
}

export default Events;
