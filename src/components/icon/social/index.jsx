/* eslint-disable react/prop-types */
import React from "react";
import Button from "../../button/index";

import "./style.scss";

const Social = (props) => {
  return (
    <Button className={props.className}>
      <img src={props.src} alt={props.alt} />
    </Button>
  );
};

export default Social;
