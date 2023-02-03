/* eslint-disable no-unused-vars */
import appleLogo from "./assets/apple_icon.svg";
import gmailLogo from "./assets/google_icon.svg";
import facebookLogo from "./assets/facebook_icon.svg";

import Inputfield from "./components/input/index";
import Button from "./components/button/index";
import Eyeslash from "./components/eyeicon/index";

import "./App.css";

function App() {
  return (
    <div className="login-page">
      <div className="container">
        <div className="image-box" />
        <div className="login-form">
          <div className="question">
            <span>
              Not a member?
              <a className="register" href="#">
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
                <div className="password_container">
                  <Inputfield
                    type="password"
                    placeholder="Password"
                    className="password"
                  ></Inputfield>
                  <Eyeslash />
                </div>
                <div className="recovery-password">
                  <button className="recovery-button" href="#">
                    Recovery Password
                  </button>
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
                  <Button className="logo">
                    <img src={gmailLogo} alt="gmailLogo" />
                  </Button>
                  <Button className="logo">
                    <img src={appleLogo} alt="appleLogo" />
                  </Button>
                  <Button className="logo">
                    <img src={facebookLogo} alt="facebookLogo" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
