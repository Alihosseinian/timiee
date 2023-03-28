import React from "react";
import { useState } from "react";

import LoginForm from "../components/Loginform/index";
import SignupForm from "../components/Signupform/index";

import "./LoginPageStyle.scss";

const LoginPage = () => {
  let [page, setIsShown] = useState("signup");

  const handleClick = () => {
    if (page === "signup") {
      setIsShown("login");
    } else if (page === "login") {
      setIsShown("signup");
    }
  };
  return (
    <div className="page">
      <div className="container">
        <div
          className={
            "image-box" + " " + (page === "login" ? "login" : "signup")
          }
        />
        <LoginForm page={page} handleClick={handleClick} />
        <SignupForm page={page} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default LoginPage;
