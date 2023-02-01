import React from "react";
import "./style.scss";
import eye_slashLogo from "../../assets/eye-slash.svg";

const Eyeslash = () => {
  return (
    <div className="icon">
      <img src={eye_slashLogo} alt="eye slashLogo" className="eye_slash" />;
    </div>
  );
};

export default Eyeslash;
