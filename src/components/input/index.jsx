/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Eyeslash from "../icon/eye/index";
import "./styles.scss";

const Inputfield = (props) => {
  const [check, setCheck] = useState(true);

  const toggle = () => {
    setCheck((check) => !check);
  };
  props.isPassword;
  const type = props.isPassword ? (check ? "password" : "text") : props.type;
  return (
    <div className="input_container">
      <input
        type={type}
        placeholder={props.placeholder}
        className={props.className}
        value={props.value}
        required
      />
      {props.isPassword && <Eyeslash check={check} toggle={toggle} />}
    </div>
  );
};

export default Inputfield;
