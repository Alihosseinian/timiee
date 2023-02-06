/* eslint-disable react/prop-types */
import React from "react";
import Eyeslash from "../icon/eye/index";
import "./styles.scss";

const Inputfield = (props) => {
  return (
    <div className="input_container">
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        value={props.value}
        required
      />
      {props.isPassword && <Eyeslash />}
    </div>
  );
};

export default Inputfield;
