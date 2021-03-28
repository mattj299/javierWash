import React, { useEffect } from "react";
import HeroSection from "../HeroSection";
import FaqRoute from "../faq-route/FaqRoute";

import heroImg3 from "../../images/hero-image3.jpg";

function FAQPage() {
  useEffect(() => {
    // Adds active to nav link so it's highlighted red
    const navFAQPage = document.querySelector(".nav-faq-link");
    navFAQPage.classList.add("active");
    return () => {
      // Removes active to nav link so it's not highlighted red
      navFAQPage.classList.remove("active");
    };
  });

  return (
    <>
      <HeroSection
        fullPage={false}
        h1Text="Frequently Asked Questions"
        pText="Some of the most asked questions."
        flip={true}
        backgroundImage={`url(${heroImg3})`}
        color="white"
        bgGradientColor="black-bg"
      />
      <FaqRoute />
    </>
  );
}

export default FAQPage;
