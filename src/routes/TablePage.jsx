import React, { useState } from "react";
// import React from "react";
import { useLocation, Link } from "react-router-dom";

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

  const [events, setevents] = useState([]);
  console.log(events);

  const handleChange = (Day, Hour) => {
    const find = events.find((item) => item.day === Day && item.hour === Hour);
    if (find != undefined) {
      var find_index = events.findIndex((item) => item === find);
    }
    !find
      ? setevents([...events, { day: Day, hour: Hour }])
      : events.splice(find_index, 1);
    console.log(events);
  };

  return (
    <div className="tablepage">
      <h3>this table for {event} </h3>
      <table className="table">
        <tbody>
          {days.map((day) => (
            <tr key={day}>
              <td>{day}</td>
              {hours.map((hour) =>
                day === "" ? (
                  <td key={hour}>{hour}</td>
                ) : (
                  <td key={hour}>
                    <input
                      type="checkbox"
                      onChange={() => {
                        handleChange(day, hour);
                      }}
                    />
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="backwardbtn">
        <Link to="/list">
          <button className="botton">back</button>
        </Link>
      </div>
    </div>
  );
};

export default tablepage;
