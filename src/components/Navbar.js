import React, { useState, useEffect } from "react";
import "./Navbar.css";
import CircleType from "circletype";
import { IconContext } from "react-icons/lib";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import * as ROUTES from "../routes/routes";

import logo1 from "../images/logo1.png";

function Navbar() {
  // useState used to see if menu is being displayed when on smaller screens
  const [activeMenu, setActiveMenu] = useState(false);

  const handleShowMenu = () => setActiveMenu(!activeMenu);

  const removeMenu = () => setActiveMenu(false);

  const closeMenu = () => {
    if (window.innerWidth > 800) {
      removeMenu();
    }
  };

  useEffect(() => {
    // Creates the circle text effect for Javier's
    const circleJavierText = new CircleType(
      document.getElementById("nav-logo-text")
    );

    circleJavierText.radius(65);

    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  });

  return (
    <IconContext.Provider value={{ className: "menu-icon-svg" }}>
      <nav className={activeMenu ? "navbar active" : "navbar"}>
        <div className="nav-wrapper container">
          <Link className="nav-logo-link" to={ROUTES.HOME} onClick={removeMenu}>
            <div className="nav-logo">
              <h2 id="nav-logo-text" className="nav-logo-text">
                Javier's
              </h2>
              <img
                className="nav-img"
                src={logo1}
                // src="images/logo1.png"
                alt="brand-logo"
              />
            </div>
          </Link>
          <div className="menu-icon" onClick={handleShowMenu}>
            {activeMenu ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={activeMenu ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                className="nav-links nav-home-link"
                to={ROUTES.HOME}
                onClick={removeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links nav-about-link"
                to={ROUTES.ABOUT}
                onClick={removeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links nav-services-pricing-link"
                to={ROUTES.SERVICES_AND_PRICING}
                onClick={removeMenu}
              >
                Services & Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-links nav-contacts-link"
                to={ROUTES.CONTACTS}
                onClick={removeMenu}
              >
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-links nav-faq-link"
                to={ROUTES.FAQ}
                onClick={removeMenu}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;
