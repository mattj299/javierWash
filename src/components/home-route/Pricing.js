import React from "react";
import "./Pricing.css";
import { GiSoap, GiVacuumCleaner } from "react-icons/gi";
import { RiCarWashingFill } from "react-icons/ri";

import Button from "../Button";

import * as ROUTES from "../../routes/routes";
import { IconContext } from "react-icons/lib";

function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing-wrapper container">
        <h1 className="section-header">Pricing</h1>
        <div className="header-line"></div>
        <div className="header-line"></div>
        <p className="pricing-description section-description">
          <strong>These are not the final prices! </strong>First we need to see
          the car to decide, prices also vary depending on size of car. These
          are just a few prices of our most popular options. We have tons of
          options! Click learn more to see all of our prices.
        </p>

        <div className="pricing-cards">
          <PricingCard
            icon={<GiSoap />}
            title="Exterior Wash"
            price="$20"
            liOne="Hand Washed"
            liTwo="Sparkles on the outside"
            liThree="Satisfaction guaranteed"
          />
          <PricingCard
            icon={<RiCarWashingFill />}
            title="Inside and Out"
            price="$30"
            liOne="Entire car shiny and clean"
            liTwo="All done by hand"
            liThree="Satisfaction guaranteed"
          />
          <PricingCard
            icon={<GiVacuumCleaner />}
            title="Interior Wash"
            price="$20"
            liOne="Vacuum all dirt"
            liTwo="Clean smudges inside"
            liThree="Satisfaction guaranteed"
          />
        </div>
        <Button
          btnClass="section-btn"
          btnRoute={ROUTES.SERVICES_AND_PRICING}
          btnText="LEARN MORE"
        />
      </div>
    </section>
  );
}

function PricingCard({ icon, title, price, liOne, liTwo, liThree }) {
  return (
    <IconContext.Provider value={{ className: "pricing-card-icon" }}>
      <div className="pricing-card">
        <div className="pricing-card-wrapper">
          {/* icon */}
          <div className="pricing-card-icon-wrapper">{icon}</div>

          {/* title */}
          <h3 className="pricing-card-title">{title}</h3>

          {/* price */}
          <h2 className="pricing-card-price">{price}</h2>
          <p className="pricing-card-per-car">per car</p>

          <ul className="pricing-card-list">
            <li className="pricing-card-list-item">{liOne}</li>
            <li className="pricing-card-list-item">{liTwo}</li>
            <li className="pricing-card-list-item">{liThree}</li>
          </ul>

          <Button
            btnText="LEARN MORE"
            btnRoute={ROUTES.SERVICES_AND_PRICING}
            btnClass="pricing-card-btn"
          />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
