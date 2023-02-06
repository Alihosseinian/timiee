/* eslint-disable no-unused-vars */
import appleLogo from "./assets/apple_icon.svg";
import gmailLogo from "./assets/google_icon.svg";
import facebookLogo from "./assets/facebook_icon.svg";

import Inputfield from "./components/input/index";
import Button from "./components/button/index";
import Social from "./components/icon/social/index";

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
        <div className="sign-up-form">
          <div className="form">
            <div className="section">
              <div className="title">
                <h2>Create an account!</h2>
                <p>Lets get started with your 30 day free trial!</p>
              </div>
              <form className="input-box">
                <Inputfield
                  type="text"
                  placeholder="Name"
                  className="username"
                />
                <Inputfield
                  type="email"
                  placeholder="Email"
                  className="username"
                />
                <Inputfield
                  type="password"
                  placeholder="Password"
                  className="password"
                  isPassword
                />
                <Button className="submit" type="submit">
                  Create account
                </Button>
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
                    <a className="register" href="#">
                      Login now
                    </a>
                  </span>
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
