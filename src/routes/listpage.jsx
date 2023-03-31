import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "../components/Modal/index";
import Form from "../components/Form/index";
import "./ListPageStyle.scss";

const ListPage = () => {
  const [show, setisshow] = useState("false");

  const handleClick = () => {
    if (show === "false") {
      setisshow("true");
    } else if (show === "true") {
      setisshow("false");
    }
  };

  const events = [
    { id: "1", name: "footbal" },
    { id: "2", name: "handball" },
    { id: "3", name: "basketball" },
    { id: "4", name: "baceball" },
    { id: "5", name: "voleyball" },
  ];

  const listitem = events.map((event) => (
    <li className="listitem" key={event.id}>
      <Link to={"/table" + `/${event.name}`}>
        <p>{event.name}</p>
      </Link>
    </li>
  ));
  return (
    <div className="listpage">
      <div className="addbtn">
        <button onClick={handleClick} className="botton">
          add
        </button>
        <Modal className={show === "false" ? "hidden" : "show"}>
          <Form />
        </Modal>
      </div>
      <div>
        <ul className="list">{listitem}</ul>
      </div>
    </div>
  );
};

export default ListPage;
