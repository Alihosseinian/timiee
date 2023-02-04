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
                  >
                    <Eyeslash />
                  </Inputfield>
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
                >
                  <Eyeslash />
                </Inputfield>
                <Button className="submit" type="submit">
                  Create account
                </Button>
              </form>
              <div className="icon-signup">
                <Button className="logo">
                  <img src={facebookLogo} alt="facebookLogo" />
                  <span>Sign up with Facebok</span>
                </Button>
                <Button className="logo">
                  <img src={gmailLogo} alt="gmailLogo" />
                  <span>Sign up with Google</span>
                </Button>
                <Button className="logo">
                  <img src={appleLogo} alt="appleLogo" />
                  <span>Sign up with Apple</span>
                </Button>
              </div>

              <div id="question" className="question">
                <span>
                  َAlready Have an account?
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
  );
}
export default App;
