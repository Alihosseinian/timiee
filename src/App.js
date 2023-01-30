import "./App.css";
import appleLogo from "./assets/apple_icon.svg";
import gmailLogo from "./assets/google_icon.svg";
import facebookLogo from "./assets/facebook_icon.svg";
import eye_slashLogo from "./assets/eye-slash.svg";

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
            <p>Wellcome back you've been missed!</p>
          </div>
          <form className="input-box">
            <div className="username-container">
            <input type="text" placeholder="Enter username" className="username"required></input>
            </div>
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
              <button  className="recovery-button" href="#">Recovery Password</button>
            </div>
            <input type="submit" className="submit" value="Sign In"></input>
          </form>
          <div className="footer">
            <div className="tittle-continue">
            <span className="line">
              <span className="inner">Or continue with</span>
            </span>
            </div>
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
    </div>
    </div>
  );
}
export default App;
