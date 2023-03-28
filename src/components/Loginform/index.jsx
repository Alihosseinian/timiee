/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react";

import appleLogo from "../../assets/apple_icon.svg";
import gmailLogo from "../../assets/google_icon.svg";
import facebookLogo from "../../assets/facebook_icon.svg";

import Inputfield from "../input/index";
import Button from "../button/index";
import Social from "../icon/social/index";

import "./style.scss";

const LoginForm = (props) => {
  return (
    <div
      className="Loginform"
      style={{ opacity: props.page == "login" ? "100" : "0" }}
    >
      <div className="question">
        <span>
          Not a member? &nbsp;
          <a className="register" href="#" onClick={props.handleClick}>
            Resgister now
          </a>
        </span>
      </div>
      <div className="form">
        <div className="section">
          <div className="title">
            <h2>Hello Again!</h2>
            <p>Wellcome back you&apos;ve been missed!</p>
          </div>
          <form className="input-box">
            <Inputfield
              type="text"
              placeholder="Enter username"
              className="username"
            />
            <Inputfield
              type="password"
              placeholder="Password"
              className="password"
              isPassword
            />
            <div className="recovery-password">
              <a className="recovery-link" href="#">
                Recovery Password
              </a>
            </div>
            <Button className="submit" type="submit">
              Sign In
            </Button>
          </form>
          <div className="footer">
            <div className="tittle-continue">
              <span className="line">
                <span className="inner">Or continue with</span>
              </span>
            </div>
            <div className="icon">
              <Social className="logo" src={gmailLogo} alt="gmailLogo" />
              <Social className="logo" src={appleLogo} alt="gmailLogo" />
              <Social className="logo" src={facebookLogo} alt="gmailLogo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
