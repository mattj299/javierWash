import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { FaPhoneAlt, FaFacebookF } from "react-icons/fa";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";

import * as ROUTES from "../routes/routes";

function Footer() {
  return (
    <>
      <IconContext.Provider value={{ className: "footer-react-icons" }}>
        <section
          className="footer"
          // style={{
          //   backgroundImage:
          //     "linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ) ,url(/images/bg-section-abstract3.jpg)",
          // }}
        >
          <div className="footer-wrapper container">
            <div className="footer-pages">
              <h1 className="footer-header">More</h1>
              <ul className="footer-menu">
                <li className="footer-item">
                  <Link to={ROUTES.HOME} className="footer-link">
                    Home
                  </Link>
                </li>
                <li className="footer-item">
                  <Link to={ROUTES.ABOUT} className="footer-link">
                    About
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    to={ROUTES.SERVICES_AND_PRICING}
                    className="footer-link"
                  >
                    Services & Pricing
                  </Link>
                </li>
                <li className="footer-item">
                  <Link to={ROUTES.CONTACTS} className="footer-link">
                    Contacts
                  </Link>
                </li>
                <li className="footer-item">
                  <Link to={ROUTES.FAQ} className="footer-link">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-contacts">
              <h1 className="footer-header">Contact Us</h1>
              <ul className="footer-menu">
                <li className="footer-item">
                  <Link to={ROUTES.CONTACTS} className="footer-link">
                    <FaPhoneAlt /> (000) 000-0000
                  </Link>
                </li>
                <li className="footer-item">
                  <Link to={ROUTES.CONTACTS} className="footer-link">
                    <HiOutlineMail /> email@example.com
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    to={ROUTES.CONTACTS}
                    className="footer-link footer-facebook"
                  >
                    <FaFacebookF /> @example_name
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    to={ROUTES.CONTACTS}
                    className="footer-link footer-location"
                  >
                    <HiLocationMarker /> Simi Valley CA,
                  </Link>
                </li>
                <li className="footer-item">
                  <Link
                    to={ROUTES.CONTACTS}
                    className="footer-link footer-location"
                  >
                    All surrounding areas
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </IconContext.Provider>
      <Copyright />
    </>
  );
}

function Copyright() {
  return (
    <div className="footer-copyright">
      <div className="footer-copyright-wrapper container">
        <Link to={ROUTES.HOME}>
          <div className="copyright-brand">
            <img
              className="copyright-car-wash-logo"
              src="images/logo1.png"
              alt="Car Wash Icon"
            />
            <p>Javier Car Wash</p>
          </div>
        </Link>
        <p className="copyright">Javier Car Wash © 2021</p>
      </div>
    </div>
  );
}

export default Footer;
