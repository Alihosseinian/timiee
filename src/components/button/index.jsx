/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import React from "react";
import "./style.scss";

const Button = (props) => {
  return (
    <button
      className={props.className + " " + "button"}
      type={props.type}
      placeholder={props.placeholder}
    >
      {props.children}
    </button>
  );
};

export default Button;
