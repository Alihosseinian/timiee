import React from "react";
// import Form from "../Form/index";
import "./style.scss";

const Modal = (props) => {
  return (
    <div className={props.className + " " + "modal"}>{props.children}</div>
  );
};

export default Modal;
