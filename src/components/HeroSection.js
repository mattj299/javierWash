import React from "react";
import "./HeroSection.css";
import Button from "./Button";

import * as ROUTES from "../routes/routes";

// FullPage either true for full, false for about half the page
// Color is either only black or white
// bgGradientColor either black-bg or white-bg
// Other props are strings

function HeroSection({
  fullPage,
  h1Text,
  pText,
  backgroundImage,
  flip,
  color,
  bgGradientColor,
  heroClass,
}) {
  return (
    <div
      className={fullPage ? `full-hero hero-section` : `half-hero hero-section`}
      style={{ color }}
    >
      <div
        className={
          flip
            ? `hero-background flip-background ${heroClass}`
            : `hero-background ${heroClass}`
        }
        style={{ backgroundImage }}
      ></div>
      <div className="hero-text">
        <div
          className={
            fullPage
              ? "full-text-wrapper hero-text-wrapper container"
              : "half-text-wrapper hero-text-wrapper container"
          }
        >
          <h1 className="hero-header">{h1Text}</h1>
          <p className="hero-description">{pText}</p>
          <Button
            borderLeft={color}
            btnClass="hero-home-btn"
            btnText="BOOK NOW"
            btnRoute={ROUTES.CONTACTS}
          />
        </div>
      </div>
      <div className={`hero-gradient ${bgGradientColor}`}></div>
    </div>
  );
}

export default HeroSection;
