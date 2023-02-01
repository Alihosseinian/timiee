import React from "react";
import "./style.scss";

const Button = (props) => {
  return (
    <button className={props.className}>
      <img src={facebookLogo} alt="facebookLogo" />
    </button>
  );
};

export default Button;
