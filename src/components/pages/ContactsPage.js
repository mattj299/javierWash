import React, { useEffect } from "react";
import HeroSection from "../HeroSection";
import ContactsRoute from "../contacts-route/ContactsRoute";

function ContactsPage() {
  useEffect(() => {
    // Adds active to nav link so it's highlighted red
    const navContactsLink = document.querySelector(".nav-contacts-link");
    navContactsLink.classList.add("active");
    return () => {
      // Removes active to nav link so it's not highlighted red
      navContactsLink.classList.remove("active");
    };
  });

  return (
    <>
      <HeroSection
        fullPage={false}
        h1Text="Book A Wash!"
        pText="Don't be afraid, we're one call away!"
        backgroundImage="url(/images/hero-image4.jpg)"
        color="white"
        flip={true}
        bgGradientColor="black-bg"
      />
      <ContactsRoute />
    </>
  );
}

export default ContactsPage;
