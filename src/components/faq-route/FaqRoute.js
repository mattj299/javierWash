import React, { useState, useEffect } from "react";
import "./FaqRoute.css";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

function FaqComponent() {
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
    <section className="faq-route">
      <div className="faq-route-wrapper container">
        <h2 className="section-header">FAQ</h2>
        <div className="header-line"></div>
        <div className="header-line"></div>

        <p className="faq-route-description section-description">
          Here are all of the most asked questions that we have received during
          all of our customers car washes. If the questions that you have are
          not on here, please give us a call! We will answer any questions you
          have!
        </p>

        <div className="faq-route-items">
          <ul className="faq-route-items-ul">
            <FrequentlyAskedItem
              question="How long does a car wash take?"
              answer="It depends on many things such as how dirty the car is, if I am 
              doing it by myself or with some helpers such as my sons, or what type of car wash you 
              would like since wax takes me more time then just a wash. But most likely by myself it would take about 30 - 45 minutes per car."
            />
            <FrequentlyAskedItem
              question="How much exactly for a car wash?"
              answer="It depends. If your car is extra dirty I may have to charge extra, same goes for
               if you live farther than expected since I do have to drive over there."
            />
            <FrequentlyAskedItem
              question="Why would I choose Javier Car Wash over another Car Wash?"
              answer="Every car wash we do we do well even if it's fast it's still done with quality. 
              Unlike other car washes we take quality over quantity so even though we do it fast we don't rush 
              to finish unless you need your car as soon as possible."
            />
            <FrequentlyAskedItem
              question="How often do I have to wash my car?"
              answer="If you use Javier Car Wash you can wash it whenever you'd like. We charge the same price 
              if you consistently wash with us but if you don't then the price will go up."
            />
            <FrequentlyAskedItem
              question="How do I schedule a car wash?"
              answer="Simply by calling and saying you want a car wash we will find a time that works so 
              we can do the car wash. Please call in advance to the car wash not of the day that you want the car wash."
            />
            <FrequentlyAskedItem
              question="What happens if you steal something or scratch my car?"
              answer="We've been washing cars for over 10 years and we promise you that not once 
              have we stole, crashed, scratched, or done any harm to the car or anything inside the car. 
              You pay me for my service and I do my service, that is what I was called for."
            />
            <FrequentlyAskedItem
              question="Does the type of car matter for the prices?"
              answer="Yes, for the most part the bigger the car the more it's going to cost from SUV to trucks it's going to be different."
            />
            <FrequentlyAskedItem
              question="Do you come to my house or do I have to go to you?"
              answer="We are a mobile car wash so we go to you. You call me and text me your address, we 
              schedule a date and time, then we go to wash your car at your house or if you like your work. Whatever is more convenient to you."
            />
            <FrequentlyAskedItem
              question="How do I pay?"
              answer="We accept different types of payment but the ones we use is either physical cash or Venmo. 
              If you cannot pay these ways then please talk to me beforehand and we will find a solution."
            />
            <FrequentlyAskedItem
              question="How far will you go for a car wash?"
              answer="Normally I go to places around Simi Valley because I myself live in Simi Valley. I will 
              go to the surrounding places around Simi most likely not farther. I will go farther to wash your car 
              if you don't mind being charged a small extra amount, I don't know the exact amount but please call me 
              and we will work together to see if I can wash your car."
            />
            <FrequentlyAskedItem
              question="Can you wash more than one of my cars?"
              answer="Yes I can but before I go please tell me how many cars you need me to wash because sometimes 
              I have other clients for the day and I need to know how many cars to wash so I can finish and arrive 
              to wash my other clients car on the time that was scheduled."
            />
          </ul>
        </div>
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

export default FaqComponent;
