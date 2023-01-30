import "./App.css";
import appleLogo from "./assets/apple_icon.svg";
import gmailLogo from "./assets/google_icon.svg";
import facebookLogo from "./assets/facebook_icon.svg";
import eye_slashLogo from "./assets/eye-slash.svg";

function App() {
  return (
    <div className="container">
      <div className="image-box" />
      <div className="login-form">
        <div className="question">
          <p>
            Not a member?
            <span> </span>
            <span> </span>
            <a className="register" href="#">
              Resgister now
            </a>
          </p>
        </div>
        <div className="form">
          <div className="title">
            <h2>Hello Again!</h2>
            <p>wellcome back you've been missed!</p>
          </div>
          <form className="input-box">
            <input type="text" placeholder="Enter username" required></input>
            <div className="password-container">
              <input
                type="password"
                placeholder="Password"
                className="password"
                required
              ></input>
              <img src={eye_slashLogo} alt="eye slashLogo" className="eye_slash" />
            </div>
            <div className="recovery-password">
              <a href="#">Recovery Password</a>
            </div>
            <input type="submit" className="submit" value="Sign In"></input>
          </form>
          <div className="footer">
            <p className="line">Or continue with</p>
            <div className="icon">
              <div className="gmail">
                <img src={gmailLogo} alt="gmailLogo" />
              </div>
              <div className="apple-id">
                <img src={appleLogo} alt="appleLogo" />
              </div>
              <div className="facebook">
                <img src={facebookLogo} alt="facebookLogo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
