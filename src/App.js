/* eslint-disable no-dupe-else-if */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";

import LoginForm from "./components/login-form/index";
import SignupForm from "./components/signup-form/index";

import "./App.css";

function App() {
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
}
export default App;
