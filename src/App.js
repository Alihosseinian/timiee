/* eslint-disable no-unused-vars */
import appleLogo from "./assets/apple_icon.svg";
import gmailLogo from "./assets/google_icon.svg";
import facebookLogo from "./assets/facebook_icon.svg";
import eye_slashLogo from "./assets/eye-slash.svg";

import Inputfield from "./components/input/index";

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
                <div className="username-container">
                  <Inputfield
                    type="text"
                    placeholder="Enter username"
                    className="username"
                  />
                </div>
                <div className="password-container">
                  <Inputfield
                    type="password"
                    placeholder="Password"
                    className="password"
                  />
                  <img
                    src={eye_slashLogo}
                    alt="eye slashLogo"
                    className="eye_slash"
                  />
                </div>
                <div className="recovery-password">
                  <button className="recovery-button" href="#">
                    Recovery Password
                  </button>
                </div>
                <button
                  type="submit"
                  className="submit"
                  placeholder="Sign In"
                ></button>
              </form>
              <div className="footer">
                <div className="tittle-continue">
                  <span className="line">
                    <span className="inner">Or continue with</span>
                  </span>
                </div>
                <div className="icon">
                  <button className="gmail">
                    <img src={gmailLogo} alt="gmailLogo" />
                  </button>
                  <button className="apple-id">
                    <img src={appleLogo} alt="appleLogo" />
                  </button>
                  <button className="facebook">
                    <img src={facebookLogo} alt="facebookLogo" />
                  </button>
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
