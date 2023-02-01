/* eslint-disable react/prop-types */
import React from "react";
import "./styles.scss";

const Inputfield = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      value={props.value}
      required
    ></input>
  );
};

export default Inputfield;
