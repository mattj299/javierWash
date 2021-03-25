import React from "react";
import "./ScrollTopButton.css";
import { IoArrowUpCircle } from "react-icons/io5";
import { IconContext } from "react-icons/lib";

function ScrollTopButton() {
  function scrollWhenClicked() {
    const htmlTag = document.getElementsByTagName("html")[0];

    htmlTag.style.scrollBehavior = "smooth";

    setTimeout(() => {
      window.scrollTo(0, 0);
      htmlTag.style.scrollBehavior = "unset";
    }, 100);
  }

  return (
    <IconContext.Provider value={{ className: "scroll-top-icon" }}>
      <div className="scroll-top-button" onClick={scrollWhenClicked}>
        <div className="icon-background"></div>
        <div className="scroll-top-button-wrapper">
          <IoArrowUpCircle />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default ScrollTopButton;
