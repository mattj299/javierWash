import React, { useEffect } from "react";
import HeroSection from "../HeroSection";
import AboutRoute from "../about-route/AboutRoute";

function AboutPage() {
  useEffect(() => {
    // Adds active to nav link so it's highlighted red
    const navAboutLink = document.querySelector(".nav-about-link");
    navAboutLink.classList.add("active");
    return () => {
      // Removes active to nav link so it's not highlighted red
      navAboutLink.classList.remove("active");
    };
  });

  return (
    <>
      <HeroSection
        fullPage={false}
        h1Text="About Us"
        pText="A little more about Javier Car Wash."
        backgroundImage="url(/images/bg-section-choose-us.jpg)"
        color="white"
        flip={false}
        bgGradientColor="black-bg"
        heroClass="about-route-hero"
      />
      <AboutRoute />
    </>
  );
}

export default AboutPage;
