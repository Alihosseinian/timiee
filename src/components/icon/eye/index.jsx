/* eslint-disable react/prop-types */
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import eye_slashLogo from "../../../assets/eye-slash.svg";
import eyeLogo from "../../../assets/eye.svg";
import "./style.scss";

const Eyeslash = (props) => {
  return (
    <button className="btn" onClick={props.toggle} type="button">
      <img src={props.check ? eye_slashLogo : eyeLogo} className="eye_slash" />
    </button>
  );
};

export default Eyeslash;
