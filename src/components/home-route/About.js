import React from "react";
import "./About.css";
import Button from "../Button";
import * as ROUTES from "../../routes/routes";

function About() {
  return (
    <section className="about">
      <div className="about-wrapper container">
        <h1 className="section-header">About Us</h1>
        <div className="header-line"></div>
        <div className="header-line"></div>

        <div className="about-content">
          <p className="about-description">
            Here at Javier Car Wash we wash whenever you need it. I have been
            washing cars for over <strong>10 years!</strong> I provide quality
            work to my clients. No matter the size of the car you can count on
            us to make sure your car is looking clean, whether you want it
            cleaned or even waxed just give us a call and we'll be there.
          </p>
        </div>

        <Button
          btnRoute={ROUTES.ABOUT}
          btnText="READ MORE"
          btnClass="section-btn"
        />
      </div>
    </section>
  );
}

export default About;
