import React, { useState } from "react";
import "./style.scss";

const Form = () => {
  const [eventname, seteventname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(eventname);
  };

  return (
    <div className="boxform">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="please enter your name : "
          className="input_container"
          onChange={(event) => {
            var tempname = { name: event.target.value };
            seteventname(tempname);
          }}
        />
        <button className="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
