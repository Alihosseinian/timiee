/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

import appleLogo from "../../assets/apple_icon.svg";
import gmailLogo from "../../assets/google_icon.svg";
import facebookLogo from "../../assets/facebook_icon.svg";

import Inputfield from "../input/index";
import Button from "../button/index";
import Social from "../icon/social/index";
import "./style.scss";

const SignupForm = (props) => {
  return (
    <div
      className="sign-up-form"
      style={{ opacity: props.page == "signup" ? 1 : 0 }}
    >
      <div className="form">
        <div className="section">
          <div className="title">
            <h2>Create an account!</h2>
            <p>Lets get started with your 30 day free trial!</p>
          </div>
          <form className="input-box">
            <Inputfield type="text" placeholder="Name" className="username" />
            <Inputfield type="email" placeholder="Email" className="username" />
            <Inputfield
              type="password"
              placeholder="Password"
              className="password"
              isPassword
            />
            <Link to="/list" className="link">
              <Button className="submit" type="submit">
                Create account
              </Button>
            </Link>
          </form>
          <div className="footer">
            <div className="icon">
              <Social className="logo" src={gmailLogo} alt="gmailLogo" />
              <Social className="logo" src={appleLogo} alt="gmailLogo" />
              <Social className="logo" src={facebookLogo} alt="gmailLogo" />
            </div>
            <div id="question" className="question">
              <span>
                Already Have an account?
                <a className="register" href="#" onClick={props.handleClick}>
                  Login now
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
