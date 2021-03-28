import React, { useState, useEffect } from "react";
import "./ContactsRoute.css";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";
import { MdPhoneIphone } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { IoShareSocialOutline } from "react-icons/io5";

import bgContactsSide from "../../images/bg-section-7.jpg";

function ContactsRoute() {
  // When under 850px remove black line separating context such as phone, location, etc.
  const [under850px, setUnder850px] = useState(false);

  const changeUnder850px = () => {
    if (window.innerWidth <= 850) {
      setUnder850px(true);
    } else {
      setUnder850px(false);
    }
  };

  useEffect(() => {
    changeUnder850px();
    window.addEventListener("resize", changeUnder850px);

    return () => {
      window.removeEventListener("resize", changeUnder850px);
    };
  }, []);

  return (
    <IconContext.Provider value={{ className: "contacts-route-icons" }}>
      <section className="contacts-route">
        <div
          className="contacts-route-side-picture"
          style={{
            backgroundImage: `url(${bgContactsSide})`,
          }}
        >
          <div className="contacts-route-side-picture-text">
            GET IN <br></br>TOUCH
          </div>
        </div>
        <div className="contacts-route-wrapper">
          <h2 className="section-header">Contacts</h2>
          <div className="header-line"></div>
          <div className="header-line"></div>

          <div className="contacts-route-context-wrapper">
            <div className="context-wrapper">
              <MdPhoneIphone />
              <span className="context-header">PHONE</span>
              (000)000-0000<br></br>
            </div>

            <div
              className={
                under850px
                  ? "contacts-route-context-divider mobile"
                  : "contacts-route-context-divider"
              }
            ></div>

            <div className="context-wrapper">
              <HiLocationMarker />
              <span className="context-header">LOCATION</span>
              Simi Valley, CA <br></br>
              And all surrounding areas
            </div>

            <div className="context-wrapper">
              <HiOutlineMail />
              <span className="context-header">EMAIL</span>
              Main: example@gmail.com<br></br>
            </div>

            <div
              className={
                under850px
                  ? "contacts-route-context-divider mobile"
                  : "contacts-route-context-divider"
              }
            ></div>

            <div className="context-wrapper">
              <IoShareSocialOutline />
              <span className="context-header">SOCIALS</span>
              Facebook: car_wash
            </div>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
}

export default ContactsRoute;

// Potentially add map
// If no map then add a way for user to message by adding name, email, subject, and message, with a send button
