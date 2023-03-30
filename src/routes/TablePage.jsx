import React from "react";
import { useLocation } from "react-router-dom";

import "./TablePageStyle.scss";
const tablepage = () => {
  const location = useLocation();
  const parseurl = location.pathname.split("/");
  const lastitem = parseurl.length;
  const event = parseurl[lastitem - 1];

  const days = [
    "",
    "saturday",
    "sunday",
    "mondey",
    "tuesday",
    "wednesday",
    "thrusday",
    "friday",
  ];
  const hours = [
    8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  ];

  // const houritems = hours.map((hour, index) => <td key={index}>{hour}</td>);
  // const nullitem = hours.map((hour, index) => (
  //   <td key={index}>
  //     <div className="checkevent">
  //       <p className="event">...</p>
  //       <input
  //         type="checkbox"
  //         // defaultChecked={this.state.chkbox}
  //         // onChange={this.handleChangeChk}
  //       />
  //     </div>
  //   </td>
  // ));

  const dayitems = days.map((day, index) => (
    <tr key={index}>
      <td>{day}</td>
      {index == 0
        ? hours.map((hour, index) => <td key={index}>{hour}</td>)
        : hours.map((hour, index) => <td key={index}></td>)}
    </tr>
  ));

  return (
    <div className="tablepage">
      <h3>this table for {event} </h3>
      <table className="table">
        <tbody>{dayitems}</tbody>
      </table>
    </div>
  );
};

export default tablepage;
