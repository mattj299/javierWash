import React, { useEffect } from "react";
import HeroSection from "../HeroSection";
import About from "../home-route/About";
import Services from "../home-route/Services";
import FAQ from "../home-route/FAQ";
import Pricing from "../home-route/Pricing";

function HomePage() {
  useEffect(() => {
    // Adds active to nav link so it's highlighted red
    const navHomeLink = document.querySelector(".nav-home-link");
    navHomeLink.classList.add("active");
    return () => {
      // Removes active to nav link so it's not highlighted red
      navHomeLink.classList.remove("active");
    };
  });

  return (
    <>
      <HeroSection
        fullPage={true}
        h1Text="Javier Mobile Car Wash"
        pText={<>Simi Valley CA and ALL surrounding areas</>}
        flip={true}
        backgroundImage="url(/images/hero-image1.jpg)"
        color="white"
        bgGradientColor="black-bg"
      />
      <About />
      <Services />
      <Pricing />
      <FAQ />
    </>
  );
}

export default HomePage;
