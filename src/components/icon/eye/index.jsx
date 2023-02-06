import React from "react";
import { useState } from "react";
import eye_slashLogo from "../../../assets/eye-slash.svg";
import eyeLogo from "../../../assets/eye.svg";
import "./style.scss";

const Eyeslash = () => {
  const [check, setCheck] = useState(true);

  const toggle = () => {
    setCheck((check) => !check);
  };

  return (
    <button className="btn" onClick={toggle} type="button">
      <img src={check ? eye_slashLogo : eyeLogo} className="eye_slash" />
    </button>
  );
};

export default Eyeslash;
