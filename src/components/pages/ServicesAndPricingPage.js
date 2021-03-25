import React, { useEffect } from "react";
import HeroSection from "../HeroSection";
import ServicesAndPricingRoute from "../services-pricing-route/ServicesAndPricingRoute";

function ServicesAndPricingPage() {
  useEffect(() => {
    // Adds active to nav link so it's highlighted red
    const navServicesPricingLink = document.querySelector(
      ".nav-services-pricing-link"
    );
    navServicesPricingLink.classList.add("active");
    return () => {
      // Removes active to nav link so it's not highlighted red
      navServicesPricingLink.classList.remove("active");
    };
  });
  return (
    <>
      <HeroSection
        fullPage={false}
        h1Text="Services and Pricing"
        pText="Best services at affordable prices!"
        backgroundImage="url(/images/hero-image7.jpg)"
        color="white"
        bgGradientColor="black-bg"
      />
      <ServicesAndPricingRoute />
    </>
  );
}

export default ServicesAndPricingPage;
