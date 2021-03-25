import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ btnText, btnRoute, btnClass, borderLeft }) {
  return (
    <Link
      to={btnRoute}
      className={`btn ${btnClass}`}
      style={{ borderLeft: `3px solid ${borderLeft}` }}
    >
      {btnText}
    </Link>
  );
}

export default Button;
