import React from "react";
import { useState } from "react";
import eye_slashLogo from "../../assets/eye-slash.svg";
import eyeLogo from "../../assets/eye.svg";
import "./style.scss";

const Eyeslash = () => {
  const [check, setCheck] = useState(true);

  const toggle = () => {
    setCheck((check) => !check);
    if (check === true) {
      return <img src={eye_slashLogo} className="eye_slash" />;
    } else {
      return <img src={eyeLogo} className="eye_slash" />;
    }
  };

  return (
    <button className="btn" onClick={toggle}>
      <img src={eye_slashLogo} className="eye_slash" />
      {check && <img src={eyeLogo} className="eye_slash" />}
    </button>
  );
};

export default Eyeslash;
