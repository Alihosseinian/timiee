import React from "react";
import "./style.scss";
import Social from "../icon/social/index";
import right from "../../assets/chevron-right.svg";

const ListPage = () => {
  return (
    <div className="listpage">
      <div className="addbtn">
        <button className="botton">add</button>
      </div>
      <div>
        <ul className="list">
          <li className="listitem">
            <p>ali</p>
            <Social className="logo" src={right} />
          </li>
          <li className="listitem">
            <p>ata</p>
            <Social className="logo" src={right} />
          </li>
          <li className="listitem">
            <p>parham</p>
            <Social className="logo" src={right} />
          </li>
          <li className="listitem">
            <p>shahab</p>
            <Social className="logo" src={right} />
          </li>
          <li className="listitem">
            <p>alilog</p>
            <Social className="logo" src={right} />
          </li>
          <li className="listitem">
            <p>heidye</p>
            <Social className="logo" src={right} />
          </li>
          <li className="listitem">
            <p>yasi</p>
            <Social className="logo" src={right} />
          </li>
          <li className="listitem">
            <p>kimia</p>
            <Social className="logo" src={right} />
          </li>
          <li className="listitem">
            <p>mahtab</p>
            <Social className="logo" src={right} />
          </li>
          <li className="listitem">
            <p>amir</p>
            <Social className="logo" src={right} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListPage;
