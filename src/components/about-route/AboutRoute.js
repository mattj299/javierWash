import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { IconContext } from "react-icons/lib";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

import Button from "../Button";
import * as ROUTES from "../../routes/routes";

import "./AboutRoute.css";

import BgCarousel from "../../images/car-wash-cinematic.jpg";

SwiperCore.use([Navigation, Pagination]);

function AboutRoute() {
  return (
    <>
      <section className="about-route">
        <div className="about-route-wrapper container">
          <h2 className="section-header">Why Choose us</h2>
          <div className="header-line"></div>
          <div className="header-line"></div>

          <div className="about-route-why-choose-us-items">
            <WhyChooseUsItem
              header="High Quality"
              description="Here it's high quality work. We work to get the end product you desire."
              bgNumber="1"
            />
            <WhyChooseUsItem
              header="Family Owned"
              description="I, Javier and my sons are the only ones that go to wash your car. I am the owner but you are the boss, you tell me when and I'll be there ready to wash."
              bgNumber="2"
            />
            <WhyChooseUsItem
              header="Experience"
              description="I've been washing cars for over 10 years so I know how to wash a car with quality."
              bgNumber="3"
            />
            <WhyChooseUsItem
              header="Range of Services"
              description="We offer normal car wash. We can also polish, wax, detail, and do more to your car just let us know and we'll schedule what you need for your car."
              bgNumber="4"
            />
            <WhyChooseUsItem
              header="Convenience"
              description="We drive to you whether it's at home or at work you tell us where to go and we can schedule a time to wash your car with no difficulty setting it up so it's for your convenience."
              bgNumber="5"
            />
            <WhyChooseUsItem
              header="Efficiency"
              description="We try washing your car at a reasonable speed so not only do we do a quality job but we don't take up a lot of time in your day."
              bgNumber="6"
            />
          </div>

          <Button
            btnRoute={ROUTES.CONTACTS}
            btnText="BOOK NOW"
            btnClass="about-route-choose-us-btn section-btn"
          />
        </div>
      </section>
      <section
        className="about-route-testimonials"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ) ,url(${BgCarousel})`,
        }}
      >
        <h2 className="section-header">Testimonials</h2>
        <div className="header-line"></div>
        <div className="header-line"></div>
        <TestimonialCarousel />
      </section>
    </>
  );
}

function WhyChooseUsItem({ bgNumber, header, description }) {
  return (
    <div className="about-route-choose-us-item">
      <div className="choose-us-item-bg-number">{bgNumber}</div>
      <div className="choose-us-item-header">{header}</div>
      <div className="choose-us-item-description">{description}</div>
    </div>
  );
}

function TestimonialCarousel() {
  return (
    <IconContext.Provider value={{ className: "testimonial-quote" }}>
      <Swiper
        tag="section"
        wrapperTag="ul"
        className="swiper-testimonial"
        id="main"
        navigation
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide tag="li">
          <p className="swiper-text">
            <ImQuotesLeft />I have used Javier's Car Wash for over a year and I
            am very happy every time with the result I get. Personally I think
            it's better than any car wash I've been to and I've tried many but
            none make it as flexible to schedule a wash and as good a quality as
            Javier's Car Wash!
            <span className="anonymous-author">-Anonymous</span>
          </p>
        </SwiperSlide>
        <SwiperSlide tag="li">
          <p className="swiper-text">
            <ImQuotesLeft />
            This is my first time with him washing my car and I am very happy
            not only with the result but with the timing of the wash. Normally I
            would have to take my time to go to a wash but he came to me and it
            fits into my busy schedule perfectly.
            <span className="anonymous-author">-Anonymous</span>
          </p>
        </SwiperSlide>
        <SwiperSlide tag="li">
          <p className="swiper-text">
            <ImQuotesLeft />I like the simplicity of just calling him and
            scheduling an appointment for him to come wash my car instead of
            going and waiting in a waiting area so they can wash my car. I am
            happy with the work and plan on using Javier's car wash in the
            future.
            <span className="anonymous-author">-Anonymous</span>
          </p>
        </SwiperSlide>
        <SwiperSlide tag="li">
          <p className="swiper-text">
            <ImQuotesLeft />I got my car waxed and can I say I am very
            satisfied. My car looks shiny from the outside and in the inside
            too. Overall very much worth the money.
            <span className="anonymous-author">-Anonymous</span>
          </p>
        </SwiperSlide>
      </Swiper>
    </IconContext.Provider>
  );
}

export default AboutRoute;
