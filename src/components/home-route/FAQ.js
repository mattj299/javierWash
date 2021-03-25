import React, { useState, useEffect } from "react";
import Button from "../Button";
import "./FAQ.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

import * as ROUTES from "../../routes/routes";
import { IconContext } from "react-icons/lib";

function FAQ() {
  useEffect(() => {
    const setFaqHeight = () => {
      const faqItem = document.getElementsByClassName("faq-item");
      const faqItemHeader = document.getElementsByClassName("faq-item-header");

      for (let i = 0; i < faqItem.length; i++) {
        const headerHeight = faqItemHeader[i].offsetHeight;

        faqItem[i].style.height = headerHeight + "px";
      }
    };

    window.addEventListener("resize", setFaqHeight);

    setFaqHeight();

    return () => {
      window.removeEventListener("resize", setFaqHeight);
    };
  }, []);

  return (
    <section className="faq">
      <div className="faq-wrapper container">
        <h1 className="section-header">FAQ</h1>
        <div className="header-line"></div>
        <div className="header-line"></div>

        <p className="faq-description section-description">
          Here are a few of our most asked questions. If there are any questions
          you may have please check the FAQ page, if not on the FAQ page don't
          be afraid to call!
        </p>

        <div className="faq-items">
          <ul className="faq-items-ul">
            <FrequentlyAskedItem
              question=" How long does a car wash take?"
              answer="It depends on many things such as how dirty the car is, if I am doing it by myself or with some helpers such as my sons, or what type of car wash you would like since wax takes me more time then just a wash."
            />
            <FrequentlyAskedItem
              question="Is it always the same price?"
              answer="It depends. If your car is extra dirty I may have to charge extra, same goes for if you live farther than expected since I do have to drive over there."
            />
            <FrequentlyAskedItem
              question="Why would I choose Javier Car Wash over another Car Wash?"
              answer="Every car wash we do we do well even if it's fast it's still done with quality. Unlike other car washes we take quality over quantity so even though we do it fast we don't rush to finish unless you need your car as soon as possible."
            />
          </ul>
        </div>

        <Button
          btnClass="section-btn"
          btnRoute={ROUTES.FAQ}
          btnText="LEARN MORE"
        />
      </div>
    </section>
  );
}

function FrequentlyAskedItem({ question, answer }) {
  const [selected, setSelected] = useState(false);

  // event is click event
  const changeSelected = (event) => {
    setSelected(!selected);

    // Looks for closest elements with these classes to toggle height when clicked
    const faqItem = event.target.closest(".faq-item");
    const faqItemHeader = event.target.closest(".faq-item-header");
    const faqItemExtend = event.target
      .closest(".faq-item")
      .querySelector(".faq-item-extend");

    const headerHeight = faqItemHeader.offsetHeight;
    const extendHeight = faqItemExtend.offsetHeight;

    // When faqItem is clicked toggle height to show or hide content
    // Change height from header to header+answer height then toggle back and forth
    if (!selected) {
      const extendedHeight = headerHeight + extendHeight;
      faqItem.style.height = extendedHeight + 16 + "px";
    } else {
      faqItem.style.height = headerHeight + "px";
    }
  };

  useEffect(() => {
    // When browser resizes this closes all faq items
    const selectedFalse = () => setSelected(false);

    window.addEventListener("resize", selectedFalse);

    return () => {
      window.removeEventListener("resize", selectedFalse);
    };
  }, []);

  return (
    <IconContext.Provider value={{ className: "faq-item-icon" }}>
      <li className={selected ? "faq-item selected" : "faq-item"}>
        <div
          className="faq-item-header"
          onClick={(event) => {
            changeSelected(event);
          }}
        >
          {selected ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
          <p className="faq-item-question">{question}</p>
        </div>

        <div className="faq-item-extend">
          <p className="faq-item-answer">{answer}</p>
        </div>
      </li>
    </IconContext.Provider>
  );
}
export default FAQ;
