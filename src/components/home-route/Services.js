import React, { useState } from "react";
import "./Services.css";
import Button from "../Button";

import * as ROUTES from "../../routes/routes";

import exteriorCarLogo from "../../images/exterior-car-logo.webp";
import fullCarLogo from "../../images/full-car-logo.png";
import interiorCarLogo from "../../images/interior-car-logo.webp";
import shinyEntierCar from "../../images/shiny-entire-car.jpg";
import andMoreCarLogo from "../../images/and-more-car-logo.webp";
import cleanInteriorCar from "../../images/clean-interior-car.jpg";

function Services() {
  return <ServiceBoxes />;
}
function ServiceBoxes() {
  return (
    <section className="services">
      <div className="services-wrapper container">
        <h1 className="section-header">Services</h1>
        <div className="header-line"></div>
        <div className="header-line"></div>

        <p className="services-description section-description">
          We provide a variety of car wash services from just simply vacuuming
          the inside to waxing the outside completely by hand!
        </p>

        <div className="service-boxes">
          <ServiceBox
            header="Exterior Wash"
            description="For when all you need is an outside wash. Gives your car the outside look you want!"
            icon={exteriorCarLogo}
          />
          <ServiceBox
            header="Classic Inside and Out wash"
            description="Customers Favorite! Both inside and out wash!"
            icon={fullCarLogo}
          />
          <ServiceBox
            header="Interior Wash"
            description="For when the inside needs a littly tidying we're here to do just that!"
            icon={interiorCarLogo}
          />
          <img src={shinyEntierCar} alt="Shiny car" className="service-box" />
          <ServiceBox
            header="Much More"
            description="Click on any of the Learn More buttons and learn more about these offers and the prices of the offers!"
            icon={andMoreCarLogo}
          />
          <img
            src={cleanInteriorCar}
            alt="Clean interior of car"
            className="service-box"
          />
        </div>

        <Button
          btnText="LEARN MORE"
          btnRoute={ROUTES.SERVICES_AND_PRICING}
          btnClass="section-btn"
        />
      </div>
    </section>
  );
}

function ServiceBox({ header, description, icon }) {
  // Changes state to show button and description when user hovers over box
  const [activeHover, setActiveHover] = useState(false);

  const changeHover = (boolean) => setActiveHover(boolean);

  return (
    <div
      onMouseEnter={() => changeHover(true)}
      onMouseLeave={() => changeHover(false)}
      className={activeHover ? "active-hover service-box" : "service-box"}
    >
      <div className="service-box-wrapper">
        <img src={icon} className="service-box-icon" alt="Car Wash Icons" />
        <h3 className="service-box-header">{header}</h3>
        <div className="header-line"></div>

        <div className="service-box-transition">
          <p className="service-box-description">{description}</p>
          <Button
            btnText="Learn More"
            btnRoute={ROUTES.SERVICES_AND_PRICING}
            btnClass="service-box-btn"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
